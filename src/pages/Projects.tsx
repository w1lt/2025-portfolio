function Home() {
  const projects = [
    {
      name: "hackku25 - fullstack hackathon management",
      url: "https://hackku.org",
    },
    { name: "csjobs - application tracker", url: "https://csjobs.lol" },
  ];
  return (
    <div className="flex flex-col gap-2">
      {projects.map((project) => (
        <a
          key={project.name}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:text-gray-500 transition-all"
        >
          {project.name}
        </a>
      ))}
    </div>
  );
}

export default Home;
