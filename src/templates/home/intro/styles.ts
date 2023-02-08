import styled from 'styled-components';
import { mediaMaxWidth } from '@/utils/media-query';

export const Intro = styled.section`
  width: 90%;
  margin: 0 auto 10rem;
`;

export const AvatarTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-left: 5%;
  margin-right: 5%;

  ${mediaMaxWidth('mobile')`
    flex-direction: column;
    margin: 0;
  `}
`;

export const AvatarContainer = styled.div`
  background-color: ${({ theme }) => theme.primary};
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  position: relative;
  font-size: 4rem;
  font-family: 'LD Mono Line Outline';
  text-align: center;
  border: 0.5px solid ${({ theme }) => theme.primary};
  opacity: 0;
  transform: translateY(5rem);

  :after {
    content: 'João';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.background};
  }
`;

export const TextContainer = styled.div`
  p {
    opacity: 0;
    transform: translateY(-5rem);
  }
`;

export const CurrentWorkText = styled.p`
  font-family: 'Gotham HTF';
  font-weight: 300;
  font-size: 6rem;
  margin-bottom: 3rem;
`;

export const DescriptionsText = styled.p`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 3rem;
  margin-bottom: 2rem;

  :last-of-type {
    margin-bottom: 0;

    ${mediaMaxWidth('mobile')`
      margin-bottom: 6rem;
    `}
  }
`;

export const JobList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${mediaMaxWidth('mobile')`
    gap: 4rem;
  `}
`;

export const JobItem = styled.li<{ startPosition: number }>`
  transform: translateX(${({ startPosition }) => startPosition}%);

  ${mediaMaxWidth('mobile')`
    transform: translateX(0);
  `}
`;

export const JobWrapper = styled.div<{ width: number }>`
  font-family: 'Gotham HTF';
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 2rem 3rem;
  border-radius: 2rem;
  position: relative;
  width: ${({ width }) => width}%;
  opacity: 0;
  transform: translateX(-20rem);

  ${mediaMaxWidth('mobile')`
    width: 100%;
  `}
`;

export const JobCompany = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 1rem;

  ${mediaMaxWidth('mobile')`
    font-size: 3rem;
  `}
`;

export const JobName = styled.p`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1rem;

  ${mediaMaxWidth('mobile')`
    margin-bottom: 3rem;
    font-size: 2.5rem;
  `}
`;

export const JobSubjectsRow = styled.div`
  display: flex;
  gap: 2rem;
`;

export const JobSubject = styled.span`
  font-family: 'LD Mono Line Outline';
  font-size: 1.8rem;

  ${mediaMaxWidth('mobile')`
    font-size: 2.5rem;
  `}
`;

export const JobDuration = styled.span`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 2rem;
  position: absolute;
  right: 3rem;
  top: 50%;
  transform: translateY(-50%);

  ${mediaMaxWidth('mobile')`
    font-size: 4rem;
  `}
`;
