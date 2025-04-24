// app/page.jsx or app/page.tsx

import Header from "../components/Header";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      {/* Rest of your landing page content */}
      <section>
        {/* BEGIN HERO SECTION */}
        <div className="relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64">
          <div className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
            <div className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
              <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8">
                Take Control of Your Finances with Finans
              </h1>
              <p className="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
                Track, Manage, and Grow Your Wealth — All in One Place
              </p>
              <a
                href="#_"
                className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0"
              >
                Signup Today!
              </a>
              {/* Integrates with section*/}

              <div className="flex-col hidden mt-12 sm:flex lg:mt-24">
                <p className="mb-4 text-sm font-medium tracking-widest text-gray-500 uppercase">
                  Integrates With
                </p>
                <div className="flex">
                  <svg
                    className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"
                    viewBox="0 0 2499 1037"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g strokeWidth="1">
                      <g>
                        <path d="M261.062 466.768c-53.833-19.912-83.335-35.399-83.335-59.735 0-20.652 16.963-32.45 47.201-32.45 55.31 0 112.09 21.388 151.178 40.559l22.124-136.427c-30.973-14.752-94.397-39.088-182.151-39.088-61.947 0-113.573 16.223-150.443 46.46-38.352 31.71-58.263 77.434-58.263 132.744 0 100.293 61.211 143.07 160.769 179.203 64.159 22.86 85.547 39.088 85.547 64.16 0 24.336-20.652 38.346-58.263 38.346-46.46 0-123.153-22.86-173.302-52.356L0 786.087c42.771 24.337 122.417 49.409 205.017 49.409 65.63 0 120.204-15.487 157.08-44.984 41.293-32.45 62.682-80.381 62.682-142.328 0-102.511-62.683-145.282-163.717-181.416zm523.877-80.387l22.124-135.692H690.265V85.966l-157.035 25.84-22.677 138.883-55.232 8.96-20.675 126.732h75.68v266.227c0 69.32 17.7 117.257 53.833 146.754 30.238 24.336 73.745 36.134 134.956 36.134 47.196 0 75.957-8.109 95.868-13.275V678.416c-11.062 2.953-36.133 8.114-53.097 8.114-36.134 0-51.62-18.435-51.62-60.47V386.38h94.673zm350.752-143.618c-51.62 0-92.92 27.102-109.142 75.775l-11.062-67.849H855.459v573.745h182.887V452.017c22.865-28.026 55.31-38.159 99.558-38.159 9.59 0 19.911 0 32.45 2.213V247.188c-12.539-2.948-23.6-4.425-34.663-4.425zm171.095-48.86c53.098 0 95.869-43.507 95.869-96.604 0-53.839-42.771-96.61-95.869-96.61-53.838 0-96.609 42.771-96.609 96.61 0 53.097 42.771 96.604 96.61 96.604zm-92.184 56.786h183.628v573.745h-183.628V250.689zm703.999 51.62c-32.45-42.035-77.434-62.682-134.956-62.682-53.097 0-99.558 22.124-143.07 68.584l-9.585-57.522h-160.769v786.134l182.893-30.232V822.22c28.02 8.85 56.78 13.275 82.594 13.275 45.725 0 112.096-11.798 163.717-67.843 49.408-53.839 74.485-137.168 74.485-247.052 0-97.345-18.44-171.09-55.31-218.291zm-151.92 353.983c-14.75 28.025-37.61 42.777-64.159 42.777-18.435 0-34.662-3.69-49.408-11.062V415.142c30.973-32.445 58.993-36.134 69.32-36.134 46.46 0 69.32 50.15 69.32 148.23 0 56.045-8.11 99.557-25.073 129.054zm731.566-123.894c0-91.443-19.912-163.717-59-214.602-39.822-51.62-99.557-78.169-175.514-78.169-155.608 0-252.212 115.044-252.212 299.408 0 103.247 25.808 180.68 76.692 230.089 45.725 44.248 111.361 66.372 196.168 66.372 78.169 0 150.442-18.435 196.167-48.673l-19.912-125.365c-44.989 24.336-97.345 37.61-156.344 37.61-35.398 0-59.734-7.378-77.434-22.864-19.175-16.223-30.237-42.771-33.921-80.382h303.097c.736-8.85 2.213-50.15 2.213-63.424zm-306.787-48.672c5.16-81.859 27.284-120.205 69.32-120.205 41.3 0 62.688 39.087 65.636 120.205H2191.46z" />
                      </g>
                    </g>
                  </svg>
                  <svg
                    className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"
                    viewBox="0 0 2350 2315"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="none" strokeWidth="1"></g>
                    <g>
                      <path d="M1175 0C525.8 0 0 525.8 0 1175c0 552.2 378.9 1010.5 890.1 1139.7-5.9-14.7-8.8-35.3-8.8-55.8v-199.8H734.4c-79.3 0-152.8-35.2-185.1-99.9-38.2-70.5-44.1-179.2-141-246.8-29.4-23.5-5.9-47 26.4-44.1 61.7 17.6 111.6 58.8 158.6 120.4 47 61.7 67.6 76.4 155.7 76.4 41.1 0 105.7-2.9 164.5-11.8 32.3-82.3 88.1-155.7 155.7-190.9-393.6-47-581.6-240.9-581.6-505.3 0-114.6 49.9-223.3 132.2-317.3-26.4-91.1-61.7-279.1 11.8-352.5 176.3 0 282 114.6 308.4 143.9 88.1-29.4 185.1-47 284.9-47 102.8 0 196.8 17.6 284.9 47 26.4-29.4 132.2-143.9 308.4-143.9 70.5 70.5 38.2 261.4 8.8 352.5 82.3 91.1 129.3 202.7 129.3 317.3 0 264.4-185.1 458.3-575.7 499.4 108.7 55.8 185.1 214.4 185.1 331.9V2256c0 8.8-2.9 17.6-2.9 26.4C2021 2123.8 2350 1689.1 2350 1175 2350 525.8 1824.2 0 1175 0z" />
                    </g>
                  </svg>
                  <svg
                    className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"
                    viewBox="0 0 2500 2158"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="none" strokeWidth="1">
                      <g transform="translate(-.157)">
                        <path d="M2498.932 499.093c-11.204 242.78-181.152 575.201-509.837 997.268-339.895 440.74-627.499 661.11-862.808 661.11-145.67 0-268.924-134.462-369.776-403.39l-201.693-739.547C480.115 745.61 399.81 611.145 313.904 611.145c-18.675 0-84.04 39.219-196.095 117.656L.155 577.53a31955.67 31955.67 0 00364.171-324.952C528.669 110.644 651.928 35.944 734.1 28.472c194.224-18.675 313.746 113.921 358.567 397.786 48.556 306.277 82.172 496.767 100.845 571.47 56.027 253.986 117.656 380.98 184.887 380.98 52.29 0 130.73-82.172 235.311-246.516 104.584-164.345 160.609-289.47 168.078-375.376 14.94-141.934-41.085-212.9-168.078-212.9-59.762 0-121.392 13.075-184.887 39.219C1552.082 183.48 1787.393-10.745 2134.757.462c257.721 7.471 379.113 173.683 364.17 498.635l.005-.004z" />
                      </g>
                    </g>
                  </svg>
                  <svg
                    className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"
                    viewBox="0 0 680 680"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="none" strokeWidth="1">
                      <g transform="translate(-401 -701)">
                        <g transform="translate(-293 -236)">
                          <g transform="translate(463 909)">
                            <g transform="translate(0 28)">
                              <g transform="translate(229.885)">
                                <path d="M242.088 0c-36.478.027-66 29.582-65.973 66-.027 36.418 29.522 65.973 66 66h66V66.027C308.142 29.608 278.593.054 242.088 0c.027 0 .027 0 0 0zm.23 175H66.912c-36.365.027-65.824 29.576-65.797 65.987-.054 36.41 29.405 65.96 65.77 66.013h175.433c36.366-.027 65.824-29.576 65.797-65.987.027-36.437-29.431-65.986-65.797-66.013zM681.115 240.987c.027-36.411-29.522-65.96-66-65.987-36.478.027-66.027 29.576-66 65.987V307h66c36.478-.027 66.027-29.576 66-66.013zm-175 .214V65.772C506.142 29.506 476.614.054 440.13 0c-36.486.027-66.04 29.48-66.014 65.772v175.429c-.054 36.293 29.501 65.745 65.987 65.799 36.485-.027 66.04-29.48 66.013-65.8zM440.115 680c36.478-.027 66.027-29.582 66-66 .027-36.418-29.522-65.973-66-66h-66v66c-.027 36.392 29.522 65.946 66 66zm-.23-175h175.433c36.366-.027 65.824-29.576 65.797-65.987.054-36.41-29.404-65.96-65.77-66.013H439.912c-36.366.027-65.824 29.576-65.797 65.987-.027 36.437 29.405 65.986 65.77 66.013zM1.115 439c-.027 36.418 29.522 65.973 66 66 36.478-.027 66.027-29.582 66-66v-66h-66c-36.478.027-66.027 29.582-66 66zm175-.249v175.444c-.054 36.296 29.501 65.751 65.987 65.805 36.485-.027 66.04-29.482 66.013-65.778V438.805c.054-36.296-29.501-65.751-65.986-65.805-36.513 0-66.04 29.455-66.014 65.751 0 0 0 .027 0 0z" />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <svg
                    className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"
                    viewBox="0 0 1681 417"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="none" strokeWidth="1">
                      <g>
                        <path d="M242.088 0c-36.478.027-66 29.582-65.973 66-.027 36.418 29.522 65.973 66 66h66V66.027C308.142 29.608 278.593.054 242.088 0c.027 0 .027 0 0 0zm.23 175H66.912c-36.365.027-65.824 29.576-65.797 65.987-.054 36.41 29.405 65.96 65.77 66.013h175.433c36.366-.027 65.824-29.576 65.797-65.987.027-36.437-29.431-65.986-65.797-66.013zM681.115 240.987c.027-36.411-29.522-65.96-66-65.987-36.478.027-66.027 29.576-66 65.987V307h66c36.478-.027 66.027-29.576 66-66.013zm-175 .214V65.772C506.142 29.506 476.614.054 440.13 0c-36.486.027-66.04 29.48-66.014 65.772v175.429c-.054 36.293 29.501 65.745 65.987 65.799 36.485-.027 66.04-29.48 66.013-65.8zM440.115 680c36.478-.027 66.027-29.582 66-66 .027-36.418-29.522-65.973-66-66h-66v66c-.027 36.392 29.522 65.946 66 66zm-.23-175h175.433c36.366-.027 65.824-29.576 65.797-65.987.054-36.41-29.404-65.96-65.77-66.013H439.912c-36.366.027-65.824 29.576-65.797 65.987-.027 36.437 29.405 65.986 65.77 66.013zM1.115 439c-.027 36.418 29.522 65.973 66 66 36.478-.027 66.027-29.582 66-66v-66h-66c-36.478.027-66.027 29.582-66 66zm175-.249v175.444c-.054 36.296 29.501 65.751 65.987 65.805 36.485-.027 66.04-29.482 66.013-65.778V438.805c.054-36.296-29.501-65.751-65.986-65.805-36.513 0-66.04 29.455-66.014 65.751 0 0 0 .027 0 0z" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative z-50 flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
              <div className="container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen">
                <img
                  src="https://cdn.devdojo.com/images/september2020/macbook-mockup.png"
                  className="w-full h-auto mt-20 mb-20 ml-0 lg:mt-24 xl:mt-40 lg:mb-0 lg:h-full lg:-ml-12"
                />
              </div>
            </div>
          </div>
        </div>
        {/* HERO SECTION END*/}

        {/*BEGIN FEATURES SECTION */}
        <div
          id="features"
          className="relative w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0"
        >
          <div className="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
            <h2 className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">
              Why Choose Finans?
            </h2>
            <h3 className="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl">
              Built and Designed with you in Mind
            </h3>
            <div className="flex flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-20">
              <div className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
                <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                  <svg
                    className="absolute w-full h-full text-gray-100 fill-current"
                    viewBox="0 0 377 340"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g>
                        <path d="M342.8 3.7c24.7 14 18.1 75 22.1 124s18.6 85.8 8.7 114.2c-9.9 28.4-44.4 48.3-76.4 62.4-32 14.1-61.6 22.4-95.9 28.9-34.3 6.5-73.3 11.1-95.5-6.2-22.2-17.2-27.6-56.5-47.2-96C38.9 191.4 5 151.5.9 108.2-3.1 64.8 22.7 18 61.8 8.7c39.2-9.2 91.7 19 146 16.6 54.2-2.4 110.3-35.6 135-21.6z" />
                      </g>
                    </g>
                  </svg>
                  {/* FEATURE Icon 1*/}
                  <svg
                    className="relative w-20 h-20"
                    viewBox="0 0 58 58"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                        id="linearGradient-1TriangleIcon1"
                      >
                        <stop stopColor="#9C09DB" offset="0%" />
                        <stop stopColor="#1C0FD7" offset="100%" />
                      </linearGradient>
                      <filter
                        x="-14%"
                        y="-10%"
                        width="128%"
                        height="128%"
                        filterUnits="objectBoundingBox"
                        id="filter-3TriangleIcon1"
                      >
                        <feOffset
                          dy="2"
                          in="SourceAlpha"
                          result="shadowOffsetOuter1"
                        />
                        <feGaussianBlur
                          stdDeviation="2"
                          in="shadowOffsetOuter1"
                          result="shadowBlurOuter1"
                        />
                        <feColorMatrix
                          values="0 0 0 0 0.141176471 0 0 0 0 0.031372549 0 0 0 0 0.501960784 0 0 0 0.15 0"
                          in="shadowBlurOuter1"
                        />
                      </filter>
                      <path
                        d="M17.947 0h14.106c6.24 0 8.503.65 10.785 1.87a12.721 12.721 0 015.292 5.292C49.35 9.444 50 11.707 50 17.947v14.106c0 6.24-.65 8.503-1.87 10.785a12.721 12.721 0 01-5.292 5.292C40.556 49.35 38.293 50 32.053 50H17.947c-6.24 0-8.503-.65-10.785-1.87a12.721 12.721 0 01-5.292-5.292C.65 40.556 0 38.293 0 32.053V17.947c0-6.24.65-8.503 1.87-10.785A12.721 12.721 0 017.162 1.87C9.444.65 11.707 0 17.947 0z"
                        id="path-2TriangleIcon1"
                      />
                    </defs>
                    <g
                      id="Page-1TriangleIcon1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Desktop-HDTriangleIcon1"
                        transform="translate(-291 -1278)"
                      >
                        <g
                          id="FeaturesTriangleIcon1"
                          transform="translate(170 915)"
                        >
                          <g
                            id="Group-9TriangleIcon1"
                            transform="translate(0 365)"
                          >
                            <g
                              id="Group-8TriangleIcon1"
                              transform="translate(125)"
                            >
                              <g id="Rectangle-9TriangleIcon1">
                                <use
                                  fill="#000"
                                  filter="url(#filter-3TriangleIcon1)"
                                  xlinkHref="#path-2TriangleIcon1"
                                />
                                <use
                                  fill="url(#linearGradient-1TriangleIcon1)"
                                  xlinkHref="#path-2TriangleIcon1"
                                />
                              </g>
                              <g
                                id="playTriangleIcon1"
                                transform="translate(18 15)"
                                fill="#FFF"
                                fillRule="nonzero"
                              >
                                <path
                                  d="M9.432 2.023l8.919 14.879a1.05 1.05 0 01-.384 1.452 1.097 1.097 0 01-.548.146H-.42A1.07 1.07 0 01-1.5 17.44c0-.19.052-.375.15-.538L7.567 2.023a1.092 1.092 0 011.864 0z"
                                  id="TriangleIcon1"
                                  transform="rotate(90 8.5 10)"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <h4 className="relative mt-6 text-lg font-bold">
                    Track Expenses
                  </h4>
                  <p className="relative mt-2 text-base text-center text-gray-600">
                    Monitor all your spending and save more.
                  </p>
                  <a
                    href="#_"
                    className="relative flex mt-2 text-sm font-medium text-indigo-500 underline"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
                <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                  <svg
                    className="absolute w-full h-full text-gray-100 fill-current"
                    viewBox="0 0 358 372"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g>
                        <path d="M315.7 6.5c30.2 15.1 42.6 61.8 41.5 102.5-1.1 40.6-15.7 75.2-24.3 114.8-8.7 39.7-11.3 84.3-34.3 107.2-23 22.9-66.3 23.9-114.5 30.7-48.2 6.7-101.3 19.1-123.2-4.1-21.8-23.2-12.5-82.1-21.6-130.2C30.2 179.3 2.6 141.9.7 102c-2-39.9 21.7-82.2 57.4-95.6 35.7-13.5 83.3 2.1 131.2 1.7 47.9-.4 96.1-16.8 126.4-1.6z" />
                      </g>
                    </g>
                  </svg>
                  {/*FEATURE Icon 2 */}
                  <svg
                    className="relative w-20 h-20"
                    viewBox="0 0 58 58"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                        id="linearGradient-1Icon2"
                      >
                        <stop stopColor="#F2C314" offset="0%" />
                        <stop stopColor="#FC3832" offset="100%" />
                      </linearGradient>
                      <filter
                        x="-14%"
                        y="-10%"
                        width="128%"
                        height="128%"
                        filterUnits="objectBoundingBox"
                        id="filter-3Icon2"
                      >
                        <feOffset
                          dy="2"
                          in="SourceAlpha"
                          result="shadowOffsetOuter1"
                        />
                        <feGaussianBlur
                          stdDeviation="2"
                          in="shadowOffsetOuter1"
                          result="shadowBlurOuter1"
                        />
                        <feColorMatrix
                          values="0 0 0 0 0.501960784 0 0 0 0 0.125490196 0 0 0 0 0 0 0 0 0.15 0"
                          in="shadowBlurOuter1"
                        />
                      </filter>
                      <path
                        d="M17.947 0h14.106c6.24 0 8.503.65 10.785 1.87a12.721 12.721 0 015.292 5.292C49.35 9.444 50 11.707 50 17.947v14.106c0 6.24-.65 8.503-1.87 10.785a12.721 12.721 0 01-5.292 5.292C40.556 49.35 38.293 50 32.053 50H17.947c-6.24 0-8.503-.65-10.785-1.87a12.721 12.721 0 01-5.292-5.292C.65 40.556 0 38.293 0 32.053V17.947c0-6.24.65-8.503 1.87-10.785A12.721 12.721 0 017.162 1.87C9.444.65 11.707 0 17.947 0z"
                        id="path-2Icon2"
                      />
                    </defs>
                    <g
                      id="Page-1Icon2"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="Desktop-HDIcon2" transform="translate(-691 -1278)">
                        <g id="FeaturesIcon2" transform="translate(170 915)">
                          <g
                            id="Group-9-CopyIcon2"
                            transform="translate(400 365)"
                          >
                            <g id="Group-8Icon2" transform="translate(125)">
                              <g id="Rectangle-9Icon2">
                                <use
                                  fill="#000"
                                  filter="url(#filter-3Icon2)"
                                  xlinkHref="#path-2Icon2"
                                />
                                <use
                                  fill="url(#linearGradient-1Icon2)"
                                  xlinkHref="#path-2Icon2"
                                />
                              </g>
                              <g
                                id="machine-learningIcon2"
                                transform="translate(14 12)"
                                fill="#FFF"
                                fillRule="nonzero"
                              >
                                <path
                                  d="M10.554 21.418v-2.68c-1.1-.204-1.932-1.143-1.932-2.271 0-.468.143-.903.388-1.267l-2.32-1.662L4.367 15.2a2.254 2.254 0 01-.005 2.541l5.28 4.05c.268-.182.577-.311.911-.373zm.892 0c.334.062.643.191.912.373l5.28-4.05a2.254 2.254 0 01-.006-2.54l-2.321-1.663L12.99 15.2c.245.364.388.8.388 1.267 0 1.128-.832 2.067-1.932 2.27v2.681zm1.538.997c.25.365.394.803.394 1.274C13.378 24.965 12.314 26 11 26s-2.378-1.035-2.378-2.311c0-.471.145-.91.394-1.274l-5.28-4.05c-.385.26-.853.413-1.358.413C1.065 18.778 0 17.743 0 16.467c0-1.129.832-2.068 1.932-2.27v-2.393C.832 11.6 0 10.662 0 9.534c0-1.277 1.065-2.312 2.378-2.312.505 0 .973.153 1.358.414l5.28-4.05a2.254 2.254 0 01-.394-1.275C8.622 1.035 9.686 0 11 0s2.378 1.035 2.378 2.311c0 .471-.145.91-.394 1.274l5.28 4.05c.385-.26.853-.413 1.358-.413C20.935 7.222 22 8.257 22 9.533c0 1.129-.832 2.068-1.932 2.27v2.393c1.1.203 1.932 1.142 1.932 2.27 0 1.277-1.065 2.312-2.378 2.312-.505 0-.973-.153-1.358-.414l-5.28 4.05zm-9.243-7.843L5.937 13l-2.196-1.572c-.27.183-.58.314-.917.376v2.392c.336.062.647.193.917.376zm.627-3.772l2.321 1.662L9.01 10.8a2.254 2.254 0 01-.388-1.267c0-1.128.832-2.067 1.932-2.27V4.582a2.403 2.403 0 01-.912-.373l-5.28 4.05a2.254 2.254 0 01.006 2.54zm13.89 3.772c.27-.183.582-.314.918-.376v-2.392a2.403 2.403 0 01-.917-.376L16.063 13l2.196 1.572zm-.62-6.313l-5.28-4.05a2.403 2.403 0 01-.912.373v2.68c1.1.204 1.932 1.143 1.932 2.271 0 .468-.143.903-.388 1.267l2.32 1.662 2.322-1.662a2.254 2.254 0 01.005-2.541zm-8 6.313A2.415 2.415 0 0111 14.156c.507 0 .977.154 1.363.416L14.559 13l-2.196-1.572a2.415 2.415 0 01-1.363.416c-.507 0-.977-.154-1.363-.416L7.441 13l2.196 1.572zM11 10.978c.821 0 1.486-.647 1.486-1.445 0-.797-.665-1.444-1.486-1.444s-1.486.647-1.486 1.444c0 .798.665 1.445 1.486 1.445zm0 6.933c.821 0 1.486-.647 1.486-1.444 0-.798-.665-1.445-1.486-1.445s-1.486.647-1.486 1.445c0 .797.665 1.444 1.486 1.444zm8.622-6.933c.82 0 1.486-.647 1.486-1.445 0-.797-.665-1.444-1.486-1.444s-1.487.647-1.487 1.444c0 .798.666 1.445 1.487 1.445zm0 6.933c.82 0 1.486-.647 1.486-1.444 0-.798-.665-1.445-1.486-1.445s-1.487.647-1.487 1.445c0 .797.666 1.444 1.487 1.444zM2.378 10.978c.821 0 1.487-.647 1.487-1.445 0-.797-.666-1.444-1.487-1.444-.82 0-1.486.647-1.486 1.444 0 .798.665 1.445 1.486 1.445zm0 6.933c.821 0 1.487-.647 1.487-1.444 0-.798-.666-1.445-1.487-1.445-.82 0-1.486.647-1.486 1.445 0 .797.665 1.444 1.486 1.444zM11 25.133c.821 0 1.486-.646 1.486-1.444 0-.798-.665-1.445-1.486-1.445s-1.486.647-1.486 1.445.665 1.444 1.486 1.444zm0-21.377c.821 0 1.486-.647 1.486-1.445S11.821.867 11 .867s-1.486.646-1.486 1.444c0 .798.665 1.445 1.486 1.445z"
                                  id="ShapeIcon2"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <h4 className="relative mt-6 text-lg font-bold">
                    Financial Insights
                  </h4>
                  <p className="relative mt-2 text-base text-center text-gray-600">
                    Get personalized insights and tips.
                  </p>
                  <a
                    href="#_"
                    className="relative flex mt-2 text-sm font-medium text-indigo-500 underline"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="w-full max-w-md p-4 mx-auto mb-16 lg:mb-0 lg:w-1/3">
                <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                  <svg
                    className="absolute w-full h-full text-gray-100 fill-current"
                    viewBox="0 0 378 410"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g>
                        <path d="M305.9 14.4c23.8 24.6 16.3 84.9 26.6 135.1 10.4 50.2 38.6 90.3 43.7 137.8 5.1 47.5-12.8 102.4-50.7 117.4-37.9 15.1-95.7-9.8-151.7-12.2-56.1-2.5-110.3 17.6-130-3.4-19.7-20.9-4.7-82.9-11.5-131.2C25.5 209.5-3 174.7 1.2 147c4.2-27.7 41-48.3 75-69.6C110.1 56.1 141 34.1 184 17.5c43.1-16.6 98.1-27.7 121.9-3.1z" />
                      </g>
                    </g>
                  </svg>
                  {/* FEATURE Icon 3  */}
                  <svg
                    className="relative w-20 h-20"
                    viewBox="0 0 58 58"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                        id="linearGradient-1Icon3"
                      >
                        <stop stopColor="#32FBFC" offset="0%" />
                        <stop stopColor="#3214F2" offset="100%" />
                      </linearGradient>
                      <filter
                        x="-14%"
                        y="-10%"
                        width="128%"
                        height="128%"
                        filterUnits="objectBoundingBox"
                        id="filter-3Icon3"
                      >
                        <feOffset
                          dy="2"
                          in="SourceAlpha"
                          result="shadowOffsetOuter1"
                        />
                        <feGaussianBlur
                          stdDeviation="2"
                          in="shadowOffsetOuter1"
                          result="shadowBlurOuter1"
                        />
                        <feColorMatrix
                          values="0 0 0 0 0.031372549 0 0 0 0 0.149019608 0 0 0 0 0.658823529 0 0 0 0.15 0"
                          in="shadowBlurOuter1"
                        />
                      </filter>
                      <path
                        d="M17.947 0h14.106c6.24 0 8.503.65 10.785 1.87a12.721 12.721 0 015.292 5.292C49.35 9.444 50 11.707 50 17.947v14.106c0 6.24-.65 8.503-1.87 10.785a12.721 12.721 0 01-5.292 5.292C40.556 49.35 38.293 50 32.053 50H17.947c-6.24 0-8.503-.65-10.785-1.87a12.721 12.721 0 01-5.292-5.292C.65 40.556 0 38.293 0 32.053V17.947c0-6.24.65-8.503 1.87-10.785A12.721 12.721 0 017.162 1.87C9.444.65 11.707 0 17.947 0z"
                        id="path-2Icon3"
                      />
                    </defs>
                    <g
                      id="Page-1Icon3"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Desktop-HDIcon3"
                        transform="translate(-1091 -1278)"
                      >
                        <g id="FeaturesIcon3" transform="translate(170 915)">
                          <g
                            id="Group-9-Copy-2Icon3"
                            transform="translate(800 365)"
                          >
                            <g id="Group-8Icon3" transform="translate(125)">
                              <g id="Rectangle-9Icon3">
                                <use
                                  fill="#000"
                                  filter="url(#filter-3Icon3)"
                                  xlinkHref="#path-2Icon3"
                                />
                                <use
                                  fill="url(#linearGradient-1Icon3)"
                                  xlinkHref="#path-2Icon3"
                                />
                              </g>
                              <g
                                id="smart-notificationsIcon3"
                                transform="translate(15 11)"
                                fill="#FFF"
                                fillRule="nonzero"
                              >
                                <path
                                  d="M12.519 3.243a6.808 6.808 0 00-.187 1.298h-8.44a2.595 2.595 0 00-2.595 2.594v12.973a2.595 2.595 0 002.595 2.595h12.973a2.595 2.595 0 002.594-2.595v-8.44c.445-.02.88-.084 1.298-.187v8.627A3.892 3.892 0 0116.865 24H3.892A3.892 3.892 0 010 20.108V7.135a3.892 3.892 0 013.892-3.892h8.627zm6.616 6.487a4.865 4.865 0 110-9.73 4.865 4.865 0 010 9.73z"
                                  id="IconIcon3"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <h4 className="relative mt-6 text-lg font-bold">Budgeting</h4>
                  <p className="relative mt-2 text-base text-center text-gray-600">
                    Set monthly or yearly budgets and stick to them.
                  </p>
                  <a
                    href="#_"
                    className="relative flex mt-2 text-sm font-medium text-indigo-500 underline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*END FEATURES SECTION*/}
        {/* Pricing Section */}
        <div className="relative px-8 py-10 bg-white border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0">
          <div
            id="pricing"
            className="container flex flex-col items-center h-full max-w-6xl mx-auto"
          >
            <h2 className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">
              Our Pricing
            </h2>
            <h3 className="w-full max-w-2xl px-5 px-8 mt-2 text-2xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl md:px-0">
              Simple, Transparent Pricing for Everyone
            </h3>

            <div className="max-w-full mx-auto md:max-w-6xl sm:px-8">
              {/* Basic Pricing */}
              <div className="relative flex flex-col items-center block sm:flex-row">
                <div className="relative z-0 w-11/12 max-w-sm my-8 border border-gray-200 rounded-lg sm:w-3/5 lg:w-1/3 sm:my-5 md:-mr-4">
                  <div className="overflow-hidden text-black bg-white border-t border-gray-100 rounded-lg shadow-sm">
                    <div className="block max-w-sm px-8 mx-auto mt-5 text-sm text-left text-black sm:text-md lg:px-6">
                      <h3 className="p-3 text-lg font-bold tracking-wide text-center uppercase">
                        Basic<span className="ml-2 font-light">Plan</span>
                      </h3>
                      <h4 className="flex items-center justify-center pb-6 text-4xl font-bold text-center text-gray-900">
                        <span className="mr-1 -ml-2 text-lg text-gray-700">
                          $
                        </span>
                        48
                      </h4>
                      <p className="text-sm text-gray-600">
                        In our basic plan you can take advantage of all these
                        features below.
                      </p>
                    </div>

                    <div className="flex flex-wrap px-6 mt-8">
                      <ul>
                        <li className="flex items-center">
                          <div className="p-2 text-green-500 rounded-full fill-current ">
                            <svg
                              className="w-6 h-6 align-middle"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <span className="ml-3 text-lg text-gray-700">
                            Awesome Feature
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="p-2 text-green-500 rounded-full fill-current ">
                            <svg
                              className="w-6 h-6 align-middle"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <span className="ml-3 text-lg text-gray-700">
                            And Another Cool Feature
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="p-2 text-green-500 rounded-full fill-current ">
                            <svg
                              className="w-6 h-6 align-middle"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <span className="ml-3 text-lg text-gray-700">
                            One More Feature
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center block p-8 uppercase">
                      <a
                        href="#_"
                        className="block w-full px-6 py-4 mt-3 text-lg font-semibold text-center text-white bg-gray-900 rounded shadow-sm hover:bg-green-600"
                      >
                        Select This Plan
                      </a>
                    </div>
                  </div>
                </div>
                {/* Pro Pricing */}
                <div className="relative z-10 w-full max-w-md my-8 bg-white rounded-lg shadow-lg sm:w-2/3 lg:w-1/3 sm:my-5">
                  <div className="py-4 text-sm font-semibold leading-none tracking-wide text-center text-white uppercase bg-indigo-500 rounded-t">
                    Most Popular
                  </div>
                  <div className="block max-w-sm px-8 mx-auto mt-5 text-sm text-left text-black sm:text-md lg:px-6">
                    <h3 className="p-3 pb-1 text-lg font-bold tracking-wide text-center uppercase">
                      Pro<span className="ml-2 font-light">Plan</span>
                    </h3>
                    <h4 className="flex items-center justify-center pb-6 text-5xl font-bold text-center text-gray-900">
                      <span className="mr-1 -ml-2 text-lg text-gray-700">
                        $
                      </span>
                      98
                    </h4>
                    <p className="text-sm text-gray-600">
                      Our most popular package is the Pro Plan which gives you
                      access to the following:
                    </p>
                  </div>
                  <div className="flex justify-start pl-12 mt-8 sm:justify-start">
                    <ul>
                      <li className="flex items-center">
                        <div className="p-2 text-green-500 rounded-full fill-current">
                          <svg
                            className="w-6 h-6 align-middle"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="ml-3 text-lg text-gray-700">
                          Really Cool Features
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="p-2 text-green-500 rounded-full fill-current ">
                          <svg
                            className="w-6 h-6 align-middle"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="ml-3 text-lg text-gray-700">
                          Another Cool Feature
                        </span>
                      </li>
                      <li className="flex items-center">
                        <div className="p-2 text-green-500 rounded-full fill-current ">
                          <svg
                            className="w-6 h-6 align-middle"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="ml-3 text-lg text-gray-700">
                          And One More
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center block p-8 uppercase">
                    <a
                      href="#_"
                      className="block w-full px-6 py-4 mt-3 text-lg font-semibold text-center text-white bg-gray-900 rounded shadow-sm hover:bg-indigo-600"
                    >
                      Select This Plan
                    </a>
                  </div>
                </div>
                {/* Premium Pricing */}
                <div className="relative z-0 w-11/12 max-w-sm my-8 rounded-lg shadow-lg sm:w-3/5 lg:w-1/3 sm:my-5 md:-ml-4">
                  <div className="overflow-hidden text-black bg-white rounded-lg shadow-lg shadow-inner">
                    <div className="block max-w-sm px-8 mx-auto mt-5 text-sm text-left text-black sm:text-md lg:px-8">
                      <h3 className="p-3 pb-1 text-lg font-bold tracking-wide text-center uppercase">
                        Premium<span className="ml-2 font-light">Plan</span>
                      </h3>
                      <h4 className="flex items-center justify-center pb-6 text-4xl font-bold text-center text-gray-900">
                        <span className="mr-1 -ml-2 text-lg text-gray-700">
                          $
                        </span>
                        78
                      </h4>
                      <p className="pl-2 text-sm text-gray-600">
                        With our premium plan you can take advantage of all the
                        following features:
                      </p>
                    </div>
                    <div className="flex flex-wrap px-8 mt-8">
                      <ul>
                        <li className="flex items-center">
                          <div className="p-2 text-green-500 rounded-full fill-current ">
                            <svg
                              className="w-6 h-6 align-middle"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <span className="ml-3 text-lg text-gray-700">
                            Totally Tubular Feature
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="p-2 text-green-500 rounded-full fill-current ">
                            <svg
                              className="w-6 h-6 align-middle"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <span className="ml-3 text-lg text-gray-700">
                            Super Cool Feature
                          </span>
                        </li>
                        <li className="flex items-center">
                          <div className="p-2 text-green-500 rounded-full fill-current ">
                            <svg
                              className="w-6 h-6 align-middle"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <span className="ml-3 text-lg text-gray-700">
                            And One More
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex items-center block p-8 uppercase">
                      <a
                        href="#_"
                        className="block w-full px-6 py-4 mt-3 text-lg font-semibold text-center text-white bg-gray-900 rounded shadow-sm hover:bg-green-600"
                      >
                        Select This Plan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Pricing Section */}

        {/*Start Testimonials */}
        <div
          id="testimonials"
          className="flex items-center justify-center w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex-col items-center ">
              <div className="flex flex-col items-center justify-center w-full h-full max-w-2xl pr-8 mx-auto text-center">
                <p className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">
                  Our customers love our product
                </p>
                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                  Testimonials
                </h2>
                <p className="my-6 text-xl font-medium text-gray-500">
                  Don't just take our word for it, read from our extensive list
                  of case studies and customer testimonials.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center max-w-2xl py-8 mx-auto xl:flex-row xl:max-w-full">
                <div className="w-full xl:w-1/2 xl:pr-8">
                  <blockquote className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
                    <div className="flex flex-col pr-8">
                      <div className="relative pl-12">
                        <svg
                          className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 125"
                        >
                          <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                        </svg>
                        <p className="mt-2 text-base text-gray-600">
                          I'm loving these templates! Very nice features and
                          layouts.
                        </p>
                      </div>

                      <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                        Sandra Walton{" "}
                        <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                          - CEO SomeCompany
                        </span>
                      </h3>
                      <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                    </div>
                    <img
                      className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                      src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2694&q=80"
                      alt=""
                    />
                  </blockquote>
                  <blockquote className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 mt-16 mb-16 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease xl:mb-0">
                    <div className="flex flex-col pr-10">
                      <div className="relative pl-12">
                        <svg
                          className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 125"
                        >
                          <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                        </svg>
                        <p className="mt-2 text-base text-gray-600">
                          Really digging this service. Now I can quickly
                          bootstrap any project.
                        </p>
                      </div>
                      <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                        Kenny Jones{" "}
                        <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                          - CEO SomeCompany
                        </span>
                      </h3>
                      <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                    </div>
                    <img
                      className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                      src="https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
                      alt=""
                    />
                  </blockquote>
                </div>
                <div className="w-full xl:w-1/2 xl:pl-8">
                  <blockquote className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
                    <div className="flex flex-col pr-10">
                      <div className="relative pl-12">
                        <svg
                          className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 125"
                        >
                          <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                        </svg>
                        <p className="mt-2 text-base text-gray-600">
                          Extremely helpful in every single project we have
                          released.
                        </p>
                      </div>

                      <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                        Mike Smith
                        <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                          - CEO SomeCompany
                        </span>
                      </h3>
                      <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                    </div>
                    <img
                      className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80"
                      alt=""
                    />
                  </blockquote>
                  <blockquote className="flex flex-col-reverse items-center justify-between w-full col-span-1 p-6 mt-16 text-center transition-all duration-200 bg-gray-100 rounded-lg md:flex-row md:text-left hover:bg-white hover:shadow ease">
                    <div className="flex flex-col pr-10">
                      <div className="relative pl-12">
                        <svg
                          className="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 125"
                        >
                          <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                        </svg>
                        <p className="mt-2 text-base text-gray-600">
                          Finally a quick and easy system I can use for any type
                          of project.
                        </p>
                      </div>

                      <h3 className="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 truncate">
                        Molly Sanchez{" "}
                        <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                          - CEO SomeCompany
                        </span>
                      </h3>
                      <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                    </div>
                    <img
                      className="flex-shrink-0 object-cover w-24 h-24 mb-5 bg-gray-300 rounded-full md:mb-0"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
                      alt=""
                    />
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Testimonials*/}
      </section>
      <Footer />
    </main>
  );
}
