import { Clock, CreditCard, Shield, Truck } from 'lucide-react'

export function TrustBadges() {
  return (
    <section className='py-6 bg-white border-y border-amber-100'>
      <div className='container px-4 md:px-6'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
          <div className='flex flex-col items-center text-center p-3'>
            <div className='bg-amber-100 p-2 rounded-full mb-2'>
              <Shield className='h-5 w-5 text-amber-700' />
            </div>
            <h3 className='text-sm font-medium text-amber-900'>Compra Segura</h3>
            <p className='text-xs text-amber-700/70 mt-1'>Seus dados protegidos</p>
          </div>

          <div className='flex flex-col items-center text-center p-3'>
            <div className='bg-amber-100 p-2 rounded-full mb-2'>
              <Truck className='h-5 w-5 text-amber-700' />
            </div>
            <h3 className='text-sm font-medium text-amber-900'>Entrega Rápida</h3>
            <p className='text-xs text-amber-700/70 mt-1'>Para todo o Brasil</p>
          </div>

          <div className='flex flex-col items-center text-center p-3'>
            <div className='bg-amber-100 p-2 rounded-full mb-2'>
              <CreditCard className='h-5 w-5 text-amber-700' />
            </div>
            <h3 className='text-sm font-medium text-amber-900'>Pagamento Seguro</h3>
            <p className='text-xs text-amber-700/70 mt-1'>Múltiplas formas de pagamento</p>
          </div>

          <div className='flex flex-col items-center text-center p-3'>
            <div className='bg-amber-100 p-2 rounded-full mb-2'>
              <Clock className='h-5 w-5 text-amber-700' />
            </div>
            <h3 className='text-sm font-medium text-amber-900'>Atendimento</h3>
            <p className='text-xs text-amber-700/70 mt-1'>Seg-Sex: 9h-18h | Sáb: 9h-17h</p>
          </div>
        </div>
      </div>
    </section>
  )
}
