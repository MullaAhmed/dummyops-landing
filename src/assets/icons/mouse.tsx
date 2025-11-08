type MouseProps = {
  className?: string;
  height?: number;
  width?: number;
};

export default function Mouse({ className, height, width }: MouseProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 21}
      height={height || 20}
      viewBox="0 0 21 20"
      fill="none"
      className={className}
    >
      <path
        d="M4.44849 7.49996C4.44849 4.2783 7.06016 1.66663 10.2818 1.66663C13.5035 1.66663 16.1152 4.2783 16.1152 7.49996V12.5C16.1152 15.7216 13.5035 18.3333 10.2818 18.3333C7.06016 18.3333 4.44849 15.7216 4.44849 12.5V7.49996Z"
        fill="white"
        fillOpacity="0.76"
        stroke="#0563FF"
      />
      <path
        d="M10.2817 4.62122V7.12122"
        stroke="#E93800"
        strokeLinecap="round"
      />
    </svg>
  );
}
