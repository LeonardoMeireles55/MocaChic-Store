import Link from "next/link"

interface CallToActionProps {
  whatsappLink: string
  title: string
  description: string
  buttonText: string
  scheduleText: string
}

export function CallToAction({
  whatsappLink,
  title,
  description,
  buttonText,
  scheduleText,
}: Readonly<CallToActionProps>) {
  return (
    <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/simple_logo.png?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-amber-800/50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center animate-fade-in">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-amber-50 sm:text-4xl max-w-2xl drop-shadow-md">
            {title}
          </h2>
          <p className="mx-auto max-w-[700px] text-amber-100/90 md:text-xl leading-relaxed">{description}</p>
          <Link
            href={`${whatsappLink}?text=Olá! Gostaria de saber mais sobre os produtos da MocaChic.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-green-500 px-8 py-4 text-base font-medium text-white shadow-lg transition-all duration-300 hover:from-green-700 hover:to-green-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 group hover:-translate-y-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.4539 3.54523C18.2266 1.31736 15.2953 0.0503998 12.1711 0.0455933C5.77328 0.0455933 0.547219 5.27165 0.542414 11.6719C0.540011 13.7 1.05354 15.6758 2.02594 17.4379L0.457031 24.0001L7.15354 22.4648C8.85354 23.3461 10.7445 23.8086 12.6656 23.8102H12.6711C19.0672 23.8102 24.2969 18.5828 24.3 12.1828C24.3047 9.06697 23.0375 6.13228 20.8086 3.90353L20.4539 3.54523ZM12.1711 21.8227C10.4422 21.8227 8.74688 21.3805 7.25745 20.5461L6.8789 20.3219L3.01245 21.2258L3.93124 17.4555L3.68359 17.0602C2.76563 15.5102 2.27745 13.7156 2.2789 11.8719C2.2836 6.36697 6.67328 1.97728 12.1758 1.97728C14.7656 1.98103 17.1984 3.03697 19.0266 4.86853C20.8547 6.70009 21.9047 9.13697 21.9016 11.7305C21.8969 17.2367 17.5055 21.8227 12.1711 21.8227ZM17.6766 14.1344C17.3766 13.9844 15.8883 13.2508 15.6133 13.1508C15.3383 13.0508 15.1383 13.0008 14.9383 13.3008C14.7383 13.6008 14.1617 14.2844 13.9867 14.4844C13.8117 14.6844 13.6367 14.7094 13.3367 14.5594C13.0367 14.4094 12.0383 14.0844 10.8617 13.0344C9.9375 12.2094 9.3125 11.1844 9.1375 10.8844C8.9625 10.5844 9.1375 10.4344 9.2875 10.2594C9.4375 10.1094 9.6125 9.85938 9.7625 9.68438C9.9125 9.50938 9.9625 9.38438 10.0625 9.18438C10.1625 8.98438 10.1125 8.80938 10.0375 8.65938C9.9625 8.50938 9.3375 7.01563 9.0875 6.41563C8.8375 5.83228 8.5875 5.90728 8.4125 5.89478H7.8125C7.6125 5.89478 7.3125 5.96978 7.0375 6.26978C6.7625 6.56978 5.9875 7.30478 5.9875 8.79853C5.9875 10.2923 7.0625 11.7352 7.2125 11.9352C7.3625 12.1352 9.3125 15.1102 12.2625 16.4352C13.0125 16.7602 13.5992 16.9602 14.0492 17.1102C14.7992 17.3602 15.4867 17.3227 16.0242 17.2477C16.6242 17.1602 17.8266 16.5102 18.0766 15.8102C18.3266 15.1102 18.3266 14.5102 18.2516 14.3852C18.1766 14.2602 17.9766 14.1852 17.6766 14.0352V14.1344Z"
              />
            </svg>
            <span className="group-hover:translate-x-1 transition-transform duration-300">{buttonText}</span>
          </Link>
          <p className="mt-4 text-sm text-amber-100/80 bg-amber-900/30 px-4 py-2 rounded-full backdrop-blur-sm">
            {scheduleText}
          </p>
        </div>
      </div>
    </section>
  )
}
