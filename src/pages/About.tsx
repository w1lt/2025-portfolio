function About() {
  return (
    <div className="flex flex-col gap-2 text-xl lg:text-md">
      <p>ku computer science '25</p>

      <p>
        incoming web intern @{" "}
        <a href="https://www.cboe.com/" target="_blank">
          cboe
        </a>
      </p>
      <p>
        prev. tech lead @{" "}
        <a href="https://hackku.org/" target="_blank">
          hackku
        </a>
      </p>
      <p>
        prev. hft intern @{" "}
        <a href="https://www.tradebot.com/" target="_blank">
          tradebot
        </a>
      </p>

      <div className="flex gap-2 justify-center">
        <a href="https://l.willwhitehead.com/" target="_blank">
          li
        </a>
        <a href="https://g.willwhitehead.com/" target="_blank">
          gh
        </a>
      </div>
    </div>
  );
}

export default About;
