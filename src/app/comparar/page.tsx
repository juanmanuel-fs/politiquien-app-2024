import RelatedNewsCandidate from '@/components/Pages/Candidate/RelatedNewsCandidate'
import RelatedPolitichecksCandidate from '@/components/Pages/Candidate/RelatedPolitichecksCandidate'
import AcademyCompare from '@/components/Pages/Compare/AcademyCompare'
import ApplicationCompare from '@/components/Pages/Compare/ApplicationCompare'
import DeclarationCompare from '@/components/Pages/Compare/DeclarationCompare'
import ExperienceCompare from '@/components/Pages/Compare/ExperienceCompare'
import FaultsCompare from '@/components/Pages/Compare/FaultsCompare'
import GeneralCompare from '@/components/Pages/Compare/GeneralCompare'
import HeaderCompare from '@/components/Pages/Compare/HeaderCompare'
import LifeLineCompare from '@/components/Pages/Compare/LifeLineCompare'
import SentenceCompare from '@/components/Pages/Compare/SentenceCompare'
import React from 'react'

function page() {
  return (
    <div className='grid grid-cols-12 gap-8'>
      <div className='col-span-12 lg:col-span-8'>
        <HeaderCompare></HeaderCompare>
        <div className='flex flex-col'>
          <ApplicationCompare />
          <GeneralCompare />
          <AcademyCompare />
          <ExperienceCompare />
          <DeclarationCompare />
          <FaultsCompare />
          <SentenceCompare />
          <LifeLineCompare />
        </div>
      </div>
      <div className='col-span-12 md:col-span-8 lg:col-span-4'>
        <div className='flex flex-col gap-6'>
          <RelatedNewsCandidate/>
          <RelatedPolitichecksCandidate/>
        </div>
      </div>

    </div>
  )
}

export default page