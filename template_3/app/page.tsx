"use client"
import styles from './page.module.scss';
import Header from '../components/header/Header';
import Introduction from '@/components/introduction/Introduction';
import Benefits from '@/components/benefits/Benefits';
import Cleaning from '@/components/cleaning/Cleaning';
import Filter from '@/components/filter/Filter';
import Schedule from '@/components/schedule/Schedule';
import Reviews from '@/components/reviews/Reviews';
import Questions from '@/components/questions/Questions';
import Footer from '@/components/footer/Footer';
import { useState } from 'react';

interface WorkerType {
  profile: {
    userId: string;
    lastName: string;
    firstName: string;
    schedule: {
      activeWeekdays: string[];
      startTime: string;
      endTime: string;
    }[];
  };
};

export default function Home() {
  const [workers, setWorkers] = useState<WorkerType[]>([]);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Introduction />
        <Benefits />
        <Cleaning />
        <Filter setWorkers={setWorkers}/>
        <Schedule workers={workers} /> 
        <Reviews />
        <Questions />
        <Footer />
      </main>
    </>
  )
}
