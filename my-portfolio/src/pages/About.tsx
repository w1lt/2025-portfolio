function About() {
  return (
    <div className="flex flex-col gap-2">
      <p>cs @ ku '25</p>
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
      <p>
        <a href="https://l.willwhitehead.com/" target="_blank">
          linkedin
        </a>{" "}
        -{" "}
        <a href="https://r.willwhitehead.com/" target="_blank">
          resume
        </a>
      </p>
    </div>
  );
}

export default About;
