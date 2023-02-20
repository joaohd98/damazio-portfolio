import React, { ReactNode, useMemo } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import useSections from '@/constants/section';
import * as S from './styles';
import useConst from './const';
import useAnimation from './animation';

export default function Intro({ skills }: { skills: ReactNode }) {
  const { aboutSection } = useSections();
  const { avatarContainerRef, textContainerRef, sectionTextRef, setJobsWrapperRef } = useAnimation();
  const { profilePicture, currentWork, descriptions, works, jobs, formatDuration } = useConst();

  const renderJobs = useMemo(() => {
    const startYear = jobs.reduce((acc, current) => {
      if (acc === 0 || current.start < acc) {
        return current.start;
      }

      return acc;
    }, 0);

    const endYear = new Date().getUTCFullYear() - 2000;

    return (
      <S.JobList>
        <S.JobTitle ref={sectionTextRef}>{works}</S.JobTitle>
        {jobs.map((job, index) => {
          const startPosition = gsap.utils.mapRange(startYear, endYear, 2.5, 97.5, job.start);
          const years = job.end ? job.end - job.start : endYear - job.start;
          const width = gsap.utils.mapRange(0, endYear - startYear, 2.5, 97.5, years || 1);

          return (
            <S.JobItem key={job.name + job.company} startPosition={startPosition}>
              <S.JobWrapper ref={setJobsWrapperRef(index)} width={width}>
                <S.JobCompany>{job.company}</S.JobCompany>
                <S.JobName>{job.name}</S.JobName>
                <S.JobSubjectsRow>
                  {job.subjects.map(subject => (
                    <S.JobSubject key={subject}>{subject}</S.JobSubject>
                  ))}
                </S.JobSubjectsRow>
                <S.JobDuration>{formatDuration(job.start, job.end)}</S.JobDuration>
              </S.JobWrapper>
            </S.JobItem>
          );
        })}
      </S.JobList>
    );
  }, []);

  return (
    <S.Intro id={aboutSection.id}>
      <S.AvatarTextContainer>
        <S.AvatarContainer ref={avatarContainerRef}>
          <Image src="/imgs/hang-lose.jpg" alt={profilePicture} width={348} height={375} />
        </S.AvatarContainer>
        <S.TextContainer ref={textContainerRef}>
          <S.CurrentWorkText>{currentWork}</S.CurrentWorkText>
          {descriptions.map(description => (
            <S.DescriptionsText key={description}>{description}</S.DescriptionsText>
          ))}
        </S.TextContainer>
      </S.AvatarTextContainer>
      {skills}
      {renderJobs}
    </S.Intro>
  );
}
