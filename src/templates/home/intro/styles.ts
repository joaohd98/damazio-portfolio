import styled from 'styled-components';

export const Intro = styled.section`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

export const AvatarTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  margin-left: 5%;
  margin-right: 5%;
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

  :after {
    content: 'João';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5rem;
    width: 100%;
    padding-top: 0.5rem;
    background-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.background};
  }
`;

export const Avatar = styled.img``;

export const TextContainer = styled.div``;

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
  }
`;

export const JobList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const JobItem = styled.li<{ startPosition: number }>`
  transform: translateX(${({ startPosition }) => startPosition}%);
`;

export const JobWrapper = styled.div<{ width: number }>`
  font-family: 'Gotham HTF';
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 2rem 3rem;
  border-radius: 2rem;
  position: relative;
  width: ${({ width }) => width}%;
`;

export const JobCompany = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const JobName = styled.p`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const JobSubjectsRow = styled.div`
  display: flex;
  gap: 2rem;
`;

export const JobSubject = styled.span`
  font-family: 'LD Mono Line Outline';
  font-size: 1.8rem;
`;

export const JobDuration = styled.span`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 2rem;
  position: absolute;
  right: 3rem;
  top: 50%;
  transform: translateY(-50%);
`;
