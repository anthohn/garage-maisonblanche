
import ModernButton from "@/app/components/ui/ModernButton";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center bg-gray-50">
            <h1 className="text-9xl font-extrabold text-gray-200 select-none">404</h1>
            <div className="absolute mt-[-2rem]">
                <h2 className="text-3xl font-bold text-gray-800">Oups ! Page introuvable</h2>
            </div>

            <p className="text-gray-600 mt-8 mb-8 max-w-md z-10">
                La page que vous recherchez semble avoir été déplacée, supprimée ou n'existe pas.
            </p>

            <ModernButton href="/" variant="primary" className="shadow-lg">
                Retour à l'accueil
            </ModernButton>
        </div>
    );
}
