import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        // Read logo image to encode in Base64 for vCard PHOTO field
        const logoPath = path.join(process.cwd(), 'public', 'logo.png');
        let photoBase64 = '';

        if (fs.existsSync(logoPath)) {
            const logoBuffer = fs.readFileSync(logoPath);
            photoBase64 = logoBuffer.toString('base64');
        }

        // Construct RFC 2426 / RFC 6350 compliant vCard string
        const vcardLines = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            'N:;;;;',
            'FN:Garage Maison-Blanche SA',
            'ORG:Garage Maison-Blanche SA',
            'X-ABShowAs:COMPANY',
            'TEL;TYPE=WORK,VOICE;TYPE=PREF:+41227560404',
            'TEL;TYPE=CELL:+41793601347',
            'EMAIL;TYPE=WORK,INTERNET:atelier@garage-maisonblanche.ch',
            'URL:https://garage-maisonblanche.ch',
            'X-SOCIALPROFILE;type=facebook:https://www.facebook.com/profile.php?id=100064107662482',
            'X-SOCIALPROFILE;type=instagram;x-user=garage_maisonblanche:https://www.instagram.com/garage_maisonblanche',
            'URL;TYPE=Facebook:https://www.facebook.com/profile.php?id=100064107662482',
            'URL;TYPE=Instagram:https://www.instagram.com/garage_maisonblanche',
            'ADR;TYPE=WORK,POSTAL,PARCEL:;;Route de Chancy 500;Chancy;GE;1284;Suisse',
            'LABEL;TYPE=WORK,POSTAL,PARCEL:Route de Chancy 500\\n1284 Chancy\\nSuisse',
            'GEO:46.138;5.968',
            'NOTE:Garage Maison-Blanche SA\\nLun - Jeu: 07h30 - 12h00 / 13h30 - 18h00\\nVendredi: 07h30 - 12h00 / 13h30 - 17h00',
        ];

        if (photoBase64) {
            // Fold base64 string at 75 chars per RFC 2426 specification for iOS parser compatibility
            const photoRaw = `PHOTO;TYPE=PNG;ENCODING=b:${photoBase64}`;
            const foldedPhoto = photoRaw.match(/.{1,75}/g)?.join('\r\n ') || photoRaw;
            vcardLines.push(foldedPhoto);
        }

        vcardLines.push('END:VCARD');

        const vcardContent = vcardLines.join('\r\n') + '\r\n';

        return new NextResponse(vcardContent, {
            status: 200,
            headers: {
                'Content-Type': 'text/vcard; charset=utf-8',
                'Content-Disposition': 'inline; filename="garage-maisonblanche.vcf"',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
            },
        });
    } catch {
        return new NextResponse('Erreur lors de la génération de la vCard', { status: 500 });
    }
}
