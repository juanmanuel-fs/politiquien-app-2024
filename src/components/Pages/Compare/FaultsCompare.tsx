import React from 'react'

function FaultsCompare() {
  return (
    <div className='flex flex-col gap-2 md:gap-4'>
      <div className='py-4 sticky top-[220px] md:top-[308px] bg-white-100 border-b border-black-10'>
        <h5 className={`text-title4 font-montserrat mb-1`}>Faltas</h5>
        <p className='text-subhead text-black-50'>Lorem ipsum dolor sit amet consectetur. Dignissim commodo nunc blandit scelerisque tincidunt rhoncus viverra vitae.</p>
      </div>
      <div className='flex flex-col gap-2 md:gap-4'>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Fisacales:</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-100'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL TÉCNICO EN MECÁNICA DE PRODUCCIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>ARCHIVADO</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
              <p>PROFECIONAL TÉCNICO</p>
                <p className='text-footnote font-semibold md:mt-1'>CULPABLE</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL TÉCNICO</p>
                <p className='text-footnote font-semibold md:mt-1'>ARCHIVADO</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL TÉCNICO EN MECÁNICA DE PRODUCCIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>ARCHIVADO</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Judiciales:</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-100'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL UNIVERSITARIA EN MECÁNICA DE PRODUCCIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>CULPABLE</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
              <p>PROFECIONAL UNIVERSITARIA</p>
                <p className='text-footnote font-semibold md:mt-1'>CULPABLE</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL UNIVERSITARIA</p>
                <p className='text-footnote font-semibold md:mt-1'>ARCHIVADO</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL UNIVERSITARIA EN MECÁNICA DE PRODUCCIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>CULPABLE</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Transitos:</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-100'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL UNIVERSITARIA EN MECÁNICA DE PRODUCCIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>CULPABLE</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
              <p>PROFECIONAL UNIVERSITARIA</p>
                <p className='text-footnote font-semibold md:mt-1'>ARCHIVADO</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL UNIVERSITARIA</p>
                <p className='text-footnote font-semibold md:mt-1'>ARCHIVADO</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL UNIVERSITARIA EN MECÁNICA DE PRODUCCIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>CULPABLE</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Administrativos:</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-100'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL UNIVERSITARIA EN MECÁNICA DE PRODUCCIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>ARCHIVADO</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
              <p>PROFECIONAL UNIVERSITARIA</p>
                <p className='text-footnote font-semibold md:mt-1'>CULPABLE</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL UNIVERSITARIA</p>
                <p className='text-footnote font-semibold md:mt-1'>CULPABLE</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL UNIVERSITARIA EN MECÁNICA DE PRODUCCIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>ARCHIVADO</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className='flex flex-col gap-1'>
          <p className='text-footnote md:text-subhead text-black-50 mr-2'>Otras:</p>
          <div className='grid grid-cols-2 gap-4 md:gap-8 text-black-100'>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL UNIVERSITARIA EN MECÁNICA DE PRODUCCIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>ARCHIVADO</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
              <p>PROFECIONAL UNIVERSITARIA</p>
                <p className='text-footnote font-semibold md:mt-1'>ARCHIVADO</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL UNIVERSITARIA</p>
                <p className='text-footnote font-semibold md:mt-1'>CULPABLE</p>
              </div>
              <div className='flex flex-col md:flex-row md:justify-between md:gap-4'>
                <p>PROFECIONAL UNIVERSITARIA EN MECÁNICA DE PRODUCCIÓN</p>
                <p className='text-footnote font-semibold md:mt-1'>ARCHIVADO</p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default FaultsCompare