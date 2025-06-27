'use client'
import { useState, useEffect, useTransition } from "react";
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import Image from "next/image";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageToggle() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  
  // État pour l'animation "fausse" qui ne dépend pas de la vraie locale
  const [visualState, setVisualState] = useState<'en' | 'fr'>(locale as 'en' | 'fr');
  const [isAnimating, setIsAnimating] = useState(false);

  // visual state avec la vraie locale au montage et changement
  useEffect(() => {
    setVisualState(locale as 'en' | 'fr');
  }, [locale]);

  const handleLanguageChange = () => {
    if (isAnimating || isPending) return;
    
    const nextLocale = locale === "en" ? "fr" : "en";
    
    setIsAnimating(true);
    
    // 1.  animer visuellement (instantané)
    setVisualState(nextLocale);
    
    // 2.  changer vraiment la route (après l'animation)
    setTimeout(() => {
      startTransition(() => {
        router.replace(
          // @ts-expect-error Next.js router.replace typing does not support object with params
          { pathname, params },
          { locale: nextLocale }
        );
      });
    }, 200); // Très court, juste pour que l'animation commence
    
    // 3. Reset l'état d'animation
    setTimeout(() => {
      setIsAnimating(false);
    }, 800); // Durée augmentée pour l'effet élastique
  };

  return (
    <div className="pl-4 flex items-center gap-2">
      <div
        className={`w-18 shadow-md h-7 py-0.5 flex items-start rounded-2xl relative transition-all duration-500 ease-out ${
          visualState === 'en' ? 'bg-gray-300' : 'bg-gray-100'
        } ${(isPending || isAnimating) ? 'opacity-80' : ''}`}
      >
        <button
          onClick={handleLanguageChange}
          disabled={isPending || isAnimating}
          className={`absolute left-0 top-0 w-7 h-7 shadow-lg bg-white border rounded-full cursor-pointer transform transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]  hover:shadow-xl active:scale-95 ${
            visualState === "en" ? "translate-x-11" : "translate-x-0"
          }`}
        >
          <div className="w-full h-full p-1 flex items-center justify-center">
            <Image
              src={visualState === "en" ? "/tea-time.png" : "/pain.png"}
              alt={visualState === "en" ? "English" : "Français"}
              width={18}
              height={18}
              className="transition-transform duration-200 ease-out"
            />
          </div>
        </button>
      </div>
      
     
    </div>
  );
}