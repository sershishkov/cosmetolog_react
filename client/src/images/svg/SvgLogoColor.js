const SvgLogoColor = (props) => {
  return (
    <svg
      width={`${props.width || 428}`}
      height={`${props.height || 350}`}
      viewBox={`0 0 ${props.width || 428} ${props.height || 350}`}
      fill={`${props.color || '#9CCE9B'}`}
      // width='428'
      // height='350'
      // viewBox='0 0 428 350'
      // fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M403.828 271.35C394.548 271.28 385.258 271.22 375.158 277.8C365.058 284.38 363.768 288.96 359.348 289.96C358.611 290.116 357.891 290.343 357.198 290.64C361.038 286.94 364.745 283.093 368.318 279.1C373.318 274.1 377.698 270.77 382.598 269.67C389.208 268.18 402.908 267.25 398.038 266.19C393.168 265.13 378.548 261.97 368.438 268.55C358.328 275.13 347.438 285.48 346.118 292.93C345.831 294.361 345.935 295.843 346.418 297.22C319.404 317.896 287.782 331.718 254.259 337.503C220.736 343.289 186.31 340.865 153.928 330.44C43.0483 294.83 -17.9517 176.09 17.6583 65.21C25.1979 41.6607 36.8217 19.6215 51.9983 0.100037C33.1335 21.7109 18.8943 46.9562 10.1583 74.28C-25.4517 185.16 35.5483 303.89 146.428 339.51C181.423 350.768 218.754 352.679 254.715 345.052C290.676 337.424 324.017 320.525 351.428 296.03C353.018 295.03 354.748 294.37 355.908 295.03C358.578 296.58 368.788 300.74 379.348 296.21C389.908 291.68 387.718 292.21 393.868 288.64C400.018 285.07 399.568 283.05 408.868 283.12L427.438 283.24C427.438 283.24 417.988 272.46 403.828 271.35Z'
        // fill='#9CCE9B'
      />
    </svg>
  );
};

export default SvgLogoColor;