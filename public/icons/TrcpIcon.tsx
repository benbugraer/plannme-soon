import * as React from "react";
import type { SVGProps } from "react";
const tRPC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect width={512} height={512} fill="#398CCB" rx={150} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m255.446 75 71.077 41.008v22.548l86.031 49.682v84.986l23.077 13.322v82.062L364.6 409.615l-31.535-18.237-76.673 44.268-76.214-44.012-31.093 17.981-71.031-41.077v-81.992l22.177-12.803v-85.505l84.184-48.6.047-.002v-23.628L255.446 75Zm71.077 84.879v38.144l-71.031 41.008-71.03-41.008v-37.087l-.047.002-65.723 37.962v64.184l30.393-17.546 71.03 41.008v81.992l-21.489 12.427 57.766 33.358 58.226-33.611-21.049-12.174v-81.992l71.031-41.008 29.492 17.027V198.9l-67.569-39.021Zm-14.492 198.09v-50.054l43.338 25.016v50.054l-43.338-25.016Zm105.138-50.123-43.338 25.016v50.123l43.338-25.085v-50.054ZM96.515 357.9v-50.054l43.339 25.016v50.053L96.515 357.9Zm105.139-50.054-43.339 25.016v50.053l43.339-25.015v-50.054Zm119.608-15.923 43.338-25.015 43.338 25.015-43.338 25.039-43.338-25.039Zm-172.177-25.085-43.339 25.085 43.339 24.969 43.338-24.969-43.338-25.085Zm53.838-79.476v-50.054l43.292 25.038v50.031l-43.292-25.015Zm105.092-50.054-43.292 25.038v50.008l43.292-24.992v-50.054Zm-95.861-15.97 43.292-25.015 43.339 25.015-43.339 25.016-43.292-25.016Z"
      clipRule="evenodd"
    />
  </svg>
);
export default tRPC;
