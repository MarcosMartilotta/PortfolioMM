import styled from "styled-components";
import ToDoList from "../Img/ToDoList.jpg";
import ReproductorVideos from "../Img/reproductorVideos.jpg";

const Subtitle = styled.h2`
  font-size: 4rem;
  font-weight: 500;
  letter-spacing: 0.5rem;
  color: white;
`;

const PreviewProjectsContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 10rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  justify-items: center;
`;

const ProjectContainer = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
`;

const Image = styled.img`
  position: absolute;
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  border: solid 1px black;
  border-radius: 1rem;
  left: 0;
`;

const HoverContainer = styled.div`
  position: absolute;
  width: 20rem;
  height: 20rem;
  background-color: transparent;
  border-radius: 1rem;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    a {
      display: block;
    }
  }

  a {
    display: none;
    margin: 2rem;
    text-decoration: none;
    font-size: 2rem;
    color: white;
    font-weight: 700;
    transition: all 0.2s ease;
  }
`;

const Projects = () => {
  return (
    <>
      <Subtitle>My projects</Subtitle>
      <PreviewProjectsContainer>
        <ProjectContainer>
          <Image src={ToDoList} alt="Preview a todo" />
          <HoverContainer>
            <a href="https://marcosmartilotta.github.io/ToDoList/">Visit</a>
            <a href="https://github.com/MarcosMartilotta/ToDoList/blob/master/README.md">
              Repo
            </a>
          </HoverContainer>
        </ProjectContainer>
        <ProjectContainer>
          <Image
            src={ReproductorVideos}
            alt="Preview al reproductor de videos"
          />
          <HoverContainer>
            <a href="https://marcosmartilotta.github.io/reproductor_mp4/">
              Visit
            </a>
            <a href="https://github.com/MarcosMartilotta/reproductor_mp4">
              Repo
            </a>
          </HoverContainer>
        </ProjectContainer>
      </PreviewProjectsContainer>
    </>
  );
};

export default Projects;
