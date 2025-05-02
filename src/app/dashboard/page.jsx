"use client";

import {useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for programmatic navigation
import DashboardHeader from "@/components/header/DashboardHeader";
import Footer from "@/components/footer/DashboardFooter";
import DashboardMetrics from "@/components/accounMetrics/AccountMetrics";
import LinkBtn from "@/components/accountLinkBtn/AccountLinkBtn";



export default function HomePage() {
  const [isClient, setIsClient] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");

  useEffect(() => {
    // Set isClient to true once the component mounts on the client side
    setIsClient(true);

    // Retrieve the accountNumber from localStorage
    const storedAccountNumber = localStorage.getItem('accountNumber');
    if (storedAccountNumber) {
      setAccountNumber(storedAccountNumber);
    } else {
      // Handle case where account number is not available
      console.log("Account number not found in localStorage");
    }
  }, []);

  // Ensure this runs only on the client side
  if (!isClient) return null; 
  return (
    <div>
      <DashboardHeader />
      <main>
        <div className="mx-auto max-w-(--breakpoint-2xl) p-4 md:p-6">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12">

            {accountNumber ? <DashboardMetrics accountNumber={accountNumber} /> : <LinkBtn />}  {/* Conditional rendering */}
            </div>
            <div className="col-span-12 space-y-6 xl:col-span-8 mt-2">
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
            <div className="col-span-12 space-y-6 xl:col-span-4 mt-2">
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
