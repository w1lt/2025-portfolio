function About() {
  return (
    <div className="flex flex-col gap-2 text-xl lg:text-md items-start">
      <p>
        computer science @{" "}
        <a href="https://www.ku.edu/" target="_blank">
          ku
        </a>
      </p>
      <p>
        - incoming web intern @{" "}
        <a href="https://www.cboe.com/" target="_blank">
          cboe
        </a>
      </p>

      <p>
        - prev. quant intern @{" "}
        <a href="https://www.tradebot.com/" target="_blank">
          tradebot
        </a>
      </p>
      <p>
        - prev. tech lead @{" "}
        <a href="https://hackku.org/" target="_blank">
          hackku
        </a>
      </p>
      <p className="flex gap-2 justify-center">
        <a href="https://l.willwhitehead.com/" target="_blank">
          linkedin
        </a>
        <a href="https://g.willwhitehead.com/" target="_blank">
          github
        </a>
        <a href="https://r.willwhitehead.com/" target="_blank">
          resume
        </a>
      </p>
    </div>
  );
}

export default About;
