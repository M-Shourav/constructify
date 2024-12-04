import Container from "@/components/Container";
import RecentProjects from "@/components/RecentProjects";
import Title from "@/components/Title";
import TopFooter from "@/components/TopFooter";
import React from "react";

const ProjectPage = () => {
  return (
    <>
      <Container className="py-10 lg:py-20 flex flex-col items-start gap-20">
        <div className="flex flex-col gap-4 items-start">
          <Title className="md:text-4xl">Recent Projects</Title>
          <p className="text-sm md:text-base font-normal tracking-wide text-gray-500">
            Tiny sub heading that focuses on the topic mentioned above
          </p>
        </div>
        <RecentProjects />
      </Container>
      <TopFooter />
    </>
  );
};

export default ProjectPage;
