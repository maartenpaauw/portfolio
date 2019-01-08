<template lang="pug">
  #portfolio.h-100
    portfolio-header
    portfolio-introduction
    portfolio-stack-overflow
    portfolio-cv
    portfolio-whatpulse
    portfolio-certificates
    portfolio-other
    portfolio-skills
    portfolio-other
    portfolio-references
    portfolio-interests
    portfolio-projects
    portfolio-footer
</template>

<script>
  import Header from '@/components/Header/Index'
  import Introduction from '@/components/Introduction/Index'
  import StackOverflow from '@/components/StackOverflow/Index'
  import CV from '@/components/CV/Index'
  import Whatpulse from '@/components/Whatpulse/Index'
  import Interests from '@/components/Interests/Index'
  import Footer from '@/components/Footer/Index'
  import References from '@/components/References/Index'
  import Other from '@/components/Other/Index'
  import Projects from '@/components/Projects/Index'
  import Skills from '@/components/Skills/Index'
  import Certificates from '@/components/Certificates/Index'

  export default {
    name: 'portfolio',
    components: {
      portfolioHeader: Header,
      portfolioIntroduction: Introduction,
      portfolioStackOverflow: StackOverflow,
      portfolioCv: CV,
      portfolioWhatpulse: Whatpulse,
      portfolioInterests: Interests,
      portfolioReferences: References,
      portfolioOther: Other,
      portfolioProjects: Projects,
      portfolioSkills: Skills,
      portfolioCertificates: Certificates,
      portfolioFooter: Footer
    }
  }
</script>
