"use client";

function CountLength(props: { length: number }) {
  const { length } = props;

  return <div className="text-red-400">Length: {length}</div>;
}

export default CountLength;
