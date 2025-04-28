import DashboardHeader from "@/components/header/DashboardHeader";
import Footer from "@/components/footer/DashboardFooter";

export default function HomePage() {
  return (
    <div>
      <DashboardHeader />
      <main>
        <div className="mx-auto max-w-(--breakpoint-2xl) p-4 md:p-6">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12">

              {/* Metric Group Three */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 xl:grid-cols-4">
                {/* Metric Item Start */}

                <div className="rounded-2xl border border-pink-200 bg-white p-5 dark:border-pink-800 dark:bg-white/[0.03] md:p-6">
                  <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-pink-400 text-gray-700 dark:bg-pink-600 dark:text-white">
                    <svg
                      className="fill-current"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.3662 1.11216C20.6592 0.8193 21.134 0.819349 21.4269 1.11227C21.7198 1.4052 21.7197 1.88007 21.4268 2.17293L17.0308 6.56803C16.7379 6.8609 16.263 6.86085 15.9701 6.56792C15.6773 6.275 15.6773 5.80013 15.9702 5.50726L20.3662 1.11216ZM16.6592 2.696C16.952 2.40308 16.952 1.9282 16.659 1.63534C16.3661 1.34248 15.8913 1.34253 15.5984 1.63545L14.0987 3.13545C13.8058 3.42837 13.8059 3.90325 14.0988 4.19611C14.3917 4.48897 14.8666 4.48892 15.1595 4.196L16.6592 2.696ZM11.8343 3.45488C11.7079 3.19888 11.4472 3.0368 11.1617 3.0368C10.8762 3.0368 10.6155 3.19888 10.4892 3.45488L8.06431 8.36817L2.64217 9.15605C2.35966 9.19711 2.12495 9.39499 2.03673 9.6665C1.94851 9.93801 2.02208 10.2361 2.22651 10.4353L6.15001 14.2598L5.2238 19.66C5.17554 19.9414 5.29121 20.2258 5.52216 20.3936C5.75312 20.5614 6.05932 20.5835 6.31201 20.4506L11.1617 17.901L16.0114 20.4506C16.2641 20.5835 16.5703 20.5614 16.8013 20.3936C17.0322 20.2258 17.1479 19.9414 17.0996 19.66L16.1734 14.2598L20.0969 10.4353C20.3014 10.2361 20.3749 9.93801 20.2867 9.6665C20.1985 9.39499 19.9638 9.19711 19.6813 9.15605L14.2591 8.36817L11.8343 3.45488ZM9.23491 9.3856L11.1617 5.48147L13.0885 9.3856C13.1978 9.60696 13.4089 9.76039 13.6532 9.79588L17.9617 10.4219L14.8441 13.4609C14.6673 13.6332 14.5866 13.8814 14.6284 14.1247L15.3643 18.4158L11.5107 16.3898C11.2922 16.275 11.0312 16.275 10.8127 16.3898L6.9591 18.4158L7.69508 14.1247C7.7368 13.8814 7.65614 13.6332 7.47938 13.4609L4.36174 10.4219L8.67021 9.79588C8.91449 9.76039 9.12567 9.60696 9.23491 9.3856ZM21.6514 5.12825C21.9443 5.42111 21.9444 5.89598 21.6515 6.18891L20.1518 7.68891C19.8589 7.98183 19.3841 7.98188 19.0912 7.68901C18.7982 7.39615 18.7982 6.92128 19.091 6.62836L20.5907 5.12836C20.8836 4.83543 21.3585 4.83538 21.6514 5.12825Z"
                        fill=""
                      />
                    </svg>
                  </div>
                  <p className="text-theme-sm text-gray-500 dark:text-white">
                    Monthly Income
                  </p>
                  <div className="mt-3 flex items-end justify-between">
                    <div>
                      <h4 className="text-title-sm font-bold text-gray-800 dark:text-white/90">
                        ₹50,000
                      </h4> {/* Replace with dynamic value */}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="flex items-center gap-1 rounded-full bg-success-50 px-2 py-0.5 text-theme-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">
                        +15%
                      </span>
                      <span className="text-theme-xs text-gray-500 dark:text-white">
                        Vs last month
                      </span>
                    </div>
                  </div>
                </div>

                {/* Metric Item End Metric Item Start */}
                <div className="rounded-2xl border border-pink-200 bg-white p-5 dark:border-pink-800 dark:bg-white/[0.03] md:p-6">
                  <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-pink-400 text-gray-700 dark:bg-pink-600 dark:text-white">
                    <svg
                      className="fill-current"
                      width={25}
                      height={24}
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.3662 1.11216C20.6592 0.8193 21.134 0.819349 21.4269 1.11227C21.7198 1.4052 21.7197 1.88007 21.4268 2.17293L17.0308 6.56803C16.7379 6.8609 16.263 6.86085 15.9701 6.56792C15.6773 6.275 15.6773 5.80013 15.9702 5.50726L20.3662 1.11216ZM16.6592 2.696C16.952 2.40308 16.952 1.9282 16.659 1.63534C16.3661 1.34248 15.8913 1.34253 15.5984 1.63545L14.0987 3.13545C13.8058 3.42837 13.8059 3.90325 14.0988 4.19611C14.3917 4.48897 14.8666 4.48892 15.1595 4.196L16.6592 2.696ZM11.8343 3.45488C11.7079 3.19888 11.4472 3.0368 11.1617 3.0368C10.8762 3.0368 10.6155 3.19888 10.4892 3.45488L8.06431 8.36817L2.64217 9.15605C2.35966 9.19711 2.12495 9.39499 2.03673 9.6665C1.94851 9.93801 2.02208 10.2361 2.22651 10.4353L6.15001 14.2598L5.2238 19.66C5.17554 19.9414 5.29121 20.2258 5.52216 20.3936C5.75312 20.5614 6.05932 20.5835 6.31201 20.4506L11.1617 17.901L16.0114 20.4506C16.2641 20.5835 16.5703 20.5614 16.8013 20.3936C17.0322 20.2258 17.1479 19.9414 17.0996 19.66L16.1734 14.2598L20.0969 10.4353C20.3014 10.2361 20.3749 9.93801 20.2867 9.6665C20.1985 9.39499 19.9638 9.19711 19.6813 9.15605L14.2591 8.36817L11.8343 3.45488ZM9.23491 9.3856L11.1617 5.48147L13.0885 9.3856C13.1978 9.60696 13.4089 9.76039 13.6532 9.79588L17.9617 10.4219L14.8441 13.4609C14.6673 13.6332 14.5866 13.8814 14.6284 14.1247L15.3643 18.4158L11.5107 16.3898C11.2922 16.275 11.0312 16.275 10.8127 16.3898L6.9591 18.4158L7.69508 14.1247C7.7368 13.8814 7.65614 13.6332 7.47938 13.4609L4.36174 10.4219L8.67021 9.79588C8.91449 9.76039 9.12567 9.60696 9.23491 9.3856ZM21.6514 5.12825C21.9443 5.42111 21.9444 5.89598 21.6515 6.18891L20.1518 7.68891C19.8589 7.98183 19.3841 7.98188 19.0912 7.68901C18.7982 7.39615 18.7982 6.92128 19.091 6.62836L20.5907 5.12836C20.8836 4.83543 21.3585 4.83538 21.6514 5.12825Z"
                        fill=""
                      />
                    </svg>
                  </div>
                  <p className="text-theme-sm text-gray-500 dark:text-white"> Monthly Expenses </p>
                  <div className="mt-3 flex items-end justify-between">
                    <div>
                      <h4 className="text-title-sm font-bold text-gray-800 dark:text-white/90">
                        ₹ 20,500
                      </h4>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="flex items-center gap-1 rounded-full bg-success-50 px-2 py-0.5 text-theme-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">
                        +5.75%
                      </span>
                      <span className="text-theme-xs text-gray-500 dark:text-white">
                        Vs last month
                      </span>
                    </div>
                  </div>
                </div>

                {/* Metric Item End Metric Item Start */}
                <div className="rounded-2xl border border-pink-200 bg-white p-5 dark:border-pink-800 dark:bg-white/[0.03] md:p-6">
                  <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-pink-400 text-gray-700 dark:bg-pink-600 dark:text-white">
                    <svg
                      className="fill-current"
                      width={25}
                      height={24}
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.4164 2.79175C13.4164 2.37753 13.0806 2.04175 12.6664 2.04175C12.2522 2.04175 11.9164 2.37753 11.9164 2.79175V4.39876C9.94768 4.67329 8.43237 6.36366 8.43237 8.40795C8.43237 10.0954 9.47908 11.6058 11.0591 12.1984L13.7474 13.2066C14.7419 13.5795 15.4008 14.5303 15.4008 15.5925C15.4008 16.9998 14.2599 18.1407 12.8526 18.1407H11.7957C10.7666 18.1407 9.93237 17.3064 9.93237 16.2773C9.93237 15.8631 9.59659 15.5273 9.18237 15.5273C8.76816 15.5273 8.43237 15.8631 8.43237 16.2773C8.43237 18.1348 9.9382 19.6407 11.7957 19.6407H11.9164V21.2083C11.9164 21.6225 12.2522 21.9583 12.6664 21.9583C13.0806 21.9583 13.4164 21.6225 13.4164 21.2083V19.6017C15.3853 19.3274 16.9008 17.6369 16.9008 15.5925C16.9008 13.905 15.8541 12.3946 14.2741 11.8021L11.5858 10.7939C10.5912 10.4209 9.93237 9.47013 9.93237 8.40795C9.93237 7.00063 11.0732 5.85976 12.4806 5.85976H13.5374C14.5665 5.85976 15.4008 6.69401 15.4008 7.72311C15.4008 8.13732 15.7366 8.47311 16.1508 8.47311C16.565 8.47311 16.9008 8.13732 16.9008 7.72311C16.9008 5.86558 15.395 4.35976 13.5374 4.35976H13.4164V2.79175Z"
                        fill=""
                      />
                    </svg>
                  </div>
                  <p className="text-theme-sm text-gray-500 dark:text-white">
                    Monthly Savings
                  </p>
                  <div className="mt-3 flex items-end justify-between">
                    <div>
                      <h4 className="text-title-sm font-bold text-gray-800 dark:text-white/90">
                        {" "}
                        $9,758{" "}
                      </h4>{" "}
                    </div>
                    <div className="flex items-center gap-1">
                      {" "}
                      <span className="flex items-center gap-1 rounded-full bg-success-50 px-2 py-0.5 text-theme-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">
                        {" "}
                        +15%{" "}
                      </span>{" "}
                      <span className="text-theme-xs text-gray-500 dark:text-white">
                        {" "}
                        Vs last month{" "}
                      </span>{" "}
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-5 dark:border-blue-800 dark:bg-white/[0.03] md:p-6">
                  {/* Card Icon */}
                  <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-white text-gray-700 dark:bg-indigo-600 dark:text-white">
                    {/* Example: Visa Logo, replace with relevant SVG or Icon */}
                    <svg
                      className="fill-current"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7ZM4 7V8H20V7H4ZM4 10V17H20V10H4ZM6 12H8V14H6V12ZM10 12H12V14H10V12Z"
                        fill=""
                      />
                    </svg>
                  </div>

                  {/* Bank Name */}
                  <h4 className="text-title-sm font-semibold text-white">HDFC Bank</h4>

                  {/* Card Balance and Masked Number */}
                  <div className="mt-3">
                    <p className="text-xl font-bold text-white">Balance: ₹XX,XXX</p>
                    <p className="text-sm text-white/90">Card Number: 4321 **** 1234</p>
                  </div>

                  {/* Extra Info or Status */}
                  <div className="mt-3 flex items-end justify-between">
                    <div>
                      <p className="text-sm text-white/90">Debit/Credit Cards Linked</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="flex items-center gap-1 rounded-full bg-success-50 px-2 py-0.5 text-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">
                        +1
                      </span>
                      <span className="text-xs text-white/90">Since last month</span>
                    </div>
                  </div>
                </div>



                {/* Metric Item End */}
              </div>
              {/* Metric Group Three */}
            </div>
            <div className="col-span-12 space-y-6 xl:col-span-8">
              {/* Chart Eight Start */}
              <div className="rounded-2xl border border-pink-200 bg-white px-5 pb-5 pt-5 dark:border-pink-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
                <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                      {" "}
                      Impression &amp; Data Traffic{" "}
                    </h3>
                    <p className="mt-1 text-gray-500 text-theme-sm dark:text-white">
                      {" "}
                      Jun 1, 2024 - Dec 1, 2025{" "}
                    </p>
                  </div>
                  <div className="flex flex-row-reverse items-center justify-end gap-0.5 sm:flex-col sm:items-start">
                    <div className="flex flex-row-reverse items-center gap-3 sm:flex-row sm:gap-2">
                      <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">
                        {" "}
                        $9,758.00{" "}
                      </h4>{" "}
                      <span className="flex items-center gap-1 rounded-full bg-success-50 px-2 py-0.5 text-theme-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">
                        {" "}
                        +7.96%{" "}
                      </span>{" "}
                    </div>{" "}
                    <span className="text-gray-500 text-theme-xs dark:text-white">
                      {" "}
                      Total Revenue{" "}
                    </span>{" "}
                  </div>
                </div>
                <div className="max-w-full overflow-x-auto custom-scrollbar">
                  <div
                    id="chartEight"
                    className="-ml-4 min-w-[1000px] pl-2 xl:min-w-full"
                    style={{ minHeight: 325 }}
                  >
                    <div
                      id="apexchartszv5d3q5e"
                      className="apexcharts-canvas apexchartszv5d3q5e apexcharts-theme-"
                      style={{ width: 739, height: 310 }}
                    >
                      <svg
                        id="SvgjsSvg1006"
                        width={739}
                        height={310}
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="apexcharts-svg apexcharts-zoomable hovering-zoom"
                        transform="translate(0, 0)"
                      >

                        <foreignObject x={0} y={0} width={739} height={310}>
                          <div
                            xmlns="http://www.w3.org/1999/xhtml"
                            style={{
                              position: "relative",
                              height: "100%",
                              width: "100%"
                            }}
                          >
                            <div
                              className="apexcharts-legend"
                              style={{ maxHeight: 155 }}
                            />
                          </div>
                        </foreignObject>
                        <rect
                          id="SvgjsRect1011"
                          width={0}
                          height={0}
                          x={0}
                          y={0}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fefefe"
                        />
                        <g
                          id="SvgjsG1016"
                          className="apexcharts-datalabels-group"
                          transform="translate(0, 0) scale(1)"
                        />
                        <g
                          id="SvgjsG1017"
                          className="apexcharts-datalabels-group"
                          transform="translate(0, 0) scale(1)"
                        />
                        <g
                          id="SvgjsG1089"
                          className="apexcharts-yaxis"
                          rel={0}
                          transform="translate(16.125, 0)"
                        >
                          <g id="SvgjsG1090" className="apexcharts-yaxis-texts-g">
                            <text
                              id="SvgjsText1092"
                              fontFamily="Outfit, sans-serif"
                              x={20}
                              y="33.666666666666664"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{ fontFamily: "Outfit, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1093">250</tspan>
                              <title>250</title>
                            </text>
                            <text
                              id="SvgjsText1095"
                              fontFamily="Outfit, sans-serif"
                              x={20}
                              y="81.74794672838847"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{ fontFamily: "Outfit, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1096">200</tspan>
                              <title>200</title>
                            </text>
                            <text
                              id="SvgjsText1098"
                              fontFamily="Outfit, sans-serif"
                              x={20}
                              y="129.82922679011028"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{ fontFamily: "Outfit, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1099">150</tspan>
                              <title>150</title>
                            </text>
                            <text
                              id="SvgjsText1101"
                              fontFamily="Outfit, sans-serif"
                              x={20}
                              y="177.91050685183208"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{ fontFamily: "Outfit, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1102">100</tspan>
                              <title>100</title>
                            </text>
                            <text
                              id="SvgjsText1104"
                              fontFamily="Outfit, sans-serif"
                              x={20}
                              y="225.99178691355388"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{ fontFamily: "Outfit, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1105">50</tspan>
                              <title>50</title>
                            </text>
                            <text
                              id="SvgjsText1107"
                              fontFamily="Outfit, sans-serif"
                              x={20}
                              y="274.0730669752757"
                              textAnchor="end"
                              dominantBaseline="auto"
                              fontSize="11px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-yaxis-label "
                              style={{ fontFamily: "Outfit, sans-serif" }}
                            >
                              <tspan id="SvgjsTspan1108">0</tspan>
                              <title>0</title>
                            </text>
                          </g>
                        </g>
                        <g
                          id="SvgjsG1008"
                          className="apexcharts-inner apexcharts-graphical"
                          transform="translate(46.125, 30)"
                        >
                          <defs id="SvgjsDefs1007">
                            <clipPath id="gridRectMaskzv5d3q5e">
                              <rect
                                id="SvgjsRect1013"
                                width="671.0190057754517"
                                height="240.40640030860902"
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="gridRectBarMaskzv5d3q5e">
                              <rect
                                id="SvgjsRect1014"
                                width="677.0190057754517"
                                height="246.40640030860902"
                                x={-3}
                                y={-3}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="gridRectMarkerMaskzv5d3q5e">
                              <rect
                                id="SvgjsRect1015"
                                width="671.0190057754517"
                                height="240.40640030860902"
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fff"
                              />
                            </clipPath>
                            <clipPath id="forecastMaskzv5d3q5e" />
                            <clipPath id="nonForecastMaskzv5d3q5e" />
                            <linearGradient
                              id="SvgjsLinearGradient1022"
                              x1={0}
                              y1={0}
                              x2={0}
                              y2={1}
                            >
                              <stop
                                id="SvgjsStop1023"
                                stopOpacity="0.55"
                                stopColor="rgba(70,95,255,0.55)"
                                offset={0}
                              />
                              <stop
                                id="SvgjsStop1024"
                                stopOpacity={0}
                                stopColor="rgba(163,175,255,0)"
                                offset={1}
                              />
                              <stop
                                id="SvgjsStop1025"
                                stopOpacity={0}
                                stopColor="rgba(163,175,255,0)"
                                offset={1}
                              />
                            </linearGradient>
                            <linearGradient
                              id="SvgjsLinearGradient1031"
                              x1={0}
                              y1={0}
                              x2={0}
                              y2={1}
                            >
                              <stop
                                id="SvgjsStop1032"
                                stopOpacity="0.55"
                                stopColor="rgba(156,185,255,0.55)"
                                offset={0}
                              />
                              <stop
                                id="SvgjsStop1033"
                                stopOpacity={0}
                                stopColor="rgba(206,220,255,0)"
                                offset={1}
                              />
                              <stop
                                id="SvgjsStop1034"
                                stopOpacity={0}
                                stopColor="rgba(206,220,255,0)"
                                offset={1}
                              />
                            </linearGradient>
                          </defs>
                          <line
                            id="SvgjsLine1012"
                            x1="670.5190057754517"
                            y1={0}
                            x2="670.5190057754517"
                            y2="240.40640030860902"
                            stroke="#b6b6b6"
                            strokeDasharray={3}
                            strokeLinecap="butt"
                            className="apexcharts-xcrosshairs"
                            x="670.5190057754517"
                            y={0}
                            width={1}
                            height="240.40640030860902"
                            fill="#b1b9c4"
                            filter="none"
                            fillOpacity="0.9"
                            strokeWidth={1}
                          />
                          <g id="SvgjsG1037" className="apexcharts-grid">
                            <g
                              id="SvgjsG1038"
                              className="apexcharts-gridlines-horizontal"
                            >
                              <line
                                id="SvgjsLine1042"
                                x1={0}
                                y1="48.081280061721806"
                                x2="671.0190057754517"
                                y2="48.081280061721806"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1043"
                                x1={0}
                                y1="96.16256012344361"
                                x2="671.0190057754517"
                                y2="96.16256012344361"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1044"
                                x1={0}
                                y1="144.24384018516542"
                                x2="671.0190057754517"
                                y2="144.24384018516542"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine1045"
                                x1={0}
                                y1="192.32512024688722"
                                x2="671.0190057754517"
                                y2="192.32512024688722"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                            </g>
                            <g
                              id="SvgjsG1039"
                              className="apexcharts-gridlines-vertical"
                            />
                            <line
                              id="SvgjsLine1048"
                              x1={0}
                              y1="240.40640030860902"
                              x2="671.0190057754517"
                              y2="240.40640030860902"
                              stroke="transparent"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                            />
                            <line
                              id="SvgjsLine1047"
                              x1={0}
                              y1={1}
                              x2={0}
                              y2="240.40640030860902"
                              stroke="transparent"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                            />
                          </g>
                          <g id="SvgjsG1040" className="apexcharts-grid-borders">
                            <line
                              id="SvgjsLine1041"
                              x1={0}
                              y1={0}
                              x2="671.0190057754517"
                              y2={0}
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                            <line
                              id="SvgjsLine1046"
                              x1={0}
                              y1="240.40640030860902"
                              x2="671.0190057754517"
                              y2="240.40640030860902"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-gridline"
                            />
                          </g>
                          <g
                            id="SvgjsG1018"
                            className="apexcharts-area-series apexcharts-plot-series"
                          >
                            <g
                              id="SvgjsG1019"
                              className="apexcharts-series"
                              zindex={0}
                              seriesname="Sales"
                              data-longestseries="true"
                              rel={1}
                              data-realindex={0}
                            >

                              <path
                                id="SvgjsPath1026"
                                d="M0 67.3137920864105C21.350604729218915 67.3137920864105 39.65112306854942 57.697536074066136 61.00172779776833 57.697536074066136C82.35233252698725 57.697536074066136 100.65285086631775 76.93004809875487 122.00345559553666 76.93004809875487C143.35406032475558 76.93004809875487 161.65457866408607 86.54630411109923 183.005183393305 86.54630411109923C204.3557881225239 86.54630411109923 222.65630646185443 72.12192009258268 244.00691119107333 72.12192009258268C265.35751592029226 72.12192009258268 283.65803425962275 81.73817610492705 305.00863898884165 81.73817610492705C326.35924371806055 81.73817610492705 344.6597620573911 76.93004809875487 366.01036678661 76.93004809875487C387.3609715158289 76.93004809875487 405.6614898551594 43.273152055549616 427.0120945843783 43.273152055549616C448.3626993135972 43.273152055549616 466.66321765292776 19.232512024688702 488.01382238214666 19.232512024688702C509.36442711136556 19.232512024688702 527.664945450696 38.46502404937743 549.015550179915 38.46502404937743C570.3661549091339 38.46502404937743 588.6666732484643 9.616256012344337 610.0172779776833 9.616256012344337C631.3678827069023 9.616256012344337 649.6684010462327 14.42438401851652 671.0190057754517 14.42438401851652C671.0190057754517 14.42438401851652 671.0190057754517 14.42438401851652 671.0190057754517 240.40640030860902L0 240.40640030860902C0 240.40640030860902 0 67.3137920864105 0 67.3137920864105 "
                                fill="url(#SvgjsLinearGradient1022)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={0}
                                strokeDasharray={0}
                                className="apexcharts-area"
                                index={0}
                                clipPath="url(#gridRectMaskzv5d3q5e)"
                                pathto="M 0 67.3137920864105C 21.350604729218915 67.3137920864105 39.65112306854942 57.697536074066136 61.00172779776833 57.697536074066136C 82.35233252698725 57.697536074066136 100.65285086631775 76.93004809875487 122.00345559553666 76.93004809875487C 143.35406032475558 76.93004809875487 161.65457866408607 86.54630411109923 183.005183393305 86.54630411109923C 204.3557881225239 86.54630411109923 222.65630646185443 72.12192009258268 244.00691119107333 72.12192009258268C 265.35751592029226 72.12192009258268 283.65803425962275 81.73817610492705 305.00863898884165 81.73817610492705C 326.35924371806055 81.73817610492705 344.6597620573911 76.93004809875487 366.01036678661 76.93004809875487C 387.3609715158289 76.93004809875487 405.6614898551594 43.273152055549616 427.0120945843783 43.273152055549616C 448.3626993135972 43.273152055549616 466.66321765292776 19.232512024688702 488.01382238214666 19.232512024688702C 509.36442711136556 19.232512024688702 527.664945450696 38.46502404937743 549.015550179915 38.46502404937743C 570.3661549091339 38.46502404937743 588.6666732484643 9.616256012344337 610.0172779776833 9.616256012344337C 631.3678827069023 9.616256012344337 649.6684010462327 14.42438401851652 671.0190057754517 14.42438401851652C 671.0190057754517 14.42438401851652 671.0190057754517 14.42438401851652 671.0190057754517 240.40640030860902 L 0 240.40640030860902z"
                                pathfrom="M 0 240.40640030860902 L 0 240.40640030860902 L 61.00172779776833 240.40640030860902 L 122.00345559553666 240.40640030860902 L 183.005183393305 240.40640030860902 L 244.00691119107333 240.40640030860902 L 305.00863898884165 240.40640030860902 L 366.01036678661 240.40640030860902 L 427.0120945843783 240.40640030860902 L 488.01382238214666 240.40640030860902 L 549.015550179915 240.40640030860902 L 610.0172779776833 240.40640030860902 L 671.0190057754517 240.40640030860902z"
                              />
                              <path
                                id="SvgjsPath1027"
                                d="M0 67.3137920864105C21.350604729218915 67.3137920864105 39.65112306854942 57.697536074066136 61.00172779776833 57.697536074066136C82.35233252698725 57.697536074066136 100.65285086631775 76.93004809875487 122.00345559553666 76.93004809875487C143.35406032475558 76.93004809875487 161.65457866408607 86.54630411109923 183.005183393305 86.54630411109923C204.3557881225239 86.54630411109923 222.65630646185443 72.12192009258268 244.00691119107333 72.12192009258268C265.35751592029226 72.12192009258268 283.65803425962275 81.73817610492705 305.00863898884165 81.73817610492705C326.35924371806055 81.73817610492705 344.6597620573911 76.93004809875487 366.01036678661 76.93004809875487C387.3609715158289 76.93004809875487 405.6614898551594 43.273152055549616 427.0120945843783 43.273152055549616C448.3626993135972 43.273152055549616 466.66321765292776 19.232512024688702 488.01382238214666 19.232512024688702C509.36442711136556 19.232512024688702 527.664945450696 38.46502404937743 549.015550179915 38.46502404937743C570.3661549091339 38.46502404937743 588.6666732484643 9.616256012344337 610.0172779776833 9.616256012344337C631.3678827069023 9.616256012344337 649.6684010462327 14.42438401851652 671.0190057754517 14.42438401851652C671.0190057754517 14.42438401851652 671.0190057754517 14.42438401851652 671.0190057754517 14.42438401851652 "
                                fill="none"
                                fillOpacity={1}
                                stroke="#465fff"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={2}
                                strokeDasharray={0}
                                className="apexcharts-area"
                                index={0}
                                clipPath="url(#gridRectMaskzv5d3q5e)"
                                pathto="M 0 67.3137920864105C 21.350604729218915 67.3137920864105 39.65112306854942 57.697536074066136 61.00172779776833 57.697536074066136C 82.35233252698725 57.697536074066136 100.65285086631775 76.93004809875487 122.00345559553666 76.93004809875487C 143.35406032475558 76.93004809875487 161.65457866408607 86.54630411109923 183.005183393305 86.54630411109923C 204.3557881225239 86.54630411109923 222.65630646185443 72.12192009258268 244.00691119107333 72.12192009258268C 265.35751592029226 72.12192009258268 283.65803425962275 81.73817610492705 305.00863898884165 81.73817610492705C 326.35924371806055 81.73817610492705 344.6597620573911 76.93004809875487 366.01036678661 76.93004809875487C 387.3609715158289 76.93004809875487 405.6614898551594 43.273152055549616 427.0120945843783 43.273152055549616C 448.3626993135972 43.273152055549616 466.66321765292776 19.232512024688702 488.01382238214666 19.232512024688702C 509.36442711136556 19.232512024688702 527.664945450696 38.46502404937743 549.015550179915 38.46502404937743C 570.3661549091339 38.46502404937743 588.6666732484643 9.616256012344337 610.0172779776833 9.616256012344337C 631.3678827069023 9.616256012344337 649.6684010462327 14.42438401851652 671.0190057754517 14.42438401851652"
                                pathfrom="M 0 240.40640030860902 L 0 240.40640030860902 L 61.00172779776833 240.40640030860902 L 122.00345559553666 240.40640030860902 L 183.005183393305 240.40640030860902 L 244.00691119107333 240.40640030860902 L 305.00863898884165 240.40640030860902 L 366.01036678661 240.40640030860902 L 427.0120945843783 240.40640030860902 L 488.01382238214666 240.40640030860902 L 549.015550179915 240.40640030860902 L 610.0172779776833 240.40640030860902 L 671.0190057754517 240.40640030860902"
                                fillRule="evenodd"
                              />
                              <g
                                id="SvgjsG1020"
                                className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                data-realindex={0}
                              >
                                <g className="apexcharts-series-markers">
                                  <path
                                    id="SvgjsPath1112"
                                    d="M 671.0190057754517, 0 m -0, 0 a 0,0 0 1,0 0,0 a 0,0 0 1,0 -0,0"
                                    fill="#465fff"
                                    fillOpacity={1}
                                    stroke="#ffffff"
                                    strokeOpacity="0.9"
                                    strokeLinecap="butt"
                                    strokeWidth={2}
                                    strokeDasharray={0}
                                    cx="671.0190057754517"
                                    cy={0}
                                    shape="circle"
                                    className="apexcharts-marker wbcohnij2 no-pointer-events"
                                    default-marker-size={0}
                                  />
                                </g>
                              </g>
                            </g>
                            <g
                              id="SvgjsG1028"
                              className="apexcharts-series"
                              zindex={1}
                              seriesname="Revenue"
                              data-longestserie="true"
                              rel={2}
                              data-realindex={1}
                            >
                              <path
                                id="SvgjsPath1035"
                                d="M0 201.94137625923156C21.350604729218915 201.94137625923156 39.65112306854942 211.55763227157593 61.00172779776833 211.55763227157593C82.35233252698725 211.55763227157593 100.65285086631775 192.3251202468872 122.00345559553666 192.3251202468872C143.35406032475558 192.3251202468872 161.65457866408607 201.94137625923156 183.005183393305 201.94137625923156C204.3557881225239 201.94137625923156 222.65630646185443 187.51699224071504 244.00691119107333 187.51699224071504C265.35751592029226 187.51699224071504 283.65803425962275 201.94137625923156 305.00863898884165 201.94137625923156C326.35924371806055 201.94137625923156 344.6597620573911 173.0926082221985 366.01036678661 173.0926082221985C387.3609715158289 173.0926082221985 405.6614898551594 144.2438401851654 427.0120945843783 144.2438401851654C448.3626993135972 144.2438401851654 466.66321765292776 134.62758417282106 488.01382238214666 134.62758417282106C509.36442711136556 134.62758417282106 527.664945450696 125.01132816047668 549.015550179915 125.01132816047668C570.3661549091339 125.01132816047668 588.6666732484643 96.1625601234436 610.0172779776833 96.1625601234436C631.3678827069023 96.1625601234436 649.6684010462327 105.77881613578796 671.0190057754517 105.77881613578796C671.0190057754517 105.77881613578796 671.0190057754517 105.77881613578796 671.0190057754517 240.40640030860902L0 240.40640030860902C0 240.40640030860902 0 201.94137625923156 0 201.94137625923156 "
                                fill="url(#SvgjsLinearGradient1031)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={0}
                                strokeDasharray={0}
                                className="apexcharts-area"
                                index={1}
                                clipPath="url(#gridRectMaskzv5d3q5e)"
                                pathto="M 0 201.94137625923156C 21.350604729218915 201.94137625923156 39.65112306854942 211.55763227157593 61.00172779776833 211.55763227157593C 82.35233252698725 211.55763227157593 100.65285086631775 192.3251202468872 122.00345559553666 192.3251202468872C 143.35406032475558 192.3251202468872 161.65457866408607 201.94137625923156 183.005183393305 201.94137625923156C 204.3557881225239 201.94137625923156 222.65630646185443 187.51699224071504 244.00691119107333 187.51699224071504C 265.35751592029226 187.51699224071504 283.65803425962275 201.94137625923156 305.00863898884165 201.94137625923156C 326.35924371806055 201.94137625923156 344.6597620573911 173.0926082221985 366.01036678661 173.0926082221985C 387.3609715158289 173.0926082221985 405.6614898551594 144.2438401851654 427.0120945843783 144.2438401851654C 448.3626993135972 144.2438401851654 466.66321765292776 134.62758417282106 488.01382238214666 134.62758417282106C 509.36442711136556 134.62758417282106 527.664945450696 125.01132816047668 549.015550179915 125.01132816047668C 570.3661549091339 125.01132816047668 588.6666732484643 96.1625601234436 610.0172779776833 96.1625601234436C 631.3678827069023 96.1625601234436 649.6684010462327 105.77881613578796 671.0190057754517 105.77881613578796C 671.0190057754517 105.77881613578796 671.0190057754517 105.77881613578796 671.0190057754517 240.40640030860902 L 0 240.40640030860902z"
                                pathfrom="M 0 240.40640030860902 L 0 240.40640030860902 L 61.00172779776833 240.40640030860902 L 122.00345559553666 240.40640030860902 L 183.005183393305 240.40640030860902 L 244.00691119107333 240.40640030860902 L 305.00863898884165 240.40640030860902 L 366.01036678661 240.40640030860902 L 427.0120945843783 240.40640030860902 L 488.01382238214666 240.40640030860902 L 549.015550179915 240.40640030860902 L 610.0172779776833 240.40640030860902 L 671.0190057754517 240.40640030860902z"
                              />
                              <path
                                id="SvgjsPath1036"
                                d="M0 201.94137625923156C21.350604729218915 201.94137625923156 39.65112306854942 211.55763227157593 61.00172779776833 211.55763227157593C82.35233252698725 211.55763227157593 100.65285086631775 192.3251202468872 122.00345559553666 192.3251202468872C143.35406032475558 192.3251202468872 161.65457866408607 201.94137625923156 183.005183393305 201.94137625923156C204.3557881225239 201.94137625923156 222.65630646185443 187.51699224071504 244.00691119107333 187.51699224071504C265.35751592029226 187.51699224071504 283.65803425962275 201.94137625923156 305.00863898884165 201.94137625923156C326.35924371806055 201.94137625923156 344.6597620573911 173.0926082221985 366.01036678661 173.0926082221985C387.3609715158289 173.0926082221985 405.6614898551594 144.2438401851654 427.0120945843783 144.2438401851654C448.3626993135972 144.2438401851654 466.66321765292776 134.62758417282106 488.01382238214666 134.62758417282106C509.36442711136556 134.62758417282106 527.664945450696 125.01132816047668 549.015550179915 125.01132816047668C570.3661549091339 125.01132816047668 588.6666732484643 96.1625601234436 610.0172779776833 96.1625601234436C631.3678827069023 96.1625601234436 649.6684010462327 105.77881613578796 671.0190057754517 105.77881613578796C671.0190057754517 105.77881613578796 671.0190057754517 105.77881613578796 671.0190057754517 105.77881613578796 "
                                fill="none"
                                fillOpacity={1}
                                stroke="#9cb9ff"
                                strokeOpacity={1}
                                strokeLinecap="butt"
                                strokeWidth={2}
                                strokeDasharray={0}
                                className="apexcharts-area"
                                index={1}
                                clipPath="url(#gridRectMaskzv5d3q5e)"
                                pathto="M 0 201.94137625923156C 21.350604729218915 201.94137625923156 39.65112306854942 211.55763227157593 61.00172779776833 211.55763227157593C 82.35233252698725 211.55763227157593 100.65285086631775 192.3251202468872 122.00345559553666 192.3251202468872C 143.35406032475558 192.3251202468872 161.65457866408607 201.94137625923156 183.005183393305 201.94137625923156C 204.3557881225239 201.94137625923156 222.65630646185443 187.51699224071504 244.00691119107333 187.51699224071504C 265.35751592029226 187.51699224071504 283.65803425962275 201.94137625923156 305.00863898884165 201.94137625923156C 326.35924371806055 201.94137625923156 344.6597620573911 173.0926082221985 366.01036678661 173.0926082221985C 387.3609715158289 173.0926082221985 405.6614898551594 144.2438401851654 427.0120945843783 144.2438401851654C 448.3626993135972 144.2438401851654 466.66321765292776 134.62758417282106 488.01382238214666 134.62758417282106C 509.36442711136556 134.62758417282106 527.664945450696 125.01132816047668 549.015550179915 125.01132816047668C 570.3661549091339 125.01132816047668 588.6666732484643 96.1625601234436 610.0172779776833 96.1625601234436C 631.3678827069023 96.1625601234436 649.6684010462327 105.77881613578796 671.0190057754517 105.77881613578796"
                                pathfrom="M 0 240.40640030860902 L 0 240.40640030860902 L 61.00172779776833 240.40640030860902 L 122.00345559553666 240.40640030860902 L 183.005183393305 240.40640030860902 L 244.00691119107333 240.40640030860902 L 305.00863898884165 240.40640030860902 L 366.01036678661 240.40640030860902 L 427.0120945843783 240.40640030860902 L 488.01382238214666 240.40640030860902 L 549.015550179915 240.40640030860902 L 610.0172779776833 240.40640030860902 L 671.0190057754517 240.40640030860902"
                                fillRule="evenodd"
                              />
                              <g
                                id="SvgjsG1029"
                                className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                data-realindex={1}
                              >
                                <g className="apexcharts-series-markers">
                                  <path
                                    id="SvgjsPath1113"
                                    d="M 671.0190057754517, 0 m -0, 0 a 0,0 0 1,0 0,0 a 0,0 0 1,0 -0,0"
                                    fill="#9cb9ff"
                                    fillOpacity={1}
                                    stroke="#ffffff"
                                    strokeOpacity="0.9"
                                    strokeLinecap="butt"
                                    strokeWidth={2}
                                    strokeDasharray={0}
                                    cx="671.0190057754517"
                                    cy={0}
                                    shape="circle"
                                    className="apexcharts-marker wa7criljkl no-pointer-events"
                                    default-marker-size={0}
                                  />
                                </g>
                              </g>
                            </g>
                            <g
                              id="SvgjsG1021"
                              className="apexcharts-datalabels"
                              data-realindex={0}
                            />
                            <g
                              id="SvgjsG1030"
                              className="apexcharts-datalabels"
                              data-realindex={1}
                            />
                          </g>
                          <line
                            id="SvgjsLine1049"
                            x1={0}
                            y1={0}
                            x2="671.0190057754517"
                            y2={0}
                            stroke="#b6b6b6"
                            strokeDasharray={0}
                            strokeWidth={1}
                            strokeLinecap="butt"
                            className="apexcharts-ycrosshairs"
                          />
                          <line
                            id="SvgjsLine1050"
                            x1={0}
                            y1={0}
                            x2="671.0190057754517"
                            y2={0}
                            strokeDasharray={0}
                            strokeWidth={0}
                            strokeLinecap="butt"
                            className="apexcharts-ycrosshairs-hidden"
                          />
                          <g
                            id="SvgjsG1051"
                            className="apexcharts-xaxis"
                            transform="translate(0, 0)"
                          >
                            <g
                              id="SvgjsG1052"
                              className="apexcharts-xaxis-texts-g"
                              transform="translate(0, -4)"
                            >
                              <text
                                id="SvgjsText1054"
                                fontFamily="Outfit, sans-serif"
                                x={0}
                                y="268.406400308609"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{ fontFamily: "Outfit, sans-serif" }}
                              >
                                <tspan id="SvgjsTspan1055">Jan</tspan>
                                <title>Jan</title>
                              </text>
                              <text
                                id="SvgjsText1057"
                                fontFamily="Outfit, sans-serif"
                                x="61.00172779776834"
                                y="268.406400308609"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{ fontFamily: "Outfit, sans-serif" }}
                              >
                                <tspan id="SvgjsTspan1058">Feb</tspan>
                                <title>Feb</title>
                              </text>
                              <text
                                id="SvgjsText1060"
                                fontFamily="Outfit, sans-serif"
                                x="122.00345559553666"
                                y="268.406400308609"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{ fontFamily: "Outfit, sans-serif" }}
                              >
                                <tspan id="SvgjsTspan1061">Mar</tspan>
                                <title>Mar</title>
                              </text>
                              <text
                                id="SvgjsText1063"
                                fontFamily="Outfit, sans-serif"
                                x="183.00518339330497"
                                y="268.406400308609"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{ fontFamily: "Outfit, sans-serif" }}
                              >
                                <tspan id="SvgjsTspan1064">Apr</tspan>
                                <title>Apr</title>
                              </text>
                              <text
                                id="SvgjsText1066"
                                fontFamily="Outfit, sans-serif"
                                x="244.0069111910733"
                                y="268.406400308609"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{ fontFamily: "Outfit, sans-serif" }}
                              >
                                <tspan id="SvgjsTspan1067">May</tspan>
                                <title>May</title>
                              </text>
                              <text
                                id="SvgjsText1069"
                                fontFamily="Outfit, sans-serif"
                                x="305.00863898884165"
                                y="268.406400308609"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{ fontFamily: "Outfit, sans-serif" }}
                              >
                                <tspan id="SvgjsTspan1070">Jun</tspan>
                                <title>Jun</title>
                              </text>
                              <text
                                id="SvgjsText1072"
                                fontFamily="Outfit, sans-serif"
                                x="366.01036678661"
                                y="268.406400308609"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{ fontFamily: "Outfit, sans-serif" }}
                              >
                                <tspan id="SvgjsTspan1073">Jul</tspan>
                                <title>Jul</title>
                              </text>
                              <text
                                id="SvgjsText1075"
                                fontFamily="Outfit, sans-serif"
                                x="427.01209458437836"
                                y="268.406400308609"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{ fontFamily: "Outfit, sans-serif" }}
                              >
                                <tspan id="SvgjsTspan1076">Aug</tspan>
                                <title>Aug</title>
                              </text>
                              <text
                                id="SvgjsText1078"
                                fontFamily="Outfit, sans-serif"
                                x="488.0138223821467"
                                y="268.406400308609"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{ fontFamily: "Outfit, sans-serif" }}
                              >
                                <tspan id="SvgjsTspan1079">Sep</tspan>
                                <title>Sep</title>
                              </text>
                              <text
                                id="SvgjsText1081"
                                fontFamily="Outfit, sans-serif"
                                x="549.0155501799151"
                                y="268.406400308609"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{ fontFamily: "Outfit, sans-serif" }}
                              >
                                <tspan id="SvgjsTspan1082">Oct</tspan>
                                <title>Oct</title>
                              </text>
                              <text
                                id="SvgjsText1084"
                                fontFamily="Outfit, sans-serif"
                                x="610.0172779776834"
                                y="268.406400308609"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{ fontFamily: "Outfit, sans-serif" }}
                              >
                                <tspan id="SvgjsTspan1085">Nov</tspan>
                                <title>Nov</title>
                              </text>
                              <text
                                id="SvgjsText1087"
                                fontFamily="Outfit, sans-serif"
                                x="671.0190057754518"
                                y="268.406400308609"
                                textAnchor="middle"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#373d3f"
                                className="apexcharts-text apexcharts-xaxis-label "
                                style={{ fontFamily: "Outfit, sans-serif" }}
                              >
                                <tspan id="SvgjsTspan1088">Dec</tspan>
                                <title>Dec</title>
                              </text>
                            </g>
                          </g>
                          <g
                            id="SvgjsG1109"
                            className="apexcharts-yaxis-annotations apexcharts-hidden-element-shown"
                          />
                          <g
                            id="SvgjsG1110"
                            className="apexcharts-xaxis-annotations apexcharts-hidden-element-shown"
                          />
                          <g
                            id="SvgjsG1111"
                            className="apexcharts-point-annotations apexcharts-hidden-element-shown"
                          />
                          <rect
                            id="SvgjsRect1114"
                            width={0}
                            height={0}
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fefefe"
                            className="apexcharts-zoom-rect"
                          />
                          <rect
                            id="SvgjsRect1115"
                            width={0}
                            height={0}
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fefefe"
                            className="apexcharts-selection-rect"
                          />
                        </g>
                      </svg>

                      <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                        <div className="apexcharts-yaxistooltip-text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ====== Chart Eight End ====== Table Three Start */}
              <div className="overflow-hidden rounded-2xl border border-pink-200 bg-white px-5 pt-4 pb-3 sm:px-6 dark:border-pink-800 dark:bg-white/[0.03]">
                <div className="flex justify-between gap-2 mb-4 sm:items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                      {" "}
                      Featured Campaigns{" "}
                    </h3>
                  </div>
                </div>
                <div className="max-w-full overflow-x-auto custom-scrollbar">
                  <table className="w-full">
                    <thead>
                      <tr className="border-pink-100 border-y dark:border-pink-800">
                        <th className="py-3 font-normal text-left">
                          <p className="text-gray-500 text-theme-sm dark:text-white">
                            {" "}
                            Creator{" "}
                          </p>
                        </th>
                        <th className="py-3 font-normal text-left">
                          <p className="text-gray-500 text-theme-sm dark:text-white">
                            {" "}
                            Campaign{" "}
                          </p>
                        </th>
                        <th className="py-3 font-normal text-left">
                          <p className="text-gray-500 text-theme-sm dark:text-white">
                            Status
                          </p>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      <tr>
                        <td className="py-3" colSpan={1}>
                          <div className="flex items-center gap-[18px]">
                            <div className="w-10 h-10 overflow-hidden rounded-full">
                              {" "}
                              <img
                                src="src/images/user/user-01.jpg"
                                alt="user"
                              />{" "}
                            </div>
                            <div>
                              <p className="text-gray-700 text-theme-sm dark:text-white">
                                {" "}
                                Wilson Gouse{" "}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center w-full gap-5">
                            <div className="w-full max-w-8">
                              {" "}
                              <img
                                src="src/images/brand/brand-01.svg"
                                alt="brand"
                              />{" "}
                            </div>
                            <div className="truncate">
                              <p className="text-theme-sm mb-0.5 truncate font-medium text-gray-700 dark:text-white">
                                {" "}
                                Grow your brand by...{" "}
                              </p>{" "}
                              <span className="text-gray-500 text-theme-xs dark:text-white">
                                {" "}
                                Ads campaign{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <p className="bg-success-50 text-theme-xs text-success-600 dark:bg-success-500/15 dark:text-success-500 inline-block rounded-full px-2 py-0.5 font-medium">
                            {" "}
                            Success{" "}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3" colSpan={1}>
                          <div className="flex items-center gap-[18px]">
                            <div className="w-10 h-10 overflow-hidden rounded-full">
                              {" "}
                              <img
                                src="src/images/user/user-02.jpg"
                                alt="user"
                              />{" "}
                            </div>
                            <div>
                              <p className="text-gray-700 text-theme-sm dark:text-white">
                                {" "}
                                Terry Franci{" "}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center w-full gap-5">
                            <div className="w-full max-w-8">
                              {" "}
                              <img
                                src="src/images/brand/brand-02.svg"
                                alt="brand"
                              />{" "}
                            </div>
                            <div className="truncate">
                              <p className="text-theme-sm mb-0.5 truncate font-medium text-gray-700 dark:text-white">
                                {" "}
                                Make Better Ideas...{" "}
                              </p>{" "}
                              <span className="text-gray-500 text-theme-xs dark:text-white">
                                {" "}
                                Ads campaign{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <p className="bg-warning-50 text-theme-xs text-warning-600 dark:bg-warning-500/15 inline-block rounded-full px-2 py-0.5 font-medium dark:text-orange-400">
                            {" "}
                            Pending{" "}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3" colSpan={1}>
                          <div className="flex items-center gap-[18px]">
                            <div className="w-10 h-10 overflow-hidden rounded-full">
                              {" "}
                              <img
                                src="src/images/user/user-03.jpg"
                                alt="user"
                              />{" "}
                            </div>
                            <div>
                              <p className="text-gray-700 text-theme-sm dark:text-white">
                                {" "}
                                Alena Franci{" "}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center w-full gap-5">
                            <div className="w-full max-w-8">
                              {" "}
                              <img
                                src="src/images/brand/brand-03.svg"
                                alt="brand"
                              />{" "}
                            </div>
                            <div className="truncate">
                              <p className="text-theme-sm mb-0.5 truncate font-medium text-gray-700 dark:text-white">
                                {" "}
                                Increase your website tra...{" "}
                              </p>{" "}
                              <span className="text-gray-500 text-theme-xs dark:text-white">
                                {" "}
                                Ads campaign{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <p className="bg-success-50 text-theme-xs text-success-600 dark:bg-success-500/15 dark:text-success-500 inline-block rounded-full px-2 py-0.5 font-medium">
                            {" "}
                            Success{" "}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3" colSpan={1}>
                          <div className="flex items-center gap-[18px]">
                            <div className="w-10 h-10 overflow-hidden rounded-full">
                              {" "}
                              <img
                                src="src/images/user/user-04.jpg"
                                alt="user"
                              />{" "}
                            </div>
                            <div>
                              <p className="text-gray-700 text-theme-sm dark:text-white">
                                {" "}
                                Jocelyn Kenter{" "}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center w-full gap-5">
                            <div className="w-full max-w-8">
                              {" "}
                              <img
                                src="src/images/brand/brand-04.svg"
                                alt="brand"
                              />{" "}
                            </div>
                            <div className="truncate">
                              <p className="text-theme-sm mb-0.5 truncate font-medium text-gray-700 dark:text-white">
                                {" "}
                                Digital Marketing that...{" "}
                              </p>{" "}
                              <span className="text-gray-500 text-theme-xs dark:text-white">
                                {" "}
                                Ads campaign{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <p className="bg-error-50 text-theme-xs text-error-600 dark:bg-error-500/15 dark:text-error-500 inline-block rounded-full px-2 py-0.5 font-medium">
                            {" "}
                            Failed{" "}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3" colSpan={1}>
                          <div className="flex items-center gap-[18px]">
                            <div className="w-10 h-10 overflow-hidden rounded-full">
                              {" "}
                              <img
                                src="src/images/user/user-05.jpg"
                                alt="user"
                              />{" "}
                            </div>
                            <div>
                              <p className="text-gray-700 text-theme-sm dark:text-white">
                                {" "}
                                Brandon Philips{" "}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center w-full gap-5">
                            <div className="w-full max-w-8">
                              {" "}
                              <img
                                src="src/images/brand/brand-02.svg"
                                alt="brand"
                              />{" "}
                            </div>
                            <div className="truncate">
                              <p className="text-theme-sm mb-0.5 truncate font-medium text-gray-700 dark:text-white">
                                {" "}
                                Self branding{" "}
                              </p>{" "}
                              <span className="text-gray-500 text-theme-xs dark:text-white">
                                {" "}
                                Ads campaign{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <p className="bg-success-50 text-theme-xs text-success-600 dark:bg-success-500/15 dark:text-success-500 inline-block rounded-full px-2 py-0.5 font-medium">
                            {" "}
                            Success{" "}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3" colSpan={1}>
                          <div className="flex items-center gap-[18px]">
                            <div className="w-10 h-10 overflow-hidden rounded-full">
                              {" "}
                              <img
                                src="src/images/user/user-06.jpg"
                                alt="user"
                              />{" "}
                            </div>
                            <div>
                              <p className="text-gray-700 text-theme-sm dark:text-white">
                                {" "}
                                James Lipshutz{" "}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center w-full gap-5">
                            <div className="w-full max-w-8">
                              {" "}
                              <img
                                src="src/images/brand/brand-03.svg"
                                alt="brand"
                              />{" "}
                            </div>
                            <div className="truncate">
                              <p className="text-theme-sm mb-0.5 truncate font-medium text-gray-700 dark:text-white">
                                {" "}
                                Increase your website tra...{" "}
                              </p>{" "}
                              <span className="text-gray-500 text-theme-xs dark:text-white">
                                {" "}
                                Ads campaign{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </td>
                        <td className="py-3">
                          <p className="bg-success-50 text-theme-xs text-success-600 dark:bg-success-500/15 dark:text-success-500 inline-block rounded-full px-2 py-0.5 font-medium">
                            {" "}
                            Success{" "}
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* ====== Table Three End */}
            </div>
            <div className="col-span-12 space-y-6 xl:col-span-4">
              {/* ====== Traffic Stats Start */}
              <div className="rounded-2xl border border-pink-200 bg-white px-5 pb-1 pt-5 dark:border-pink-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
                <div className="mb-6 flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                      {" "}
                      Traffic Stats{" "}
                    </h3>{" "}
                  </div>
                </div>
                <div>
                  {/* Stats item */}
                  <div className="flex items-end justify-between py-5">
                    <div>
                      <p className="mb-1 text-theme-sm text-gray-500 dark:text-white">
                        {" "}
                        New Subscribers{" "}
                      </p>
                      <h4 className="mb-1 text-2xl font-semibold text-gray-800 dark:text-white/90">
                        {" "}
                        567K{" "}
                      </h4>{" "}
                      <span className="flex items-center gap-1.5">
                        {" "}
                        <span className="text-success-600"> +3.85% </span>{" "}
                        <span className="text-theme-xs text-gray-500 dark:text-white">
                          {" "}
                          then last Week{" "}
                        </span>{" "}
                      </span>
                    </div>
                    <div className="w-full max-w-[150px]">
                      <div
                        className="chartNine chartNine-01"
                        style={{ minHeight: 70 }}
                      >
                        <div
                          id="apexcharts0glka4xp"
                          className="apexcharts-canvas apexcharts0glka4xp apexcharts-theme-"
                          style={{ width: 150, height: 70 }}
                        >
                          <svg
                            id="SvgjsSvg1116"
                            width={150}
                            height={70}
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            className="apexcharts-svg apexcharts-zoomable"
                            transform="translate(0, 0)"
                          >
                            <foreignObject x={0} y={0} width={150} height={70}>
                              <div
                                xmlns="http://www.w3.org/1999/xhtml"
                                style={{
                                  position: "relative",
                                  height: "100%",
                                  width: "100%"
                                }}
                              >
                                <div
                                  className="apexcharts-legend"
                                  style={{ maxHeight: 35 }}
                                />
                              </div>
                            </foreignObject>
                            <rect
                              id="SvgjsRect1120"
                              width={0}
                              height={0}
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fefefe"
                            />
                            <g
                              id="SvgjsG1127"
                              className="apexcharts-datalabels-group"
                              transform="translate(0, 0) scale(1)"
                            />
                            <g
                              id="SvgjsG1128"
                              className="apexcharts-datalabels-group"
                              transform="translate(0, 0) scale(1)"
                            />
                            <g
                              id="SvgjsG1155"
                              className="apexcharts-yaxis"
                              rel={0}
                              transform="translate(-8, 0)"
                            >
                              <g
                                id="SvgjsG1156"
                                className="apexcharts-yaxis-texts-g"
                              />
                            </g>
                            <g
                              id="SvgjsG1118"
                              className="apexcharts-inner apexcharts-graphical"
                              transform="translate(22, 30)"
                            >
                              <defs id="SvgjsDefs1117">
                                <clipPath id="gridRectMask0glka4xp">
                                  <rect
                                    id="SvgjsRect1124"
                                    width={118}
                                    height={25}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="gridRectBarMask0glka4xp">
                                  <rect
                                    id="SvgjsRect1125"
                                    width={123}
                                    height={30}
                                    x="-2.5"
                                    y="-2.5"
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="gridRectMarkerMask0glka4xp">
                                  <rect
                                    id="SvgjsRect1126"
                                    width={118}
                                    height={25}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="forecastMask0glka4xp" />
                                <clipPath id="nonForecastMask0glka4xp" />
                                <linearGradient
                                  id="SvgjsLinearGradient1133"
                                  x1={0}
                                  y1={0}
                                  x2={0}
                                  y2={1}
                                >
                                  <stop
                                    id="SvgjsStop1134"
                                    stopOpacity="0.55"
                                    stopColor="rgba(18,183,106,0.55)"
                                    offset={0}
                                  />
                                  <stop
                                    id="SvgjsStop1135"
                                    stopOpacity={0}
                                    stopColor="rgba(137,219,181,0)"
                                    offset={1}
                                  />
                                  <stop
                                    id="SvgjsStop1136"
                                    stopOpacity={0}
                                    stopColor="rgba(137,219,181,0)"
                                    offset={1}
                                  />
                                </linearGradient>
                              </defs>
                              <line
                                id="SvgjsLine1121"
                                x1={0}
                                y1={0}
                                x2={0}
                                y2={25}
                                stroke="#b6b6b6"
                                strokeDasharray={3}
                                strokeLinecap="butt"
                                className="apexcharts-xcrosshairs"
                                x={0}
                                y={0}
                                width={1}
                                height={25}
                                fill="#b1b9c4"
                                filter="none"
                                fillOpacity="0.9"
                                strokeWidth={1}
                              />
                              <g id="SvgjsG1139" className="apexcharts-grid">
                                <g
                                  id="SvgjsG1140"
                                  className="apexcharts-gridlines-horizontal"
                                  style={{ display: "none" }}
                                >
                                  <line
                                    id="SvgjsLine1143"
                                    x1={0}
                                    y1={0}
                                    x2={118}
                                    y2={0}
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                  <line
                                    id="SvgjsLine1144"
                                    x1={0}
                                    y1="12.5"
                                    x2={118}
                                    y2="12.5"
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                  <line
                                    id="SvgjsLine1145"
                                    x1={0}
                                    y1={25}
                                    x2={118}
                                    y2={25}
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                </g>
                                <g
                                  id="SvgjsG1141"
                                  className="apexcharts-gridlines-vertical"
                                  style={{ display: "none" }}
                                />
                                <line
                                  id="SvgjsLine1147"
                                  x1={0}
                                  y1={25}
                                  x2={118}
                                  y2={25}
                                  stroke="transparent"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                />
                                <line
                                  id="SvgjsLine1146"
                                  x1={0}
                                  y1={1}
                                  x2={0}
                                  y2={25}
                                  stroke="transparent"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                />
                              </g>
                              <g
                                id="SvgjsG1142"
                                className="apexcharts-grid-borders"
                                style={{ display: "none" }}
                              />
                              <g
                                id="SvgjsG1129"
                                className="apexcharts-area-series apexcharts-plot-series"
                              >
                                <g
                                  id="SvgjsG1130"
                                  className="apexcharts-series"
                                  zindex={0}
                                  seriesname="NewxSales"
                                  data-longestserie="true"
                                  rel={1}
                                  data-realindex={0}
                                >
                                  <path
                                    id="SvgjsPath1137"
                                    d="M0 6.25C4.9559999999999995 6.25 9.204 3.125 14.16 3.125C17.464 3.125 20.296 5.625 23.6 5.625C26.904 5.625 29.736 1.875 33.04 1.875C36.344 1.875 39.176 9.5 42.480000000000004 9.5C45.784000000000006 9.5 48.616 13.3125 51.92 13.3125C55.224000000000004 13.3125 58.056 6.5625 61.36 6.5625C64.664 6.5625 67.496 13.0625 70.8 13.0625C74.104 13.0625 76.936 8.1875 80.24000000000001 8.1875C83.54400000000001 8.1875 86.376 12.4375 89.68 12.4375C92.98400000000001 12.4375 95.816 13.4375 99.12 13.4375C102.424 13.4375 105.256 9.25 108.56 9.25C111.864 9.25 114.696 15.5625 118 15.5625C118 15.5625 118 15.5625 118 25L0 25C0 25 0 6.25 0 6.25 "
                                    fill="url(#SvgjsLinearGradient1133)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-area"
                                    index={0}
                                    clipPath="url(#gridRectMask0glka4xp)"
                                    pathto="M 0 6.25C 4.9559999999999995 6.25 9.204 3.125 14.16 3.125C 17.464 3.125 20.296 5.625 23.6 5.625C 26.904 5.625 29.736 1.875 33.04 1.875C 36.344 1.875 39.176 9.5 42.480000000000004 9.5C 45.784000000000006 9.5 48.616 13.3125 51.92 13.3125C 55.224000000000004 13.3125 58.056 6.5625 61.36 6.5625C 64.664 6.5625 67.496 13.0625 70.8 13.0625C 74.104 13.0625 76.936 8.1875 80.24000000000001 8.1875C 83.54400000000001 8.1875 86.376 12.4375 89.68 12.4375C 92.98400000000001 12.4375 95.816 13.4375 99.12 13.4375C 102.424 13.4375 105.256 9.25 108.56 9.25C 111.864 9.25 114.696 15.5625 118 15.5625C 118 15.5625 118 15.5625 118 25 L 0 25z"
                                    pathfrom="M 0 25 L 0 25 L 14.16 25 L 23.6 25 L 33.04 25 L 42.480000000000004 25 L 51.92 25 L 61.36 25 L 70.8 25 L 80.24000000000001 25 L 89.68 25 L 99.12 25 L 108.56 25 L 118 25z"
                                  />
                                  <path
                                    id="SvgjsPath1138"
                                    d="M0 6.25C4.9559999999999995 6.25 9.204 3.125 14.16 3.125C17.464 3.125 20.296 5.625 23.6 5.625C26.904 5.625 29.736 1.875 33.04 1.875C36.344 1.875 39.176 9.5 42.480000000000004 9.5C45.784000000000006 9.5 48.616 13.3125 51.92 13.3125C55.224000000000004 13.3125 58.056 6.5625 61.36 6.5625C64.664 6.5625 67.496 13.0625 70.8 13.0625C74.104 13.0625 76.936 8.1875 80.24000000000001 8.1875C83.54400000000001 8.1875 86.376 12.4375 89.68 12.4375C92.98400000000001 12.4375 95.816 13.4375 99.12 13.4375C102.424 13.4375 105.256 9.25 108.56 9.25C111.864 9.25 114.696 15.5625 118 15.5625C118 15.5625 118 15.5625 118 15.5625 "
                                    fill="none"
                                    fillOpacity={1}
                                    stroke="#12b76a"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth={1}
                                    strokeDasharray={0}
                                    className="apexcharts-area"
                                    index={0}
                                    clipPath="url(#gridRectMask0glka4xp)"
                                    pathto="M 0 6.25C 4.9559999999999995 6.25 9.204 3.125 14.16 3.125C 17.464 3.125 20.296 5.625 23.6 5.625C 26.904 5.625 29.736 1.875 33.04 1.875C 36.344 1.875 39.176 9.5 42.480000000000004 9.5C 45.784000000000006 9.5 48.616 13.3125 51.92 13.3125C 55.224000000000004 13.3125 58.056 6.5625 61.36 6.5625C 64.664 6.5625 67.496 13.0625 70.8 13.0625C 74.104 13.0625 76.936 8.1875 80.24000000000001 8.1875C 83.54400000000001 8.1875 86.376 12.4375 89.68 12.4375C 92.98400000000001 12.4375 95.816 13.4375 99.12 13.4375C 102.424 13.4375 105.256 9.25 108.56 9.25C 111.864 9.25 114.696 15.5625 118 15.5625"
                                    pathfrom="M 0 25 L 0 25 L 14.16 25 L 23.6 25 L 33.04 25 L 42.480000000000004 25 L 51.92 25 L 61.36 25 L 70.8 25 L 80.24000000000001 25 L 89.68 25 L 99.12 25 L 108.56 25 L 118 25"
                                    fillRule="evenodd"
                                  />
                                  <g
                                    id="SvgjsG1131"
                                    className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                    data-realindex={0}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1132"
                                  className="apexcharts-datalabels"
                                  data-realindex={0}
                                />
                              </g>
                              <line
                                id="SvgjsLine1148"
                                x1={0}
                                y1={0}
                                x2={118}
                                y2={0}
                                stroke="#b6b6b6"
                                strokeDasharray={0}
                                strokeWidth={1}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs"
                              />
                              <line
                                id="SvgjsLine1149"
                                x1={0}
                                y1={0}
                                x2={118}
                                y2={0}
                                strokeDasharray={0}
                                strokeWidth={0}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs-hidden"
                              />
                              <g
                                id="SvgjsG1150"
                                className="apexcharts-xaxis"
                                transform="translate(0, 0)"
                              >
                                <g
                                  id="SvgjsG1151"
                                  className="apexcharts-xaxis-texts-g"
                                  transform="translate(0, -4)"
                                />
                              </g>
                              <g
                                id="SvgjsG1157"
                                className="apexcharts-yaxis-annotations apexcharts-hidden-element-shown"
                              />
                              <g
                                id="SvgjsG1158"
                                className="apexcharts-xaxis-annotations apexcharts-hidden-element-shown"
                              />
                              <g
                                id="SvgjsG1159"
                                className="apexcharts-point-annotations apexcharts-hidden-element-shown"
                              />
                              <rect
                                id="SvgjsRect1160"
                                width={0}
                                height={0}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fefefe"
                                className="apexcharts-zoom-rect"
                              />
                              <rect
                                id="SvgjsRect1161"
                                width={0}
                                height={0}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fefefe"
                                className="apexcharts-selection-rect"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Stats item */}
                  <div className="flex items-end justify-between border-y border-pink-100 py-5 dark:border-pink-800">
                    <div>
                      <p className="mb-1 text-theme-sm text-gray-500 dark:text-white">
                        {" "}
                        Conversion Rate{" "}
                      </p>
                      <h4 className="mb-1 text-2xl font-semibold text-gray-800 dark:text-white/90">
                        {" "}
                        276K{" "}
                      </h4>{" "}
                      <span className="flex items-center gap-1.5">
                        {" "}
                        <span className="text-error-600"> -5.39% </span>{" "}
                        <span className="text-theme-xs text-gray-500 dark:text-white">
                          {" "}
                          then last Week{" "}
                        </span>{" "}
                      </span>
                    </div>
                    <div className="w-full max-w-[150px]">
                      <div className="chartTen chartTen-01" style={{ minHeight: 70 }}>
                        <div
                          id="apexchartsm237k1eu"
                          className="apexcharts-canvas apexchartsm237k1eu apexcharts-theme-"
                          style={{ width: 150, height: 70 }}
                        >
                          <svg
                            id="SvgjsSvg1208"
                            width={150}
                            height={70}
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            className="apexcharts-svg apexcharts-zoomable"
                            transform="translate(0, 0)"
                          >
                            <foreignObject x={0} y={0} width={150} height={70}>
                              <div
                                xmlns="http://www.w3.org/1999/xhtml"
                                style={{
                                  position: "relative",
                                  height: "100%",
                                  width: "100%"
                                }}
                              >
                                <div
                                  className="apexcharts-legend"
                                  style={{ maxHeight: 35 }}
                                />
                              </div>
                            </foreignObject>
                            <rect
                              id="SvgjsRect1212"
                              width={0}
                              height={0}
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fefefe"
                            />
                            <g
                              id="SvgjsG1219"
                              className="apexcharts-datalabels-group"
                              transform="translate(0, 0) scale(1)"
                            />
                            <g
                              id="SvgjsG1220"
                              className="apexcharts-datalabels-group"
                              transform="translate(0, 0) scale(1)"
                            />
                            <g
                              id="SvgjsG1247"
                              className="apexcharts-yaxis"
                              rel={0}
                              transform="translate(-8, 0)"
                            >
                              <g
                                id="SvgjsG1248"
                                className="apexcharts-yaxis-texts-g"
                              />
                            </g>
                            <g
                              id="SvgjsG1210"
                              className="apexcharts-inner apexcharts-graphical"
                              transform="translate(22, 30)"
                            >
                              <defs id="SvgjsDefs1209">
                                <clipPath id="gridRectMaskm237k1eu">
                                  <rect
                                    id="SvgjsRect1216"
                                    width={118}
                                    height={25}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="gridRectBarMaskm237k1eu">
                                  <rect
                                    id="SvgjsRect1217"
                                    width={123}
                                    height={30}
                                    x="-2.5"
                                    y="-2.5"
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="gridRectMarkerMaskm237k1eu">
                                  <rect
                                    id="SvgjsRect1218"
                                    width={118}
                                    height={25}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="forecastMaskm237k1eu" />
                                <clipPath id="nonForecastMaskm237k1eu" />
                                <linearGradient
                                  id="SvgjsLinearGradient1225"
                                  x1={0}
                                  y1={0}
                                  x2={0}
                                  y2={1}
                                >
                                  <stop
                                    id="SvgjsStop1226"
                                    stopOpacity="0.55"
                                    stopColor="rgba(251,84,84,0.55)"
                                    offset={0}
                                  />
                                  <stop
                                    id="SvgjsStop1227"
                                    stopOpacity={0}
                                    stopColor="rgba(253,170,170,0)"
                                    offset={1}
                                  />
                                  <stop
                                    id="SvgjsStop1228"
                                    stopOpacity={0}
                                    stopColor="rgba(253,170,170,0)"
                                    offset={1}
                                  />
                                </linearGradient>
                              </defs>
                              <line
                                id="SvgjsLine1213"
                                x1={0}
                                y1={0}
                                x2={0}
                                y2={25}
                                stroke="#b6b6b6"
                                strokeDasharray={3}
                                strokeLinecap="butt"
                                className="apexcharts-xcrosshairs"
                                x={0}
                                y={0}
                                width={1}
                                height={25}
                                fill="#b1b9c4"
                                filter="none"
                                fillOpacity="0.9"
                                strokeWidth={1}
                              />
                              <g id="SvgjsG1231" className="apexcharts-grid">
                                <g
                                  id="SvgjsG1232"
                                  className="apexcharts-gridlines-horizontal"
                                  style={{ display: "none" }}
                                >
                                  <line
                                    id="SvgjsLine1235"
                                    x1={0}
                                    y1={0}
                                    x2={118}
                                    y2={0}
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                  <line
                                    id="SvgjsLine1236"
                                    x1={0}
                                    y1="12.5"
                                    x2={118}
                                    y2="12.5"
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                  <line
                                    id="SvgjsLine1237"
                                    x1={0}
                                    y1={25}
                                    x2={118}
                                    y2={25}
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                </g>
                                <g
                                  id="SvgjsG1233"
                                  className="apexcharts-gridlines-vertical"
                                  style={{ display: "none" }}
                                />
                                <line
                                  id="SvgjsLine1239"
                                  x1={0}
                                  y1={25}
                                  x2={118}
                                  y2={25}
                                  stroke="transparent"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                />
                                <line
                                  id="SvgjsLine1238"
                                  x1={0}
                                  y1={1}
                                  x2={0}
                                  y2={25}
                                  stroke="transparent"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                />
                              </g>
                              <g
                                id="SvgjsG1234"
                                className="apexcharts-grid-borders"
                                style={{ display: "none" }}
                              />
                              <g
                                id="SvgjsG1221"
                                className="apexcharts-area-series apexcharts-plot-series"
                              >
                                <g
                                  id="SvgjsG1222"
                                  className="apexcharts-series"
                                  zindex={0}
                                  seriesname="NewxSales"
                                  data-longestserie="true"
                                  rel={1}
                                  data-realindex={0}
                                >
                                  <path
                                    id="SvgjsPath1229"
                                    d="M0 15.5625C4.9559999999999995 15.5625 9.204 9.25 14.16 9.25C17.464 9.25 20.296 13.4375 23.6 13.4375C26.904 13.4375 29.736 12.4375 33.04 12.4375C36.344 12.4375 39.176 8.1875 42.480000000000004 8.1875C45.784000000000006 8.1875 48.616 13.0625 51.92 13.0625C55.224000000000004 13.0625 58.056 6.5625 61.36 6.5625C64.664 6.5625 67.496 13.3125 70.8 13.3125C74.104 13.3125 76.936 9.5 80.24000000000001 9.5C83.54400000000001 9.5 86.376 1.875 89.68 1.875C92.98400000000001 1.875 95.816 5.625 99.12 5.625C102.424 5.625 105.256 3.125 108.56 3.125C111.864 3.125 114.696 6.25 118 6.25C118 6.25 118 6.25 118 25L0 25C0 25 0 15.5625 0 15.5625 "
                                    fill="url(#SvgjsLinearGradient1225)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-area"
                                    index={0}
                                    clipPath="url(#gridRectMaskm237k1eu)"
                                    pathto="M 0 15.5625C 4.9559999999999995 15.5625 9.204 9.25 14.16 9.25C 17.464 9.25 20.296 13.4375 23.6 13.4375C 26.904 13.4375 29.736 12.4375 33.04 12.4375C 36.344 12.4375 39.176 8.1875 42.480000000000004 8.1875C 45.784000000000006 8.1875 48.616 13.0625 51.92 13.0625C 55.224000000000004 13.0625 58.056 6.5625 61.36 6.5625C 64.664 6.5625 67.496 13.3125 70.8 13.3125C 74.104 13.3125 76.936 9.5 80.24000000000001 9.5C 83.54400000000001 9.5 86.376 1.875 89.68 1.875C 92.98400000000001 1.875 95.816 5.625 99.12 5.625C 102.424 5.625 105.256 3.125 108.56 3.125C 111.864 3.125 114.696 6.25 118 6.25C 118 6.25 118 6.25 118 25 L 0 25z"
                                    pathfrom="M 0 25 L 0 25 L 14.16 25 L 23.6 25 L 33.04 25 L 42.480000000000004 25 L 51.92 25 L 61.36 25 L 70.8 25 L 80.24000000000001 25 L 89.68 25 L 99.12 25 L 108.56 25 L 118 25z"
                                  />
                                  <path
                                    id="SvgjsPath1230"
                                    d="M0 15.5625C4.9559999999999995 15.5625 9.204 9.25 14.16 9.25C17.464 9.25 20.296 13.4375 23.6 13.4375C26.904 13.4375 29.736 12.4375 33.04 12.4375C36.344 12.4375 39.176 8.1875 42.480000000000004 8.1875C45.784000000000006 8.1875 48.616 13.0625 51.92 13.0625C55.224000000000004 13.0625 58.056 6.5625 61.36 6.5625C64.664 6.5625 67.496 13.3125 70.8 13.3125C74.104 13.3125 76.936 9.5 80.24000000000001 9.5C83.54400000000001 9.5 86.376 1.875 89.68 1.875C92.98400000000001 1.875 95.816 5.625 99.12 5.625C102.424 5.625 105.256 3.125 108.56 3.125C111.864 3.125 114.696 6.25 118 6.25C118 6.25 118 6.25 118 6.25 "
                                    fill="none"
                                    fillOpacity={1}
                                    stroke="#fb5454"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth={1}
                                    strokeDasharray={0}
                                    className="apexcharts-area"
                                    index={0}
                                    clipPath="url(#gridRectMaskm237k1eu)"
                                    pathto="M 0 15.5625C 4.9559999999999995 15.5625 9.204 9.25 14.16 9.25C 17.464 9.25 20.296 13.4375 23.6 13.4375C 26.904 13.4375 29.736 12.4375 33.04 12.4375C 36.344 12.4375 39.176 8.1875 42.480000000000004 8.1875C 45.784000000000006 8.1875 48.616 13.0625 51.92 13.0625C 55.224000000000004 13.0625 58.056 6.5625 61.36 6.5625C 64.664 6.5625 67.496 13.3125 70.8 13.3125C 74.104 13.3125 76.936 9.5 80.24000000000001 9.5C 83.54400000000001 9.5 86.376 1.875 89.68 1.875C 92.98400000000001 1.875 95.816 5.625 99.12 5.625C 102.424 5.625 105.256 3.125 108.56 3.125C 111.864 3.125 114.696 6.25 118 6.25"
                                    pathfrom="M 0 25 L 0 25 L 14.16 25 L 23.6 25 L 33.04 25 L 42.480000000000004 25 L 51.92 25 L 61.36 25 L 70.8 25 L 80.24000000000001 25 L 89.68 25 L 99.12 25 L 108.56 25 L 118 25"
                                    fillRule="evenodd"
                                  />
                                  <g
                                    id="SvgjsG1223"
                                    className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                    data-realindex={0}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1224"
                                  className="apexcharts-datalabels"
                                  data-realindex={0}
                                />
                              </g>
                              <line
                                id="SvgjsLine1240"
                                x1={0}
                                y1={0}
                                x2={118}
                                y2={0}
                                stroke="#b6b6b6"
                                strokeDasharray={0}
                                strokeWidth={1}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs"
                              />
                              <line
                                id="SvgjsLine1241"
                                x1={0}
                                y1={0}
                                x2={118}
                                y2={0}
                                strokeDasharray={0}
                                strokeWidth={0}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs-hidden"
                              />
                              <g
                                id="SvgjsG1242"
                                className="apexcharts-xaxis"
                                transform="translate(0, 0)"
                              >
                                <g
                                  id="SvgjsG1243"
                                  className="apexcharts-xaxis-texts-g"
                                  transform="translate(0, -4)"
                                />
                              </g>
                              <g
                                id="SvgjsG1249"
                                className="apexcharts-yaxis-annotations apexcharts-hidden-element-shown"
                              />
                              <g
                                id="SvgjsG1250"
                                className="apexcharts-xaxis-annotations apexcharts-hidden-element-shown"
                              />
                              <g
                                id="SvgjsG1251"
                                className="apexcharts-point-annotations apexcharts-hidden-element-shown"
                              />
                              <rect
                                id="SvgjsRect1252"
                                width={0}
                                height={0}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fefefe"
                                className="apexcharts-zoom-rect"
                              />
                              <rect
                                id="SvgjsRect1253"
                                width={0}
                                height={0}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fefefe"
                                className="apexcharts-selection-rect"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Stats item */}
                  <div className="flex items-end justify-between py-5">
                    <div>
                      <p className="mb-1 text-theme-sm text-gray-500 dark:text-white">
                        {" "}
                        Page Bounce Rate{" "}
                      </p>
                      <h4 className="mb-1 text-2xl font-semibold text-gray-800 dark:text-white/90">
                        {" "}
                        285{" "}
                      </h4>{" "}
                      <span className="flex items-center gap-1.5">
                        {" "}
                        <span className="text-success-600"> +12.74% </span>{" "}
                        <span className="text-theme-xs text-gray-500 dark:text-white">
                          {" "}
                          then last Week{" "}
                        </span>{" "}
                      </span>
                    </div>
                    <div className="w-full max-w-[150px]">
                      <div
                        className="chartNine chartNine-02"
                        style={{ minHeight: 70 }}
                      >
                        <div
                          id="apexchartsh7eatzemh"
                          className="apexcharts-canvas apexchartsh7eatzemh apexcharts-theme-"
                          style={{ width: 150, height: 70 }}
                        >
                          <svg
                            id="SvgjsSvg1162"
                            width={150}
                            height={70}
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            className="apexcharts-svg apexcharts-zoomable"
                            transform="translate(0, 0)"
                          >
                            <foreignObject x={0} y={0} width={150} height={70}>
                              <div
                                xmlns="http://www.w3.org/1999/xhtml"
                                style={{
                                  position: "relative",
                                  height: "100%",
                                  width: "100%"
                                }}
                              >
                                <div
                                  className="apexcharts-legend"
                                  style={{ maxHeight: 35 }}
                                />
                              </div>
                            </foreignObject>
                            <rect
                              id="SvgjsRect1166"
                              width={0}
                              height={0}
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fefefe"
                            />
                            <g
                              id="SvgjsG1173"
                              className="apexcharts-datalabels-group"
                              transform="translate(0, 0) scale(1)"
                            />
                            <g
                              id="SvgjsG1174"
                              className="apexcharts-datalabels-group"
                              transform="translate(0, 0) scale(1)"
                            />
                            <g
                              id="SvgjsG1201"
                              className="apexcharts-yaxis"
                              rel={0}
                              transform="translate(-8, 0)"
                            >
                              <g
                                id="SvgjsG1202"
                                className="apexcharts-yaxis-texts-g"
                              />
                            </g>
                            <g
                              id="SvgjsG1164"
                              className="apexcharts-inner apexcharts-graphical"
                              transform="translate(22, 30)"
                            >
                              <defs id="SvgjsDefs1163">
                                <clipPath id="gridRectMaskh7eatzemh">
                                  <rect
                                    id="SvgjsRect1170"
                                    width={118}
                                    height={25}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="gridRectBarMaskh7eatzemh">
                                  <rect
                                    id="SvgjsRect1171"
                                    width={123}
                                    height={30}
                                    x="-2.5"
                                    y="-2.5"
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="gridRectMarkerMaskh7eatzemh">
                                  <rect
                                    id="SvgjsRect1172"
                                    width={118}
                                    height={25}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="forecastMaskh7eatzemh" />
                                <clipPath id="nonForecastMaskh7eatzemh" />
                                <linearGradient
                                  id="SvgjsLinearGradient1179"
                                  x1={0}
                                  y1={0}
                                  x2={0}
                                  y2={1}
                                >
                                  <stop
                                    id="SvgjsStop1180"
                                    stopOpacity="0.55"
                                    stopColor="rgba(18,183,106,0.55)"
                                    offset={0}
                                  />
                                  <stop
                                    id="SvgjsStop1181"
                                    stopOpacity={0}
                                    stopColor="rgba(137,219,181,0)"
                                    offset={1}
                                  />
                                  <stop
                                    id="SvgjsStop1182"
                                    stopOpacity={0}
                                    stopColor="rgba(137,219,181,0)"
                                    offset={1}
                                  />
                                </linearGradient>
                              </defs>
                              <line
                                id="SvgjsLine1167"
                                x1={0}
                                y1={0}
                                x2={0}
                                y2={25}
                                stroke="#b6b6b6"
                                strokeDasharray={3}
                                strokeLinecap="butt"
                                className="apexcharts-xcrosshairs"
                                x={0}
                                y={0}
                                width={1}
                                height={25}
                                fill="#b1b9c4"
                                filter="none"
                                fillOpacity="0.9"
                                strokeWidth={1}
                              />
                              <g id="SvgjsG1185" className="apexcharts-grid">
                                <g
                                  id="SvgjsG1186"
                                  className="apexcharts-gridlines-horizontal"
                                  style={{ display: "none" }}
                                >
                                  <line
                                    id="SvgjsLine1189"
                                    x1={0}
                                    y1={0}
                                    x2={118}
                                    y2={0}
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                  <line
                                    id="SvgjsLine1190"
                                    x1={0}
                                    y1="12.5"
                                    x2={118}
                                    y2="12.5"
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                  <line
                                    id="SvgjsLine1191"
                                    x1={0}
                                    y1={25}
                                    x2={118}
                                    y2={25}
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                </g>
                                <g
                                  id="SvgjsG1187"
                                  className="apexcharts-gridlines-vertical"
                                  style={{ display: "none" }}
                                />
                                <line
                                  id="SvgjsLine1193"
                                  x1={0}
                                  y1={25}
                                  x2={118}
                                  y2={25}
                                  stroke="transparent"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                />
                                <line
                                  id="SvgjsLine1192"
                                  x1={0}
                                  y1={1}
                                  x2={0}
                                  y2={25}
                                  stroke="transparent"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                />
                              </g>
                              <g
                                id="SvgjsG1188"
                                className="apexcharts-grid-borders"
                                style={{ display: "none" }}
                              />
                              <g
                                id="SvgjsG1175"
                                className="apexcharts-area-series apexcharts-plot-series"
                              >
                                <g
                                  id="SvgjsG1176"
                                  className="apexcharts-series"
                                  zindex={0}
                                  seriesname="NewxSales"
                                  data-longestserie="true"
                                  rel={1}
                                  data-realindex={0}
                                >
                                  <path
                                    id="SvgjsPath1183"
                                    d="M0 6.25C4.9559999999999995 6.25 9.204 3.125 14.16 3.125C17.464 3.125 20.296 5.625 23.6 5.625C26.904 5.625 29.736 1.875 33.04 1.875C36.344 1.875 39.176 9.5 42.480000000000004 9.5C45.784000000000006 9.5 48.616 13.3125 51.92 13.3125C55.224000000000004 13.3125 58.056 6.5625 61.36 6.5625C64.664 6.5625 67.496 13.0625 70.8 13.0625C74.104 13.0625 76.936 8.1875 80.24000000000001 8.1875C83.54400000000001 8.1875 86.376 12.4375 89.68 12.4375C92.98400000000001 12.4375 95.816 13.4375 99.12 13.4375C102.424 13.4375 105.256 9.25 108.56 9.25C111.864 9.25 114.696 15.5625 118 15.5625C118 15.5625 118 15.5625 118 25L0 25C0 25 0 6.25 0 6.25 "
                                    fill="url(#SvgjsLinearGradient1179)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-area"
                                    index={0}
                                    clipPath="url(#gridRectMaskh7eatzemh)"
                                    pathto="M 0 6.25C 4.9559999999999995 6.25 9.204 3.125 14.16 3.125C 17.464 3.125 20.296 5.625 23.6 5.625C 26.904 5.625 29.736 1.875 33.04 1.875C 36.344 1.875 39.176 9.5 42.480000000000004 9.5C 45.784000000000006 9.5 48.616 13.3125 51.92 13.3125C 55.224000000000004 13.3125 58.056 6.5625 61.36 6.5625C 64.664 6.5625 67.496 13.0625 70.8 13.0625C 74.104 13.0625 76.936 8.1875 80.24000000000001 8.1875C 83.54400000000001 8.1875 86.376 12.4375 89.68 12.4375C 92.98400000000001 12.4375 95.816 13.4375 99.12 13.4375C 102.424 13.4375 105.256 9.25 108.56 9.25C 111.864 9.25 114.696 15.5625 118 15.5625C 118 15.5625 118 15.5625 118 25 L 0 25z"
                                    pathfrom="M 0 25 L 0 25 L 14.16 25 L 23.6 25 L 33.04 25 L 42.480000000000004 25 L 51.92 25 L 61.36 25 L 70.8 25 L 80.24000000000001 25 L 89.68 25 L 99.12 25 L 108.56 25 L 118 25z"
                                  />
                                  <path
                                    id="SvgjsPath1184"
                                    d="M0 6.25C4.9559999999999995 6.25 9.204 3.125 14.16 3.125C17.464 3.125 20.296 5.625 23.6 5.625C26.904 5.625 29.736 1.875 33.04 1.875C36.344 1.875 39.176 9.5 42.480000000000004 9.5C45.784000000000006 9.5 48.616 13.3125 51.92 13.3125C55.224000000000004 13.3125 58.056 6.5625 61.36 6.5625C64.664 6.5625 67.496 13.0625 70.8 13.0625C74.104 13.0625 76.936 8.1875 80.24000000000001 8.1875C83.54400000000001 8.1875 86.376 12.4375 89.68 12.4375C92.98400000000001 12.4375 95.816 13.4375 99.12 13.4375C102.424 13.4375 105.256 9.25 108.56 9.25C111.864 9.25 114.696 15.5625 118 15.5625C118 15.5625 118 15.5625 118 15.5625 "
                                    fill="none"
                                    fillOpacity={1}
                                    stroke="#12b76a"
                                    strokeOpacity={1}
                                    strokeLinecap="butt"
                                    strokeWidth={1}
                                    strokeDasharray={0}
                                    className="apexcharts-area"
                                    index={0}
                                    clipPath="url(#gridRectMaskh7eatzemh)"
                                    pathto="M 0 6.25C 4.9559999999999995 6.25 9.204 3.125 14.16 3.125C 17.464 3.125 20.296 5.625 23.6 5.625C 26.904 5.625 29.736 1.875 33.04 1.875C 36.344 1.875 39.176 9.5 42.480000000000004 9.5C 45.784000000000006 9.5 48.616 13.3125 51.92 13.3125C 55.224000000000004 13.3125 58.056 6.5625 61.36 6.5625C 64.664 6.5625 67.496 13.0625 70.8 13.0625C 74.104 13.0625 76.936 8.1875 80.24000000000001 8.1875C 83.54400000000001 8.1875 86.376 12.4375 89.68 12.4375C 92.98400000000001 12.4375 95.816 13.4375 99.12 13.4375C 102.424 13.4375 105.256 9.25 108.56 9.25C 111.864 9.25 114.696 15.5625 118 15.5625"
                                    pathfrom="M 0 25 L 0 25 L 14.16 25 L 23.6 25 L 33.04 25 L 42.480000000000004 25 L 51.92 25 L 61.36 25 L 70.8 25 L 80.24000000000001 25 L 89.68 25 L 99.12 25 L 108.56 25 L 118 25"
                                    fillRule="evenodd"
                                  />
                                  <g
                                    id="SvgjsG1177"
                                    className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                    data-realindex={0}
                                  />
                                </g>
                                <g
                                  id="SvgjsG1178"
                                  className="apexcharts-datalabels"
                                  data-realindex={0}
                                />
                              </g>
                              <line
                                id="SvgjsLine1194"
                                x1={0}
                                y1={0}
                                x2={118}
                                y2={0}
                                stroke="#b6b6b6"
                                strokeDasharray={0}
                                strokeWidth={1}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs"
                              />
                              <line
                                id="SvgjsLine1195"
                                x1={0}
                                y1={0}
                                x2={118}
                                y2={0}
                                strokeDasharray={0}
                                strokeWidth={0}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs-hidden"
                              />
                              <g
                                id="SvgjsG1196"
                                className="apexcharts-xaxis"
                                transform="translate(0, 0)"
                              >
                                <g
                                  id="SvgjsG1197"
                                  className="apexcharts-xaxis-texts-g"
                                  transform="translate(0, -4)"
                                />
                              </g>
                              <g
                                id="SvgjsG1203"
                                className="apexcharts-yaxis-annotations apexcharts-hidden-element-shown"
                              />
                              <g
                                id="SvgjsG1204"
                                className="apexcharts-xaxis-annotations apexcharts-hidden-element-shown"
                              />
                              <g
                                id="SvgjsG1205"
                                className="apexcharts-point-annotations apexcharts-hidden-element-shown"
                              />
                              <rect
                                id="SvgjsRect1206"
                                width={0}
                                height={0}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fefefe"
                                className="apexcharts-zoom-rect"
                              />
                              <rect
                                id="SvgjsRect1207"
                                width={0}
                                height={0}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fefefe"
                                className="apexcharts-selection-rect"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ====== Traffic Stats End */}
              {/* ====== Traffic Source Start */}
              <div className="rounded-2xl border border-pink-200 bg-white p-5 dark:border-pink-800 dark:bg-white/[0.03] sm:p-6">
                <div className="mb-6 flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                      {" "}
                      Top Traffic Source{" "}
                    </h3>{" "}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between border-b border-pink-100 py-3 last:border-b-0 dark:border-pink-800">
                    <div className="flex items-center gap-4">
                      <div className="w-full max-w-8 items-center rounded-full">
                        {" "}
                        <img src="src/images/brand/brand-05.svg" alt="brand" />{" "}
                      </div>
                      <div>
                        <p className="text-theme-sm font-medium text-gray-700 dark:text-gray-300">
                          {" "}
                          Google{" "}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full max-w-[140px] items-center gap-3">
                      <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-pink-200 dark:bg-pink-600">
                        <div className="absolute left-0 top-0 flex h-full w-[79%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white" />
                      </div>
                      <p className="text-theme-sm font-medium text-gray-700 dark:text-white">
                        {" "}
                        79%{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-pink-100 py-3 last:border-b-0 dark:border-pink-800">
                    <div className="flex items-center gap-4">
                      <div className="w-full max-w-8 items-center rounded-full">
                        {" "}
                        <img src="src/images/brand/brand-06.svg" alt="brand" />{" "}
                      </div>
                      <div>
                        <p className="text-theme-sm font-medium text-gray-700 dark:text-gray-300">
                          {" "}
                          Youtube{" "}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full max-w-[140px] items-center gap-3">
                      <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-pink-200 dark:bg-pink-600">
                        <div className="absolute left-0 top-0 flex h-full w-[55%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white" />
                      </div>
                      <p className="text-theme-sm font-medium text-gray-700 dark:text-white">
                        {" "}
                        55%{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-pink-100 py-3 last:border-b-0 dark:border-pink-800">
                    <div className="flex items-center gap-4">
                      <div className="w-full max-w-8 items-center rounded-full">
                        {" "}
                        <img src="src/images/brand/brand-02.svg" alt="brand" />{" "}
                      </div>
                      <div>
                        <p className="text-theme-sm font-medium text-gray-700 dark:text-gray-300">
                          {" "}
                          Facebook{" "}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full max-w-[140px] items-center gap-3">
                      <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-pink-200 dark:bg-pink-600">
                        <div className="absolute left-0 top-0 flex h-full w-[48%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white" />
                      </div>
                      <p className="text-theme-sm font-medium text-gray-700 dark:text-white">
                        {" "}
                        48%{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-b border-pink-100 py-3 last:border-b-0 dark:border-pink-800">
                    <div className="flex items-center gap-4">
                      <div className="w-full max-w-8 items-center rounded-full">
                        {" "}
                        <img src="src/images/brand/brand-04.svg" alt="brand" />{" "}
                      </div>
                      <div>
                        <p className="text-theme-sm font-medium text-gray-700 dark:text-gray-300">
                          {" "}
                          Instagram{" "}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full max-w-[140px] items-center gap-3">
                      <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-pink-200 dark:bg-pink-600">
                        <div className="absolute left-0 top-0 flex h-full w-[48%] items-center justify-center rounded-sm bg-brand-500 text-xs font-medium text-white" />
                      </div>
                      <p className="text-theme-sm font-medium text-gray-700 dark:text-white">
                        {" "}
                        48%{" "}
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <a
                  href="#"
                  className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-pink-300 bg-white p-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-pink-50 dark:border-pink-700 dark:bg-pink-600 dark:text-white dark:hover:bg-white/[0.03]"
                >
                  {" "}
                  View All{" "}
                </a>{" "}
              </div>
              {/* ====== Traffic Source End */}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div >
  );
}
