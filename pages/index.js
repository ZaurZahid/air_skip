import Head from 'next/head'

import Layout from '../components/Layout'

import SkipBaggageClaim from '../components/SkipBaggageClaim'
import EasyAs from '../components/EasyAs'
import Swipe from '../components/Swipe'
import Skip from '../components/Skip'
import RealTimeMonitor from '../components/RealTimeMonitor'

export default function Index() {
  return (
    <>
      <Head>
        <title>AirSkip</title>
      </Head>
      <div className="min-h-screen bg-back">
        <Layout>
          <SkipBaggageClaim />
          <EasyAs />
          <Swipe />
          <Skip />
          <RealTimeMonitor />
        </Layout>
      </div>
    </>
  )
}
