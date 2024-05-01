export default function Clock({ time }) {
    let className;
    let hours = time.getHours();
    if (hours >= 0 && hours <= 6) {
      className = 'night';
    } else {
      className = 'day';
    }
    return (
      <h1 className={className}>
        {time.toLocaleTimeString()}
      </h1>
    );
  }