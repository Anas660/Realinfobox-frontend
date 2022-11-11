<!-- eslint-disable vue/html-indent -->
<template>
  <div class="Container">
    <CityTitle :title="name" />
    <SocialArrow
      class="ArrowTop ApartmentArr"
      :is-flipped="isApartmentFlipped"
    />
    <SocialArrow class="ArrowTop RowArr" :is-flipped="isRowFlipped" />
    <SocialArrow class="ArrowTop SemiArr" :is-flipped="isSemiFlipped" />
    <SocialArrow class="ArrowTop DetachedArr" :is-flipped="isDetachedFlipped" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 600 600"
      width="600"
      height="600"
    >
      <defs>
        <style>
          .cls-1 {
            fill: #a5a5a5;
          }
          .cls-2 {
            isolation: isolate;
          }
          .cls-284,
          .cls-3 {
            fill: #a7bcf5;
          }
          .cls-128,
          .cls-154,
          .cls-157,
          .cls-164,
          .cls-166,
          .cls-167,
          .cls-168,
          .cls-170,
          .cls-262,
          .cls-272,
          .cls-275,
          .cls-283,
          .cls-286,
          .cls-3,
          .cls-5,
          .cls-8 {
            mix-blend-mode: multiply;
          }
          .cls-164,
          .cls-166,
          .cls-262,
          .cls-283,
          .cls-3 {
            opacity: 0.39;
          }
          .cls-4 {
            fill: #d2d7ff;
          }
          .cls-128,
          .cls-157,
          .cls-167,
          .cls-168,
          .cls-170,
          .cls-5,
          .cls-8 {
            opacity: 0.25;
          }
          .cls-5 {
            fill: url(#linear-gradient);
          }
          .cls-6 {
            fill: #ebedfc;
          }
          .cls-7 {
            fill: #ced2ff;
          }
          .cls-8 {
            fill: url(#linear-gradient-2);
          }
          .cls-9 {
            font-size: 10px;
            letter-spacing: 0.01em;
          }
          .cls-263,
          .cls-87,
          .cls-9 {
            fill: #6080d1;
          }
          .cls-87,
          .cls-9 {
            font-family: Montserrat-Regular, Montserrat;
          }
          .cls-10 {
            letter-spacing: 0.03em;
          }
          .cls-11 {
            letter-spacing: 0.02em;
          }
          .cls-12 {
            letter-spacing: 0em;
          }
          .cls-13 {
            letter-spacing: 0.02em;
          }
          .cls-14 {
            letter-spacing: 0.03em;
          }
          .cls-15 {
            letter-spacing: 0.02em;
          }
          .cls-16 {
            letter-spacing: 0.05em;
          }
          .cls-17 {
            letter-spacing: 0.03em;
          }
          .cls-18 {
            letter-spacing: 0.02em;
          }
          .cls-19 {
            letter-spacing: 0.01em;
          }
          .cls-20 {
            letter-spacing: 0em;
          }
          .cls-21 {
            letter-spacing: 0.02em;
          }
          .cls-22 {
            letter-spacing: 0.01em;
          }
          .cls-23 {
            letter-spacing: 0.03em;
          }
          .cls-24 {
            letter-spacing: 0.02em;
          }
          .cls-25 {
            letter-spacing: 0.02em;
          }
          .cls-26 {
            letter-spacing: 0.01em;
          }
          .cls-27 {
            letter-spacing: 0.01em;
          }
          .cls-28 {
            letter-spacing: 0.01em;
          }
          .cls-29 {
            letter-spacing: 0.02em;
          }
          .cls-30 {
            letter-spacing: 0.03em;
          }
          .cls-31 {
            letter-spacing: 0.01em;
          }
          .cls-32 {
            letter-spacing: 0.01em;
          }
          .cls-33 {
            letter-spacing: 0.02em;
          }
          .cls-34 {
            letter-spacing: 0.04em;
          }
          .cls-35 {
            letter-spacing: 0.03em;
          }
          .cls-36 {
            letter-spacing: 0.02em;
          }
          .cls-37 {
            letter-spacing: 0.01em;
          }
          .cls-38 {
            letter-spacing: 0.02em;
          }
          .cls-39 {
            letter-spacing: 0.01em;
          }
          .cls-40 {
            letter-spacing: 0.02em;
          }
          .cls-41 {
            letter-spacing: 0.03em;
          }
          .cls-42 {
            letter-spacing: 0.04em;
          }
          .cls-43 {
            letter-spacing: 0.03em;
          }
          .cls-44 {
            letter-spacing: 0.02em;
          }
          .cls-45 {
            letter-spacing: 0.01em;
          }
          .cls-46 {
            letter-spacing: 0.01em;
          }
          .cls-47 {
            letter-spacing: 0.02em;
          }
          .cls-48 {
            letter-spacing: 0em;
          }
          .cls-49 {
            letter-spacing: 0.02em;
          }
          .cls-50 {
            letter-spacing: 0.02em;
          }
          .cls-51 {
            letter-spacing: 0.03em;
          }
          .cls-52 {
            letter-spacing: 0.01em;
          }
          .cls-53 {
            letter-spacing: 0.01em;
          }
          .cls-54 {
            letter-spacing: 0.02em;
          }
          .cls-55 {
            letter-spacing: 0.02em;
          }
          .cls-56 {
            letter-spacing: 0.02em;
          }
          .cls-57 {
            letter-spacing: 0.01em;
          }
          .cls-58 {
            letter-spacing: 0.02em;
          }
          .cls-59 {
            letter-spacing: 0.01em;
          }
          .cls-60 {
            letter-spacing: 0.02em;
          }
          .cls-61 {
            letter-spacing: 0.01em;
          }
          .cls-62 {
            letter-spacing: 0.02em;
          }
          .cls-63 {
            letter-spacing: 0.02em;
          }
          .cls-64 {
            letter-spacing: 0.02em;
          }
          .cls-65 {
            letter-spacing: 0.01em;
          }
          .cls-66 {
            letter-spacing: 0.01em;
          }
          .cls-67 {
            letter-spacing: 0.03em;
          }
          .cls-68 {
            letter-spacing: 0.02em;
          }
          .cls-69 {
            letter-spacing: 0.03em;
          }
          .cls-70 {
            letter-spacing: 0.01em;
          }
          .cls-71 {
            letter-spacing: 0.02em;
          }
          .cls-72 {
            letter-spacing: 0.01em;
          }
          .cls-73 {
            letter-spacing: 0.03em;
          }
          .cls-74 {
            letter-spacing: 0.06em;
          }
          .cls-75 {
            letter-spacing: -0.01em;
          }
          .cls-76 {
            letter-spacing: 0.02em;
          }
          .cls-77 {
            letter-spacing: 0.03em;
          }
          .cls-78 {
            letter-spacing: 0.01em;
          }
          .cls-79 {
            letter-spacing: 0.01em;
          }
          .cls-80 {
            letter-spacing: 0.03em;
          }
          .cls-104,
          .cls-81 {
            font-size: 23px;
          }
          .cls-104,
          .cls-107,
          .cls-166,
          .cls-271,
          .cls-81,
          .cls-85 {
            fill: #fff;
          }
          .cls-104,
          .cls-114,
          .cls-81,
          .cls-85,
          .cls-96 {
            font-family: Montserrat-SemiBold, Montserrat;
            font-weight: 600;
          }
          .cls-82 {
            letter-spacing: -0.01em;
          }
          .cls-83 {
            letter-spacing: 0em;
          }
          .cls-84 {
            letter-spacing: 0em;
          }
          .cls-85 {
            font-size: 14px;
          }
          .cls-86 {
            letter-spacing: -0.01em;
          }
          .cls-87 {
            font-size: 11px;
            letter-spacing: 0.05em;
          }
          .cls-88 {
            letter-spacing: 0.02em;
          }
          .cls-89 {
            letter-spacing: 0.05em;
          }
          .cls-90 {
            letter-spacing: 0.03em;
          }
          .cls-91 {
            letter-spacing: 0.05em;
          }
          .cls-92 {
            letter-spacing: 0.04em;
          }
          .cls-93 {
            letter-spacing: 0.03em;
          }
          .cls-94 {
            fill: #e8e8ef;
          }
          .cls-148,
          .cls-277,
          .cls-281,
          .cls-282,
          .cls-293,
          .cls-294,
          .cls-95 {
            fill: none;
          }
          .cls-281,
          .cls-282,
          .cls-95 {
            stroke: #182f6e;
          }
          .cls-277,
          .cls-281,
          .cls-282,
          .cls-293,
          .cls-294,
          .cls-95 {
            stroke-linecap: round;
            stroke-linejoin: round;
          }
          .cls-95 {
            stroke-width: 2px;
          }
          .cls-96 {
            font-size: 34px;
          }
          .cls-108,
          .cls-114,
          .cls-96 {
            fill: #223b82;
          }
          .cls-97 {
            letter-spacing: 0em;
          }
          .cls-98 {
            letter-spacing: -0.02em;
          }
          .cls-99 {
            letter-spacing: 0em;
          }
          .cls-100 {
            letter-spacing: 0em;
          }
          .cls-101 {
            letter-spacing: -0.01em;
          }
          .cls-102 {
            letter-spacing: 0em;
          }
          .cls-103 {
            fill: #52dea1;
          }
          .cls-104 {
            letter-spacing: -0.01em;
          }
          .cls-105 {
            letter-spacing: 0em;
          }
          .cls-106 {
            letter-spacing: -0.01em;
          }
          .cls-108,
          .cls-263 {
            font-size: 12px;
            font-family: Montserrat-Medium, Montserrat;
            font-weight: 500;
          }
          .cls-109 {
            letter-spacing: -0.01em;
          }
          .cls-110 {
            letter-spacing: 0em;
          }
          .cls-111 {
            letter-spacing: 0.01em;
          }
          .cls-112 {
            letter-spacing: 0em;
          }
          .cls-113 {
            letter-spacing: -0.01em;
          }
          .cls-114 {
            font-size: 22px;
          }
          .cls-115 {
            letter-spacing: 0.02em;
          }
          .cls-116 {
            letter-spacing: -0.02em;
          }
          .cls-117 {
            letter-spacing: -0.01em;
          }
          .cls-118 {
            letter-spacing: 0em;
          }
          .cls-119 {
            letter-spacing: 0em;
          }
          .cls-120 {
            letter-spacing: 0em;
          }
          .cls-121 {
            letter-spacing: -0.01em;
          }
          .cls-122 {
            letter-spacing: 0em;
          }
          .cls-123 {
            letter-spacing: 0.01em;
          }
          .cls-124 {
            letter-spacing: 0em;
          }
          .cls-125 {
            letter-spacing: 0.01em;
          }
          .cls-126 {
            letter-spacing: -0.01em;
          }
          .cls-127 {
            letter-spacing: -0.01em;
          }
          .cls-128 {
            fill: url(#linear-gradient-3);
          }
          .cls-129 {
            fill: #d0d0cf;
          }
          .cls-130 {
            fill: #8ed4b2;
          }
          .cls-131 {
            fill: #edf1fa;
          }
          .cls-132 {
            fill: #cfe4fa;
          }
          .cls-133 {
            fill: #ffd67e;
          }
          .cls-134 {
            fill: #db9d39;
          }
          .cls-135 {
            fill: #edba00;
          }
          .cls-136 {
            fill: #ebf5ff;
          }
          .cls-137 {
            fill: #e0e3f2;
          }
          .cls-138 {
            fill: #868ed7;
          }
          .cls-139 {
            fill: #96938a;
          }
          .cls-140 {
            fill: #a2a2a1;
          }
          .cls-141 {
            fill: #5f6bc3;
          }
          .cls-142 {
            fill: #95ceff;
          }
          .cls-142,
          .cls-159 {
            opacity: 0.7;
          }
          .cls-143,
          .cls-147 {
            fill: #0f264c;
          }
          .cls-144,
          .cls-149,
          .cls-164 {
            fill: #173978;
          }
          .cls-145 {
            fill: #a1745a;
          }
          .cls-146 {
            fill: #c0a291;
          }
          .cls-147,
          .cls-149,
          .cls-153,
          .cls-271 {
            opacity: 0.3;
          }
          .cls-150 {
            fill: #2c4482;
          }
          .cls-151 {
            fill: #777468;
          }
          .cls-152 {
            fill: #0d0d0d;
          }
          .cls-154 {
            fill: #e8eefa;
          }
          .cls-155 {
            fill: #182f6e;
          }
          .cls-156 {
            fill: #179e6e;
          }
          .cls-157 {
            fill: url(#linear-gradient-4);
          }
          .cls-158 {
            fill: #ebebeb;
          }
          .cls-159 {
            fill: #85837e;
          }
          .cls-160 {
            fill: #8c5535;
          }
          .cls-161 {
            fill: #45446c;
          }
          .cls-162 {
            fill: #93908b;
          }
          .cls-163 {
            fill: #39332f;
            opacity: 0.8;
          }
          .cls-165 {
            fill: #1f1f22;
          }
          .cls-167 {
            fill: url(#linear-gradient-5);
          }
          .cls-168 {
            fill: url(#linear-gradient-6);
          }
          .cls-169 {
            fill: #e3f2ff;
          }
          .cls-170 {
            fill: url(#linear-gradient-7);
          }
          .cls-171 {
            fill: #5d5d5d;
          }
          .cls-172 {
            fill: #2f2f2f;
          }
          .cls-173 {
            fill: #181818;
          }
          .cls-174 {
            fill: #464646;
          }
          .cls-175 {
            fill: silver;
          }
          .cls-176 {
            fill: #a8a8a8;
          }
          .cls-177 {
            fill: #606060;
          }
          .cls-178 {
            fill: #484848;
          }
          .cls-179 {
            fill: #303030;
          }
          .cls-180 {
            fill: #e6cc6a;
          }
          .cls-181 {
            fill: #f9f9f9;
          }
          .cls-182 {
            fill: #c2c2c0;
          }
          .cls-183 {
            fill: #dbdad8;
          }
          .cls-184 {
            fill: url(#linear-gradient-8);
          }
          .cls-185 {
            fill: url(#linear-gradient-9);
          }
          .cls-186 {
            fill: #fbfbfa;
          }
          .cls-187 {
            fill: url(#linear-gradient-10);
          }
          .cls-188 {
            fill: url(#linear-gradient-11);
          }
          .cls-189 {
            fill: url(#linear-gradient-12);
          }
          .cls-190 {
            fill: url(#linear-gradient-13);
          }
          .cls-191 {
            fill: #6dbcce;
            opacity: 0.4;
          }
          .cls-192 {
            fill: url(#linear-gradient-14);
          }
          .cls-193 {
            fill: url(#linear-gradient-15);
          }
          .cls-194 {
            fill: url(#linear-gradient-16);
          }
          .cls-195 {
            fill: url(#linear-gradient-17);
          }
          .cls-196 {
            fill: url(#linear-gradient-18);
          }
          .cls-197 {
            fill: url(#linear-gradient-19);
          }
          .cls-198 {
            fill: #d8c996;
          }
          .cls-199 {
            fill: #c0b285;
          }
          .cls-200 {
            fill: url(#linear-gradient-20);
          }
          .cls-201 {
            fill: #00060d;
          }
          .cls-201,
          .cls-272 {
            opacity: 0.1;
          }
          .cls-202 {
            fill: #f3e5b7;
          }
          .cls-203 {
            fill: url(#linear-gradient-21);
          }
          .cls-204 {
            fill: url(#linear-gradient-22);
          }
          .cls-205 {
            fill: #f1f1f1;
          }
          .cls-206 {
            fill: url(#linear-gradient-23);
          }
          .cls-207 {
            fill: url(#linear-gradient-24);
          }
          .cls-208 {
            fill: url(#linear-gradient-25);
          }
          .cls-209 {
            fill: url(#linear-gradient-26);
          }
          .cls-210 {
            fill: url(#linear-gradient-27);
          }
          .cls-211 {
            fill: #a89c76;
          }
          .cls-212 {
            fill: url(#linear-gradient-28);
          }
          .cls-213 {
            fill: url(#linear-gradient-29);
          }
          .cls-214 {
            clip-path: url(#clip-path);
          }
          .cls-215 {
            fill: #f8f8f8;
          }
          .cls-216 {
            fill: url(#linear-gradient-30);
          }
          .cls-217 {
            fill: #e5e5e5;
          }
          .cls-218 {
            fill: #cbcbcb;
          }
          .cls-219 {
            fill: #bc4073;
          }
          .cls-220 {
            fill: url(#linear-gradient-31);
          }
          .cls-221 {
            fill: url(#linear-gradient-32);
          }
          .cls-222 {
            fill: url(#linear-gradient-33);
          }
          .cls-223 {
            fill: url(#linear-gradient-34);
          }
          .cls-224 {
            fill: url(#linear-gradient-35);
          }
          .cls-225 {
            fill: url(#linear-gradient-36);
          }
          .cls-226 {
            fill: url(#linear-gradient-37);
          }
          .cls-227 {
            fill: url(#linear-gradient-38);
          }
          .cls-228 {
            fill: url(#linear-gradient-39);
          }
          .cls-229 {
            fill: #f4f0e2;
          }
          .cls-230 {
            fill: url(#linear-gradient-40);
          }
          .cls-231 {
            fill: url(#linear-gradient-41);
          }
          .cls-232 {
            fill: url(#linear-gradient-42);
          }
          .cls-233 {
            fill: #ada179;
          }
          .cls-234 {
            fill: url(#linear-gradient-43);
          }
          .cls-235 {
            fill: url(#linear-gradient-44);
          }
          .cls-236 {
            fill: url(#linear-gradient-45);
          }
          .cls-237 {
            fill: url(#linear-gradient-46);
          }
          .cls-238 {
            fill: url(#linear-gradient-47);
          }
          .cls-239 {
            fill: url(#linear-gradient-48);
          }
          .cls-240 {
            fill: url(#linear-gradient-49);
          }
          .cls-241 {
            clip-path: url(#clip-path-2);
          }
          .cls-242 {
            fill: url(#linear-gradient-50);
          }
          .cls-243 {
            fill: #ffd22d;
          }
          .cls-244 {
            fill: url(#linear-gradient-51);
          }
          .cls-245 {
            fill: url(#linear-gradient-52);
          }
          .cls-246 {
            fill: url(#linear-gradient-53);
          }
          .cls-247 {
            fill: url(#linear-gradient-54);
          }
          .cls-248 {
            fill: url(#linear-gradient-55);
          }
          .cls-249 {
            fill: url(#linear-gradient-56);
          }
          .cls-250 {
            fill: url(#linear-gradient-57);
          }
          .cls-251 {
            fill: url(#linear-gradient-58);
          }
          .cls-252 {
            fill: url(#linear-gradient-59);
          }
          .cls-253 {
            fill: #a7a7a7;
          }
          .cls-254 {
            fill: #010101;
          }
          .cls-255 {
            fill: #ffda7d;
          }
          .cls-256 {
            fill: url(#linear-gradient-60);
          }
          .cls-257 {
            fill: #97b255;
          }
          .cls-258 {
            fill: url(#linear-gradient-61);
          }
          .cls-259 {
            fill: url(#linear-gradient-62);
          }
          .cls-260 {
            fill: url(#linear-gradient-63);
          }
          .cls-261 {
            fill: url(#linear-gradient-64);
          }
          .cls-262 {
            fill: #a9badf;
          }
          .cls-264 {
            letter-spacing: -0.02em;
          }
          .cls-265 {
            letter-spacing: -0.02em;
          }
          .cls-266 {
            letter-spacing: -0.01em;
          }
          .cls-267 {
            letter-spacing: -0.01em;
          }
          .cls-268 {
            letter-spacing: -0.01em;
          }
          .cls-269 {
            letter-spacing: -0.02em;
          }
          .cls-270 {
            letter-spacing: -0.01em;
          }
          .cls-272 {
            fill: url(#linear-gradient-65);
          }
          .cls-273 {
            fill: #cad1fe;
          }
          .cls-274 {
            fill: #082b61;
          }
          .cls-275,
          .cls-296 {
            fill: #005cb2;
          }
          .cls-275 {
            opacity: 0.16;
          }
          .cls-276 {
            fill: #093373;
          }
          .cls-277 {
            stroke: #093373;
          }
          .cls-278 {
            fill: #ccd3ff;
          }
          .cls-279 {
            fill: #b9afdd;
          }
          .cls-280 {
            fill: #aaa3cc;
          }
          .cls-282 {
            stroke-width: 3px;
          }
          .cls-285 {
            fill: #f4af32;
          }
          .cls-286 {
            opacity: 0.52;
          }
          .cls-287 {
            fill: #a8c4e5;
          }
          .cls-288 {
            opacity: 0.65;
          }
          .cls-289 {
            fill: #e1eaf4;
          }
          .cls-290 {
            fill: #dd3c3c;
          }
          .cls-291 {
            fill: #ec5451;
          }
          .cls-292 {
            fill: #f2e9d3;
          }
          .cls-293 {
            stroke: #f4af32;
          }
          .cls-294 {
            stroke: #e29e30;
          }
          .cls-295 {
            fill: #ffaa82;
          }
          .cls-297 {
            fill: #003466;
          }
          .cls-298 {
            fill: #dee5ff;
          }
          .cls-299 {
            fill: #d18100;
          }
          .cls-300 {
            fill: #244e8f;
          }
          .cls-301 {
            fill: #e3971b;
          }
        </style>
        <linearGradient
          id="linear-gradient"
          x1="22.32"
          y1="456.8"
          x2="518.58"
          y2="595.39"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.05" stop-color="#bad4ff" />
          <stop offset="0.48" stop-color="#94ceff" />
          <stop offset="0.68" stop-color="#9ec2ff" />
          <stop offset="1" stop-color="#868ed7" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="387.65"
          y1="20.53"
          x2="600.55"
          y2="128.27"
          xlink:href="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-3"
          x1="469.82"
          y1="206.16"
          x2="549.46"
          y2="206.16"
          xlink:href="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-4"
          x1="320.14"
          y1="200.86"
          x2="420.4"
          y2="200.86"
          xlink:href="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-5"
          x1="-578.68"
          y1="615.67"
          x2="-482.56"
          y2="615.67"
          gradientTransform="matrix(-1.07, -0.34, 0.46, -1.45, -630.85, 910.57)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.05" stop-color="#bad4ff" />
          <stop offset="0.48" stop-color="#94ceff" />
          <stop offset="0.68" stop-color="#9ec2ff" />
          <stop offset="1" stop-color="#85aaff" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-6"
          x1="171.34"
          y1="200.73"
          x2="278.67"
          y2="200.73"
          xlink:href="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-7"
          x1="43.84"
          y1="215.4"
          x2="119.84"
          y2="215.4"
          xlink:href="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-8"
          x1="62.46"
          y1="169.76"
          x2="62.47"
          y2="169.77"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#c9c9c8" />
          <stop offset="0.32" stop-color="#d3d1d0" />
          <stop offset="0.7" stop-color="#d7d5d4" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-9"
          x1="2601.81"
          y1="169.74"
          x2="2601.83"
          y2="169.71"
          gradientTransform="matrix(-1, 0, 0, 1, 2664.3, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stop-color="#fbfbfa" />
          <stop offset="0.59" stop-color="#f9f8f7" />
          <stop offset="0.77" stop-color="#f1f0ef" />
          <stop offset="0.91" stop-color="#e3e2e1" />
          <stop offset="1" stop-color="#d7d5d4" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-10"
          x1="62.82"
          y1="169.9"
          x2="62.89"
          y2="170.02"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stop-color="#fbfbfa" />
          <stop offset="0.7" stop-color="#d7d5d4" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-11"
          x1="62.16"
          y1="169.93"
          x2="62.17"
          y2="169.95"
          xlink:href="#linear-gradient-8"
        />
        <linearGradient
          id="linear-gradient-12"
          x1="2602.11"
          y1="169.91"
          x2="2602.13"
          y2="169.88"
          xlink:href="#linear-gradient-9"
        />
        <linearGradient
          id="linear-gradient-13"
          x1="62.51"
          y1="170.07"
          x2="62.59"
          y2="170.19"
          xlink:href="#linear-gradient-10"
        />
        <linearGradient
          id="linear-gradient-14"
          x1="78.23"
          y1="178.79"
          x2="78.24"
          y2="178.81"
          xlink:href="#linear-gradient-8"
        />
        <linearGradient
          id="linear-gradient-15"
          x1="2586.04"
          y1="178.77"
          x2="2586.05"
          y2="178.75"
          xlink:href="#linear-gradient-9"
        />
        <linearGradient
          id="linear-gradient-16"
          x1="78.59"
          y1="178.93"
          x2="78.66"
          y2="179.06"
          xlink:href="#linear-gradient-10"
        />
        <linearGradient
          id="linear-gradient-17"
          x1="77.93"
          y1="178.97"
          x2="77.94"
          y2="178.98"
          xlink:href="#linear-gradient-8"
        />
        <linearGradient
          id="linear-gradient-18"
          x1="2586.34"
          y1="178.95"
          x2="2586.35"
          y2="178.92"
          xlink:href="#linear-gradient-9"
        />
        <linearGradient
          id="linear-gradient-19"
          x1="78.29"
          y1="179.11"
          x2="78.36"
          y2="179.23"
          xlink:href="#linear-gradient-10"
        />
        <linearGradient
          id="linear-gradient-20"
          x1="9906.33"
          y1="179.51"
          x2="9906.36"
          y2="179.45"
          gradientTransform="translate(-9824.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#c0b285" />
          <stop offset="0.09" stop-color="#cec093" />
          <stop offset="0.26" stop-color="#e2d4a7" />
          <stop offset="0.43" stop-color="#efe1b3" />
          <stop offset="0.6" stop-color="#f3e5b7" />
          <stop offset="0.82" stop-color="#f1e3b5" />
          <stop offset="0.91" stop-color="#ecdeae" />
          <stop offset="0.96" stop-color="#e2d4a3" />
          <stop offset="1" stop-color="#d8c996" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-21"
          x1="9905.59"
          y1="180.68"
          x2="9905.61"
          y2="180.65"
          gradientTransform="translate(-9824.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stop-color="#a89c76" />
          <stop offset="0.06" stop-color="#b1a57e" />
          <stop offset="0.22" stop-color="#cec197" />
          <stop offset="0.38" stop-color="#e2d5a9" />
          <stop offset="0.55" stop-color="#efe1b3" />
          <stop offset="0.7" stop-color="#f3e5b7" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-22"
          x1="9906.67"
          y1="179.04"
          x2="9906.68"
          y2="179.02"
          gradientTransform="translate(-9824.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stop-color="#f3e5b7" />
          <stop offset="0.58" stop-color="#f4e6bb" />
          <stop offset="0.88" stop-color="#f5ebc8" />
          <stop offset="1" stop-color="#f6edcf" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-23"
          x1="9906.69"
          y1="179.99"
          x2="9906.71"
          y2="179.95"
          gradientTransform="translate(-9824.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#a89c76" />
          <stop offset="0.01" stop-color="#b8ac84" />
          <stop offset="0.03" stop-color="#cec197" />
          <stop offset="0.05" stop-color="#dfd1a5" />
          <stop offset="0.07" stop-color="#eaddaf" />
          <stop offset="0.1" stop-color="#f1e3b5" />
          <stop offset="0.2" stop-color="#f3e5b7" />
          <stop offset="0.42" stop-color="#efe1b3" />
          <stop offset="0.65" stop-color="#e2d4a7" />
          <stop offset="0.88" stop-color="#cec093" />
          <stop offset="1" stop-color="#c0b285" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-24"
          x1="9906.59"
          y1="180"
          x2="9906.62"
          y2="179.96"
          xlink:href="#linear-gradient-23"
        />
        <linearGradient
          id="linear-gradient-25"
          x1="9906.5"
          y1="180.02"
          x2="9906.52"
          y2="179.98"
          xlink:href="#linear-gradient-23"
        />
        <linearGradient
          id="linear-gradient-26"
          x1="9906.83"
          y1="179.94"
          x2="9906.83"
          y2="179.93"
          gradientTransform="translate(-9824.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stop-color="#f3e5b7" />
          <stop offset="0.69" stop-color="#f1e3b5" />
          <stop offset="0.84" stop-color="#ecdeae" />
          <stop offset="0.94" stop-color="#e2d4a3" />
          <stop offset="1" stop-color="#d8c996" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-27"
          x1="9905.51"
          y1="180.17"
          x2="9905.55"
          y2="180.11"
          gradientTransform="translate(-9824.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stop-color="#a89c76" />
          <stop offset="0.05" stop-color="#b8ac84" />
          <stop offset="0.1" stop-color="#cec197" />
          <stop offset="0.17" stop-color="#dfd1a5" />
          <stop offset="0.26" stop-color="#eaddaf" />
          <stop offset="0.37" stop-color="#f1e3b5" />
          <stop offset="0.7" stop-color="#f3e5b7" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-28"
          x1="9905.96"
          y1="180.77"
          x2="9905.97"
          y2="180.76"
          gradientTransform="translate(-9824.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stop-color="#f3e5b7" />
          <stop offset="1" stop-color="#f5eac7" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-29"
          x1="9905.92"
          y1="180.83"
          x2="9905.93"
          y2="180.81"
          xlink:href="#linear-gradient-21"
        />
        <clipPath id="clip-path">
          <path id="SVGID" class="cls-1" d="M82.56,179.37l-.55-.32h0l.55.32Z" />
        </clipPath>
        <linearGradient
          id="linear-gradient-30"
          x1="9906.09"
          y1="180.44"
          x2="9906.83"
          y2="179.15"
          gradientTransform="translate(-9824.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#d8d8d8" />
          <stop offset="0.03" stop-color="#dfdfdf" />
          <stop offset="0.12" stop-color="#ededed" />
          <stop offset="0.22" stop-color="#f5f5f5" />
          <stop offset="0.4" stop-color="#f8f8f8" />
          <stop offset="0.71" stop-color="#f5f5f5" />
          <stop offset="0.9" stop-color="#ededed" />
          <stop offset="1" stop-color="#e5e5e5" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-31"
          x1="9907.41"
          y1="180.27"
          x2="9907.41"
          y2="180.27"
          xlink:href="#linear-gradient-26"
        />
        <linearGradient
          id="linear-gradient-32"
          x1="9907.27"
          y1="180.33"
          x2="9907.29"
          y2="180.29"
          gradientTransform="translate(-9824.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#a89c76" />
          <stop offset="0.02" stop-color="#b8ac84" />
          <stop offset="0.05" stop-color="#cec197" />
          <stop offset="0.09" stop-color="#dfd1a5" />
          <stop offset="0.14" stop-color="#eaddaf" />
          <stop offset="0.21" stop-color="#f1e3b5" />
          <stop offset="0.4" stop-color="#f3e5b7" />
          <stop offset="0.57" stop-color="#efe1b3" />
          <stop offset="0.74" stop-color="#e2d4a7" />
          <stop offset="0.91" stop-color="#cec093" />
          <stop offset="1" stop-color="#c0b285" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-33"
          x1="9907.17"
          y1="180.34"
          x2="9907.2"
          y2="180.3"
          xlink:href="#linear-gradient-32"
        />
        <linearGradient
          id="linear-gradient-34"
          x1="9907.08"
          y1="180.35"
          x2="9907.1"
          y2="180.32"
          xlink:href="#linear-gradient-32"
        />
        <linearGradient
          id="linear-gradient-35"
          x1="9906.1"
          y1="180.51"
          x2="9906.13"
          y2="180.45"
          xlink:href="#linear-gradient-27"
        />
        <linearGradient
          id="linear-gradient-36"
          x1="9907.12"
          y1="180.22"
          x2="9907.14"
          y2="180.18"
          gradientTransform="translate(-9824.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1" stop-color="#c0b285" />
          <stop offset="0.7" stop-color="#f3e5b7" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-37"
          x1="9907.28"
          y1="179.4"
          x2="9907.29"
          y2="179.37"
          xlink:href="#linear-gradient-22"
        />
        <linearGradient
          id="linear-gradient-38"
          x1="9906.2"
          y1="181.03"
          x2="9906.22"
          y2="181"
          xlink:href="#linear-gradient-21"
        />
        <linearGradient
          id="linear-gradient-39"
          x1="9906.99"
          y1="179.89"
          x2="9907.03"
          y2="179.83"
          xlink:href="#linear-gradient-20"
        />
        <linearGradient
          id="linear-gradient-40"
          x1="7738.21"
          y1="180.4"
          x2="7738.25"
          y2="180.34"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-20"
        />
        <linearGradient
          id="linear-gradient-41"
          x1="7737.48"
          y1="181.58"
          x2="7737.5"
          y2="181.54"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-21"
        />
        <linearGradient
          id="linear-gradient-42"
          x1="7738.55"
          y1="179.94"
          x2="7738.57"
          y2="179.91"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-22"
        />
        <linearGradient
          id="linear-gradient-43"
          x1="7738.57"
          y1="180.89"
          x2="7738.59"
          y2="180.85"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-23"
        />
        <linearGradient
          id="linear-gradient-44"
          x1="7738.47"
          y1="180.9"
          x2="7738.5"
          y2="180.86"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-23"
        />
        <linearGradient
          id="linear-gradient-45"
          x1="7738.38"
          y1="180.91"
          x2="7738.4"
          y2="180.87"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-23"
        />
        <linearGradient
          id="linear-gradient-46"
          x1="7738.71"
          y1="180.83"
          x2="7738.72"
          y2="180.83"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-26"
        />
        <linearGradient
          id="linear-gradient-47"
          x1="7737.4"
          y1="181.07"
          x2="7737.43"
          y2="181.01"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-27"
        />
        <linearGradient
          id="linear-gradient-48"
          x1="7737.84"
          y1="181.67"
          x2="7737.85"
          y2="181.65"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-28"
        />
        <linearGradient
          id="linear-gradient-49"
          x1="7737.8"
          y1="181.73"
          x2="7737.82"
          y2="181.7"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-21"
        />
        <clipPath id="clip-path-2">
          <path
            id="SVGID-2"
            data-name="SVGID"
            class="cls-1"
            d="M83.84,180.27l-.55-.32,0,0,.56.33Z"
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-50"
          x1="7737.97"
          y1="181.33"
          x2="7738.71"
          y2="180.05"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-30"
        />
        <linearGradient
          id="linear-gradient-51"
          x1="7739.29"
          y1="181.17"
          x2="7739.3"
          y2="181.17"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-26"
        />
        <linearGradient
          id="linear-gradient-52"
          x1="7739.15"
          y1="181.22"
          x2="7739.17"
          y2="181.18"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-32"
        />
        <linearGradient
          id="linear-gradient-53"
          x1="7739.06"
          y1="181.24"
          x2="7739.08"
          y2="181.2"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-32"
        />
        <linearGradient
          id="linear-gradient-54"
          x1="7738.96"
          y1="181.25"
          x2="7738.98"
          y2="181.21"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-32"
        />
        <linearGradient
          id="linear-gradient-55"
          x1="7737.98"
          y1="181.41"
          x2="7738.01"
          y2="181.35"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-27"
        />
        <linearGradient
          id="linear-gradient-56"
          x1="7739"
          y1="181.11"
          x2="7739.02"
          y2="181.08"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-36"
        />
        <linearGradient
          id="linear-gradient-57"
          x1="7739.16"
          y1="180.29"
          x2="7739.18"
          y2="180.27"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-22"
        />
        <linearGradient
          id="linear-gradient-58"
          x1="7738.08"
          y1="181.93"
          x2="7738.1"
          y2="181.9"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-21"
        />
        <linearGradient
          id="linear-gradient-59"
          x1="7738.87"
          y1="180.79"
          x2="7738.91"
          y2="180.73"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-20"
        />
        <linearGradient
          id="linear-gradient-60"
          x1="5159.91"
          y1="170.35"
          x2="5160.86"
          y2="170.35"
          gradientTransform="matrix(-1, 0, 0, 1, 5262.14, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#5f6f35" />
          <stop offset="0.42" stop-color="#617136" />
          <stop offset="0.57" stop-color="#67783a" />
          <stop offset="0.68" stop-color="#718341" />
          <stop offset="0.77" stop-color="#80944b" />
          <stop offset="0.84" stop-color="#93aa58" />
          <stop offset="0.91" stop-color="#aac568" />
          <stop offset="0.96" stop-color="#c3e178" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-61"
          x1="5160.1"
          y1="170.04"
          x2="5160.13"
          y2="170.04"
          gradientTransform="matrix(-1, 0, 0, 1, 5262.14, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#787878" />
          <stop offset="0.07" stop-color="#898989" />
          <stop offset="0.26" stop-color="#aeaeae" />
          <stop offset="0.45" stop-color="#cbcbcb" />
          <stop offset="0.64" stop-color="#dfdfdf" />
          <stop offset="0.82" stop-color="#ececec" />
          <stop offset="1" stop-color="#f0f0f0" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-62"
          x1="5160.84"
          y1="170.88"
          x2="5161.78"
          y2="170.88"
          xlink:href="#linear-gradient-60"
        />
        <linearGradient
          id="linear-gradient-63"
          x1="5161.02"
          y1="170.57"
          x2="5161.05"
          y2="170.57"
          xlink:href="#linear-gradient-61"
        />
        <linearGradient
          id="linear-gradient-64"
          x1="5161.76"
          y1="171.41"
          x2="5162.7"
          y2="171.41"
          xlink:href="#linear-gradient-60"
        />
        <linearGradient
          id="linear-gradient-65"
          x1="90.76"
          y1="506.81"
          x2="539.23"
          y2="506.81"
          xlink:href="#linear-gradient"
        />
      </defs>
      <g class="cls-2">
        <g id="Layer_1" data-name="Layer 1">
          <rect class="cls-3" y="467.84" width="600" height="12.49" />
          <rect class="cls-4" y="468.7" width="600" height="131.3" />
          <rect class="cls-5" y="468.7" width="600" height="131.3" />
          <rect class="cls-6" y="166.54" width="600" height="214.14" />
          <rect
            class="cls-3"
            x="2.66"
            y="3.12"
            width="172.58"
            height="42.69"
            rx="0.73"
          />
          <rect
            class="cls-3"
            x="392.53"
            y="30.74"
            width="182.39"
            height="80.58"
            rx="2.46"
          />
          <rect
            class="cls-7"
            x="390.8"
            y="27.72"
            width="181.22"
            height="80.51"
          />
          <rect
            class="cls-8"
            x="390.8"
            y="27.72"
            width="181.22"
            height="80.51"
          />
          <text class="cls-9" transform="translate(36 580)">
            This report was created by RealInfoBox.com using the most recent MLS
            sales data published by the local real
          </text>
          <text class="cls-9" transform="translate(20 592)">
            estate board. Information herein is deemed reliable but not
            guaranteed. Copyright © 2015-{{ new Date().getFullYear() }}
            RealInfoBox.com
          </text>
          <text class="cls-81" transform="translate(438 73.82)">
            {{ month.slice(0, 3) }} {{ year }}
          </text>
          <text class="cls-85" transform="translate(408 95.73)">
            BENCHMARK PRICES
          </text>
          <text class="cls-87" transform="translate(10.64 461.68)">
            www.RealInfoBox.com
          </text>
          <circle class="cls-94" cx="424.66" cy="38.01" r="4.26" />
          <circle class="cls-94" cx="530.38" cy="38.01" r="4.26" />
          <path
            class="cls-95"
            d="M424.7,38.58c0-.54,0-1.1,0-1.65,0-10.58,5.08-19.15,11.34-19.15,3.09,0,5.89,2.09,7.94,5.48"
          />
          <path
            class="cls-95"
            d="M530.76,38.58c0-.54,0-1.1,0-1.65,0-10.58,5.08-19.15,11.34-19.15,3.09,0,5.9,2.09,7.94,5.48"
          />
          <text class="cls-96" transform="translate(25.92 95.73)">
            Market at a Glance
          </text>
          <rect class="cls-103" width="172.62" height="42.69" />
          <text class="cls-104" transform="translate(29.47 29.99)">
            CALGARY
          </text>
          <rect
            class="cls-3"
            x="16.88"
            y="154.3"
            width="134.47"
            height="217.48"
            rx="1.16"
          />
          <rect
            class="cls-107"
            x="14.84"
            y="151.55"
            width="133.99"
            height="217.52"
          />
          <text class="cls-108" transform="translate(35 255.71)">
            Apartment style
          </text>
          <text class="cls-114" transform="translate(25 300)">
            $ {{ reportData.apartment.benchmarkPrice | commify }}
          </text>
          <rect
            class="cls-3"
            x="450.91"
            y="154.3"
            width="134.31"
            height="217.48"
            rx="1.16"
          />
          <rect
            class="cls-107"
            x="448.22"
            y="151.55"
            width="133.81"
            height="217.52"
          />
          <text class="cls-108" transform="translate(462 255.71)">
            Detached homes
          </text>
          <text class="cls-114" transform="translate(459 300)">
            $ {{ reportData.detached.benchmarkPrice | commify }}
          </text>
          <rect
            class="cls-3"
            x="306.68"
            y="154.3"
            width="134.29"
            height="217.48"
            rx="1.16"
          />
          <rect
            class="cls-107"
            x="303.38"
            y="151.55"
            width="133.99"
            height="217.52"
          />
          <text class="cls-108" transform="translate(322 250.71)">
            Semi-Detached
            <tspan x="27" y="14.4">Homes</tspan>
          </text>
          <text class="cls-114" transform="translate(313 300)">
            $ {{ reportData['semi-detached'].benchmarkPrice | commify }}
          </text>
          <rect
            class="cls-3"
            x="161.61"
            y="154.3"
            width="134.48"
            height="217.48"
            rx="1.16"
          />
          <rect
            class="cls-107"
            x="159.18"
            y="151.55"
            width="134.02"
            height="217.52"
          />
          <text class="cls-108" transform="translate(186 250.71)">
            Row Housing
            <tspan x="19.04" y="14.4">Homes</tspan>
          </text>
          <text class="cls-114" transform="translate(172 300)">
            $ {{ reportData.row.benchmarkPrice | commify }}
          </text>
          <path
            class="cls-4"
            d="M500.33,182.31c-5.48,1.88-18.61,6.72-25.26,9.17a6.47,6.47,0,0,0-4.23,5.73l-1,18.4a6.49,6.49,0,0,0,5.18,6.71l39.25,8a6.46,6.46,0,0,0,4.59-.77l22.1-13a21.25,21.25,0,0,0,6.53-6.64c1.07-1.74,1.81-2.94,1.95-4.18,1.11-10-37.14-20.26-44.41-23.2C504.66,182.36,503.38,181.27,500.33,182.31Z"
          />
          <path
            class="cls-128"
            d="M500.33,182.31c-5.48,1.88-18.61,6.71-25.26,9.17a6.47,6.47,0,0,0-4.23,5.73l-1,18.4a6.49,6.49,0,0,0,5.18,6.71l39.25,8a6.46,6.46,0,0,0,4.59-.77l22.1-13a21.25,21.25,0,0,0,6.53-6.64c1.07-1.74,1.81-2.94,1.95-4.18,1.11-10-37.14-20.26-44.41-23.2C504.66,182.36,503.38,181.27,500.33,182.31Z"
          />
          <polygon
            class="cls-129"
            points="526.39 192.32 526.48 192.37 532.38 188.96 532.38 188.86 526.39 192.32"
          />
          <polygon
            class="cls-130"
            points="516.92 222.14 474.61 197.72 502.27 181.75 544.58 206.17 516.92 222.14"
          />
          <polygon
            class="cls-131"
            points="521.8 219.32 500.64 207.11 500.64 196.78 521.8 203.35 521.8 219.32"
          />
          <polygon
            class="cls-132"
            points="500.64 197.72 495.76 194.9 495.76 208.99 500.64 206.17 500.64 197.72"
          />
          <polygon
            class="cls-133"
            points="507.15 198.66 502.27 195.84 502.27 207.11 507.15 209.93 507.15 198.66"
          />
          <polygon
            class="cls-134"
            points="506.34 207.58 503.08 205.7 503.08 204.76 506.34 206.64 506.34 207.58"
          />
          <polygon
            class="cls-135"
            points="503.22 205.62 503.08 205.7 506.34 207.58 506.34 207.42 503.22 205.62"
          />
          <polygon
            class="cls-135"
            points="503.22 204.84 503.08 204.76 503.08 205.7 503.22 205.62 503.22 204.84"
          />
          <polygon
            class="cls-134"
            points="506.34 205.39 503.08 203.51 503.08 202.57 506.34 204.45 506.34 205.39"
          />
          <polygon
            class="cls-135"
            points="503.22 203.43 503.08 203.51 506.34 205.39 506.34 205.23 503.22 203.43"
          />
          <polygon
            class="cls-135"
            points="503.22 202.65 503.08 202.57 503.08 203.51 503.22 203.43 503.22 202.65"
          />
          <polygon
            class="cls-134"
            points="506.34 201 503.08 199.13 503.08 198.19 506.34 200.06 506.34 201"
          />
          <polygon
            class="cls-135"
            points="503.22 199.05 503.08 199.13 506.34 201 506.34 200.85 503.22 199.05"
          />
          <polygon
            class="cls-135"
            points="503.22 198.26 503.08 198.19 503.08 199.13 503.22 199.05 503.22 198.26"
          />
          <polygon
            class="cls-134"
            points="506.34 203.2 503.08 201.32 503.08 200.38 506.34 202.26 506.34 203.2"
          />
          <polygon
            class="cls-135"
            points="503.22 201.24 503.08 201.32 506.34 203.2 506.34 203.04 503.22 201.24"
          />
          <polygon
            class="cls-135"
            points="503.22 200.46 503.08 200.38 503.08 201.32 503.22 201.24 503.22 200.46"
          />
          <polygon
            class="cls-134"
            points="507 198.74 502.42 196.1 502.42 207.2 502.5 207.24 502.5 207.2 502.5 196.23 506.93 198.79 506.93 209.75 506.93 209.8 507 209.84 507 198.74"
          />
          <polygon
            class="cls-136"
            points="502.81 202.99 502.7 202.93 502.66 202.96 502.76 203.02 502.81 202.99"
          />
          <polygon
            class="cls-131"
            points="502.7 201.44 502.6 201.38 502.6 203.05 502.7 203.11 502.7 201.44"
          />
          <polygon
            class="cls-136"
            points="502.7 201.33 502.81 201.38 502.76 201.41 502.7 201.44 502.6 201.38 502.66 201.35 502.7 201.33"
          />
          <polygon
            class="cls-137"
            points="502.7 201.44 502.7 203.11 502.76 203.08 502.81 203.05 502.81 202.99 502.76 203.02 502.76 201.47 502.81 201.44 502.81 201.38 502.76 201.41 502.7 201.44"
          />
          <polygon
            class="cls-137"
            points="476.24 179.87 476.24 186.44 503.9 170.47 503.9 163.9 490.07 161.55 476.24 179.87"
          />
          <polygon
            class="cls-131"
            points="530.75 185.03 529.12 184.1 515.29 202.41 516.91 203.35 530.75 185.03"
          />
          <line
            class="cls-138"
            x1="490.07"
            y1="162.49"
            x2="490.07"
            y2="162.49"
          />
          <polygon
            class="cls-136"
            points="521.8 218.38 516.92 221.2 495.76 208.99 500.64 206.17 521.8 218.38"
          />
          <polygon
            class="cls-131"
            points="495.76 208.99 495.76 209.93 516.92 222.14 516.92 221.2 495.76 208.99"
          />
          <polygon
            class="cls-137"
            points="521.8 218.38 516.92 221.2 516.92 222.14 521.8 219.32 521.8 218.38"
          />
          <path class="cls-139" d="M513.24,208.29v-5.9l5.93,3.42v5.91Z" />
          <polygon
            class="cls-140"
            points="513.13 202.23 513.13 208.38 519.26 211.91 519.26 205.77 513.13 202.23"
          />
          <path
            class="cls-141"
            d="M519.36,205.7l-6.51-3.76v6.58l6.51,3.76ZM513,208.41v-6.14l6.13,3.54V212Z"
          />
          <polygon
            class="cls-142"
            points="513.03 202.27 513.03 208.41 519.17 211.95 519.17 205.81 513.03 202.27"
          />
          <polygon
            class="cls-143"
            points="513.24 208.29 513.03 208.41 513.03 202.27 513.24 202.39 513.24 208.29"
          />
          <polygon
            class="cls-144"
            points="513.03 208.41 513.24 208.29 519.17 211.72 519.17 211.95 513.03 208.41"
          />
          <polygon
            class="cls-3"
            points="513.44 208.41 513.03 208.41 513.24 208.29 513.24 202.39 513.44 202.5 513.44 208.41"
          />
          <polygon
            class="cls-3"
            points="521.8 204.29 500.64 196.78 500.64 206.17 495.76 208.99 505.53 208.99 505.53 201.47 521.8 210.87 521.8 204.29"
          />
          <polygon
            class="cls-138"
            points="476.24 180.81 515.29 203.35 529.12 185.03 490.07 162.49 476.24 180.81"
          />
          <polygon
            class="cls-141"
            points="490.07 162.49 529.12 185.03 542.95 187.38 503.9 164.84 490.07 162.49"
          />
          <polygon
            class="cls-143"
            points="506.24 166.08 492.4 163.73 492.51 163.79 506.34 166.14 506.24 166.08"
          />
          <polygon
            class="cls-143"
            points="506.34 166.14 492.51 163.79 492.51 163.9 506.34 166.25 506.34 166.14"
          />
          <polygon
            class="cls-143"
            points="508.68 167.49 494.85 165.14 494.95 165.2 508.78 167.54 508.68 167.49"
          />
          <polygon
            class="cls-143"
            points="508.78 167.54 494.95 165.2 494.95 165.31 508.78 167.66 508.78 167.54"
          />
          <polygon
            class="cls-143"
            points="511.12 168.9 497.29 166.55 497.39 166.61 511.22 168.95 511.12 168.9"
          />
          <polygon
            class="cls-143"
            points="511.22 168.95 497.39 166.61 497.39 166.72 511.22 169.06 511.22 168.95"
          />
          <polygon
            class="cls-143"
            points="513.56 170.3 499.73 167.96 499.83 168.02 513.66 170.36 513.56 170.3"
          />
          <polygon
            class="cls-143"
            points="513.66 170.36 499.83 168.02 499.83 168.13 513.66 170.47 513.66 170.36"
          />
          <polygon
            class="cls-143"
            points="516 171.71 502.17 169.37 502.27 169.43 516.1 171.77 516 171.71"
          />
          <polygon
            class="cls-143"
            points="516.1 171.77 502.27 169.43 502.27 169.54 516.1 171.88 516.1 171.77"
          />
          <polygon
            class="cls-143"
            points="518.44 173.12 504.61 170.78 504.71 170.83 518.54 173.18 518.44 173.12"
          />
          <polygon
            class="cls-143"
            points="518.54 173.18 504.71 170.83 504.71 170.94 518.54 173.29 518.54 173.18"
          />
          <polygon
            class="cls-143"
            points="520.88 174.53 507.05 172.19 507.15 172.24 520.99 174.59 520.88 174.53"
          />
          <polygon
            class="cls-143"
            points="520.99 174.59 507.15 172.24 507.15 172.35 520.99 174.7 520.99 174.59"
          />
          <polygon
            class="cls-143"
            points="523.32 175.94 509.49 173.59 509.59 173.65 523.42 176 523.32 175.94"
          />
          <polygon
            class="cls-143"
            points="523.42 176 509.59 173.65 509.59 173.76 523.42 176.11 523.42 176"
          />
          <polygon
            class="cls-143"
            points="525.76 177.35 511.93 175 512.03 175.06 525.87 177.41 525.76 177.35"
          />
          <polygon
            class="cls-143"
            points="525.87 177.41 512.03 175.06 512.03 175.17 525.87 177.52 525.87 177.41"
          />
          <polygon
            class="cls-143"
            points="528.21 178.76 514.37 176.41 514.48 176.47 528.31 178.82 528.21 178.76"
          />
          <polygon
            class="cls-143"
            points="528.31 178.82 514.48 176.47 514.48 176.58 528.31 178.93 528.31 178.82"
          />
          <polygon
            class="cls-143"
            points="530.65 180.17 516.81 177.82 516.92 177.88 530.75 180.23 530.65 180.17"
          />
          <polygon
            class="cls-143"
            points="530.75 180.23 516.92 177.88 516.92 177.99 530.75 180.34 530.75 180.23"
          />
          <polygon
            class="cls-143"
            points="533.09 181.58 519.25 179.23 519.36 179.29 533.19 181.63 533.09 181.58"
          />
          <polygon
            class="cls-143"
            points="533.19 181.63 519.36 179.29 519.36 179.4 533.19 181.75 533.19 181.63"
          />
          <polygon
            class="cls-143"
            points="535.53 182.99 521.7 180.64 521.8 180.7 535.63 183.04 535.53 182.99"
          />
          <polygon
            class="cls-143"
            points="535.63 183.04 521.8 180.7 521.8 180.81 535.63 183.16 535.63 183.04"
          />
          <polygon
            class="cls-143"
            points="537.97 184.4 524.14 182.05 524.24 182.11 538.07 184.45 537.97 184.4"
          />
          <polygon
            class="cls-143"
            points="538.07 184.45 524.24 182.11 524.24 182.22 538.07 184.56 538.07 184.45"
          />
          <polygon
            class="cls-143"
            points="540.41 185.8 526.58 183.46 526.68 183.51 540.51 185.86 540.41 185.8"
          />
          <polygon
            class="cls-143"
            points="540.51 185.86 526.68 183.51 526.68 183.63 540.51 185.97 540.51 185.86"
          />
          <polygon
            class="cls-131"
            points="503.9 163.9 490.07 161.55 488.44 160.61 502.27 162.96 503.9 163.9"
          />
          <polygon
            class="cls-3"
            points="491.29 163.19 490.07 162.49 476.24 180.81 478.51 179.96 491.29 163.19"
          />
          <polygon
            class="cls-137"
            points="521.8 219.32 521.8 204.29 516.92 207.11 516.91 203.35 530.75 185.03 544.58 187.38 544.58 206.17 521.8 219.32"
          />
          <polygon
            class="cls-145"
            points="530.15 213.81 530.36 213.92 530.36 202.38 530.15 202.5 530.15 213.81"
          />
          <polygon
            class="cls-146"
            points="530.36 213.92 530.15 213.81 527.68 215.24 527.68 215.47 530.36 213.92"
          />
          <path
            class="cls-141"
            d="M527.49,216l3.26-1.88V201.94l-3.26,1.88Zm.19-.32V203.94l2.88-1.67V214Z"
          />
          <polygon
            class="cls-142"
            points="530.56 202.27 530.56 214.04 527.68 215.71 527.68 203.94 530.56 202.27"
          />
          <polygon
            class="cls-143"
            points="530.36 213.92 530.56 214.04 530.56 202.27 530.36 202.39 530.36 213.92"
          />
          <polygon
            class="cls-144"
            points="530.56 214.04 530.36 213.92 527.68 215.47 527.68 215.71 530.56 214.04"
          />
          <polygon
            class="cls-145"
            points="533.41 211.93 533.61 212.05 533.61 200.51 533.41 200.62 533.41 211.93"
          />
          <polygon
            class="cls-146"
            points="533.61 212.05 533.41 211.93 530.94 213.36 530.94 213.59 533.61 212.05"
          />
          <path
            class="cls-141"
            d="M530.75,214.16l3.25-1.88V200.07L530.75,202Zm.19-.33V202.06l2.87-1.67v11.77Z"
          />
          <polygon
            class="cls-142"
            points="533.82 200.39 533.82 212.16 530.94 213.83 530.94 202.06 533.82 200.39"
          />
          <polygon
            class="cls-143"
            points="533.61 212.05 533.82 212.16 533.82 200.39 533.61 200.51 533.61 212.05"
          />
          <polygon
            class="cls-144"
            points="533.82 212.16 533.61 212.05 530.94 213.59 530.94 213.83 533.82 212.16"
          />
          <polygon
            class="cls-145"
            points="533.41 192.2 533.61 192.32 533.61 188.7 533.41 188.66 533.41 192.2"
          />
          <polygon
            class="cls-146"
            points="533.61 192.32 533.41 192.2 530.93 193.63 530.93 193.87 533.61 192.32"
          />
          <path
            class="cls-141"
            d="M530.75,194.43l3.25-1.88v-4.14l-3.25-.56Zm.18-.33v-5.85l2.87.48v3.71Z"
          />
          <polygon
            class="cls-142"
            points="533.82 188.73 533.81 192.44 530.93 194.1 530.94 188.25 533.82 188.73"
          />
          <polygon
            class="cls-143"
            points="533.61 192.32 533.81 192.44 533.82 188.73 533.61 188.7 533.61 192.32"
          />
          <polygon
            class="cls-144"
            points="533.81 192.44 533.61 192.32 530.93 193.87 530.93 194.1 533.81 192.44"
          />
          <polygon
            class="cls-145"
            points="530.15 194.08 530.36 194.2 530.36 188.47 530.15 188.71 530.15 194.08"
          />
          <polygon
            class="cls-146"
            points="530.36 194.2 530.15 194.08 527.68 195.51 527.68 195.75 530.36 194.2"
          />
          <path
            class="cls-141"
            d="M527.49,196.31l3.26-1.88v-6.58l-3.26,4.31Zm.19-.33v-3.7l2.88-3.81v5.85Z"
          />
          <polygon
            class="cls-142"
            points="530.56 188.47 530.56 194.32 527.68 195.98 527.68 192.28 530.56 188.47"
          />
          <polygon
            class="cls-143"
            points="530.36 194.2 530.56 194.32 530.56 188.47 530.36 188.74 530.36 194.2"
          />
          <polygon
            class="cls-144"
            points="530.56 194.32 530.36 194.2 527.68 195.75 527.68 195.98 530.56 194.32"
          />
          <polygon
            class="cls-131"
            points="544.58 187.38 530.75 185.03 529.12 184.1 542.95 186.44 544.58 187.38"
          />
          <polygon
            class="cls-131"
            points="530.75 185.03 529.12 184.1 515.29 202.41 516.92 203.35 530.75 185.03"
          />
          <polygon
            class="cls-131"
            points="490.07 161.55 488.44 160.61 474.61 178.93 476.23 179.87 490.07 161.55"
          />
          <polygon
            class="cls-3"
            points="505.12 165.54 503.9 164.84 490.07 162.49 491.29 163.19 505.12 165.54"
          />
          <polygon
            class="cls-147"
            points="506.34 166.25 492.51 163.9 492.56 163.93 506.4 166.28 506.34 166.25"
          />
          <polygon
            class="cls-147"
            points="508.78 167.66 494.95 165.31 495.01 165.34 508.84 167.69 508.78 167.66"
          />
          <polygon
            class="cls-147"
            points="511.22 169.06 497.39 166.72 497.45 166.75 511.28 169.1 511.22 169.06"
          />
          <polygon
            class="cls-147"
            points="513.66 170.47 499.83 168.13 499.89 168.16 513.72 170.51 513.66 170.47"
          />
          <polygon
            class="cls-147"
            points="516.1 171.88 502.27 169.53 502.33 169.57 516.16 171.92 516.1 171.88"
          />
          <polygon
            class="cls-147"
            points="518.54 173.29 504.71 170.94 504.77 170.98 518.6 173.33 518.54 173.29"
          />
          <polygon
            class="cls-147"
            points="520.98 174.7 507.15 172.35 507.21 172.39 521.04 174.74 520.98 174.7"
          />
          <polygon
            class="cls-147"
            points="523.42 176.11 509.59 173.76 509.65 173.8 523.48 176.14 523.42 176.11"
          />
          <polygon
            class="cls-147"
            points="525.87 177.52 512.03 175.17 512.09 175.21 525.92 177.55 525.87 177.52"
          />
          <polygon
            class="cls-147"
            points="528.31 178.93 514.47 176.58 514.53 176.61 528.36 178.96 528.31 178.93"
          />
          <polygon
            class="cls-147"
            points="530.75 180.34 516.91 177.99 516.97 178.02 530.8 180.37 530.75 180.34"
          />
          <polygon
            class="cls-147"
            points="533.19 181.75 519.36 179.4 519.41 179.43 533.25 181.78 533.19 181.75"
          />
          <polygon
            class="cls-147"
            points="535.63 183.16 521.8 180.81 521.86 180.84 535.69 183.19 535.63 183.16"
          />
          <polygon
            class="cls-147"
            points="538.07 184.56 524.24 182.22 524.3 182.25 538.13 184.6 538.07 184.56"
          />
          <polygon
            class="cls-147"
            points="540.51 185.97 526.68 183.63 526.74 183.66 540.57 186.01 540.51 185.97"
          />
          <polygon
            class="cls-131"
            points="474.61 197.72 474.61 178.93 476.24 179.87 476.24 180.81 515.29 203.35 515.29 202.41 516.92 203.35 516.91 207.11 495.76 194.9 495.76 209.93 474.61 197.72"
          />
          <polygon
            class="cls-138"
            points="515.29 204.29 476.24 181.75 476.24 180.81 515.29 203.35 515.29 204.29"
          />
          <polygon
            class="cls-131"
            points="495.76 209.93 474.61 197.72 474.61 182.69 495.76 194.9 495.76 209.93"
          />
          <path class="cls-139" d="M485.58,198v-5.91l7.55,4.36v5.91Z" />
          <polygon
            class="cls-140"
            points="485.46 191.9 485.46 198.04 493.23 202.52 493.23 196.38 485.46 191.9"
          />
          <path
            class="cls-141"
            d="M493.32,196.3l-8.14-4.69v6.58l8.14,4.69Zm-7.95,1.78v-6.15l7.76,4.48v6.15Z"
          />
          <polygon
            class="cls-142"
            points="485.37 191.93 485.37 198.08 493.13 202.56 493.13 196.41 485.37 191.93"
          />
          <polygon
            class="cls-143"
            points="485.58 197.96 485.37 198.08 485.37 191.93 485.58 192.05 485.58 197.96"
          />
          <polygon
            class="cls-144"
            points="485.37 198.08 485.58 197.96 493.13 202.32 493.13 202.56 485.37 198.08"
          />
          <polygon
            class="cls-3"
            points="485.78 198.08 485.37 198.08 485.58 197.96 485.58 192.05 485.78 192.17 485.78 198.08"
          />
          <polygon
            class="cls-141"
            points="488.06 199.5 487.96 199.45 487.96 193.43 488.06 193.49 488.06 199.5"
          />
          <polygon
            class="cls-143"
            points="488.16 199.45 488.06 199.5 488.06 193.49 488.16 193.54 488.16 199.45"
          />
          <polygon
            class="cls-3"
            points="488.25 193.59 488.16 193.54 488.16 199.45 488.06 199.5 488.25 199.5 488.25 193.59"
          />
          <polygon
            class="cls-141"
            points="490.65 201 490.55 200.94 490.55 194.92 490.65 194.98 490.65 201"
          />
          <polygon
            class="cls-143"
            points="490.74 200.94 490.65 201 490.65 194.98 490.74 195.03 490.74 200.94"
          />
          <polygon
            class="cls-3"
            points="490.83 195.09 490.74 195.03 490.74 200.94 490.65 201 490.83 201 490.83 195.09"
          />
          <polygon
            class="cls-148"
            points="506.93 198.78 502.5 196.23 502.5 207.2 506.93 209.75 506.93 198.78"
          />
          <path class="cls-139" d="M477.44,193.26v-5.9l2.68,1.54v5.91Z" />
          <polygon
            class="cls-140"
            points="477.33 187.2 477.33 193.35 480.21 195.01 480.21 188.86 477.33 187.2"
          />
          <path
            class="cls-141"
            d="M480.3,188.79l-3.25-1.88v6.58l3.25,1.88Zm-3.06,4.59v-6.14l2.88,1.66V195Z"
          />
          <polygon
            class="cls-142"
            points="477.24 187.24 477.24 193.38 480.12 195.04 480.12 188.9 477.24 187.24"
          />
          <polygon
            class="cls-143"
            points="477.44 193.26 477.24 193.38 477.24 187.24 477.44 187.36 477.44 193.26"
          />
          <polygon
            class="cls-144"
            points="477.24 193.38 477.44 193.27 480.12 194.81 480.12 195.04 477.24 193.38"
          />
          <polygon
            class="cls-3"
            points="477.64 193.38 477.24 193.38 477.44 193.27 477.44 187.36 477.64 187.47 477.64 193.38"
          />
          <path
            class="cls-3"
            d="M544.58,195.85v10.33L521.8,219.34l-1.63.94v-.94h-3.25l-.82.47.82.47h1.62v.93l-1.62.94h1.13a1.86,1.86,0,0,0,.92-.24l.87-.51,38.37-13.06a1.24,1.24,0,0,0,.34-2.17ZM523.1,219.52"
          />
          <polygon
            class="cls-137"
            points="516.91 207.11 517.73 206.64 517.73 219.79 516.92 220.26 516.91 207.11"
          />
          <polygon
            class="cls-131"
            points="516.1 206.64 516.91 207.11 516.92 220.26 516.1 219.79 516.1 206.64"
          />
          <polygon
            class="cls-3"
            points="517.73 206.64 516.91 207.11 516.1 206.64 516.1 207.11 516.92 207.58 517.73 207.11 517.73 206.64"
          />
          <polygon
            class="cls-144"
            points="492.4 163.73 478.57 182.05 478.68 182.11 492.51 163.79 492.4 163.73"
          />
          <polygon
            class="cls-144"
            points="492.51 163.79 478.68 182.11 478.68 182.22 492.51 163.9 492.51 163.79"
          />
          <polygon
            class="cls-144"
            points="478.68 182.22 478.57 182.16 478.57 182.05 478.68 182.11 478.68 182.22"
          />
          <polygon
            class="cls-144"
            points="494.85 165.14 481.01 183.46 481.12 183.51 494.95 165.2 494.85 165.14"
          />
          <polygon
            class="cls-144"
            points="494.95 165.2 481.12 183.51 481.12 183.63 494.95 165.31 494.95 165.2"
          />
          <polygon
            class="cls-144"
            points="481.12 183.63 481.01 183.57 481.01 183.46 481.12 183.51 481.12 183.63"
          />
          <polygon
            class="cls-144"
            points="497.29 166.55 483.45 184.87 483.56 184.92 497.39 166.61 497.29 166.55"
          />
          <polygon
            class="cls-144"
            points="497.39 166.61 483.56 184.92 483.56 185.03 497.39 166.72 497.39 166.61"
          />
          <polygon
            class="cls-144"
            points="483.56 185.03 483.45 184.98 483.45 184.86 483.56 184.92 483.56 185.03"
          />
          <polygon
            class="cls-144"
            points="499.73 167.96 485.9 186.27 486 186.33 499.83 168.02 499.73 167.96"
          />
          <polygon
            class="cls-144"
            points="499.83 168.02 486 186.33 486 186.44 499.83 168.13 499.83 168.02"
          />
          <polygon
            class="cls-144"
            points="486 186.44 485.9 186.38 485.9 186.27 486 186.33 486 186.44"
          />
          <polygon
            class="cls-144"
            points="502.17 169.37 488.34 187.68 488.44 187.74 502.27 169.43 502.17 169.37"
          />
          <polygon
            class="cls-144"
            points="502.27 169.43 488.44 187.74 488.44 187.85 502.27 169.54 502.27 169.43"
          />
          <polygon
            class="cls-144"
            points="488.44 187.85 488.34 187.79 488.34 187.68 488.44 187.74 488.44 187.85"
          />
          <polygon
            class="cls-144"
            points="504.61 170.78 490.78 189.09 490.88 189.15 504.71 170.83 504.61 170.78"
          />
          <polygon
            class="cls-144"
            points="504.71 170.83 490.88 189.15 490.88 189.26 504.71 170.94 504.71 170.83"
          />
          <polygon
            class="cls-144"
            points="490.88 189.26 490.78 189.2 490.78 189.09 490.88 189.15 490.88 189.26"
          />
          <polygon
            class="cls-144"
            points="509.49 173.59 495.66 191.91 495.76 191.97 509.59 173.65 509.49 173.59"
          />
          <polygon
            class="cls-144"
            points="509.59 173.65 495.76 191.97 495.76 192.08 509.59 173.76 509.59 173.65"
          />
          <polygon
            class="cls-144"
            points="495.76 192.08 495.66 192.02 495.66 191.91 495.76 191.97 495.76 192.08"
          />
          <polygon
            class="cls-144"
            points="511.93 175 498.1 193.32 498.2 193.38 512.03 175.06 511.93 175"
          />
          <polygon
            class="cls-144"
            points="512.03 175.06 498.2 193.38 498.2 193.49 512.03 175.17 512.03 175.06"
          />
          <polygon
            class="cls-144"
            points="498.2 193.49 498.1 193.43 498.1 193.32 498.2 193.38 498.2 193.49"
          />
          <polygon
            class="cls-144"
            points="514.37 176.41 500.54 194.73 500.64 194.79 514.48 176.47 514.37 176.41"
          />
          <polygon
            class="cls-144"
            points="514.48 176.47 500.64 194.79 500.64 194.9 514.48 176.58 514.48 176.47"
          />
          <polygon
            class="cls-144"
            points="500.64 194.9 500.54 194.84 500.54 194.73 500.64 194.79 500.64 194.9"
          />
          <polygon
            class="cls-144"
            points="516.81 177.82 502.98 196.14 503.08 196.2 516.92 177.88 516.81 177.82"
          />
          <polygon
            class="cls-144"
            points="516.92 177.88 503.08 196.2 503.08 196.31 516.92 177.99 516.92 177.88"
          />
          <polygon
            class="cls-144"
            points="503.08 196.31 502.98 196.25 502.98 196.14 503.08 196.2 503.08 196.31"
          />
          <polygon
            class="cls-144"
            points="519.25 179.23 505.42 197.55 505.52 197.6 519.36 179.29 519.25 179.23"
          />
          <polygon
            class="cls-144"
            points="519.36 179.29 505.52 197.6 505.52 197.72 519.36 179.4 519.36 179.29"
          />
          <polygon
            class="cls-144"
            points="505.52 197.72 505.42 197.66 505.42 197.55 505.52 197.6 505.52 197.72"
          />
          <polygon
            class="cls-144"
            points="521.7 180.64 507.86 198.96 507.97 199.01 521.8 180.7 521.7 180.64"
          />
          <polygon
            class="cls-144"
            points="521.8 180.7 507.97 199.01 507.97 199.13 521.8 180.81 521.8 180.7"
          />
          <polygon
            class="cls-144"
            points="507.97 199.13 507.86 199.07 507.86 198.96 507.97 199.01 507.97 199.13"
          />
          <polygon
            class="cls-144"
            points="524.14 182.05 510.31 200.37 510.41 200.42 524.24 182.11 524.14 182.05"
          />
          <polygon
            class="cls-144"
            points="524.24 182.11 510.41 200.42 510.41 200.53 524.24 182.22 524.24 182.11"
          />
          <polygon
            class="cls-144"
            points="510.41 200.53 510.31 200.48 510.31 200.36 510.41 200.42 510.41 200.53"
          />
          <polygon
            class="cls-144"
            points="526.58 183.46 512.75 201.77 512.85 201.83 526.68 183.51 526.58 183.46"
          />
          <polygon
            class="cls-144"
            points="526.68 183.51 512.85 201.83 512.85 201.94 526.68 183.63 526.68 183.51"
          />
          <polygon
            class="cls-144"
            points="512.85 201.94 512.75 201.88 512.75 201.77 512.85 201.83 512.85 201.94"
          />
          <polygon
            class="cls-3"
            points="492.51 163.9 478.68 182.22 478.73 182.25 492.57 163.93 492.51 163.9"
          />
          <polygon
            class="cls-3"
            points="494.95 165.31 481.12 183.63 481.18 183.66 495.01 165.34 494.95 165.31"
          />
          <polygon
            class="cls-149"
            points="497.39 166.72 483.56 185.03 483.62 185.07 497.45 166.75 497.39 166.72"
          />
          <polygon
            class="cls-149"
            points="499.83 168.13 486 186.44 486.06 186.48 499.89 168.16 499.83 168.13"
          />
          <polygon
            class="cls-149"
            points="502.27 169.53 488.44 187.85 488.5 187.89 502.33 169.57 502.27 169.53"
          />
          <polygon
            class="cls-149"
            points="504.71 170.94 490.88 189.26 490.94 189.29 504.77 170.98 504.71 170.94"
          />
          <polygon
            class="cls-3"
            points="509.59 173.76 495.76 192.08 495.82 192.11 509.65 173.8 509.59 173.76"
          />
          <polygon
            class="cls-3"
            points="512.03 175.17 498.2 193.49 498.26 193.52 512.09 175.21 512.03 175.17"
          />
          <polygon
            class="cls-3"
            points="514.48 176.58 500.64 194.9 500.7 194.93 514.53 176.61 514.48 176.58"
          />
          <polygon
            class="cls-149"
            points="516.92 177.99 503.08 196.31 503.14 196.34 516.97 178.02 516.92 177.99"
          />
          <polygon
            class="cls-149"
            points="519.36 179.4 505.52 197.72 505.58 197.75 519.41 179.43 519.36 179.4"
          />
          <polygon
            class="cls-149"
            points="521.8 180.81 507.97 199.13 508.02 199.16 521.86 180.84 521.8 180.81"
          />
          <polygon
            class="cls-149"
            points="524.24 182.22 510.41 200.53 510.46 200.57 524.3 182.25 524.24 182.22"
          />
          <polygon
            class="cls-149"
            points="526.68 183.63 512.85 201.94 512.91 201.98 526.74 183.66 526.68 183.63"
          />
          <polygon
            class="cls-3"
            points="508.8 174.66 508.24 174.34 507.4 174.34 501.7 175.75 505.77 178.09 506.62 178.09 507.91 177.78 514.56 177.78 514.56 177.78 514.7 177.78 514.77 177.82 515.62 177.82 515.62 177.82 516.12 177.53 511.14 174.66 508.8 174.66"
          />
          <polygon
            class="cls-138"
            points="504.14 171.98 508.21 174.33 505.77 177.62 501.7 175.27 504.14 171.98"
          />
          <polygon
            class="cls-150"
            points="501.7 175.27 501.7 175.75 505.77 178.1 505.77 177.62 501.7 175.27"
          />
          <polygon
            class="cls-144"
            points="508.21 174.33 505.77 177.62 505.77 178.1 508.21 174.81 508.21 174.33"
          />
          <polygon
            class="cls-151"
            points="502.25 170.56 504.25 169.4 507.66 171.37 505.67 172.53 502.25 170.56"
          />
          <polygon
            class="cls-131"
            points="505.67 177.12 502.26 175.15 502.25 170.56 505.67 172.53 505.67 177.12"
          />
          <polygon
            class="cls-137"
            points="507.66 174.44 505.67 177.12 505.67 172.53 507.66 171.37 507.66 174.44"
          />
          <polygon
            class="cls-144"
            points="505.67 172.08 507.73 170.88 507.73 171.37 505.67 172.57 505.67 172.08"
          />
          <polygon
            class="cls-138"
            points="502.18 170.07 504.25 168.86 507.73 170.88 505.67 172.08 502.18 170.07"
          />
          <polygon
            class="cls-152"
            points="503.31 170.06 504.25 169.51 506.61 170.88 505.67 171.43 503.31 170.06"
          />
          <polygon
            class="cls-141"
            points="502.18 170.07 502.18 170.56 505.67 172.57 505.67 172.08 502.18 170.07"
          />
          <g class="cls-153">
            <polygon
              class="cls-138"
              points="505.67 172.57 505.67 172.65 507.66 171.49 507.66 171.41 505.67 172.57"
            />
            <polygon
              class="cls-138"
              points="502.25 170.68 505.67 172.65 505.67 172.57 502.25 170.6 502.25 170.68"
            />
          </g>
          <polygon
            class="cls-3"
            points="503.7 170.01 503.2 170.01 503.1 170.07 503.2 170.13 503.71 170.13 505.93 171.41 505.67 171.41 505.57 171.47 505.67 171.52 506.14 171.52 506.38 171.66 507.73 170.88 504.99 169.29 503.7 170.01"
          />
          <polygon
            class="cls-141"
            points="503.2 170.12 503.1 170.07 503.1 169.71 503.2 169.77 503.2 170.12"
          />
          <polygon
            class="cls-144"
            points="503.31 170.07 503.2 170.12 503.2 169.77 503.31 169.71 503.31 170.07"
          />
          <polygon
            class="cls-141"
            points="505.67 171.53 505.57 171.47 505.57 171.11 505.67 171.17 505.67 171.53"
          />
          <polygon
            class="cls-144"
            points="505.77 171.47 505.67 171.53 505.67 171.17 505.77 171.11 505.77 171.47"
          />
          <polygon
            class="cls-141"
            points="506.71 170.94 506.61 170.88 506.61 170.53 506.71 170.59 506.71 170.94"
          />
          <polygon
            class="cls-144"
            points="506.81 170.88 506.71 170.94 506.71 170.59 506.81 170.53 506.81 170.88"
          />
          <polygon
            class="cls-144"
            points="505.67 170.76 507.73 169.55 507.73 170.04 505.67 171.25 505.67 170.76"
          />
          <polygon
            class="cls-141"
            points="502.18 168.75 502.18 169.24 505.67 171.25 505.67 170.76 502.18 168.75"
          />
          <polygon
            class="cls-144"
            points="507.73 169.55 504.25 167.54 504.96 168.52 507.73 169.55"
          />
          <polygon
            class="cls-141"
            points="504.25 167.54 504.25 167.54 502.18 168.75 504.96 168.52 504.25 167.54"
          />
          <polygon
            class="cls-138"
            points="502.18 168.75 502.18 168.75 505.67 170.76 505.67 170.76 504.96 168.52 502.18 168.75"
          />
          <polygon
            class="cls-141"
            points="507.73 169.55 504.96 168.52 505.67 170.76 507.73 169.56 507.73 169.55"
          />
          <polygon
            class="cls-144"
            points="503.61 176.74 493.22 190.5 493.32 190.56 503.71 176.8 503.61 176.74"
          />
          <polygon
            class="cls-144"
            points="503.71 176.8 493.32 190.56 493.32 190.67 503.71 176.91 503.71 176.8"
          />
          <polygon
            class="cls-144"
            points="493.32 190.67 493.22 190.61 493.22 190.5 493.32 190.56 493.32 190.67"
          />
          <polygon
            class="cls-149"
            points="503.71 176.91 493.32 190.67 493.38 190.7 503.77 176.95 503.71 176.91"
          />
          <ellipse
            class="cls-154"
            cx="524.14"
            cy="223.51"
            rx="3.53"
            ry="1.89"
          />
          <path
            class="cls-155"
            d="M524.14,223.73h0a.35.35,0,0,1-.35-.34v-4.85a.35.35,0,0,1,.35-.35h0a.35.35,0,0,1,.34.35v4.85A.34.34,0,0,1,524.14,223.73Z"
          />
          <path
            class="cls-103"
            d="M527.25,213.83a3.43,3.43,0,0,0,0-.56,4.08,4.08,0,0,0-.71-2.32,3.42,3.42,0,0,0,.1-.79,2.57,2.57,0,1,0-5.08,0,3.42,3.42,0,0,0,.09.79,4.08,4.08,0,0,0-.71,2.32,5.09,5.09,0,0,0,0,.56,3.39,3.39,0,0,0-1.25,2.57c0,2,2,3.67,4.37,3.67s4.37-1.64,4.37-3.67A3.37,3.37,0,0,0,527.25,213.83Z"
          />
          <path
            class="cls-156"
            d="M527.25,213.83a3.43,3.43,0,0,0,0-.56,4.08,4.08,0,0,0-.71-2.32,3.42,3.42,0,0,0,.1-.79,3,3,0,0,0-1.57-2.73c-1,6.07,1.85,8.83-2.39,12.44a5,5,0,0,0,1.42.2c2.41,0,4.37-1.64,4.37-3.67A3.37,3.37,0,0,0,527.25,213.83Z"
          />
          <path
            class="cls-4"
            d="M358.55,170.84c-6.9,2.37-23.43,8.45-31.8,11.54a8.18,8.18,0,0,0-5.33,7.22l-1.27,23.16a8.17,8.17,0,0,0,6.53,8.45l49.4,10.09a8.19,8.19,0,0,0,5.79-1l27.82-16.42a26.45,26.45,0,0,0,8.22-8.35c1.35-2.18,2.28-3.7,2.46-5.26,1.4-12.61-46.76-25.51-55.92-29.21C364,170.91,362.4,169.52,358.55,170.84Z"
          />
          <path
            class="cls-157"
            d="M358.55,170.83c-6.9,2.37-23.44,8.45-31.8,11.54a8.17,8.17,0,0,0-5.33,7.22l-1.27,23.16a8.17,8.17,0,0,0,6.53,8.45l49.4,10.09a8.19,8.19,0,0,0,5.79-1l27.82-16.42a26.56,26.56,0,0,0,8.22-8.35c1.35-2.19,2.28-3.7,2.46-5.27,1.39-12.61-46.77-25.5-55.92-29.2C364,170.89,362.39,169.51,358.55,170.83Z"
          />
          <polygon
            class="cls-137"
            points="332.27 191.19 332.27 179.03 328.76 181.05 328.76 180.04 342.8 160.79 356.84 163.83 356.84 164.84 353.33 166.87 353.33 179.03 332.27 191.19"
          />
          <polygon
            class="cls-137"
            points="334.03 192.2 334.03 180.04 330.52 182.07 330.52 181.05 344.56 161.81 358.6 164.84 358.6 165.86 355.09 167.88 355.08 180.04 334.03 192.2"
          />
          <polygon
            class="cls-131"
            points="358.44 164.84 344.4 161.8 342.65 160.79 356.69 163.83 358.44 164.84"
          />
          <polygon
            class="cls-131"
            points="344.56 161.8 342.81 160.79 328.76 180.04 330.52 181.06 344.56 161.8"
          />
          <polygon
            class="cls-158"
            points="349.82 205.44 349.82 205.54 350.92 206.18 351.01 206.12 349.82 205.44"
          />
          <polygon
            class="cls-131"
            points="332.28 180.05 332.28 190.17 343.68 196.76 343.68 185.61 332.28 180.05"
          />
          <polygon
            class="cls-136"
            points="340.17 198.78 328.77 192.2 332.28 190.17 343.68 196.76 340.17 198.78"
          />
          <polygon
            class="cls-131"
            points="328.77 192.2 328.77 193.21 340.17 199.79 340.17 198.78 328.77 192.2"
          />
          <path class="cls-139" d="M334.31,188V183.4l4,2.29v4.58Z" />
          <polygon
            class="cls-140"
            points="334.23 183.29 334.23 188.04 338.35 190.42 338.35 185.66 334.23 183.29"
          />
          <path
            class="cls-141"
            d="M338.42,185.61,334,183.08v5.06l4.39,2.54Zm-4.25,2.46v-4.76l4.11,2.38v4.75Z"
          />
          <polygon
            class="cls-142"
            points="334.17 183.31 334.17 188.07 338.28 190.44 338.28 185.69 334.17 183.31"
          />
          <polygon
            class="cls-144"
            points="334.31 187.98 334.17 188.07 334.17 183.31 334.31 183.4 334.31 187.98"
          />
          <polygon
            class="cls-144"
            points="334.17 188.07 334.31 187.98 338.28 190.28 338.28 190.44 334.17 188.07"
          />
          <polygon
            class="cls-3"
            points="334.46 188.07 334.17 188.07 334.31 187.98 334.31 183.4 334.46 183.48 334.46 188.07"
          />
          <polygon
            class="cls-133"
            points="342.81 188.15 339.3 186.12 339.3 194.22 342.81 196.25 342.81 188.15"
          />
          <polygon
            class="cls-134"
            points="342.7 188.21 339.4 186.31 339.4 194.28 339.46 194.32 339.46 194.28 339.46 186.4 342.64 188.24 342.64 196.13 342.64 196.16 342.7 196.19 342.7 188.21"
          />
          <polygon
            class="cls-3"
            points="341.49 194.48 340.61 193.97 340.61 187.89 341.49 188.4 341.49 194.48"
          />
          <polygon
            class="cls-159"
            points="341.49 194.48 340.61 193.97 340.61 187.89 341.49 188.4 341.49 194.48"
          />
          <polygon
            class="cls-160"
            points="340.7 187.94 340.61 187.89 340.61 193.97 340.7 193.92 340.7 187.94"
          />
          <polygon
            class="cls-146"
            points="340.7 193.92 340.61 193.97 341.49 194.48 341.49 194.38 340.7 193.92"
          />
          <polygon
            class="cls-3"
            points="340.7 187.94 340.7 193.92 340.61 193.97 340.79 193.97 340.79 188.08 341.49 188.48 341.49 188.4 340.7 187.94"
          />
          <polygon
            class="cls-3"
            points="339.75 190.84 339.73 190.79 339.65 190.75 339.65 190.79 339.69 190.85 339.69 191.92 339.65 191.9 339.65 191.94 339.69 192 339.73 192.07 339.75 192.09 339.75 190.84"
          />
          <polygon
            class="cls-136"
            points="339.73 191.94 339.66 191.9 339.62 191.92 339.69 191.96 339.73 191.94"
          />
          <polygon
            class="cls-131"
            points="339.65 190.83 339.58 190.79 339.58 191.99 339.65 192.03 339.65 190.83"
          />
          <polygon
            class="cls-136"
            points="339.66 190.75 339.73 190.79 339.69 190.81 339.65 190.83 339.58 190.79 339.62 190.77 339.66 190.75"
          />
          <polygon
            class="cls-137"
            points="339.65 190.83 339.65 192.03 339.69 192.01 339.73 191.99 339.73 191.94 339.69 191.96 339.69 190.85 339.73 190.83 339.73 190.79 339.69 190.81 339.65 190.83"
          />
          <polygon
            class="cls-3"
            points="343.61 184.3 332.27 181.06 334.91 187.64 334.91 187.64 334.91 191.69 329.64 191.69 328.77 192.2 328.77 192.2 328.77 192.2 329.64 192.7 336.67 192.7 336.66 188.65 341.08 191.2 343.61 184.3"
          />
          <polygon
            class="cls-131"
            points="331.4 192.7 331.4 193.21 338.86 197.51 339.3 197.26 331.4 192.7"
          />
          <polygon
            class="cls-137"
            points="330.52 194.22 331.4 193.72 331.4 192.7 330.52 193.21 330.52 194.22"
          />
          <polygon
            class="cls-136"
            points="331.4 193.21 330.96 193.46 338.42 197.77 338.86 197.51 331.4 193.21"
          />
          <polygon
            class="cls-136"
            points="330.96 193.97 330.52 194.22 338.42 198.78 338.42 198.28 330.96 193.97"
          />
          <polygon
            class="cls-131"
            points="330.96 193.46 330.96 193.97 338.42 198.28 338.42 197.77 330.96 193.46"
          />
          <polygon
            class="cls-3"
            points="330.52 194.22 331.4 194.22 331.4 193.72 331.84 193.46 331.4 192.7 331.4 193.21 330.96 193.46 330.96 193.97 330.52 194.22"
          />
          <polygon
            class="cls-131"
            points="329.64 181.56 328.77 181.05 328.77 192.2 329.64 192.7 329.64 181.56"
          />
          <polygon
            class="cls-137"
            points="330.52 181.05 329.64 181.56 329.64 192.7 330.52 192.2 330.52 181.05"
          />
          <polygon
            class="cls-138"
            points="330.52 182.07 351.58 194.22 365.62 174.97 344.56 162.82 330.52 182.07"
          />
          <polygon
            class="cls-141"
            points="344.56 162.82 365.62 174.97 379.66 178.01 358.6 165.86 344.56 162.82"
          />
          <polygon
            class="cls-131"
            points="340.17 189.66 328.77 183.08 328.76 180.04 330.52 181.05 330.52 182.07 340.17 187.64 340.17 189.66"
          />
          <polygon
            class="cls-137"
            points="343.68 191.65 341.93 189.66 341.93 200.81 343.68 199.8 343.68 191.65"
          />
          <polygon
            class="cls-161"
            points="350.99 204.58 342.81 199.85 342.81 200.3 350.99 205.03 350.99 204.58"
          />
          <polygon
            class="cls-162"
            points="351.06 204.54 342.88 199.81 342.81 199.85 350.99 204.58 351.06 204.54"
          />
          <polygon
            class="cls-163"
            points="351.1 204.51 342.92 199.79 342.81 199.85 342.88 199.85 351.03 204.56 351.1 204.51"
          />
          <polygon
            class="cls-161"
            points="350.99 204 342.81 199.28 342.81 199.73 350.99 204.46 350.99 204"
          />
          <polygon
            class="cls-162"
            points="351.06 203.96 342.88 199.24 342.81 199.28 350.99 204 351.06 203.96"
          />
          <polygon
            class="cls-163"
            points="351.1 203.94 342.92 199.21 342.81 199.28 342.88 199.28 351.03 203.98 351.1 203.94"
          />
          <polygon
            class="cls-161"
            points="350.99 203.43 342.81 198.7 342.81 199.15 350.99 203.88 350.99 203.43"
          />
          <polygon
            class="cls-162"
            points="351.06 203.39 342.88 198.66 342.81 198.7 350.99 203.43 351.06 203.39"
          />
          <polygon
            class="cls-163"
            points="351.1 203.37 342.92 198.64 342.81 198.7 342.88 198.7 351.03 203.41 351.1 203.37"
          />
          <polygon
            class="cls-161"
            points="350.99 202.86 342.81 198.13 342.81 198.58 350.99 203.31 350.99 202.86"
          />
          <polygon
            class="cls-162"
            points="351.06 202.81 342.88 198.09 342.81 198.13 350.99 202.86 351.06 202.81"
          />
          <polygon
            class="cls-163"
            points="351.1 202.79 342.92 198.06 342.81 198.13 342.88 198.13 351.03 202.83 351.1 202.79"
          />
          <polygon
            class="cls-161"
            points="350.99 202.28 342.81 197.56 342.81 198 350.99 202.73 350.99 202.28"
          />
          <polygon
            class="cls-162"
            points="351.06 202.24 342.88 197.51 342.81 197.56 350.99 202.28 351.06 202.24"
          />
          <polygon
            class="cls-163"
            points="351.1 202.22 342.92 197.49 342.81 197.56 342.88 197.56 351.03 202.26 351.1 202.22"
          />
          <polygon
            class="cls-161"
            points="350.99 201.71 342.81 196.98 342.81 197.43 350.99 202.16 350.99 201.71"
          />
          <polygon
            class="cls-162"
            points="351.06 201.67 342.88 196.94 342.81 196.98 350.99 201.71 351.06 201.67"
          />
          <polygon
            class="cls-163"
            points="351.1 201.65 342.92 196.92 342.81 196.98 342.88 196.98 351.03 201.69 351.1 201.65"
          />
          <polygon
            class="cls-161"
            points="350.99 201.13 342.81 196.41 342.81 196.86 350.99 201.59 350.99 201.13"
          />
          <polygon
            class="cls-162"
            points="351.06 201.09 342.88 196.37 342.81 196.41 350.99 201.13 351.06 201.09"
          />
          <polygon
            class="cls-163"
            points="351.1 201.07 342.92 196.34 342.81 196.41 342.88 196.41 351.03 201.11 351.1 201.07"
          />
          <polygon
            class="cls-161"
            points="350.99 200.56 342.81 195.83 342.81 196.28 350.99 201.01 350.99 200.56"
          />
          <polygon
            class="cls-162"
            points="351.06 200.52 342.88 195.79 342.81 195.83 350.99 200.56 351.06 200.52"
          />
          <polygon
            class="cls-163"
            points="351.1 200.5 342.92 195.77 342.81 195.83 342.88 195.83 351.03 200.54 351.1 200.5"
          />
          <polygon
            class="cls-161"
            points="350.99 199.99 342.81 195.26 342.81 195.71 350.99 200.44 350.99 199.99"
          />
          <polygon
            class="cls-162"
            points="351.06 199.94 342.88 195.22 342.81 195.26 350.99 199.99 351.06 199.94"
          />
          <polygon
            class="cls-163"
            points="351.1 199.92 342.92 195.2 342.81 195.26 342.88 195.26 351.03 199.97 351.1 199.92"
          />
          <polygon
            class="cls-161"
            points="350.99 199.41 342.81 194.69 342.81 195.14 350.99 199.86 350.99 199.41"
          />
          <polygon
            class="cls-162"
            points="351.06 199.37 342.88 194.65 342.81 194.69 350.99 199.41 351.06 199.37"
          />
          <polygon
            class="cls-163"
            points="351.1 199.35 342.92 194.62 342.81 194.69 342.88 194.69 351.03 199.39 351.1 199.35"
          />
          <polygon
            class="cls-161"
            points="350.99 198.84 342.81 194.11 342.81 194.56 350.99 199.29 350.99 198.84"
          />
          <polygon
            class="cls-162"
            points="351.06 198.8 342.88 194.07 342.81 194.11 350.99 198.84 351.06 198.8"
          />
          <polygon
            class="cls-163"
            points="351.1 198.78 342.92 194.05 342.81 194.11 342.88 194.11 351.03 198.82 351.1 198.78"
          />
          <polygon
            class="cls-161"
            points="350.99 198.27 342.81 193.54 342.81 193.99 350.99 198.72 350.99 198.27"
          />
          <polygon
            class="cls-162"
            points="351.06 198.22 342.88 193.5 342.81 193.54 350.99 198.27 351.06 198.22"
          />
          <polygon
            class="cls-163"
            points="351.1 198.2 342.92 193.47 342.81 193.54 342.88 193.54 351.03 198.24 351.1 198.2"
          />
          <polygon
            class="cls-161"
            points="350.99 197.69 342.81 192.97 342.81 193.41 350.99 198.14 350.99 197.69"
          />
          <polygon
            class="cls-162"
            points="351.06 197.65 342.88 192.92 342.81 192.97 350.99 197.69 351.06 197.65"
          />
          <polygon
            class="cls-163"
            points="351.1 197.63 342.92 192.9 342.81 192.97 342.88 192.97 351.03 197.67 351.1 197.63"
          />
          <polygon
            class="cls-161"
            points="350.99 197.12 342.81 192.39 342.81 192.84 350.99 197.57 350.99 197.12"
          />
          <polygon
            class="cls-162"
            points="351.06 197.08 342.88 192.35 342.81 192.39 350.99 197.12 351.06 197.08"
          />
          <polygon
            class="cls-163"
            points="351.1 197.05 342.92 192.33 342.81 192.39 342.88 192.39 351.03 197.09 351.1 197.05"
          />
          <polygon
            class="cls-161"
            points="350.99 196.54 342.81 191.82 342.81 192.27 350.99 197 350.99 196.54"
          />
          <polygon
            class="cls-162"
            points="351.06 196.5 342.88 191.78 342.81 191.82 350.99 196.54 351.06 196.5"
          />
          <polygon
            class="cls-163"
            points="351.1 196.48 342.92 191.75 342.81 191.82 342.88 191.82 351.03 196.52 351.1 196.48"
          />
          <polygon
            class="cls-161"
            points="350.99 195.97 342.81 191.24 342.81 191.69 350.99 196.42 350.99 195.97"
          />
          <polygon
            class="cls-162"
            points="351.06 195.93 342.88 191.2 342.81 191.24 350.99 195.97 351.06 195.93"
          />
          <polygon
            class="cls-163"
            points="351.1 195.91 342.92 191.18 342.81 191.24 342.88 191.24 351.03 195.95 351.1 195.91"
          />
          <polygon
            class="cls-131"
            points="351.58 194.23 340.17 187.64 340.17 199.79 341.93 200.81 341.93 192.71 349.83 197.26 349.83 205.37 351.58 206.38 351.58 194.23"
          />
          <polygon
            class="cls-138"
            points="351.58 195.24 330.52 183.08 330.52 182.07 351.58 194.22 351.58 195.24"
          />
          <polygon
            class="cls-131"
            points="341.93 213.98 341.93 209.93 340.18 208.91 340.17 212.97 341.93 213.98"
          />
          <polygon
            class="cls-3"
            points="356.84 202.33 362.99 205.84 362.99 204.86 355.97 200.81 355.97 207.9 356.85 208.41 356.84 202.33"
          />
          <polygon
            class="cls-3"
            points="343.67 194.74 349.82 198.25 349.82 197.26 342.81 193.21 342.81 200.3 341.93 200.81 343.68 200.81 343.67 194.74"
          />
          <polygon
            class="cls-3"
            points="345.44 163.32 344.56 162.82 330.52 182.07 332.68 180.82 345.44 163.32"
          />
          <polygon
            class="cls-3"
            points="359.48 166.36 345.44 163.32 344.56 162.82 358.6 165.86 359.48 166.36"
          />
          <polygon
            class="cls-144"
            points="346.21 163.65 332.18 182.9 332.29 182.97 346.32 163.72 346.21 163.65"
          />
          <polygon
            class="cls-144"
            points="346.32 163.72 332.29 182.97 332.29 183.09 346.32 163.84 346.32 163.72"
          />
          <polygon
            class="cls-144"
            points="332.29 183.09 332.18 183.02 332.18 182.9 332.29 182.97 332.29 183.09"
          />
          <polygon
            class="cls-164"
            points="346.32 163.84 332.29 183.09 332.35 183.12 346.39 163.87 346.32 163.84"
          />
          <polygon
            class="cls-144"
            points="347.98 164.67 333.94 183.92 334.05 183.98 348.09 164.74 347.98 164.67"
          />
          <polygon
            class="cls-144"
            points="348.09 164.74 334.05 183.98 334.05 184.1 348.09 164.85 348.09 164.74"
          />
          <polygon
            class="cls-144"
            points="334.05 184.1 333.94 184.04 333.94 183.92 334.05 183.98 334.05 184.1"
          />
          <polygon
            class="cls-164"
            points="348.09 164.85 334.05 184.1 334.11 184.14 348.15 164.89 348.09 164.85"
          />
          <polygon
            class="cls-144"
            points="349.74 165.69 335.7 184.94 335.81 185 349.85 165.75 349.74 165.69"
          />
          <polygon
            class="cls-144"
            points="349.85 165.75 335.81 185 335.81 185.12 349.85 165.87 349.85 165.75"
          />
          <polygon
            class="cls-144"
            points="335.81 185.12 335.7 185.06 335.7 184.94 335.81 185 335.81 185.12"
          />
          <polygon
            class="cls-164"
            points="349.85 165.87 335.81 185.12 335.88 185.16 349.92 165.91 349.85 165.87"
          />
          <polygon
            class="cls-144"
            points="351.51 166.71 337.47 185.96 337.58 186.02 351.62 166.77 351.51 166.71"
          />
          <polygon
            class="cls-144"
            points="351.62 166.77 337.58 186.02 337.58 186.14 351.62 166.89 351.62 166.77"
          />
          <polygon
            class="cls-144"
            points="337.58 186.14 337.47 186.07 337.47 185.95 337.58 186.02 337.58 186.14"
          />
          <polygon
            class="cls-164"
            points="351.62 166.89 337.58 186.14 337.64 186.18 351.68 166.93 351.62 166.89"
          />
          <polygon
            class="cls-144"
            points="353.27 167.73 339.23 186.97 339.34 187.04 353.38 167.79 353.27 167.73"
          />
          <polygon
            class="cls-144"
            points="353.38 167.79 339.34 187.04 339.34 187.16 353.38 167.91 353.38 167.79"
          />
          <polygon
            class="cls-144"
            points="339.34 187.16 339.23 187.09 339.23 186.97 339.34 187.04 339.34 187.16"
          />
          <polygon
            class="cls-164"
            points="353.38 167.91 339.34 187.16 339.4 187.2 353.44 167.95 353.38 167.91"
          />
          <polygon
            class="cls-144"
            points="355.04 168.75 341 187.99 341.11 188.06 355.14 168.81 355.04 168.75"
          />
          <polygon
            class="cls-144"
            points="355.14 168.81 341.11 188.06 341.11 188.18 355.14 168.93 355.14 168.81"
          />
          <polygon
            class="cls-144"
            points="341.11 188.18 341 188.11 341 187.99 341.11 188.06 341.11 188.18"
          />
          <polygon
            class="cls-164"
            points="355.14 168.93 341.11 188.18 341.17 188.21 355.21 168.97 355.14 168.93"
          />
          <polygon
            class="cls-144"
            points="356.8 169.76 342.76 189.01 342.87 189.08 356.91 169.83 356.8 169.76"
          />
          <polygon
            class="cls-144"
            points="356.91 169.83 342.87 189.08 342.87 189.2 356.91 169.95 356.91 169.83"
          />
          <polygon
            class="cls-144"
            points="342.87 189.2 342.76 189.13 342.76 189.01 342.87 189.08 342.87 189.2"
          />
          <polygon
            class="cls-164"
            points="356.91 169.95 342.87 189.2 342.93 189.23 356.97 169.98 356.91 169.95"
          />
          <polygon
            class="cls-144"
            points="358.56 170.78 344.52 190.03 344.63 190.09 358.67 170.85 358.56 170.78"
          />
          <polygon
            class="cls-144"
            points="358.67 170.85 344.63 190.09 344.63 190.22 358.67 170.97 358.67 170.85"
          />
          <polygon
            class="cls-144"
            points="344.63 190.22 344.52 190.15 344.52 190.03 344.63 190.09 344.63 190.22"
          />
          <polygon
            class="cls-164"
            points="358.67 170.97 344.63 190.22 344.7 190.25 358.74 171 358.67 170.97"
          />
          <polygon
            class="cls-144"
            points="360.33 171.8 346.29 191.05 346.4 191.11 360.44 171.87 360.33 171.8"
          />
          <polygon
            class="cls-144"
            points="360.44 171.87 346.4 191.11 346.4 191.23 360.44 171.99 360.44 171.87"
          />
          <polygon
            class="cls-144"
            points="346.4 191.23 346.29 191.17 346.29 191.05 346.4 191.11 346.4 191.23"
          />
          <polygon
            class="cls-164"
            points="360.44 171.99 346.4 191.23 346.46 191.27 360.5 172.02 360.44 171.99"
          />
          <polygon
            class="cls-144"
            points="362.09 172.82 348.05 192.07 348.16 192.13 362.2 172.88 362.09 172.82"
          />
          <polygon
            class="cls-144"
            points="362.2 172.88 348.16 192.13 348.16 192.25 362.2 173 362.2 172.88"
          />
          <polygon
            class="cls-144"
            points="348.16 192.25 348.05 192.19 348.05 192.07 348.16 192.13 348.16 192.25"
          />
          <polygon
            class="cls-164"
            points="362.2 173 348.16 192.25 348.22 192.29 362.26 173.04 362.2 173"
          />
          <polygon
            class="cls-144"
            points="363.86 173.84 349.82 193.09 349.93 193.15 363.97 173.9 363.86 173.84"
          />
          <polygon
            class="cls-144"
            points="363.97 173.9 349.93 193.15 349.93 193.27 363.97 174.02 363.97 173.9"
          />
          <polygon
            class="cls-144"
            points="349.93 193.27 349.82 193.21 349.82 193.09 349.93 193.15 349.93 193.27"
          />
          <polygon
            class="cls-164"
            points="363.97 174.02 349.93 193.27 349.99 193.31 364.03 174.06 363.97 174.02"
          />
          <polygon
            class="cls-144"
            points="360.24 166.69 346.21 163.65 346.32 163.72 360.36 166.76 360.24 166.69"
          />
          <polygon
            class="cls-144"
            points="360.36 166.76 346.32 163.72 346.32 163.84 360.36 166.88 360.36 166.76"
          />
          <polygon
            class="cls-164"
            points="360.36 166.88 346.32 163.84 346.39 163.87 360.42 166.91 360.36 166.88"
          />
          <polygon
            class="cls-144"
            points="362.01 167.71 347.98 164.67 348.09 164.74 362.12 167.78 362.01 167.71"
          />
          <polygon
            class="cls-144"
            points="362.12 167.78 348.09 164.74 348.09 164.85 362.12 167.9 362.12 167.78"
          />
          <polygon
            class="cls-164"
            points="362.12 167.89 348.09 164.85 348.15 164.89 362.19 167.93 362.12 167.89"
          />
          <polygon
            class="cls-144"
            points="363.77 168.73 349.74 165.69 349.85 165.75 363.89 168.79 363.77 168.73"
          />
          <polygon
            class="cls-144"
            points="363.89 168.79 349.85 165.75 349.85 165.87 363.89 168.91 363.89 168.79"
          />
          <polygon
            class="cls-164"
            points="363.89 168.91 349.85 165.87 349.92 165.91 363.95 168.95 363.89 168.91"
          />
          <polygon
            class="cls-144"
            points="365.54 169.75 351.51 166.71 351.62 166.77 365.65 169.81 365.54 169.75"
          />
          <polygon
            class="cls-144"
            points="365.65 169.81 351.62 166.77 351.62 166.89 365.65 169.93 365.65 169.81"
          />
          <polygon
            class="cls-164"
            points="365.65 169.93 351.62 166.89 351.68 166.93 365.71 169.97 365.65 169.93"
          />
          <polygon
            class="cls-144"
            points="367.3 170.77 353.27 167.73 353.38 167.79 367.42 170.83 367.3 170.77"
          />
          <polygon
            class="cls-144"
            points="367.42 170.83 353.38 167.79 353.38 167.91 367.42 170.95 367.42 170.83"
          />
          <polygon
            class="cls-164"
            points="367.41 170.95 353.38 167.91 353.44 167.94 367.48 170.99 367.41 170.95"
          />
          <polygon
            class="cls-144"
            points="369.06 171.79 355.04 168.75 355.14 168.81 369.18 171.85 369.06 171.79"
          />
          <polygon
            class="cls-144"
            points="369.18 171.85 355.14 168.81 355.14 168.93 369.18 171.97 369.18 171.85"
          />
          <polygon
            class="cls-164"
            points="369.18 171.97 355.14 168.93 355.21 168.96 369.24 172 369.18 171.97"
          />
          <polygon
            class="cls-144"
            points="370.83 172.81 356.8 169.76 356.91 169.83 370.94 172.87 370.83 172.81"
          />
          <polygon
            class="cls-144"
            points="370.94 172.87 356.91 169.83 356.91 169.95 370.94 172.99 370.94 172.87"
          />
          <polygon
            class="cls-164"
            points="370.94 172.99 356.91 169.95 356.97 169.98 371.01 173.02 370.94 172.99"
          />
          <polygon
            class="cls-144"
            points="372.59 173.82 358.56 170.78 358.67 170.85 372.71 173.89 372.59 173.82"
          />
          <polygon
            class="cls-144"
            points="372.71 173.89 358.67 170.85 358.67 170.97 372.71 174.01 372.71 173.89"
          />
          <polygon
            class="cls-164"
            points="372.71 174.01 358.67 170.97 358.74 171 372.77 174.04 372.71 174.01"
          />
          <polygon
            class="cls-144"
            points="374.36 174.84 360.33 171.8 360.44 171.87 374.47 174.91 374.36 174.84"
          />
          <polygon
            class="cls-144"
            points="374.47 174.91 360.44 171.87 360.44 171.99 374.47 175.03 374.47 174.91"
          />
          <polygon
            class="cls-164"
            points="374.47 175.03 360.44 171.98 360.5 172.02 374.53 175.06 374.47 175.03"
          />
          <polygon
            class="cls-144"
            points="376.12 175.86 362.09 172.82 362.2 172.88 376.24 175.92 376.12 175.86"
          />
          <polygon
            class="cls-144"
            points="376.24 175.92 362.2 172.88 362.2 173 376.24 176.04 376.24 175.92"
          />
          <polygon
            class="cls-164"
            points="376.24 176.04 362.2 173 362.26 173.04 376.3 176.08 376.24 176.04"
          />
          <polygon
            class="cls-144"
            points="377.89 176.88 363.86 173.84 363.97 173.9 378 176.94 377.89 176.88"
          />
          <polygon
            class="cls-144"
            points="378 176.94 363.97 173.9 363.97 174.02 378 177.06 378 176.94"
          />
          <polygon
            class="cls-164"
            points="378 177.06 363.97 174.02 364.03 174.06 378.06 177.1 378 177.06"
          />
          <polygon
            class="cls-138"
            points="361.89 171.79 361.89 171.88 363.7 172.93 363.7 172.83 361.89 171.79"
          />
          <polygon
            class="cls-144"
            points="363.7 172.83 363.7 172.93 366.63 173.42 366.63 173.32 363.7 172.83"
          />
          <polygon
            class="cls-141"
            points="366.63 173.32 363.7 172.83 361.89 171.79 364.87 172.31 366.63 173.32"
          />
          <polygon
            class="cls-165"
            points="363.72 172.78 362.19 171.89 364.85 172.36 366.34 173.22 363.72 172.78"
          />
          <polygon
            class="cls-151"
            points="362.19 170.6 364.8 169.05 366.33 169.93 363.72 171.48 362.19 170.6"
          />
          <polygon
            class="cls-131"
            points="363.72 172.78 362.19 171.89 362.19 170.6 363.72 171.48 363.72 172.78"
          />
          <polygon
            class="cls-137"
            points="366.34 173.22 363.72 172.78 363.72 171.48 366.33 169.93 366.34 173.22"
          />
          <polygon
            class="cls-144"
            points="363.72 171.16 366.38 169.58 366.38 169.93 363.72 171.51 363.72 171.16"
          />
          <polygon
            class="cls-138"
            points="362.13 170.25 364.8 168.66 366.38 169.58 363.72 171.16 362.13 170.25"
          />
          <polygon
            class="cls-152"
            points="362.94 170.24 364.8 169.13 365.58 169.58 363.72 170.69 362.94 170.24"
          />
          <polygon
            class="cls-138"
            points="362.13 170.25 362.13 170.6 363.72 171.51 363.72 171.16 362.13 170.25"
          />
          <g class="cls-153">
            <polygon
              class="cls-3"
              points="363.72 171.51 363.72 171.57 366.33 170.02 366.33 169.96 363.72 171.51"
            />
            <polygon
              class="cls-3"
              points="362.19 170.69 363.72 171.57 363.72 171.51 362.19 170.63 362.19 170.69"
            />
          </g>
          <polygon
            class="cls-3"
            points="363.22 170.2 362.87 170.2 362.79 170.24 362.87 170.29 363.23 170.29 363.91 170.68 363.72 170.68 363.64 170.72 363.72 170.76 364.05 170.76 364.23 170.86 366.38 169.58 364.41 168.44 363.22 170.2"
          />
          <polygon
            class="cls-141"
            points="362.87 170.29 362.79 170.24 362.79 169.99 362.87 170.03 362.87 170.29"
          />
          <polygon
            class="cls-144"
            points="362.94 170.24 362.87 170.29 362.87 170.03 362.94 169.99 362.94 170.24"
          />
          <polygon
            class="cls-141"
            points="363.72 170.76 363.64 170.72 363.64 170.46 363.72 170.51 363.72 170.76"
          />
          <polygon
            class="cls-144"
            points="363.79 170.72 363.72 170.76 363.72 170.51 363.79 170.46 363.79 170.72"
          />
          <polygon
            class="cls-141"
            points="365.65 169.62 365.58 169.58 365.58 169.33 365.65 169.37 365.65 169.62"
          />
          <polygon
            class="cls-144"
            points="365.72 169.58 365.65 169.62 365.65 169.37 365.72 169.33 365.72 169.58"
          />
          <polygon
            class="cls-144"
            points="363.72 170.21 366.38 168.63 366.38 168.98 363.72 170.56 363.72 170.21"
          />
          <polygon
            class="cls-141"
            points="362.13 169.3 362.13 169.65 363.72 170.56 363.72 170.21 362.13 169.3"
          />
          <polygon
            class="cls-144"
            points="366.38 168.63 364.8 167.71 364.13 169.13 366.38 168.63"
          />
          <polygon
            class="cls-141"
            points="364.8 167.71 364.8 167.71 362.13 169.3 364.43 168.49 364.8 167.71"
          />
          <polygon
            class="cls-138"
            points="362.13 169.29 363.72 170.21 364.43 168.49 362.13 169.29"
          />
          <polygon
            class="cls-141"
            points="364.43 168.49 363.72 170.21 366.38 168.63 364.43 168.49"
          />
          <path
            class="cls-3"
            d="M407.74,197l-.22.13-12.94-7.47L401.33,206l-25.18,14.53h4.92a1.26,1.26,0,0,0,.63-.16l1.47-.85h0l1.76-1h0l.93-.54h0L406,206.38h0l1.76-1h0l1.65-1h0l4.87-2.81a.48.48,0,0,0,0-.82Zm-26.18,22.54h-1.9l1.76-1h1.82C382.65,218.94,381.91,219.31,381.56,219.55Z"
          />
          <polygon
            class="cls-136"
            points="337.54 212.2 339.29 213.22 351.58 206.12 349.82 205.11 337.54 212.2"
          />
          <polygon
            class="cls-137"
            points="339.29 213.22 337.54 212.2 337.54 212.46 339.3 213.47 339.29 213.22"
          />
          <polygon
            class="cls-137"
            points="351.58 206.12 339.29 213.22 339.3 213.47 351.58 206.38 351.58 206.12"
          />
          <polygon
            class="cls-131"
            points="368.25 199.8 368.25 210.94 379.66 217.53 379.66 206.38 368.25 199.8"
          />
          <polygon
            class="cls-137"
            points="356.85 199.25 355.09 197.28 355.09 208.41 356.84 207.39 356.85 199.25"
          />
          <polygon
            class="cls-161"
            points="364.16 212.18 355.97 207.45 355.97 207.9 364.16 212.63 364.16 212.18"
          />
          <polygon
            class="cls-162"
            points="364.23 212.14 356.04 207.41 355.97 207.45 364.16 212.18 364.23 212.14"
          />
          <polygon
            class="cls-163"
            points="364.27 212.11 356.08 207.39 355.97 207.45 356.05 207.45 364.19 212.16 364.27 212.11"
          />
          <polygon
            class="cls-161"
            points="364.16 211.6 355.97 206.88 355.97 207.33 364.16 212.06 364.16 211.6"
          />
          <polygon
            class="cls-162"
            points="364.23 211.56 356.04 206.84 355.97 206.88 364.16 211.6 364.23 211.56"
          />
          <polygon
            class="cls-163"
            points="364.27 211.54 356.08 206.81 355.97 206.88 356.05 206.88 364.19 211.58 364.27 211.54"
          />
          <polygon
            class="cls-161"
            points="364.16 211.03 355.97 206.3 355.97 206.75 364.16 211.48 364.16 211.03"
          />
          <polygon
            class="cls-162"
            points="364.23 210.99 356.04 206.26 355.97 206.3 364.16 211.03 364.23 210.99"
          />
          <polygon
            class="cls-163"
            points="364.27 210.97 356.08 206.24 355.97 206.3 356.05 206.3 364.19 211.01 364.27 210.97"
          />
          <polygon
            class="cls-161"
            points="364.16 210.46 355.97 205.73 355.97 206.18 364.16 210.91 364.16 210.46"
          />
          <polygon
            class="cls-162"
            points="364.23 210.41 356.04 205.69 355.97 205.73 364.16 210.46 364.23 210.41"
          />
          <polygon
            class="cls-163"
            points="364.27 210.39 356.08 205.67 355.97 205.73 356.05 205.73 364.19 210.44 364.27 210.39"
          />
          <polygon
            class="cls-161"
            points="364.16 209.88 355.97 205.16 355.97 205.61 364.16 210.33 364.16 209.88"
          />
          <polygon
            class="cls-162"
            points="364.23 209.84 356.04 205.11 355.97 205.16 364.16 209.88 364.23 209.84"
          />
          <polygon
            class="cls-163"
            points="364.27 209.82 356.08 205.09 355.97 205.16 356.05 205.16 364.19 209.86 364.27 209.82"
          />
          <polygon
            class="cls-161"
            points="364.16 209.31 355.97 204.58 355.97 205.03 364.16 209.76 364.16 209.31"
          />
          <polygon
            class="cls-162"
            points="364.23 209.27 356.04 204.54 355.97 204.58 364.16 209.31 364.23 209.27"
          />
          <polygon
            class="cls-163"
            points="364.27 209.24 356.08 204.52 355.97 204.58 356.05 204.58 364.19 209.29 364.27 209.24"
          />
          <polygon
            class="cls-161"
            points="364.16 208.74 355.97 204.01 355.97 204.46 364.16 209.19 364.16 208.74"
          />
          <polygon
            class="cls-162"
            points="364.23 208.69 356.04 203.97 355.97 204.01 364.16 208.74 364.23 208.69"
          />
          <polygon
            class="cls-163"
            points="364.27 208.67 356.08 203.94 355.97 204.01 356.05 204.01 364.19 208.71 364.27 208.67"
          />
          <polygon
            class="cls-161"
            points="364.16 208.16 355.97 203.44 355.97 203.88 364.16 208.61 364.16 208.16"
          />
          <polygon
            class="cls-162"
            points="364.23 208.12 356.04 203.39 355.97 203.44 364.16 208.16 364.23 208.12"
          />
          <polygon
            class="cls-163"
            points="364.27 208.1 356.08 203.37 355.97 203.44 356.05 203.44 364.19 208.14 364.27 208.1"
          />
          <polygon
            class="cls-161"
            points="364.16 207.59 355.97 202.86 355.97 203.31 364.16 208.04 364.16 207.59"
          />
          <polygon
            class="cls-162"
            points="364.23 207.55 356.04 202.82 355.97 202.86 364.16 207.59 364.23 207.55"
          />
          <polygon
            class="cls-163"
            points="364.27 207.52 356.08 202.8 355.97 202.86 356.05 202.86 364.19 207.56 364.27 207.52"
          />
          <polygon
            class="cls-161"
            points="364.16 207.01 355.97 202.29 355.97 202.74 364.16 207.46 364.16 207.01"
          />
          <polygon
            class="cls-162"
            points="364.23 206.97 356.04 202.24 355.97 202.29 364.16 207.01 364.23 206.97"
          />
          <polygon
            class="cls-163"
            points="364.27 206.95 356.08 202.22 355.97 202.29 356.05 202.29 364.19 206.99 364.27 206.95"
          />
          <polygon
            class="cls-161"
            points="364.16 206.44 355.97 201.71 355.97 202.16 364.16 206.89 364.16 206.44"
          />
          <polygon
            class="cls-162"
            points="364.23 206.4 356.04 201.67 355.97 201.71 364.16 206.44 364.23 206.4"
          />
          <polygon
            class="cls-163"
            points="364.27 206.38 356.08 201.65 355.97 201.71 356.05 201.71 364.19 206.42 364.27 206.38"
          />
          <polygon
            class="cls-161"
            points="364.16 205.87 355.97 201.14 355.97 201.59 364.16 206.32 364.16 205.87"
          />
          <polygon
            class="cls-162"
            points="364.23 205.82 356.04 201.1 355.97 201.14 364.16 205.87 364.23 205.82"
          />
          <polygon
            class="cls-163"
            points="364.27 205.8 356.08 201.07 355.97 201.14 356.05 201.14 364.19 205.84 364.27 205.8"
          />
          <polygon
            class="cls-161"
            points="364.16 205.29 355.97 200.56 355.97 201.01 364.16 205.74 364.16 205.29"
          />
          <polygon
            class="cls-162"
            points="364.23 205.25 356.04 200.52 355.97 200.56 364.16 205.29 364.23 205.25"
          />
          <polygon
            class="cls-163"
            points="364.27 205.23 356.08 200.5 355.97 200.56 356.05 200.56 364.19 205.27 364.27 205.23"
          />
          <polygon
            class="cls-161"
            points="364.16 204.72 355.97 199.99 355.97 200.44 364.16 205.17 364.16 204.72"
          />
          <polygon
            class="cls-162"
            points="364.23 204.68 356.04 199.95 355.97 199.99 364.16 204.72 364.23 204.68"
          />
          <polygon
            class="cls-163"
            points="364.27 204.65 356.08 199.93 355.97 199.99 356.05 199.99 364.19 204.7 364.27 204.65"
          />
          <polygon
            class="cls-161"
            points="364.16 204.15 355.97 199.42 355.97 199.87 364.16 204.59 364.16 204.15"
          />
          <polygon
            class="cls-162"
            points="364.23 204.1 356.04 199.38 355.97 199.42 364.16 204.15 364.23 204.1"
          />
          <polygon
            class="cls-163"
            points="364.27 204.08 356.08 199.35 355.97 199.42 356.05 199.42 364.19 204.12 364.27 204.08"
          />
          <polygon
            class="cls-161"
            points="364.16 203.57 355.97 198.84 355.97 199.29 364.16 204.02 364.16 203.57"
          />
          <polygon
            class="cls-162"
            points="364.23 203.53 356.04 198.8 355.97 198.84 364.16 203.57 364.23 203.53"
          />
          <polygon
            class="cls-163"
            points="364.27 203.51 356.08 198.78 355.97 198.84 356.05 198.84 364.19 203.55 364.27 203.51"
          />
          <polygon
            class="cls-131"
            points="364.74 201.82 353.33 195.24 353.33 207.39 355.09 208.4 355.09 200.3 362.99 204.86 362.99 212.97 364.74 213.98 364.74 201.82"
          />
          <polygon
            class="cls-137"
            points="368.25 199.8 364.74 201.82 364.74 213.98 368.25 211.95 368.25 199.8"
          />
          <path class="cls-139" d="M373.8,210.77v-4.59l4,2.3v4.58Z" />
          <polygon
            class="cls-140"
            points="373.72 206.07 373.72 210.83 377.84 213.21 377.84 208.45 373.72 206.07"
          />
          <path
            class="cls-141"
            d="M377.9,208.41l-4.38-2.54v5.06l4.38,2.53Zm-4.25,2.45V206.1l4.12,2.38v4.75Z"
          />
          <polygon
            class="cls-142"
            points="373.65 206.1 373.65 210.85 377.77 213.23 377.77 208.48 373.65 206.1"
          />
          <polygon
            class="cls-144"
            points="373.8 210.77 373.65 210.85 373.65 206.1 373.8 206.18 373.8 210.77"
          />
          <polygon
            class="cls-144"
            points="373.65 210.85 373.8 210.77 377.77 213.06 377.77 213.23 373.65 210.85"
          />
          <polygon
            class="cls-3"
            points="373.94 210.85 373.65 210.85 373.8 210.77 373.8 206.18 373.94 206.27 373.94 210.85"
          />
          <polygon
            class="cls-136"
            points="376.15 219.55 364.74 212.97 368.25 210.94 379.66 217.53 376.15 219.55"
          />
          <polygon
            class="cls-131"
            points="364.74 212.97 364.74 213.98 376.15 220.56 376.15 219.55 364.74 212.97"
          />
          <polygon
            class="cls-137"
            points="379.66 217.53 376.15 219.55 376.15 220.56 379.66 218.54 379.66 217.53"
          />
          <polygon
            class="cls-136"
            points="400.72 205.37 389.31 198.78 392.82 196.76 404.23 203.34 400.72 205.37"
          />
          <polygon
            class="cls-131"
            points="389.31 198.78 389.31 199.79 400.72 206.38 400.72 205.37 389.31 198.78"
          />
          <polygon
            class="cls-137"
            points="404.23 203.34 400.72 205.37 400.72 206.38 404.23 204.35 404.23 203.34"
          />
          <polygon
            class="cls-133"
            points="372.64 205.37 369.13 203.34 369.13 211.45 372.64 213.47 372.64 205.37"
          />
          <polygon
            class="cls-134"
            points="372.53 205.43 369.24 203.53 369.24 211.51 369.29 211.54 369.29 211.51 369.29 203.62 372.48 205.46 372.48 213.35 372.48 213.38 372.53 213.41 372.53 205.43"
          />
          <polygon
            class="cls-3"
            points="371.32 211.7 370.45 211.19 370.45 205.12 371.32 205.62 371.32 211.7"
          />
          <polygon
            class="cls-142"
            points="371.32 211.7 370.45 211.19 370.45 205.12 371.32 205.62 371.32 211.7"
          />
          <polygon
            class="cls-135"
            points="370.54 205.16 370.45 205.12 370.45 211.19 370.54 211.14 370.54 205.16"
          />
          <polygon
            class="cls-135"
            points="370.54 211.14 370.45 211.19 371.32 211.7 371.32 211.6 370.54 211.14"
          />
          <polygon
            class="cls-166"
            points="370.54 205.16 370.54 211.14 370.45 211.19 370.62 211.19 370.62 205.3 371.32 205.71 371.32 205.62 370.54 205.16"
          />
          <polygon
            class="cls-3"
            points="369.59 208.06 369.56 208.01 369.49 207.97 369.49 208.01 369.52 208.07 369.52 209.14 369.49 209.13 369.49 209.17 369.52 209.22 369.56 209.29 369.59 209.31 369.59 208.06"
          />
          <polygon
            class="cls-136"
            points="369.56 209.17 369.49 209.13 369.46 209.14 369.53 209.19 369.56 209.17"
          />
          <polygon
            class="cls-131"
            points="369.49 208.05 369.42 208.01 369.42 209.21 369.49 209.25 369.49 208.05"
          />
          <polygon
            class="cls-136"
            points="369.49 207.97 369.56 208.01 369.53 208.03 369.49 208.05 369.42 208.01 369.46 207.99 369.49 207.97"
          />
          <polygon
            class="cls-137"
            points="369.49 208.05 369.49 209.25 369.53 209.23 369.56 209.21 369.56 209.17 369.53 209.19 369.53 208.07 369.56 208.05 369.56 208.01 369.53 208.03 369.49 208.05"
          />
          <polygon
            class="cls-3"
            points="376.15 218.54 375.27 219.04 375.27 219.04 375.27 219.04 377.03 219.04 377.91 218.54 376.15 218.54"
          />
          <polygon
            class="cls-3"
            points="371.76 208.89 379.66 213.47 379.66 206.38 368.25 205.87 368.25 210.94 364.74 212.96 371.76 212.96 371.76 208.89"
          />
          <polygon
            class="cls-131"
            points="367.38 213.47 367.38 213.98 374.83 218.28 375.27 218.03 367.38 213.47"
          />
          <polygon
            class="cls-137"
            points="366.5 214.99 367.38 214.49 367.38 213.47 366.5 213.98 366.5 214.99"
          />
          <polygon
            class="cls-136"
            points="367.38 213.98 366.94 214.23 374.39 218.54 374.83 218.28 367.38 213.98"
          />
          <polygon
            class="cls-136"
            points="366.94 214.74 366.5 214.99 374.4 219.55 374.4 219.04 366.94 214.74"
          />
          <polygon
            class="cls-131"
            points="366.94 214.23 366.94 214.74 374.4 219.04 374.4 218.54 366.94 214.23"
          />
          <polygon
            class="cls-3"
            points="366.5 214.99 367.38 214.99 367.38 214.49 367.81 214.23 367.38 213.47 367.38 213.98 366.94 214.23 366.94 214.74 366.5 214.99"
          />
          <polygon
            class="cls-136"
            points="391.95 180.04 393.7 179.03 391.95 178.01 390.19 179.03 391.95 180.04"
          />
          <polygon
            class="cls-131"
            points="391.94 185.11 391.95 180.04 390.19 179.03 390.19 184.09 391.94 185.11"
          />
          <polygon
            class="cls-137"
            points="391.95 185.11 393.7 184.09 393.7 179.03 391.95 180.04 391.95 185.11"
          />
          <polygon
            class="cls-136"
            points="382.29 186.63 391.94 181.05 390.19 180.04 380.54 185.61 382.29 186.63"
          />
          <polygon
            class="cls-131"
            points="382.29 190.68 382.29 186.63 380.54 185.61 380.54 189.66 382.29 190.68"
          />
          <polygon
            class="cls-137"
            points="382.29 190.68 391.94 185.11 391.94 181.05 382.29 186.63 382.29 190.68"
          />
          <polygon
            class="cls-3"
            points="400.72 205.37 389.31 198.78 392.82 196.76 404.23 203.34 400.72 205.37"
          />
          <polygon
            class="cls-131"
            points="376.15 208.41 375.27 207.91 375.27 219.04 376.15 219.55 376.15 208.41"
          />
          <polygon
            class="cls-137"
            points="377.03 207.9 376.15 208.41 376.15 219.55 377.03 219.04 377.03 207.9"
          />
          <polygon
            class="cls-131"
            points="403.35 192.7 402.47 192.2 402.47 203.34 403.35 203.85 403.35 192.7"
          />
          <polygon
            class="cls-3"
            points="403.35 192.7 402.47 192.2 402.47 203.34 403.35 203.85 403.35 192.7"
          />
          <polygon
            class="cls-137"
            points="404.23 192.2 403.35 192.7 403.35 203.85 404.23 203.34 404.23 192.2"
          />
          <polygon
            class="cls-137"
            points="400.72 194.22 379.66 206.38 379.66 218.54 400.72 206.38 400.72 194.22"
          />
          <polygon
            class="cls-137"
            points="353.33 195.24 353.34 207.39 351.58 208.41 351.58 196.65 367.37 174.97 383.17 178.4 383.17 190.17 353.33 195.24"
          />
          <polygon
            class="cls-138"
            points="353.33 195.24 374.39 207.39 388.44 188.15 367.38 175.99 353.33 195.24"
          />
          <polygon
            class="cls-141"
            points="367.38 175.99 388.44 188.15 402.47 191.19 381.42 179.03 367.38 175.99"
          />
          <polygon
            class="cls-144"
            points="383.05 179.86 369.02 176.82 369.13 176.88 383.17 179.92 383.05 179.86"
          />
          <polygon
            class="cls-144"
            points="383.17 179.92 369.13 176.88 369.13 177 383.17 180.04 383.17 179.92"
          />
          <polygon
            class="cls-164"
            points="383.17 180.04 369.13 177 369.19 177.04 383.23 180.08 383.17 180.04"
          />
          <polygon
            class="cls-144"
            points="384.81 180.88 370.79 177.84 370.89 177.9 384.93 180.94 384.81 180.88"
          />
          <polygon
            class="cls-144"
            points="384.93 180.94 370.89 177.9 370.89 178.02 384.93 181.06 384.93 180.94"
          />
          <polygon
            class="cls-164"
            points="384.93 181.06 370.89 178.02 370.96 178.05 384.99 181.1 384.93 181.06"
          />
          <polygon
            class="cls-144"
            points="386.58 181.89 372.55 178.85 372.66 178.92 386.69 181.96 386.58 181.89"
          />
          <polygon
            class="cls-144"
            points="386.69 181.96 372.66 178.92 372.66 179.04 386.69 182.08 386.69 181.96"
          />
          <polygon
            class="cls-164"
            points="386.69 182.08 372.66 179.04 372.72 179.07 386.76 182.11 386.69 182.08"
          />
          <polygon
            class="cls-144"
            points="388.34 182.91 374.31 179.87 374.42 179.94 388.46 182.98 388.34 182.91"
          />
          <polygon
            class="cls-144"
            points="388.46 182.98 374.42 179.94 374.42 180.06 388.46 183.1 388.46 182.98"
          />
          <polygon
            class="cls-164"
            points="388.46 183.1 374.42 180.06 374.49 180.09 388.52 183.13 388.46 183.1"
          />
          <polygon
            class="cls-144"
            points="390.11 183.93 376.08 180.89 376.19 180.96 390.22 184 390.11 183.93"
          />
          <polygon
            class="cls-144"
            points="390.22 184 376.19 180.96 376.19 181.07 390.22 184.12 390.22 184"
          />
          <polygon
            class="cls-164"
            points="390.22 184.12 376.19 181.07 376.25 181.11 390.28 184.15 390.22 184.12"
          />
          <polygon
            class="cls-144"
            points="391.87 184.95 377.84 181.91 377.95 181.97 391.99 185.01 391.87 184.95"
          />
          <polygon
            class="cls-144"
            points="391.99 185.01 377.95 181.97 377.95 182.09 391.99 185.13 391.99 185.01"
          />
          <polygon
            class="cls-164"
            points="391.99 185.13 377.95 182.09 378.01 182.13 392.05 185.17 391.99 185.13"
          />
          <polygon
            class="cls-144"
            points="393.64 185.97 379.61 182.93 379.72 182.99 393.75 186.03 393.64 185.97"
          />
          <polygon
            class="cls-144"
            points="393.75 186.03 379.72 182.99 379.72 183.11 393.75 186.15 393.75 186.03"
          />
          <polygon
            class="cls-164"
            points="393.75 186.15 379.72 183.11 379.78 183.15 393.81 186.19 393.75 186.15"
          />
          <polygon
            class="cls-144"
            points="395.4 186.99 381.37 183.95 381.48 184.01 395.51 187.05 395.4 186.99"
          />
          <polygon
            class="cls-144"
            points="395.51 187.05 381.48 184.01 381.48 184.13 395.51 187.17 395.51 187.05"
          />
          <polygon
            class="cls-164"
            points="395.51 187.17 381.48 184.13 381.54 184.17 395.58 187.21 395.51 187.17"
          />
          <polygon
            class="cls-144"
            points="397.17 188.01 383.13 184.97 383.25 185.03 397.28 188.07 397.17 188.01"
          />
          <polygon
            class="cls-144"
            points="397.28 188.07 383.25 185.03 383.25 185.15 397.28 188.19 397.28 188.07"
          />
          <polygon
            class="cls-164"
            points="397.28 188.19 383.25 185.15 383.31 185.18 397.34 188.23 397.28 188.19"
          />
          <polygon
            class="cls-144"
            points="398.93 189.03 384.9 185.99 385.01 186.05 399.04 189.09 398.93 189.03"
          />
          <polygon
            class="cls-144"
            points="399.04 189.09 385.01 186.05 385.01 186.17 399.04 189.21 399.04 189.09"
          />
          <polygon
            class="cls-164"
            points="399.04 189.21 385.01 186.17 385.07 186.2 399.11 189.24 399.04 189.21"
          />
          <polygon
            class="cls-144"
            points="400.69 190.04 386.66 187 386.77 187.07 400.81 190.11 400.69 190.04"
          />
          <polygon
            class="cls-144"
            points="400.81 190.11 386.77 187.07 386.77 187.19 400.81 190.23 400.81 190.11"
          />
          <polygon
            class="cls-164"
            points="400.81 190.23 386.77 187.19 386.84 187.22 400.87 190.26 400.81 190.23"
          />
          <polygon
            class="cls-131"
            points="404.23 191.18 389.65 188.89 388.44 187.13 402.48 190.17 404.23 191.18"
          />
          <polygon
            class="cls-131"
            points="390.19 188.14 388.44 187.13 374.39 206.38 376.15 207.39 390.19 188.14"
          />
          <polygon
            class="cls-131"
            points="376.15 208.41 376.15 207.39 374.39 206.38 374.39 207.39 364.74 201.82 364.74 203.85 376.15 210.43 376.15 208.41 376.15 208.41"
          />
          <polygon
            class="cls-138"
            points="374.39 208.41 353.34 196.25 353.34 195.24 374.39 207.39 374.39 208.41"
          />
          <polygon
            class="cls-131"
            points="351.58 208.41 349.83 207.39 349.82 195.62 351.58 196.65 351.58 208.41"
          />
          <polygon
            class="cls-136"
            points="341.93 209.93 351.58 204.35 349.83 203.34 340.17 208.91 341.93 209.93"
          />
          <polygon
            class="cls-137"
            points="341.93 213.98 351.58 208.41 351.58 204.35 341.93 209.93 341.93 213.98"
          />
          <polygon
            class="cls-136"
            points="341.05 209.42 342.8 208.41 341.05 207.39 339.3 208.41 341.05 209.42"
          />
          <polygon
            class="cls-131"
            points="341.05 214.49 341.05 209.42 339.3 208.41 339.3 213.47 341.05 214.49"
          />
          <polygon
            class="cls-137"
            points="341.05 214.49 342.81 213.47 342.8 208.41 341.05 209.42 341.05 214.49"
          />
          <polygon
            class="cls-3"
            points="368.21 176.47 367.38 175.99 353.33 195.24 353.34 207.39 355.09 208.41 355.09 198.67 354.49 195.88 355.09 194.22 368.21 176.47"
          />
          <polygon
            class="cls-137"
            points="379.66 218.54 379.66 206.38 376.15 208.41 376.15 207.39 390.19 188.15 404.23 191.19 404.23 192.2 400.72 194.22 400.71 206.38 379.66 218.54"
          />
          <path class="cls-139" d="M392.08,207v-4.58l4-2.3v4.59Z" />
          <polygon
            class="cls-140"
            points="396.13 200 396.13 204.76 392.01 207.13 392.01 202.38 396.13 200"
          />
          <path
            class="cls-141"
            d="M391.94,207.39l4.39-2.53V199.8l-4.39,2.54Zm.14-.23v-4.75L396.2,200v4.75Z"
          />
          <polygon
            class="cls-142"
            points="396.2 200.03 396.2 204.78 392.08 207.16 392.08 202.41 396.2 200.03"
          />
          <polygon
            class="cls-144"
            points="396.05 204.7 396.2 204.78 396.2 200.03 396.05 200.11 396.05 204.7"
          />
          <polygon
            class="cls-144"
            points="396.2 204.78 396.05 204.7 392.08 206.99 392.08 207.16 396.2 204.78"
          />
          <path class="cls-139" d="M384.18,211.54V207l4-2.3v4.59Z" />
          <polygon
            class="cls-140"
            points="388.23 204.55 388.23 209.31 384.12 211.68 384.12 206.93 388.23 204.55"
          />
          <path
            class="cls-141"
            d="M384.05,211.94l4.38-2.53v-5.06l-4.38,2.54Zm.13-.23V207l4.12-2.38v4.75Z"
          />
          <polygon
            class="cls-142"
            points="388.3 204.58 388.3 209.34 384.18 211.71 384.18 206.96 388.3 204.58"
          />
          <polygon
            class="cls-144"
            points="388.15 209.25 388.3 209.34 388.3 204.58 388.15 204.66 388.15 209.25"
          />
          <polygon
            class="cls-144"
            points="388.3 209.34 388.15 209.25 384.18 211.54 384.18 211.71 388.3 209.34"
          />
          <polygon
            class="cls-3"
            points="382.29 179.53 368.21 176.47 367.38 175.99 381.42 179.03 382.29 179.53"
          />
          <polygon
            class="cls-136"
            points="341.05 214.23 342.81 215.25 355.09 208.15 353.33 207.14 341.05 214.23"
          />
          <polygon
            class="cls-137"
            points="342.81 215.25 341.05 214.23 341.05 214.49 342.81 215.5 342.81 215.25"
          />
          <polygon
            class="cls-137"
            points="355.09 208.15 342.81 215.25 342.81 215.5 355.09 208.41 355.09 208.15"
          />
          <polygon
            class="cls-3"
            points="357.29 208.66 356.85 207.17 356.85 208.41 355.97 207.9 355.09 208.41 355.09 208.15 353.33 207.14 341.05 214.23 344.56 214.23 344.56 214.49 344.56 214.49 342.81 215.5 343.25 215.5 345 214.49 349.82 214.48 349.82 214.49 351.58 213.47 350.26 212.71 357.29 208.66"
          />
          <polygon
            class="cls-144"
            points="369.02 176.82 354.98 196.06 355.09 196.13 369.13 176.88 369.02 176.82"
          />
          <polygon
            class="cls-144"
            points="369.13 176.88 355.09 196.13 355.09 196.25 369.13 177 369.13 176.88"
          />
          <polygon
            class="cls-144"
            points="355.09 196.25 354.98 196.18 354.98 196.06 355.09 196.13 355.09 196.25"
          />
          <polygon
            class="cls-164"
            points="369.13 177 355.09 196.25 355.15 196.28 369.19 177.04 369.13 177"
          />
          <polygon
            class="cls-144"
            points="370.79 177.84 356.75 197.08 356.86 197.15 370.89 177.9 370.79 177.84"
          />
          <polygon
            class="cls-144"
            points="370.89 177.9 356.86 197.15 356.86 197.27 370.89 178.02 370.89 177.9"
          />
          <polygon
            class="cls-144"
            points="356.86 197.27 356.75 197.2 356.75 197.08 356.86 197.15 356.86 197.27"
          />
          <polygon
            class="cls-164"
            points="370.89 178.02 356.85 197.27 356.92 197.3 370.96 178.06 370.89 178.02"
          />
          <polygon
            class="cls-144"
            points="372.55 178.85 358.51 198.1 358.62 198.17 372.66 178.92 372.55 178.85"
          />
          <polygon
            class="cls-144"
            points="372.66 178.92 358.62 198.17 358.62 198.29 372.66 179.04 372.66 178.92"
          />
          <polygon
            class="cls-144"
            points="358.62 198.29 358.51 198.22 358.51 198.1 358.62 198.17 358.62 198.29"
          />
          <polygon
            class="cls-164"
            points="372.66 179.04 358.62 198.29 358.68 198.32 372.72 179.07 372.66 179.04"
          />
          <polygon
            class="cls-144"
            points="374.31 179.87 360.27 199.12 360.38 199.19 374.42 179.94 374.31 179.87"
          />
          <polygon
            class="cls-144"
            points="374.42 179.94 360.38 199.19 360.38 199.31 374.42 180.06 374.42 179.94"
          />
          <polygon
            class="cls-144"
            points="360.38 199.31 360.27 199.24 360.27 199.12 360.38 199.19 360.38 199.31"
          />
          <polygon
            class="cls-164"
            points="374.42 180.06 360.38 199.3 360.44 199.34 374.49 180.09 374.42 180.06"
          />
          <polygon
            class="cls-144"
            points="376.08 180.89 362.04 200.14 362.15 200.2 376.19 180.96 376.08 180.89"
          />
          <polygon
            class="cls-144"
            points="376.19 180.96 362.15 200.2 362.15 200.32 376.19 181.07 376.19 180.96"
          />
          <polygon
            class="cls-144"
            points="362.15 200.32 362.04 200.26 362.04 200.14 362.15 200.2 362.15 200.32"
          />
          <polygon
            class="cls-164"
            points="376.19 181.07 362.15 200.32 362.21 200.36 376.25 181.11 376.19 181.07"
          />
          <polygon
            class="cls-144"
            points="377.84 181.91 363.8 201.16 363.91 201.22 377.95 181.97 377.84 181.91"
          />
          <polygon
            class="cls-144"
            points="377.95 181.97 363.91 201.22 363.91 201.34 377.95 182.09 377.95 181.97"
          />
          <polygon
            class="cls-144"
            points="363.91 201.34 363.8 201.28 363.8 201.16 363.91 201.22 363.91 201.34"
          />
          <polygon
            class="cls-164"
            points="377.95 182.09 363.91 201.34 363.97 201.38 378.01 182.13 377.95 182.09"
          />
          <polygon
            class="cls-144"
            points="379.61 182.93 365.57 202.18 365.68 202.24 379.71 182.99 379.61 182.93"
          />
          <polygon
            class="cls-144"
            points="379.71 182.99 365.68 202.24 365.68 202.36 379.71 183.11 379.71 182.99"
          />
          <polygon
            class="cls-144"
            points="365.68 202.36 365.57 202.29 365.57 202.17 365.68 202.24 365.68 202.36"
          />
          <polygon
            class="cls-164"
            points="379.71 183.11 365.68 202.36 365.74 202.4 379.78 183.15 379.71 183.11"
          />
          <polygon
            class="cls-144"
            points="381.37 183.95 367.33 203.19 367.44 203.26 381.48 184.01 381.37 183.95"
          />
          <polygon
            class="cls-144"
            points="381.48 184.01 367.44 203.26 367.44 203.38 381.48 184.13 381.48 184.01"
          />
          <polygon
            class="cls-144"
            points="367.44 203.38 367.33 203.31 367.33 203.19 367.44 203.26 367.44 203.38"
          />
          <polygon
            class="cls-164"
            points="381.48 184.13 367.44 203.38 367.5 203.41 381.54 184.17 381.48 184.13"
          />
          <polygon
            class="cls-144"
            points="383.13 184.97 369.09 204.21 369.2 204.28 383.24 185.03 383.13 184.97"
          />
          <polygon
            class="cls-144"
            points="383.24 185.03 369.2 204.28 369.2 204.4 383.24 185.15 383.24 185.03"
          />
          <polygon
            class="cls-144"
            points="369.2 204.4 369.09 204.33 369.09 204.21 369.2 204.28 369.2 204.4"
          />
          <polygon
            class="cls-164"
            points="383.24 185.15 369.2 204.4 369.26 204.43 383.31 185.19 383.24 185.15"
          />
          <polygon
            class="cls-144"
            points="384.9 185.99 370.86 205.23 370.97 205.3 385.01 186.05 384.9 185.99"
          />
          <polygon
            class="cls-144"
            points="385.01 186.05 370.97 205.3 370.97 205.42 385.01 186.17 385.01 186.05"
          />
          <polygon
            class="cls-144"
            points="370.97 205.42 370.86 205.35 370.86 205.23 370.97 205.3 370.97 205.42"
          />
          <polygon
            class="cls-164"
            points="385.01 186.17 370.97 205.42 371.03 205.45 385.07 186.2 385.01 186.17"
          />
          <polygon
            class="cls-144"
            points="386.66 187 372.62 206.25 372.73 206.32 386.77 187.07 386.66 187"
          />
          <polygon
            class="cls-144"
            points="386.77 187.07 372.73 206.32 372.73 206.44 386.77 187.19 386.77 187.07"
          />
          <polygon
            class="cls-144"
            points="372.73 206.44 372.62 206.37 372.62 206.25 372.73 206.32 372.73 206.44"
          />
          <polygon
            class="cls-164"
            points="386.77 187.19 372.73 206.44 372.79 206.47 386.83 187.22 386.77 187.19"
          />
          <polygon
            class="cls-131"
            points="383.01 178.4 367.22 174.97 365.46 173.96 381.26 177.38 383.01 178.4"
          />
          <polygon
            class="cls-131"
            points="367.38 174.97 365.62 173.96 349.82 195.62 351.58 196.65 367.38 174.97"
          />
          <polygon
            class="cls-138"
            points="373.15 178.68 373.15 178.78 374.96 179.82 374.96 179.72 373.15 178.68"
          />
          <polygon
            class="cls-144"
            points="374.96 179.72 374.96 179.82 377.88 180.32 377.88 180.22 374.96 179.72"
          />
          <polygon
            class="cls-141"
            points="377.88 180.22 374.96 179.72 373.15 178.68 376.13 179.21 377.88 180.22"
          />
          <polygon
            class="cls-165"
            points="374.98 179.67 373.45 178.79 376.11 179.26 377.6 180.12 374.98 179.67"
          />
          <polygon
            class="cls-151"
            points="373.45 177.5 376.06 175.94 377.59 176.83 374.98 178.38 373.45 177.5"
          />
          <polygon
            class="cls-131"
            points="374.98 179.67 373.45 178.79 373.45 177.5 374.98 178.38 374.98 179.67"
          />
          <polygon
            class="cls-137"
            points="377.6 180.12 374.98 179.67 374.98 178.38 377.59 176.83 377.6 180.12"
          />
          <polygon
            class="cls-144"
            points="374.98 178.06 377.64 176.47 377.64 176.83 374.98 178.41 374.98 178.06"
          />
          <polygon
            class="cls-138"
            points="373.39 177.14 376.06 175.56 377.64 176.48 374.98 178.06 373.39 177.14"
          />
          <polygon
            class="cls-152"
            points="374.2 177.14 376.06 176.03 376.84 176.48 374.98 177.59 374.2 177.14"
          />
          <polygon
            class="cls-138"
            points="373.39 177.14 373.39 177.5 374.98 178.41 374.98 178.06 373.39 177.14"
          />
          <g class="cls-153">
            <polygon
              class="cls-3"
              points="374.98 178.41 374.98 178.47 377.59 176.92 377.59 176.86 374.98 178.41"
            />
            <polygon
              class="cls-3"
              points="373.45 177.58 374.98 178.47 374.98 178.41 373.45 177.52 373.45 177.58"
            />
          </g>
          <polygon
            class="cls-3"
            points="374.48 177.1 374.13 177.1 374.05 177.14 374.13 177.18 374.49 177.18 375.17 177.57 374.98 177.57 374.9 177.62 374.98 177.66 375.31 177.66 375.49 177.76 377.64 176.47 375.67 175.34 374.48 177.1"
          />
          <polygon
            class="cls-141"
            points="374.13 177.18 374.05 177.14 374.05 176.89 374.13 176.93 374.13 177.18"
          />
          <polygon
            class="cls-144"
            points="374.2 177.14 374.13 177.18 374.13 176.93 374.2 176.89 374.2 177.14"
          />
          <polygon
            class="cls-141"
            points="374.98 177.66 374.9 177.62 374.9 177.36 374.98 177.4 374.98 177.66"
          />
          <polygon
            class="cls-144"
            points="375.05 177.62 374.98 177.66 374.98 177.4 375.05 177.36 375.05 177.62"
          />
          <polygon
            class="cls-141"
            points="376.91 176.52 376.84 176.48 376.84 176.22 376.91 176.27 376.91 176.52"
          />
          <polygon
            class="cls-144"
            points="376.98 176.48 376.91 176.52 376.91 176.27 376.98 176.22 376.98 176.48"
          />
          <polygon
            class="cls-144"
            points="374.98 177.11 377.64 175.53 377.64 175.88 374.98 177.46 374.98 177.11"
          />
          <polygon
            class="cls-141"
            points="373.39 176.19 373.39 176.54 374.98 177.46 374.98 177.11 373.39 176.19"
          />
          <polygon
            class="cls-144"
            points="377.64 175.53 376.06 174.61 375.39 176.03 377.64 175.53"
          />
          <polygon
            class="cls-141"
            points="376.06 174.61 376.06 174.61 373.39 176.19 375.69 175.38 376.06 174.61"
          />
          <polygon
            class="cls-138"
            points="373.39 176.19 374.98 177.11 375.69 175.38 373.39 176.19"
          />
          <polygon
            class="cls-141"
            points="375.69 175.38 374.98 177.11 377.64 175.53 375.69 175.38"
          />
          <ellipse
            class="cls-154"
            cx="325.04"
            cy="200.14"
            rx="3.49"
            ry="1.87"
          />
          <path
            class="cls-155"
            d="M325,200.35h0a.34.34,0,0,1-.34-.34v-4.79a.34.34,0,0,1,.34-.34h0a.34.34,0,0,1,.34.34V200A.34.34,0,0,1,325,200.35Z"
          />
          <path
            class="cls-103"
            d="M328.12,190.56a4.91,4.91,0,0,0,0-.55,4,4,0,0,0-.7-2.29,3.42,3.42,0,0,0,.09-.79,2.54,2.54,0,1,0-5,0,3.42,3.42,0,0,0,.09.79,4,4,0,0,0-.7,2.29,3.31,3.31,0,0,0,0,.55,3.34,3.34,0,0,0-1.24,2.54c0,2,1.93,3.63,4.32,3.63s4.32-1.62,4.32-3.63A3.34,3.34,0,0,0,328.12,190.56Z"
          />
          <path
            class="cls-156"
            d="M328.12,190.56a4.91,4.91,0,0,0,0-.55,4,4,0,0,0-.7-2.29,3.42,3.42,0,0,0,.09-.79,3,3,0,0,0-1.55-2.7c-1,6,1.83,8.73-2.37,12.3a5,5,0,0,0,1.41.2c2.38,0,4.32-1.62,4.32-3.63A3.34,3.34,0,0,0,328.12,190.56Z"
          />
          <ellipse class="cls-154" cx="380" cy="224.47" rx="3.49" ry="1.87" />
          <path
            class="cls-155"
            d="M380,224.69h0a.34.34,0,0,1-.34-.34v-4.8a.34.34,0,0,1,.34-.34h0a.34.34,0,0,1,.34.34v4.8A.34.34,0,0,1,380,224.69Z"
          />
          <path
            class="cls-103"
            d="M383.08,214.9a5.09,5.09,0,0,0,0-.56,4,4,0,0,0-.7-2.29,3.35,3.35,0,0,0,.09-.79,2.54,2.54,0,1,0-5,0,3.35,3.35,0,0,0,.09.79,4,4,0,0,0-.7,2.29,3.43,3.43,0,0,0,0,.56,3.32,3.32,0,0,0-1.24,2.54c0,2,1.93,3.62,4.32,3.62s4.32-1.62,4.32-3.62A3.32,3.32,0,0,0,383.08,214.9Z"
          />
          <path
            class="cls-156"
            d="M383.08,214.9a5.09,5.09,0,0,0,0-.56,4,4,0,0,0-.7-2.29,3.35,3.35,0,0,0,.09-.79,3,3,0,0,0-1.55-2.69c-1,6,1.83,8.73-2.36,12.3a5.32,5.32,0,0,0,1.4.19c2.39,0,4.32-1.62,4.32-3.62A3.32,3.32,0,0,0,383.08,214.9Z"
          />
          <ellipse
            class="cls-154"
            cx="409.36"
            cy="195.35"
            rx="3.49"
            ry="1.87"
          />
          <path
            class="cls-155"
            d="M409.36,195.57h0a.34.34,0,0,1-.33-.34v-4.8a.34.34,0,0,1,.33-.34h0a.34.34,0,0,1,.34.34v4.8A.34.34,0,0,1,409.36,195.57Z"
          />
          <path
            class="cls-103"
            d="M412.45,185.78a5.12,5.12,0,0,0,0-.56,4,4,0,0,0-.7-2.29,3.33,3.33,0,0,0,.1-.78,2.54,2.54,0,1,0-5,0,3.33,3.33,0,0,0,.1.78,4,4,0,0,0-.7,2.29,5.12,5.12,0,0,0,0,.56,3.36,3.36,0,0,0-1.24,2.54c0,2,1.94,3.62,4.32,3.62s4.33-1.62,4.33-3.62A3.36,3.36,0,0,0,412.45,185.78Z"
          />
          <path
            class="cls-156"
            d="M412.45,185.78a5.12,5.12,0,0,0,0-.56,4,4,0,0,0-.7-2.29,3.33,3.33,0,0,0,.1-.78,3,3,0,0,0-1.55-2.7c-1,6,1.82,8.73-2.37,12.3a5.32,5.32,0,0,0,1.4.19c2.39,0,4.33-1.62,4.33-3.62A3.36,3.36,0,0,0,412.45,185.78Z"
          />
          <path
            class="cls-167"
            d="M227.06,230.32c7.75.2,26.45.33,35.92.38,3.45,0,6.39-1.76,7.48-4.54l7.76-19.79c1.36-3.45-.49-7.5-4.35-9.52l-48-25a10.19,10.19,0,0,0-6.22-1l-33.19,5.17a27.19,27.19,0,0,0-10.78,4.58c-2,1.47-3.37,2.48-4,3.79-5,10.54,41,37.62,49.35,43.86C221.47,228.47,222.74,230.2,227.06,230.32Z"
          />
          <path
            class="cls-4"
            d="M227.06,230.32c7.75.2,26.45.33,35.92.38,3.45,0,6.39-1.76,7.48-4.54l7.76-19.79c1.36-3.45-.49-7.5-4.35-9.52l-48-25a10.19,10.19,0,0,0-6.22-1l-33.19,5.17a27.19,27.19,0,0,0-10.78,4.58c-2,1.47-3.37,2.48-4,3.79-5,10.54,41,37.62,49.35,43.86C221.47,228.47,222.74,230.2,227.06,230.32Z"
          />
          <path
            class="cls-168"
            d="M227.06,230.37c7.75.2,26.45.33,35.92.39a7.73,7.73,0,0,0,7.48-4.55l7.76-19.78c1.36-3.46-.49-7.51-4.35-9.52l-48-25a10.12,10.12,0,0,0-6.22-1.06L186.48,176a27.09,27.09,0,0,0-10.78,4.59c-2,1.46-3.37,2.48-4,3.79-5,10.53,41,37.61,49.35,43.85C221.47,228.52,222.74,230.26,227.06,230.37Z"
          />
          <polygon
            class="cls-169"
            points="197.14 208.21 197.14 204.61 195.59 203.71 195.58 207.31 197.14 208.21"
          />
          <polygon
            class="cls-3"
            points="210.39 197.86 215.86 200.98 215.86 200.11 209.62 196.51 209.62 202.81 210.4 203.26 210.39 197.86"
          />
          <polygon
            class="cls-137"
            points="188.52 187.11 188.52 176.3 185.4 178.1 185.4 177.2 197.88 160.1 210.35 162.8 210.35 163.7 207.23 165.5 207.23 176.3 188.52 187.11"
          />
          <polygon
            class="cls-137"
            points="190.08 188.01 190.08 177.2 186.96 179 186.96 178.1 199.44 161 211.91 163.7 211.91 164.6 208.79 166.4 208.79 177.2 190.08 188.01"
          />
          <polygon
            class="cls-131"
            points="211.77 163.7 199.3 161 197.74 160.1 210.21 162.8 211.77 163.7"
          />
          <polygon
            class="cls-131"
            points="199.44 161 197.88 160.1 185.4 177.2 186.96 178.1 199.44 161"
          />
          <polygon
            class="cls-158"
            points="204.11 199.78 204.11 199.87 205.09 200.43 205.17 200.38 204.11 199.78"
          />
          <polygon
            class="cls-131"
            points="188.52 177.21 188.52 186.21 198.66 192.06 198.66 182.16 188.52 177.21"
          />
          <polygon
            class="cls-136"
            points="195.54 193.86 185.4 188.01 188.52 186.21 198.66 192.06 195.54 193.86"
          />
          <polygon
            class="cls-131"
            points="185.4 188.01 185.4 188.91 195.54 194.76 195.54 193.86 185.4 188.01"
          />
          <path class="cls-139" d="M190.33,184.26v-4.07l3.53,2v4.08Z" />
          <polygon
            class="cls-140"
            points="190.26 180.09 190.26 184.31 193.92 186.43 193.92 182.2 190.26 180.09"
          />
          <path
            class="cls-141"
            d="M194,182.16l-3.9-2.26v4.51l3.9,2.25Zm-3.78,2.18v-4.23l3.66,2.11v4.23Z"
          />
          <polygon
            class="cls-142"
            points="190.2 180.11 190.2 184.34 193.86 186.45 193.86 182.22 190.2 180.11"
          />
          <polygon
            class="cls-144"
            points="190.33 184.26 190.2 184.34 190.2 180.11 190.33 180.19 190.33 184.26"
          />
          <polygon
            class="cls-144"
            points="190.2 184.34 190.33 184.26 193.86 186.3 193.86 186.45 190.2 184.34"
          />
          <polygon
            class="cls-3"
            points="190.46 184.34 190.2 184.34 190.33 184.26 190.33 180.19 190.46 180.26 190.46 184.34"
          />
          <polygon
            class="cls-133"
            points="197.88 184.41 194.76 182.6 194.76 189.81 197.88 191.61 197.88 184.41"
          />
          <polygon
            class="cls-134"
            points="197.78 184.46 194.85 182.77 194.85 189.86 194.9 189.89 194.9 189.86 194.9 182.85 197.73 184.49 197.73 191.5 197.73 191.52 197.78 191.55 197.78 184.46"
          />
          <polygon
            class="cls-3"
            points="196.71 190.03 195.93 189.58 195.93 184.18 196.71 184.63 196.71 190.03"
          />
          <polygon
            class="cls-159"
            points="196.71 190.03 195.93 189.58 195.93 184.18 196.71 184.63 196.71 190.03"
          />
          <polygon
            class="cls-160"
            points="196.01 184.22 195.93 184.18 195.93 189.58 196.01 189.54 196.01 184.22"
          />
          <polygon
            class="cls-146"
            points="196.01 189.54 195.93 189.58 196.71 190.03 196.71 189.94 196.01 189.54"
          />
          <polygon
            class="cls-3"
            points="196.01 184.22 196.01 189.54 195.93 189.58 196.09 189.58 196.09 184.35 196.71 184.71 196.71 184.63 196.01 184.22"
          />
          <polygon
            class="cls-3"
            points="195.17 186.8 195.14 186.75 195.08 186.72 195.08 186.76 195.11 186.81 195.11 187.76 195.08 187.74 195.08 187.78 195.11 187.83 195.14 187.89 195.17 187.91 195.17 186.8"
          />
          <polygon
            class="cls-136"
            points="195.14 187.78 195.08 187.75 195.05 187.76 195.11 187.8 195.14 187.78"
          />
          <polygon
            class="cls-131"
            points="195.08 186.79 195.01 186.75 195.01 187.82 195.08 187.86 195.08 186.79"
          />
          <polygon
            class="cls-136"
            points="195.08 186.72 195.14 186.76 195.11 186.77 195.08 186.79 195.01 186.75 195.05 186.74 195.08 186.72"
          />
          <polygon
            class="cls-137"
            points="195.08 186.79 195.08 187.86 195.11 187.84 195.14 187.82 195.14 187.78 195.11 187.8 195.11 186.81 195.14 186.79 195.14 186.76 195.11 186.77 195.08 186.79"
          />
          <polygon
            class="cls-3"
            points="198.59 180.99 188.52 178.1 190.86 183.95 190.86 183.96 190.86 187.56 186.18 187.56 185.4 188.01 185.4 188.01 185.4 188.01 186.18 188.46 192.42 188.46 192.42 184.86 196.34 187.12 198.59 180.99"
          />
          <polygon
            class="cls-131"
            points="187.74 188.46 187.74 188.91 194.37 192.73 194.76 192.51 187.74 188.46"
          />
          <polygon
            class="cls-137"
            points="186.96 189.81 187.74 189.36 187.74 188.46 186.96 188.91 186.96 189.81"
          />
          <polygon
            class="cls-136"
            points="187.74 188.91 187.35 189.13 193.98 192.96 194.37 192.73 187.74 188.91"
          />
          <polygon
            class="cls-136"
            points="187.35 189.58 186.96 189.81 193.98 193.86 193.98 193.41 187.35 189.58"
          />
          <polygon
            class="cls-131"
            points="187.35 189.13 187.35 189.58 193.98 193.41 193.98 192.96 187.35 189.13"
          />
          <polygon
            class="cls-3"
            points="186.96 189.81 187.74 189.81 187.74 189.36 188.13 189.13 187.74 188.46 187.74 188.91 187.35 189.13 187.35 189.58 186.96 189.81"
          />
          <polygon
            class="cls-131"
            points="186.18 178.55 185.4 178.1 185.4 188.01 186.18 188.46 186.18 178.55"
          />
          <polygon
            class="cls-137"
            points="186.96 178.1 186.18 178.55 186.18 188.46 186.96 188.01 186.96 178.1"
          />
          <polygon
            class="cls-138"
            points="186.96 179 205.67 189.81 218.15 172.7 199.44 161.9 186.96 179"
          />
          <polygon
            class="cls-141"
            points="199.44 161.9 218.15 172.7 230.63 175.4 211.91 164.6 199.44 161.9"
          />
          <polygon
            class="cls-131"
            points="195.54 185.76 185.4 179.9 185.4 177.2 186.96 178.1 186.96 179 195.54 183.96 195.54 185.76"
          />
          <polygon
            class="cls-137"
            points="198.66 187.52 197.1 185.76 197.1 195.66 198.65 194.76 198.66 187.52"
          />
          <polygon
            class="cls-161"
            points="205.15 199.01 197.88 194.81 197.88 195.21 205.15 199.41 205.15 199.01"
          />
          <polygon
            class="cls-162"
            points="205.22 198.97 197.94 194.77 197.88 194.81 205.15 199.01 205.22 198.97"
          />
          <polygon
            class="cls-163"
            points="205.25 198.95 197.97 194.75 197.88 194.81 197.94 194.81 205.19 198.99 205.25 198.95"
          />
          <polygon
            class="cls-161"
            points="205.15 198.5 197.88 194.3 197.88 194.7 205.15 198.9 205.15 198.5"
          />
          <polygon
            class="cls-162"
            points="205.22 198.46 197.94 194.26 197.88 194.3 205.15 198.5 205.22 198.46"
          />
          <polygon
            class="cls-163"
            points="205.25 198.44 197.97 194.24 197.88 194.3 197.94 194.3 205.19 198.48 205.25 198.44"
          />
          <polygon
            class="cls-161"
            points="205.15 197.99 197.88 193.79 197.88 194.19 205.15 198.39 205.15 197.99"
          />
          <polygon
            class="cls-162"
            points="205.22 197.95 197.94 193.75 197.88 193.79 205.15 197.99 205.22 197.95"
          />
          <polygon
            class="cls-163"
            points="205.25 197.93 197.97 193.73 197.88 193.79 197.94 193.79 205.19 197.97 205.25 197.93"
          />
          <polygon
            class="cls-161"
            points="205.15 197.48 197.88 193.28 197.88 193.68 205.15 197.88 205.15 197.48"
          />
          <polygon
            class="cls-162"
            points="205.22 197.44 197.94 193.24 197.88 193.28 205.15 197.48 205.22 197.44"
          />
          <polygon
            class="cls-163"
            points="205.25 197.42 197.97 193.22 197.88 193.28 197.94 193.28 205.19 197.46 205.25 197.42"
          />
          <polygon
            class="cls-161"
            points="205.15 196.97 197.88 192.77 197.88 193.17 205.15 197.37 205.15 196.97"
          />
          <polygon
            class="cls-162"
            points="205.22 196.93 197.94 192.73 197.88 192.77 205.15 196.97 205.22 196.93"
          />
          <polygon
            class="cls-163"
            points="205.25 196.91 197.97 192.71 197.88 192.77 197.94 192.77 205.19 196.95 205.25 196.91"
          />
          <polygon
            class="cls-161"
            points="205.15 196.46 197.88 192.26 197.88 192.66 205.15 196.86 205.15 196.46"
          />
          <polygon
            class="cls-162"
            points="205.22 196.42 197.94 192.22 197.88 192.26 205.15 196.46 205.22 196.42"
          />
          <polygon
            class="cls-163"
            points="205.25 196.4 197.97 192.2 197.88 192.26 197.94 192.26 205.19 196.44 205.25 196.4"
          />
          <polygon
            class="cls-161"
            points="205.15 195.95 197.88 191.75 197.88 192.15 205.15 196.35 205.15 195.95"
          />
          <polygon
            class="cls-162"
            points="205.22 195.91 197.94 191.71 197.88 191.75 205.15 195.95 205.22 195.91"
          />
          <polygon
            class="cls-163"
            points="205.25 195.89 197.97 191.69 197.88 191.75 197.94 191.75 205.19 195.93 205.25 195.89"
          />
          <polygon
            class="cls-161"
            points="205.15 195.44 197.88 191.24 197.88 191.64 205.15 195.84 205.15 195.44"
          />
          <polygon
            class="cls-162"
            points="205.22 195.4 197.94 191.2 197.88 191.24 205.15 195.44 205.22 195.4"
          />
          <polygon
            class="cls-163"
            points="205.25 195.38 197.97 191.18 197.88 191.24 197.94 191.24 205.19 195.42 205.25 195.38"
          />
          <polygon
            class="cls-161"
            points="205.15 194.93 197.88 190.73 197.88 191.13 205.15 195.33 205.15 194.93"
          />
          <polygon
            class="cls-162"
            points="205.22 194.89 197.94 190.69 197.88 190.73 205.15 194.93 205.22 194.89"
          />
          <polygon
            class="cls-163"
            points="205.25 194.87 197.97 190.67 197.88 190.73 197.94 190.73 205.19 194.91 205.25 194.87"
          />
          <polygon
            class="cls-161"
            points="205.15 194.42 197.88 190.22 197.88 190.62 205.15 194.82 205.15 194.42"
          />
          <polygon
            class="cls-162"
            points="205.22 194.38 197.94 190.18 197.88 190.22 205.15 194.42 205.22 194.38"
          />
          <polygon
            class="cls-163"
            points="205.25 194.36 197.97 190.16 197.88 190.22 197.94 190.22 205.19 194.4 205.25 194.36"
          />
          <polygon
            class="cls-161"
            points="205.15 193.91 197.88 189.71 197.88 190.11 205.15 194.31 205.15 193.91"
          />
          <polygon
            class="cls-162"
            points="205.22 193.87 197.94 189.67 197.88 189.71 205.15 193.91 205.22 193.87"
          />
          <polygon
            class="cls-163"
            points="205.25 193.85 197.97 189.65 197.88 189.71 197.94 189.71 205.19 193.89 205.25 193.85"
          />
          <polygon
            class="cls-161"
            points="205.15 193.4 197.88 189.2 197.88 189.6 205.15 193.8 205.15 193.4"
          />
          <polygon
            class="cls-162"
            points="205.22 193.36 197.94 189.16 197.88 189.2 205.15 193.4 205.22 193.36"
          />
          <polygon
            class="cls-163"
            points="205.25 193.34 197.97 189.14 197.88 189.2 197.94 189.2 205.19 193.38 205.25 193.34"
          />
          <polygon
            class="cls-161"
            points="205.15 192.89 197.88 188.69 197.88 189.09 205.15 193.29 205.15 192.89"
          />
          <polygon
            class="cls-162"
            points="205.22 192.85 197.94 188.65 197.88 188.69 205.15 192.89 205.22 192.85"
          />
          <polygon
            class="cls-163"
            points="205.25 192.83 197.97 188.63 197.88 188.69 197.94 188.69 205.19 192.87 205.25 192.83"
          />
          <polygon
            class="cls-161"
            points="205.15 192.38 197.88 188.18 197.88 188.58 205.15 192.78 205.15 192.38"
          />
          <polygon
            class="cls-162"
            points="205.22 192.34 197.94 188.14 197.88 188.18 205.15 192.38 205.22 192.34"
          />
          <polygon
            class="cls-163"
            points="205.25 192.32 197.97 188.12 197.88 188.18 197.94 188.18 205.19 192.36 205.25 192.32"
          />
          <polygon
            class="cls-161"
            points="205.15 191.87 197.88 187.67 197.88 188.07 205.15 192.27 205.15 191.87"
          />
          <polygon
            class="cls-162"
            points="205.22 191.83 197.94 187.63 197.88 187.67 205.15 191.87 205.22 191.83"
          />
          <polygon
            class="cls-163"
            points="205.25 191.81 197.97 187.61 197.88 187.67 197.94 187.67 205.19 191.85 205.25 191.81"
          />
          <polygon
            class="cls-161"
            points="205.15 191.36 197.88 187.16 197.88 187.56 205.15 191.76 205.15 191.36"
          />
          <polygon
            class="cls-162"
            points="205.22 191.32 197.94 187.12 197.88 187.16 205.15 191.36 205.22 191.32"
          />
          <polygon
            class="cls-163"
            points="205.25 191.3 197.97 187.1 197.88 187.16 197.94 187.16 205.19 191.34 205.25 191.3"
          />
          <polygon
            class="cls-131"
            points="205.67 189.81 195.54 183.96 195.54 194.76 197.1 195.66 197.1 188.46 204.12 192.51 204.12 199.71 205.67 200.61 205.67 189.81"
          />
          <polygon
            class="cls-138"
            points="205.68 190.71 186.96 179.9 186.96 179 205.68 189.81 205.68 190.71"
          />
          <polygon
            class="cls-3"
            points="198.65 190.26 204.12 193.38 204.12 192.51 197.88 188.91 197.88 195.21 197.1 195.66 198.66 195.66 198.65 190.26"
          />
          <polygon
            class="cls-3"
            points="200.22 162.35 199.44 161.9 186.96 179 188.88 177.9 200.22 162.35"
          />
          <polygon
            class="cls-3"
            points="212.69 165.05 200.22 162.35 199.44 161.9 211.91 164.6 212.69 165.05"
          />
          <polygon
            class="cls-144"
            points="200.91 162.64 188.43 179.74 188.53 179.8 201 162.7 200.91 162.64"
          />
          <polygon
            class="cls-144"
            points="201 162.7 188.53 179.8 188.53 179.91 201 162.8 201 162.7"
          />
          <polygon
            class="cls-144"
            points="188.53 179.91 188.43 179.85 188.43 179.74 188.53 179.8 188.53 179.91"
          />
          <polygon
            class="cls-164"
            points="201 162.8 188.53 179.91 188.58 179.94 201.06 162.83 201 162.8"
          />
          <polygon
            class="cls-144"
            points="202.48 163.54 190 180.65 190.1 180.71 202.57 163.6 202.48 163.54"
          />
          <polygon
            class="cls-144"
            points="202.57 163.6 190.1 180.71 190.1 180.81 202.57 163.71 202.57 163.6"
          />
          <polygon
            class="cls-144"
            points="190.1 180.81 190 180.76 190 180.65 190.1 180.71 190.1 180.81"
          />
          <polygon
            class="cls-164"
            points="202.57 163.71 190.1 180.81 190.15 180.85 202.63 163.74 202.57 163.71"
          />
          <polygon
            class="cls-144"
            points="204.04 164.45 191.57 181.55 191.66 181.61 204.14 164.51 204.04 164.45"
          />
          <polygon
            class="cls-144"
            points="204.14 164.51 191.66 181.61 191.66 181.72 204.14 164.61 204.14 164.51"
          />
          <polygon
            class="cls-144"
            points="191.66 181.72 191.57 181.66 191.57 181.55 191.66 181.61 191.66 181.72"
          />
          <polygon
            class="cls-164"
            points="204.14 164.61 191.66 181.72 191.72 181.75 204.2 164.65 204.14 164.61"
          />
          <polygon
            class="cls-144"
            points="205.61 165.36 193.13 182.46 193.23 182.52 205.71 165.41 205.61 165.36"
          />
          <polygon
            class="cls-144"
            points="205.71 165.41 193.23 182.52 193.23 182.62 205.71 165.52 205.71 165.41"
          />
          <polygon
            class="cls-144"
            points="193.23 182.62 193.13 182.57 193.13 182.46 193.23 182.52 193.23 182.62"
          />
          <polygon
            class="cls-164"
            points="205.71 165.52 193.23 182.62 193.29 182.66 205.76 165.55 205.71 165.52"
          />
          <polygon
            class="cls-144"
            points="207.18 166.26 194.7 183.36 194.8 183.42 207.28 166.32 207.18 166.26"
          />
          <polygon
            class="cls-144"
            points="207.28 166.32 194.8 183.42 194.8 183.53 207.28 166.42 207.28 166.32"
          />
          <polygon
            class="cls-144"
            points="194.8 183.53 194.7 183.47 194.7 183.36 194.8 183.42 194.8 183.53"
          />
          <polygon
            class="cls-164"
            points="207.28 166.42 194.8 183.53 194.85 183.56 207.33 166.46 207.28 166.42"
          />
          <polygon
            class="cls-144"
            points="208.75 167.17 196.27 184.27 196.37 184.33 208.84 167.22 208.75 167.17"
          />
          <polygon
            class="cls-144"
            points="208.84 167.22 196.37 184.33 196.37 184.44 208.84 167.33 208.84 167.22"
          />
          <polygon
            class="cls-144"
            points="196.37 184.44 196.27 184.38 196.27 184.27 196.37 184.33 196.37 184.44"
          />
          <polygon
            class="cls-164"
            points="208.84 167.33 196.37 184.44 196.42 184.47 208.9 167.36 208.84 167.33"
          />
          <polygon
            class="cls-144"
            points="210.31 168.07 197.84 185.18 197.94 185.23 210.41 168.13 210.31 168.07"
          />
          <polygon
            class="cls-144"
            points="210.41 168.13 197.93 185.23 197.93 185.34 210.41 168.23 210.41 168.13"
          />
          <polygon
            class="cls-144"
            points="197.93 185.34 197.84 185.28 197.84 185.17 197.93 185.23 197.93 185.34"
          />
          <polygon
            class="cls-164"
            points="210.41 168.23 197.93 185.34 197.99 185.37 210.47 168.26 210.41 168.23"
          />
          <polygon
            class="cls-144"
            points="211.88 168.98 199.41 186.08 199.5 186.14 211.98 169.03 211.88 168.98"
          />
          <polygon
            class="cls-144"
            points="211.98 169.03 199.5 186.14 199.5 186.25 211.98 169.14 211.98 169.03"
          />
          <polygon
            class="cls-144"
            points="199.5 186.25 199.41 186.19 199.41 186.08 199.5 186.14 199.5 186.25"
          />
          <polygon
            class="cls-164"
            points="211.98 169.14 199.5 186.25 199.56 186.28 212.03 169.17 211.98 169.14"
          />
          <polygon
            class="cls-144"
            points="213.45 169.88 200.97 186.99 201.07 187.04 213.55 169.94 213.45 169.88"
          />
          <polygon
            class="cls-144"
            points="213.55 169.94 201.07 187.04 201.07 187.15 213.55 170.04 213.55 169.94"
          />
          <polygon
            class="cls-144"
            points="201.07 187.15 200.97 187.09 200.97 186.98 201.07 187.04 201.07 187.15"
          />
          <polygon
            class="cls-164"
            points="213.55 170.04 201.07 187.15 201.13 187.18 213.6 170.08 213.55 170.04"
          />
          <polygon
            class="cls-144"
            points="215.02 170.79 202.54 187.89 202.64 187.95 215.12 170.84 215.02 170.79"
          />
          <polygon
            class="cls-144"
            points="215.12 170.84 202.64 187.95 202.64 188.06 215.12 170.95 215.12 170.84"
          />
          <polygon
            class="cls-144"
            points="202.64 188.06 202.54 188 202.54 187.89 202.64 187.95 202.64 188.06"
          />
          <polygon
            class="cls-164"
            points="215.11 170.95 202.64 188.06 202.69 188.09 215.17 170.98 215.11 170.95"
          />
          <polygon
            class="cls-144"
            points="216.59 171.69 204.11 188.79 204.21 188.85 216.68 171.75 216.59 171.69"
          />
          <polygon
            class="cls-144"
            points="216.68 171.75 204.21 188.85 204.21 188.96 216.68 171.85 216.68 171.75"
          />
          <polygon
            class="cls-144"
            points="204.21 188.96 204.11 188.9 204.11 188.79 204.21 188.85 204.21 188.96"
          />
          <polygon
            class="cls-164"
            points="216.68 171.85 204.21 188.96 204.26 188.99 216.74 171.89 216.68 171.85"
          />
          <polygon
            class="cls-144"
            points="213.38 165.34 200.91 162.64 201 162.7 213.48 165.4 213.38 165.34"
          />
          <polygon
            class="cls-144"
            points="213.48 165.4 201 162.7 201 162.8 213.48 165.5 213.48 165.4"
          />
          <polygon
            class="cls-164"
            points="213.48 165.5 201 162.8 201.06 162.83 213.53 165.54 213.48 165.5"
          />
          <polygon
            class="cls-144"
            points="214.94 166.25 202.47 163.54 202.57 163.6 215.04 166.3 214.94 166.25"
          />
          <polygon
            class="cls-144"
            points="215.04 166.3 202.57 163.6 202.57 163.71 215.04 166.41 215.04 166.3"
          />
          <polygon
            class="cls-164"
            points="215.04 166.41 202.57 163.71 202.63 163.74 215.1 166.44 215.04 166.41"
          />
          <polygon
            class="cls-144"
            points="216.51 167.15 204.04 164.45 204.14 164.51 216.61 167.21 216.51 167.15"
          />
          <polygon
            class="cls-144"
            points="216.61 167.21 204.14 164.51 204.14 164.61 216.61 167.31 216.61 167.21"
          />
          <polygon
            class="cls-164"
            points="216.61 167.31 204.14 164.61 204.19 164.64 216.67 167.35 216.61 167.31"
          />
          <polygon
            class="cls-144"
            points="218.08 168.06 205.61 165.36 205.71 165.41 218.18 168.11 218.08 168.06"
          />
          <polygon
            class="cls-144"
            points="218.18 168.11 205.71 165.41 205.71 165.52 218.18 168.22 218.18 168.11"
          />
          <polygon
            class="cls-164"
            points="218.18 168.22 205.71 165.52 205.76 165.55 218.24 168.25 218.18 168.22"
          />
          <polygon
            class="cls-144"
            points="219.65 168.96 207.18 166.26 207.28 166.32 219.75 169.02 219.65 168.96"
          />
          <polygon
            class="cls-144"
            points="219.75 169.02 207.28 166.32 207.28 166.42 219.75 169.13 219.75 169.02"
          />
          <polygon
            class="cls-164"
            points="219.75 169.13 207.28 166.42 207.33 166.45 219.8 169.16 219.75 169.13"
          />
          <polygon
            class="cls-144"
            points="221.21 169.87 208.75 167.17 208.84 167.22 221.32 169.92 221.21 169.87"
          />
          <polygon
            class="cls-144"
            points="221.32 169.92 208.84 167.22 208.84 167.33 221.32 170.03 221.32 169.92"
          />
          <polygon
            class="cls-164"
            points="221.31 170.03 208.84 167.33 208.9 167.36 221.37 170.06 221.31 170.03"
          />
          <polygon
            class="cls-144"
            points="222.78 170.77 210.31 168.07 210.41 168.13 222.88 170.83 222.78 170.77"
          />
          <polygon
            class="cls-144"
            points="222.88 170.83 210.41 168.13 210.41 168.23 222.88 170.94 222.88 170.83"
          />
          <polygon
            class="cls-164"
            points="222.88 170.94 210.41 168.23 210.47 168.26 222.94 170.97 222.88 170.94"
          />
          <polygon
            class="cls-144"
            points="224.35 171.68 211.88 168.98 211.98 169.03 224.45 171.73 224.35 171.68"
          />
          <polygon
            class="cls-144"
            points="224.45 171.73 211.98 169.03 211.98 169.14 224.45 171.84 224.45 171.73"
          />
          <polygon
            class="cls-164"
            points="224.45 171.84 211.98 169.14 212.03 169.17 224.51 171.87 224.45 171.84"
          />
          <polygon
            class="cls-144"
            points="225.92 172.58 213.45 169.88 213.55 169.94 226.02 172.64 225.92 172.58"
          />
          <polygon
            class="cls-144"
            points="226.02 172.64 213.55 169.94 213.55 170.04 226.02 172.75 226.02 172.64"
          />
          <polygon
            class="cls-164"
            points="226.02 172.75 213.55 170.04 213.6 170.07 226.07 172.78 226.02 172.75"
          />
          <polygon
            class="cls-144"
            points="227.49 173.49 215.02 170.79 215.12 170.84 227.59 173.54 227.49 173.49"
          />
          <polygon
            class="cls-144"
            points="227.59 173.54 215.12 170.84 215.12 170.95 227.59 173.65 227.59 173.54"
          />
          <polygon
            class="cls-164"
            points="227.59 173.65 215.12 170.95 215.17 170.98 227.64 173.68 227.59 173.65"
          />
          <polygon
            class="cls-144"
            points="229.05 174.39 216.59 171.69 216.68 171.75 229.16 174.45 229.05 174.39"
          />
          <polygon
            class="cls-144"
            points="229.16 174.45 216.68 171.75 216.68 171.85 229.16 174.56 229.16 174.45"
          />
          <polygon
            class="cls-164"
            points="229.15 174.56 216.68 171.85 216.74 171.89 229.21 174.59 229.15 174.56"
          />
          <polygon
            class="cls-138"
            points="214.84 169.87 214.84 169.95 216.44 170.88 216.44 170.79 214.84 169.87"
          />
          <polygon
            class="cls-144"
            points="216.44 170.79 216.44 170.88 219.04 171.32 219.04 171.23 216.44 170.79"
          />
          <polygon
            class="cls-141"
            points="219.04 171.23 216.44 170.79 214.84 169.87 217.49 170.33 219.04 171.23"
          />
          <polygon
            class="cls-165"
            points="216.46 170.75 215.1 169.96 217.47 170.38 218.79 171.14 216.46 170.75"
          />
          <polygon
            class="cls-151"
            points="215.1 168.81 217.42 167.43 218.78 168.22 216.46 169.6 215.1 168.81"
          />
          <polygon
            class="cls-131"
            points="216.46 170.75 215.1 169.96 215.1 168.81 216.46 169.6 216.46 170.75"
          />
          <polygon
            class="cls-137"
            points="218.79 171.14 216.46 170.75 216.46 169.6 218.78 168.22 218.79 171.14"
          />
          <polygon
            class="cls-144"
            points="216.46 169.31 218.83 167.91 218.83 168.22 216.46 169.62 216.46 169.31"
          />
          <polygon
            class="cls-138"
            points="215.05 168.5 217.42 167.09 218.83 167.91 216.46 169.31 215.05 168.5"
          />
          <polygon
            class="cls-152"
            points="215.77 168.5 217.42 167.51 218.11 167.91 216.46 168.9 215.77 168.5"
          />
          <polygon
            class="cls-138"
            points="215.05 168.5 215.05 168.81 216.46 169.62 216.46 169.31 215.05 168.5"
          />
          <g class="cls-153">
            <polygon
              class="cls-3"
              points="216.46 169.62 216.46 169.68 218.78 168.3 218.78 168.24 216.46 169.62"
            />
            <polygon
              class="cls-3"
              points="215.1 168.89 216.46 169.68 216.46 169.62 215.1 168.84 215.1 168.89"
            />
          </g>
          <polygon
            class="cls-3"
            points="216.02 168.46 215.71 168.46 215.64 168.5 215.71 168.53 216.03 168.53 216.63 168.88 216.46 168.88 216.4 168.92 216.46 168.96 216.76 168.96 216.92 169.04 218.83 167.91 217.08 166.89 216.02 168.46"
          />
          <polygon
            class="cls-141"
            points="215.71 168.53 215.64 168.5 215.64 168.27 215.71 168.31 215.71 168.53"
          />
          <polygon
            class="cls-144"
            points="215.77 168.5 215.71 168.53 215.71 168.31 215.77 168.27 215.77 168.5"
          />
          <polygon
            class="cls-141"
            points="216.46 168.96 216.4 168.92 216.4 168.69 216.46 168.73 216.46 168.96"
          />
          <polygon
            class="cls-144"
            points="216.53 168.92 216.46 168.96 216.46 168.73 216.53 168.69 216.53 168.92"
          />
          <polygon
            class="cls-141"
            points="218.18 167.94 218.11 167.91 218.11 167.68 218.18 167.72 218.18 167.94"
          />
          <polygon
            class="cls-144"
            points="218.24 167.91 218.18 167.94 218.18 167.72 218.24 167.68 218.24 167.91"
          />
          <polygon
            class="cls-144"
            points="216.46 168.47 218.83 167.06 218.83 167.37 216.46 168.78 216.46 168.47"
          />
          <polygon
            class="cls-141"
            points="215.05 167.66 215.05 167.97 216.46 168.78 216.46 168.47 215.05 167.66"
          />
          <polygon
            class="cls-144"
            points="218.83 167.06 217.42 166.25 216.83 167.51 218.83 167.06"
          />
          <polygon
            class="cls-141"
            points="217.42 166.25 217.42 166.25 215.05 167.66 217.1 166.94 217.42 166.25"
          />
          <polygon
            class="cls-138"
            points="215.05 167.65 216.46 168.47 217.1 166.94 215.05 167.65"
          />
          <polygon
            class="cls-141"
            points="217.1 166.94 216.46 168.47 218.83 167.06 217.1 166.94"
          />
          <polygon
            class="cls-136"
            points="193.24 206.63 194.8 207.54 205.72 201.23 204.16 200.33 193.24 206.63"
          />
          <polygon
            class="cls-137"
            points="194.8 207.54 193.24 206.63 193.24 206.86 194.81 207.76 194.8 207.54"
          />
          <polygon
            class="cls-137"
            points="205.72 201.23 194.8 207.54 194.81 207.76 205.72 201.46 205.72 201.23"
          />
          <polygon
            class="cls-131"
            points="220.54 195.61 220.54 205.51 230.68 211.37 230.68 201.46 220.54 195.61"
          />
          <polygon
            class="cls-137"
            points="210.4 195.12 208.84 193.37 208.84 203.26 210.4 202.36 210.4 195.12"
          />
          <polygon
            class="cls-161"
            points="216.9 206.61 209.62 202.41 209.62 202.81 216.9 207.01 216.9 206.61"
          />
          <polygon
            class="cls-162"
            points="216.96 206.57 209.69 202.37 209.62 202.41 216.9 206.61 216.96 206.57"
          />
          <polygon
            class="cls-163"
            points="217 206.56 209.72 202.35 209.62 202.41 209.69 202.41 216.93 206.59 217 206.56"
          />
          <polygon
            class="cls-161"
            points="216.9 206.1 209.62 201.9 209.62 202.3 216.9 206.5 216.9 206.1"
          />
          <polygon
            class="cls-162"
            points="216.96 206.06 209.69 201.86 209.62 201.9 216.9 206.1 216.96 206.06"
          />
          <polygon
            class="cls-163"
            points="217 206.04 209.72 201.84 209.62 201.9 209.69 201.9 216.93 206.08 217 206.04"
          />
          <polygon
            class="cls-161"
            points="216.9 205.59 209.62 201.39 209.62 201.79 216.9 205.99 216.9 205.59"
          />
          <polygon
            class="cls-162"
            points="216.96 205.56 209.69 201.35 209.62 201.39 216.9 205.59 216.96 205.56"
          />
          <polygon
            class="cls-163"
            points="217 205.53 209.72 201.33 209.62 201.39 209.69 201.39 216.93 205.57 217 205.53"
          />
          <polygon
            class="cls-161"
            points="216.9 205.08 209.62 200.88 209.62 201.28 216.9 205.48 216.9 205.08"
          />
          <polygon
            class="cls-162"
            points="216.96 205.04 209.69 200.84 209.62 200.88 216.9 205.08 216.96 205.04"
          />
          <polygon
            class="cls-163"
            points="217 205.03 209.72 200.82 209.62 200.88 209.69 200.88 216.93 205.06 217 205.03"
          />
          <polygon
            class="cls-161"
            points="216.9 204.57 209.62 200.37 209.62 200.77 216.9 204.97 216.9 204.57"
          />
          <polygon
            class="cls-162"
            points="216.96 204.53 209.69 200.33 209.62 200.37 216.9 204.57 216.96 204.53"
          />
          <polygon
            class="cls-163"
            points="217 204.51 209.72 200.31 209.62 200.37 209.69 200.37 216.93 204.55 217 204.51"
          />
          <polygon
            class="cls-161"
            points="216.9 204.06 209.62 199.86 209.62 200.26 216.9 204.46 216.9 204.06"
          />
          <polygon
            class="cls-162"
            points="216.96 204.03 209.69 199.82 209.62 199.86 216.9 204.06 216.96 204.03"
          />
          <polygon
            class="cls-163"
            points="217 204 209.72 199.8 209.62 199.86 209.69 199.86 216.93 204.04 217 204"
          />
          <polygon
            class="cls-161"
            points="216.9 203.55 209.62 199.35 209.62 199.75 216.9 203.95 216.9 203.55"
          />
          <polygon
            class="cls-162"
            points="216.96 203.51 209.69 199.31 209.62 199.35 216.9 203.55 216.96 203.51"
          />
          <polygon
            class="cls-163"
            points="217 203.5 209.72 199.29 209.62 199.35 209.69 199.35 216.93 203.53 217 203.5"
          />
          <polygon
            class="cls-161"
            points="216.9 203.04 209.62 198.84 209.62 199.24 216.9 203.44 216.9 203.04"
          />
          <polygon
            class="cls-162"
            points="216.96 203 209.69 198.81 209.62 198.84 216.9 203.04 216.96 203"
          />
          <polygon
            class="cls-163"
            points="217 202.99 209.72 198.78 209.62 198.84 209.69 198.84 216.93 203.02 217 202.99"
          />
          <polygon
            class="cls-161"
            points="216.9 202.53 209.62 198.33 209.62 198.73 216.9 202.93 216.9 202.53"
          />
          <polygon
            class="cls-162"
            points="216.96 202.5 209.69 198.29 209.62 198.33 216.9 202.53 216.96 202.5"
          />
          <polygon
            class="cls-163"
            points="217 202.47 209.72 198.28 209.62 198.33 209.69 198.33 216.93 202.51 217 202.47"
          />
          <polygon
            class="cls-161"
            points="216.9 202.02 209.62 197.82 209.62 198.22 216.9 202.42 216.9 202.02"
          />
          <polygon
            class="cls-162"
            points="216.96 201.99 209.69 197.78 209.62 197.82 216.9 202.02 216.96 201.99"
          />
          <polygon
            class="cls-163"
            points="217 201.97 209.72 197.76 209.62 197.82 209.69 197.82 216.93 202 217 201.97"
          />
          <polygon
            class="cls-161"
            points="216.9 201.51 209.62 197.31 209.62 197.71 216.9 201.91 216.9 201.51"
          />
          <polygon
            class="cls-162"
            points="216.96 201.47 209.69 197.27 209.62 197.31 216.9 201.51 216.96 201.47"
          />
          <polygon
            class="cls-163"
            points="217 201.46 209.72 197.25 209.62 197.31 209.69 197.31 216.93 201.49 217 201.46"
          />
          <polygon
            class="cls-161"
            points="216.9 201 209.62 196.8 209.62 197.2 216.9 201.4 216.9 201"
          />
          <polygon
            class="cls-162"
            points="216.96 200.97 209.69 196.76 209.62 196.8 216.9 201 216.96 200.97"
          />
          <polygon
            class="cls-163"
            points="217 200.94 209.72 196.74 209.62 196.8 209.69 196.8 216.93 200.98 217 200.94"
          />
          <polygon
            class="cls-161"
            points="216.9 200.49 209.62 196.29 209.62 196.69 216.9 200.89 216.9 200.49"
          />
          <polygon
            class="cls-162"
            points="216.96 200.46 209.69 196.25 209.62 196.29 216.9 200.49 216.96 200.46"
          />
          <polygon
            class="cls-163"
            points="217 200.44 209.72 196.23 209.62 196.29 209.69 196.29 216.93 200.47 217 200.44"
          />
          <polygon
            class="cls-161"
            points="216.9 199.98 209.62 195.78 209.62 196.18 216.9 200.38 216.9 199.98"
          />
          <polygon
            class="cls-162"
            points="216.96 199.94 209.69 195.74 209.62 195.78 216.9 199.98 216.96 199.94"
          />
          <polygon
            class="cls-163"
            points="217 199.93 209.72 195.72 209.62 195.78 209.69 195.78 216.93 199.96 217 199.93"
          />
          <polygon
            class="cls-161"
            points="216.9 199.47 209.62 195.27 209.62 195.67 216.9 199.87 216.9 199.47"
          />
          <polygon
            class="cls-162"
            points="216.96 199.44 209.69 195.23 209.62 195.27 216.9 199.47 216.96 199.44"
          />
          <polygon
            class="cls-163"
            points="217 199.41 209.72 195.21 209.62 195.27 209.69 195.27 216.93 199.45 217 199.41"
          />
          <polygon
            class="cls-161"
            points="216.9 198.96 209.62 194.76 209.62 195.16 216.9 199.36 216.9 198.96"
          />
          <polygon
            class="cls-162"
            points="216.96 198.93 209.69 194.72 209.62 194.76 216.9 198.96 216.96 198.93"
          />
          <polygon
            class="cls-163"
            points="217 198.91 209.72 194.7 209.62 194.76 209.69 194.76 216.93 198.94 217 198.91"
          />
          <polygon
            class="cls-131"
            points="217.42 197.41 207.28 191.56 207.28 202.36 208.84 203.26 208.84 196.06 215.86 200.11 215.86 207.31 217.42 208.21 217.42 197.41"
          />
          <polygon
            class="cls-137"
            points="220.54 195.61 217.42 197.41 217.42 208.21 220.54 206.41 220.54 195.61"
          />
          <path class="cls-139" d="M225.47,205.36v-4.07l3.53,2v4.08Z" />
          <polygon
            class="cls-140"
            points="225.4 201.19 225.4 205.41 229.06 207.52 229.06 203.3 225.4 201.19"
          />
          <path
            class="cls-141"
            d="M229.12,203.26l-3.9-2.25v4.49l3.9,2.26Zm-3.78,2.18v-4.23l3.66,2.11v4.23Z"
          />
          <polygon
            class="cls-142"
            points="225.34 201.21 225.34 205.44 229 207.55 229 203.32 225.34 201.21"
          />
          <polygon
            class="cls-144"
            points="225.47 205.36 225.34 205.44 225.34 201.21 225.47 201.28 225.47 205.36"
          />
          <polygon
            class="cls-144"
            points="225.34 205.44 225.47 205.36 229 207.4 229 207.55 225.34 205.44"
          />
          <polygon
            class="cls-3"
            points="225.6 205.44 225.34 205.44 225.47 205.36 225.47 201.28 225.6 201.36 225.6 205.44"
          />
          <polygon
            class="cls-136"
            points="227.56 213.16 217.42 207.31 220.54 205.51 230.68 211.36 227.56 213.16"
          />
          <polygon
            class="cls-131"
            points="217.42 207.31 217.42 208.21 227.56 214.06 227.56 213.16 217.42 207.31"
          />
          <polygon
            class="cls-137"
            points="230.68 211.36 227.56 213.16 227.56 214.06 230.68 212.26 230.68 211.36"
          />
          <polygon
            class="cls-136"
            points="249.39 200.56 239.25 194.71 242.37 192.91 252.51 198.76 249.39 200.56"
          />
          <polygon
            class="cls-131"
            points="239.25 194.71 239.25 195.61 249.39 201.46 249.39 200.56 239.25 194.71"
          />
          <polygon
            class="cls-137"
            points="252.51 198.76 249.39 200.56 249.39 201.46 252.51 199.66 252.51 198.76"
          />
          <polygon
            class="cls-133"
            points="224.44 200.56 221.32 198.76 221.32 205.96 224.44 207.76 224.44 200.56"
          />
          <polygon
            class="cls-134"
            points="224.34 200.62 221.41 198.93 221.41 206.02 221.46 206.04 221.46 206.02 221.46 199.01 224.29 200.64 224.29 207.65 224.29 207.68 224.34 207.71 224.34 200.62"
          />
          <polygon
            class="cls-3"
            points="223.27 206.19 222.49 205.74 222.49 200.34 223.27 200.78 223.27 206.19"
          />
          <polygon
            class="cls-142"
            points="223.27 206.19 222.49 205.74 222.49 200.34 223.27 200.78 223.27 206.19"
          />
          <polygon
            class="cls-135"
            points="222.57 200.38 222.49 200.34 222.49 205.74 222.57 205.69 222.57 200.38"
          />
          <polygon
            class="cls-135"
            points="222.57 205.69 222.49 205.74 223.27 206.19 223.27 206.1 222.57 205.69"
          />
          <polygon
            class="cls-166"
            points="222.57 200.38 222.57 205.69 222.49 205.74 222.64 205.74 222.64 200.5 223.27 200.86 223.27 200.78 222.57 200.38"
          />
          <polygon
            class="cls-3"
            points="221.72 202.95 221.7 202.91 221.64 202.87 221.64 202.91 221.67 202.96 221.67 203.92 221.64 203.9 221.64 203.94 221.67 203.99 221.7 204.05 221.72 204.06 221.72 202.95"
          />
          <polygon
            class="cls-136"
            points="221.7 203.94 221.64 203.9 221.61 203.92 221.67 203.95 221.7 203.94"
          />
          <polygon
            class="cls-131"
            points="221.64 202.95 221.57 202.91 221.57 203.97 221.64 204.01 221.64 202.95"
          />
          <polygon
            class="cls-136"
            points="221.64 202.87 221.7 202.91 221.67 202.93 221.64 202.95 221.57 202.91 221.61 202.89 221.64 202.87"
          />
          <polygon
            class="cls-137"
            points="221.64 202.95 221.64 204.01 221.67 203.99 221.7 203.97 221.7 203.94 221.67 203.95 221.67 202.96 221.7 202.95 221.7 202.91 221.67 202.93 221.64 202.95"
          />
          <polygon
            class="cls-3"
            points="227.56 212.26 226.78 212.71 226.78 212.71 226.78 212.71 228.34 212.71 229.12 212.26 227.56 212.26"
          />
          <polygon
            class="cls-3"
            points="223.66 203.69 230.68 207.76 230.68 201.46 220.54 201.01 220.54 205.51 217.42 207.31 223.66 207.31 223.66 203.69"
          />
          <polygon
            class="cls-131"
            points="219.76 207.76 219.76 208.21 226.39 212.04 226.78 211.81 219.76 207.76"
          />
          <polygon
            class="cls-137"
            points="218.98 209.11 219.76 208.66 219.76 207.76 218.98 208.21 218.98 209.11"
          />
          <polygon
            class="cls-136"
            points="219.76 208.21 219.37 208.44 226 212.26 226.39 212.04 219.76 208.21"
          />
          <polygon
            class="cls-136"
            points="219.37 208.89 218.98 209.11 226 213.16 226 212.71 219.37 208.89"
          />
          <polygon
            class="cls-131"
            points="219.37 208.44 219.37 208.89 226 212.71 226 212.26 219.37 208.44"
          />
          <polygon
            class="cls-3"
            points="218.98 209.11 219.76 209.11 219.76 208.66 220.15 208.44 219.76 207.76 219.76 208.21 219.37 208.44 219.37 208.89 218.98 209.11"
          />
          <polygon
            class="cls-136"
            points="241.59 178.05 243.15 177.15 241.59 176.25 240.03 177.15 241.59 178.05"
          />
          <polygon
            class="cls-131"
            points="241.59 182.55 241.59 178.05 240.04 177.15 240.03 181.65 241.59 182.55"
          />
          <polygon
            class="cls-137"
            points="241.59 182.55 243.15 181.65 243.15 177.15 241.59 178.05 241.59 182.55"
          />
          <polygon
            class="cls-136"
            points="233.01 183.9 241.59 178.95 240.03 178.05 231.46 183 233.01 183.9"
          />
          <polygon
            class="cls-131"
            points="233.01 187.5 233.01 183.9 231.46 183 231.46 186.6 233.01 187.5"
          />
          <polygon
            class="cls-137"
            points="233.01 187.5 241.59 182.55 241.59 178.95 233.01 183.9 233.01 187.5"
          />
          <polygon
            class="cls-3"
            points="249.39 200.56 239.25 194.71 242.37 192.91 252.51 198.76 249.39 200.56"
          />
          <polygon
            class="cls-131"
            points="227.56 203.27 226.78 202.82 226.78 212.71 227.56 213.16 227.56 203.27"
          />
          <polygon
            class="cls-137"
            points="228.34 202.81 227.56 203.26 227.56 213.16 228.34 212.71 228.34 202.81"
          />
          <polygon
            class="cls-131"
            points="251.73 189.31 250.95 188.85 250.95 198.76 251.73 199.21 251.73 189.31"
          />
          <polygon
            class="cls-3"
            points="251.73 189.31 250.95 188.85 250.95 198.76 251.73 199.21 251.73 189.31"
          />
          <polygon
            class="cls-137"
            points="252.51 188.85 251.73 189.31 251.73 199.21 252.51 198.76 252.51 188.85"
          />
          <polygon
            class="cls-137"
            points="249.39 190.66 230.68 201.46 230.68 212.26 249.39 201.46 249.39 190.66"
          />
          <polygon
            class="cls-137"
            points="207.28 191.56 207.28 202.36 205.72 203.26 205.72 192.81 219.76 173.55 233.79 176.59 233.79 187.06 207.28 191.56"
          />
          <polygon
            class="cls-138"
            points="207.28 191.56 226 202.36 238.47 185.25 219.76 174.45 207.28 191.56"
          />
          <polygon
            class="cls-141"
            points="219.76 174.45 238.47 185.25 250.95 187.96 232.24 177.15 219.76 174.45"
          />
          <polygon
            class="cls-144"
            points="233.69 177.89 221.22 175.19 221.32 175.24 233.79 177.94 233.69 177.89"
          />
          <polygon
            class="cls-144"
            points="233.79 177.94 221.32 175.24 221.32 175.35 233.79 178.05 233.79 177.94"
          />
          <polygon
            class="cls-164"
            points="233.79 178.05 221.32 175.35 221.37 175.38 233.85 178.08 233.79 178.05"
          />
          <polygon
            class="cls-144"
            points="235.26 178.79 222.79 176.09 222.89 176.15 235.36 178.85 235.26 178.79"
          />
          <polygon
            class="cls-144"
            points="235.36 178.85 222.89 176.15 222.89 176.25 235.36 178.96 235.36 178.85"
          />
          <polygon
            class="cls-164"
            points="235.36 178.96 222.89 176.25 222.94 176.29 235.41 178.99 235.36 178.96"
          />
          <polygon
            class="cls-144"
            points="236.82 179.7 224.36 177 224.45 177.05 236.93 179.76 236.82 179.7"
          />
          <polygon
            class="cls-144"
            points="236.93 179.76 224.45 177.05 224.45 177.16 236.93 179.86 236.93 179.76"
          />
          <polygon
            class="cls-164"
            points="236.93 179.86 224.45 177.16 224.51 177.19 236.98 179.9 236.93 179.86"
          />
          <polygon
            class="cls-144"
            points="238.39 180.6 225.92 177.9 226.02 177.96 238.49 180.66 238.39 180.6"
          />
          <polygon
            class="cls-144"
            points="238.49 180.66 226.02 177.96 226.02 178.06 238.49 180.77 238.49 180.66"
          />
          <polygon
            class="cls-164"
            points="238.49 180.77 226.02 178.06 226.08 178.1 238.55 180.8 238.49 180.77"
          />
          <polygon
            class="cls-144"
            points="239.96 181.51 227.49 178.81 227.59 178.86 240.06 181.57 239.96 181.51"
          />
          <polygon
            class="cls-144"
            points="240.06 181.57 227.59 178.86 227.59 178.97 240.06 181.67 240.06 181.57"
          />
          <polygon
            class="cls-164"
            points="240.06 181.67 227.59 178.97 227.65 179 240.12 181.71 240.06 181.67"
          />
          <polygon
            class="cls-144"
            points="241.53 182.41 229.06 179.71 229.16 179.77 241.63 182.47 241.53 182.41"
          />
          <polygon
            class="cls-144"
            points="241.63 182.47 229.16 179.77 229.16 179.88 241.63 182.58 241.63 182.47"
          />
          <polygon
            class="cls-164"
            points="241.63 182.58 229.16 179.88 229.21 179.91 241.69 182.61 241.63 182.58"
          />
          <polygon
            class="cls-144"
            points="243.1 183.32 230.63 180.62 230.72 180.68 243.2 183.38 243.1 183.32"
          />
          <polygon
            class="cls-144"
            points="243.2 183.38 230.72 180.68 230.72 180.78 243.2 183.48 243.2 183.38"
          />
          <polygon
            class="cls-164"
            points="243.2 183.48 230.72 180.78 230.78 180.81 243.25 183.52 243.2 183.48"
          />
          <polygon
            class="cls-144"
            points="244.66 184.22 232.2 181.52 232.29 181.58 244.77 184.28 244.66 184.22"
          />
          <polygon
            class="cls-144"
            points="244.77 184.28 232.29 181.58 232.29 181.69 244.77 184.39 244.77 184.28"
          />
          <polygon
            class="cls-164"
            points="244.76 184.39 232.29 181.69 232.35 181.72 244.82 184.42 244.76 184.39"
          />
          <polygon
            class="cls-144"
            points="246.23 185.13 233.76 182.43 233.86 182.49 246.33 185.19 246.23 185.13"
          />
          <polygon
            class="cls-144"
            points="246.33 185.19 233.86 182.49 233.86 182.59 246.33 185.29 246.33 185.19"
          />
          <polygon
            class="cls-164"
            points="246.33 185.29 233.86 182.59 233.92 182.62 246.39 185.33 246.33 185.29"
          />
          <polygon
            class="cls-144"
            points="247.8 186.04 235.33 183.33 235.43 183.39 247.9 186.09 247.8 186.04"
          />
          <polygon
            class="cls-144"
            points="247.9 186.09 235.43 183.39 235.43 183.5 247.9 186.2 247.9 186.09"
          />
          <polygon
            class="cls-164"
            points="247.9 186.2 235.43 183.5 235.49 183.53 247.96 186.23 247.9 186.2"
          />
          <polygon
            class="cls-144"
            points="249.37 186.94 236.9 184.24 237 184.3 249.47 187 249.37 186.94"
          />
          <polygon
            class="cls-144"
            points="249.47 187 237 184.3 237 184.4 249.47 187.1 249.47 187"
          />
          <polygon
            class="cls-164"
            points="249.47 187.1 237 184.4 237.05 184.43 249.52 187.14 249.47 187.1"
          />
          <polygon
            class="cls-131"
            points="252.51 187.95 239.55 185.91 238.48 184.35 250.95 187.05 252.51 187.95"
          />
          <polygon
            class="cls-131"
            points="240.04 185.25 238.48 184.35 226 201.46 227.56 202.36 240.04 185.25"
          />
          <polygon
            class="cls-131"
            points="227.56 203.26 227.56 202.36 226 201.46 226 202.36 217.42 197.41 217.42 199.21 227.56 205.06 227.56 203.26 227.56 203.26"
          />
          <polygon
            class="cls-138"
            points="226 203.26 207.28 192.46 207.28 191.56 226 202.36 226 203.26"
          />
          <polygon
            class="cls-131"
            points="205.72 203.26 204.16 202.36 204.16 191.9 205.72 192.81 205.72 203.26"
          />
          <polygon
            class="cls-136"
            points="197.14 204.61 205.72 199.66 204.16 198.76 195.58 203.71 197.14 204.61"
          />
          <polygon
            class="cls-137"
            points="197.14 208.21 205.72 203.26 205.72 199.66 197.14 204.61 197.14 208.21"
          />
          <polygon
            class="cls-136"
            points="196.37 204.16 197.92 203.26 196.37 202.36 194.81 203.26 196.37 204.16"
          />
          <polygon
            class="cls-131"
            points="196.37 208.66 196.37 204.16 194.81 203.26 194.81 207.76 196.37 208.66"
          />
          <polygon
            class="cls-137"
            points="196.37 208.66 197.93 207.76 197.92 203.26 196.37 204.16 196.37 208.66"
          />
          <polygon
            class="cls-3"
            points="220.5 174.88 219.76 174.45 207.28 191.56 207.28 202.36 208.84 203.26 208.84 194.61 208.3 192.13 208.84 190.66 220.5 174.88"
          />
          <polygon
            class="cls-137"
            points="230.68 212.26 230.68 201.46 227.56 203.26 227.56 202.36 240.03 185.25 252.51 187.96 252.51 188.86 249.39 190.66 249.38 201.46 230.68 212.26"
          />
          <path class="cls-139" d="M241.71,202v-4.07l3.53-2V200Z" />
          <polygon
            class="cls-140"
            points="245.31 195.79 245.31 200.02 241.65 202.13 241.65 197.91 245.31 195.79"
          />
          <path
            class="cls-141"
            d="M241.59,202.36l3.9-2.25v-4.5l-3.9,2.26Zm.12-.21v-4.22l3.66-2.11V200Z"
          />
          <polygon
            class="cls-142"
            points="245.37 195.81 245.37 200.04 241.71 202.15 241.71 197.93 245.37 195.81"
          />
          <polygon
            class="cls-144"
            points="245.24 199.97 245.37 200.04 245.37 195.81 245.24 195.89 245.24 199.97"
          />
          <polygon
            class="cls-144"
            points="245.37 200.04 245.24 199.97 241.71 202 241.71 202.15 245.37 200.04"
          />
          <path class="cls-139" d="M234.69,206.05V202l3.53-2V204Z" />
          <polygon
            class="cls-140"
            points="238.29 199.84 238.29 204.06 234.63 206.17 234.63 201.95 238.29 199.84"
          />
          <path
            class="cls-141"
            d="M234.57,206.4l3.9-2.25v-4.49l-3.9,2.25Zm.12-.2V202l3.66-2.11v4.23Z"
          />
          <polygon
            class="cls-142"
            points="238.35 199.86 238.35 204.09 234.69 206.2 234.69 201.97 238.35 199.86"
          />
          <polygon
            class="cls-144"
            points="238.22 204.01 238.35 204.09 238.35 199.86 238.22 199.93 238.22 204.01"
          />
          <polygon
            class="cls-144"
            points="238.35 204.09 238.22 204.01 234.69 206.05 234.69 206.2 238.35 204.09"
          />
          <polygon
            class="cls-3"
            points="233.01 177.6 220.5 174.88 219.76 174.45 232.24 177.15 233.01 177.6"
          />
          <polygon
            class="cls-136"
            points="196.36 208.44 197.92 209.34 208.84 203.03 207.28 202.13 196.36 208.44"
          />
          <polygon
            class="cls-137"
            points="197.92 209.34 196.36 208.44 196.36 208.66 197.93 209.56 197.92 209.34"
          />
          <polygon
            class="cls-137"
            points="208.84 203.03 197.92 209.34 197.93 209.56 208.84 203.26 208.84 203.03"
          />
          <polygon
            class="cls-3"
            points="210.79 203.49 210.4 202.16 210.4 203.26 209.62 202.81 208.84 203.26 208.84 203.03 207.28 202.13 196.36 208.44 199.48 208.44 199.48 208.66 199.48 208.66 197.93 209.56 198.32 209.56 199.88 208.66 204.15 208.66 204.16 208.66 205.72 207.76 204.55 207.09 210.79 203.49"
          />
          <polygon
            class="cls-144"
            points="221.22 175.19 208.74 192.29 208.84 192.35 221.32 175.24 221.22 175.19"
          />
          <polygon
            class="cls-144"
            points="221.32 175.24 208.84 192.35 208.84 192.46 221.32 175.35 221.32 175.24"
          />
          <polygon
            class="cls-144"
            points="208.84 192.46 208.74 192.4 208.74 192.29 208.84 192.35 208.84 192.46"
          />
          <polygon
            class="cls-164"
            points="221.32 175.35 208.84 192.46 208.9 192.49 221.37 175.38 221.32 175.35"
          />
          <polygon
            class="cls-144"
            points="222.79 176.09 210.31 193.2 210.41 193.25 222.88 176.15 222.79 176.09"
          />
          <polygon
            class="cls-144"
            points="222.88 176.15 210.41 193.25 210.41 193.36 222.89 176.25 222.88 176.15"
          />
          <polygon
            class="cls-144"
            points="210.41 193.36 210.31 193.3 210.31 193.2 210.41 193.25 210.41 193.36"
          />
          <polygon
            class="cls-164"
            points="222.88 176.25 210.41 193.36 210.46 193.39 222.94 176.29 222.88 176.25"
          />
          <polygon
            class="cls-144"
            points="224.36 177 211.88 194.1 211.98 194.16 224.45 177.05 224.36 177"
          />
          <polygon
            class="cls-144"
            points="224.45 177.05 211.98 194.16 211.98 194.27 224.45 177.16 224.45 177.05"
          />
          <polygon
            class="cls-144"
            points="211.98 194.27 211.88 194.21 211.88 194.1 211.98 194.16 211.98 194.27"
          />
          <polygon
            class="cls-164"
            points="224.45 177.16 211.98 194.27 212.03 194.3 224.51 177.19 224.45 177.16"
          />
          <polygon
            class="cls-144"
            points="225.92 177.9 213.45 195.01 213.54 195.07 226.02 177.96 225.92 177.9"
          />
          <polygon
            class="cls-144"
            points="226.02 177.96 213.54 195.07 213.54 195.17 226.02 178.07 226.02 177.96"
          />
          <polygon
            class="cls-144"
            points="213.54 195.17 213.45 195.11 213.45 195.01 213.54 195.07 213.54 195.17"
          />
          <polygon
            class="cls-164"
            points="226.02 178.06 213.54 195.17 213.6 195.2 226.08 178.1 226.02 178.06"
          />
          <polygon
            class="cls-144"
            points="227.49 178.81 215.01 195.91 215.11 195.97 227.59 178.86 227.49 178.81"
          />
          <polygon
            class="cls-144"
            points="227.59 178.86 215.11 195.97 215.11 196.08 227.59 178.97 227.59 178.86"
          />
          <polygon
            class="cls-144"
            points="215.11 196.08 215.01 196.02 215.01 195.91 215.11 195.97 215.11 196.08"
          />
          <polygon
            class="cls-164"
            points="227.59 178.97 215.11 196.08 215.17 196.11 227.64 179 227.59 178.97"
          />
          <polygon
            class="cls-144"
            points="229.06 179.71 216.58 196.82 216.68 196.88 229.16 179.77 229.06 179.71"
          />
          <polygon
            class="cls-144"
            points="229.16 179.77 216.68 196.88 216.68 196.98 229.16 179.88 229.16 179.77"
          />
          <polygon
            class="cls-144"
            points="216.68 196.98 216.58 196.92 216.58 196.82 216.68 196.88 216.68 196.98"
          />
          <polygon
            class="cls-164"
            points="229.16 179.88 216.68 196.98 216.74 197.01 229.21 179.91 229.16 179.88"
          />
          <polygon
            class="cls-144"
            points="230.63 180.62 218.15 197.72 218.25 197.78 230.72 180.68 230.63 180.62"
          />
          <polygon
            class="cls-144"
            points="230.72 180.68 218.25 197.78 218.25 197.89 230.72 180.78 230.72 180.68"
          />
          <polygon
            class="cls-144"
            points="218.25 197.89 218.15 197.83 218.15 197.72 218.25 197.78 218.25 197.89"
          />
          <polygon
            class="cls-164"
            points="230.72 180.78 218.25 197.89 218.3 197.92 230.78 180.81 230.72 180.78"
          />
          <polygon
            class="cls-144"
            points="232.19 181.52 219.72 198.63 219.81 198.69 232.29 181.58 232.19 181.52"
          />
          <polygon
            class="cls-144"
            points="232.29 181.58 219.81 198.69 219.81 198.79 232.29 181.69 232.29 181.58"
          />
          <polygon
            class="cls-144"
            points="219.81 198.79 219.72 198.73 219.72 198.63 219.81 198.69 219.81 198.79"
          />
          <polygon
            class="cls-164"
            points="232.29 181.69 219.81 198.79 219.87 198.82 232.35 181.72 232.29 181.69"
          />
          <polygon
            class="cls-144"
            points="233.76 182.43 221.29 199.53 221.38 199.59 233.86 182.49 233.76 182.43"
          />
          <polygon
            class="cls-144"
            points="233.86 182.49 221.38 199.59 221.38 199.7 233.86 182.59 233.86 182.49"
          />
          <polygon
            class="cls-144"
            points="221.38 199.7 221.29 199.64 221.29 199.53 221.38 199.59 221.38 199.7"
          />
          <polygon
            class="cls-164"
            points="233.86 182.59 221.38 199.7 221.44 199.73 233.91 182.62 233.86 182.59"
          />
          <polygon
            class="cls-144"
            points="235.33 183.33 222.85 200.44 222.95 200.5 235.43 183.39 235.33 183.33"
          />
          <polygon
            class="cls-144"
            points="235.43 183.39 222.95 200.5 222.95 200.6 235.43 183.5 235.43 183.39"
          />
          <polygon
            class="cls-144"
            points="222.95 200.6 222.85 200.54 222.85 200.44 222.95 200.5 222.95 200.6"
          />
          <polygon
            class="cls-164"
            points="235.43 183.5 222.95 200.6 223.01 200.63 235.48 183.53 235.43 183.5"
          />
          <polygon
            class="cls-144"
            points="236.9 184.24 224.42 201.34 224.52 201.4 237 184.3 236.9 184.24"
          />
          <polygon
            class="cls-144"
            points="237 184.3 224.52 201.4 224.52 201.51 237 184.4 237 184.3"
          />
          <polygon
            class="cls-144"
            points="224.52 201.51 224.42 201.45 224.42 201.34 224.52 201.4 224.52 201.51"
          />
          <polygon
            class="cls-164"
            points="236.99 184.4 224.52 201.51 224.57 201.54 237.05 184.43 236.99 184.4"
          />
          <polygon
            class="cls-131"
            points="233.65 176.59 219.62 173.55 218.06 172.65 232.09 175.69 233.65 176.59"
          />
          <polygon
            class="cls-131"
            points="219.76 173.55 218.2 172.65 204.16 191.9 205.72 192.81 219.76 173.55"
          />
          <polygon
            class="cls-138"
            points="224.89 176.85 224.89 176.93 226.5 177.86 226.5 177.77 224.89 176.85"
          />
          <polygon
            class="cls-144"
            points="226.5 177.77 226.5 177.86 229.1 178.3 229.1 178.21 226.5 177.77"
          />
          <polygon
            class="cls-141"
            points="229.1 178.21 226.5 177.77 224.89 176.85 227.54 177.31 229.1 178.21"
          />
          <polygon
            class="cls-165"
            points="226.51 177.72 225.15 176.94 227.52 177.36 228.84 178.12 226.51 177.72"
          />
          <polygon
            class="cls-151"
            points="225.15 175.79 227.47 174.41 228.84 175.2 226.51 176.57 225.15 175.79"
          />
          <polygon
            class="cls-131"
            points="226.51 177.72 225.15 176.94 225.15 175.79 226.51 176.57 226.51 177.72"
          />
          <polygon
            class="cls-137"
            points="228.84 178.12 226.51 177.72 226.51 176.57 228.84 175.2 228.84 178.12"
          />
          <polygon
            class="cls-144"
            points="226.51 176.29 228.88 174.88 228.88 175.2 226.51 176.6 226.51 176.29"
          />
          <polygon
            class="cls-138"
            points="225.11 175.48 227.48 174.07 228.88 174.88 226.51 176.29 225.11 175.48"
          />
          <polygon
            class="cls-152"
            points="225.82 175.47 227.48 174.49 228.17 174.89 226.51 175.87 225.82 175.47"
          />
          <polygon
            class="cls-138"
            points="225.11 175.48 225.11 175.79 226.51 176.6 226.51 176.29 225.11 175.48"
          />
          <g class="cls-153">
            <polygon
              class="cls-3"
              points="226.51 176.6 226.51 176.65 228.84 175.28 228.84 175.22 226.51 176.6"
            />
            <polygon
              class="cls-3"
              points="225.15 175.87 226.51 176.65 226.51 176.6 225.15 175.81 225.15 175.87"
            />
          </g>
          <polygon
            class="cls-3"
            points="226.08 175.44 225.76 175.44 225.69 175.48 225.76 175.51 226.08 175.51 226.68 175.86 226.51 175.86 226.45 175.9 226.51 175.93 226.81 175.93 226.97 176.02 228.88 174.88 227.13 173.87 226.08 175.44"
          />
          <polygon
            class="cls-141"
            points="225.76 175.51 225.69 175.48 225.69 175.25 225.76 175.29 225.76 175.51"
          />
          <polygon
            class="cls-144"
            points="225.82 175.48 225.76 175.51 225.76 175.29 225.82 175.25 225.82 175.48"
          />
          <polygon
            class="cls-141"
            points="226.51 175.93 226.45 175.9 226.45 175.67 226.51 175.71 226.51 175.93"
          />
          <polygon
            class="cls-144"
            points="226.58 175.9 226.51 175.93 226.51 175.71 226.58 175.67 226.58 175.9"
          />
          <polygon
            class="cls-141"
            points="228.23 174.92 228.17 174.89 228.17 174.66 228.23 174.7 228.23 174.92"
          />
          <polygon
            class="cls-144"
            points="228.3 174.89 228.23 174.92 228.23 174.7 228.3 174.66 228.3 174.89"
          />
          <polygon
            class="cls-144"
            points="226.51 175.44 228.88 174.04 228.88 174.35 226.51 175.76 226.51 175.44"
          />
          <polygon
            class="cls-141"
            points="225.11 174.63 225.11 174.94 226.51 175.76 226.51 175.45 225.11 174.63"
          />
          <polygon
            class="cls-144"
            points="228.88 174.04 227.48 173.23 226.88 174.49 228.88 174.04"
          />
          <polygon
            class="cls-141"
            points="227.48 173.23 227.48 173.23 225.11 174.63 227.15 173.91 227.48 173.23"
          />
          <polygon
            class="cls-138"
            points="225.11 174.63 226.51 175.45 227.15 173.91 225.11 174.63"
          />
          <polygon
            class="cls-141"
            points="227.15 173.91 226.51 175.44 228.88 174.04 227.15 173.91"
          />
          <path
            class="cls-3"
            d="M274.6,204.83l-.2.11-11.5-6.64,6,14.54L247,225.49l3.77.25a1.43,1.43,0,0,0,.78-.19l1.2-.69h0l1.57-.9h0l.36-.21.05,0h0L273,213.16h0l1.57-.9h0l1.46-.85h0l3.95-2.28a.68.68,0,0,0,0-1.17ZM251.53,225l-1.89-.13,1.57-.9,1.76.1Z"
          />
          <polygon
            class="cls-136"
            points="212.74 218.02 214.3 218.92 225.22 212.61 223.66 211.71 212.74 218.02"
          />
          <polygon
            class="cls-137"
            points="214.3 218.92 212.74 218.02 212.74 218.24 214.3 219.14 214.3 218.92"
          />
          <polygon
            class="cls-137"
            points="225.22 212.61 214.3 218.92 214.3 219.14 225.22 212.84 225.22 212.61"
          />
          <polygon
            class="cls-131"
            points="240.03 206.99 240.03 216.89 250.17 222.75 250.17 212.84 240.03 206.99"
          />
          <polygon
            class="cls-137"
            points="229.9 206.5 228.34 204.75 228.34 214.64 229.89 213.74 229.9 206.5"
          />
          <polygon
            class="cls-161"
            points="236.39 217.99 229.12 213.79 229.12 214.19 236.39 218.39 236.39 217.99"
          />
          <polygon
            class="cls-162"
            points="236.46 217.96 229.18 213.76 229.12 213.79 236.39 217.99 236.46 217.96"
          />
          <polygon
            class="cls-163"
            points="236.49 217.94 229.22 213.74 229.12 213.79 229.19 213.79 236.43 217.97 236.49 217.94"
          />
          <polygon
            class="cls-161"
            points="236.39 217.48 229.12 213.28 229.12 213.68 236.39 217.88 236.39 217.48"
          />
          <polygon
            class="cls-162"
            points="236.46 217.45 229.18 213.25 229.12 213.28 236.39 217.48 236.46 217.45"
          />
          <polygon
            class="cls-163"
            points="236.49 217.43 229.22 213.23 229.12 213.28 229.19 213.28 236.43 217.46 236.49 217.43"
          />
          <polygon
            class="cls-161"
            points="236.39 216.97 229.12 212.77 229.12 213.17 236.39 217.37 236.39 216.97"
          />
          <polygon
            class="cls-162"
            points="236.46 216.94 229.18 212.74 229.12 212.77 236.39 216.97 236.46 216.94"
          />
          <polygon
            class="cls-163"
            points="236.49 216.92 229.22 212.72 229.12 212.77 229.19 212.77 236.43 216.95 236.49 216.92"
          />
          <polygon
            class="cls-161"
            points="236.39 216.46 229.12 212.26 229.12 212.66 236.39 216.86 236.39 216.46"
          />
          <polygon
            class="cls-162"
            points="236.46 216.43 229.18 212.23 229.12 212.26 236.39 216.46 236.46 216.43"
          />
          <polygon
            class="cls-163"
            points="236.49 216.41 229.22 212.21 229.12 212.26 229.19 212.26 236.43 216.44 236.49 216.41"
          />
          <polygon
            class="cls-161"
            points="236.39 215.95 229.12 211.75 229.12 212.15 236.39 216.35 236.39 215.95"
          />
          <polygon
            class="cls-162"
            points="236.46 215.92 229.18 211.72 229.12 211.75 236.39 215.95 236.46 215.92"
          />
          <polygon
            class="cls-163"
            points="236.49 215.9 229.22 211.7 229.12 211.75 229.19 211.75 236.43 215.93 236.49 215.9"
          />
          <polygon
            class="cls-161"
            points="236.39 215.44 229.12 211.24 229.12 211.64 236.39 215.84 236.39 215.44"
          />
          <polygon
            class="cls-162"
            points="236.46 215.41 229.18 211.21 229.12 211.24 236.39 215.44 236.46 215.41"
          />
          <polygon
            class="cls-163"
            points="236.49 215.39 229.22 211.19 229.12 211.24 229.19 211.24 236.43 215.42 236.49 215.39"
          />
          <polygon
            class="cls-161"
            points="236.39 214.93 229.12 210.73 229.12 211.13 236.39 215.33 236.39 214.93"
          />
          <polygon
            class="cls-162"
            points="236.46 214.9 229.18 210.69 229.12 210.73 236.39 214.93 236.46 214.9"
          />
          <polygon
            class="cls-163"
            points="236.49 214.88 229.22 210.68 229.12 210.73 229.19 210.73 236.43 214.91 236.49 214.88"
          />
          <polygon
            class="cls-161"
            points="236.39 214.42 229.12 210.22 229.12 210.62 236.39 214.82 236.39 214.42"
          />
          <polygon
            class="cls-162"
            points="236.46 214.39 229.18 210.19 229.12 210.22 236.39 214.42 236.46 214.39"
          />
          <polygon
            class="cls-163"
            points="236.49 214.37 229.22 210.16 229.12 210.22 229.19 210.22 236.43 214.4 236.49 214.37"
          />
          <polygon
            class="cls-161"
            points="236.39 213.91 229.12 209.71 229.12 210.11 236.39 214.31 236.39 213.91"
          />
          <polygon
            class="cls-162"
            points="236.46 213.88 229.18 209.68 229.12 209.71 236.39 213.91 236.46 213.88"
          />
          <polygon
            class="cls-163"
            points="236.49 213.86 229.22 209.66 229.12 209.71 229.19 209.71 236.43 213.89 236.49 213.86"
          />
          <polygon
            class="cls-161"
            points="236.39 213.4 229.12 209.2 229.12 209.6 236.39 213.8 236.39 213.4"
          />
          <polygon
            class="cls-162"
            points="236.46 213.37 229.18 209.16 229.12 209.2 236.39 213.4 236.46 213.37"
          />
          <polygon
            class="cls-163"
            points="236.49 213.35 229.22 209.15 229.12 209.2 229.19 209.2 236.43 213.38 236.49 213.35"
          />
          <polygon
            class="cls-161"
            points="236.39 212.89 229.12 208.69 229.12 209.09 236.39 213.29 236.39 212.89"
          />
          <polygon
            class="cls-162"
            points="236.46 212.86 229.18 208.66 229.12 208.69 236.39 212.89 236.46 212.86"
          />
          <polygon
            class="cls-163"
            points="236.49 212.84 229.22 208.63 229.12 208.69 229.19 208.69 236.43 212.87 236.49 212.84"
          />
          <polygon
            class="cls-161"
            points="236.39 212.38 229.12 208.18 229.12 208.58 236.39 212.78 236.39 212.38"
          />
          <polygon
            class="cls-162"
            points="236.46 212.35 229.18 208.15 229.12 208.18 236.39 212.38 236.46 212.35"
          />
          <polygon
            class="cls-163"
            points="236.49 212.33 229.22 208.13 229.12 208.18 229.19 208.18 236.43 212.36 236.49 212.33"
          />
          <polygon
            class="cls-161"
            points="236.39 211.87 229.12 207.67 229.12 208.07 236.39 212.27 236.39 211.87"
          />
          <polygon
            class="cls-162"
            points="236.46 211.84 229.18 207.63 229.12 207.67 236.39 211.87 236.46 211.84"
          />
          <polygon
            class="cls-163"
            points="236.49 211.82 229.22 207.62 229.12 207.67 229.19 207.67 236.43 211.85 236.49 211.82"
          />
          <polygon
            class="cls-161"
            points="236.39 211.36 229.12 207.16 229.12 207.56 236.39 211.76 236.39 211.36"
          />
          <polygon
            class="cls-162"
            points="236.46 211.33 229.18 207.13 229.12 207.16 236.39 211.36 236.46 211.33"
          />
          <polygon
            class="cls-163"
            points="236.49 211.31 229.22 207.11 229.12 207.16 229.19 207.16 236.43 211.34 236.49 211.31"
          />
          <polygon
            class="cls-161"
            points="236.39 210.85 229.12 206.65 229.12 207.05 236.39 211.25 236.39 210.85"
          />
          <polygon
            class="cls-162"
            points="236.46 210.82 229.18 206.62 229.12 206.65 236.39 210.85 236.46 210.82"
          />
          <polygon
            class="cls-163"
            points="236.49 210.8 229.22 206.6 229.12 206.65 229.19 206.65 236.43 210.83 236.49 210.8"
          />
          <polygon
            class="cls-161"
            points="236.39 210.34 229.12 206.14 229.12 206.54 236.39 210.74 236.39 210.34"
          />
          <polygon
            class="cls-162"
            points="236.46 210.31 229.18 206.11 229.12 206.14 236.39 210.34 236.46 210.31"
          />
          <polygon
            class="cls-163"
            points="236.49 210.29 229.22 206.09 229.12 206.14 229.19 206.14 236.43 210.32 236.49 210.29"
          />
          <polygon
            class="cls-131"
            points="236.91 208.79 226.78 202.94 226.78 213.74 228.34 214.64 228.34 207.44 235.36 211.49 235.36 218.69 236.91 219.59 236.91 208.79"
          />
          <polygon
            class="cls-137"
            points="240.03 206.99 236.91 208.79 236.91 219.59 240.03 217.79 240.03 206.99"
          />
          <path class="cls-139" d="M245,216.74v-4.07l3.53,2v4.08Z" />
          <polygon
            class="cls-140"
            points="244.89 212.57 244.89 216.79 248.55 218.91 248.55 214.68 244.89 212.57"
          />
          <path
            class="cls-141"
            d="M248.61,214.64l-3.9-2.25v4.5l3.9,2.25Zm-3.78,2.18v-4.23l3.66,2.11v4.23Z"
          />
          <polygon
            class="cls-142"
            points="244.83 212.59 244.83 216.82 248.49 218.93 248.49 214.7 244.83 212.59"
          />
          <polygon
            class="cls-144"
            points="244.96 216.74 244.83 216.82 244.83 212.59 244.96 212.67 244.96 216.74"
          />
          <polygon
            class="cls-144"
            points="244.83 216.82 244.96 216.74 248.49 218.78 248.49 218.93 244.83 216.82"
          />
          <polygon
            class="cls-3"
            points="245.09 216.82 244.83 216.82 244.96 216.74 244.96 212.67 245.09 212.74 245.09 216.82"
          />
          <polygon
            class="cls-136"
            points="247.05 224.55 236.91 218.69 240.03 216.89 250.17 222.75 247.05 224.55"
          />
          <polygon
            class="cls-131"
            points="236.91 218.69 236.91 219.59 247.05 225.45 247.05 224.55 236.91 218.69"
          />
          <polygon
            class="cls-137"
            points="250.17 222.75 247.05 224.55 247.05 225.45 250.17 223.65 250.17 222.75"
          />
          <polygon
            class="cls-131"
            points="258.75 206.09 258.75 206.99 268.89 212.84 268.89 211.94 258.75 206.09"
          />
          <polygon
            class="cls-133"
            points="243.93 211.94 240.81 210.14 240.81 217.34 243.93 219.14 243.93 211.94"
          />
          <polygon
            class="cls-134"
            points="243.84 212 240.91 210.31 240.91 217.4 240.96 217.43 240.96 217.4 240.96 210.39 243.79 212.03 243.79 219.03 243.79 219.06 243.84 219.09 243.84 212"
          />
          <polygon
            class="cls-3"
            points="242.76 217.57 241.98 217.12 241.98 211.72 242.76 212.17 242.76 217.57"
          />
          <polygon
            class="cls-142"
            points="242.76 217.57 241.98 217.12 241.98 211.72 242.76 212.17 242.76 217.57"
          />
          <polygon
            class="cls-135"
            points="242.06 211.76 241.98 211.72 241.98 217.12 242.06 217.07 242.06 211.76"
          />
          <polygon
            class="cls-135"
            points="242.06 217.07 241.98 217.12 242.76 217.57 242.76 217.48 242.06 217.07"
          />
          <polygon
            class="cls-166"
            points="242.06 211.76 242.06 217.07 241.98 217.12 242.14 217.12 242.14 211.88 242.76 212.24 242.76 212.17 242.06 211.76"
          />
          <polygon
            class="cls-3"
            points="241.22 214.33 241.2 214.29 241.13 214.25 241.13 214.29 241.16 214.34 241.16 215.3 241.13 215.28 241.13 215.32 241.16 215.37 241.2 215.43 241.22 215.44 241.22 214.33"
          />
          <polygon
            class="cls-136"
            points="241.2 215.32 241.13 215.28 241.1 215.3 241.17 215.34 241.2 215.32"
          />
          <polygon
            class="cls-131"
            points="241.13 214.33 241.07 214.29 241.07 215.35 241.13 215.39 241.13 214.33"
          />
          <polygon
            class="cls-136"
            points="241.13 214.25 241.2 214.29 241.17 214.31 241.13 214.33 241.07 214.29 241.1 214.27 241.13 214.25"
          />
          <polygon
            class="cls-137"
            points="241.13 214.33 241.13 215.39 241.17 215.37 241.2 215.35 241.2 215.32 241.17 215.34 241.17 214.35 241.2 214.33 241.2 214.29 241.17 214.31 241.13 214.33"
          />
          <polygon
            class="cls-3"
            points="247.05 223.65 246.27 224.09 246.27 224.09 246.27 224.09 247.83 224.09 248.61 223.65 247.05 223.65"
          />
          <polygon
            class="cls-3"
            points="243.16 215.07 250.17 219.14 250.17 212.84 240.03 212.39 240.03 216.89 236.91 218.69 243.15 218.69 243.16 215.07"
          />
          <polygon
            class="cls-131"
            points="239.25 219.14 239.25 219.59 245.88 223.42 246.27 223.19 239.25 219.14"
          />
          <polygon
            class="cls-137"
            points="238.47 220.5 239.25 220.04 239.25 219.14 238.47 219.59 238.47 220.5"
          />
          <polygon
            class="cls-136"
            points="239.25 219.59 238.86 219.82 245.49 223.64 245.88 223.42 239.25 219.59"
          />
          <polygon
            class="cls-136"
            points="238.87 220.27 238.47 220.49 245.49 224.54 245.49 224.09 238.87 220.27"
          />
          <polygon
            class="cls-131"
            points="238.87 219.82 238.86 220.27 245.49 224.09 245.49 223.65 238.87 219.82"
          />
          <polygon
            class="cls-3"
            points="238.47 220.5 239.25 220.5 239.25 220.04 239.64 219.82 239.25 219.14 239.25 219.59 238.87 219.82 238.87 220.27 238.47 220.5"
          />
          <polygon
            class="cls-136"
            points="260.68 189.7 262.24 188.8 260.68 187.9 259.12 188.81 260.68 189.7"
          />
          <polygon
            class="cls-131"
            points="260.68 194.21 260.68 189.7 259.13 188.8 259.12 193.31 260.68 194.21"
          />
          <polygon
            class="cls-137"
            points="260.69 194.21 262.24 193.31 262.24 188.8 260.68 189.7 260.69 194.21"
          />
          <polygon
            class="cls-136"
            points="252.11 195.56 260.68 190.6 259.12 189.7 250.55 194.66 252.11 195.56"
          />
          <polygon
            class="cls-131"
            points="252.11 199.16 252.11 195.56 250.55 194.66 250.55 198.26 252.11 199.16"
          />
          <polygon
            class="cls-137"
            points="252.11 199.16 260.68 194.21 260.68 190.6 252.11 195.56 252.11 199.16"
          />
          <polygon
            class="cls-137"
            points="268.89 202.04 250.17 212.84 250.17 223.65 268.89 212.84 268.89 202.04"
          />
          <polygon
            class="cls-137"
            points="226.78 202.94 226.78 213.74 225.22 214.64 225.22 204.19 239.25 184.93 253.29 187.97 253.29 198.44 226.78 202.94"
          />
          <polygon
            class="cls-138"
            points="226.78 202.94 245.49 213.74 257.97 196.63 239.25 185.83 226.78 202.94"
          />
          <polygon
            class="cls-141"
            points="239.25 185.83 257.97 196.63 270.44 199.34 251.73 188.53 239.25 185.83"
          />
          <polygon
            class="cls-144"
            points="253.18 189.27 240.72 186.57 240.81 186.63 253.29 189.33 253.18 189.27"
          />
          <polygon
            class="cls-144"
            points="253.29 189.33 240.81 186.63 240.81 186.73 253.29 189.43 253.29 189.33"
          />
          <polygon
            class="cls-164"
            points="253.28 189.43 240.81 186.73 240.87 186.76 253.34 189.47 253.28 189.43"
          />
          <polygon
            class="cls-144"
            points="254.75 190.18 242.28 187.47 242.38 187.53 254.85 190.23 254.75 190.18"
          />
          <polygon
            class="cls-144"
            points="254.85 190.23 242.38 187.53 242.38 187.64 254.85 190.34 254.85 190.23"
          />
          <polygon
            class="cls-164"
            points="254.85 190.34 242.38 187.64 242.44 187.67 254.91 190.37 254.85 190.34"
          />
          <polygon
            class="cls-144"
            points="256.32 191.08 243.85 188.38 243.95 188.44 256.42 191.14 256.32 191.08"
          />
          <polygon
            class="cls-144"
            points="256.42 191.14 243.95 188.44 243.95 188.54 256.42 191.24 256.42 191.14"
          />
          <polygon
            class="cls-164"
            points="256.42 191.24 243.95 188.54 244 188.57 256.48 191.28 256.42 191.24"
          />
          <polygon
            class="cls-144"
            points="257.89 191.99 245.42 189.28 245.52 189.34 257.99 192.04 257.89 191.99"
          />
          <polygon
            class="cls-144"
            points="257.99 192.04 245.52 189.34 245.52 189.45 257.99 192.15 257.99 192.04"
          />
          <polygon
            class="cls-164"
            points="257.99 192.15 245.52 189.45 245.57 189.48 258.05 192.18 257.99 192.15"
          />
          <polygon
            class="cls-144"
            points="259.46 192.89 246.99 190.19 247.09 190.25 259.56 192.95 259.46 192.89"
          />
          <polygon
            class="cls-144"
            points="259.56 192.95 247.08 190.25 247.08 190.35 259.56 193.06 259.56 192.95"
          />
          <polygon
            class="cls-164"
            points="259.56 193.05 247.09 190.35 247.14 190.38 259.61 193.09 259.56 193.05"
          />
          <polygon
            class="cls-144"
            points="261.02 193.8 248.56 191.09 248.65 191.15 261.13 193.85 261.02 193.8"
          />
          <polygon
            class="cls-144"
            points="261.13 193.85 248.65 191.15 248.65 191.26 261.13 193.96 261.13 193.85"
          />
          <polygon
            class="cls-164"
            points="261.13 193.96 248.65 191.26 248.71 191.29 261.18 193.99 261.13 193.96"
          />
          <polygon
            class="cls-144"
            points="262.59 194.7 250.12 192 250.22 192.06 262.69 194.76 262.59 194.7"
          />
          <polygon
            class="cls-144"
            points="262.69 194.76 250.22 192.06 250.22 192.16 262.69 194.87 262.69 194.76"
          />
          <polygon
            class="cls-164"
            points="262.69 194.86 250.22 192.16 250.28 192.19 262.75 194.9 262.69 194.86"
          />
          <polygon
            class="cls-144"
            points="264.16 195.61 251.69 192.91 251.79 192.96 264.26 195.66 264.16 195.61"
          />
          <polygon
            class="cls-144"
            points="264.26 195.66 251.79 192.96 251.79 193.07 264.26 195.77 264.26 195.66"
          />
          <polygon
            class="cls-164"
            points="264.26 195.77 251.79 193.07 251.84 193.1 264.32 195.8 264.26 195.77"
          />
          <polygon
            class="cls-144"
            points="265.73 196.51 253.26 193.81 253.36 193.87 265.83 196.57 265.73 196.51"
          />
          <polygon
            class="cls-144"
            points="265.83 196.57 253.36 193.87 253.36 193.97 265.83 196.68 265.83 196.57"
          />
          <polygon
            class="cls-164"
            points="265.83 196.68 253.36 193.97 253.41 194 265.88 196.71 265.83 196.68"
          />
          <polygon
            class="cls-144"
            points="267.3 197.42 254.83 194.72 254.92 194.77 267.4 197.47 267.3 197.42"
          />
          <polygon
            class="cls-144"
            points="267.4 197.47 254.92 194.77 254.92 194.88 267.4 197.58 267.4 197.47"
          />
          <polygon
            class="cls-164"
            points="267.4 197.58 254.92 194.88 254.98 194.91 267.45 197.61 267.4 197.58"
          />
          <polygon
            class="cls-144"
            points="268.86 198.32 256.39 195.62 256.49 195.68 268.96 198.38 268.86 198.32"
          />
          <polygon
            class="cls-144"
            points="268.96 198.38 256.49 195.68 256.49 195.78 268.96 198.49 268.96 198.38"
          />
          <polygon
            class="cls-164"
            points="268.96 198.49 256.49 195.78 256.55 195.81 269.02 198.52 268.96 198.49"
          />
          <polygon
            class="cls-131"
            points="272.01 199.34 259.05 197.3 257.97 195.73 270.45 198.44 272.01 199.34"
          />
          <polygon
            class="cls-131"
            points="259.53 196.63 257.97 195.73 245.49 212.84 247.06 213.74 259.53 196.63"
          />
          <polygon
            class="cls-131"
            points="247.05 214.64 247.05 213.74 245.49 212.84 245.49 213.74 236.91 208.79 236.91 210.59 247.05 216.44 247.05 214.64 247.05 214.64"
          />
          <polygon
            class="cls-138"
            points="245.49 214.64 226.78 203.84 226.78 202.94 245.49 213.74 245.49 214.64"
          />
          <polygon
            class="cls-131"
            points="225.22 214.64 223.66 213.74 223.66 203.28 225.22 204.19 225.22 214.64"
          />
          <polygon
            class="cls-136"
            points="216.64 215.99 225.22 211.04 223.66 210.14 215.08 215.09 216.64 215.99"
          />
          <polygon
            class="cls-137"
            points="216.64 219.59 225.22 214.64 225.22 211.04 216.64 215.99 216.64 219.59"
          />
          <polygon
            class="cls-136"
            points="215.86 215.54 217.42 214.64 215.86 213.74 214.3 214.64 215.86 215.54"
          />
          <polygon
            class="cls-131"
            points="215.86 220.04 215.86 215.54 214.31 214.64 214.3 219.14 215.86 220.04"
          />
          <polygon
            class="cls-137"
            points="215.86 220.04 217.42 219.14 217.42 214.64 215.86 215.54 215.86 220.04"
          />
          <polygon
            class="cls-3"
            points="240 186.26 239.25 185.83 226.78 202.94 226.78 213.74 228.34 214.64 228.34 205.99 227.8 203.51 228.34 202.04 240 186.26"
          />
          <polygon
            class="cls-137"
            points="250.17 223.65 250.17 212.84 247.05 214.64 247.05 213.74 259.53 196.63 272 199.34 272 200.24 268.89 202.04 268.88 212.84 250.17 223.65"
          />
          <polygon
            class="cls-3"
            points="252.51 188.98 240 186.26 239.25 185.83 251.73 188.53 252.51 188.98"
          />
          <polygon
            class="cls-136"
            points="215.86 219.82 217.42 220.72 228.34 214.41 226.78 213.51 215.86 219.82"
          />
          <polygon
            class="cls-137"
            points="217.42 220.72 215.86 219.82 215.86 220.04 217.42 220.94 217.42 220.72"
          />
          <polygon
            class="cls-137"
            points="228.34 214.41 217.42 220.72 217.42 220.94 228.34 214.64 228.34 214.41"
          />
          <polygon
            class="cls-3"
            points="230.29 214.87 229.9 213.54 229.9 214.64 229.12 214.19 228.34 214.64 228.34 214.41 226.78 213.51 215.86 219.82 218.98 219.82 218.98 220.04 218.98 220.04 217.42 220.94 217.81 220.94 219.37 220.04 223.65 220.04 223.65 220.04 225.22 219.14 224.05 218.47 230.29 214.87"
          />
          <polygon
            class="cls-144"
            points="240.72 186.57 228.24 203.67 228.34 203.73 240.81 186.63 240.72 186.57"
          />
          <polygon
            class="cls-144"
            points="240.81 186.63 228.34 203.73 228.34 203.84 240.81 186.73 240.81 186.63"
          />
          <polygon
            class="cls-144"
            points="228.34 203.84 228.24 203.78 228.24 203.67 228.34 203.73 228.34 203.84"
          />
          <polygon
            class="cls-164"
            points="240.81 186.73 228.34 203.84 228.39 203.87 240.87 186.76 240.81 186.73"
          />
          <polygon
            class="cls-144"
            points="242.28 187.47 229.81 204.58 229.9 204.64 242.38 187.53 242.28 187.47"
          />
          <polygon
            class="cls-144"
            points="242.38 187.53 229.9 204.64 229.9 204.74 242.38 187.64 242.38 187.53"
          />
          <polygon
            class="cls-144"
            points="229.9 204.74 229.81 204.69 229.81 204.58 229.9 204.64 229.9 204.74"
          />
          <polygon
            class="cls-164"
            points="242.38 187.64 229.9 204.74 229.96 204.77 242.44 187.67 242.38 187.64"
          />
          <polygon
            class="cls-144"
            points="243.85 188.38 231.37 205.48 231.47 205.54 243.95 188.44 243.85 188.38"
          />
          <polygon
            class="cls-144"
            points="243.95 188.44 231.47 205.54 231.47 205.65 243.95 188.54 243.95 188.44"
          />
          <polygon
            class="cls-144"
            points="231.47 205.65 231.37 205.59 231.37 205.48 231.47 205.54 231.47 205.65"
          />
          <polygon
            class="cls-164"
            points="243.95 188.54 231.47 205.65 231.53 205.68 244 188.57 243.95 188.54"
          />
          <polygon
            class="cls-144"
            points="245.42 189.28 232.94 206.39 233.04 206.45 245.52 189.34 245.42 189.28"
          />
          <polygon
            class="cls-144"
            points="245.52 189.34 233.04 206.45 233.04 206.55 245.52 189.45 245.52 189.34"
          />
          <polygon
            class="cls-144"
            points="233.04 206.55 232.94 206.5 232.94 206.39 233.04 206.45 233.04 206.55"
          />
          <polygon
            class="cls-164"
            points="245.52 189.45 233.04 206.55 233.09 206.59 245.57 189.48 245.52 189.45"
          />
          <polygon
            class="cls-144"
            points="246.99 190.19 234.51 207.29 234.61 207.35 247.08 190.25 246.99 190.19"
          />
          <polygon
            class="cls-144"
            points="247.08 190.25 234.61 207.35 234.61 207.46 247.08 190.35 247.08 190.25"
          />
          <polygon
            class="cls-144"
            points="234.61 207.46 234.51 207.4 234.51 207.29 234.61 207.35 234.61 207.46"
          />
          <polygon
            class="cls-164"
            points="247.08 190.35 234.61 207.46 234.66 207.49 247.14 190.38 247.08 190.35"
          />
          <polygon
            class="cls-144"
            points="248.55 191.09 236.08 208.2 236.18 208.26 248.65 191.15 248.55 191.09"
          />
          <polygon
            class="cls-144"
            points="248.65 191.15 236.18 208.26 236.18 208.36 248.65 191.26 248.65 191.15"
          />
          <polygon
            class="cls-144"
            points="236.18 208.36 236.08 208.31 236.08 208.2 236.18 208.26 236.18 208.36"
          />
          <polygon
            class="cls-164"
            points="248.65 191.26 236.17 208.36 236.23 208.4 248.71 191.29 248.65 191.26"
          />
          <polygon
            class="cls-144"
            points="250.12 192 237.65 209.1 237.74 209.16 250.22 192.06 250.12 192"
          />
          <polygon
            class="cls-144"
            points="250.22 192.06 237.74 209.16 237.74 209.27 250.22 192.16 250.22 192.06"
          />
          <polygon
            class="cls-144"
            points="237.74 209.27 237.65 209.21 237.65 209.1 237.74 209.16 237.74 209.27"
          />
          <polygon
            class="cls-164"
            points="250.22 192.16 237.74 209.27 237.8 209.3 250.28 192.19 250.22 192.16"
          />
          <polygon
            class="cls-144"
            points="251.69 192.91 239.21 210.01 239.31 210.07 251.79 192.96 251.69 192.91"
          />
          <polygon
            class="cls-144"
            points="251.79 192.96 239.31 210.07 239.31 210.17 251.79 193.07 251.79 192.96"
          />
          <polygon
            class="cls-144"
            points="239.31 210.17 239.21 210.12 239.21 210.01 239.31 210.07 239.31 210.17"
          />
          <polygon
            class="cls-164"
            points="251.79 193.07 239.31 210.17 239.37 210.21 251.84 193.1 251.79 193.07"
          />
          <polygon
            class="cls-144"
            points="253.26 193.81 240.78 210.91 240.88 210.97 253.35 193.87 253.26 193.81"
          />
          <polygon
            class="cls-144"
            points="253.35 193.87 240.88 210.97 240.88 211.08 253.35 193.97 253.35 193.87"
          />
          <polygon
            class="cls-144"
            points="240.88 211.08 240.78 211.02 240.78 210.91 240.88 210.97 240.88 211.08"
          />
          <polygon
            class="cls-164"
            points="253.35 193.97 240.88 211.08 240.93 211.11 253.41 194 253.35 193.97"
          />
          <polygon
            class="cls-144"
            points="254.83 194.72 242.35 211.82 242.45 211.88 254.92 194.77 254.83 194.72"
          />
          <polygon
            class="cls-144"
            points="254.92 194.77 242.45 211.88 242.45 211.98 254.92 194.88 254.92 194.77"
          />
          <polygon
            class="cls-144"
            points="242.45 211.98 242.35 211.93 242.35 211.82 242.45 211.88 242.45 211.98"
          />
          <polygon
            class="cls-164"
            points="254.92 194.88 242.45 211.98 242.5 212.02 254.98 194.91 254.92 194.88"
          />
          <polygon
            class="cls-144"
            points="256.39 195.62 243.92 212.72 244.01 212.78 256.49 195.68 256.39 195.62"
          />
          <polygon
            class="cls-144"
            points="256.49 195.68 244.01 212.78 244.01 212.89 256.49 195.78 256.49 195.68"
          />
          <polygon
            class="cls-144"
            points="244.01 212.89 243.92 212.83 243.92 212.72 244.01 212.78 244.01 212.89"
          />
          <polygon
            class="cls-164"
            points="256.49 195.78 244.01 212.89 244.07 212.92 256.55 195.81 256.49 195.78"
          />
          <polygon
            class="cls-131"
            points="253.15 187.97 239.11 184.93 237.56 184.03 251.59 187.07 253.15 187.97"
          />
          <polygon
            class="cls-131"
            points="239.25 184.93 237.7 184.03 223.66 203.28 225.22 204.19 239.25 184.93"
          />
          <polygon
            class="cls-138"
            points="244.39 188.23 244.39 188.31 245.99 189.24 245.99 189.15 244.39 188.23"
          />
          <polygon
            class="cls-144"
            points="245.99 189.15 245.99 189.24 248.59 189.68 248.59 189.59 245.99 189.15"
          />
          <polygon
            class="cls-141"
            points="248.59 189.59 245.99 189.15 244.39 188.23 247.03 188.69 248.59 189.59"
          />
          <polygon
            class="cls-165"
            points="246.01 189.11 244.65 188.32 247.02 188.74 248.34 189.5 246.01 189.11"
          />
          <polygon
            class="cls-151"
            points="244.65 187.17 246.97 185.79 248.33 186.58 246.01 187.96 244.65 187.17"
          />
          <polygon
            class="cls-131"
            points="246.01 189.11 244.65 188.32 244.65 187.17 246.01 187.96 246.01 189.11"
          />
          <polygon
            class="cls-137"
            points="248.34 189.5 246.01 189.11 246.01 187.96 248.33 186.58 248.34 189.5"
          />
          <polygon
            class="cls-144"
            points="246.01 187.67 248.38 186.26 248.38 186.58 246.01 187.98 246.01 187.67"
          />
          <polygon
            class="cls-138"
            points="244.6 186.86 246.97 185.45 248.38 186.27 246.01 187.67 244.6 186.86"
          />
          <polygon
            class="cls-152"
            points="245.32 186.86 246.97 185.87 247.66 186.27 246.01 187.25 245.32 186.86"
          />
          <polygon
            class="cls-138"
            points="244.6 186.86 244.6 187.17 246.01 187.98 246.01 187.67 244.6 186.86"
          />
          <g class="cls-153">
            <polygon
              class="cls-3"
              points="246.01 187.98 246.01 188.03 248.33 186.66 248.33 186.6 246.01 187.98"
            />
            <polygon
              class="cls-3"
              points="244.65 187.25 246.01 188.03 246.01 187.98 244.65 187.2 244.65 187.25"
            />
          </g>
          <polygon
            class="cls-3"
            points="245.57 186.82 245.25 186.82 245.19 186.86 245.25 186.9 245.58 186.9 246.18 187.24 246.01 187.24 245.94 187.28 246.01 187.31 246.31 187.31 246.46 187.41 248.38 186.26 246.63 185.25 245.57 186.82"
          />
          <polygon
            class="cls-141"
            points="245.25 186.9 245.19 186.86 245.19 186.63 245.25 186.67 245.25 186.9"
          />
          <polygon
            class="cls-144"
            points="245.32 186.86 245.25 186.9 245.25 186.67 245.32 186.63 245.32 186.86"
          />
          <polygon
            class="cls-141"
            points="246.01 187.32 245.94 187.28 245.94 187.05 246.01 187.09 246.01 187.32"
          />
          <polygon
            class="cls-144"
            points="246.07 187.28 246.01 187.32 246.01 187.09 246.07 187.05 246.07 187.28"
          />
          <polygon
            class="cls-141"
            points="247.73 186.31 247.66 186.27 247.66 186.04 247.73 186.08 247.73 186.31"
          />
          <polygon
            class="cls-144"
            points="247.79 186.27 247.73 186.31 247.73 186.08 247.79 186.04 247.79 186.27"
          />
          <polygon
            class="cls-144"
            points="246.01 186.83 248.38 185.42 248.38 185.73 246.01 187.14 246.01 186.83"
          />
          <polygon
            class="cls-141"
            points="244.6 186.01 244.6 186.33 246.01 187.14 246.01 186.83 244.6 186.01"
          />
          <polygon
            class="cls-144"
            points="248.38 185.42 246.97 184.61 246.38 185.87 248.38 185.42"
          />
          <polygon
            class="cls-141"
            points="246.97 184.61 246.97 184.61 244.6 186.01 246.65 185.3 246.97 184.61"
          />
          <polygon
            class="cls-138"
            points="244.6 186.01 246.01 186.83 246.65 185.3 244.6 186.01"
          />
          <polygon
            class="cls-141"
            points="246.65 185.3 246.01 186.83 248.38 185.42 246.65 185.3"
          />
          <polygon
            class="cls-131"
            points="247.05 214.64 246.27 214.19 246.27 224.09 247.05 224.54 247.05 214.64"
          />
          <polygon
            class="cls-137"
            points="247.83 214.19 247.05 214.64 247.05 224.54 247.83 224.09 247.83 214.19"
          />
          <ellipse
            class="cls-154"
            cx="179.81"
            cy="188.73"
            rx="3.42"
            ry="1.84"
          />
          <path
            class="cls-155"
            d="M179.81,188.94h0a.33.33,0,0,1-.33-.33v-4.7a.33.33,0,0,1,.33-.34h0a.34.34,0,0,1,.33.34v4.7A.33.33,0,0,1,179.81,188.94Z"
          />
          <path
            class="cls-103"
            d="M182.83,179.35a5.09,5.09,0,0,0,0-.55,3.89,3.89,0,0,0-.69-2.24,3.33,3.33,0,0,0,.09-.78,2.49,2.49,0,1,0-4.92,0,3.33,3.33,0,0,0,.09.78,3.89,3.89,0,0,0-.69,2.24,3.39,3.39,0,0,0,0,.55,3.28,3.28,0,0,0-1.22,2.49c0,2,1.9,3.55,4.24,3.55s4.24-1.59,4.24-3.55A3.28,3.28,0,0,0,182.83,179.35Z"
          />
          <path
            class="cls-156"
            d="M182.83,179.35a5.09,5.09,0,0,0,0-.55,3.89,3.89,0,0,0-.69-2.24,3.33,3.33,0,0,0,.09-.78,2.9,2.9,0,0,0-1.52-2.64c-.94,5.88,1.79,8.56-2.32,12.06a5.17,5.17,0,0,0,1.38.19c2.34,0,4.24-1.59,4.24-3.55A3.28,3.28,0,0,0,182.83,179.35Z"
          />
          <ellipse
            class="cls-154"
            cx="256.55"
            cy="225.66"
            rx="3.42"
            ry="1.84"
          />
          <path
            class="cls-155"
            d="M256.55,225.87h0a.34.34,0,0,1-.34-.33v-4.7a.34.34,0,0,1,.34-.34h0a.34.34,0,0,1,.33.34v4.7A.33.33,0,0,1,256.55,225.87Z"
          />
          <path
            class="cls-103"
            d="M259.57,216.27a4.75,4.75,0,0,0,0-.54,3.94,3.94,0,0,0-.68-2.25,3.19,3.19,0,0,0,.09-.77,2.49,2.49,0,1,0-4.93,0,3.78,3.78,0,0,0,.09.77,4,4,0,0,0-.68,2.25,4.75,4.75,0,0,0,0,.54,3.29,3.29,0,0,0-1.21,2.5c0,2,1.9,3.55,4.24,3.55s4.23-1.59,4.23-3.55A3.29,3.29,0,0,0,259.57,216.27Z"
          />
          <path
            class="cls-156"
            d="M259.57,216.27a4.75,4.75,0,0,0,0-.54,3.94,3.94,0,0,0-.68-2.25,3.19,3.19,0,0,0,.09-.77,2.9,2.9,0,0,0-1.52-2.64c-.94,5.88,1.79,8.56-2.32,12.06a5.11,5.11,0,0,0,1.38.19c2.34,0,4.23-1.59,4.23-3.55A3.29,3.29,0,0,0,259.57,216.27Z"
          />
          <path
            class="cls-4"
            d="M73,192.64c-5.23,1.79-17.77,6.4-24.11,8.74a6.21,6.21,0,0,0-4,5.47l-1,17.56a6.19,6.19,0,0,0,4.94,6.41l37.46,7.65a6.21,6.21,0,0,0,4.38-.74l21.1-12.44A20.26,20.26,0,0,0,118,219a10.73,10.73,0,0,0,1.86-4c1.06-9.56-35.45-19.33-42.39-22.14C77.09,192.68,75.87,191.64,73,192.64Z"
          />
          <path
            class="cls-170"
            d="M73,192.64c-5.23,1.79-17.77,6.4-24.11,8.74a6.21,6.21,0,0,0-4,5.47l-1,17.56a6.19,6.19,0,0,0,4.94,6.41l37.46,7.65a6.21,6.21,0,0,0,4.38-.74l21.1-12.44A20.26,20.26,0,0,0,118,219a10.73,10.73,0,0,0,1.86-4c1.06-9.56-35.45-19.33-42.39-22.14C77.09,192.68,75.87,191.64,73,192.64Z"
          />
          <path
            class="cls-3"
            d="M118.76,215.9l-14.2-8.22-24,23.25H93.5a1.74,1.74,0,0,0,.87-.23l24.39-14.08A.42.42,0,0,0,118.76,215.9Z"
          />
          <polygon
            class="cls-132"
            points="54.17 215.68 55.24 215.17 63.2 210.47 63.2 164.5 54.17 169.71 54.17 215.68"
          />
          <polygon
            class="cls-131"
            points="53.84 215.49 54.17 215.68 54.17 169.71 53.84 169.52 53.84 215.49"
          />
          <polygon
            class="cls-171"
            points="78.51 228.26 76.51 227.11 76.64 227.03 78.65 228.19 78.51 228.26"
          />
          <polygon
            class="cls-172"
            points="78.51 228.34 78.51 228.26 78.65 228.19 78.65 228.26 78.51 228.34"
          />
          <polygon
            class="cls-173"
            points="78.51 228.34 78.51 228.28 78.65 228.2 78.65 228.26 78.51 228.34"
          />
          <polygon
            class="cls-174"
            points="78.51 228.34 76.51 227.18 76.51 227.11 78.51 228.26 78.51 228.34"
          />
          <polygon
            class="cls-172"
            points="78.51 228.34 76.51 227.18 76.51 227.12 78.51 228.28 78.51 228.34"
          />
          <polygon
            class="cls-171"
            points="80.65 229.5 78.51 228.26 78.65 228.19 80.79 229.42 80.65 229.5"
          />
          <polygon
            class="cls-172"
            points="80.65 229.57 80.65 229.5 80.79 229.42 80.79 229.5 80.65 229.57"
          />
          <polygon
            class="cls-173"
            points="80.65 229.57 80.65 229.51 80.79 229.44 80.79 229.5 80.65 229.57"
          />
          <polygon
            class="cls-174"
            points="80.65 229.57 78.51 228.34 78.51 228.26 80.65 229.5 80.65 229.57"
          />
          <polygon
            class="cls-172"
            points="80.65 229.57 78.51 228.34 78.51 228.28 80.65 229.51 80.65 229.57"
          />
          <polygon
            class="cls-171"
            points="81.8 230.16 80.65 229.5 80.79 229.42 81.93 230.08 81.8 230.16"
          />
          <polygon
            class="cls-174"
            points="81.8 230.23 80.65 229.57 80.65 229.5 81.8 230.16 81.8 230.23"
          />
          <polygon
            class="cls-172"
            points="81.8 230.23 80.65 229.57 80.65 229.51 81.8 230.17 81.8 230.23"
          />
          <polygon
            class="cls-171"
            points="77.28 227.74 76.34 227.2 76.48 227.12 77.42 227.66 77.28 227.74"
          />
          <polygon
            class="cls-172"
            points="77.28 227.81 77.28 227.74 77.42 227.66 77.42 227.74 77.28 227.81"
          />
          <polygon
            class="cls-173"
            points="77.28 227.81 77.28 227.75 77.42 227.67 77.42 227.74 77.28 227.81"
          />
          <polygon
            class="cls-174"
            points="77.28 227.81 76.34 227.27 76.34 227.2 77.28 227.74 77.28 227.81"
          />
          <polygon
            class="cls-172"
            points="77.28 227.81 76.34 227.27 76.34 227.21 77.28 227.75 77.28 227.81"
          />
          <polygon
            class="cls-171"
            points="79.42 228.97 77.28 227.74 77.42 227.66 79.56 228.9 79.42 228.97"
          />
          <polygon
            class="cls-172"
            points="79.42 229.05 79.42 228.97 79.56 228.9 79.56 228.97 79.42 229.05"
          />
          <polygon
            class="cls-173"
            points="79.42 229.05 79.42 228.99 79.56 228.91 79.56 228.97 79.42 229.05"
          />
          <polygon
            class="cls-174"
            points="79.42 229.05 77.28 227.81 77.28 227.74 79.42 228.97 79.42 229.05"
          />
          <polygon
            class="cls-172"
            points="79.42 229.05 77.28 227.81 77.28 227.75 79.42 228.99 79.42 229.05"
          />
          <polygon
            class="cls-171"
            points="81.56 230.21 79.42 228.97 79.56 228.9 81.7 230.13 81.56 230.21"
          />
          <polygon
            class="cls-172"
            points="81.56 230.28 81.56 230.21 81.7 230.13 81.7 230.21 81.56 230.28"
          />
          <polygon
            class="cls-173"
            points="81.56 230.28 81.56 230.22 81.7 230.15 81.7 230.21 81.56 230.28"
          />
          <polygon
            class="cls-174"
            points="81.56 230.28 79.42 229.05 79.42 228.97 81.56 230.21 81.56 230.28"
          />
          <polygon
            class="cls-172"
            points="81.56 230.28 79.42 229.05 79.42 228.99 81.56 230.22 81.56 230.28"
          />
          <polygon
            class="cls-171"
            points="81.48 230.34 80.34 229.68 80.47 229.6 81.61 230.26 81.48 230.34"
          />
          <polygon
            class="cls-174"
            points="81.48 230.42 80.34 229.76 80.34 229.68 81.48 230.34 81.48 230.42"
          />
          <polygon
            class="cls-172"
            points="81.48 230.42 80.34 229.76 80.34 229.7 81.48 230.35 81.48 230.42"
          />
          <polygon
            class="cls-171"
            points="81.16 230.52 80.02 229.87 80.15 229.79 81.29 230.44 81.16 230.52"
          />
          <polygon
            class="cls-174"
            points="81.16 230.6 80.02 229.94 80.02 229.87 81.16 230.52 81.16 230.6"
          />
          <polygon
            class="cls-172"
            points="81.16 230.6 80.02 229.94 80.02 229.88 81.16 230.54 81.16 230.6"
          />
          <polygon
            class="cls-175"
            points="57.96 216.4 55.53 215.19 55.53 210.18 57.96 211.58 57.96 216.4"
          />
          <polygon
            class="cls-131"
            points="55.41 215.27 55.24 215.17 55.24 210.16 55.41 210.25 55.41 215.27"
          />
          <polygon
            class="cls-132"
            points="55.58 215.17 55.41 215.27 55.41 210.25 55.58 210.16 55.58 215.17"
          />
          <polygon
            class="cls-131"
            points="55.58 210.16 55.41 210.25 55.24 210.16 55.41 210.06 55.58 210.16"
          />
          <polygon
            class="cls-176"
            points="55.53 215.19 55.45 215.24 55.45 210.23 55.51 210.18 55.53 215.19"
          />
          <polygon
            class="cls-132"
            points="58 216.38 57.83 216.47 57.83 216.67 58 216.57 58 216.38"
          />
          <polygon
            class="cls-176"
            points="55.53 215.19 55.45 215.24 57.71 216.36 57.79 216.31 55.53 215.19"
          />
          <polyline
            class="cls-142"
            points="55.45 210.3 57.88 211.63 57.67 216.34 55.45 215.24"
          />
          <polygon
            class="cls-131"
            points="57.83 216.67 57.67 216.57 57.67 211.55 57.83 211.65 57.83 216.67"
          />
          <polygon
            class="cls-132"
            points="58 216.57 57.83 216.67 57.83 211.65 58 211.55 58 216.57"
          />
          <polygon
            class="cls-131"
            points="58 211.55 57.83 211.65 57.67 211.55 57.83 211.46 58 211.55"
          />
          <polygon
            class="cls-175"
            points="60.38 217.8 58.13 216.53 58.13 211.8 60.38 213.08 60.38 217.8"
          />
          <polygon
            class="cls-131"
            points="58 216.76 57.83 216.67 57.83 211.65 58 211.75 58 216.76"
          />
          <polygon
            class="cls-132"
            points="58.17 216.67 58 216.76 58 211.75 58.17 211.65 58.17 216.67"
          />
          <polygon
            class="cls-131"
            points="58.17 211.65 58 211.75 57.83 211.65 58 211.55 58.17 211.65"
          />
          <polygon
            class="cls-176"
            points="58.13 216.69 58.04 216.74 58.04 211.72 58.13 211.68 58.13 216.69"
          />
          <polygon
            class="cls-131"
            points="58 216.57 58 216.76 60.26 218.07 60.26 217.87 58 216.57"
          />
          <polygon
            class="cls-131"
            points="58.17 216.47 58 216.57 60.26 217.87 60.42 217.78 58.17 216.47"
          />
          <polygon
            class="cls-132"
            points="60.42 217.78 60.26 217.87 60.26 218.07 60.42 217.97 60.42 217.78"
          />
          <polygon
            class="cls-176"
            points="58.13 216.49 58.04 216.54 60.13 217.76 60.22 217.71 58.13 216.49"
          />
          <polygon
            class="cls-142"
            points="60.09 217.73 58.04 216.54 58.04 211.72 60.3 213.03 60.09 217.73"
          />
          <polygon
            class="cls-131"
            points="60.26 218.07 60.09 217.97 60.09 212.95 60.26 213.05 60.26 218.07"
          />
          <polygon
            class="cls-132"
            points="60.42 217.97 60.26 218.07 60.26 213.05 60.42 212.95 60.42 217.97"
          />
          <polygon
            class="cls-131"
            points="60.42 212.95 60.26 213.05 60.09 212.95 60.26 212.86 60.42 212.95"
          />
          <polygon
            class="cls-175"
            points="62.06 220.31 60.88 219.64 60.88 214.81 62.06 215.49 62.06 220.31"
          />
          <polygon
            class="cls-131"
            points="60.76 219.9 60.59 219.8 60.59 214.79 60.76 214.88 60.76 219.9"
          />
          <polygon
            class="cls-132"
            points="60.93 219.8 60.76 219.9 60.76 214.88 60.93 214.79 60.93 219.8"
          />
          <polygon
            class="cls-131"
            points="60.93 214.79 60.76 214.88 60.59 214.79 60.76 214.69 60.93 214.79"
          />
          <polygon
            class="cls-176"
            points="60.88 219.83 60.8 219.88 60.8 214.86 60.88 214.81 60.88 219.83"
          />
          <polygon
            class="cls-131"
            points="60.76 219.71 60.76 219.9 61.93 220.58 61.93 220.38 60.76 219.71"
          />
          <polygon
            class="cls-131"
            points="60.93 219.61 60.76 219.71 61.93 220.38 62.1 220.29 60.93 219.61"
          />
          <polygon
            class="cls-132"
            points="62.1 220.29 61.93 220.38 61.93 220.58 62.1 220.48 62.1 220.29"
          />
          <polygon
            class="cls-176"
            points="60.88 219.63 60.8 219.68 61.8 220.27 61.89 220.22 60.88 219.63"
          />
          <polygon
            class="cls-142"
            points="61.76 220.24 60.8 219.68 60.8 214.86 61.97 215.54 61.76 220.24"
          />
          <polygon
            class="cls-131"
            points="61.93 220.58 61.76 220.48 61.76 215.46 61.93 215.56 61.93 220.58"
          />
          <polygon
            class="cls-132"
            points="62.1 220.48 61.93 220.58 61.93 215.56 62.1 215.46 62.1 220.48"
          />
          <polygon
            class="cls-131"
            points="62.1 215.46 61.93 215.56 61.76 215.46 61.93 215.37 62.1 215.46"
          />
          <polygon
            class="cls-177"
            points="61.83 218.67 61.79 218.65 61.77 218.66 61.81 218.69 61.83 218.67"
          />
          <polygon
            class="cls-178"
            points="61.79 218.26 61.74 218.23 61.74 218.7 61.79 218.73 61.79 218.26"
          />
          <polygon
            class="cls-177"
            points="61.81 218.24 61.79 218.26 61.74 218.23 61.77 218.22 61.81 218.24"
          />
          <polygon
            class="cls-179"
            points="61.79 218.26 61.79 218.73 61.81 218.71 61.83 218.7 61.83 218.67 61.81 218.69 61.81 218.24 61.79 218.26"
          />
          <polygon
            class="cls-175"
            points="63.39 221.09 62.22 220.41 62.22 215.58 63.39 216.26 63.39 221.09"
          />
          <polygon
            class="cls-131"
            points="62.1 220.67 61.93 220.58 61.93 215.56 62.1 215.66 62.1 220.67"
          />
          <polygon
            class="cls-132"
            points="62.27 220.58 62.1 220.67 62.1 215.66 62.27 215.56 62.27 220.58"
          />
          <polygon
            class="cls-131"
            points="62.27 215.56 62.1 215.66 61.93 215.56 62.1 215.46 62.27 215.56"
          />
          <polygon
            class="cls-176"
            points="62.22 220.6 62.14 220.65 62.14 215.63 62.22 215.58 62.22 220.6"
          />
          <polygon
            class="cls-131"
            points="62.1 220.48 62.1 220.67 63.27 221.35 63.27 221.16 62.1 220.48"
          />
          <polygon
            class="cls-131"
            points="62.27 220.38 62.1 220.48 63.27 221.16 63.44 221.06 62.27 220.38"
          />
          <polygon
            class="cls-132"
            points="63.44 221.06 63.27 221.16 63.27 221.35 63.44 221.25 63.44 221.06"
          />
          <polygon
            class="cls-176"
            points="62.22 220.4 62.14 220.45 63.14 221.04 63.23 220.99 62.22 220.4"
          />
          <polygon
            class="cls-142"
            points="63.1 221.02 62.14 220.45 62.14 215.63 63.31 216.31 63.1 221.02"
          />
          <polygon
            class="cls-131"
            points="63.27 221.35 63.1 221.25 63.1 216.24 63.27 216.33 63.27 221.35"
          />
          <polygon
            class="cls-132"
            points="63.44 221.25 63.27 221.35 63.27 216.33 63.44 216.24 63.44 221.25"
          />
          <polygon
            class="cls-131"
            points="63.44 216.24 63.27 216.33 63.1 216.24 63.27 216.14 63.44 216.24"
          />
          <polygon
            class="cls-175"
            points="66.74 223.01 65.23 222.15 65.23 217.32 66.74 218.19 66.74 223.01"
          />
          <polygon
            class="cls-131"
            points="65.11 222.41 64.94 222.31 64.94 217.3 65.11 217.39 65.11 222.41"
          />
          <polygon
            class="cls-132"
            points="65.27 222.31 65.11 222.41 65.11 217.39 65.27 217.3 65.27 222.31"
          />
          <polygon
            class="cls-131"
            points="65.27 217.3 65.11 217.39 64.94 217.3 65.11 217.2 65.27 217.3"
          />
          <polygon
            class="cls-176"
            points="65.23 222.34 65.15 222.38 65.15 217.37 65.23 217.32 65.23 222.34"
          />
          <polygon
            class="cls-131"
            points="65.11 222.22 65.11 222.41 66.61 223.28 66.61 223.09 65.11 222.22"
          />
          <polygon
            class="cls-131"
            points="65.27 222.12 65.11 222.22 66.61 223.09 66.78 222.99 65.27 222.12"
          />
          <polygon
            class="cls-132"
            points="66.78 222.99 66.61 223.09 66.61 223.28 66.78 223.18 66.78 222.99"
          />
          <polygon
            class="cls-176"
            points="65.23 222.14 65.15 222.19 66.49 222.97 66.57 222.92 65.23 222.14"
          />
          <polygon
            class="cls-142"
            points="66.44 222.95 65.15 222.19 65.15 217.37 66.65 218.24 66.44 222.95"
          />
          <polygon
            class="cls-131"
            points="66.61 223.28 66.44 223.18 66.44 218.16 66.61 218.26 66.61 223.28"
          />
          <polygon
            class="cls-132"
            points="66.78 223.18 66.61 223.28 66.61 218.26 66.78 218.16 66.78 223.18"
          />
          <polygon
            class="cls-131"
            points="66.78 218.16 66.61 218.26 66.44 218.16 66.61 218.07 66.78 218.16"
          />
          <polygon
            class="cls-175"
            points="68.08 223.79 66.9 223.11 66.9 218.29 68.07 218.96 68.08 223.79"
          />
          <polygon
            class="cls-131"
            points="66.78 223.38 66.61 223.28 66.61 218.26 66.78 218.36 66.78 223.38"
          />
          <polygon
            class="cls-132"
            points="66.95 223.28 66.78 223.38 66.78 218.36 66.95 218.26 66.95 223.28"
          />
          <polygon
            class="cls-131"
            points="66.95 218.26 66.78 218.36 66.61 218.26 66.78 218.16 66.95 218.26"
          />
          <polygon
            class="cls-176"
            points="66.9 223.3 66.82 223.35 66.82 218.33 66.9 218.29 66.9 223.3"
          />
          <polygon
            class="cls-131"
            points="66.78 223.18 66.78 223.38 67.95 224.05 67.95 223.86 66.78 223.18"
          />
          <polygon
            class="cls-131"
            points="66.95 223.09 66.78 223.18 67.95 223.86 68.12 223.76 66.95 223.09"
          />
          <polygon
            class="cls-132"
            points="68.12 223.76 67.95 223.86 67.95 224.05 68.12 223.95 68.12 223.76"
          />
          <polygon
            class="cls-176"
            points="66.9 223.1 66.82 223.15 67.82 223.74 67.91 223.69 66.9 223.1"
          />
          <polygon
            class="cls-142"
            points="67.78 223.72 66.82 223.15 66.82 218.33 67.99 219.01 67.78 223.72"
          />
          <polygon
            class="cls-131"
            points="67.95 224.05 67.78 223.95 67.78 218.94 67.95 219.03 67.95 224.05"
          />
          <polygon
            class="cls-132"
            points="68.12 223.95 67.95 224.05 67.95 219.03 68.12 218.94 68.12 223.95"
          />
          <polygon
            class="cls-131"
            points="68.12 218.94 67.95 219.03 67.78 218.94 67.95 218.84 68.12 218.94"
          />
          <polygon
            class="cls-175"
            points="69.75 224.75 68.24 223.88 68.24 219.06 69.75 219.93 69.75 224.75"
          />
          <polygon
            class="cls-131"
            points="68.12 224.15 67.95 224.05 67.95 219.03 68.12 219.13 68.12 224.15"
          />
          <polygon
            class="cls-132"
            points="68.28 224.05 68.12 224.15 68.12 219.13 68.28 219.03 68.28 224.05"
          />
          <polygon
            class="cls-131"
            points="68.28 219.03 68.12 219.13 67.95 219.03 68.12 218.94 68.28 219.03"
          />
          <polygon
            class="cls-176"
            points="68.24 224.07 68.16 224.12 68.16 219.11 68.24 219.06 68.24 224.07"
          />
          <polygon
            class="cls-131"
            points="68.12 223.95 68.12 224.15 69.62 225.02 69.62 224.82 68.12 223.95"
          />
          <polygon
            class="cls-131"
            points="68.28 223.86 68.12 223.95 69.62 224.82 69.79 224.73 68.28 223.86"
          />
          <polygon
            class="cls-132"
            points="69.79 224.73 69.62 224.82 69.62 225.02 69.79 224.92 69.79 224.73"
          />
          <polygon
            class="cls-176"
            points="68.24 223.88 68.16 223.92 69.5 224.71 69.58 224.66 68.24 223.88"
          />
          <polygon
            class="cls-142"
            points="69.45 224.68 68.16 223.92 68.16 219.11 69.66 219.98 69.45 224.68"
          />
          <polygon
            class="cls-131"
            points="69.62 225.02 69.45 224.92 69.45 219.9 69.62 220 69.62 225.02"
          />
          <polygon
            class="cls-132"
            points="69.79 224.92 69.62 225.02 69.62 220 69.79 219.9 69.79 224.92"
          />
          <polygon
            class="cls-131"
            points="69.79 219.9 69.62 220 69.45 219.9 69.62 219.81 69.79 219.9"
          />
          <polygon
            class="cls-177"
            points="68.12 221.88 68.07 221.86 68.05 221.87 68.1 221.9 68.12 221.88"
          />
          <polygon
            class="cls-178"
            points="68.07 221.47 68.03 221.44 68.03 221.91 68.07 221.94 68.07 221.47"
          />
          <polygon
            class="cls-177"
            points="68.1 221.45 68.07 221.47 68.03 221.44 68.05 221.42 68.1 221.45"
          />
          <polygon
            class="cls-179"
            points="68.07 221.47 68.07 221.94 68.1 221.92 68.12 221.91 68.12 221.88 68.1 221.9 68.1 221.45 68.07 221.47"
          />
          <polygon
            class="cls-132"
            points="75.24 227.84 76.31 227.33 80.92 224.56 80.92 219.54 75.24 222.82 75.24 227.84"
          />
          <polygon
            class="cls-131"
            points="75.24 227.84 69.75 224.7 69.7 219.71 75.24 222.82 75.24 227.84"
          />
          <polygon
            class="cls-175"
            points="79.03 228.56 76.6 227.16 76.6 222.34 79.03 223.74 79.03 228.56"
          />
          <polygon
            class="cls-131"
            points="76.48 227.43 76.31 227.33 76.31 222.31 76.48 222.41 76.48 227.43"
          />
          <polygon
            class="cls-132"
            points="76.64 227.33 76.48 227.43 76.48 222.41 76.64 222.31 76.64 227.33"
          />
          <polygon
            class="cls-131"
            points="76.64 222.31 76.48 222.41 76.31 222.31 76.48 222.22 76.64 222.31"
          />
          <polygon
            class="cls-176"
            points="76.6 227.35 76.52 227.4 76.52 222.39 76.6 222.34 76.6 227.35"
          />
          <polygon
            class="cls-131"
            points="76.48 227.23 76.48 227.43 78.9 228.83 78.9 228.63 76.48 227.23"
          />
          <polygon
            class="cls-131"
            points="76.64 227.14 76.48 227.23 78.9 228.63 79.07 228.54 76.64 227.14"
          />
          <polygon
            class="cls-132"
            points="79.07 228.54 78.9 228.63 78.9 228.83 79.07 228.73 79.07 228.54"
          />
          <polygon
            class="cls-176"
            points="76.6 227.16 76.52 227.2 78.78 228.52 78.86 228.47 76.6 227.16"
          />
          <polygon
            class="cls-142"
            points="78.73 228.49 76.52 227.2 76.52 222.39 78.94 223.79 78.73 228.49"
          />
          <polygon
            class="cls-131"
            points="78.9 228.83 78.73 228.73 78.73 223.71 78.9 223.81 78.9 228.83"
          />
          <polygon
            class="cls-132"
            points="79.07 228.73 78.9 228.83 78.9 223.81 79.07 223.71 79.07 228.73"
          />
          <polygon
            class="cls-131"
            points="79.07 223.71 78.9 223.81 78.73 223.71 78.9 223.62 79.07 223.71"
          />
          <polygon
            class="cls-175"
            points="81.45 229.96 79.19 228.66 79.19 223.83 81.45 225.14 81.45 229.96"
          />
          <polygon
            class="cls-131"
            points="79.07 228.92 78.9 228.83 78.9 223.81 79.07 223.91 79.07 228.92"
          />
          <polygon
            class="cls-132"
            points="79.23 228.83 79.07 228.92 79.07 223.91 79.23 223.81 79.23 228.83"
          />
          <polygon
            class="cls-131"
            points="79.23 223.81 79.07 223.91 78.9 223.81 79.07 223.71 79.23 223.81"
          />
          <polygon
            class="cls-176"
            points="79.19 228.85 79.11 228.9 79.11 223.88 79.19 223.83 79.19 228.85"
          />
          <polygon
            class="cls-131"
            points="79.07 228.73 79.07 228.92 81.33 230.23 81.33 230.03 79.07 228.73"
          />
          <polygon
            class="cls-131"
            points="79.23 228.63 79.07 228.73 81.33 230.03 81.49 229.94 79.23 228.63"
          />
          <polygon
            class="cls-132"
            points="81.49 229.94 81.33 230.03 81.33 230.23 81.49 230.13 81.49 229.94"
          />
          <polygon
            class="cls-176"
            points="79.19 228.65 79.11 228.7 81.2 229.92 81.28 229.87 79.19 228.65"
          />
          <polygon
            class="cls-142"
            points="81.16 229.89 79.11 228.7 79.11 223.88 81.37 225.19 81.16 229.89"
          />
          <polygon
            class="cls-131"
            points="81.33 230.23 81.16 230.13 81.16 225.11 81.33 225.21 81.33 230.23"
          />
          <polygon
            class="cls-132"
            points="81.49 230.13 81.33 230.23 81.33 225.21 81.49 225.11 81.49 230.13"
          />
          <polygon
            class="cls-131"
            points="81.49 225.11 81.33 225.21 81.16 225.11 81.33 225.02 81.49 225.11"
          />
          <polygon
            class="cls-131"
            points="80.59 225.52 53.84 210.08 53.84 210.85 80.59 226.29 80.59 225.52"
          />
          <polygon
            class="cls-175"
            points="62.06 214.91 60.88 214.23 60.88 209.41 62.06 210.08 62.06 214.91"
          />
          <polygon
            class="cls-131"
            points="60.76 214.49 60.59 214.4 60.59 209.38 60.76 209.48 60.76 214.49"
          />
          <polygon
            class="cls-132"
            points="60.93 214.4 60.76 214.49 60.76 209.48 60.93 209.38 60.93 214.4"
          />
          <polygon
            class="cls-131"
            points="60.93 209.38 60.76 209.48 60.59 209.38 60.76 209.28 60.93 209.38"
          />
          <polygon
            class="cls-176"
            points="60.88 214.42 60.8 214.47 60.8 209.45 60.88 209.41 60.88 214.42"
          />
          <polygon
            class="cls-131"
            points="60.76 214.3 60.76 214.49 61.93 215.17 61.93 214.98 60.76 214.3"
          />
          <polygon
            class="cls-131"
            points="60.93 214.2 60.76 214.3 61.93 214.98 62.1 214.88 60.93 214.2"
          />
          <polygon
            class="cls-132"
            points="62.1 214.88 61.93 214.98 61.93 215.17 62.1 215.07 62.1 214.88"
          />
          <polygon
            class="cls-176"
            points="60.88 214.22 60.8 214.27 61.8 214.86 61.89 214.81 60.88 214.22"
          />
          <polygon
            class="cls-142"
            points="61.76 214.84 60.8 214.27 60.8 209.45 61.97 210.13 61.76 214.84"
          />
          <polygon
            class="cls-131"
            points="61.93 215.17 61.76 215.07 61.76 210.06 61.93 210.15 61.93 215.17"
          />
          <polygon
            class="cls-132"
            points="62.1 215.07 61.93 215.17 61.93 210.15 62.1 210.06 62.1 215.07"
          />
          <polygon
            class="cls-131"
            points="62.1 210.06 61.93 210.15 61.76 210.06 61.93 209.96 62.1 210.06"
          />
          <polygon
            class="cls-175"
            points="63.39 215.68 62.22 215 62.22 210.18 63.39 210.85 63.39 215.68"
          />
          <polygon
            class="cls-131"
            points="62.1 215.27 61.93 215.17 61.93 210.15 62.1 210.25 62.1 215.27"
          />
          <polygon
            class="cls-132"
            points="62.27 215.17 62.1 215.27 62.1 210.25 62.27 210.15 62.27 215.17"
          />
          <polygon
            class="cls-131"
            points="62.27 210.15 62.1 210.25 61.93 210.15 62.1 210.06 62.27 210.15"
          />
          <polygon
            class="cls-176"
            points="62.22 215.19 62.14 215.24 62.14 210.22 62.22 210.18 62.22 215.19"
          />
          <polygon
            class="cls-131"
            points="62.1 215.07 62.1 215.27 63.27 215.94 63.27 215.75 62.1 215.07"
          />
          <polygon
            class="cls-131"
            points="62.27 214.98 62.1 215.07 63.27 215.75 63.44 215.65 62.27 214.98"
          />
          <polygon
            class="cls-132"
            points="63.44 215.65 63.27 215.75 63.27 215.94 63.44 215.84 63.44 215.65"
          />
          <polygon
            class="cls-176"
            points="62.22 214.99 62.14 215.04 63.14 215.63 63.23 215.59 62.22 214.99"
          />
          <polygon
            class="cls-142"
            points="63.1 215.61 62.14 215.04 62.14 210.22 63.31 210.9 63.1 215.61"
          />
          <polygon
            class="cls-131"
            points="63.27 215.94 63.1 215.84 63.1 210.83 63.27 210.93 63.27 215.94"
          />
          <polygon
            class="cls-132"
            points="63.44 215.84 63.27 215.94 63.27 210.93 63.44 210.83 63.44 215.84"
          />
          <polygon
            class="cls-131"
            points="63.44 210.83 63.27 210.93 63.1 210.83 63.27 210.73 63.44 210.83"
          />
          <polygon
            class="cls-175"
            points="56.62 211.76 54.2 210.36 54.2 205.54 56.62 206.94 56.62 211.76"
          />
          <polygon
            class="cls-131"
            points="54.07 210.63 53.91 210.54 53.91 205.52 54.07 205.62 54.07 210.63"
          />
          <polygon
            class="cls-132"
            points="54.24 210.54 54.07 210.63 54.07 205.62 54.24 205.52 54.24 210.54"
          />
          <polygon
            class="cls-131"
            points="54.24 205.52 54.07 205.62 53.91 205.52 54.07 205.42 54.24 205.52"
          />
          <polygon
            class="cls-176"
            points="54.2 210.56 54.11 210.61 54.11 205.59 54.2 205.54 54.2 210.56"
          />
          <polygon
            class="cls-131"
            points="54.07 210.44 54.07 210.63 56.5 212.03 56.5 211.84 54.07 210.44"
          />
          <polygon
            class="cls-131"
            points="54.24 210.34 54.07 210.44 56.5 211.84 56.66 211.74 54.24 210.34"
          />
          <polygon
            class="cls-132"
            points="56.66 211.74 56.5 211.84 56.5 212.03 56.66 211.94 56.66 211.74"
          />
          <polygon
            class="cls-176"
            points="54.2 210.36 54.11 210.41 56.37 211.73 56.45 211.68 54.2 210.36"
          />
          <polygon
            class="cls-142"
            points="56.33 211.7 54.11 210.41 54.11 205.59 56.54 206.99 56.33 211.7"
          />
          <polygon
            class="cls-131"
            points="56.5 212.03 56.33 211.94 56.33 206.92 56.5 207.01 56.5 212.03"
          />
          <polygon
            class="cls-132"
            points="56.66 211.94 56.5 212.03 56.5 207.01 56.66 206.92 56.66 211.94"
          />
          <polygon
            class="cls-131"
            points="56.66 206.92 56.5 207.01 56.33 206.92 56.5 206.82 56.66 206.92"
          />
          <polygon
            class="cls-175"
            points="59.05 213.16 56.79 211.86 56.79 207.04 59.05 208.34 59.05 213.16"
          />
          <polygon
            class="cls-131"
            points="56.66 212.13 56.5 212.03 56.5 207.01 56.66 207.11 56.66 212.13"
          />
          <polygon
            class="cls-132"
            points="56.83 212.03 56.66 212.13 56.66 207.11 56.83 207.01 56.83 212.03"
          />
          <polygon
            class="cls-131"
            points="56.83 207.01 56.66 207.11 56.5 207.01 56.66 206.92 56.83 207.01"
          />
          <polygon
            class="cls-176"
            points="56.79 212.06 56.7 212.11 56.7 207.09 56.79 207.04 56.79 212.06"
          />
          <polygon
            class="cls-131"
            points="56.66 211.94 56.66 212.13 58.92 213.43 58.92 213.24 56.66 211.94"
          />
          <polygon
            class="cls-131"
            points="56.83 211.84 56.66 211.94 58.92 213.24 59.09 213.14 56.83 211.84"
          />
          <polygon
            class="cls-132"
            points="59.09 213.14 58.92 213.24 58.92 213.43 59.09 213.34 59.09 213.14"
          />
          <polygon
            class="cls-176"
            points="56.79 211.86 56.7 211.91 58.8 213.13 58.88 213.08 56.79 211.86"
          />
          <polygon
            class="cls-142"
            points="58.75 213.1 56.7 211.91 56.7 207.09 58.96 208.39 58.75 213.1"
          />
          <polygon
            class="cls-131"
            points="58.92 213.43 58.75 213.34 58.75 208.32 58.92 208.41 58.92 213.43"
          />
          <polygon
            class="cls-132"
            points="59.09 213.34 58.92 213.43 58.92 208.41 59.09 208.32 59.09 213.34"
          />
          <polygon
            class="cls-131"
            points="59.09 208.32 58.92 208.41 58.75 208.32 58.92 208.22 59.09 208.32"
          />
          <polygon
            class="cls-175"
            points="66.74 217.6 65.23 216.73 65.23 211.91 66.74 212.78 66.74 217.6"
          />
          <polygon
            class="cls-131"
            points="65.11 217 64.94 216.91 64.94 211.89 65.11 211.99 65.11 217"
          />
          <polygon
            class="cls-132"
            points="65.27 216.91 65.11 217 65.11 211.99 65.27 211.89 65.27 216.91"
          />
          <polygon
            class="cls-131"
            points="65.27 211.89 65.11 211.99 64.94 211.89 65.11 211.79 65.27 211.89"
          />
          <polygon
            class="cls-176"
            points="65.23 216.93 65.15 216.98 65.15 211.96 65.23 211.91 65.23 216.93"
          />
          <polygon
            class="cls-131"
            points="65.11 216.81 65.11 217 66.61 217.87 66.61 217.68 65.11 216.81"
          />
          <polygon
            class="cls-131"
            points="65.27 216.72 65.11 216.81 66.61 217.68 66.78 217.58 65.27 216.72"
          />
          <polygon
            class="cls-132"
            points="66.78 217.58 66.61 217.68 66.61 217.87 66.78 217.78 66.78 217.58"
          />
          <polygon
            class="cls-176"
            points="65.23 216.73 65.15 216.78 66.49 217.56 66.57 217.52 65.23 216.73"
          />
          <polygon
            class="cls-142"
            points="66.44 217.54 65.15 216.78 65.15 211.96 66.65 212.83 66.44 217.54"
          />
          <polygon
            class="cls-131"
            points="66.61 217.87 66.44 217.78 66.44 212.76 66.61 212.85 66.61 217.87"
          />
          <polygon
            class="cls-132"
            points="66.78 217.78 66.61 217.87 66.61 212.85 66.78 212.76 66.78 217.78"
          />
          <polygon
            class="cls-131"
            points="66.78 212.76 66.61 212.85 66.44 212.76 66.61 212.66 66.78 212.76"
          />
          <polygon
            class="cls-175"
            points="68.07 218.37 66.9 217.7 66.9 212.88 68.07 213.55 68.07 218.37"
          />
          <polygon
            class="cls-131"
            points="66.78 217.97 66.61 217.87 66.61 212.85 66.78 212.95 66.78 217.97"
          />
          <polygon
            class="cls-132"
            points="66.95 217.87 66.78 217.97 66.78 212.95 66.95 212.85 66.95 217.87"
          />
          <polygon
            class="cls-131"
            points="66.95 212.85 66.78 212.95 66.61 212.85 66.78 212.76 66.95 212.85"
          />
          <polygon
            class="cls-176"
            points="66.9 217.9 66.82 217.95 66.82 212.93 66.9 212.88 66.9 217.9"
          />
          <polygon
            class="cls-131"
            points="66.78 217.78 66.78 217.97 67.95 218.65 67.95 218.45 66.78 217.78"
          />
          <polygon
            class="cls-131"
            points="66.95 217.68 66.78 217.78 67.95 218.45 68.12 218.36 66.95 217.68"
          />
          <polygon
            class="cls-132"
            points="68.12 218.36 67.95 218.45 67.95 218.65 68.12 218.55 68.12 218.36"
          />
          <polygon
            class="cls-176"
            points="66.9 217.7 66.82 217.75 67.82 218.34 67.91 218.29 66.9 217.7"
          />
          <polygon
            class="cls-142"
            points="67.78 218.31 66.82 217.75 66.82 212.93 67.99 213.6 67.78 218.31"
          />
          <polygon
            class="cls-131"
            points="67.95 218.65 67.78 218.55 67.78 213.53 67.95 213.63 67.95 218.65"
          />
          <polygon
            class="cls-132"
            points="68.12 218.55 67.95 218.65 67.95 213.63 68.12 213.53 68.12 218.55"
          />
          <polygon
            class="cls-131"
            points="68.12 213.53 67.95 213.63 67.78 213.53 67.95 213.43 68.12 213.53"
          />
          <polygon
            class="cls-175"
            points="69.75 219.34 68.24 218.47 68.24 213.65 69.75 214.52 69.75 219.34"
          />
          <polygon
            class="cls-131"
            points="68.12 218.74 67.95 218.65 67.95 213.63 68.12 213.72 68.12 218.74"
          />
          <polygon
            class="cls-132"
            points="68.28 218.65 68.12 218.74 68.12 213.72 68.28 213.63 68.28 218.65"
          />
          <polygon
            class="cls-131"
            points="68.28 213.63 68.12 213.72 67.95 213.63 68.12 213.53 68.28 213.63"
          />
          <polygon
            class="cls-176"
            points="68.24 218.67 68.16 218.72 68.16 213.7 68.24 213.65 68.24 218.67"
          />
          <polygon
            class="cls-131"
            points="68.12 218.55 68.12 218.74 69.62 219.61 69.62 219.42 68.12 218.55"
          />
          <polygon
            class="cls-131"
            points="68.28 218.45 68.12 218.55 69.62 219.42 69.79 219.32 68.28 218.45"
          />
          <polygon
            class="cls-132"
            points="69.79 219.32 69.62 219.42 69.62 219.61 69.79 219.51 69.79 219.32"
          />
          <polygon
            class="cls-176"
            points="68.24 218.47 68.16 218.52 69.5 219.3 69.58 219.25 68.24 218.47"
          />
          <polygon
            class="cls-142"
            points="69.45 219.28 68.16 218.52 68.16 213.7 69.66 214.57 69.45 219.28"
          />
          <polygon
            class="cls-131"
            points="69.62 219.61 69.45 219.51 69.45 214.5 69.62 214.59 69.62 219.61"
          />
          <polygon
            class="cls-132"
            points="69.79 219.51 69.62 219.61 69.62 214.59 69.79 214.5 69.79 219.51"
          />
          <polygon
            class="cls-131"
            points="69.79 214.5 69.62 214.59 69.45 214.5 69.62 214.4 69.79 214.5"
          />
          <polygon
            class="cls-131"
            points="72.05 220.96 69.62 219.59 69.62 214.5 72.05 215.87 72.05 220.96"
          />
          <polygon
            class="cls-175"
            points="74.09 221.85 72.25 220.79 72.25 215.97 74.09 217.03 74.09 221.85"
          />
          <polygon
            class="cls-131"
            points="72.13 221.06 71.96 220.96 71.96 215.94 72.13 216.04 72.13 221.06"
          />
          <polygon
            class="cls-132"
            points="72.3 220.96 72.13 221.06 72.13 216.04 72.3 215.94 72.3 220.96"
          />
          <polygon
            class="cls-131"
            points="72.3 215.94 72.13 216.04 71.96 215.94 72.13 215.85 72.3 215.94"
          />
          <polygon
            class="cls-176"
            points="72.25 220.99 72.17 221.03 72.17 216.01 72.25 215.97 72.25 220.99"
          />
          <polygon
            class="cls-131"
            points="72.13 220.87 72.13 221.06 73.97 222.12 73.97 221.93 72.13 220.87"
          />
          <polygon
            class="cls-131"
            points="72.3 220.77 72.13 220.87 73.97 221.93 74.14 221.83 72.3 220.77"
          />
          <polygon
            class="cls-132"
            points="74.14 221.83 73.97 221.93 73.97 222.12 74.14 222.02 74.14 221.83"
          />
          <polygon
            class="cls-176"
            points="72.25 220.79 72.17 220.84 73.84 221.81 73.93 221.76 72.25 220.79"
          />
          <polygon
            class="cls-142"
            points="73.8 221.79 72.17 220.84 72.17 216.01 74.01 217.08 73.8 221.79"
          />
          <polygon
            class="cls-131"
            points="73.97 222.12 73.8 222.02 73.8 217 73.97 217.1 73.97 222.12"
          />
          <polygon
            class="cls-132"
            points="74.14 222.02 73.97 222.12 73.97 217.1 74.14 217 74.14 222.02"
          />
          <polygon
            class="cls-131"
            points="74.14 217 73.97 217.1 73.8 217 73.97 216.91 74.14 217"
          />
          <polygon
            class="cls-131"
            points="74.69 217.41 74.69 217.41 73.97 217.01 73.97 222.11 74.69 222.5 74.69 222.5 75.06 222.7 75.06 217.6 74.69 217.41"
          />
          <polygon
            class="cls-175"
            points="77.69 223.92 75.26 222.53 75.26 217.71 77.69 219.1 77.69 223.92"
          />
          <polygon
            class="cls-131"
            points="75.14 222.8 74.97 222.7 74.97 217.68 75.14 217.78 75.14 222.8"
          />
          <polygon
            class="cls-132"
            points="75.31 222.7 75.14 222.8 75.14 217.78 75.31 217.68 75.31 222.7"
          />
          <polygon
            class="cls-131"
            points="75.31 217.68 75.14 217.78 74.97 217.68 75.14 217.58 75.31 217.68"
          />
          <polygon
            class="cls-176"
            points="75.26 222.72 75.18 222.77 75.18 217.75 75.26 217.71 75.26 222.72"
          />
          <polygon
            class="cls-131"
            points="75.14 222.6 75.14 222.8 77.56 224.2 77.56 224 75.14 222.6"
          />
          <polygon
            class="cls-131"
            points="75.31 222.51 75.14 222.6 77.56 224 77.73 223.91 75.31 222.51"
          />
          <polygon
            class="cls-132"
            points="77.73 223.91 77.56 224 77.56 224.2 77.73 224.1 77.73 223.91"
          />
          <polygon
            class="cls-176"
            points="75.26 222.53 75.18 222.57 77.44 223.89 77.52 223.84 75.26 222.53"
          />
          <polygon
            class="cls-142"
            points="77.4 223.86 75.18 222.57 75.18 217.75 77.61 219.15 77.4 223.86"
          />
          <polygon
            class="cls-131"
            points="77.56 224.2 77.4 224.1 77.4 219.08 77.56 219.18 77.56 224.2"
          />
          <polygon
            class="cls-132"
            points="77.73 224.1 77.56 224.2 77.56 219.18 77.73 219.08 77.73 224.1"
          />
          <polygon
            class="cls-131"
            points="77.73 219.08 77.56 219.18 77.4 219.08 77.56 218.98 77.73 219.08"
          />
          <polygon
            class="cls-175"
            points="80.11 225.32 77.86 224.02 77.86 219.2 80.11 220.5 80.11 225.32"
          />
          <polygon
            class="cls-131"
            points="77.73 224.29 77.56 224.2 77.56 219.18 77.73 219.27 77.73 224.29"
          />
          <polygon
            class="cls-132"
            points="77.9 224.2 77.73 224.29 77.73 219.27 77.9 219.18 77.9 224.2"
          />
          <polygon
            class="cls-131"
            points="77.9 219.18 77.73 219.27 77.56 219.18 77.73 219.08 77.9 219.18"
          />
          <polygon
            class="cls-176"
            points="77.86 224.22 77.77 224.27 77.77 219.25 77.86 219.2 77.86 224.22"
          />
          <polygon
            class="cls-131"
            points="77.73 224.1 77.73 224.29 79.99 225.59 79.99 225.4 77.73 224.1"
          />
          <polygon
            class="cls-131"
            points="77.9 224 77.73 224.1 79.99 225.4 80.16 225.31 77.9 224"
          />
          <polygon
            class="cls-132"
            points="80.16 225.31 79.99 225.4 79.99 225.59 80.16 225.5 80.16 225.31"
          />
          <polygon
            class="cls-176"
            points="77.86 224.02 77.77 224.07 79.86 225.29 79.95 225.24 77.86 224.02"
          />
          <polygon
            class="cls-142"
            points="79.82 225.26 77.77 224.07 77.77 219.25 80.03 220.55 79.82 225.26"
          />
          <polygon
            class="cls-131"
            points="79.99 225.59 79.82 225.5 79.82 220.48 79.99 220.58 79.99 225.59"
          />
          <polygon
            class="cls-132"
            points="80.16 225.5 79.99 225.59 79.99 220.58 80.16 220.48 80.16 225.5"
          />
          <polygon
            class="cls-131"
            points="80.16 220.48 79.99 220.58 79.82 220.48 79.99 220.38 80.16 220.48"
          />
          <polygon
            class="cls-131"
            points="80.59 220.12 53.84 204.68 53.84 205.45 80.59 220.89 80.59 220.12"
          />
          <polygon
            class="cls-175"
            points="62.06 209.5 60.88 208.82 60.88 204 62.05 204.68 62.06 209.5"
          />
          <polygon
            class="cls-131"
            points="60.76 209.09 60.59 208.99 60.59 203.97 60.76 204.07 60.76 209.09"
          />
          <polygon
            class="cls-132"
            points="60.93 208.99 60.76 209.09 60.76 204.07 60.93 203.97 60.93 208.99"
          />
          <polygon
            class="cls-131"
            points="60.93 203.97 60.76 204.07 60.59 203.97 60.76 203.88 60.93 203.97"
          />
          <polygon
            class="cls-176"
            points="60.88 209.01 60.8 209.06 60.8 204.05 60.88 204 60.88 209.01"
          />
          <polygon
            class="cls-131"
            points="60.76 208.89 60.76 209.09 61.93 209.76 61.93 209.57 60.76 208.89"
          />
          <polygon
            class="cls-131"
            points="60.93 208.8 60.76 208.89 61.93 209.57 62.1 209.47 60.93 208.8"
          />
          <polygon
            class="cls-132"
            points="62.1 209.47 61.93 209.57 61.93 209.76 62.1 209.67 62.1 209.47"
          />
          <polygon
            class="cls-176"
            points="60.88 208.82 60.8 208.86 61.8 209.46 61.89 209.41 60.88 208.82"
          />
          <polygon
            class="cls-142"
            points="61.76 209.43 60.8 208.86 60.8 204.05 61.97 204.72 61.76 209.43"
          />
          <polygon
            class="cls-131"
            points="61.93 209.76 61.76 209.67 61.76 204.65 61.93 204.75 61.93 209.76"
          />
          <polygon
            class="cls-132"
            points="62.1 209.67 61.93 209.76 61.93 204.75 62.1 204.65 62.1 209.67"
          />
          <polygon
            class="cls-131"
            points="62.1 204.65 61.93 204.75 61.76 204.65 61.93 204.55 62.1 204.65"
          />
          <polygon
            class="cls-175"
            points="63.39 210.27 62.22 209.6 62.22 204.77 63.39 205.45 63.39 210.27"
          />
          <polygon
            class="cls-131"
            points="62.1 209.86 61.93 209.76 61.93 204.75 62.1 204.84 62.1 209.86"
          />
          <polygon
            class="cls-132"
            points="62.26 209.76 62.1 209.86 62.1 204.84 62.26 204.75 62.26 209.76"
          />
          <polygon
            class="cls-131"
            points="62.26 204.75 62.1 204.84 61.93 204.75 62.1 204.65 62.26 204.75"
          />
          <polygon
            class="cls-176"
            points="62.22 209.79 62.14 209.84 62.14 204.82 62.22 204.77 62.22 209.79"
          />
          <polygon
            class="cls-131"
            points="62.1 209.67 62.1 209.86 63.27 210.54 63.27 210.34 62.1 209.67"
          />
          <polygon
            class="cls-131"
            points="62.26 209.57 62.1 209.67 63.27 210.34 63.44 210.25 62.26 209.57"
          />
          <polygon
            class="cls-132"
            points="63.44 210.25 63.27 210.34 63.27 210.54 63.44 210.44 63.44 210.25"
          />
          <polygon
            class="cls-176"
            points="62.22 209.59 62.14 209.64 63.14 210.23 63.23 210.18 62.22 209.59"
          />
          <polygon
            class="cls-142"
            points="63.1 210.2 62.14 209.64 62.14 204.82 63.31 205.5 63.1 210.2"
          />
          <polygon
            class="cls-131"
            points="63.27 210.54 63.1 210.44 63.1 205.42 63.27 205.52 63.27 210.54"
          />
          <polygon
            class="cls-132"
            points="63.44 210.44 63.27 210.54 63.27 205.52 63.44 205.42 63.44 210.44"
          />
          <polygon
            class="cls-131"
            points="63.44 205.42 63.27 205.52 63.1 205.42 63.27 205.33 63.44 205.42"
          />
          <polygon
            class="cls-175"
            points="56.62 206.36 54.2 204.96 54.2 200.14 56.62 201.54 56.62 206.36"
          />
          <polygon
            class="cls-131"
            points="54.07 205.23 53.91 205.13 53.91 200.11 54.07 200.21 54.07 205.23"
          />
          <polygon
            class="cls-132"
            points="54.24 205.13 54.07 205.23 54.07 200.21 54.24 200.11 54.24 205.13"
          />
          <polygon
            class="cls-131"
            points="54.24 200.11 54.07 200.21 53.91 200.11 54.07 200.02 54.24 200.11"
          />
          <polygon
            class="cls-176"
            points="54.2 205.16 54.11 205.2 54.11 200.19 54.2 200.14 54.2 205.16"
          />
          <polygon
            class="cls-131"
            points="54.07 205.03 54.07 205.23 56.5 206.63 56.5 206.44 54.07 205.03"
          />
          <polygon
            class="cls-131"
            points="54.24 204.94 54.07 205.03 56.5 206.44 56.66 206.34 54.24 204.94"
          />
          <polygon
            class="cls-132"
            points="56.66 206.34 56.5 206.44 56.5 206.63 56.66 206.53 56.66 206.34"
          />
          <polygon
            class="cls-176"
            points="54.2 204.96 54.11 205 56.37 206.32 56.45 206.27 54.2 204.96"
          />
          <polygon
            class="cls-142"
            points="56.33 206.29 54.11 205 54.11 200.19 56.54 201.59 56.33 206.29"
          />
          <polygon
            class="cls-131"
            points="56.5 206.63 56.33 206.53 56.33 201.51 56.5 201.61 56.5 206.63"
          />
          <polygon
            class="cls-132"
            points="56.66 206.53 56.5 206.63 56.5 201.61 56.66 201.51 56.66 206.53"
          />
          <polygon
            class="cls-131"
            points="56.66 201.51 56.5 201.61 56.33 201.51 56.5 201.42 56.66 201.51"
          />
          <polygon
            class="cls-175"
            points="59.05 207.76 56.79 206.45 56.79 201.63 59.05 202.94 59.05 207.76"
          />
          <polygon
            class="cls-131"
            points="56.66 206.72 56.5 206.63 56.5 201.61 56.66 201.71 56.66 206.72"
          />
          <polygon
            class="cls-132"
            points="56.83 206.63 56.66 206.72 56.66 201.71 56.83 201.61 56.83 206.63"
          />
          <polygon
            class="cls-131"
            points="56.83 201.61 56.66 201.71 56.5 201.61 56.66 201.51 56.83 201.61"
          />
          <polygon
            class="cls-176"
            points="56.79 206.65 56.7 206.7 56.7 201.68 56.79 201.63 56.79 206.65"
          />
          <polygon
            class="cls-131"
            points="56.66 206.53 56.66 206.72 58.92 208.03 58.92 207.84 56.66 206.53"
          />
          <polygon
            class="cls-131"
            points="56.83 206.44 56.66 206.53 58.92 207.84 59.09 207.74 56.83 206.44"
          />
          <polygon
            class="cls-132"
            points="59.09 207.74 58.92 207.84 58.92 208.03 59.09 207.93 59.09 207.74"
          />
          <polygon
            class="cls-176"
            points="56.79 206.45 56.7 206.5 58.8 207.72 58.88 207.67 56.79 206.45"
          />
          <polygon
            class="cls-142"
            points="58.75 207.69 56.7 206.5 56.7 201.68 58.96 202.98 58.75 207.69"
          />
          <polygon
            class="cls-131"
            points="58.92 208.03 58.75 207.93 58.75 202.91 58.92 203.01 58.92 208.03"
          />
          <polygon
            class="cls-132"
            points="59.09 207.93 58.92 208.03 58.92 203.01 59.09 202.91 59.09 207.93"
          />
          <polygon
            class="cls-131"
            points="59.09 202.91 58.92 203.01 58.75 202.91 58.92 202.81 59.09 202.91"
          />
          <polygon
            class="cls-175"
            points="66.74 212.2 65.23 211.33 65.23 206.51 66.74 207.38 66.74 212.2"
          />
          <polygon
            class="cls-131"
            points="65.11 211.6 64.94 211.5 64.94 206.48 65.11 206.58 65.11 211.6"
          />
          <polygon
            class="cls-132"
            points="65.27 211.5 65.11 211.6 65.11 206.58 65.27 206.48 65.27 211.5"
          />
          <polygon
            class="cls-131"
            points="65.27 206.48 65.11 206.58 64.94 206.48 65.11 206.39 65.27 206.48"
          />
          <polygon
            class="cls-176"
            points="65.23 211.53 65.15 211.57 65.15 206.56 65.23 206.51 65.23 211.53"
          />
          <polygon
            class="cls-131"
            points="65.11 211.41 65.11 211.6 66.61 212.47 66.61 212.28 65.11 211.41"
          />
          <polygon
            class="cls-131"
            points="65.27 211.31 65.11 211.41 66.61 212.28 66.78 212.18 65.27 211.31"
          />
          <polygon
            class="cls-132"
            points="66.78 212.18 66.61 212.28 66.61 212.47 66.78 212.37 66.78 212.18"
          />
          <polygon
            class="cls-176"
            points="65.23 211.33 65.15 211.38 66.49 212.16 66.57 212.11 65.23 211.33"
          />
          <polygon
            class="cls-142"
            points="66.44 212.13 65.15 211.38 65.15 206.56 66.65 207.42 66.44 212.13"
          />
          <polygon
            class="cls-131"
            points="66.61 212.47 66.44 212.37 66.44 207.35 66.61 207.45 66.61 212.47"
          />
          <polygon
            class="cls-132"
            points="66.78 212.37 66.61 212.47 66.61 207.45 66.78 207.35 66.78 212.37"
          />
          <polygon
            class="cls-131"
            points="66.78 207.35 66.61 207.45 66.44 207.35 66.61 207.25 66.78 207.35"
          />
          <polygon
            class="cls-175"
            points="68.07 212.97 66.9 212.29 66.9 207.47 68.07 208.15 68.07 212.97"
          />
          <polygon
            class="cls-131"
            points="66.78 212.56 66.61 212.47 66.61 207.45 66.78 207.54 66.78 212.56"
          />
          <polygon
            class="cls-132"
            points="66.94 212.47 66.78 212.56 66.78 207.54 66.94 207.45 66.94 212.47"
          />
          <polygon
            class="cls-131"
            points="66.94 207.45 66.78 207.54 66.61 207.45 66.78 207.35 66.94 207.45"
          />
          <polygon
            class="cls-176"
            points="66.9 212.49 66.82 212.54 66.82 207.52 66.9 207.47 66.9 212.49"
          />
          <polygon
            class="cls-131"
            points="66.78 212.37 66.78 212.56 67.95 213.24 67.95 213.05 66.78 212.37"
          />
          <polygon
            class="cls-131"
            points="66.94 212.28 66.78 212.37 67.95 213.05 68.12 212.95 66.94 212.28"
          />
          <polygon
            class="cls-132"
            points="68.12 212.95 67.95 213.05 67.95 213.24 68.12 213.14 68.12 212.95"
          />
          <polygon
            class="cls-176"
            points="66.9 212.29 66.82 212.34 67.82 212.93 67.91 212.88 66.9 212.29"
          />
          <polygon
            class="cls-142"
            points="67.78 212.91 66.82 212.34 66.82 207.52 67.99 208.2 67.78 212.91"
          />
          <polygon
            class="cls-131"
            points="67.95 213.24 67.78 213.14 67.78 208.12 67.95 208.22 67.95 213.24"
          />
          <polygon
            class="cls-132"
            points="68.12 213.14 67.95 213.24 67.95 208.22 68.12 208.12 68.12 213.14"
          />
          <polygon
            class="cls-131"
            points="68.12 208.12 67.95 208.22 67.78 208.12 67.95 208.03 68.12 208.12"
          />
          <polygon
            class="cls-175"
            points="69.75 213.93 68.24 213.06 68.24 208.25 69.75 209.11 69.75 213.93"
          />
          <polygon
            class="cls-131"
            points="68.12 213.34 67.95 213.24 67.95 208.22 68.12 208.32 68.12 213.34"
          />
          <polygon
            class="cls-132"
            points="68.28 213.24 68.12 213.34 68.12 208.32 68.28 208.22 68.28 213.24"
          />
          <polygon
            class="cls-131"
            points="68.28 208.22 68.12 208.32 67.95 208.22 68.12 208.12 68.28 208.22"
          />
          <polygon
            class="cls-176"
            points="68.24 213.26 68.16 213.31 68.16 208.29 68.24 208.25 68.24 213.26"
          />
          <polygon
            class="cls-131"
            points="68.12 213.14 68.12 213.34 69.62 214.21 69.62 214.01 68.12 213.14"
          />
          <polygon
            class="cls-131"
            points="68.28 213.05 68.12 213.14 69.62 214.01 69.79 213.91 68.28 213.05"
          />
          <polygon
            class="cls-132"
            points="69.79 213.91 69.62 214.01 69.62 214.21 69.79 214.11 69.79 213.91"
          />
          <polygon
            class="cls-176"
            points="68.24 213.06 68.16 213.11 69.5 213.9 69.58 213.85 68.24 213.06"
          />
          <polygon
            class="cls-142"
            points="69.45 213.87 68.16 213.11 68.16 208.29 69.66 209.16 69.45 213.87"
          />
          <polygon
            class="cls-131"
            points="69.62 214.21 69.45 214.11 69.45 209.09 69.62 209.19 69.62 214.21"
          />
          <polygon
            class="cls-132"
            points="69.79 214.11 69.62 214.21 69.62 209.19 69.79 209.09 69.79 214.11"
          />
          <polygon
            class="cls-131"
            points="69.79 209.09 69.62 209.19 69.45 209.09 69.62 208.99 69.79 209.09"
          />
          <polygon
            class="cls-131"
            points="72.05 215.56 69.49 214.16 69.49 208.99 72.05 210.38 72.05 215.56"
          />
          <polygon
            class="cls-175"
            points="74.09 216.44 72.25 215.38 72.25 210.56 74.09 211.62 74.09 216.44"
          />
          <polygon
            class="cls-131"
            points="72.13 215.65 71.96 215.56 71.96 210.54 72.13 210.63 72.13 215.65"
          />
          <polygon
            class="cls-132"
            points="72.3 215.56 72.13 215.65 72.13 210.63 72.3 210.54 72.3 215.56"
          />
          <polygon
            class="cls-131"
            points="72.3 210.54 72.13 210.63 71.96 210.54 72.13 210.44 72.3 210.54"
          />
          <polygon
            class="cls-176"
            points="72.25 215.58 72.17 215.63 72.17 210.61 72.25 210.56 72.25 215.58"
          />
          <polygon
            class="cls-131"
            points="72.13 215.46 72.13 215.65 73.97 216.71 73.97 216.52 72.13 215.46"
          />
          <polygon
            class="cls-131"
            points="72.3 215.36 72.13 215.46 73.97 216.52 74.14 216.43 72.3 215.36"
          />
          <polygon
            class="cls-132"
            points="74.14 216.43 73.97 216.52 73.97 216.71 74.14 216.62 74.14 216.43"
          />
          <polygon
            class="cls-176"
            points="72.25 215.38 72.17 215.43 73.84 216.41 73.93 216.36 72.25 215.38"
          />
          <polygon
            class="cls-142"
            points="73.8 216.38 72.17 215.43 72.17 210.61 74.01 211.67 73.8 216.38"
          />
          <polygon
            class="cls-131"
            points="73.97 216.71 73.8 216.62 73.8 211.6 73.97 211.69 73.97 216.71"
          />
          <polygon
            class="cls-132"
            points="74.14 216.62 73.97 216.71 73.97 211.69 74.14 211.6 74.14 216.62"
          />
          <polygon
            class="cls-131"
            points="74.14 211.6 73.97 211.69 73.8 211.6 73.97 211.5 74.14 211.6"
          />
          <polygon
            class="cls-131"
            points="74.67 211.81 74.67 211.81 73.97 211.41 73.97 216.68 74.67 217.09 74.67 217.09 75.02 217.29 75.02 212.01 74.67 211.81"
          />
          <polygon
            class="cls-175"
            points="77.69 218.52 75.26 217.12 75.26 212.3 77.69 213.7 77.69 218.52"
          />
          <polygon
            class="cls-131"
            points="75.14 217.39 74.97 217.29 74.97 212.28 75.14 212.37 75.14 217.39"
          />
          <polygon
            class="cls-132"
            points="75.31 217.29 75.14 217.39 75.14 212.37 75.31 212.28 75.31 217.29"
          />
          <polygon
            class="cls-131"
            points="75.31 212.28 75.14 212.37 74.97 212.28 75.14 212.18 75.31 212.28"
          />
          <polygon
            class="cls-176"
            points="75.26 217.32 75.18 217.37 75.18 212.35 75.26 212.3 75.26 217.32"
          />
          <polygon
            class="cls-131"
            points="75.14 217.2 75.14 217.39 77.56 218.79 77.56 218.6 75.14 217.2"
          />
          <polygon
            class="cls-131"
            points="75.31 217.1 75.14 217.2 77.56 218.6 77.73 218.5 75.31 217.1"
          />
          <polygon
            class="cls-132"
            points="77.73 218.5 77.56 218.6 77.56 218.79 77.73 218.69 77.73 218.5"
          />
          <polygon
            class="cls-176"
            points="75.26 217.12 75.18 217.17 77.44 218.48 77.52 218.43 75.26 217.12"
          />
          <polygon
            class="cls-142"
            points="77.4 218.46 75.18 217.17 75.18 212.35 77.6 213.75 77.4 218.46"
          />
          <polygon
            class="cls-131"
            points="77.56 218.79 77.4 218.69 77.4 213.68 77.56 213.77 77.56 218.79"
          />
          <polygon
            class="cls-132"
            points="77.73 218.69 77.56 218.79 77.56 213.77 77.73 213.68 77.73 218.69"
          />
          <polygon
            class="cls-131"
            points="77.73 213.68 77.56 213.77 77.4 213.68 77.56 213.58 77.73 213.68"
          />
          <polygon
            class="cls-175"
            points="80.11 219.92 77.86 218.62 77.86 213.79 80.11 215.1 80.11 219.92"
          />
          <polygon
            class="cls-131"
            points="77.73 218.89 77.56 218.79 77.56 213.77 77.73 213.87 77.73 218.89"
          />
          <polygon
            class="cls-132"
            points="77.9 218.79 77.73 218.89 77.73 213.87 77.9 213.77 77.9 218.79"
          />
          <polygon
            class="cls-131"
            points="77.9 213.77 77.73 213.87 77.56 213.77 77.73 213.68 77.9 213.77"
          />
          <polygon
            class="cls-176"
            points="77.86 218.81 77.77 218.86 77.77 213.84 77.86 213.79 77.86 218.81"
          />
          <polygon
            class="cls-131"
            points="77.73 218.69 77.73 218.89 79.99 220.19 79.99 220 77.73 218.69"
          />
          <polygon
            class="cls-131"
            points="77.9 218.6 77.73 218.69 79.99 220 80.15 219.9 77.9 218.6"
          />
          <polygon
            class="cls-132"
            points="80.15 219.9 79.99 220 79.99 220.19 80.15 220.09 80.15 219.9"
          />
          <polygon
            class="cls-176"
            points="77.86 218.62 77.77 218.66 79.86 219.88 79.94 219.83 77.86 218.62"
          />
          <polygon
            class="cls-142"
            points="79.82 219.86 77.77 218.66 77.77 213.84 80.03 215.15 79.82 219.86"
          />
          <polygon
            class="cls-131"
            points="79.99 220.19 79.82 220.09 79.82 215.07 79.99 215.17 79.99 220.19"
          />
          <polygon
            class="cls-132"
            points="80.15 220.09 79.99 220.19 79.99 215.17 80.15 215.07 80.15 220.09"
          />
          <polygon
            class="cls-131"
            points="80.15 215.07 79.99 215.17 79.82 215.07 79.99 214.98 80.15 215.07"
          />
          <polygon
            class="cls-131"
            points="80.59 214.71 53.84 199.27 53.84 200.04 80.59 215.48 80.59 214.71"
          />
          <polygon
            class="cls-141"
            points="81.93 213.94 80.59 214.71 54.17 199.46 55.51 198.69 81.93 213.94"
          />
          <polygon
            class="cls-175"
            points="57.21 199.76 55.53 198.79 55.53 193.83 57.21 194.79 57.21 199.76"
          />
          <polygon
            class="cls-131"
            points="55.41 199.05 55.24 198.96 55.24 193.8 55.41 193.9 55.41 199.05"
          />
          <polygon
            class="cls-132"
            points="55.58 198.96 55.41 199.05 55.41 193.9 55.58 193.8 55.58 198.96"
          />
          <polygon
            class="cls-131"
            points="55.58 193.8 55.41 193.9 55.24 193.8 55.41 193.71 55.58 193.8"
          />
          <polygon
            class="cls-176"
            points="55.53 198.98 55.45 199.03 55.45 193.88 55.53 193.83 55.53 198.98"
          />
          <polygon
            class="cls-131"
            points="55.41 198.86 55.41 199.05 57.08 200.02 57.08 199.82 55.41 198.86"
          />
          <polygon
            class="cls-131"
            points="55.58 198.76 55.41 198.86 57.08 199.82 57.25 199.73 55.58 198.76"
          />
          <polygon
            class="cls-132"
            points="57.25 199.73 57.08 199.82 57.08 200.02 57.25 199.92 57.25 199.73"
          />
          <polygon
            class="cls-176"
            points="55.53 198.78 55.45 198.83 56.96 199.71 57.04 199.66 55.53 198.78"
          />
          <polygon
            class="cls-142"
            points="56.91 199.69 55.45 198.83 55.45 193.88 57.12 194.84 56.91 199.69"
          />
          <polygon
            class="cls-131"
            points="57.08 200.02 56.91 199.92 56.91 194.77 57.08 194.87 57.08 200.02"
          />
          <polygon
            class="cls-132"
            points="57.25 199.92 57.08 200.02 57.08 194.87 57.25 194.77 57.25 199.92"
          />
          <polygon
            class="cls-131"
            points="57.25 194.77 57.08 194.87 56.91 194.77 57.08 194.67 57.25 194.77"
          />
          <polygon
            class="cls-175"
            points="58.54 200.53 57.37 199.85 57.37 194.89 58.55 195.57 58.54 200.53"
          />
          <polygon
            class="cls-131"
            points="57.25 200.12 57.08 200.02 57.08 194.87 57.25 194.96 57.25 200.12"
          />
          <polygon
            class="cls-132"
            points="57.42 200.02 57.25 200.12 57.25 194.96 57.42 194.87 57.42 200.02"
          />
          <polygon
            class="cls-131"
            points="57.42 194.87 57.25 194.96 57.08 194.87 57.25 194.77 57.42 194.87"
          />
          <polygon
            class="cls-176"
            points="57.37 200.04 57.29 200.09 57.29 194.94 57.37 194.89 57.37 200.04"
          />
          <polygon
            class="cls-131"
            points="57.25 199.92 57.25 200.12 58.42 200.79 58.42 200.6 57.25 199.92"
          />
          <polygon
            class="cls-131"
            points="57.42 199.82 57.25 199.92 58.42 200.6 58.59 200.5 57.42 199.82"
          />
          <polygon
            class="cls-132"
            points="58.59 200.5 58.42 200.6 58.42 200.79 58.59 200.69 58.59 200.5"
          />
          <polygon
            class="cls-176"
            points="57.37 199.84 57.29 199.89 58.29 200.48 58.38 200.43 57.37 199.84"
          />
          <polygon
            class="cls-142"
            points="58.25 200.46 57.29 199.89 57.29 194.94 58.46 195.61 58.25 200.46"
          />
          <polygon
            class="cls-131"
            points="58.42 200.79 58.25 200.69 58.25 195.54 58.42 195.64 58.42 200.79"
          />
          <polygon
            class="cls-132"
            points="58.59 200.69 58.42 200.79 58.42 195.64 58.59 195.54 58.59 200.69"
          />
          <polygon
            class="cls-131"
            points="58.59 195.54 58.42 195.64 58.25 195.54 58.42 195.44 58.59 195.54"
          />
          <polygon
            class="cls-175"
            points="60.38 201.59 58.71 200.63 58.71 195.66 60.38 196.63 60.38 201.59"
          />
          <polygon
            class="cls-131"
            points="58.59 200.89 58.42 200.79 58.42 195.64 58.59 195.74 58.59 200.89"
          />
          <polygon
            class="cls-132"
            points="58.75 200.79 58.59 200.89 58.59 195.74 58.75 195.64 58.75 200.79"
          />
          <polygon
            class="cls-131"
            points="58.75 195.64 58.59 195.74 58.42 195.64 58.59 195.54 58.75 195.64"
          />
          <polygon
            class="cls-176"
            points="58.71 200.81 58.63 200.86 58.63 195.71 58.71 195.66 58.71 200.81"
          />
          <polygon
            class="cls-131"
            points="58.59 200.69 58.59 200.89 60.26 201.85 60.26 201.66 58.59 200.69"
          />
          <polygon
            class="cls-131"
            points="58.75 200.6 58.59 200.69 60.26 201.66 60.43 201.56 58.75 200.6"
          />
          <polygon
            class="cls-132"
            points="60.43 201.56 60.26 201.66 60.26 201.85 60.43 201.75 60.43 201.56"
          />
          <polygon
            class="cls-176"
            points="58.71 200.62 58.63 200.66 60.13 201.54 60.22 201.49 58.71 200.62"
          />
          <polygon
            class="cls-142"
            points="60.09 201.52 58.63 200.66 58.63 195.71 60.3 196.67 60.09 201.52"
          />
          <polygon
            class="cls-131"
            points="60.26 201.85 60.09 201.75 60.09 196.6 60.26 196.7 60.26 201.85"
          />
          <polygon
            class="cls-132"
            points="60.43 201.75 60.26 201.85 60.26 196.7 60.43 196.6 60.43 201.75"
          />
          <polygon
            class="cls-131"
            points="60.43 196.6 60.26 196.7 60.09 196.6 60.26 196.5 60.43 196.6"
          />
          <polygon
            class="cls-177"
            points="58.32 198.89 58.28 198.86 58.26 198.87 58.3 198.9 58.32 198.89"
          />
          <polygon
            class="cls-178"
            points="58.28 198.47 58.23 198.44 58.23 198.91 58.28 198.94 58.28 198.47"
          />
          <polygon
            class="cls-177"
            points="58.3 198.46 58.28 198.47 58.23 198.44 58.26 198.43 58.3 198.46"
          />
          <polygon
            class="cls-179"
            points="58.28 198.47 58.28 198.94 58.3 198.93 58.32 198.91 58.32 198.89 58.3 198.9 58.3 198.46 58.28 198.47"
          />
          <polygon
            class="cls-175"
            points="62.32 203.84 61.15 203.16 61.15 198.2 62.32 198.87 62.32 203.84"
          />
          <polygon
            class="cls-131"
            points="61.02 203.42 60.86 203.32 60.86 198.17 61.02 198.27 61.02 203.42"
          />
          <polygon
            class="cls-132"
            points="61.19 203.32 61.02 203.42 61.02 198.27 61.19 198.17 61.19 203.32"
          />
          <polygon
            class="cls-131"
            points="61.19 198.17 61.02 198.27 60.86 198.17 61.02 198.07 61.19 198.17"
          />
          <polygon
            class="cls-176"
            points="61.15 203.35 61.07 203.4 61.07 198.24 61.15 198.2 61.15 203.35"
          />
          <polygon
            class="cls-131"
            points="61.02 203.23 61.02 203.42 62.2 204.1 62.2 203.9 61.02 203.23"
          />
          <polygon
            class="cls-131"
            points="61.19 203.13 61.02 203.23 62.2 203.9 62.36 203.81 61.19 203.13"
          />
          <polygon
            class="cls-132"
            points="62.36 203.81 62.2 203.9 62.2 204.1 62.36 204 62.36 203.81"
          />
          <polygon
            class="cls-176"
            points="61.15 203.15 61.07 203.2 62.07 203.79 62.15 203.74 61.15 203.15"
          />
          <polygon
            class="cls-142"
            points="62.03 203.76 61.07 203.2 61.07 198.24 62.24 198.92 62.03 203.76"
          />
          <polygon
            class="cls-131"
            points="62.2 204.1 62.03 204 62.03 198.85 62.2 198.94 62.2 204.1"
          />
          <polygon
            class="cls-132"
            points="62.36 204 62.2 204.1 62.2 198.94 62.36 198.85 62.36 204"
          />
          <polygon
            class="cls-131"
            points="62.36 198.85 62.2 198.94 62.03 198.85 62.2 198.75 62.36 198.85"
          />
          <polygon
            class="cls-175"
            points="63.66 204.61 62.49 203.93 62.49 198.97 63.66 199.64 63.66 204.61"
          />
          <polygon
            class="cls-131"
            points="62.36 204.19 62.2 204.1 62.2 198.94 62.36 199.04 62.36 204.19"
          />
          <polygon
            class="cls-132"
            points="62.53 204.1 62.36 204.19 62.36 199.04 62.53 198.94 62.53 204.1"
          />
          <polygon
            class="cls-131"
            points="62.53 198.94 62.36 199.04 62.2 198.94 62.36 198.85 62.53 198.94"
          />
          <polygon
            class="cls-176"
            points="62.49 204.12 62.41 204.17 62.41 199.02 62.49 198.97 62.49 204.12"
          />
          <polygon
            class="cls-131"
            points="62.36 204 62.36 204.19 63.53 204.87 63.53 204.68 62.36 204"
          />
          <polygon
            class="cls-131"
            points="62.53 203.9 62.36 204 63.53 204.68 63.7 204.58 62.53 203.9"
          />
          <polygon
            class="cls-132"
            points="63.7 204.58 63.53 204.68 63.53 204.87 63.7 204.77 63.7 204.58"
          />
          <polygon
            class="cls-176"
            points="62.49 203.92 62.41 203.97 63.41 204.56 63.49 204.51 62.49 203.92"
          />
          <polygon
            class="cls-142"
            points="63.37 204.54 62.41 203.97 62.41 199.02 63.58 199.69 63.37 204.54"
          />
          <polygon
            class="cls-131"
            points="63.53 204.87 63.37 204.77 63.37 199.62 63.53 199.72 63.53 204.87"
          />
          <polygon
            class="cls-132"
            points="63.7 204.77 63.53 204.87 63.53 199.72 63.7 199.62 63.7 204.77"
          />
          <polygon
            class="cls-131"
            points="63.7 199.62 63.53 199.72 63.37 199.62 63.53 199.52 63.7 199.62"
          />
          <polygon
            class="cls-175"
            points="66.74 206.8 65.23 205.93 65.23 200.97 66.74 201.84 66.74 206.8"
          />
          <polygon
            class="cls-131"
            points="65.11 206.19 64.94 206.1 64.94 200.95 65.11 201.04 65.11 206.19"
          />
          <polygon
            class="cls-132"
            points="65.27 206.1 65.11 206.19 65.11 201.04 65.27 200.95 65.27 206.1"
          />
          <polygon
            class="cls-131"
            points="65.28 200.95 65.11 201.04 64.94 200.95 65.11 200.85 65.28 200.95"
          />
          <polygon
            class="cls-176"
            points="65.23 206.12 65.15 206.17 65.15 201.02 65.23 200.97 65.23 206.12"
          />
          <polygon
            class="cls-131"
            points="65.11 206 65.11 206.19 66.61 207.06 66.61 206.87 65.11 206"
          />
          <polygon
            class="cls-131"
            points="65.27 205.91 65.11 206 66.61 206.87 66.78 206.77 65.27 205.91"
          />
          <polygon
            class="cls-132"
            points="66.78 206.77 66.61 206.87 66.61 207.06 66.78 206.97 66.78 206.77"
          />
          <polygon
            class="cls-176"
            points="65.23 205.92 65.15 205.97 66.49 206.76 66.57 206.71 65.23 205.92"
          />
          <polygon
            class="cls-142"
            points="66.44 206.73 65.15 205.97 65.15 201.02 66.65 201.89 66.44 206.73"
          />
          <polygon
            class="cls-131"
            points="66.61 207.06 66.44 206.97 66.44 201.81 66.61 201.91 66.61 207.06"
          />
          <polygon
            class="cls-132"
            points="66.78 206.97 66.61 207.06 66.61 201.91 66.78 201.81 66.78 206.97"
          />
          <polygon
            class="cls-131"
            points="66.78 201.81 66.61 201.91 66.44 201.81 66.61 201.72 66.78 201.81"
          />
          <polygon
            class="cls-175"
            points="68.08 207.57 66.9 206.9 66.91 201.94 68.08 202.61 68.08 207.57"
          />
          <polygon
            class="cls-131"
            points="66.78 207.16 66.61 207.06 66.61 201.91 66.78 202.01 66.78 207.16"
          />
          <polygon
            class="cls-132"
            points="66.95 207.06 66.78 207.16 66.78 202.01 66.95 201.91 66.95 207.06"
          />
          <polygon
            class="cls-131"
            points="66.95 201.91 66.78 202.01 66.61 201.91 66.78 201.81 66.95 201.91"
          />
          <polygon
            class="cls-176"
            points="66.91 207.09 66.82 207.14 66.82 201.98 66.91 201.94 66.91 207.09"
          />
          <polygon
            class="cls-131"
            points="66.78 206.97 66.78 207.16 67.95 207.84 67.95 207.64 66.78 206.97"
          />
          <polygon
            class="cls-131"
            points="66.95 206.87 66.78 206.97 67.95 207.64 68.12 207.55 66.95 206.87"
          />
          <polygon
            class="cls-132"
            points="68.12 207.55 67.95 207.64 67.95 207.84 68.12 207.74 68.12 207.55"
          />
          <polygon
            class="cls-176"
            points="66.91 206.89 66.82 206.94 67.83 207.53 67.91 207.48 66.91 206.89"
          />
          <polygon
            class="cls-142"
            points="67.78 207.5 66.82 206.94 66.82 201.98 67.99 202.66 67.78 207.5"
          />
          <polygon
            class="cls-131"
            points="67.95 207.84 67.78 207.74 67.78 202.59 67.95 202.68 67.95 207.84"
          />
          <polygon
            class="cls-132"
            points="68.12 207.74 67.95 207.84 67.95 202.68 68.12 202.59 68.12 207.74"
          />
          <polygon
            class="cls-131"
            points="68.12 202.59 67.95 202.68 67.78 202.59 67.95 202.49 68.12 202.59"
          />
          <polygon
            class="cls-175"
            points="69.75 208.54 68.24 207.67 68.24 202.71 69.75 203.58 69.75 208.54"
          />
          <polygon
            class="cls-131"
            points="68.12 207.93 67.95 207.84 67.95 202.68 68.12 202.78 68.12 207.93"
          />
          <polygon
            class="cls-132"
            points="68.28 207.84 68.12 207.93 68.12 202.78 68.28 202.68 68.28 207.84"
          />
          <polygon
            class="cls-131"
            points="68.28 202.68 68.12 202.78 67.95 202.68 68.12 202.59 68.28 202.68"
          />
          <polygon
            class="cls-176"
            points="68.24 207.86 68.16 207.91 68.16 202.76 68.24 202.71 68.24 207.86"
          />
          <polygon
            class="cls-131"
            points="68.12 207.74 68.12 207.93 69.62 208.8 69.62 208.61 68.12 207.74"
          />
          <polygon
            class="cls-131"
            points="68.28 207.64 68.12 207.74 69.62 208.61 69.79 208.51 68.28 207.64"
          />
          <polygon
            class="cls-132"
            points="69.79 208.51 69.62 208.61 69.62 208.8 69.79 208.7 69.79 208.51"
          />
          <polygon
            class="cls-176"
            points="68.24 207.66 68.16 207.71 69.5 208.49 69.58 208.44 68.24 207.66"
          />
          <polygon
            class="cls-142"
            points="69.45 208.47 68.16 207.71 68.16 202.76 69.66 203.63 69.45 208.47"
          />
          <polygon
            class="cls-131"
            points="69.62 208.8 69.45 208.7 69.45 203.55 69.62 203.65 69.62 208.8"
          />
          <polygon
            class="cls-132"
            points="69.79 208.7 69.62 208.8 69.62 203.65 69.79 203.55 69.79 208.7"
          />
          <polygon
            class="cls-131"
            points="69.79 203.55 69.62 203.65 69.45 203.55 69.62 203.46 69.79 203.55"
          />
          <polygon
            class="cls-132"
            points="75.24 211.63 80.92 208.34 80.92 203.19 75.24 206.47 75.24 211.63"
          />
          <polygon
            class="cls-131"
            points="75.24 212.13 69.62 208.85 69.62 203.38 75.24 206.66 75.24 212.13"
          />
          <polygon
            class="cls-175"
            points="78.27 211.92 76.6 210.95 76.6 205.99 78.27 206.95 78.27 211.92"
          />
          <polygon
            class="cls-131"
            points="76.48 211.21 76.31 211.12 76.31 205.96 76.48 206.06 76.48 211.21"
          />
          <polygon
            class="cls-132"
            points="76.64 211.12 76.48 211.21 76.48 206.06 76.64 205.96 76.64 211.12"
          />
          <polygon
            class="cls-131"
            points="76.64 205.96 76.48 206.06 76.31 205.96 76.48 205.87 76.64 205.96"
          />
          <polygon
            class="cls-176"
            points="76.6 211.14 76.52 211.19 76.52 206.03 76.6 205.99 76.6 211.14"
          />
          <polygon
            class="cls-131"
            points="76.48 211.02 76.48 211.21 78.15 212.18 78.15 211.98 76.48 211.02"
          />
          <polygon
            class="cls-131"
            points="76.64 210.92 76.48 211.02 78.15 211.98 78.32 211.89 76.64 210.92"
          />
          <polygon
            class="cls-132"
            points="78.32 211.89 78.15 211.98 78.15 212.18 78.32 212.08 78.32 211.89"
          />
          <polygon
            class="cls-176"
            points="76.6 210.94 76.52 210.99 78.02 211.87 78.11 211.82 76.6 210.94"
          />
          <polygon
            class="cls-142"
            points="77.98 211.84 76.52 210.99 76.52 206.03 78.19 207 77.98 211.84"
          />
          <polygon
            class="cls-131"
            points="78.15 212.18 77.98 212.08 77.98 206.93 78.15 207.03 78.15 212.18"
          />
          <polygon
            class="cls-132"
            points="78.32 212.08 78.15 212.18 78.15 207.03 78.32 206.93 78.32 212.08"
          />
          <polygon
            class="cls-131"
            points="78.32 206.93 78.15 207.03 77.98 206.93 78.15 206.83 78.32 206.93"
          />
          <polygon
            class="cls-175"
            points="79.61 212.69 78.44 212.01 78.44 207.05 79.61 207.72 79.61 212.69"
          />
          <polygon
            class="cls-131"
            points="78.32 212.27 78.15 212.18 78.15 207.03 78.32 207.12 78.32 212.27"
          />
          <polygon
            class="cls-132"
            points="78.48 212.18 78.32 212.27 78.32 207.12 78.48 207.03 78.48 212.18"
          />
          <polygon
            class="cls-131"
            points="78.48 207.03 78.32 207.12 78.15 207.03 78.32 206.93 78.48 207.03"
          />
          <polygon
            class="cls-176"
            points="78.44 212.2 78.36 212.25 78.36 207.1 78.44 207.05 78.44 212.2"
          />
          <polygon
            class="cls-131"
            points="78.32 212.08 78.32 212.27 79.49 212.95 79.49 212.76 78.32 212.08"
          />
          <polygon
            class="cls-131"
            points="78.48 211.98 78.32 212.08 79.49 212.76 79.65 212.66 78.48 211.98"
          />
          <polygon
            class="cls-132"
            points="79.65 212.66 79.49 212.76 79.49 212.95 79.65 212.85 79.65 212.66"
          />
          <polygon
            class="cls-176"
            points="78.44 212 78.36 212.05 79.36 212.64 79.44 212.59 78.44 212"
          />
          <polygon
            class="cls-142"
            points="79.32 212.62 78.36 212.05 78.36 207.1 79.53 207.77 79.32 212.62"
          />
          <polygon
            class="cls-131"
            points="79.49 212.95 79.32 212.85 79.32 207.7 79.49 207.8 79.49 212.95"
          />
          <polygon
            class="cls-132"
            points="79.65 212.85 79.49 212.95 79.49 207.8 79.65 207.7 79.65 212.85"
          />
          <polygon
            class="cls-131"
            points="79.65 207.7 79.49 207.8 79.32 207.7 79.49 207.6 79.65 207.7"
          />
          <polygon
            class="cls-175"
            points="81.45 213.75 79.78 212.78 79.78 207.82 81.45 208.78 81.45 213.75"
          />
          <polygon
            class="cls-131"
            points="79.65 213.05 79.49 212.95 79.49 207.8 79.65 207.89 79.65 213.05"
          />
          <polygon
            class="cls-132"
            points="79.82 212.95 79.65 213.05 79.65 207.89 79.82 207.8 79.82 212.95"
          />
          <polygon
            class="cls-131"
            points="79.82 207.8 79.65 207.89 79.49 207.8 79.65 207.7 79.82 207.8"
          />
          <polygon
            class="cls-176"
            points="79.78 212.97 79.7 213.02 79.7 207.87 79.78 207.82 79.78 212.97"
          />
          <polygon
            class="cls-131"
            points="79.65 212.85 79.65 213.05 81.33 214.01 81.33 213.82 79.65 212.85"
          />
          <polygon
            class="cls-131"
            points="79.82 212.76 79.65 212.85 81.33 213.82 81.49 213.72 79.82 212.76"
          />
          <polygon
            class="cls-132"
            points="81.49 213.72 81.33 213.82 81.33 214.01 81.49 213.91 81.49 213.72"
          />
          <polygon
            class="cls-176"
            points="79.78 212.77 79.7 212.82 81.2 213.7 81.28 213.65 79.78 212.77"
          />
          <polygon
            class="cls-142"
            points="81.16 213.68 79.7 212.82 79.7 207.87 81.37 208.83 81.16 213.68"
          />
          <polygon
            class="cls-131"
            points="81.33 214.01 81.16 213.91 81.16 208.76 81.33 208.86 81.33 214.01"
          />
          <polygon
            class="cls-132"
            points="81.49 213.91 81.33 214.01 81.33 208.86 81.49 208.76 81.49 213.91"
          />
          <polygon
            class="cls-131"
            points="81.49 208.76 81.33 208.86 81.16 208.76 81.33 208.66 81.49 208.76"
          />
          <polygon
            class="cls-177"
            points="79.39 211.05 79.34 211.02 79.32 211.03 79.37 211.06 79.39 211.05"
          />
          <polygon
            class="cls-178"
            points="79.34 210.63 79.3 210.6 79.3 211.07 79.34 211.1 79.34 210.63"
          />
          <polygon
            class="cls-177"
            points="79.37 210.62 79.34 210.63 79.3 210.6 79.32 210.59 79.37 210.62"
          />
          <polygon
            class="cls-179"
            points="79.34 210.63 79.34 211.1 79.37 211.09 79.39 211.07 79.39 211.05 79.37 211.06 79.37 210.62 79.34 210.63"
          />
          <polygon
            class="cls-131"
            points="80.59 209.31 53.84 193.86 53.84 194.64 80.59 210.08 80.59 209.31"
          />
          <polygon
            class="cls-3"
            points="56.85 196.76 59.18 198.11 59.18 197.73 55.5 195.6 55.5 198.69 54.17 199.46 56.85 199.46 56.85 196.76"
          />
          <polygon
            class="cls-3"
            points="77.92 208.93 80.25 210.28 80.25 209.89 76.57 207.76 76.57 210.85 75.24 211.63 77.92 211.63 77.92 208.93"
          />
          <path
            class="cls-144"
            d="M59.85,201.51h0l-5.5-3.18h-.11a.05.05,0,0,0,0,0l5.5,3.18h.05a.15.15,0,0,0,.06-.11A.05.05,0,0,0,59.85,201.51Z"
          />
          <path
            class="cls-144"
            d="M59.85,201.07h0l-5.5-3.18h-.11v0s0,0,0,0l5.5,3.18h.05a.15.15,0,0,0,.06-.11S59.86,201.07,59.85,201.07Z"
          />
          <path
            class="cls-144"
            d="M59.85,200.62h0l-5.5-3.18h-.11a.05.05,0,0,0,0,0l5.5,3.18s0,0,.05,0a.13.13,0,0,0,.06-.1A.05.05,0,0,0,59.85,200.62Z"
          />
          <path
            class="cls-144"
            d="M80.91,213.67h0l-5.5-3.18H75.3a.05.05,0,0,0,0,0l5.5,3.18s0,0,.05,0a.12.12,0,0,0,.06-.1A.05.05,0,0,0,80.91,213.67Z"
          />
          <path
            class="cls-144"
            d="M80.91,213.22h0L75.41,210H75.3s0,0,0,0l5.5,3.18h.05a.15.15,0,0,0,.06-.11A.05.05,0,0,0,80.91,213.22Z"
          />
          <path
            class="cls-144"
            d="M80.91,212.78h0l-5.5-3.18H75.3a.05.05,0,0,0,0,0l5.5,3.18h.05a.13.13,0,0,0,.06-.1S80.92,212.78,80.91,212.78Z"
          />
          <polygon
            class="cls-141"
            points="81.93 208.54 80.59 209.31 54.17 194.06 55.51 193.28 81.93 208.54"
          />
          <polygon
            class="cls-175"
            points="57.21 194.35 55.53 193.38 55.53 188.42 57.21 189.39 57.21 194.35"
          />
          <polygon
            class="cls-131"
            points="55.41 193.65 55.24 193.55 55.24 188.4 55.41 188.5 55.41 193.65"
          />
          <polygon
            class="cls-132"
            points="55.58 193.55 55.41 193.65 55.41 188.5 55.58 188.4 55.58 193.55"
          />
          <polygon
            class="cls-131"
            points="55.58 188.4 55.41 188.5 55.24 188.4 55.41 188.3 55.58 188.4"
          />
          <polygon
            class="cls-176"
            points="55.53 193.57 55.45 193.62 55.45 188.47 55.53 188.42 55.53 193.57"
          />
          <polygon
            class="cls-131"
            points="55.41 193.45 55.41 193.65 57.08 194.61 57.08 194.42 55.41 193.45"
          />
          <polygon
            class="cls-131"
            points="55.58 193.36 55.41 193.45 57.08 194.42 57.25 194.32 55.58 193.36"
          />
          <polygon
            class="cls-132"
            points="57.25 194.32 57.08 194.42 57.08 194.61 57.25 194.52 57.25 194.32"
          />
          <polygon
            class="cls-176"
            points="55.53 193.38 55.45 193.42 56.96 194.3 57.04 194.26 55.53 193.38"
          />
          <polygon
            class="cls-142"
            points="56.91 194.28 55.45 193.42 55.45 188.47 57.12 189.44 56.91 194.28"
          />
          <polygon
            class="cls-131"
            points="57.08 194.61 56.91 194.52 56.91 189.36 57.08 189.46 57.08 194.61"
          />
          <polygon
            class="cls-132"
            points="57.25 194.52 57.08 194.61 57.08 189.46 57.25 189.36 57.25 194.52"
          />
          <polygon
            class="cls-131"
            points="57.25 189.36 57.08 189.46 56.91 189.36 57.08 189.27 57.25 189.36"
          />
          <polygon
            class="cls-175"
            points="58.54 195.12 57.37 194.45 57.37 189.48 58.55 190.16 58.54 195.12"
          />
          <polygon
            class="cls-131"
            points="57.25 194.71 57.08 194.61 57.08 189.46 57.25 189.56 57.25 194.71"
          />
          <polygon
            class="cls-132"
            points="57.42 194.61 57.25 194.71 57.25 189.56 57.42 189.46 57.42 194.61"
          />
          <polygon
            class="cls-131"
            points="57.42 189.46 57.25 189.56 57.08 189.46 57.25 189.36 57.42 189.46"
          />
          <polygon
            class="cls-176"
            points="57.37 194.64 57.29 194.68 57.29 189.53 57.37 189.48 57.37 194.64"
          />
          <polygon
            class="cls-131"
            points="57.25 194.51 57.25 194.71 58.42 195.38 58.42 195.19 57.25 194.51"
          />
          <polygon
            class="cls-131"
            points="57.42 194.42 57.25 194.52 58.42 195.19 58.59 195.09 57.42 194.42"
          />
          <polygon
            class="cls-132"
            points="58.59 195.09 58.42 195.19 58.42 195.38 58.59 195.29 58.59 195.09"
          />
          <polygon
            class="cls-176"
            points="57.37 194.44 57.29 194.49 58.29 195.08 58.38 195.03 57.37 194.44"
          />
          <polygon
            class="cls-142"
            points="58.25 195.05 57.29 194.49 57.29 189.53 58.46 190.21 58.25 195.05"
          />
          <polygon
            class="cls-131"
            points="58.42 195.38 58.25 195.29 58.25 190.13 58.42 190.23 58.42 195.38"
          />
          <polygon
            class="cls-132"
            points="58.59 195.29 58.42 195.38 58.42 190.23 58.59 190.13 58.59 195.29"
          />
          <polygon
            class="cls-131"
            points="58.59 190.13 58.42 190.23 58.25 190.13 58.42 190.04 58.59 190.13"
          />
          <polygon
            class="cls-175"
            points="60.38 196.18 58.71 195.22 58.71 190.26 60.38 191.22 60.38 196.18"
          />
          <polygon
            class="cls-131"
            points="58.59 195.48 58.42 195.38 58.42 190.23 58.59 190.33 58.59 195.48"
          />
          <polygon
            class="cls-132"
            points="58.75 195.38 58.59 195.48 58.59 190.33 58.75 190.23 58.75 195.38"
          />
          <polygon
            class="cls-131"
            points="58.75 190.23 58.59 190.33 58.42 190.23 58.59 190.13 58.75 190.23"
          />
          <polygon
            class="cls-176"
            points="58.71 195.41 58.63 195.46 58.63 190.3 58.71 190.26 58.71 195.41"
          />
          <polygon
            class="cls-131"
            points="58.59 195.29 58.59 195.48 60.26 196.44 60.26 196.25 58.59 195.29"
          />
          <polygon
            class="cls-131"
            points="58.75 195.19 58.59 195.29 60.26 196.25 60.43 196.16 58.75 195.19"
          />
          <polygon
            class="cls-132"
            points="60.43 196.16 60.26 196.25 60.26 196.44 60.43 196.35 60.43 196.16"
          />
          <polygon
            class="cls-176"
            points="58.71 195.21 58.63 195.26 60.13 196.14 60.22 196.09 58.71 195.21"
          />
          <polygon
            class="cls-142"
            points="60.09 196.11 58.63 195.26 58.63 190.3 60.3 191.27 60.09 196.11"
          />
          <polygon
            class="cls-131"
            points="60.26 196.44 60.09 196.35 60.09 191.2 60.26 191.29 60.26 196.44"
          />
          <polygon
            class="cls-132"
            points="60.43 196.35 60.26 196.44 60.26 191.29 60.43 191.2 60.43 196.35"
          />
          <polygon
            class="cls-131"
            points="60.43 191.2 60.26 191.29 60.09 191.2 60.26 191.1 60.43 191.2"
          />
          <polygon
            class="cls-177"
            points="58.32 193.48 58.28 193.46 58.26 193.47 58.3 193.49 58.32 193.48"
          />
          <polygon
            class="cls-178"
            points="58.28 193.06 58.23 193.04 58.23 193.51 58.28 193.53 58.28 193.06"
          />
          <polygon
            class="cls-177"
            points="58.3 193.05 58.28 193.06 58.23 193.04 58.26 193.02 58.3 193.05"
          />
          <polygon
            class="cls-179"
            points="58.28 193.06 58.28 193.53 58.3 193.52 58.32 193.51 58.32 193.48 58.3 193.49 58.3 193.05 58.28 193.06"
          />
          <polygon
            class="cls-175"
            points="62.32 198.43 61.15 197.75 61.15 192.79 62.32 193.47 62.32 198.43"
          />
          <polygon
            class="cls-131"
            points="61.02 198.01 60.86 197.92 60.86 192.77 61.02 192.86 61.02 198.01"
          />
          <polygon
            class="cls-132"
            points="61.19 197.92 61.02 198.01 61.02 192.86 61.19 192.77 61.19 197.92"
          />
          <polygon
            class="cls-131"
            points="61.19 192.77 61.02 192.86 60.86 192.77 61.02 192.67 61.19 192.77"
          />
          <polygon
            class="cls-176"
            points="61.15 197.94 61.07 197.99 61.07 192.84 61.15 192.79 61.15 197.94"
          />
          <polygon
            class="cls-131"
            points="61.02 197.82 61.02 198.01 62.2 198.69 62.2 198.5 61.02 197.82"
          />
          <polygon
            class="cls-131"
            points="61.19 197.72 61.02 197.82 62.2 198.5 62.36 198.4 61.19 197.72"
          />
          <polygon
            class="cls-132"
            points="62.36 198.4 62.2 198.5 62.2 198.69 62.36 198.59 62.36 198.4"
          />
          <polygon
            class="cls-176"
            points="61.15 197.74 61.07 197.79 62.07 198.38 62.15 198.33 61.15 197.74"
          />
          <polygon
            class="cls-142"
            points="62.03 198.36 61.07 197.79 61.07 192.84 62.24 193.51 62.03 198.36"
          />
          <polygon
            class="cls-131"
            points="62.2 198.69 62.03 198.59 62.03 193.44 62.2 193.54 62.2 198.69"
          />
          <polygon
            class="cls-132"
            points="62.36 198.59 62.2 198.69 62.2 193.54 62.36 193.44 62.36 198.59"
          />
          <polygon
            class="cls-131"
            points="62.36 193.44 62.2 193.54 62.03 193.44 62.2 193.34 62.36 193.44"
          />
          <polygon
            class="cls-175"
            points="63.66 199.2 62.49 198.53 62.49 193.56 63.66 194.24 63.66 199.2"
          />
          <polygon
            class="cls-131"
            points="62.36 198.79 62.2 198.69 62.2 193.54 62.36 193.63 62.36 198.79"
          />
          <polygon
            class="cls-132"
            points="62.53 198.69 62.36 198.79 62.36 193.63 62.53 193.54 62.53 198.69"
          />
          <polygon
            class="cls-131"
            points="62.53 193.54 62.36 193.63 62.2 193.54 62.36 193.44 62.53 193.54"
          />
          <polygon
            class="cls-176"
            points="62.49 198.72 62.41 198.76 62.41 193.61 62.49 193.56 62.49 198.72"
          />
          <polygon
            class="cls-131"
            points="62.36 198.59 62.36 198.79 63.53 199.46 63.53 199.27 62.36 198.59"
          />
          <polygon
            class="cls-131"
            points="62.53 198.5 62.36 198.59 63.53 199.27 63.7 199.17 62.53 198.5"
          />
          <polygon
            class="cls-132"
            points="63.7 199.17 63.53 199.27 63.53 199.46 63.7 199.37 63.7 199.17"
          />
          <polygon
            class="cls-176"
            points="62.49 198.52 62.41 198.56 63.41 199.16 63.49 199.11 62.49 198.52"
          />
          <polygon
            class="cls-142"
            points="63.37 199.13 62.41 198.56 62.41 193.61 63.58 194.29 63.37 199.13"
          />
          <polygon
            class="cls-131"
            points="63.53 199.46 63.37 199.37 63.37 194.21 63.53 194.31 63.53 199.46"
          />
          <polygon
            class="cls-132"
            points="63.7 199.37 63.53 199.46 63.53 194.31 63.7 194.21 63.7 199.37"
          />
          <polygon
            class="cls-131"
            points="63.7 194.21 63.53 194.31 63.37 194.21 63.53 194.12 63.7 194.21"
          />
          <polygon
            class="cls-175"
            points="66.74 201.4 65.23 200.53 65.23 195.56 66.74 196.43 66.74 201.4"
          />
          <polygon
            class="cls-131"
            points="65.11 200.79 64.94 200.69 64.94 195.54 65.11 195.64 65.11 200.79"
          />
          <polygon
            class="cls-132"
            points="65.27 200.69 65.11 200.79 65.11 195.64 65.27 195.54 65.27 200.69"
          />
          <polygon
            class="cls-131"
            points="65.28 195.54 65.11 195.64 64.94 195.54 65.11 195.44 65.28 195.54"
          />
          <polygon
            class="cls-176"
            points="65.23 200.72 65.15 200.76 65.15 195.61 65.23 195.56 65.23 200.72"
          />
          <polygon
            class="cls-131"
            points="65.11 200.6 65.11 200.79 66.61 201.66 66.61 201.47 65.11 200.6"
          />
          <polygon
            class="cls-131"
            points="65.27 200.5 65.11 200.6 66.61 201.47 66.78 201.37 65.27 200.5"
          />
          <polygon
            class="cls-132"
            points="66.78 201.37 66.61 201.47 66.61 201.66 66.78 201.56 66.78 201.37"
          />
          <polygon
            class="cls-176"
            points="65.23 200.52 65.15 200.57 66.49 201.35 66.57 201.3 65.23 200.52"
          />
          <polygon
            class="cls-142"
            points="66.44 201.33 65.15 200.57 65.15 195.61 66.65 196.48 66.44 201.33"
          />
          <polygon
            class="cls-131"
            points="66.61 201.66 66.44 201.56 66.44 196.41 66.61 196.5 66.61 201.66"
          />
          <polygon
            class="cls-132"
            points="66.78 201.56 66.61 201.66 66.61 196.5 66.78 196.41 66.78 201.56"
          />
          <polygon
            class="cls-131"
            points="66.78 196.41 66.61 196.5 66.44 196.41 66.61 196.31 66.78 196.41"
          />
          <polygon
            class="cls-175"
            points="68.08 202.17 66.9 201.49 66.91 196.53 68.08 197.21 68.08 202.17"
          />
          <polygon
            class="cls-131"
            points="66.78 201.75 66.61 201.66 66.61 196.5 66.78 196.6 66.78 201.75"
          />
          <polygon
            class="cls-132"
            points="66.95 201.66 66.78 201.75 66.78 196.6 66.95 196.5 66.95 201.66"
          />
          <polygon
            class="cls-131"
            points="66.95 196.5 66.78 196.6 66.61 196.5 66.78 196.41 66.95 196.5"
          />
          <polygon
            class="cls-176"
            points="66.91 201.68 66.82 201.73 66.82 196.58 66.91 196.53 66.91 201.68"
          />
          <polygon
            class="cls-131"
            points="66.78 201.56 66.78 201.75 67.95 202.43 67.95 202.24 66.78 201.56"
          />
          <polygon
            class="cls-131"
            points="66.95 201.47 66.78 201.56 67.95 202.24 68.12 202.14 66.95 201.47"
          />
          <polygon
            class="cls-132"
            points="68.12 202.14 67.95 202.24 67.95 202.43 68.12 202.33 68.12 202.14"
          />
          <polygon
            class="cls-176"
            points="66.91 201.48 66.82 201.53 67.83 202.12 67.91 202.07 66.91 201.48"
          />
          <polygon
            class="cls-142"
            points="67.78 202.1 66.82 201.53 66.82 196.58 67.99 197.25 67.78 202.1"
          />
          <polygon
            class="cls-131"
            points="67.95 202.43 67.78 202.33 67.78 197.18 67.95 197.28 67.95 202.43"
          />
          <polygon
            class="cls-132"
            points="68.12 202.33 67.95 202.43 67.95 197.28 68.12 197.18 68.12 202.33"
          />
          <polygon
            class="cls-131"
            points="68.12 197.18 67.95 197.28 67.78 197.18 67.95 197.08 68.12 197.18"
          />
          <polygon
            class="cls-175"
            points="69.75 203.13 68.24 202.26 68.24 197.3 69.75 198.17 69.75 203.13"
          />
          <polygon
            class="cls-131"
            points="68.12 202.53 67.95 202.43 67.95 197.28 68.12 197.37 68.12 202.53"
          />
          <polygon
            class="cls-132"
            points="68.28 202.43 68.12 202.53 68.12 197.37 68.28 197.28 68.28 202.43"
          />
          <polygon
            class="cls-131"
            points="68.28 197.28 68.12 197.37 67.95 197.28 68.12 197.18 68.28 197.28"
          />
          <polygon
            class="cls-176"
            points="68.24 202.45 68.16 202.5 68.16 197.35 68.24 197.3 68.24 202.45"
          />
          <polygon
            class="cls-131"
            points="68.12 202.33 68.12 202.53 69.62 203.4 69.62 203.2 68.12 202.33"
          />
          <polygon
            class="cls-131"
            points="68.28 202.24 68.12 202.33 69.62 203.2 69.79 203.11 68.28 202.24"
          />
          <polygon
            class="cls-132"
            points="69.79 203.11 69.62 203.2 69.62 203.4 69.79 203.3 69.79 203.11"
          />
          <polygon
            class="cls-176"
            points="68.24 202.25 68.16 202.3 69.5 203.09 69.58 203.04 68.24 202.25"
          />
          <polygon
            class="cls-142"
            points="69.45 203.06 68.16 202.3 68.16 197.35 69.66 198.22 69.45 203.06"
          />
          <polygon
            class="cls-131"
            points="69.62 203.4 69.45 203.3 69.45 198.15 69.62 198.24 69.62 203.4"
          />
          <polygon
            class="cls-132"
            points="69.79 203.3 69.62 203.4 69.62 198.24 69.79 198.15 69.79 203.3"
          />
          <polygon
            class="cls-131"
            points="69.79 198.15 69.62 198.24 69.45 198.15 69.62 198.05 69.79 198.15"
          />
          <polygon
            class="cls-132"
            points="75.24 206.22 80.92 202.94 80.92 197.78 75.24 201.07 75.24 206.22"
          />
          <polygon
            class="cls-131"
            points="75.24 206.84 69.62 203.38 69.62 197.6 75.24 201.06 75.24 206.84"
          />
          <polygon
            class="cls-175"
            points="78.27 206.51 76.6 205.54 76.6 200.58 78.27 201.55 78.27 206.51"
          />
          <polygon
            class="cls-131"
            points="76.48 205.81 76.31 205.71 76.31 200.56 76.48 200.65 76.48 205.81"
          />
          <polygon
            class="cls-132"
            points="76.64 205.71 76.48 205.81 76.48 200.65 76.64 200.56 76.64 205.71"
          />
          <polygon
            class="cls-131"
            points="76.64 200.56 76.48 200.65 76.31 200.56 76.48 200.46 76.64 200.56"
          />
          <polygon
            class="cls-176"
            points="76.6 205.73 76.52 205.78 76.52 200.63 76.6 200.58 76.6 205.73"
          />
          <polygon
            class="cls-131"
            points="76.48 205.61 76.48 205.81 78.15 206.77 78.15 206.58 76.48 205.61"
          />
          <polygon
            class="cls-131"
            points="76.64 205.52 76.48 205.61 78.15 206.58 78.32 206.48 76.64 205.52"
          />
          <polygon
            class="cls-132"
            points="78.32 206.48 78.15 206.58 78.15 206.77 78.32 206.68 78.32 206.48"
          />
          <polygon
            class="cls-176"
            points="76.6 205.53 76.52 205.58 78.02 206.46 78.11 206.41 76.6 205.53"
          />
          <polygon
            class="cls-142"
            points="77.98 206.44 76.52 205.58 76.52 200.63 78.19 201.59 77.98 206.44"
          />
          <polygon
            class="cls-131"
            points="78.15 206.77 77.98 206.68 77.98 201.52 78.15 201.62 78.15 206.77"
          />
          <polygon
            class="cls-132"
            points="78.32 206.68 78.15 206.77 78.15 201.62 78.32 201.52 78.32 206.68"
          />
          <polygon
            class="cls-131"
            points="78.32 201.52 78.15 201.62 77.98 201.52 78.15 201.43 78.32 201.52"
          />
          <polygon
            class="cls-175"
            points="79.61 207.28 78.44 206.61 78.44 201.64 79.61 202.32 79.61 207.28"
          />
          <polygon
            class="cls-131"
            points="78.32 206.87 78.15 206.77 78.15 201.62 78.32 201.72 78.32 206.87"
          />
          <polygon
            class="cls-132"
            points="78.48 206.77 78.32 206.87 78.32 201.72 78.48 201.62 78.48 206.77"
          />
          <polygon
            class="cls-131"
            points="78.48 201.62 78.32 201.72 78.15 201.62 78.32 201.52 78.48 201.62"
          />
          <polygon
            class="cls-176"
            points="78.44 206.8 78.36 206.84 78.36 201.69 78.44 201.64 78.44 206.8"
          />
          <polygon
            class="cls-131"
            points="78.32 206.68 78.32 206.87 79.49 207.54 79.49 207.35 78.32 206.68"
          />
          <polygon
            class="cls-131"
            points="78.48 206.58 78.32 206.68 79.49 207.35 79.65 207.25 78.48 206.58"
          />
          <polygon
            class="cls-132"
            points="79.65 207.25 79.49 207.35 79.49 207.54 79.65 207.45 79.65 207.25"
          />
          <polygon
            class="cls-176"
            points="78.44 206.6 78.36 206.64 79.36 207.24 79.44 207.19 78.44 206.6"
          />
          <polygon
            class="cls-142"
            points="79.32 207.21 78.36 206.64 78.36 201.69 79.53 202.37 79.32 207.21"
          />
          <polygon
            class="cls-131"
            points="79.49 207.54 79.32 207.45 79.32 202.29 79.49 202.39 79.49 207.54"
          />
          <polygon
            class="cls-132"
            points="79.65 207.45 79.49 207.54 79.49 202.39 79.65 202.29 79.65 207.45"
          />
          <polygon
            class="cls-131"
            points="79.65 202.29 79.49 202.39 79.32 202.29 79.49 202.2 79.65 202.29"
          />
          <polygon
            class="cls-175"
            points="81.45 208.34 79.78 207.38 79.78 202.41 81.45 203.38 81.45 208.34"
          />
          <polygon
            class="cls-131"
            points="79.65 207.64 79.49 207.54 79.49 202.39 79.65 202.49 79.65 207.64"
          />
          <polygon
            class="cls-132"
            points="79.82 207.54 79.65 207.64 79.65 202.49 79.82 202.39 79.82 207.54"
          />
          <polygon
            class="cls-131"
            points="79.82 202.39 79.65 202.49 79.49 202.39 79.65 202.29 79.82 202.39"
          />
          <polygon
            class="cls-176"
            points="79.78 207.57 79.7 207.62 79.7 202.46 79.78 202.41 79.78 207.57"
          />
          <polygon
            class="cls-131"
            points="79.65 207.45 79.65 207.64 81.33 208.6 81.33 208.41 79.65 207.45"
          />
          <polygon
            class="cls-131"
            points="79.82 207.35 79.65 207.45 81.33 208.41 81.49 208.31 79.82 207.35"
          />
          <polygon
            class="cls-132"
            points="81.49 208.31 81.33 208.41 81.33 208.6 81.49 208.51 81.49 208.31"
          />
          <polygon
            class="cls-176"
            points="79.78 207.37 79.7 207.42 81.2 208.3 81.28 208.25 79.78 207.37"
          />
          <polygon
            class="cls-142"
            points="81.16 208.27 79.7 207.42 79.7 202.46 81.37 203.43 81.16 208.27"
          />
          <polygon
            class="cls-131"
            points="81.33 208.6 81.16 208.51 81.16 203.35 81.33 203.45 81.33 208.6"
          />
          <polygon
            class="cls-132"
            points="81.49 208.51 81.33 208.6 81.33 203.45 81.49 203.35 81.49 208.51"
          />
          <polygon
            class="cls-131"
            points="81.49 203.35 81.33 203.45 81.16 203.35 81.33 203.26 81.49 203.35"
          />
          <polygon
            class="cls-177"
            points="79.39 205.64 79.34 205.62 79.32 205.63 79.37 205.65 79.39 205.64"
          />
          <polygon
            class="cls-178"
            points="79.34 205.22 79.3 205.2 79.3 205.67 79.34 205.69 79.34 205.22"
          />
          <polygon
            class="cls-177"
            points="79.37 205.21 79.34 205.22 79.3 205.2 79.32 205.18 79.37 205.21"
          />
          <polygon
            class="cls-179"
            points="79.34 205.22 79.34 205.69 79.37 205.68 79.39 205.67 79.39 205.64 79.37 205.65 79.37 205.21 79.34 205.22"
          />
          <polygon
            class="cls-131"
            points="80.59 203.9 53.84 188.46 53.84 189.23 80.59 204.67 80.59 203.9"
          />
          <polygon
            class="cls-3"
            points="56.85 191.36 59.18 192.71 59.18 192.32 55.5 190.2 55.5 193.28 54.17 194.06 56.85 194.06 56.85 191.36"
          />
          <polygon
            class="cls-3"
            points="77.92 203.52 80.25 204.87 80.25 204.48 76.57 202.36 76.57 205.45 75.24 206.22 77.92 206.22 77.92 203.52"
          />
          <path
            class="cls-144"
            d="M59.85,196.1h0l-5.5-3.18h-.11v0s0,0,0,0l5.5,3.18h.05a.15.15,0,0,0,.06-.11A.05.05,0,0,0,59.85,196.1Z"
          />
          <path
            class="cls-144"
            d="M59.85,195.66h0l-5.5-3.18h-.11a.05.05,0,0,0,0,0l5.5,3.18s0,0,.05,0a.13.13,0,0,0,.06-.1A.05.05,0,0,0,59.85,195.66Z"
          />
          <path
            class="cls-144"
            d="M59.85,195.21h0L54.35,192h-.11s0,0,0,0l5.5,3.18h.05a.15.15,0,0,0,.06-.11A.05.05,0,0,0,59.85,195.21Z"
          />
          <path
            class="cls-144"
            d="M80.91,208.26h0l-5.5-3.18H75.3s0,0,0,0l5.5,3.18h.05a.15.15,0,0,0,.06-.11A.05.05,0,0,0,80.91,208.26Z"
          />
          <path
            class="cls-144"
            d="M80.91,207.82h0l-5.5-3.18H75.3a.05.05,0,0,0,0,0l5.5,3.18h.05a.13.13,0,0,0,.06-.1S80.92,207.82,80.91,207.82Z"
          />
          <path
            class="cls-144"
            d="M80.91,207.37h0l-5.5-3.18H75.3s0,0,0,0l5.5,3.18h.05a.15.15,0,0,0,.06-.11A.05.05,0,0,0,80.91,207.37Z"
          />
          <polygon
            class="cls-141"
            points="81.93 203.13 80.59 203.9 54.17 188.65 55.51 187.88 81.93 203.13"
          />
          <polygon
            class="cls-175"
            points="57.21 188.94 55.53 187.98 55.53 183.02 57.21 183.98 57.21 188.94"
          />
          <polygon
            class="cls-131"
            points="55.41 188.24 55.24 188.15 55.24 182.99 55.41 183.09 55.41 188.24"
          />
          <polygon
            class="cls-132"
            points="55.58 188.15 55.41 188.24 55.41 183.09 55.58 182.99 55.58 188.15"
          />
          <polygon
            class="cls-131"
            points="55.58 182.99 55.41 183.09 55.24 182.99 55.41 182.9 55.58 182.99"
          />
          <polygon
            class="cls-176"
            points="55.53 188.17 55.45 188.22 55.45 183.06 55.53 183.02 55.53 188.17"
          />
          <polygon
            class="cls-131"
            points="55.41 188.05 55.41 188.24 57.08 189.21 57.08 189.01 55.41 188.05"
          />
          <polygon
            class="cls-131"
            points="55.58 187.95 55.41 188.05 57.08 189.01 57.25 188.92 55.58 187.95"
          />
          <polygon
            class="cls-132"
            points="57.25 188.92 57.08 189.01 57.08 189.21 57.25 189.11 57.25 188.92"
          />
          <polygon
            class="cls-176"
            points="55.53 187.97 55.45 188.02 56.96 188.9 57.04 188.85 55.53 187.97"
          />
          <polygon
            class="cls-142"
            points="56.91 188.87 55.45 188.02 55.45 183.06 57.12 184.03 56.91 188.87"
          />
          <polygon
            class="cls-131"
            points="57.08 189.21 56.91 189.11 56.91 183.96 57.08 184.05 57.08 189.21"
          />
          <polygon
            class="cls-132"
            points="57.25 189.11 57.08 189.21 57.08 184.05 57.25 183.96 57.25 189.11"
          />
          <polygon
            class="cls-131"
            points="57.25 183.96 57.08 184.05 56.91 183.96 57.08 183.86 57.25 183.96"
          />
          <polygon
            class="cls-175"
            points="58.54 189.72 57.37 189.04 57.37 184.08 58.55 184.75 58.54 189.72"
          />
          <polygon
            class="cls-131"
            points="57.25 189.3 57.08 189.21 57.08 184.05 57.25 184.15 57.25 189.3"
          />
          <polygon
            class="cls-132"
            points="57.42 189.21 57.25 189.3 57.25 184.15 57.42 184.05 57.42 189.21"
          />
          <polygon
            class="cls-131"
            points="57.42 184.05 57.25 184.15 57.08 184.05 57.25 183.96 57.42 184.05"
          />
          <polygon
            class="cls-176"
            points="57.37 189.23 57.29 189.28 57.29 184.13 57.37 184.08 57.37 189.23"
          />
          <polygon
            class="cls-131"
            points="57.25 189.11 57.25 189.3 58.42 189.98 58.42 189.78 57.25 189.11"
          />
          <polygon
            class="cls-131"
            points="57.42 189.01 57.25 189.11 58.42 189.78 58.59 189.69 57.42 189.01"
          />
          <polygon
            class="cls-132"
            points="58.59 189.69 58.42 189.78 58.42 189.98 58.59 189.88 58.59 189.69"
          />
          <polygon
            class="cls-176"
            points="57.37 189.03 57.29 189.08 58.29 189.67 58.38 189.62 57.37 189.03"
          />
          <polygon
            class="cls-142"
            points="58.25 189.65 57.29 189.08 57.29 184.13 58.46 184.8 58.25 189.65"
          />
          <polygon
            class="cls-131"
            points="58.42 189.98 58.25 189.88 58.25 184.73 58.42 184.83 58.42 189.98"
          />
          <polygon
            class="cls-132"
            points="58.59 189.88 58.42 189.98 58.42 184.83 58.59 184.73 58.59 189.88"
          />
          <polygon
            class="cls-131"
            points="58.59 184.73 58.42 184.83 58.25 184.73 58.42 184.63 58.59 184.73"
          />
          <polygon
            class="cls-175"
            points="60.38 190.78 58.71 189.81 58.71 184.85 60.38 185.81 60.38 190.78"
          />
          <polygon
            class="cls-131"
            points="58.59 190.07 58.42 189.98 58.42 184.83 58.59 184.92 58.59 190.07"
          />
          <polygon
            class="cls-132"
            points="58.75 189.98 58.59 190.07 58.59 184.92 58.75 184.83 58.75 189.98"
          />
          <polygon
            class="cls-131"
            points="58.75 184.83 58.59 184.92 58.42 184.83 58.59 184.73 58.75 184.83"
          />
          <polygon
            class="cls-176"
            points="58.71 190 58.63 190.05 58.63 184.9 58.71 184.85 58.71 190"
          />
          <polygon
            class="cls-131"
            points="58.59 189.88 58.59 190.07 60.26 191.04 60.26 190.85 58.59 189.88"
          />
          <polygon
            class="cls-131"
            points="58.75 189.78 58.59 189.88 60.26 190.85 60.43 190.75 58.75 189.78"
          />
          <polygon
            class="cls-132"
            points="60.43 190.75 60.26 190.85 60.26 191.04 60.43 190.94 60.43 190.75"
          />
          <polygon
            class="cls-176"
            points="58.71 189.8 58.63 189.85 60.13 190.73 60.22 190.68 58.71 189.8"
          />
          <polygon
            class="cls-142"
            points="60.09 190.71 58.63 189.85 58.63 184.9 60.3 185.86 60.09 190.71"
          />
          <polygon
            class="cls-131"
            points="60.26 191.04 60.09 190.94 60.09 185.79 60.26 185.89 60.26 191.04"
          />
          <polygon
            class="cls-132"
            points="60.43 190.94 60.26 191.04 60.26 185.89 60.43 185.79 60.43 190.94"
          />
          <polygon
            class="cls-131"
            points="60.43 185.79 60.26 185.89 60.09 185.79 60.26 185.69 60.43 185.79"
          />
          <polygon
            class="cls-177"
            points="58.32 188.08 58.28 188.05 58.26 188.06 58.3 188.09 58.32 188.08"
          />
          <polygon
            class="cls-178"
            points="58.28 187.66 58.23 187.63 58.23 188.1 58.28 188.13 58.28 187.66"
          />
          <polygon
            class="cls-177"
            points="58.3 187.64 58.28 187.66 58.23 187.63 58.26 187.62 58.3 187.64"
          />
          <polygon
            class="cls-179"
            points="58.28 187.66 58.28 188.13 58.3 188.11 58.32 188.1 58.32 188.08 58.3 188.09 58.3 187.64 58.28 187.66"
          />
          <polygon
            class="cls-175"
            points="62.06 193.29 60.88 192.61 60.89 187.65 62.06 188.32 62.06 193.29"
          />
          <polygon
            class="cls-131"
            points="60.76 192.87 60.59 192.78 60.59 187.63 60.76 187.72 60.76 192.87"
          />
          <polygon
            class="cls-132"
            points="60.93 192.78 60.76 192.87 60.76 187.72 60.93 187.63 60.93 192.78"
          />
          <polygon
            class="cls-131"
            points="60.93 187.63 60.76 187.72 60.59 187.63 60.76 187.53 60.93 187.63"
          />
          <polygon
            class="cls-176"
            points="60.89 192.8 60.8 192.85 60.8 187.7 60.89 187.65 60.89 192.8"
          />
          <polygon
            class="cls-131"
            points="60.76 192.68 60.76 192.87 61.93 193.55 61.93 193.36 60.76 192.68"
          />
          <polygon
            class="cls-131"
            points="60.93 192.58 60.76 192.68 61.93 193.36 62.1 193.26 60.93 192.58"
          />
          <polygon
            class="cls-132"
            points="62.1 193.26 61.93 193.36 61.93 193.55 62.1 193.45 62.1 193.26"
          />
          <polygon
            class="cls-176"
            points="60.89 192.6 60.8 192.65 61.81 193.24 61.89 193.19 60.89 192.6"
          />
          <polygon
            class="cls-142"
            points="61.76 193.22 60.8 192.65 60.8 187.7 61.97 188.37 61.76 193.22"
          />
          <polygon
            class="cls-131"
            points="61.93 193.55 61.76 193.45 61.76 188.3 61.93 188.4 61.93 193.55"
          />
          <polygon
            class="cls-132"
            points="62.1 193.45 61.93 193.55 61.93 188.4 62.1 188.3 62.1 193.45"
          />
          <polygon
            class="cls-131"
            points="62.1 188.3 61.93 188.4 61.76 188.3 61.93 188.2 62.1 188.3"
          />
          <polygon
            class="cls-175"
            points="63.39 194.06 62.22 193.38 62.22 188.42 63.39 189.1 63.39 194.06"
          />
          <polygon
            class="cls-131"
            points="62.1 193.65 61.93 193.55 61.93 188.4 62.1 188.49 62.1 193.65"
          />
          <polygon
            class="cls-132"
            points="62.27 193.55 62.1 193.65 62.1 188.49 62.27 188.4 62.27 193.55"
          />
          <polygon
            class="cls-131"
            points="62.27 188.4 62.1 188.49 61.93 188.4 62.1 188.3 62.27 188.4"
          />
          <polygon
            class="cls-176"
            points="62.22 193.57 62.14 193.62 62.14 188.47 62.22 188.42 62.22 193.57"
          />
          <polygon
            class="cls-131"
            points="62.1 193.45 62.1 193.65 63.27 194.32 63.27 194.13 62.1 193.45"
          />
          <polygon
            class="cls-131"
            points="62.27 193.36 62.1 193.45 63.27 194.13 63.44 194.03 62.27 193.36"
          />
          <polygon
            class="cls-132"
            points="63.44 194.03 63.27 194.13 63.27 194.32 63.44 194.22 63.44 194.03"
          />
          <polygon
            class="cls-176"
            points="62.22 193.38 62.14 193.42 63.14 194.01 63.23 193.97 62.22 193.38"
          />
          <polygon
            class="cls-142"
            points="63.1 193.99 62.14 193.42 62.14 188.47 63.31 189.15 63.1 193.99"
          />
          <polygon
            class="cls-131"
            points="63.27 194.32 63.1 194.22 63.1 189.07 63.27 189.17 63.27 194.32"
          />
          <polygon
            class="cls-132"
            points="63.44 194.22 63.27 194.32 63.27 189.17 63.44 189.07 63.44 194.22"
          />
          <polygon
            class="cls-131"
            points="63.44 189.07 63.27 189.17 63.1 189.07 63.27 188.98 63.44 189.07"
          />
          <polygon
            class="cls-175"
            points="66.74 195.99 65.23 195.12 65.23 190.16 66.74 191.03 66.74 195.99"
          />
          <polygon
            class="cls-131"
            points="65.11 195.38 64.94 195.29 64.94 190.13 65.11 190.23 65.11 195.38"
          />
          <polygon
            class="cls-132"
            points="65.27 195.29 65.11 195.38 65.11 190.23 65.27 190.13 65.27 195.29"
          />
          <polygon
            class="cls-131"
            points="65.28 190.13 65.11 190.23 64.94 190.13 65.11 190.04 65.28 190.13"
          />
          <polygon
            class="cls-176"
            points="65.23 195.31 65.15 195.36 65.15 190.21 65.23 190.16 65.23 195.31"
          />
          <polygon
            class="cls-131"
            points="65.11 195.19 65.11 195.38 66.61 196.25 66.61 196.06 65.11 195.19"
          />
          <polygon
            class="cls-131"
            points="65.27 195.09 65.11 195.19 66.61 196.06 66.78 195.96 65.27 195.09"
          />
          <polygon
            class="cls-132"
            points="66.78 195.96 66.61 196.06 66.61 196.25 66.78 196.16 66.78 195.96"
          />
          <polygon
            class="cls-176"
            points="65.23 195.11 65.15 195.16 66.49 195.94 66.57 195.9 65.23 195.11"
          />
          <polygon
            class="cls-142"
            points="66.44 195.92 65.15 195.16 65.15 190.21 66.65 191.07 66.44 195.92"
          />
          <polygon
            class="cls-131"
            points="66.61 196.25 66.44 196.16 66.44 191 66.61 191.1 66.61 196.25"
          />
          <polygon
            class="cls-132"
            points="66.78 196.16 66.61 196.25 66.61 191.1 66.78 191 66.78 196.16"
          />
          <polygon
            class="cls-131"
            points="66.78 191 66.61 191.1 66.44 191 66.61 190.91 66.78 191"
          />
          <polygon
            class="cls-175"
            points="68.08 196.76 66.9 196.09 66.91 191.12 68.08 191.8 68.08 196.76"
          />
          <polygon
            class="cls-131"
            points="66.78 196.35 66.61 196.25 66.61 191.1 66.78 191.2 66.78 196.35"
          />
          <polygon
            class="cls-132"
            points="66.95 196.25 66.78 196.35 66.78 191.2 66.95 191.1 66.95 196.25"
          />
          <polygon
            class="cls-131"
            points="66.95 191.1 66.78 191.2 66.61 191.1 66.78 191 66.95 191.1"
          />
          <polygon
            class="cls-176"
            points="66.91 196.28 66.82 196.32 66.82 191.17 66.91 191.12 66.91 196.28"
          />
          <polygon
            class="cls-131"
            points="66.78 196.16 66.78 196.35 67.95 197.02 67.95 196.83 66.78 196.16"
          />
          <polygon
            class="cls-131"
            points="66.95 196.06 66.78 196.16 67.95 196.83 68.12 196.73 66.95 196.06"
          />
          <polygon
            class="cls-132"
            points="68.12 196.73 67.95 196.83 67.95 197.02 68.12 196.93 68.12 196.73"
          />
          <polygon
            class="cls-176"
            points="66.91 196.08 66.82 196.13 67.83 196.72 67.91 196.67 66.91 196.08"
          />
          <polygon
            class="cls-142"
            points="67.78 196.69 66.82 196.13 66.82 191.17 67.99 191.85 67.78 196.69"
          />
          <polygon
            class="cls-131"
            points="67.95 197.02 67.78 196.93 67.78 191.78 67.95 191.87 67.95 197.02"
          />
          <polygon
            class="cls-132"
            points="68.12 196.93 67.95 197.02 67.95 191.87 68.12 191.78 68.12 196.93"
          />
          <polygon
            class="cls-131"
            points="68.12 191.78 67.95 191.87 67.78 191.78 67.95 191.68 68.12 191.78"
          />
          <polygon
            class="cls-175"
            points="69.75 197.73 68.24 196.86 68.24 191.9 69.75 192.76 69.75 197.73"
          />
          <polygon
            class="cls-131"
            points="68.12 197.12 67.95 197.02 67.95 191.87 68.12 191.97 68.12 197.12"
          />
          <polygon
            class="cls-132"
            points="68.28 197.02 68.12 197.12 68.12 191.97 68.28 191.87 68.28 197.02"
          />
          <polygon
            class="cls-131"
            points="68.28 191.87 68.12 191.97 67.95 191.87 68.12 191.78 68.28 191.87"
          />
          <polygon
            class="cls-176"
            points="68.24 197.05 68.16 197.1 68.16 191.94 68.24 191.9 68.24 197.05"
          />
          <polygon
            class="cls-131"
            points="68.12 196.93 68.12 197.12 69.62 197.99 69.62 197.8 68.12 196.93"
          />
          <polygon
            class="cls-131"
            points="68.28 196.83 68.12 196.93 69.62 197.8 69.79 197.7 68.28 196.83"
          />
          <polygon
            class="cls-132"
            points="69.79 197.7 69.62 197.8 69.62 197.99 69.79 197.89 69.79 197.7"
          />
          <polygon
            class="cls-176"
            points="68.24 196.85 68.16 196.9 69.5 197.68 69.58 197.63 68.24 196.85"
          />
          <polygon
            class="cls-142"
            points="69.45 197.66 68.16 196.9 68.16 191.94 69.66 192.81 69.45 197.66"
          />
          <polygon
            class="cls-131"
            points="69.62 197.99 69.45 197.89 69.45 192.74 69.62 192.84 69.62 197.99"
          />
          <polygon
            class="cls-132"
            points="69.79 197.89 69.62 197.99 69.62 192.84 69.79 192.74 69.79 197.89"
          />
          <polygon
            class="cls-131"
            points="69.79 192.74 69.62 192.84 69.45 192.74 69.62 192.64 69.79 192.74"
          />
          <polygon
            class="cls-132"
            points="75.24 200.81 80.92 197.53 80.92 192.38 75.24 195.66 75.24 200.81"
          />
          <polygon
            class="cls-131"
            points="75.24 201.4 69.54 198.09 69.54 192.57 75.24 195.88 75.24 201.4"
          />
          <polygon
            class="cls-175"
            points="78.27 201.1 76.6 200.14 76.6 195.18 78.27 196.14 78.27 201.1"
          />
          <polygon
            class="cls-131"
            points="76.48 200.4 76.31 200.3 76.31 195.15 76.48 195.25 76.48 200.4"
          />
          <polygon
            class="cls-132"
            points="76.64 200.3 76.48 200.4 76.48 195.25 76.64 195.15 76.64 200.3"
          />
          <polygon
            class="cls-131"
            points="76.64 195.15 76.48 195.25 76.31 195.15 76.48 195.06 76.64 195.15"
          />
          <polygon
            class="cls-176"
            points="76.6 200.33 76.52 200.38 76.52 195.22 76.6 195.18 76.6 200.33"
          />
          <polygon
            class="cls-131"
            points="76.48 200.21 76.48 200.4 78.15 201.37 78.15 201.17 76.48 200.21"
          />
          <polygon
            class="cls-131"
            points="76.64 200.11 76.48 200.21 78.15 201.17 78.32 201.08 76.64 200.11"
          />
          <polygon
            class="cls-132"
            points="78.32 201.08 78.15 201.17 78.15 201.37 78.32 201.27 78.32 201.08"
          />
          <polygon
            class="cls-176"
            points="76.6 200.13 76.52 200.18 78.02 201.06 78.11 201.01 76.6 200.13"
          />
          <polygon
            class="cls-142"
            points="77.98 201.03 76.52 200.18 76.52 195.22 78.19 196.19 77.98 201.03"
          />
          <polygon
            class="cls-131"
            points="78.15 201.37 77.98 201.27 77.98 196.12 78.15 196.21 78.15 201.37"
          />
          <polygon
            class="cls-132"
            points="78.32 201.27 78.15 201.37 78.15 196.21 78.32 196.12 78.32 201.27"
          />
          <polygon
            class="cls-131"
            points="78.32 196.12 78.15 196.21 77.98 196.12 78.15 196.02 78.32 196.12"
          />
          <polygon
            class="cls-175"
            points="79.61 201.88 78.44 201.2 78.44 196.24 79.61 196.91 79.61 201.88"
          />
          <polygon
            class="cls-131"
            points="78.32 201.46 78.15 201.37 78.15 196.21 78.32 196.31 78.32 201.46"
          />
          <polygon
            class="cls-132"
            points="78.48 201.37 78.32 201.46 78.32 196.31 78.48 196.21 78.48 201.37"
          />
          <polygon
            class="cls-131"
            points="78.48 196.21 78.32 196.31 78.15 196.21 78.32 196.12 78.48 196.21"
          />
          <polygon
            class="cls-176"
            points="78.44 201.39 78.36 201.44 78.36 196.28 78.44 196.24 78.44 201.39"
          />
          <polygon
            class="cls-131"
            points="78.32 201.27 78.32 201.46 79.49 202.14 79.49 201.94 78.32 201.27"
          />
          <polygon
            class="cls-131"
            points="78.48 201.17 78.32 201.27 79.49 201.94 79.65 201.85 78.48 201.17"
          />
          <polygon
            class="cls-132"
            points="79.65 201.85 79.49 201.94 79.49 202.14 79.65 202.04 79.65 201.85"
          />
          <polygon
            class="cls-176"
            points="78.44 201.19 78.36 201.24 79.36 201.83 79.44 201.78 78.44 201.19"
          />
          <polygon
            class="cls-142"
            points="79.32 201.81 78.36 201.24 78.36 196.28 79.53 196.96 79.32 201.81"
          />
          <polygon
            class="cls-131"
            points="79.49 202.14 79.32 202.04 79.32 196.89 79.49 196.99 79.49 202.14"
          />
          <polygon
            class="cls-132"
            points="79.65 202.04 79.49 202.14 79.49 196.99 79.65 196.89 79.65 202.04"
          />
          <polygon
            class="cls-131"
            points="79.65 196.89 79.49 196.99 79.32 196.89 79.49 196.79 79.65 196.89"
          />
          <polygon
            class="cls-175"
            points="81.45 202.94 79.78 201.97 79.78 197.01 81.45 197.97 81.45 202.94"
          />
          <polygon
            class="cls-131"
            points="79.65 202.23 79.49 202.14 79.49 196.99 79.65 197.08 79.65 202.23"
          />
          <polygon
            class="cls-132"
            points="79.82 202.14 79.65 202.23 79.65 197.08 79.82 196.99 79.82 202.14"
          />
          <polygon
            class="cls-131"
            points="79.82 196.99 79.65 197.08 79.49 196.99 79.65 196.89 79.82 196.99"
          />
          <polygon
            class="cls-176"
            points="79.78 202.16 79.7 202.21 79.7 197.06 79.78 197.01 79.78 202.16"
          />
          <polygon
            class="cls-131"
            points="79.65 202.04 79.65 202.23 81.33 203.2 81.33 203 79.65 202.04"
          />
          <polygon
            class="cls-131"
            points="79.82 201.94 79.65 202.04 81.33 203 81.49 202.91 79.82 201.94"
          />
          <polygon
            class="cls-132"
            points="81.49 202.91 81.33 203 81.33 203.2 81.49 203.1 81.49 202.91"
          />
          <polygon
            class="cls-176"
            points="79.78 201.96 79.7 202.01 81.2 202.89 81.28 202.84 79.78 201.96"
          />
          <polygon
            class="cls-142"
            points="81.16 202.87 79.7 202.01 79.7 197.06 81.37 198.02 81.16 202.87"
          />
          <polygon
            class="cls-131"
            points="81.33 203.2 81.16 203.1 81.16 197.95 81.33 198.04 81.33 203.2"
          />
          <polygon
            class="cls-132"
            points="81.49 203.1 81.33 203.2 81.33 198.04 81.49 197.95 81.49 203.1"
          />
          <polygon
            class="cls-131"
            points="81.49 197.95 81.33 198.04 81.16 197.95 81.33 197.85 81.49 197.95"
          />
          <polygon
            class="cls-177"
            points="79.39 200.24 79.34 200.21 79.32 200.22 79.37 200.25 79.39 200.24"
          />
          <polygon
            class="cls-178"
            points="79.34 199.82 79.3 199.79 79.3 200.26 79.34 200.29 79.34 199.82"
          />
          <polygon
            class="cls-177"
            points="79.37 199.8 79.34 199.82 79.3 199.79 79.32 199.78 79.37 199.8"
          />
          <polygon
            class="cls-179"
            points="79.34 199.82 79.34 200.29 79.37 200.27 79.39 200.26 79.39 200.24 79.37 200.25 79.37 199.8 79.34 199.82"
          />
          <polygon
            class="cls-131"
            points="80.59 198.5 53.84 183.05 53.84 183.82 80.59 199.27 80.59 198.5"
          />
          <polygon
            class="cls-3"
            points="56.85 185.95 59.18 187.3 59.18 186.91 55.5 184.79 55.5 187.88 54.17 188.65 56.85 188.65 56.85 185.95"
          />
          <polygon
            class="cls-3"
            points="77.92 198.11 80.25 199.46 80.25 199.08 76.57 196.95 76.57 200.04 75.24 200.81 77.92 200.81 77.92 198.11"
          />
          <path
            class="cls-144"
            d="M59.85,190.7h0l-5.5-3.18h-.11a.05.05,0,0,0,0,0l5.5,3.18h.05a.13.13,0,0,0,.06-.1A.05.05,0,0,0,59.85,190.7Z"
          />
          <path
            class="cls-144"
            d="M59.85,190.25h0l-5.5-3.18h-.11s0,0,0,0l5.5,3.18h.05a.15.15,0,0,0,.06-.11A.05.05,0,0,0,59.85,190.25Z"
          />
          <path
            class="cls-144"
            d="M59.85,189.81h0l-5.5-3.18h-.11a.05.05,0,0,0,0,0l5.5,3.18h.05a.13.13,0,0,0,.06-.1S59.86,189.81,59.85,189.81Z"
          />
          <path
            class="cls-144"
            d="M80.91,202.86h0l-5.5-3.18H75.3a.05.05,0,0,0,0,0l5.5,3.18h.05a.13.13,0,0,0,.06-.1S80.92,202.86,80.91,202.86Z"
          />
          <path
            class="cls-144"
            d="M80.91,202.41h0l-5.5-3.18H75.3s0,0,0,0l5.5,3.18h.05a.15.15,0,0,0,.06-.11A.05.05,0,0,0,80.91,202.41Z"
          />
          <path
            class="cls-144"
            d="M80.91,202h0l-5.5-3.18H75.3v0a.05.05,0,0,0,0,0l5.5,3.17h.05a.15.15,0,0,0,.06-.1S80.92,202,80.91,202Z"
          />
          <polygon
            class="cls-141"
            points="81.93 197.72 80.59 198.5 54.17 183.25 55.51 182.47 81.93 197.72"
          />
          <polygon
            class="cls-175"
            points="57.21 183.54 55.53 182.57 55.53 177.61 57.21 178.57 57.21 183.54"
          />
          <polygon
            class="cls-131"
            points="55.41 182.84 55.24 182.74 55.24 177.59 55.41 177.68 55.41 182.84"
          />
          <polygon
            class="cls-132"
            points="55.58 182.74 55.41 182.84 55.41 177.68 55.58 177.59 55.58 182.74"
          />
          <polygon
            class="cls-131"
            points="55.58 177.59 55.41 177.68 55.24 177.59 55.41 177.49 55.58 177.59"
          />
          <polygon
            class="cls-176"
            points="55.53 182.76 55.45 182.81 55.45 177.66 55.53 177.61 55.53 182.76"
          />
          <polygon
            class="cls-131"
            points="55.41 182.64 55.41 182.84 57.08 183.8 57.08 183.61 55.41 182.64"
          />
          <polygon
            class="cls-131"
            points="55.58 182.54 55.41 182.64 57.08 183.61 57.25 183.51 55.58 182.54"
          />
          <polygon
            class="cls-132"
            points="57.25 183.51 57.08 183.61 57.08 183.8 57.25 183.7 57.25 183.51"
          />
          <polygon
            class="cls-176"
            points="55.53 182.56 55.45 182.61 56.96 183.49 57.04 183.44 55.53 182.56"
          />
          <polygon
            class="cls-142"
            points="56.91 183.47 55.45 182.61 55.45 177.66 57.12 178.62 56.91 183.47"
          />
          <polygon
            class="cls-131"
            points="57.08 183.8 56.91 183.7 56.91 178.55 57.08 178.65 57.08 183.8"
          />
          <polygon
            class="cls-132"
            points="57.25 183.7 57.08 183.8 57.08 178.65 57.25 178.55 57.25 183.7"
          />
          <polygon
            class="cls-131"
            points="57.25 178.55 57.08 178.65 56.91 178.55 57.08 178.45 57.25 178.55"
          />
          <polygon
            class="cls-175"
            points="58.54 184.31 57.37 183.63 57.37 178.67 58.55 179.35 58.54 184.31"
          />
          <polygon
            class="cls-131"
            points="57.25 183.9 57.08 183.8 57.08 178.65 57.25 178.74 57.25 183.9"
          />
          <polygon
            class="cls-132"
            points="57.42 183.8 57.25 183.9 57.25 178.74 57.42 178.65 57.42 183.8"
          />
          <polygon
            class="cls-131"
            points="57.42 178.65 57.25 178.74 57.08 178.65 57.25 178.55 57.42 178.65"
          />
          <polygon
            class="cls-176"
            points="57.37 183.82 57.29 183.87 57.29 178.72 57.37 178.67 57.37 183.82"
          />
          <polygon
            class="cls-131"
            points="57.25 183.7 57.25 183.9 58.42 184.57 58.42 184.38 57.25 183.7"
          />
          <polygon
            class="cls-131"
            points="57.42 183.61 57.25 183.7 58.42 184.38 58.59 184.28 57.42 183.61"
          />
          <polygon
            class="cls-132"
            points="58.59 184.28 58.42 184.38 58.42 184.57 58.59 184.48 58.59 184.28"
          />
          <polygon
            class="cls-176"
            points="57.37 183.63 57.29 183.67 58.29 184.26 58.38 184.22 57.37 183.63"
          />
          <polygon
            class="cls-142"
            points="58.25 184.24 57.29 183.67 57.29 178.72 58.46 179.4 58.25 184.24"
          />
          <polygon
            class="cls-131"
            points="58.42 184.57 58.25 184.48 58.25 179.32 58.42 179.42 58.42 184.57"
          />
          <polygon
            class="cls-132"
            points="58.59 184.48 58.42 184.57 58.42 179.42 58.59 179.32 58.59 184.48"
          />
          <polygon
            class="cls-131"
            points="58.59 179.32 58.42 179.42 58.25 179.32 58.42 179.23 58.59 179.32"
          />
          <polygon
            class="cls-175"
            points="60.38 185.37 58.71 184.41 58.71 179.44 60.38 180.41 60.38 185.37"
          />
          <polygon
            class="cls-131"
            points="58.59 184.67 58.42 184.57 58.42 179.42 58.59 179.52 58.59 184.67"
          />
          <polygon
            class="cls-132"
            points="58.75 184.57 58.59 184.67 58.59 179.52 58.75 179.42 58.75 184.57"
          />
          <polygon
            class="cls-131"
            points="58.75 179.42 58.59 179.52 58.42 179.42 58.59 179.32 58.75 179.42"
          />
          <polygon
            class="cls-176"
            points="58.71 184.6 58.63 184.65 58.63 179.49 58.71 179.44 58.71 184.6"
          />
          <polygon
            class="cls-131"
            points="58.59 184.48 58.59 184.67 60.26 185.63 60.26 185.44 58.59 184.48"
          />
          <polygon
            class="cls-131"
            points="58.75 184.38 58.59 184.48 60.26 185.44 60.43 185.34 58.75 184.38"
          />
          <polygon
            class="cls-132"
            points="60.43 185.34 60.26 185.44 60.26 185.63 60.43 185.54 60.43 185.34"
          />
          <polygon
            class="cls-176"
            points="58.71 184.4 58.63 184.45 60.13 185.32 60.22 185.28 58.71 184.4"
          />
          <polygon
            class="cls-142"
            points="60.09 185.3 58.63 184.45 58.63 179.49 60.3 180.46 60.09 185.3"
          />
          <polygon
            class="cls-131"
            points="60.26 185.63 60.09 185.54 60.09 180.38 60.26 180.48 60.26 185.63"
          />
          <polygon
            class="cls-132"
            points="60.43 185.54 60.26 185.63 60.26 180.48 60.43 180.38 60.43 185.54"
          />
          <polygon
            class="cls-131"
            points="60.43 180.38 60.26 180.48 60.09 180.38 60.26 180.29 60.43 180.38"
          />
          <polygon
            class="cls-177"
            points="58.32 182.67 58.28 182.64 58.26 182.66 58.3 182.68 58.32 182.67"
          />
          <polygon
            class="cls-178"
            points="58.28 182.25 58.23 182.22 58.23 182.7 58.28 182.72 58.28 182.25"
          />
          <polygon
            class="cls-177"
            points="58.3 182.24 58.28 182.25 58.23 182.22 58.26 182.21 58.3 182.24"
          />
          <polygon
            class="cls-179"
            points="58.28 182.25 58.28 182.72 58.3 182.71 58.32 182.7 58.32 182.67 58.3 182.68 58.3 182.24 58.28 182.25"
          />
          <polygon
            class="cls-175"
            points="62.06 187.88 60.88 187.21 60.89 182.24 62.06 182.92 62.06 187.88"
          />
          <polygon
            class="cls-131"
            points="60.76 187.47 60.59 187.37 60.59 182.22 60.76 182.31 60.76 187.47"
          />
          <polygon
            class="cls-132"
            points="60.93 187.37 60.76 187.47 60.76 182.31 60.93 182.22 60.93 187.37"
          />
          <polygon
            class="cls-131"
            points="60.93 182.22 60.76 182.31 60.59 182.22 60.76 182.12 60.93 182.22"
          />
          <polygon
            class="cls-176"
            points="60.89 187.4 60.8 187.44 60.8 182.29 60.89 182.24 60.89 187.4"
          />
          <polygon
            class="cls-131"
            points="60.76 187.28 60.76 187.47 61.93 188.14 61.93 187.95 60.76 187.28"
          />
          <polygon
            class="cls-131"
            points="60.93 187.18 60.76 187.28 61.93 187.95 62.1 187.85 60.93 187.18"
          />
          <polygon
            class="cls-132"
            points="62.1 187.85 61.93 187.95 61.93 188.14 62.1 188.05 62.1 187.85"
          />
          <polygon
            class="cls-176"
            points="60.89 187.2 60.8 187.25 61.81 187.84 61.89 187.79 60.89 187.2"
          />
          <polygon
            class="cls-142"
            points="61.76 187.81 60.8 187.25 60.8 182.29 61.97 182.97 61.76 187.81"
          />
          <polygon
            class="cls-131"
            points="61.93 188.14 61.76 188.05 61.76 182.9 61.93 182.99 61.93 188.14"
          />
          <polygon
            class="cls-132"
            points="62.1 188.05 61.93 188.14 61.93 182.99 62.1 182.9 62.1 188.05"
          />
          <polygon
            class="cls-131"
            points="62.1 182.9 61.93 182.99 61.76 182.9 61.93 182.8 62.1 182.9"
          />
          <polygon
            class="cls-175"
            points="63.39 188.65 62.22 187.98 62.22 183.02 63.39 183.69 63.39 188.65"
          />
          <polygon
            class="cls-131"
            points="62.1 188.24 61.93 188.14 61.93 182.99 62.1 183.09 62.1 188.24"
          />
          <polygon
            class="cls-132"
            points="62.27 188.14 62.1 188.24 62.1 183.09 62.27 182.99 62.27 188.14"
          />
          <polygon
            class="cls-131"
            points="62.27 182.99 62.1 183.09 61.93 182.99 62.1 182.9 62.27 182.99"
          />
          <polygon
            class="cls-176"
            points="62.22 188.17 62.14 188.22 62.14 183.06 62.22 183.02 62.22 188.17"
          />
          <polygon
            class="cls-131"
            points="62.1 188.05 62.1 188.24 63.27 188.92 63.27 188.72 62.1 188.05"
          />
          <polygon
            class="cls-131"
            points="62.27 187.95 62.1 188.05 63.27 188.72 63.44 188.63 62.27 187.95"
          />
          <polygon
            class="cls-132"
            points="63.44 188.63 63.27 188.72 63.27 188.92 63.44 188.82 63.44 188.63"
          />
          <polygon
            class="cls-176"
            points="62.22 187.97 62.14 188.02 63.14 188.61 63.23 188.56 62.22 187.97"
          />
          <polygon
            class="cls-142"
            points="63.1 188.58 62.14 188.02 62.14 183.06 63.31 183.74 63.1 188.58"
          />
          <polygon
            class="cls-131"
            points="63.27 188.92 63.1 188.82 63.1 183.67 63.27 183.76 63.27 188.92"
          />
          <polygon
            class="cls-132"
            points="63.44 188.82 63.27 188.92 63.27 183.76 63.44 183.67 63.44 188.82"
          />
          <polygon
            class="cls-131"
            points="63.44 183.67 63.27 183.76 63.1 183.67 63.27 183.57 63.44 183.67"
          />
          <polygon
            class="cls-175"
            points="66.74 190.58 65.23 189.72 65.23 184.75 66.74 185.62 66.74 190.58"
          />
          <polygon
            class="cls-131"
            points="65.11 189.98 64.94 189.88 64.94 184.73 65.11 184.82 65.11 189.98"
          />
          <polygon
            class="cls-132"
            points="65.27 189.88 65.11 189.98 65.11 184.82 65.27 184.73 65.27 189.88"
          />
          <polygon
            class="cls-131"
            points="65.28 184.73 65.11 184.82 64.94 184.73 65.11 184.63 65.28 184.73"
          />
          <polygon
            class="cls-176"
            points="65.23 189.91 65.15 189.95 65.15 184.8 65.23 184.75 65.23 189.91"
          />
          <polygon
            class="cls-131"
            points="65.11 189.78 65.11 189.98 66.61 190.85 66.61 190.65 65.11 189.78"
          />
          <polygon
            class="cls-131"
            points="65.27 189.69 65.11 189.78 66.61 190.65 66.78 190.56 65.27 189.69"
          />
          <polygon
            class="cls-132"
            points="66.78 190.56 66.61 190.65 66.61 190.85 66.78 190.75 66.78 190.56"
          />
          <polygon
            class="cls-176"
            points="65.23 189.71 65.15 189.75 66.49 190.54 66.57 190.49 65.23 189.71"
          />
          <polygon
            class="cls-142"
            points="66.44 190.51 65.15 189.75 65.15 184.8 66.65 185.67 66.44 190.51"
          />
          <polygon
            class="cls-131"
            points="66.61 190.85 66.44 190.75 66.44 185.6 66.61 185.69 66.61 190.85"
          />
          <polygon
            class="cls-132"
            points="66.78 190.75 66.61 190.85 66.61 185.69 66.78 185.6 66.78 190.75"
          />
          <polygon
            class="cls-131"
            points="66.78 185.6 66.61 185.69 66.44 185.6 66.61 185.5 66.78 185.6"
          />
          <polygon
            class="cls-175"
            points="68.08 191.36 66.9 190.68 66.91 185.72 68.08 186.39 68.08 191.36"
          />
          <polygon
            class="cls-131"
            points="66.78 190.94 66.61 190.85 66.61 185.69 66.78 185.79 66.78 190.94"
          />
          <polygon
            class="cls-132"
            points="66.95 190.85 66.78 190.94 66.78 185.79 66.95 185.69 66.95 190.85"
          />
          <polygon
            class="cls-131"
            points="66.95 185.69 66.78 185.79 66.61 185.69 66.78 185.6 66.95 185.69"
          />
          <polygon
            class="cls-176"
            points="66.91 190.87 66.82 190.92 66.82 185.77 66.91 185.72 66.91 190.87"
          />
          <polygon
            class="cls-131"
            points="66.78 190.75 66.78 190.94 67.95 191.62 67.95 191.43 66.78 190.75"
          />
          <polygon
            class="cls-131"
            points="66.95 190.65 66.78 190.75 67.95 191.43 68.12 191.33 66.95 190.65"
          />
          <polygon
            class="cls-132"
            points="68.12 191.33 67.95 191.43 67.95 191.62 68.12 191.52 68.12 191.33"
          />
          <polygon
            class="cls-176"
            points="66.91 190.67 66.82 190.72 67.83 191.31 67.91 191.26 66.91 190.67"
          />
          <polygon
            class="cls-142"
            points="67.78 191.29 66.82 190.72 66.82 185.77 67.99 186.44 67.78 191.29"
          />
          <polygon
            class="cls-131"
            points="67.95 191.62 67.78 191.52 67.78 186.37 67.95 186.47 67.95 191.62"
          />
          <polygon
            class="cls-132"
            points="68.12 191.52 67.95 191.62 67.95 186.47 68.12 186.37 68.12 191.52"
          />
          <polygon
            class="cls-131"
            points="68.12 186.37 67.95 186.47 67.78 186.37 67.95 186.27 68.12 186.37"
          />
          <polygon
            class="cls-175"
            points="69.75 192.32 68.24 191.45 68.24 186.49 69.75 187.36 69.75 192.32"
          />
          <polygon
            class="cls-131"
            points="68.12 191.71 67.95 191.62 67.95 186.47 68.12 186.56 68.12 191.71"
          />
          <polygon
            class="cls-132"
            points="68.28 191.62 68.12 191.71 68.12 186.56 68.28 186.47 68.28 191.62"
          />
          <polygon
            class="cls-131"
            points="68.28 186.47 68.12 186.56 67.95 186.47 68.12 186.37 68.28 186.47"
          />
          <polygon
            class="cls-176"
            points="68.24 191.64 68.16 191.69 68.16 186.54 68.24 186.49 68.24 191.64"
          />
          <polygon
            class="cls-131"
            points="68.12 191.52 68.12 191.71 69.62 192.58 69.62 192.39 68.12 191.52"
          />
          <polygon
            class="cls-131"
            points="68.28 191.43 68.12 191.52 69.62 192.39 69.79 192.29 68.28 191.43"
          />
          <polygon
            class="cls-132"
            points="69.79 192.29 69.62 192.39 69.62 192.58 69.79 192.49 69.79 192.29"
          />
          <polygon
            class="cls-176"
            points="68.24 191.44 68.16 191.49 69.5 192.28 69.58 192.23 68.24 191.44"
          />
          <polygon
            class="cls-142"
            points="69.45 192.25 68.16 191.49 68.16 186.54 69.66 187.41 69.45 192.25"
          />
          <polygon
            class="cls-131"
            points="69.62 192.58 69.45 192.49 69.45 187.33 69.62 187.43 69.62 192.58"
          />
          <polygon
            class="cls-132"
            points="69.79 192.49 69.62 192.58 69.62 187.43 69.79 187.33 69.79 192.49"
          />
          <polygon
            class="cls-131"
            points="69.79 187.33 69.62 187.43 69.45 187.33 69.62 187.24 69.79 187.33"
          />
          <polygon
            class="cls-132"
            points="75.24 195.41 80.92 192.13 80.92 186.97 75.24 190.25 75.24 195.41"
          />
          <polygon
            class="cls-131"
            points="75.24 196.06 69.58 192.72 69.58 187.17 75.24 190.5 75.24 196.06"
          />
          <polygon
            class="cls-175"
            points="78.27 195.7 76.6 194.73 76.6 189.77 78.27 190.73 78.27 195.7"
          />
          <polygon
            class="cls-131"
            points="76.48 194.99 76.31 194.9 76.31 189.75 76.48 189.84 76.48 194.99"
          />
          <polygon
            class="cls-132"
            points="76.64 194.9 76.48 194.99 76.48 189.84 76.64 189.75 76.64 194.9"
          />
          <polygon
            class="cls-131"
            points="76.64 189.75 76.48 189.84 76.31 189.75 76.48 189.65 76.64 189.75"
          />
          <polygon
            class="cls-176"
            points="76.6 194.92 76.52 194.97 76.52 189.82 76.6 189.77 76.6 194.92"
          />
          <polygon
            class="cls-131"
            points="76.48 194.8 76.48 194.99 78.15 195.96 78.15 195.77 76.48 194.8"
          />
          <polygon
            class="cls-131"
            points="76.64 194.7 76.48 194.8 78.15 195.77 78.32 195.67 76.64 194.7"
          />
          <polygon
            class="cls-132"
            points="78.32 195.67 78.15 195.77 78.15 195.96 78.32 195.86 78.32 195.67"
          />
          <polygon
            class="cls-176"
            points="76.6 194.72 76.52 194.77 78.02 195.65 78.11 195.6 76.6 194.72"
          />
          <polygon
            class="cls-142"
            points="77.98 195.63 76.52 194.77 76.52 189.82 78.19 190.78 77.98 195.63"
          />
          <polygon
            class="cls-131"
            points="78.15 195.96 77.98 195.86 77.98 190.71 78.15 190.81 78.15 195.96"
          />
          <polygon
            class="cls-132"
            points="78.32 195.86 78.15 195.96 78.15 190.81 78.32 190.71 78.32 195.86"
          />
          <polygon
            class="cls-131"
            points="78.32 190.71 78.15 190.81 77.98 190.71 78.15 190.61 78.32 190.71"
          />
          <polygon
            class="cls-175"
            points="79.61 196.47 78.44 195.79 78.44 190.83 79.61 191.51 79.61 196.47"
          />
          <polygon
            class="cls-131"
            points="78.32 196.06 78.15 195.96 78.15 190.81 78.32 190.9 78.32 196.06"
          />
          <polygon
            class="cls-132"
            points="78.48 195.96 78.32 196.06 78.32 190.9 78.48 190.81 78.48 195.96"
          />
          <polygon
            class="cls-131"
            points="78.48 190.81 78.32 190.9 78.15 190.81 78.32 190.71 78.48 190.81"
          />
          <polygon
            class="cls-176"
            points="78.44 195.98 78.36 196.03 78.36 190.88 78.44 190.83 78.44 195.98"
          />
          <polygon
            class="cls-131"
            points="78.32 195.86 78.32 196.06 79.49 196.73 79.49 196.54 78.32 195.86"
          />
          <polygon
            class="cls-131"
            points="78.48 195.77 78.32 195.86 79.49 196.54 79.65 196.44 78.48 195.77"
          />
          <polygon
            class="cls-132"
            points="79.65 196.44 79.49 196.54 79.49 196.73 79.65 196.63 79.65 196.44"
          />
          <polygon
            class="cls-176"
            points="78.44 195.78 78.36 195.83 79.36 196.42 79.44 196.38 78.44 195.78"
          />
          <polygon
            class="cls-142"
            points="79.32 196.4 78.36 195.83 78.36 190.88 79.53 191.56 79.32 196.4"
          />
          <polygon
            class="cls-131"
            points="79.49 196.73 79.32 196.63 79.32 191.48 79.49 191.58 79.49 196.73"
          />
          <polygon
            class="cls-132"
            points="79.65 196.63 79.49 196.73 79.49 191.58 79.65 191.48 79.65 196.63"
          />
          <polygon
            class="cls-131"
            points="79.65 191.48 79.49 191.58 79.32 191.48 79.49 191.39 79.65 191.48"
          />
          <polygon
            class="cls-175"
            points="81.45 197.53 79.78 196.57 79.78 191.6 81.45 192.57 81.45 197.53"
          />
          <polygon
            class="cls-131"
            points="79.65 196.83 79.49 196.73 79.49 191.58 79.65 191.68 79.65 196.83"
          />
          <polygon
            class="cls-132"
            points="79.82 196.73 79.65 196.83 79.65 191.68 79.82 191.58 79.82 196.73"
          />
          <polygon
            class="cls-131"
            points="79.82 191.58 79.65 191.68 79.49 191.58 79.65 191.48 79.82 191.58"
          />
          <polygon
            class="cls-176"
            points="79.78 196.75 79.7 196.8 79.7 191.65 79.78 191.6 79.78 196.75"
          />
          <polygon
            class="cls-131"
            points="79.65 196.63 79.65 196.83 81.33 197.79 81.33 197.6 79.65 196.63"
          />
          <polygon
            class="cls-131"
            points="79.82 196.54 79.65 196.63 81.33 197.6 81.49 197.5 79.82 196.54"
          />
          <polygon
            class="cls-132"
            points="81.49 197.5 81.33 197.6 81.33 197.79 81.49 197.69 81.49 197.5"
          />
          <polygon
            class="cls-176"
            points="79.78 196.56 79.7 196.6 81.2 197.48 81.28 197.44 79.78 196.56"
          />
          <polygon
            class="cls-142"
            points="81.16 197.46 79.7 196.6 79.7 191.65 81.37 192.62 81.16 197.46"
          />
          <polygon
            class="cls-131"
            points="81.33 197.79 81.16 197.69 81.16 192.54 81.33 192.64 81.33 197.79"
          />
          <polygon
            class="cls-132"
            points="81.49 197.69 81.33 197.79 81.33 192.64 81.49 192.54 81.49 197.69"
          />
          <polygon
            class="cls-131"
            points="81.49 192.54 81.33 192.64 81.16 192.54 81.33 192.45 81.49 192.54"
          />
          <polygon
            class="cls-177"
            points="79.39 194.83 79.34 194.8 79.32 194.81 79.37 194.84 79.39 194.83"
          />
          <polygon
            class="cls-178"
            points="79.34 194.41 79.3 194.38 79.3 194.85 79.34 194.88 79.34 194.41"
          />
          <polygon
            class="cls-177"
            points="79.37 194.4 79.34 194.41 79.3 194.38 79.32 194.37 79.37 194.4"
          />
          <polygon
            class="cls-179"
            points="79.34 194.41 79.34 194.88 79.37 194.87 79.39 194.85 79.39 194.83 79.37 194.84 79.37 194.4 79.34 194.41"
          />
          <polygon
            class="cls-131"
            points="80.59 193.09 53.84 177.65 53.84 178.42 80.59 193.86 80.59 193.09"
          />
          <polygon
            class="cls-3"
            points="56.85 180.54 59.18 181.89 59.18 181.51 55.5 179.38 55.5 182.47 54.17 183.24 56.85 183.24 56.85 180.54"
          />
          <polygon
            class="cls-3"
            points="77.92 192.71 80.25 194.06 80.25 193.67 76.57 191.55 76.57 194.63 75.24 195.41 77.92 195.41 77.92 192.71"
          />
          <path
            class="cls-144"
            d="M59.85,185.29h0l-5.5-3.18h-.11s0,0,0,0l5.5,3.18h.05a.15.15,0,0,0,.06-.11A.05.05,0,0,0,59.85,185.29Z"
          />
          <path
            class="cls-144"
            d="M59.85,184.85h0l-5.5-3.18h-.11a.05.05,0,0,0,0,0l5.5,3.18h.05a.13.13,0,0,0,.06-.1S59.86,184.85,59.85,184.85Z"
          />
          <path
            class="cls-144"
            d="M59.85,184.4h0l-5.5-3.18h-.11s0,0,0,0l5.5,3.18h.05a.15.15,0,0,0,.06-.11A.05.05,0,0,0,59.85,184.4Z"
          />
          <path
            class="cls-144"
            d="M80.91,197.45h0l-5.5-3.18H75.3a.05.05,0,0,0,0,0l5.5,3.18a0,0,0,0,0,.05,0,.15.15,0,0,0,.06-.11A.05.05,0,0,0,80.91,197.45Z"
          />
          <path
            class="cls-144"
            d="M80.91,197h0l-5.5-3.18H75.3v0a.05.05,0,0,0,0,0l5.5,3.17h.05a.15.15,0,0,0,.06-.1S80.92,197,80.91,197Z"
          />
          <path
            class="cls-144"
            d="M80.91,196.56h0l-5.5-3.18H75.3a.05.05,0,0,0,0,0l5.5,3.18h.05a.15.15,0,0,0,.06-.11A.05.05,0,0,0,80.91,196.56Z"
          />
          <polygon
            class="cls-141"
            points="81.93 192.32 80.59 193.09 54.17 177.84 55.51 177.07 81.93 192.32"
          />
          <polygon
            class="cls-175"
            points="57.21 178.13 55.53 177.17 55.53 172.2 57.21 173.17 57.21 178.13"
          />
          <polygon
            class="cls-131"
            points="55.41 177.43 55.24 177.33 55.24 172.18 55.41 172.28 55.41 177.43"
          />
          <polygon
            class="cls-132"
            points="55.58 177.33 55.41 177.43 55.41 172.28 55.58 172.18 55.58 177.33"
          />
          <polygon
            class="cls-131"
            points="55.58 172.18 55.41 172.28 55.24 172.18 55.41 172.08 55.58 172.18"
          />
          <polygon
            class="cls-176"
            points="55.53 177.36 55.45 177.41 55.45 172.25 55.53 172.2 55.53 177.36"
          />
          <polygon
            class="cls-131"
            points="55.41 177.24 55.41 177.43 57.08 178.39 57.08 178.2 55.41 177.24"
          />
          <polygon
            class="cls-131"
            points="55.58 177.14 55.41 177.24 57.08 178.2 57.25 178.1 55.58 177.14"
          />
          <polygon
            class="cls-132"
            points="57.25 178.1 57.08 178.2 57.08 178.39 57.25 178.3 57.25 178.1"
          />
          <polygon
            class="cls-176"
            points="55.53 177.16 55.45 177.21 56.96 178.09 57.04 178.04 55.53 177.16"
          />
          <polygon
            class="cls-142"
            points="56.91 178.06 55.45 177.21 55.45 172.25 57.12 173.22 56.91 178.06"
          />
          <polygon
            class="cls-131"
            points="57.08 178.39 56.91 178.3 56.91 173.15 57.08 173.24 57.08 178.39"
          />
          <polygon
            class="cls-132"
            points="57.25 178.3 57.08 178.39 57.08 173.24 57.25 173.15 57.25 178.3"
          />
          <polygon
            class="cls-131"
            points="57.25 173.15 57.08 173.24 56.91 173.15 57.08 173.05 57.25 173.15"
          />
          <polygon
            class="cls-175"
            points="58.54 178.91 57.37 178.23 57.37 173.27 58.55 173.94 58.54 178.91"
          />
          <polygon
            class="cls-131"
            points="57.25 178.49 57.08 178.39 57.08 173.24 57.25 173.34 57.25 178.49"
          />
          <polygon
            class="cls-132"
            points="57.42 178.39 57.25 178.49 57.25 173.34 57.42 173.24 57.42 178.39"
          />
          <polygon
            class="cls-131"
            points="57.42 173.24 57.25 173.34 57.08 173.24 57.25 173.15 57.42 173.24"
          />
          <polygon
            class="cls-176"
            points="57.37 178.42 57.29 178.47 57.29 173.31 57.37 173.27 57.37 178.42"
          />
          <polygon
            class="cls-131"
            points="57.25 178.3 57.25 178.49 58.42 179.17 58.42 178.97 57.25 178.3"
          />
          <polygon
            class="cls-131"
            points="57.42 178.2 57.25 178.3 58.42 178.97 58.59 178.88 57.42 178.2"
          />
          <polygon
            class="cls-132"
            points="58.59 178.88 58.42 178.97 58.42 179.17 58.59 179.07 58.59 178.88"
          />
          <polygon
            class="cls-176"
            points="57.37 178.22 57.29 178.27 58.29 178.86 58.38 178.81 57.37 178.22"
          />
          <polygon
            class="cls-142"
            points="58.25 178.83 57.29 178.27 57.29 173.31 58.46 173.99 58.25 178.83"
          />
          <polygon
            class="cls-131"
            points="58.42 179.17 58.25 179.07 58.25 173.92 58.42 174.01 58.42 179.17"
          />
          <polygon
            class="cls-132"
            points="58.59 179.07 58.42 179.17 58.42 174.01 58.59 173.92 58.59 179.07"
          />
          <polygon
            class="cls-131"
            points="58.59 173.92 58.42 174.01 58.25 173.92 58.42 173.82 58.59 173.92"
          />
          <polygon
            class="cls-175"
            points="60.38 179.97 58.71 179 58.71 174.04 60.38 175 60.38 179.97"
          />
          <polygon
            class="cls-131"
            points="58.59 179.26 58.42 179.17 58.42 174.01 58.59 174.11 58.59 179.26"
          />
          <polygon
            class="cls-132"
            points="58.75 179.17 58.59 179.26 58.59 174.11 58.75 174.01 58.75 179.17"
          />
          <polygon
            class="cls-131"
            points="58.75 174.01 58.59 174.11 58.42 174.01 58.59 173.92 58.75 174.01"
          />
          <polygon
            class="cls-176"
            points="58.71 179.19 58.63 179.24 58.63 174.09 58.71 174.04 58.71 179.19"
          />
          <polygon
            class="cls-131"
            points="58.59 179.07 58.59 179.26 60.26 180.23 60.26 180.03 58.59 179.07"
          />
          <polygon
            class="cls-131"
            points="58.75 178.97 58.59 179.07 60.26 180.03 60.43 179.94 58.75 178.97"
          />
          <polygon
            class="cls-132"
            points="60.43 179.94 60.26 180.03 60.26 180.23 60.43 180.13 60.43 179.94"
          />
          <polygon
            class="cls-176"
            points="58.71 178.99 58.63 179.04 60.13 179.92 60.22 179.87 58.71 178.99"
          />
          <polygon
            class="cls-142"
            points="60.09 179.89 58.63 179.04 58.63 174.09 60.3 175.05 60.09 179.89"
          />
          <polygon
            class="cls-131"
            points="60.26 180.23 60.09 180.13 60.09 174.98 60.26 175.07 60.26 180.23"
          />
          <polygon
            class="cls-132"
            points="60.43 180.13 60.26 180.23 60.26 175.07 60.43 174.98 60.43 180.13"
          />
          <polygon
            class="cls-131"
            points="60.43 174.98 60.26 175.07 60.09 174.98 60.26 174.88 60.43 174.98"
          />
          <polygon
            class="cls-177"
            points="58.32 177.26 58.28 177.24 58.26 177.25 58.3 177.28 58.32 177.26"
          />
          <polygon
            class="cls-178"
            points="58.28 176.85 58.23 176.82 58.23 177.29 58.28 177.32 58.28 176.85"
          />
          <polygon
            class="cls-177"
            points="58.3 176.83 58.28 176.85 58.23 176.82 58.26 176.81 58.3 176.83"
          />
          <polygon
            class="cls-179"
            points="58.28 176.85 58.28 177.32 58.3 177.3 58.32 177.29 58.32 177.26 58.3 177.28 58.3 176.83 58.28 176.85"
          />
          <polygon
            class="cls-175"
            points="62.06 182.48 60.88 181.8 60.89 176.84 62.06 177.51 62.06 182.48"
          />
          <polygon
            class="cls-131"
            points="60.76 182.06 60.59 181.97 60.59 176.81 60.76 176.91 60.76 182.06"
          />
          <polygon
            class="cls-132"
            points="60.93 181.97 60.76 182.06 60.76 176.91 60.93 176.81 60.93 181.97"
          />
          <polygon
            class="cls-131"
            points="60.93 176.81 60.76 176.91 60.59 176.81 60.76 176.72 60.93 176.81"
          />
          <polygon
            class="cls-176"
            points="60.89 181.99 60.8 182.04 60.8 176.89 60.89 176.84 60.89 181.99"
          />
          <polygon
            class="cls-131"
            points="60.76 181.87 60.76 182.06 61.93 182.74 61.93 182.54 60.76 181.87"
          />
          <polygon
            class="cls-131"
            points="60.93 181.77 60.76 181.87 61.93 182.54 62.1 182.45 60.93 181.77"
          />
          <polygon
            class="cls-132"
            points="62.1 182.45 61.93 182.54 61.93 182.74 62.1 182.64 62.1 182.45"
          />
          <polygon
            class="cls-176"
            points="60.89 181.79 60.8 181.84 61.81 182.43 61.89 182.38 60.89 181.79"
          />
          <polygon
            class="cls-142"
            points="61.76 182.41 60.8 181.84 60.8 176.89 61.97 177.56 61.76 182.41"
          />
          <polygon
            class="cls-131"
            points="61.93 182.74 61.76 182.64 61.76 177.49 61.93 177.59 61.93 182.74"
          />
          <polygon
            class="cls-132"
            points="62.1 182.64 61.93 182.74 61.93 177.59 62.1 177.49 62.1 182.64"
          />
          <polygon
            class="cls-131"
            points="62.1 177.49 61.93 177.59 61.76 177.49 61.93 177.39 62.1 177.49"
          />
          <polygon
            class="cls-175"
            points="63.39 183.25 62.22 182.57 62.22 177.61 63.39 178.28 63.39 183.25"
          />
          <polygon
            class="cls-131"
            points="62.1 182.83 61.93 182.74 61.93 177.59 62.1 177.68 62.1 182.83"
          />
          <polygon
            class="cls-132"
            points="62.27 182.74 62.1 182.83 62.1 177.68 62.27 177.59 62.27 182.74"
          />
          <polygon
            class="cls-131"
            points="62.27 177.59 62.1 177.68 61.93 177.59 62.1 177.49 62.27 177.59"
          />
          <polygon
            class="cls-176"
            points="62.22 182.76 62.14 182.81 62.14 177.66 62.22 177.61 62.22 182.76"
          />
          <polygon
            class="cls-131"
            points="62.1 182.64 62.1 182.83 63.27 183.51 63.27 183.32 62.1 182.64"
          />
          <polygon
            class="cls-131"
            points="62.27 182.54 62.1 182.64 63.27 183.32 63.44 183.22 62.27 182.54"
          />
          <polygon
            class="cls-132"
            points="63.44 183.22 63.27 183.32 63.27 183.51 63.44 183.41 63.44 183.22"
          />
          <polygon
            class="cls-176"
            points="62.22 182.56 62.14 182.61 63.14 183.2 63.23 183.15 62.22 182.56"
          />
          <polygon
            class="cls-142"
            points="63.1 183.18 62.14 182.61 62.14 177.66 63.31 178.33 63.1 183.18"
          />
          <polygon
            class="cls-131"
            points="63.27 183.51 63.1 183.41 63.1 178.26 63.27 178.36 63.27 183.51"
          />
          <polygon
            class="cls-132"
            points="63.44 183.41 63.27 183.51 63.27 178.36 63.44 178.26 63.44 183.41"
          />
          <polygon
            class="cls-131"
            points="63.44 178.26 63.27 178.36 63.1 178.26 63.27 178.16 63.44 178.26"
          />
          <polygon
            class="cls-175"
            points="66.74 185.18 65.23 184.31 65.23 179.35 66.74 180.22 66.74 185.18"
          />
          <polygon
            class="cls-131"
            points="65.11 184.57 64.94 184.47 64.94 179.32 65.11 179.42 65.11 184.57"
          />
          <polygon
            class="cls-132"
            points="65.27 184.47 65.11 184.57 65.11 179.42 65.27 179.32 65.27 184.47"
          />
          <polygon
            class="cls-131"
            points="65.28 179.32 65.11 179.42 64.94 179.32 65.11 179.23 65.28 179.32"
          />
          <polygon
            class="cls-176"
            points="65.23 184.5 65.15 184.55 65.15 179.4 65.23 179.35 65.23 184.5"
          />
          <polygon
            class="cls-131"
            points="65.11 184.38 65.11 184.57 66.61 185.44 66.61 185.25 65.11 184.38"
          />
          <polygon
            class="cls-131"
            points="65.27 184.28 65.11 184.38 66.61 185.25 66.78 185.15 65.27 184.28"
          />
          <polygon
            class="cls-132"
            points="66.78 185.15 66.61 185.25 66.61 185.44 66.78 185.34 66.78 185.15"
          />
          <polygon
            class="cls-176"
            points="65.23 184.3 65.15 184.35 66.49 185.13 66.57 185.08 65.23 184.3"
          />
          <polygon
            class="cls-142"
            points="66.44 185.11 65.15 184.35 65.15 179.4 66.65 180.26 66.44 185.11"
          />
          <polygon
            class="cls-131"
            points="66.61 185.44 66.44 185.34 66.44 180.19 66.61 180.29 66.61 185.44"
          />
          <polygon
            class="cls-132"
            points="66.78 185.34 66.61 185.44 66.61 180.29 66.78 180.19 66.78 185.34"
          />
          <polygon
            class="cls-131"
            points="66.78 180.19 66.61 180.29 66.44 180.19 66.61 180.09 66.78 180.19"
          />
          <polygon
            class="cls-175"
            points="68.08 185.95 66.9 185.28 66.91 180.31 68.08 180.99 68.08 185.95"
          />
          <polygon
            class="cls-131"
            points="66.78 185.54 66.61 185.44 66.61 180.29 66.78 180.38 66.78 185.54"
          />
          <polygon
            class="cls-132"
            points="66.95 185.44 66.78 185.54 66.78 180.38 66.95 180.29 66.95 185.44"
          />
          <polygon
            class="cls-131"
            points="66.95 180.29 66.78 180.38 66.61 180.29 66.78 180.19 66.95 180.29"
          />
          <polygon
            class="cls-176"
            points="66.91 185.46 66.82 185.51 66.82 180.36 66.91 180.31 66.91 185.46"
          />
          <polygon
            class="cls-131"
            points="66.78 185.34 66.78 185.54 67.95 186.21 67.95 186.02 66.78 185.34"
          />
          <polygon
            class="cls-131"
            points="66.95 185.25 66.78 185.34 67.95 186.02 68.12 185.92 66.95 185.25"
          />
          <polygon
            class="cls-132"
            points="68.12 185.92 67.95 186.02 67.95 186.21 68.12 186.12 68.12 185.92"
          />
          <polygon
            class="cls-176"
            points="66.91 185.26 66.82 185.31 67.83 185.9 67.91 185.86 66.91 185.26"
          />
          <polygon
            class="cls-142"
            points="67.78 185.88 66.82 185.31 66.82 180.36 67.99 181.03 67.78 185.88"
          />
          <polygon
            class="cls-131"
            points="67.95 186.21 67.78 186.12 67.78 180.96 67.95 181.06 67.95 186.21"
          />
          <polygon
            class="cls-132"
            points="68.12 186.12 67.95 186.21 67.95 181.06 68.12 180.96 68.12 186.12"
          />
          <polygon
            class="cls-131"
            points="68.12 180.96 67.95 181.06 67.78 180.96 67.95 180.87 68.12 180.96"
          />
          <polygon
            class="cls-175"
            points="69.75 186.92 68.24 186.05 68.24 181.08 69.75 181.95 69.75 186.92"
          />
          <polygon
            class="cls-131"
            points="68.12 186.31 67.95 186.21 67.95 181.06 68.12 181.16 68.12 186.31"
          />
          <polygon
            class="cls-132"
            points="68.28 186.21 68.12 186.31 68.12 181.16 68.28 181.06 68.28 186.21"
          />
          <polygon
            class="cls-131"
            points="68.28 181.06 68.12 181.16 67.95 181.06 68.12 180.96 68.28 181.06"
          />
          <polygon
            class="cls-176"
            points="68.24 186.24 68.16 186.28 68.16 181.13 68.24 181.08 68.24 186.24"
          />
          <polygon
            class="cls-131"
            points="68.12 186.12 68.12 186.31 69.62 187.18 69.62 186.98 68.12 186.12"
          />
          <polygon
            class="cls-131"
            points="68.28 186.02 68.12 186.12 69.62 186.98 69.79 186.89 68.28 186.02"
          />
          <polygon
            class="cls-132"
            points="69.79 186.89 69.62 186.98 69.62 187.18 69.79 187.08 69.79 186.89"
          />
          <polygon
            class="cls-176"
            points="68.24 186.04 68.16 186.09 69.5 186.87 69.58 186.82 68.24 186.04"
          />
          <polygon
            class="cls-142"
            points="69.45 186.84 68.16 186.09 68.16 181.13 69.66 182 69.45 186.84"
          />
          <polygon
            class="cls-131"
            points="69.62 187.18 69.45 187.08 69.45 181.93 69.62 182.03 69.62 187.18"
          />
          <polygon
            class="cls-132"
            points="69.79 187.08 69.62 187.18 69.62 182.03 69.79 181.93 69.79 187.08"
          />
          <polygon
            class="cls-131"
            points="69.79 181.93 69.62 182.03 69.45 181.93 69.62 181.83 69.79 181.93"
          />
          <polygon
            class="cls-132"
            points="75.24 190 80.92 186.72 80.92 181.57 75.24 184.85 75.24 190"
          />
          <polygon
            class="cls-131"
            points="75.24 191.06 69.58 187.58 69.58 181.76 75.24 185.25 75.24 191.06"
          />
          <polygon
            class="cls-175"
            points="78.27 190.29 76.6 189.33 76.6 184.36 78.27 185.33 78.27 190.29"
          />
          <polygon
            class="cls-131"
            points="76.48 189.59 76.31 189.49 76.31 184.34 76.48 184.44 76.48 189.59"
          />
          <polygon
            class="cls-132"
            points="76.64 189.49 76.48 189.59 76.48 184.44 76.64 184.34 76.64 189.49"
          />
          <polygon
            class="cls-131"
            points="76.64 184.34 76.48 184.44 76.31 184.34 76.48 184.24 76.64 184.34"
          />
          <polygon
            class="cls-176"
            points="76.6 189.51 76.52 189.56 76.52 184.41 76.6 184.36 76.6 189.51"
          />
          <polygon
            class="cls-131"
            points="76.48 189.4 76.48 189.59 78.15 190.55 78.15 190.36 76.48 189.4"
          />
          <polygon
            class="cls-131"
            points="76.64 189.3 76.48 189.4 78.15 190.36 78.32 190.26 76.64 189.3"
          />
          <polygon
            class="cls-132"
            points="78.32 190.26 78.15 190.36 78.15 190.55 78.32 190.46 78.32 190.26"
          />
          <polygon
            class="cls-176"
            points="76.6 189.32 76.52 189.37 78.02 190.25 78.11 190.2 76.6 189.32"
          />
          <polygon
            class="cls-142"
            points="77.98 190.22 76.52 189.37 76.52 184.41 78.19 185.38 77.98 190.22"
          />
          <polygon
            class="cls-131"
            points="78.15 190.55 77.98 190.46 77.98 185.3 78.15 185.4 78.15 190.55"
          />
          <polygon
            class="cls-132"
            points="78.32 190.46 78.15 190.55 78.15 185.4 78.32 185.3 78.32 190.46"
          />
          <polygon
            class="cls-131"
            points="78.32 185.3 78.15 185.4 77.98 185.3 78.15 185.21 78.32 185.3"
          />
          <polygon
            class="cls-175"
            points="79.61 191.06 78.44 190.39 78.44 185.43 79.61 186.1 79.61 191.06"
          />
          <polygon
            class="cls-131"
            points="78.32 190.65 78.15 190.55 78.15 185.4 78.32 185.5 78.32 190.65"
          />
          <polygon
            class="cls-132"
            points="78.48 190.55 78.32 190.65 78.32 185.5 78.48 185.4 78.48 190.55"
          />
          <polygon
            class="cls-131"
            points="78.48 185.4 78.32 185.5 78.15 185.4 78.32 185.3 78.48 185.4"
          />
          <polygon
            class="cls-176"
            points="78.44 190.58 78.36 190.63 78.36 185.47 78.44 185.43 78.44 190.58"
          />
          <polygon
            class="cls-131"
            points="78.32 190.46 78.32 190.65 79.49 191.33 79.49 191.13 78.32 190.46"
          />
          <polygon
            class="cls-131"
            points="78.48 190.36 78.32 190.46 79.49 191.13 79.65 191.04 78.48 190.36"
          />
          <polygon
            class="cls-132"
            points="79.65 191.04 79.49 191.13 79.49 191.33 79.65 191.23 79.65 191.04"
          />
          <polygon
            class="cls-176"
            points="78.44 190.38 78.36 190.43 79.36 191.02 79.44 190.97 78.44 190.38"
          />
          <polygon
            class="cls-142"
            points="79.32 190.99 78.36 190.43 78.36 185.47 79.53 186.15 79.32 190.99"
          />
          <polygon
            class="cls-131"
            points="79.49 191.33 79.32 191.23 79.32 186.08 79.49 186.17 79.49 191.33"
          />
          <polygon
            class="cls-132"
            points="79.65 191.23 79.49 191.33 79.49 186.17 79.65 186.08 79.65 191.23"
          />
          <polygon
            class="cls-131"
            points="79.65 186.08 79.49 186.17 79.32 186.08 79.49 185.98 79.65 186.08"
          />
          <polygon
            class="cls-175"
            points="81.45 192.12 79.78 191.16 79.78 186.2 81.45 187.16 81.45 192.12"
          />
          <polygon
            class="cls-131"
            points="79.65 191.42 79.49 191.33 79.49 186.17 79.65 186.27 79.65 191.42"
          />
          <polygon
            class="cls-132"
            points="79.82 191.33 79.65 191.42 79.65 186.27 79.82 186.17 79.82 191.33"
          />
          <polygon
            class="cls-131"
            points="79.82 186.17 79.65 186.27 79.49 186.17 79.65 186.08 79.82 186.17"
          />
          <polygon
            class="cls-176"
            points="79.78 191.35 79.7 191.4 79.7 186.25 79.78 186.2 79.78 191.35"
          />
          <polygon
            class="cls-131"
            points="79.65 191.23 79.65 191.42 81.33 192.39 81.33 192.19 79.65 191.23"
          />
          <polygon
            class="cls-131"
            points="79.82 191.13 79.65 191.23 81.33 192.19 81.49 192.1 79.82 191.13"
          />
          <polygon
            class="cls-132"
            points="81.49 192.1 81.33 192.19 81.33 192.39 81.49 192.29 81.49 192.1"
          />
          <polygon
            class="cls-176"
            points="79.78 191.15 79.7 191.2 81.2 192.08 81.28 192.03 79.78 191.15"
          />
          <polygon
            class="cls-142"
            points="81.16 192.05 79.7 191.2 79.7 186.25 81.37 187.21 81.16 192.05"
          />
          <polygon
            class="cls-131"
            points="81.33 192.39 81.16 192.29 81.16 187.14 81.33 187.23 81.33 192.39"
          />
          <polygon
            class="cls-132"
            points="81.49 192.29 81.33 192.39 81.33 187.23 81.49 187.14 81.49 192.29"
          />
          <polygon
            class="cls-131"
            points="81.49 187.14 81.33 187.23 81.16 187.14 81.33 187.04 81.49 187.14"
          />
          <polygon
            class="cls-177"
            points="79.39 189.42 79.34 189.4 79.32 189.41 79.37 189.44 79.39 189.42"
          />
          <polygon
            class="cls-178"
            points="79.34 189 79.3 188.98 79.3 189.45 79.34 189.47 79.34 189"
          />
          <polygon
            class="cls-177"
            points="79.37 188.99 79.34 189 79.3 188.98 79.32 188.96 79.37 188.99"
          />
          <polygon
            class="cls-179"
            points="79.34 189 79.34 189.47 79.37 189.46 79.39 189.45 79.39 189.42 79.37 189.44 79.37 188.99 79.34 189"
          />
          <polygon
            class="cls-131"
            points="80.59 187.68 53.84 172.24 53.84 173.01 80.59 188.46 80.59 187.68"
          />
          <polygon
            class="cls-3"
            points="56.85 175.14 59.18 176.49 59.18 176.1 55.5 173.98 55.5 177.06 54.17 177.84 56.85 177.84 56.85 175.14"
          />
          <polygon
            class="cls-3"
            points="77.92 187.3 80.25 188.65 80.25 188.26 76.57 186.14 76.57 189.23 75.24 190 77.92 190 77.92 187.3"
          />
          <path
            class="cls-144"
            d="M59.85,179.89h0l-5.5-3.18h-.11a.05.05,0,0,0,0,0l5.5,3.17h.05a.13.13,0,0,0,.06-.1S59.86,179.89,59.85,179.89Z"
          />
          <path
            class="cls-144"
            d="M59.85,179.44h0l-5.5-3.18h-.11a.05.05,0,0,0,0,0l5.5,3.18h.05a.15.15,0,0,0,.06-.11A.05.05,0,0,0,59.85,179.44Z"
          />
          <path
            class="cls-144"
            d="M59.85,179h0l-5.5-3.18h-.11v0s0,0,0,0l5.5,3.18a0,0,0,0,0,.05,0,.15.15,0,0,0,.06-.11S59.86,179,59.85,179Z"
          />
          <path
            class="cls-144"
            d="M80.91,192.05h0l-5.5-3.18H75.3v0a.08.08,0,0,0,0,0l5.5,3.17h.05a.15.15,0,0,0,.06-.11S80.92,192.05,80.91,192.05Z"
          />
          <path
            class="cls-144"
            d="M80.91,191.6h0l-5.5-3.18H75.3a.05.05,0,0,0,0,0l5.5,3.18h.05a.15.15,0,0,0,.06-.11A.05.05,0,0,0,80.91,191.6Z"
          />
          <path
            class="cls-144"
            d="M80.91,191.15h0L75.41,188H75.3v0s0,0,0,0l5.5,3.18h.05a.15.15,0,0,0,.06-.11A.05.05,0,0,0,80.91,191.15Z"
          />
          <polygon
            class="cls-180"
            points="104.66 171.05 95.3 176.45 93.96 175.68 88.61 178.77 89.95 179.54 80.59 184.95 53.84 169.5 63.2 164.1 64.54 164.87 69.89 161.78 68.55 161.01 77.91 155.61 104.66 171.05"
          />
          <path
            class="cls-141"
            d="M96.4,172.56,93.73,171l-2.51-1.44h0l-1.34-.78h0l-2.68-1.55-2.67-1.54L82,164.25h0l-1.33-.78h0L78,161.93l-2.67-1.54-2.51-1.45-.17.1v0l0,0-.17.09v0l0,0-.16.1v0l0,0-.17.09v0l0,0-.17.1h0v0l0,0-.16.09v0l0,0-.17.1v0l0,0-.17.09v0l0,0-.16.1v0l0,0-.17.09v0l0,0-.17.1v0h0l0,0-.16.1v0l0,0-.17.1h0v0l0,0-.17.1v0l0,0-.17.1h0v0l0,0-.17.1v0h0l-.16.09v0l0,0-.17.1v.09l1.18.68,2.67,1.54,2.68,1.55h0l2.67,1.54h0l1.18.68,2.67,1.54L85,170.16h0l2.67,1.55h0l1.18.67,2.67,1.55,2.68,1.54h0l1.49.87.17-.1v-.1l-.08,0,.12-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.19.11.16-.1v-.1l-.07,0,.11-.07v0l.19.11.17-.1v-.08h0l-.08-.05.12-.07v0l.19.11.17-.1v-.08h0l-.08,0,.12-.07v0l.19.11.16-.1V175l-.07-.05.12-.07v0l.18.11.17-.1v-.09l-.07-.05.11-.06v0l.19.11.17-.1v-.09l-.08,0,.12-.06v0l.19.11.17-.09v-.1l-.08-.05.12-.06v-.1Zm-.27,3.24.11-.06h0l-.11.06Zm.4-.23.11-.06h0l-.11.06Z"
          />
          <polygon
            class="cls-137"
            points="68.88 161.2 78.25 155.8 78.25 153.87 68.88 159.27 68.88 161.2"
          />
          <polygon
            class="cls-131"
            points="68.55 161.01 68.88 161.2 68.88 159.27 68.55 159.08 68.55 161.01"
          />
          <polygon
            class="cls-131"
            points="68.55 159.08 68.88 159.27 78.25 153.87 77.91 153.68 68.55 159.08"
          />
          <polygon
            class="cls-131"
            points="70.22 161.98 68.88 161.2 68.88 159.27 70.22 160.05 70.22 161.98"
          />
          <polygon
            class="cls-131"
            points="70.56 161.78 70.22 161.98 70.22 160.05 70.56 159.85 70.56 161.78"
          />
          <polygon
            class="cls-131"
            points="70.56 159.85 70.22 160.05 68.88 159.27 69.22 159.08 70.56 159.85"
          />
          <polygon
            class="cls-141"
            points="99.19 167.75 99.03 167.84 99.03 167.86 99.03 167.88 97.66 167.09 97.49 167.19 97.49 167.21 97.49 167.28 100.16 168.83 100.33 168.73 100.33 168.69 101.7 169.49 101.87 169.39 101.87 169.31 101.87 169.29 99.19 167.75"
          />
          <path
            class="cls-141"
            d="M90.15,173.07l-2.5-1.44h0l-1.34-.78h0l-2.67-1.54L81,167.76l-2.5-1.44h0l-1.33-.78h0L74.43,164l-2.68-1.55L69.25,161l-.17.09v0l0,0-.16.1v.09l.91.53-.11.07h0v0l0,0-.16.1v0h0l-.17.09v0l0,0-.17.1v0h0l-.17.09v0l0,0-.17.1v0h0l-.16.09v0l0,0-.17.1h0v0h0l-.17.09v0l0,0-.16.1h0v0h0l-.17.09v0l0,0-.17.1h0v0l0,0-.16.1v0l0,0-.17.09v0l0,0-.17.1h0v0l0,0-.16.09v0l0,0-.17.1v0l0,0-.17.09v0l0,0-.17.1v0l0,0-.17.09v0l0,0-.16.1v0l0,0-.17.09v0l0,0-.17.1v0h0l0,0-.16.1v0l0,0-.17.1h0v0l0,0-.17.1v0h0l-1-.57-.17.09v0l0,0-.17.1h0v0h0l-.17.09v0l0,0-.17.09v0l0,0-.16.1v0l0,0-.17.09v0l0,0-.17.1v0l0,0-.16.09v0l0,0-.17.1v0l0,0-.17.09v0l0,0-.16.1v0l0,0-.17.09v0l0,0-.17.1v0l0,0-.16.1v0l0,0-.17.1h0v0l0,0-.17.1v0l0,0-.17.1h0v0l0,0-.17.1v0h0l-.16.09v0l0,0-.17.1v0h0l-.17.09v0l0,0-.16.1v0h0l-.17.09v0l0,0L59,167h0v0h0l-.16.09v0l0,0-.17.1h0v0l0,0-.17.1v0l0,0-.16.09v0l0,0-.17.1v0l0,0-.17.09v0l0,0-.17.1v0l0,0-.17.09v0l0,0-.16.1v0l0,0-.17.09v0l0,0-.17.1v0l0,0-.16.09v0l0,0-.17.1v0l0,0-.17.1v0l0,0-.16.1v0h0l0,0-.17.1v0h0l-.17.1h0v0l0,0-.16.1v0h0l-.17.1h0v0l0,0-.17.1v0h0l-.17.09v0l0,0-.17.1v0h0l-.17.09v0l0,0-.17.1v.09l1.18.68L58,172l2.68,1.55h0l2.67,1.55,1.18.68,2.67,1.54,2.68,1.55h0l2.67,1.55h0l1.18.68,2.67,1.54,2.68,1.55h0l1.49.86.17-.09v-.1l-.08,0,.12-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.19.11.16-.1v-.1l-.07,0,.12-.07v0l.18.11.17-.1v-.1l-.08,0,.12-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.19.11.17-.1v-.08h0l-.08-.05.12-.07v0l.18.11.17-.1v-.08h0l-.17.09h0l.17-.09-.07,0,.11-.07v0l.19.11.17-.1v-.09l-.08-.05.12-.06v0l.19.11.17-.1V183l-.08-.05.12-.06v0l.19.11.16-.09v-.1l-.07,0,.12-.06v0l.18.11.17-.09v-.1l-.08,0,.12-.07v0l.19.11.17-.09v-.1l-.08,0,.12-.07v0l.19.11.16-.09v-.1l-.07,0,.12-.07v0l.18.11.17-.09v-.1l-.07,0,.11-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.19.11.16-.1v-.1l-.07,0,.11-.07v0l.19.11.17-.1V181h0l-.08-.05.12-.07v0l.19.11.17-.1v-.08h0l-.08,0,.12-.07v0l.19.11.16-.1v-.09l-.07-.05.12-.07v0l.18.11.17-.1v-.09l-.07-.05.11-.06v0l.19.11.17-.1V180l-.17.1h0l.17-.09L89,180l.12-.06v0l.19.11.17-.09v-.1l-.08,0,.12-.07v0l.19.11.16-.09v-.1l-.07,0,.11-.07v-.1l-.88-.51.11-.06v-.1l-.07,0,.11-.07v0l.19.11.17-.09v-.1l-.08,0,.12-.07v0l.19.11.17-.09v-.1l-.08,0,.12-.07v0l.19.12.16-.1V178l-.07,0,.11-.07v0l.19.12.17-.1v-.1l-.07,0,.11-.07v0l.19.12.17-.1v-.1l-.08,0,.12-.07v0l.19.12.16-.1v-.1l-.07,0,.12-.07v0l.18.11.17-.1v-.08h0l-.07,0L92,177v0l.19.11.17-.1v-.08h0l-.08-.05.12-.07v0l.19.11.17-.1v-.09l-.08,0,.12-.07v0l.19.11.16-.1v-.09l-.07,0,.11-.06v0l.19.11.17-.09v-.1l-.08-.05.12-.06v0l.19.11.17-.09V176l-.08,0,.12-.06v-.1h0l.12-.07v0l1.27.73.16-.1v-.1l-2.67-1.54Zm-25.46,1.19h0l-.11.06Zm12.06,3.66ZM73,180.09h0l.11-.07h0Zm6-3.44h0l.11-.06h0ZM81.83,175h0l-.11.06h0Zm-13.08-3.06Zm20.42,4.91,1.46.84h0l-1.46-.84Zm.27,1.53.12-.07h0l-.12.07Zm2.78-1.61.12-.06h0l-.12.06Z"
          />
          <polygon
            class="cls-132"
            points="93.96 221.66 88.61 224.75 88.61 178.77 93.96 175.68 93.96 221.66"
          />
          <polygon
            class="cls-3"
            points="96.55 171.12 89.52 167.07 89.52 171.32 76.81 178.66 83.5 178.66 96.55 171.12"
          />
          <polygon
            class="cls-3"
            points="67.89 165.26 68.22 165.07 66.54 164.1 66.54 164.1 65.86 164.1 64.87 164.68 63.2 164.49 54.17 169.7 57.51 169.7 57.51 169.7 65.2 165.26 67.89 165.26"
          />
          <path
            class="cls-144"
            d="M64.15,164.51h0L70,161.13h.11s0,0,0,0l-5.85,3.38h0a.14.14,0,0,1-.07-.11A.05.05,0,0,1,64.15,164.51Z"
          />
          <path
            class="cls-144"
            d="M64.15,164.07h0L70,160.69h.11a.05.05,0,0,1,0,0l-5.85,3.37h0a.14.14,0,0,1-.07-.11S64.14,164.07,64.15,164.07Z"
          />
          <path
            class="cls-144"
            d="M64.15,163.62h0L70,160.24h.11s0,0,0,0l-5.85,3.38a0,0,0,0,1,0,0,.12.12,0,0,1-.07-.1A.05.05,0,0,1,64.15,163.62Z"
          />
          <polygon
            class="cls-137"
            points="54.17 169.7 63.53 164.29 63.53 162.36 54.17 167.77 54.17 169.7"
          />
          <polygon
            class="cls-131"
            points="53.84 169.5 54.17 169.7 54.17 167.77 53.84 167.57 53.84 169.5"
          />
          <polygon
            class="cls-131"
            points="53.84 167.57 54.17 167.77 63.53 162.36 63.2 162.17 53.84 167.57"
          />
          <polygon
            class="cls-131"
            points="64.54 165.26 63.2 164.49 63.2 162.56 64.54 163.33 64.54 165.26"
          />
          <polygon
            class="cls-137"
            points="64.87 165.06 64.54 165.26 64.54 163.33 64.87 163.13 64.87 165.06"
          />
          <polygon
            class="cls-131"
            points="64.87 163.13 64.54 163.33 63.2 162.56 63.53 162.36 64.87 163.13"
          />
          <polygon
            class="cls-3"
            points="65.59 169.7 65.6 169.7 65.6 169.7 65.6 169.7 65.7 169.7 81.75 178.97 78.08 181.09 77.97 181.09 77.97 181.09 77.97 181.09 76.64 181.09 60.58 171.82 64.26 169.7 65.59 169.7"
          />
          <polygon
            class="cls-137"
            points="76.57 181.09 80.25 178.96 80.25 178.19 76.57 180.31 76.57 181.09"
          />
          <polygon
            class="cls-131"
            points="60.52 171.82 76.57 181.09 76.57 180.31 60.52 171.05 60.52 171.82"
          />
          <polygon
            class="cls-181"
            points="60.52 171.05 76.57 180.31 80.25 178.19 64.2 168.93 60.52 171.05"
          />
          <polygon
            class="cls-144"
            points="60.52 171.05 76.57 180.31 76.57 180.25 60.52 170.99 60.52 171.05"
          />
          <polygon
            class="cls-144"
            points="76.57 180.25 76.57 180.31 80.25 178.19 80.25 178.13 76.57 180.25"
          />
          <polygon
            class="cls-141"
            points="64.2 168.86 80.25 178.13 76.57 180.25 60.52 170.99 64.2 168.86"
          />
          <polygon
            class="cls-131"
            points="78.24 178.9 64.2 170.79 62.53 171.76 76.58 179.87 78.24 178.9"
          />
          <polygon
            class="cls-182"
            points="61.19 170.99 62.53 171.76 64.2 170.79 64.2 170.79 64.2 169.25 61.19 170.99"
          />
          <polygon
            class="cls-183"
            points="79.58 178.13 64.2 169.25 64.2 170.79 78.25 178.9 79.58 178.13"
          />
          <polygon
            class="cls-3"
            points="62.53 171.76 63.87 172.53 65.54 171.57 65.54 171.57 64.2 169.25 64.2 170.79 62.53 171.76"
          />
          <polygon
            class="cls-142"
            points="64.2 169.39 79.47 178.2 76.58 179.87 61.31 171.06 64.2 169.39"
          />
          <polygon
            class="cls-137"
            points="62.44 169.88 62.47 169.87 62.47 169.77 62.45 169.79 62.44 169.88"
          />
          <path
            class="cls-184"
            d="M62.46,169.76l0,0a0,0,0,0,0,0,0l0,0S62.45,169.76,62.46,169.76Z"
          />
          <path class="cls-185" d="M62.49,169.73h-.05l0,0h0Z" />
          <polygon
            class="cls-137"
            points="62.87 170.65 62.89 170.63 62.89 170.02 62.87 170.03 62.87 170.65"
          />
          <polygon
            class="cls-186"
            points="62.8 169.91 62.82 169.9 62.52 169.72 62.49 169.73 62.8 169.91"
          />
          <polygon
            class="cls-187"
            points="62.87 170.03 62.87 170.02 62.87 170.02 62.87 170.02 62.87 170.02 62.87 170.02 62.87 170.01 62.87 170.01 62.87 170.01 62.87 170.01 62.86 170 62.86 170 62.86 170 62.86 170 62.86 170 62.86 169.99 62.86 169.99 62.86 169.98 62.86 169.98 62.86 169.98 62.85 169.97 62.85 169.97 62.85 169.97 62.85 169.97 62.85 169.96 62.85 169.96 62.84 169.96 62.84 169.95 62.84 169.95 62.84 169.95 62.84 169.94 62.83 169.94 62.83 169.94 62.83 169.94 62.83 169.94 62.83 169.94 62.82 169.93 62.82 169.93 62.82 169.93 62.82 169.93 62.82 169.93 62.81 169.92 62.81 169.92 62.81 169.92 62.81 169.92 62.81 169.92 62.81 169.92 62.8 169.91 62.8 169.91 62.8 169.91 62.8 169.91 62.8 169.91 62.82 169.9 62.82 169.9 62.83 169.9 62.83 169.9 62.83 169.9 62.83 169.9 62.83 169.9 62.83 169.91 62.84 169.91 62.84 169.91 62.84 169.91 62.84 169.91 62.84 169.91 62.84 169.91 62.84 169.91 62.85 169.92 62.85 169.92 62.85 169.92 62.85 169.92 62.85 169.92 62.85 169.93 62.86 169.93 62.86 169.93 62.86 169.93 62.86 169.93 62.86 169.94 62.86 169.94 62.86 169.94 62.87 169.94 62.87 169.94 62.87 169.94 62.87 169.95 62.87 169.95 62.87 169.95 62.87 169.95 62.87 169.95 62.87 169.95 62.88 169.96 62.88 169.96 62.88 169.96 62.88 169.96 62.88 169.96 62.88 169.96 62.88 169.97 62.88 169.97 62.88 169.97 62.88 169.97 62.88 169.97 62.88 169.97 62.88 169.98 62.88 169.98 62.89 169.98 62.89 169.98 62.89 169.99 62.89 169.99 62.89 169.99 62.89 169.99 62.89 169.99 62.89 169.99 62.89 169.99 62.89 170 62.89 170 62.89 170 62.89 170 62.89 170 62.89 170 62.89 170.01 62.89 170.01 62.89 170.01 62.89 170.01 62.89 170.02 62.87 170.03 62.87 170.03 62.87 170.03"
          />
          <path
            class="cls-169"
            d="M62.49,169.73s-.07,0-.07,0v.1h0v-.09a0,0,0,0,1,.05,0l.31.18a.1.1,0,0,1,0,.08v.61l0,0V170a.15.15,0,0,0-.07-.12Z"
          />
          <g class="cls-2">
            <polygon
              class="cls-137"
              points="62.58 170.71 62.87 170.54 62.87 170.52 62.58 170.68 62.58 170.71"
            />
            <polygon
              class="cls-186"
              points="62.58 170.68 62.87 170.52 62.84 170.5 62.56 170.67 62.58 170.68"
            />
          </g>
          <g class="cls-2">
            <polygon
              class="cls-137"
              points="62.58 170.6 62.87 170.43 62.87 170.4 62.58 170.57 62.58 170.6"
            />
            <polygon
              class="cls-186"
              points="62.58 170.57 62.87 170.4 62.84 170.39 62.56 170.56 62.58 170.57"
            />
          </g>
          <g class="cls-2">
            <polygon
              class="cls-137"
              points="62.58 170.48 62.87 170.31 62.87 170.29 62.58 170.45 62.58 170.48"
            />
            <polygon
              class="cls-186"
              points="62.58 170.45 62.87 170.29 62.84 170.27 62.56 170.44 62.58 170.45"
            />
          </g>
          <polygon
            class="cls-137"
            points="62.14 170.06 62.17 170.04 62.17 169.95 62.14 169.96 62.14 170.06"
          />
          <path
            class="cls-188"
            d="M62.16,169.93h0s0,0,0,0h0S62.15,169.94,62.16,169.93Z"
          />
          <path class="cls-189" d="M62.19,169.9h0l0,0h0Z" />
          <polygon
            class="cls-137"
            points="62.56 170.82 62.59 170.81 62.59 170.19 62.57 170.21 62.56 170.82"
          />
          <polygon
            class="cls-186"
            points="62.5 170.08 62.52 170.07 62.21 169.89 62.19 169.91 62.5 170.08"
          />
          <polygon
            class="cls-190"
            points="62.57 170.2 62.57 170.2 62.57 170.2 62.57 170.19 62.57 170.19 62.57 170.19 62.56 170.19 62.56 170.19 62.56 170.18 62.56 170.18 62.56 170.18 62.56 170.18 62.56 170.17 62.56 170.17 62.56 170.17 62.56 170.17 62.56 170.16 62.56 170.16 62.55 170.16 62.55 170.15 62.55 170.15 62.55 170.15 62.55 170.14 62.55 170.14 62.55 170.14 62.55 170.13 62.54 170.13 62.54 170.13 62.54 170.12 62.54 170.12 62.53 170.12 62.53 170.12 62.53 170.12 62.53 170.11 62.53 170.11 62.53 170.11 62.52 170.1 62.52 170.1 62.52 170.1 62.52 170.1 62.52 170.1 62.51 170.1 62.51 170.09 62.51 170.09 62.51 170.09 62.51 170.09 62.51 170.09 62.5 170.09 62.5 170.09 62.5 170.09 62.5 170.09 62.5 170.08 62.52 170.07 62.52 170.07 62.52 170.07 62.53 170.07 62.53 170.07 62.53 170.08 62.53 170.08 62.53 170.08 62.53 170.08 62.54 170.08 62.54 170.08 62.54 170.09 62.54 170.09 62.54 170.09 62.54 170.09 62.55 170.09 62.55 170.09 62.55 170.1 62.55 170.1 62.55 170.1 62.55 170.1 62.55 170.1 62.56 170.1 62.56 170.1 62.56 170.1 62.56 170.11 62.56 170.11 62.56 170.11 62.56 170.12 62.56 170.12 62.57 170.12 62.57 170.12 62.57 170.12 62.57 170.12 62.57 170.13 62.57 170.13 62.57 170.13 62.58 170.13 62.58 170.13 62.58 170.13 62.58 170.13 62.58 170.13 62.58 170.13 62.58 170.14 62.58 170.14 62.58 170.14 62.58 170.15 62.58 170.15 62.58 170.15 62.58 170.15 62.58 170.15 62.58 170.16 62.58 170.16 62.59 170.16 62.59 170.16 62.59 170.16 62.59 170.16 62.59 170.17 62.59 170.17 62.59 170.17 62.59 170.17 62.59 170.17 62.59 170.18 62.59 170.18 62.59 170.18 62.59 170.18 62.59 170.18 62.59 170.18 62.59 170.19 62.59 170.19 62.59 170.19 62.57 170.21 62.57 170.2 62.57 170.2"
          />
          <path
            class="cls-169"
            d="M62.19,169.91s-.07,0-.07,0V170l0,0V170s0,0,0,0l.31.18a.12.12,0,0,1,0,.08v.62h0v-.61a.21.21,0,0,0-.07-.13Z"
          />
          <path
            class="cls-191"
            d="M62.87,170.35h0v0l-.25.15v0l0,0,0,0v.3h.05v-.1l.25-.15v.07l0,0,0,0v-.29Zm0,.16-.25.14v-.06l.25-.15Z"
          />
          <polygon
            class="cls-137"
            points="78.22 178.92 78.24 178.9 78.24 178.81 78.22 178.82 78.22 178.92"
          />
          <path
            class="cls-192"
            d="M78.23,178.79h0s0,0,0,0h0S78.23,178.8,78.23,178.79Z"
          />
          <path class="cls-193" d="M78.26,178.77h0l0,0Z" />
          <polygon
            class="cls-137"
            points="78.64 179.68 78.67 179.67 78.67 179.05 78.64 179.07 78.64 179.68"
          />
          <polygon
            class="cls-186"
            points="78.57 178.94 78.6 178.93 78.29 178.75 78.27 178.77 78.57 178.94"
          />
          <polygon
            class="cls-194"
            points="78.64 179.06 78.64 179.06 78.64 179.06 78.64 179.06 78.64 179.05 78.64 179.05 78.64 179.05 78.64 179.05 78.64 179.04 78.64 179.04 78.64 179.04 78.64 179.04 78.64 179.04 78.64 179.03 78.64 179.03 78.64 179.03 78.63 179.02 78.63 179.02 78.63 179.02 78.63 179.01 78.63 179.01 78.63 179.01 78.63 179 78.63 179 78.62 179 78.62 179 78.62 178.99 78.62 178.99 78.61 178.99 78.61 178.98 78.61 178.98 78.61 178.98 78.61 178.98 78.61 178.97 78.61 178.97 78.6 178.97 78.6 178.97 78.6 178.97 78.6 178.96 78.59 178.96 78.59 178.96 78.59 178.96 78.59 178.96 78.59 178.96 78.59 178.95 78.58 178.95 78.58 178.95 78.58 178.95 78.58 178.95 78.58 178.95 78.58 178.95 78.57 178.94 78.6 178.93 78.6 178.93 78.6 178.93 78.6 178.94 78.6 178.94 78.61 178.94 78.61 178.94 78.61 178.94 78.61 178.94 78.61 178.94 78.61 178.94 78.62 178.95 78.62 178.95 78.62 178.95 78.62 178.95 78.62 178.95 78.62 178.95 78.63 178.96 78.63 178.96 78.63 178.96 78.63 178.96 78.63 178.96 78.63 178.96 78.63 178.96 78.63 178.97 78.64 178.97 78.64 178.97 78.64 178.97 78.64 178.98 78.64 178.98 78.64 178.98 78.64 178.98 78.65 178.98 78.65 178.98 78.65 178.99 78.65 178.99 78.65 178.99 78.65 179 78.65 179 78.65 179 78.65 179 78.65 179 78.65 179 78.66 179 78.66 179 78.66 179 78.66 179.01 78.66 179.01 78.66 179.01 78.66 179.01 78.66 179.01 78.66 179.02 78.66 179.02 78.66 179.02 78.66 179.02 78.66 179.02 78.66 179.03 78.66 179.03 78.66 179.03 78.66 179.03 78.67 179.03 78.67 179.04 78.67 179.04 78.67 179.04 78.67 179.04 78.67 179.04 78.67 179.04 78.67 179.04 78.67 179.05 78.67 179.05 78.67 179.05 78.64 179.07 78.64 179.06 78.64 179.06"
          />
          <path
            class="cls-169"
            d="M78.27,178.77s-.07,0-.07,0v.09l0,0v-.1s0,0,0,0l.3.17a.1.1,0,0,1,.05.08v.62h0v-.61a.17.17,0,0,0-.07-.13Z"
          />
          <g class="cls-2">
            <polygon
              class="cls-137"
              points="78.36 179.75 78.64 179.58 78.64 179.55 78.36 179.72 78.36 179.75"
            />
            <polygon
              class="cls-186"
              points="78.36 179.72 78.64 179.55 78.62 179.54 78.33 179.71 78.36 179.72"
            />
          </g>
          <g class="cls-2">
            <polygon
              class="cls-137"
              points="78.36 179.63 78.64 179.47 78.64 179.44 78.36 179.6 78.36 179.63"
            />
            <polygon
              class="cls-186"
              points="78.36 179.6 78.64 179.44 78.62 179.43 78.33 179.59 78.36 179.6"
            />
          </g>
          <g class="cls-2">
            <polygon
              class="cls-137"
              points="78.36 179.52 78.64 179.35 78.64 179.32 78.36 179.49 78.36 179.52"
            />
            <polygon
              class="cls-186"
              points="78.36 179.49 78.64 179.32 78.62 179.31 78.33 179.47 78.36 179.49"
            />
          </g>
          <polygon
            class="cls-137"
            points="77.92 179.09 77.94 179.08 77.94 178.98 77.92 179 77.92 179.09"
          />
          <path
            class="cls-195"
            d="M77.93,179l0,0,0,0,0,0S77.92,179,77.93,179Z"
          />
          <path class="cls-196" d="M78,178.94h0l0,0h0Z" />
          <polygon
            class="cls-137"
            points="78.34 179.86 78.36 179.84 78.36 179.23 78.34 179.24 78.34 179.86"
          />
          <polygon
            class="cls-186"
            points="78.27 179.12 78.3 179.1 77.99 178.93 77.97 178.94 78.27 179.12"
          />
          <polygon
            class="cls-197"
            points="78.34 179.24 78.34 179.23 78.34 179.23 78.34 179.23 78.34 179.23 78.34 179.23 78.34 179.22 78.34 179.22 78.34 179.22 78.34 179.22 78.34 179.21 78.34 179.21 78.34 179.21 78.34 179.21 78.34 179.21 78.33 179.2 78.33 179.2 78.33 179.19 78.33 179.19 78.33 179.19 78.33 179.18 78.33 179.18 78.33 179.18 78.32 179.18 78.32 179.17 78.32 179.17 78.32 179.16 78.32 179.16 78.31 179.16 78.31 179.16 78.31 179.15 78.31 179.15 78.31 179.15 78.31 179.15 78.3 179.15 78.3 179.15 78.3 179.14 78.3 179.14 78.3 179.14 78.29 179.13 78.29 179.13 78.29 179.13 78.29 179.13 78.29 179.13 78.28 179.13 78.28 179.13 78.28 179.13 78.28 179.12 78.28 179.12 78.28 179.12 78.28 179.12 78.27 179.12 78.3 179.1 78.3 179.11 78.3 179.11 78.3 179.11 78.3 179.11 78.31 179.11 78.31 179.11 78.31 179.11 78.31 179.12 78.31 179.12 78.31 179.12 78.32 179.12 78.32 179.12 78.32 179.12 78.32 179.12 78.32 179.13 78.32 179.13 78.33 179.13 78.33 179.13 78.33 179.13 78.33 179.13 78.33 179.14 78.33 179.14 78.33 179.14 78.33 179.14 78.34 179.14 78.34 179.15 78.34 179.15 78.34 179.15 78.34 179.15 78.34 179.15 78.34 179.16 78.34 179.16 78.34 179.16 78.35 179.16 78.35 179.16 78.35 179.16 78.35 179.17 78.35 179.17 78.35 179.17 78.35 179.17 78.35 179.17 78.35 179.17 78.35 179.17 78.35 179.18 78.35 179.18 78.36 179.18 78.36 179.18 78.36 179.18 78.36 179.19 78.36 179.19 78.36 179.19 78.36 179.19 78.36 179.19 78.36 179.2 78.36 179.2 78.36 179.2 78.36 179.2 78.36 179.2 78.36 179.21 78.36 179.21 78.36 179.21 78.36 179.21 78.36 179.21 78.36 179.21 78.36 179.22 78.36 179.22 78.36 179.22 78.36 179.22 78.36 179.22 78.36 179.23 78.34 179.24 78.34 179.24 78.34 179.24"
          />
          <path
            class="cls-169"
            d="M78,178.94s-.07,0-.07,0v.1h0V179s0-.05,0,0l.3.18a.09.09,0,0,1,0,.08v.61l0,0v-.62a.15.15,0,0,0-.07-.12Z"
          />
          <path
            class="cls-3"
            d="M82.17,180h-.06v0h0l-.16.38-1,.22H81l.55.32h0s0,0,0,0h.1l.54-.12.23.14h0l0,0h.11l.11-.25.91-.2h.11l.73-.16h0l-.1,0h0l-.1-.06h0l-.1-.06-.12-.07h0l-.12-.06H83.7l-.4.08-.27.05h-.09l-.71-.16,0,0h0l0,0Zm.48.78,0,0h.61l.15,0Zm-.28.16h0l.06,0-.07.16h0Zm-.47-.43v0l-.06.05a.08.08,0,0,0,0,.12l0,0h.06l.2.12h0l-.42.09-.2-.12-.35-.19Zm2.32-.07-.66.14h0l-.12,0h.25s0,0,0,0h.54Zm-1.63-.15-.28-.16.5.11Zm-.4-.15h0l.32.18-.31.08-.13,0,.08-.19,0,0h0v0h0Z"
          />
          <path
            class="cls-198"
            d="M82,179.93s0,0,0,0h0l-.31-.47s0,0,0-.05h0Z"
          />
          <polygon
            class="cls-199"
            points="81.96 179.99 81.94 179.97 81.62 179.5 81.65 179.52 81.96 179.99"
          />
          <path class="cls-200" d="M81.66,179.44h0l0,0h0l0,0Z" />
          <polygon
            class="cls-201"
            points="81.69 179.58 81.66 179.54 81.7 179.48 81.73 179.52 81.69 179.58"
          />
          <path
            class="cls-198"
            d="M82,179a0,0,0,0,1,0,0v0L81,180.67a0,0,0,0,1,0,0h0a0,0,0,0,1,0,0l1-1.6,0,0Z"
          />
          <polygon
            class="cls-202"
            points="80.92 180.65 80.89 180.63 81.95 179.03 81.97 179.05 80.92 180.65"
          />
          <path class="cls-203" d="M80.92,180.69h0l0,0h0Z" />
          <path class="cls-204" d="M82,179h0l0,0h0Z" />
          <path class="cls-205" d="M81.7,179.52s0,0,0,0h0v0s0,0,0,0Z" />
          <polygon
            class="cls-206"
            points="82.03 179.97 82.03 179.96 82.03 179.96 82.03 179.96 82.03 179.96 82 179.94 82 179.94 82 179.94 82 179.95 82 179.95 82 179.95 82 179.95 82 179.95 82 179.96 82 179.96 82 179.96 82 179.96 81.99 179.97 81.99 179.97 81.99 179.97 81.99 179.97 81.99 179.97 81.99 179.97 81.98 179.97 81.98 179.97 81.98 179.98 81.98 179.98 81.98 179.98 81.98 179.98 81.97 179.98 81.97 179.98 81.97 179.98 81.97 179.98 81.97 179.98 81.99 179.99 81.99 179.99 82 179.99 82 179.99 82 180 82 180 82 180 82 180 82 180 82 180 82 180 82 180 82 180 82 180 82.01 180 82.01 180 82.01 179.99 82.01 179.99 82.01 179.99 82.01 179.99 82.01 179.99 82.02 179.99 82.02 179.99 82.02 179.99 82.02 179.99 82.02 179.99 82.02 179.99 82.02 179.99 82.02 179.98 82.02 179.98 82.02 179.98 82.02 179.98 82.02 179.98 82.02 179.98 82.02 179.98 82.02 179.98 82.02 179.98 82.02 179.97 82.03 179.97 82.03 179.97 82.03 179.97 82.03 179.97 82.03 179.97 82.03 179.97 82.03 179.97 82.03 179.97 82.03 179.97 82.03 179.97"
          />
          <path class="cls-207" d="M81.93,180h-.06l0,0h0Z" />
          <path class="cls-208" d="M81.83,180h0l0,0h0Z" />
          <path
            class="cls-198"
            d="M82.14,179.94s0,0,0,0l0,0h0l-1.28.18s0,0,0,0l0,0h0l.93-.13v0h.08l0,0h0s0,0,0,0h0l0,0h0s0,0,0,0h0Z"
          />
          <path class="cls-205" d="M81.31,180.08h0s0,0,0,0h0Z" />
          <polygon
            class="cls-209"
            points="82.15 179.94 82.15 179.94 82.15 179.94 82.15 179.94 82.15 179.94 82.15 179.94 82.15 179.94 82.12 179.93 82.12 179.93 82.12 179.93 82.12 179.93 82.12 179.93 82.12 179.93 82.12 179.93 82.12 179.93 82.12 179.93 82.12 179.93 82.11 179.93 82.14 179.94 82.14 179.94 82.14 179.94 82.15 179.94"
          />
          <polygon
            class="cls-202"
            points="82.03 179.96 82 179.94 82.11 179.93 82.14 179.94 82.03 179.96"
          />
          <polygon
            class="cls-202"
            points="81.93 179.97 81.9 179.96 81.95 179.95 81.98 179.97 81.93 179.97"
          />
          <polygon
            class="cls-202"
            points="81.83 179.99 81.81 179.97 81.85 179.96 81.88 179.98 81.83 179.99"
          />
          <polygon
            class="cls-202"
            points="80.86 180.12 80.84 180.11 81.76 179.98 81.78 179.99 80.86 180.12"
          />
          <path class="cls-210" d="M80.86,180.12Z" />
          <g class="cls-2">
            <polygon
              class="cls-211"
              points="82.58 179.42 81.99 179.07 81.97 179.06 82.56 179.4 82.58 179.42"
            />
            <polygon
              class="cls-202"
              points="82.56 179.4 81.97 179.06 81.99 179.03 82.58 179.38 82.56 179.4"
            />
          </g>
          <polygon
            class="cls-212"
            points="81.55 180.93 81.55 180.93 81.55 180.93 81.55 180.93 81.56 180.93 81.56 180.93 81.56 180.93 81.56 180.93 81.56 180.93 81.56 180.93 81.56 180.93 81.2 180.72 80.98 180.59 80.98 180.59 80.98 180.59 80.98 180.59 80.98 180.59 80.98 180.59 80.98 180.59 80.98 180.59 80.98 180.59 80.98 180.59 80.98 180.59 80.98 180.59 80.97 180.59 80.97 180.59 80.97 180.59 80.97 180.59 80.97 180.59 80.97 180.59 80.97 180.6 80.97 180.6 80.97 180.6 80.97 180.6 80.96 180.6 80.96 180.6 80.96 180.6 80.96 180.6 81.54 180.94 81.55 180.94 81.55 180.94 81.55 180.93"
          />
          <polygon
            class="cls-202"
            points="81.52 180.98 80.94 180.64 80.96 180.6 81.54 180.94 81.52 180.98"
          />
          <polygon
            class="cls-213"
            points="81.52 181 81.52 181 81.52 181 81.52 181 81.51 180.99 81.51 180.99 81.52 180.99 81.52 180.99 81.52 180.99 81.52 180.98 81.52 180.98 81.52 180.98 81.52 180.98 81.52 180.98 80.94 180.64 80.94 180.64 80.94 180.64 80.94 180.64 80.94 180.64 80.94 180.64 80.94 180.64 80.94 180.64 80.94 180.64 80.94 180.65 80.93 180.65 80.93 180.65 80.93 180.65 80.93 180.65 80.93 180.65 80.93 180.65 80.93 180.65 80.93 180.65 80.93 180.65 80.93 180.66 80.93 180.66 80.93 180.66 80.93 180.66 80.93 180.66 80.94 180.66 80.94 180.66 81.52 181 81.52 181 81.52 181"
          />
          <g class="cls-2">
            <path
              id="SVGID-3"
              data-name="SVGID"
              class="cls-1"
              d="M82.56,179.37l-.55-.32h0l.55.32Z"
            />
            <g class="cls-214">
              <g class="cls-2">
                <path class="cls-1" d="M82.56,179.37l-.55-.32h0l.55.32Z" />
              </g>
            </g>
          </g>
          <polygon
            class="cls-215"
            points="82.53 179.39 81.98 179.06 82 179.03 82.55 179.36 82.53 179.39"
          />
          <path
            class="cls-216"
            d="M82.52,179.46h0l-.55-.33h0v0h-.09v0h0v0h0l0,0h0l0,0h0l0,0h0l0,0h-.12v0h-.13v0h-.57l.55.32h.59v0h0v0h0l0,0h0l0,0h.15v0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h.12Z"
          />
          <polygon
            class="cls-205"
            points="81.4 180.46 80.85 180.14 80.87 180.13 81.43 180.46 81.4 180.46"
          />
          <polygon
            class="cls-217"
            points="81.4 180.5 80.84 180.17 80.85 180.14 81.4 180.46 81.4 180.5"
          />
          <path
            class="cls-218"
            d="M82.57,179.37h0l0,0a1.07,1.07,0,0,1-.14.42,2.17,2.17,0,0,1-.34.48,1,1,0,0,1-.21.17l-.11,0a.29.29,0,0,1-.3,0h0v0h0a.36.36,0,0,0,.41,0,1,1,0,0,0,.21-.16,2.56,2.56,0,0,0,.34-.48,1.07,1.07,0,0,0,.14-.42l0,0Z"
          />
          <polygon
            class="cls-219"
            points="82.1 179.13 81.98 179.06 82 179.03 82.12 179.1 82.1 179.13"
          />
          <path
            class="cls-219"
            d="M82.09,179.21h0l-.12-.07h0v0h-.09v0h0v0h0l0,0h0l0,0h0l0,0h0l0,0h-.07l0,0h0v0h-.13v0h-.57l.12.07h.6l0,0h.09v0h0l0,0h.06l0,0h0l0,0h0l0,0h0l0,0h0v0h.1v0h0Z"
          />
          <polygon
            class="cls-219"
            points="80.97 180.21 80.85 180.14 80.87 180.13 80.99 180.2 80.97 180.21"
          />
          <polygon
            class="cls-219"
            points="80.96 180.24 80.84 180.17 80.85 180.14 80.97 180.21 80.96 180.24"
          />
          <polygon
            class="cls-219"
            points="82.53 179.39 82.41 179.32 82.43 179.29 82.55 179.36 82.53 179.39"
          />
          <path
            class="cls-219"
            d="M82.52,179.46h0l-.12-.07h0v0h-.1v0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0v0H82v0h0l0,0h0v0h0v0h-.59l.12.07h.59v0h0v0h0l0,0h0l0,0h0v0h.12v0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h.12Z"
          />
          <polygon
            class="cls-219"
            points="81.4 180.46 81.29 180.39 81.31 180.39 81.43 180.46 81.4 180.46"
          />
          <polygon
            class="cls-219"
            points="81.4 180.5 81.28 180.43 81.29 180.39 81.4 180.46 81.4 180.5"
          />
          <polygon
            class="cls-219"
            points="82.31 179.26 82.19 179.19 82.22 179.16 82.33 179.23 82.31 179.26"
          />
          <path
            class="cls-219"
            d="M82.31,179.34h0l-.12-.07h-.1v0h0v0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0l0,0h-.59l.12.07h.59l0,0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0l0,0h0s0,0,0,0h.14Z"
          />
          <polygon
            class="cls-219"
            points="81.19 180.33 81.07 180.26 81.09 180.26 81.21 180.33 81.19 180.33"
          />
          <polygon
            class="cls-219"
            points="81.18 180.37 81.06 180.3 81.07 180.26 81.19 180.33 81.18 180.37"
          />
          <polygon
            class="cls-220"
            points="82.73 180.28 82.73 180.28 82.73 180.28 82.73 180.28 82.73 180.28 82.73 180.28 82.73 180.28 82.7 180.26 82.7 180.26 82.7 180.26 82.7 180.26 82.7 180.26 82.7 180.26 82.7 180.26 82.7 180.26 82.7 180.26 82.7 180.26 82.7 180.26 82.72 180.28 82.73 180.28 82.73 180.28 82.73 180.28"
          />
          <polygon
            class="cls-202"
            points="82.61 180.3 82.58 180.28 82.7 180.26 82.72 180.28 82.61 180.3"
          />
          <polygon
            class="cls-202"
            points="82.51 180.31 82.48 180.29 82.53 180.29 82.56 180.3 82.51 180.31"
          />
          <polygon
            class="cls-202"
            points="82.41 180.32 82.39 180.31 82.43 180.3 82.46 180.32 82.41 180.32"
          />
          <polygon
            class="cls-221"
            points="82.61 180.3 82.61 180.3 82.61 180.3 82.61 180.3 82.61 180.3 82.61 180.3 82.61 180.3 82.58 180.28 82.58 180.28 82.58 180.28 82.58 180.29 82.58 180.29 82.58 180.29 82.58 180.29 82.58 180.29 82.58 180.3 82.58 180.3 82.58 180.3 82.58 180.3 82.57 180.3 82.57 180.3 82.57 180.31 82.57 180.31 82.57 180.31 82.57 180.31 82.57 180.31 82.56 180.31 82.56 180.31 82.56 180.32 82.56 180.32 82.56 180.32 82.56 180.32 82.55 180.32 82.55 180.32 82.55 180.32 82.55 180.32 82.57 180.33 82.57 180.33 82.58 180.33 82.58 180.33 82.58 180.33 82.58 180.33 82.58 180.33 82.58 180.33 82.58 180.33 82.58 180.33 82.58 180.33 82.58 180.33 82.58 180.33 82.58 180.33 82.59 180.33 82.59 180.33 82.59 180.33 82.59 180.33 82.59 180.33 82.59 180.33 82.59 180.33 82.6 180.33 82.6 180.33 82.6 180.33 82.6 180.32 82.6 180.32 82.6 180.32 82.6 180.32 82.6 180.32 82.6 180.32 82.6 180.32 82.6 180.32 82.6 180.32 82.6 180.32 82.6 180.32 82.6 180.32 82.6 180.31 82.61 180.31 82.61 180.31 82.61 180.31 82.61 180.31 82.61 180.31 82.61 180.31 82.61 180.31 82.61 180.31 82.61 180.3"
          />
          <path class="cls-222" d="M82.51,180.31h0l0,0h0l0,0h0Z" />
          <path class="cls-223" d="M82.42,180.33h-.06l0,0h0Z" />
          <path class="cls-224" d="M81.41,180.51h0l0,0h0Z" />
          <path
            class="cls-198"
            d="M82.72,180.28s0,0,0,0l0,0h0l-1.28.18s0,0,0,0l0,0h0l.92-.13v0h0v0s0,0,0,0h0l0,0h0s0,0,0,0h0l0,0h0Z"
          />
          <polygon
            class="cls-202"
            points="81.45 180.46 81.42 180.44 82.34 180.31 82.37 180.33 81.45 180.46"
          />
          <polygon
            class="cls-201"
            points="81.95 180.45 81.89 180.46 81.93 180.39 82 180.38 81.95 180.45"
          />
          <polygon
            class="cls-199"
            points="82.2 180.11 82.64 180.36 82.64 180.36 82.62 180.34 82.21 180.1 82.2 180.11"
          />
          <path class="cls-225" d="M82.23,180.07l0,0,.41.24h0Z" />
          <polygon
            class="cls-201"
            points="82.7 180.34 82.65 180.35 82.61 180.29 82.66 180.29 82.7 180.34"
          />
          <path class="cls-226" d="M82.59,179.39h0l0,0h0Z" />
          <path
            class="cls-198"
            d="M82.62,179.38s0,0,0,0v0L81.56,181s0,0,0,0h0a0,0,0,0,1,0-.05l1-1.6h0Z"
          />
          <polygon
            class="cls-202"
            points="81.53 181 81.5 180.99 82.56 179.38 82.58 179.4 81.53 181"
          />
          <path class="cls-227" d="M81.53,181.05h0Z" />
          <path class="cls-205" d="M81.58,181a0,0,0,0,1,0,0v0h0Z" />
          <path class="cls-205" d="M81.56,181h0v0h0Z" />
          <path class="cls-205" d="M81.92,180.46v0h0v0a0,0,0,0,0,0,0Z" />
          <path class="cls-205" d="M82.6,179.4h0s0,0,0,0,0,0,0,0Z" />
          <path
            class="cls-198"
            d="M82.67,180.32s0,0,0,.05h0l-.32-.47s0,0,0,0h0Z"
          />
          <polygon
            class="cls-199"
            points="82.63 180.37 82.31 179.9 82.28 179.89 82.6 180.36 82.6 180.36 82.61 180.37 82.61 180.37 82.62 180.37 82.63 180.38 82.63 180.37"
          />
          <path class="cls-228" d="M82.34,179.85h0l0,0h0Z" />
          <path
            class="cls-205"
            d="M82.65,180.33h0s0,0,0,0S82.64,180.33,82.65,180.33Z"
          />
          <path class="cls-205" d="M82.33,179.86h0v0h0Z" />
          <path
            class="cls-205"
            d="M82.63,180.31h0a0,0,0,0,1,0,0h0A0,0,0,0,1,82.63,180.31Z"
          />
          <polygon
            class="cls-198"
            points="82.58 180.33 82.51 180.31 82.56 180.3 82.58 180.33"
          />
          <polygon
            class="cls-202"
            points="82.56 180.3 82.51 180.31 82.48 180.29 82.53 180.29 82.56 180.3"
          />
          <path
            class="cls-3"
            d="M83.45,180.87l-.06,0h0l-.16.38-1,.22h0s0,0,0,0h.1l.55.31h.07l.54-.12.23.14h0l0,0h.11l.11-.26.91-.2h.11l.73-.16h0l-.1-.06h0l-.1,0h0l-.1-.06-.12-.07h0L85.1,181H85l-.4.09-.27,0-.09,0-.71-.16,0,0h-.08Zm.48.79v0h.62l.15,0Zm-.28.16h.1l-.07.16h0Zm-.47-.43v0l-.06,0c0,.05,0,.09,0,.12l0,.06h0l0,0h0l.2.12h0l-.42.1-.2-.12-.35-.2Zm2.32-.08-.66.15h0l-.12,0h.81Zm-1.63-.15-.28-.16.5.11Zm-.4-.14v0l.32.18-.31.09-.13,0,.08-.2h0v0l0,0h0Z"
          />
          <path
            class="cls-229"
            d="M83.28,180.83a0,0,0,0,1,0,0v0h0l-.32-.47a.06.06,0,0,1,0,0h0s0,0,0,0h0Z"
          />
          <polygon
            class="cls-199"
            points="83.24 180.88 83.21 180.87 82.9 180.4 82.92 180.41 83.24 180.88"
          />
          <path class="cls-230" d="M82.94,180.34h0l0,0Z" />
          <polygon
            class="cls-201"
            points="82.97 180.47 82.94 180.43 82.98 180.38 83 180.42 82.97 180.47"
          />
          <path
            class="cls-229"
            d="M83.29,179.93h0a0,0,0,0,1,0,0l-1,1.6,0,0h0s0,0,0-.05l1-1.6h0S83.28,179.92,83.29,179.93Z"
          />
          <polygon
            class="cls-202"
            points="82.2 181.54 82.17 181.53 83.22 179.93 83.25 179.94 82.2 181.54"
          />
          <path class="cls-231" d="M82.19,181.59Z" />
          <path class="cls-232" d="M83.27,179.92Z" />
          <path class="cls-233" d="M83,180.41h0s0,0,0,0v0Z" />
          <polygon
            class="cls-234"
            points="83.3 180.86 83.3 180.86 83.3 180.86 83.3 180.86 83.3 180.85 83.27 180.84 83.28 180.84 83.28 180.84 83.28 180.84 83.28 180.84 83.28 180.85 83.28 180.85 83.27 180.85 83.27 180.85 83.27 180.85 83.27 180.86 83.27 180.86 83.27 180.86 83.27 180.86 83.27 180.87 83.27 180.87 83.27 180.87 83.26 180.87 83.26 180.87 83.26 180.87 83.26 180.87 83.25 180.87 83.25 180.88 83.25 180.88 83.25 180.88 83.25 180.88 83.25 180.88 83.25 180.87 83.25 180.87 83.26 180.88 83.27 180.89 83.27 180.89 83.27 180.89 83.28 180.89 83.28 180.89 83.28 180.89 83.28 180.89 83.28 180.89 83.28 180.89 83.28 180.89 83.28 180.89 83.28 180.89 83.28 180.89 83.28 180.89 83.28 180.89 83.28 180.89 83.28 180.89 83.29 180.89 83.29 180.89 83.29 180.89 83.29 180.88 83.29 180.88 83.29 180.88 83.29 180.88 83.29 180.88 83.29 180.88 83.3 180.88 83.3 180.88 83.3 180.88 83.3 180.88 83.3 180.88 83.3 180.88 83.3 180.87 83.3 180.87 83.3 180.87 83.3 180.87 83.3 180.87 83.3 180.87 83.3 180.87 83.3 180.87 83.3 180.87 83.3 180.87 83.3 180.87 83.3 180.86 83.3 180.86 83.3 180.86 83.3 180.86"
          />
          <path class="cls-235" d="M83.21,180.87h0l0,0h0Z" />
          <path class="cls-236" d="M83.11,180.89h0l0,0h0Z" />
          <path
            class="cls-229"
            d="M83.42,180.84s0,0,0,0l0,0h0l-1.28.18s0,0,0,0,0,0,0,0h0l.92-.13,0,0h0s0,0,0,0h0l0,0h0a0,0,0,0,1,0,0h0l0,0h0v0Z"
          />
          <path
            class="cls-205"
            d="M82.59,181h0s0,0,0,0h0A0,0,0,0,1,82.59,181Z"
          />
          <polygon
            class="cls-237"
            points="83.42 180.84 83.42 180.84 83.42 180.84 83.43 180.84 83.43 180.84 83.43 180.84 83.43 180.84 83.4 180.82 83.4 180.82 83.4 180.82 83.4 180.82 83.4 180.82 83.39 180.82 83.39 180.82 83.39 180.82 83.39 180.82 83.39 180.82 83.39 180.82 83.42 180.84 83.42 180.84 83.42 180.84 83.42 180.84"
          />
          <polygon
            class="cls-202"
            points="83.3 180.85 83.27 180.84 83.39 180.82 83.42 180.84 83.3 180.85"
          />
          <polygon
            class="cls-202"
            points="83.21 180.87 83.18 180.85 83.23 180.84 83.25 180.86 83.21 180.87"
          />
          <polygon
            class="cls-202"
            points="83.11 180.88 83.08 180.87 83.13 180.86 83.16 180.88 83.11 180.88"
          />
          <polygon
            class="cls-202"
            points="82.14 181.02 82.11 181 83.03 180.87 83.06 180.89 82.14 181.02"
          />
          <path class="cls-238" d="M82.14,181h0l0,0h0l0,0h0Z" />
          <g class="cls-2">
            <polygon
              class="cls-211"
              points="83.86 180.31 83.26 179.97 83.25 179.96 83.84 180.3 83.86 180.31"
            />
            <polygon
              class="cls-202"
              points="83.84 180.3 83.25 179.96 83.27 179.93 83.86 180.28 83.84 180.3"
            />
          </g>
          <polygon
            class="cls-239"
            points="82.82 181.83 82.83 181.83 82.83 181.83 82.83 181.83 82.83 181.82 82.83 181.82 82.83 181.82 82.83 181.82 82.84 181.82 82.84 181.82 82.84 181.82 82.48 181.61 82.26 181.49 82.26 181.49 82.26 181.49 82.25 181.49 82.25 181.49 82.25 181.49 82.25 181.49 82.25 181.49 82.25 181.49 82.25 181.49 82.25 181.49 82.25 181.49 82.25 181.49 82.25 181.49 82.25 181.49 82.25 181.49 82.25 181.49 82.25 181.49 82.24 181.49 82.24 181.49 82.24 181.49 82.24 181.49 82.24 181.5 82.24 181.5 82.24 181.5 82.24 181.5 82.82 181.84 82.82 181.83 82.82 181.83 82.82 181.83"
          />
          <polygon
            class="cls-202"
            points="82.8 181.87 82.22 181.53 82.24 181.5 82.82 181.84 82.8 181.87"
          />
          <polygon
            class="cls-240"
            points="82.79 181.89 82.79 181.89 82.79 181.89 82.79 181.89 82.79 181.89 82.79 181.89 82.79 181.88 82.79 181.88 82.79 181.88 82.79 181.88 82.79 181.88 82.79 181.88 82.8 181.88 82.8 181.87 82.22 181.53 82.22 181.53 82.21 181.54 82.21 181.54 82.21 181.54 82.21 181.54 82.21 181.54 82.21 181.54 82.21 181.54 82.21 181.54 82.21 181.54 82.21 181.54 82.21 181.54 82.21 181.54 82.21 181.54 82.21 181.54 82.21 181.55 82.21 181.55 82.21 181.55 82.21 181.55 82.21 181.55 82.21 181.55 82.21 181.56 82.21 181.56 82.21 181.56 82.21 181.56 82.8 181.9 82.8 181.9 82.79 181.89"
          />
          <g class="cls-2">
            <path
              id="SVGID-4"
              data-name="SVGID"
              class="cls-1"
              d="M83.84,180.27l-.55-.32,0,0,.56.33Z"
            />
            <g class="cls-241">
              <g class="cls-2">
                <path class="cls-1" d="M83.84,180.27l-.55-.32,0,0,.56.33Z" />
              </g>
            </g>
          </g>
          <polygon
            class="cls-215"
            points="83.81 180.28 83.25 179.96 83.27 179.93 83.83 180.25 83.81 180.28"
          />
          <path
            class="cls-242"
            d="M83.8,180.36h0l-.56-.32h-.1v0h0v0h0l0,0h0a.05.05,0,0,0,0,0h0l0,0h0l0,0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0l0,0h-.59l.56.32h.58l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0v0h0v0h0l0,0h0l0,0h0s0,0,0,0h0l0,0h.14Z"
          />
          <polygon
            class="cls-205"
            points="82.68 181.35 82.13 181.03 82.15 181.03 82.7 181.35 82.68 181.35"
          />
          <polygon
            class="cls-217"
            points="82.67 181.39 82.12 181.07 82.13 181.03 82.68 181.35 82.67 181.39"
          />
          <path
            class="cls-218"
            d="M83.85,180.27h0l0,0a1.1,1.1,0,0,1-.14.43,1.92,1.92,0,0,1-.35.47.78.78,0,0,1-.21.17l-.1.05a.31.31,0,0,1-.31-.05h0v0h0a.36.36,0,0,0,.42,0,1.4,1.4,0,0,0,.2-.17,2.2,2.2,0,0,0,.35-.48,1,1,0,0,0,.14-.42l0,0Z"
          />
          <polygon
            class="cls-243"
            points="83.37 180.03 83.25 179.96 83.27 179.93 83.39 180 83.37 180.03"
          />
          <path
            class="cls-243"
            d="M83.36,180.11h0l-.12-.07h-.1v0h0v0h0l0,0h0s0,0,0,0h0l0,0h0l0,0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0s0,0,0,0h-.59l.12.07h.59v0h0v0h0v0h0l0,0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0a.05.05,0,0,0,0,0h0l0,0h0l0,0h0v0h.12Z"
          />
          <polygon
            class="cls-243"
            points="82.25 181.1 82.13 181.03 82.15 181.03 82.27 181.1 82.25 181.1"
          />
          <polygon
            class="cls-243"
            points="82.24 181.14 82.12 181.07 82.13 181.03 82.25 181.1 82.24 181.14"
          />
          <polygon
            class="cls-243"
            points="83.81 180.28 83.69 180.21 83.71 180.18 83.83 180.25 83.81 180.28"
          />
          <path
            class="cls-243"
            d="M83.8,180.36h0l-.12-.07h0v0h-.09v0h0a.05.05,0,0,1,0,0h0l0,0h0l0,0h0l0,0H83.4v0h0l0,0h0v0h0v0h0l0,0h0v0h0l0,0h-.58l.12.07h.58l0,0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0s0,0,0,0h0l0,0h.14Z"
          />
          <polygon
            class="cls-243"
            points="82.68 181.35 82.56 181.28 82.59 181.28 82.7 181.35 82.68 181.35"
          />
          <polygon
            class="cls-243"
            points="82.67 181.39 82.56 181.32 82.56 181.28 82.68 181.35 82.67 181.39"
          />
          <polygon
            class="cls-243"
            points="83.59 180.16 83.47 180.09 83.49 180.06 83.61 180.13 83.59 180.16"
          />
          <path
            class="cls-243"
            d="M83.58,180.23h0l-.12-.07h0v0h-.08v0h0v0h0s0,0,0,0h0l0,0h0l0,0h0l0,0h0v0h-.15l0,0h0v0h0v0H82.4l.12.07h.62l0,0h0l0,0h.15v0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h.12Z"
          />
          <polygon
            class="cls-243"
            points="82.46 181.23 82.34 181.16 82.37 181.16 82.49 181.23 82.46 181.23"
          />
          <polygon
            class="cls-243"
            points="82.46 181.27 82.34 181.2 82.34 181.16 82.46 181.23 82.46 181.27"
          />
          <polygon
            class="cls-244"
            points="84 181.18 84 181.18 84 181.18 84.01 181.18 84.01 181.18 84.01 181.18 84.01 181.18 83.98 181.16 83.98 181.16 83.98 181.16 83.98 181.16 83.98 181.16 83.98 181.16 83.97 181.16 83.97 181.16 83.97 181.16 83.97 181.16 83.97 181.16 84 181.18 84 181.18 84 181.18 84 181.18"
          />
          <polygon
            class="cls-202"
            points="83.88 181.19 83.86 181.18 83.97 181.16 84 181.18 83.88 181.19"
          />
          <polygon
            class="cls-202"
            points="83.79 181.21 83.76 181.19 83.81 181.18 83.83 181.2 83.79 181.21"
          />
          <polygon
            class="cls-202"
            points="83.69 181.22 83.66 181.2 83.71 181.2 83.74 181.21 83.69 181.22"
          />
          <polygon
            class="cls-245"
            points="83.88 181.2 83.88 181.2 83.88 181.2 83.88 181.2 83.88 181.19 83.88 181.19 83.88 181.19 83.86 181.18 83.86 181.18 83.86 181.18 83.86 181.18 83.86 181.18 83.86 181.18 83.86 181.19 83.86 181.19 83.85 181.19 83.85 181.19 83.85 181.2 83.85 181.2 83.85 181.2 83.85 181.2 83.85 181.2 83.85 181.21 83.84 181.21 83.84 181.21 83.84 181.21 83.84 181.21 83.84 181.21 83.84 181.21 83.84 181.21 83.83 181.21 83.83 181.21 83.83 181.21 83.83 181.21 83.83 181.21 83.83 181.21 83.84 181.22 83.85 181.22 83.85 181.23 83.86 181.23 83.86 181.23 83.86 181.23 83.86 181.23 83.86 181.23 83.86 181.23 83.86 181.23 83.86 181.23 83.86 181.23 83.86 181.23 83.86 181.23 83.86 181.23 83.86 181.23 83.86 181.23 83.86 181.23 83.87 181.23 83.87 181.22 83.87 181.22 83.87 181.22 83.87 181.22 83.87 181.22 83.87 181.22 83.87 181.22 83.88 181.22 83.88 181.22 83.88 181.22 83.88 181.22 83.88 181.22 83.88 181.22 83.88 181.21 83.88 181.21 83.88 181.21 83.88 181.21 83.88 181.21 83.88 181.21 83.88 181.21 83.88 181.21 83.88 181.21 83.88 181.21 83.88 181.2 83.88 181.2 83.88 181.2 83.88 181.2"
          />
          <path class="cls-246" d="M83.79,181.21h0l0,0h0Z" />
          <path class="cls-247" d="M83.69,181.22h0l0,0h0Z" />
          <path class="cls-248" d="M82.69,181.41h0l0,0h0l0,0h0Z" />
          <path
            class="cls-229"
            d="M84,181.18s0,0,0,0a.05.05,0,0,1,0,0h0l-1.28.18s0,0,0,0l0,0h0l.92-.13,0,0h0s0,0,0,0h0l0,0h.07l0,0h0s0,0,0,0H84Z"
          />
          <polygon
            class="cls-202"
            points="82.72 181.36 82.69 181.34 83.61 181.21 83.64 181.23 82.72 181.36"
          />
          <polygon
            class="cls-201"
            points="83.23 181.34 83.17 181.35 83.21 181.29 83.27 181.28 83.23 181.34"
          />
          <polygon
            class="cls-199"
            points="83.48 181 83.91 181.26 83.91 181.25 83.9 181.23 83.49 180.99 83.48 181"
          />
          <path class="cls-249" d="M83.51,181s0,0,0,0l.41.24h0Z" />
          <polygon
            class="cls-201"
            points="83.97 181.24 83.93 181.25 83.89 181.19 83.94 181.19 83.97 181.24"
          />
          <path class="cls-250" d="M83.87,180.29h0l0,0h0Z" />
          <path
            class="cls-229"
            d="M83.89,180.28s0,0,0,0v0l-1,1.6,0,0h0a0,0,0,0,1,0,0l1-1.6a0,0,0,0,1,0,0Z"
          />
          <polygon
            class="cls-202"
            points="82.81 181.9 82.78 181.88 83.83 180.28 83.86 180.3 82.81 181.9"
          />
          <path class="cls-251" d="M82.8,181.94h0l0,0h0Z" />
          <path
            class="cls-233"
            d="M82.86,181.85h0v0h0S82.85,181.85,82.86,181.85Z"
          />
          <path
            class="cls-233"
            d="M82.83,181.88h0s0,0,0,0h0S82.83,181.89,82.83,181.88Z"
          />
          <path class="cls-205" d="M83.2,181.35v0s0,0,0,0h0Z" />
          <path class="cls-233" d="M83.87,180.3h0Z" />
          <path
            class="cls-229"
            d="M84,181.22a.06.06,0,0,1,0,0h0l-.31-.47s0,0,0,0v0h0Z"
          />
          <polygon
            class="cls-199"
            points="83.9 181.27 83.59 180.8 83.56 180.78 83.88 181.25 83.88 181.26 83.89 181.26 83.89 181.26 83.89 181.26 83.91 181.27 83.9 181.27"
          />
          <path class="cls-252" d="M83.62,180.74h-.06l0,0h0Z" />
          <path class="cls-233" d="M83.92,181.23h0s0,0,0,0h0Z" />
          <path
            class="cls-233"
            d="M83.61,180.76a0,0,0,0,1,0,0h0S83.6,180.76,83.61,180.76Z"
          />
          <path class="cls-233" d="M83.91,181.21s0,0,0,0v0h0Z" />
          <polygon
            class="cls-198"
            points="83.85 181.23 83.79 181.21 83.83 181.2 83.85 181.23"
          />
          <polygon
            class="cls-202"
            points="83.83 181.2 83.79 181.21 83.76 181.19 83.81 181.18 83.83 181.2"
          />
          <path
            class="cls-144"
            d="M104.49,170.35h0l-26.34-15.2h-.1a.05.05,0,0,0,0,0l26.33,15.2h0a.15.15,0,0,0,.06-.11A.05.05,0,0,0,104.49,170.35Z"
          />
          <path
            class="cls-144"
            d="M104.49,169.91h0L78.15,154.7h-.1s0,0,0,0l26.33,15.21h0a.15.15,0,0,0,.06-.1S104.5,169.91,104.49,169.91Z"
          />
          <path
            class="cls-144"
            d="M104.49,169.46h0l-26.34-15.2h-.1a.05.05,0,0,0,0,0l26.33,15.2h0a.15.15,0,0,0,.06-.11A.05.05,0,0,0,104.49,169.46Z"
          />
          <polygon
            class="cls-131"
            points="66.54 162.17 66.54 168.35 66.88 168.54 72.56 171.82 72.56 165.66 66.54 162.17"
          />
          <polygon
            class="cls-175"
            points="74.36 172.52 72.85 171.65 72.85 166.79 74.36 167.66 74.36 172.52"
          />
          <polygon
            class="cls-131"
            points="72.73 171.92 72.56 171.82 72.56 166.76 72.73 166.86 72.73 171.92"
          />
          <polygon
            class="cls-137"
            points="72.9 171.82 72.73 171.92 72.73 166.86 72.9 166.76 72.9 171.82"
          />
          <polygon
            class="cls-181"
            points="72.9 166.76 72.73 166.86 72.56 166.76 72.73 166.66 72.9 166.76"
          />
          <polygon
            class="cls-253"
            points="72.85 171.85 72.77 171.89 72.77 166.83 72.85 166.79 72.85 171.85"
          />
          <polygon
            class="cls-131"
            points="72.73 171.72 72.73 171.92 74.23 172.79 74.23 172.59 72.73 171.72"
          />
          <polygon
            class="cls-181"
            points="72.9 171.63 72.73 171.72 74.23 172.59 74.4 172.5 72.9 171.63"
          />
          <polygon
            class="cls-137"
            points="74.4 172.5 74.23 172.59 74.23 172.79 74.4 172.69 74.4 172.5"
          />
          <polygon
            class="cls-253"
            points="72.85 171.65 72.77 171.69 74.11 172.48 74.19 172.43 72.85 171.65"
          />
          <polygon
            class="cls-142"
            points="74.07 172.45 72.77 171.69 72.77 166.83 74.28 167.7 74.07 172.45"
          />
          <polygon
            class="cls-131"
            points="74.23 172.79 74.07 172.69 74.07 167.63 74.23 167.73 74.23 172.79"
          />
          <polygon
            class="cls-137"
            points="74.4 172.69 74.23 172.79 74.23 167.73 74.4 167.63 74.4 172.69"
          />
          <polygon
            class="cls-181"
            points="74.4 167.63 74.23 167.73 74.07 167.63 74.23 167.53 74.4 167.63"
          />
          <polygon
            class="cls-175"
            points="75.7 173.29 74.53 172.61 74.53 167.75 75.7 168.43 75.7 173.29"
          />
          <polygon
            class="cls-131"
            points="74.4 172.88 74.23 172.79 74.23 167.73 74.4 167.82 74.4 172.88"
          />
          <polygon
            class="cls-137"
            points="74.57 172.79 74.4 172.88 74.4 167.82 74.57 167.73 74.57 172.79"
          />
          <polygon
            class="cls-181"
            points="74.57 167.73 74.4 167.82 74.23 167.73 74.4 167.63 74.57 167.73"
          />
          <polygon
            class="cls-253"
            points="74.53 172.81 74.44 172.86 74.44 167.8 74.53 167.75 74.53 172.81"
          />
          <polygon
            class="cls-131"
            points="74.4 172.69 74.4 172.88 75.57 173.56 75.57 173.37 74.4 172.69"
          />
          <polygon
            class="cls-181"
            points="74.57 172.59 74.4 172.69 75.57 173.37 75.74 173.27 74.57 172.59"
          />
          <polygon
            class="cls-137"
            points="75.74 173.27 75.57 173.37 75.57 173.56 75.74 173.46 75.74 173.27"
          />
          <polygon
            class="cls-253"
            points="74.53 172.61 74.44 172.66 75.45 173.25 75.53 173.2 74.53 172.61"
          />
          <polygon
            class="cls-142"
            points="75.4 173.23 74.44 172.66 74.44 167.8 75.61 168.47 75.4 173.23"
          />
          <polygon
            class="cls-131"
            points="75.57 173.56 75.4 173.46 75.4 168.4 75.57 168.5 75.57 173.56"
          />
          <polygon
            class="cls-137"
            points="75.74 173.46 75.57 173.56 75.57 168.5 75.74 168.4 75.74 173.46"
          />
          <polygon
            class="cls-181"
            points="75.74 168.4 75.57 168.5 75.4 168.4 75.57 168.31 75.74 168.4"
          />
          <polygon
            class="cls-175"
            points="77.37 174.25 75.86 173.39 75.86 168.52 77.37 169.39 77.37 174.25"
          />
          <polygon
            class="cls-131"
            points="75.74 173.66 75.57 173.56 75.57 168.5 75.74 168.6 75.74 173.66"
          />
          <polygon
            class="cls-137"
            points="75.91 173.56 75.74 173.66 75.74 168.6 75.91 168.5 75.91 173.56"
          />
          <polygon
            class="cls-181"
            points="75.91 168.5 75.74 168.6 75.57 168.5 75.74 168.4 75.91 168.5"
          />
          <polygon
            class="cls-253"
            points="75.86 173.58 75.78 173.63 75.78 168.57 75.86 168.52 75.86 173.58"
          />
          <polygon
            class="cls-131"
            points="75.74 173.46 75.74 173.66 77.24 174.52 77.24 174.33 75.74 173.46"
          />
          <polygon
            class="cls-181"
            points="75.91 173.37 75.74 173.46 77.24 174.33 77.41 174.24 75.91 173.37"
          />
          <polygon
            class="cls-137"
            points="77.41 174.24 77.24 174.33 77.24 174.52 77.41 174.43 77.41 174.24"
          />
          <polygon
            class="cls-253"
            points="75.86 173.38 75.78 173.43 77.12 174.22 77.2 174.17 75.86 173.38"
          />
          <polygon
            class="cls-142"
            points="77.08 174.19 75.78 173.43 75.78 168.57 77.28 169.44 77.08 174.19"
          />
          <polygon
            class="cls-131"
            points="77.24 174.52 77.08 174.43 77.08 169.37 77.24 169.47 77.24 174.52"
          />
          <polygon
            class="cls-137"
            points="77.41 174.43 77.24 174.52 77.24 169.47 77.41 169.37 77.41 174.43"
          />
          <polygon
            class="cls-181"
            points="77.41 169.37 77.24 169.47 77.08 169.37 77.24 169.27 77.41 169.37"
          />
          <polygon
            class="cls-131"
            points="78.75 175.39 77.24 174.52 77.24 169.47 78.75 170.33 78.75 175.39"
          />
          <polygon
            class="cls-175"
            points="80.21 175.9 79.04 175.22 79.04 170.36 80.21 171.03 80.21 175.9"
          />
          <polygon
            class="cls-131"
            points="78.91 175.49 78.75 175.39 78.75 170.33 78.91 170.43 78.91 175.49"
          />
          <polygon
            class="cls-137"
            points="79.08 175.39 78.91 175.49 78.91 170.43 79.08 170.33 79.08 175.39"
          />
          <polygon
            class="cls-181"
            points="79.08 170.33 78.91 170.43 78.75 170.33 78.91 170.24 79.08 170.33"
          />
          <polygon
            class="cls-253"
            points="79.04 175.42 78.96 175.47 78.96 170.41 79.04 170.36 79.04 175.42"
          />
          <polygon
            class="cls-131"
            points="78.91 175.3 78.91 175.49 80.08 176.16 80.08 175.97 78.91 175.3"
          />
          <polygon
            class="cls-181"
            points="79.08 175.2 78.91 175.3 80.08 175.97 80.25 175.88 79.08 175.2"
          />
          <polygon
            class="cls-137"
            points="80.25 175.88 80.08 175.97 80.08 176.16 80.25 176.07 80.25 175.88"
          />
          <polygon
            class="cls-253"
            points="79.04 175.22 78.96 175.27 79.96 175.86 80.04 175.81 79.04 175.22"
          />
          <polygon
            class="cls-142"
            points="79.92 175.83 78.96 175.27 78.96 170.41 80.13 171.08 79.92 175.83"
          />
          <polygon
            class="cls-131"
            points="80.08 176.16 79.92 176.07 79.92 171.01 80.08 171.11 80.08 176.16"
          />
          <polygon
            class="cls-137"
            points="80.25 176.07 80.08 176.16 80.08 171.11 80.25 171.01 80.25 176.07"
          />
          <polygon
            class="cls-181"
            points="80.25 171.01 80.08 171.11 79.92 171.01 80.08 170.91 80.25 171.01"
          />
          <polygon
            class="cls-175"
            points="81.55 176.67 80.38 175.99 80.38 171.13 81.55 171.81 81.55 176.67"
          />
          <polygon
            class="cls-131"
            points="80.25 176.26 80.08 176.16 80.08 171.11 80.25 171.2 80.25 176.26"
          />
          <polygon
            class="cls-137"
            points="80.42 176.16 80.25 176.26 80.25 171.2 80.42 171.11 80.42 176.16"
          />
          <polygon
            class="cls-181"
            points="80.42 171.11 80.25 171.2 80.08 171.11 80.25 171.01 80.42 171.11"
          />
          <polygon
            class="cls-253"
            points="80.38 176.19 80.29 176.24 80.29 171.18 80.38 171.13 80.38 176.19"
          />
          <polygon
            class="cls-131"
            points="80.25 176.07 80.25 176.26 81.42 176.94 81.42 176.74 80.25 176.07"
          />
          <polygon
            class="cls-181"
            points="80.42 175.97 80.25 176.07 81.42 176.74 81.59 176.65 80.42 175.97"
          />
          <polygon
            class="cls-137"
            points="81.59 176.65 81.42 176.74 81.42 176.94 81.59 176.84 81.59 176.65"
          />
          <polygon
            class="cls-253"
            points="80.38 175.99 80.29 176.04 81.3 176.63 81.38 176.58 80.38 175.99"
          />
          <polygon
            class="cls-142"
            points="81.26 176.6 80.29 176.04 80.29 171.18 81.47 171.85 81.26 176.6"
          />
          <polygon
            class="cls-131"
            points="81.42 176.94 81.26 176.84 81.26 171.78 81.42 171.88 81.42 176.94"
          />
          <polygon
            class="cls-137"
            points="81.59 176.84 81.42 176.94 81.42 171.88 81.59 171.78 81.59 176.84"
          />
          <polygon
            class="cls-181"
            points="81.59 171.78 81.42 171.88 81.26 171.78 81.42 171.69 81.59 171.78"
          />
          <path
            class="cls-141"
            d="M101.87,169.29l-.17.1v0l-1.37-.79-.17.09v0L98.8,168l-1.26-.73.12-.06v0l1.37.79.16-.1v-.09l-2.5-1.45h0l-1.34-.78h0L92.67,164,90,162.44,87.49,161h0l-1.34-.77-2.67-1.55-2.68-1.54-2.5-1.45-.17.1v0l0,0-.16.09v0l0,0-.17.1h0v0l0,0-.17.1v0l0,0-.16.1h0v0l0,0-.17.1v0h0l-.17.1h0v0l0,0-.16.1v0h0l-.17.09v0l0,0-.17.1v0h0l-.17.09v0l0,0-.17.1v0h0l-.16.09v0l0,0-.17.1h0v0h0l-.17.09v0l0,0-.16.1h0v0h0l-.17.09v0l0,0-.17.09v0l0,0-.16.1v.1l2.5,1.44,1.26.73-.12.06v0l-1.37-.79h0L74.32,158l-.17.1v.1l2.51,1.44,1.25.73-.12.06v0l-1.36-.79-2.51-1.45-.17.1v.1l2.51,1.44,1.25.73-.11.06v0L76,159.88l-2.51-1.45-.17.1v.1l2.51,1.44,1.26.72-.12.07v0l-1.37-.79-2.51-1.45-.16.1v.09l2.5,1.45,1.26.72-.12.07v.1l2.68,1.54h0L82,164.28l1.18.67,2.67,1.55L88.48,168h0l2.67,1.55h0l1.18.67L95,171.81l2.68,1.54h0l1.49.87.17-.1V174h0l-.17.09h0l.17-.09-.08-.05.12-.07v0l.19.11.17-.1v-.08h0l-.08-.05.12-.06v0l.19.11.16-.1v-.09l-.07,0,.11-.06v0l.19.11.17-.1v-.09l-.08-.05.12-.06v0l.19.11.17-.09v-.1l-.08-.05L101,173v0l.19.11.16-.09v-.1l-.07,0,.12-.07v0l.18.11.17-.09v-.1l-.17.1h0l.17-.1-.07,0,.11-.07v0l.19.11.17-.09v-.1l-.08,0,.12-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.19.11.16-.1V172l-.07,0,.11-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.19.11.16-.1v-.08h0l-.07-.05.12-.07v0l.18.11.17-.1v-.08h0l-.17.09h0l.17-.09-.07-.05.11-.07v-.09Zm-23.28-9.35v0l-1.37-.79L76,158.47l.11-.07v0l1.37.79,1.25.73Zm.4-.22h0v0L77.62,159l-1.26-.72.12-.07v0l1.37.79,1.25.72Zm.39-.23h0v0L78,158.73,76.76,158l.11-.07v0l1.37.79,1.26.72ZM92.06,169h0L92,169h0Zm-4.74-7.88Z"
          />
          <path
            class="cls-141"
            d="M93.82,174h-.1a.14.14,0,0,0,0,.06l1.56,2.7v-.2L93.82,174Z"
          />
          <polygon
            class="cls-131"
            points="82.59 177.61 81.42 176.94 81.42 171.88 82.59 172.55 82.59 177.61"
          />
          <polygon
            class="cls-137"
            points="82.59 171.45 82.59 177.61 95.3 170.28 95.3 164.11 82.59 171.45"
          />
          <path
            class="cls-144"
            d="M80.67,184h0l-26.34-15.2h-.11a.05.05,0,0,0,0,0l26.34,15.2a0,0,0,0,0,0,0,.13.13,0,0,0,.06-.11S80.68,184,80.67,184Z"
          />
          <path
            class="cls-144"
            d="M80.67,183.58h0L54.33,168.37h-.11s0,0,0,0l26.34,15.21h0a.11.11,0,0,0,.06-.1S80.68,183.58,80.67,183.58Z"
          />
          <path
            class="cls-144"
            d="M80.67,183.13h0l-26.34-15.2h-.11a.05.05,0,0,0,0,0l26.34,15.2h0a.13.13,0,0,0,.06-.11S80.68,183.14,80.67,183.13Z"
          />
          <polygon
            class="cls-131"
            points="80.59 188.04 53.84 172.59 53.84 169.5 80.59 184.95 80.59 188.04"
          />
          <polygon
            class="cls-131"
            points="95.3 222.43 93.96 221.66 93.96 175.68 95.3 176.45 95.3 222.43"
          />
          <polygon
            class="cls-173"
            points="98.65 171.24 98.48 171.15 98.48 170.98 98.65 170.98 98.65 171.24"
          />
          <polygon
            class="cls-254"
            points="98.65 170.98 98.82 170.98 98.82 171.15 98.65 171.24 98.65 170.98"
          />
          <polygon
            class="cls-173"
            points="98.03 170.88 97.86 170.79 97.86 170.62 98.03 170.62 98.03 170.88"
          />
          <polygon
            class="cls-254"
            points="98.03 170.62 98.19 170.62 98.19 170.79 98.03 170.88 98.03 170.62"
          />
          <polygon
            class="cls-173"
            points="101.28 169.73 101.11 169.63 101.11 169.46 101.28 169.46 101.28 169.73"
          />
          <polygon
            class="cls-254"
            points="101.28 169.46 101.44 169.46 101.44 169.63 101.28 169.73 101.28 169.46"
          />
          <polygon
            class="cls-173"
            points="101.49 169.54 98.65 171.17 98.65 170.69 101.49 169.05 101.49 169.54"
          />
          <polygon
            class="cls-174"
            points="101.49 169.06 98.65 170.69 97.81 170.21 100.66 168.57 101.49 169.06"
          />
          <polygon
            class="cls-172"
            points="98.65 171.17 97.81 170.69 97.81 170.21 98.65 170.69 98.65 171.17"
          />
          <polygon
            class="cls-137"
            points="104.66 217.03 95.3 222.44 95.3 176.45 104.66 171.05 104.66 217.03"
          />
          <polygon
            class="cls-174"
            points="102.33 168.95 102.16 169.05 103.16 169.63 103.33 169.53 102.33 168.95"
          />
          <polygon
            class="cls-172"
            points="103.33 170.69 102.16 170.02 102.16 169.05 103.33 169.73 103.33 170.69"
          />
          <path
            class="cls-255"
            d="M101.31,169.92s0,.07,0,.09l.92.54a.19.19,0,0,0,.15,0l.77-.45s0-.06,0-.09l-.91-.53a.22.22,0,0,0-.16,0Z"
          />
          <g class="cls-2">
            <path
              class="cls-256"
              d="M101.31,170l.92.54v.17l-.92-.53a.05.05,0,0,1,0,0V170S101.29,170,101.31,170Z"
            />
          </g>
          <path
            class="cls-257"
            d="M103.08,170.09c0-.27.09-.53.13-.8a0,0,0,0,1,0,0l-.13.79Z"
          />
          <path
            class="cls-258"
            d="M102.09,169.63l-.13.79a0,0,0,0,0,0,0l.13-.79A0,0,0,0,1,102.09,169.63Z"
          />
          <polygon
            class="cls-135"
            points="102.35 169.8 102.22 170.59 103.07 170.11 103.2 169.31 102.35 169.8"
          />
          <polygon
            class="cls-177"
            points="102.1 169.66 101.97 170.45 102.15 170.59 102.28 169.8 102.1 169.66"
          />
          <path
            class="cls-134"
            d="M102.28,169.8l-.13.79s0,0,.07,0l.13-.79S102.3,169.81,102.28,169.8Z"
          />
          <path
            class="cls-243"
            d="M102.1,169.61s0,0,0,0l.18.14s0,0,.07,0l.85-.48a0,0,0,0,0,0-.06l-.18-.13a.06.06,0,0,0-.07,0Z"
          />
          <path
            class="cls-255"
            d="M100.39,170.46s0,.06,0,.09l.92.53a.2.2,0,0,0,.15,0l.77-.45a0,0,0,0,0,0-.08l-.92-.54a.19.19,0,0,0-.15,0Z"
          />
          <g class="cls-2">
            <path
              class="cls-259"
              d="M100.39,170.55l.92.53v.17l-.92-.53a.05.05,0,0,1,0,0v-.18S100.37,170.53,100.39,170.55Z"
            />
          </g>
          <path class="cls-134" d="M102.16,170.62l.13-.79v0l-.13.79Z" />
          <path class="cls-260" d="M101.16,170.16,101,171s0,0,0,0l.13-.79Z" />
          <polygon
            class="cls-135"
            points="101.43 170.34 101.3 171.13 102.15 170.64 102.28 169.85 101.43 170.34"
          />
          <polygon
            class="cls-177"
            points="101.18 170.19 101.05 170.98 101.22 171.12 101.35 170.33 101.18 170.19"
          />
          <path
            class="cls-134"
            d="M101.35,170.33l-.13.79a.08.08,0,0,0,.08,0l.13-.79A.08.08,0,0,1,101.35,170.33Z"
          />
          <path
            class="cls-243"
            d="M101.18,170.14a0,0,0,0,0,0,.05l.17.14a.08.08,0,0,0,.08,0l.85-.49a0,0,0,0,0,0,0l-.18-.14a.06.06,0,0,0-.07,0Z"
          />
          <path
            class="cls-255"
            d="M99.47,171s0,.06,0,.09l.91.53a.15.15,0,0,0,.16,0l.77-.44s0-.07,0-.09l-.92-.53a.14.14,0,0,0-.15,0Z"
          />
          <g class="cls-2">
            <path
              class="cls-261"
              d="M99.47,171.08l.91.53v.18l-.91-.53s0,0,0,0V171A.05.05,0,0,0,99.47,171.08Z"
            />
          </g>
          <path class="cls-134" d="M101.24,171.15l.13-.79,0,0-.13.79Z" />
          <path
            class="cls-135"
            d="M100.24,170.69l-.13.8,0,0,.13-.79A.08.08,0,0,1,100.24,170.69Z"
          />
          <polygon
            class="cls-135"
            points="100.51 170.87 100.38 171.66 101.22 171.17 101.35 170.38 100.51 170.87"
          />
          <polygon
            class="cls-135"
            points="100.26 170.72 100.13 171.52 100.3 171.65 100.43 170.86 100.26 170.72"
          />
          <path
            class="cls-134"
            d="M100.43,170.86l-.13.79a.08.08,0,0,0,.08,0l.13-.79A.08.08,0,0,1,100.43,170.86Z"
          />
          <path
            class="cls-243"
            d="M100.26,170.67a0,0,0,0,0,0,.06l.17.13a.08.08,0,0,0,.08,0l.84-.49s0,0,0,0l-.17-.14a.08.08,0,0,0-.08,0Z"
          />
          <polygon
            class="cls-173"
            points="103.5 170.59 100.32 172.43 100.32 171.46 103.5 169.63 103.5 170.59"
          />
          <polygon
            class="cls-172"
            points="100.32 172.43 99.15 171.75 99.15 170.79 100.32 171.46 100.32 172.43"
          />
          <polygon
            class="cls-174"
            points="103.33 169.53 103.16 169.63 100.32 171.27 99.32 170.69 99.15 170.79 100.32 171.46 103.5 169.63 103.33 169.53"
          />
          <polygon
            class="cls-131"
            points="94.97 176.26 93.63 175.49 93.63 173.56 94.97 174.33 94.97 176.26"
          />
          <polygon
            class="cls-137"
            points="95.3 176.07 94.97 176.26 94.97 174.33 95.3 174.14 95.3 176.07"
          />
          <polygon
            class="cls-181"
            points="95.3 174.14 94.97 174.33 93.63 173.56 93.96 173.37 95.3 174.14"
          />
          <path
            class="cls-3"
            d="M93.82,174.89h-.1a.14.14,0,0,0,0,.06l1.56,2.7v-.2Z"
          />
          <path
            class="cls-3"
            d="M93.82,174.44h-.1a.11.11,0,0,0,0,.06l1.56,2.71V177Z"
          />
          <polygon
            class="cls-137"
            points="95.3 176.45 104.66 171.05 104.66 169.12 95.3 174.52 95.3 176.45"
          />
          <polygon
            class="cls-131"
            points="94.97 176.26 95.3 176.45 95.3 174.52 94.97 174.33 94.97 176.26"
          />
          <polygon
            class="cls-181"
            points="94.97 174.33 95.3 174.52 104.66 169.12 104.33 168.93 94.97 174.33"
          />
          <path
            class="cls-144"
            d="M88.13,178.07h0l5.61-3.23h.1s0,0,0,0l-5.6,3.23h0a.15.15,0,0,1-.06-.11A.05.05,0,0,1,88.13,178.07Z"
          />
          <path
            class="cls-144"
            d="M88.13,177.63h0l5.61-3.24h.1s0,0,0,0l-5.6,3.24h0a.13.13,0,0,1-.06-.1S88.12,177.63,88.13,177.63Z"
          />
          <polygon
            class="cls-131"
            points="89.28 179.54 87.94 178.77 87.94 176.84 89.28 177.61 89.28 179.54"
          />
          <polygon
            class="cls-137"
            points="89.62 179.35 89.28 179.54 89.28 177.61 89.62 177.42 89.62 179.35"
          />
          <polygon
            class="cls-181"
            points="89.62 177.42 89.28 177.61 87.94 176.84 88.28 176.65 89.62 177.42"
          />
          <polygon
            class="cls-137"
            points="80.59 184.95 89.95 179.54 89.95 177.61 80.59 183.02 80.59 184.95"
          />
          <polygon
            class="cls-131"
            points="80.25 184.75 80.59 184.95 80.59 183.02 80.25 182.82 80.25 184.75"
          />
          <polygon
            class="cls-181"
            points="80.25 182.82 80.59 183.02 89.95 177.61 89.62 177.42 80.25 182.82"
          />
          <polygon
            class="cls-131"
            points="95.3 164.11 82.59 171.45 66.54 162.18 79.25 154.85 95.3 164.11"
          />
          <polygon
            class="cls-131"
            points="82.59 171.45 82.59 172.99 66.54 163.73 66.54 162.18 82.59 171.45"
          />
          <polygon
            class="cls-131"
            points="79.99 230.74 80.59 230.93 80.69 188.07 80.08 187.88 79.99 230.74"
          />
          <polygon
            class="cls-131"
            points="60.86 219.54 59.19 218.57 59.03 175.85 60.7 176.82 60.88 195.81 60.93 198.26 60.88 201.38 60.88 203.47 60.86 219.54"
          />
          <polygon
            class="cls-131"
            points="65.11 222.05 63.44 221.08 63.44 178.19 65.2 179.16 65.11 222.05"
          />
          <polygon
            class="cls-131"
            points="93.2 222.21 93.36 222.11 93.36 217.48 93.2 217.58 93.2 222.21"
          />
          <polygon
            class="cls-132"
            points="93.03 222.11 93.2 222.21 93.2 217.58 93.03 217.48 93.03 222.11"
          />
          <polygon
            class="cls-131"
            points="93.03 217.48 93.2 217.58 93.36 217.48 93.2 217.38 93.03 217.48"
          />
          <polygon
            class="cls-176"
            points="93.07 222.14 93.16 222.19 93.16 217.55 93.07 217.5 93.07 222.14"
          />
          <polygon
            class="cls-131"
            points="93.2 222.02 93.2 222.21 91.69 223.08 91.69 222.89 93.2 222.02"
          />
          <polygon
            class="cls-131"
            points="93.03 221.92 93.2 222.02 91.69 222.89 91.53 222.79 93.03 221.92"
          />
          <polygon
            class="cls-132"
            points="91.53 222.79 91.69 222.89 91.69 223.08 91.53 222.98 91.53 222.79"
          />
          <polygon
            class="cls-176"
            points="93.07 221.94 93.16 221.99 91.82 222.77 91.73 222.72 93.07 221.94"
          />
          <polygon
            class="cls-142"
            points="91.86 222.75 93.16 221.99 93.16 217.55 91.65 218.42 91.86 222.75"
          />
          <polygon
            class="cls-142"
            points="91.65 218.42 93.16 217.55 93.07 217.5 91.57 218.37 91.65 218.42"
          />
          <polygon
            class="cls-131"
            points="91.69 223.08 91.86 222.98 91.86 218.35 91.69 218.45 91.69 223.08"
          />
          <polygon
            class="cls-132"
            points="91.53 222.98 91.69 223.08 91.69 218.45 91.53 218.35 91.53 222.98"
          />
          <polygon
            class="cls-131"
            points="91.53 218.35 91.69 218.45 91.86 218.35 91.69 218.25 91.53 218.35"
          />
          <polygon
            class="cls-131"
            points="91.53 223.18 91.69 223.08 91.69 218.45 91.53 218.54 91.53 223.18"
          />
          <polygon
            class="cls-132"
            points="91.36 223.08 91.53 223.18 91.53 218.54 91.36 218.45 91.36 223.08"
          />
          <polygon
            class="cls-131"
            points="91.36 218.45 91.53 218.54 91.69 218.45 91.53 218.35 91.36 218.45"
          />
          <polygon
            class="cls-176"
            points="91.4 223.1 91.48 223.15 91.48 218.52 91.4 218.47 91.4 223.1"
          />
          <polygon
            class="cls-131"
            points="91.53 222.98 91.53 223.18 90.35 223.85 90.35 223.66 91.53 222.98"
          />
          <polygon
            class="cls-131"
            points="91.36 222.89 91.53 222.98 90.35 223.66 90.19 223.56 91.36 222.89"
          />
          <polygon
            class="cls-132"
            points="90.19 223.56 90.35 223.66 90.35 223.85 90.19 223.75 90.19 223.56"
          />
          <polygon
            class="cls-176"
            points="91.4 222.9 91.48 222.95 90.48 223.54 90.4 223.5 91.4 222.9"
          />
          <polygon
            class="cls-142"
            points="90.52 223.52 91.48 222.95 91.48 218.52 90.31 219.19 90.52 223.52"
          />
          <polygon
            class="cls-142"
            points="90.31 219.19 91.48 218.52 91.4 218.47 90.23 219.15 90.31 219.19"
          />
          <polygon
            class="cls-131"
            points="90.35 223.85 90.52 223.75 90.52 219.12 90.35 219.22 90.35 223.85"
          />
          <polygon
            class="cls-132"
            points="90.19 223.75 90.35 223.85 90.35 219.22 90.19 219.12 90.19 223.75"
          />
          <polygon
            class="cls-131"
            points="90.19 219.12 90.35 219.22 90.52 219.12 90.35 219.03 90.19 219.12"
          />
          <polygon
            class="cls-131"
            points="90.19 223.95 90.35 223.85 90.35 219.22 90.19 219.31 90.19 223.95"
          />
          <polygon
            class="cls-132"
            points="90.02 223.85 90.19 223.95 90.19 219.31 90.02 219.22 90.02 223.85"
          />
          <polygon
            class="cls-131"
            points="90.02 219.22 90.19 219.31 90.35 219.22 90.19 219.12 90.02 219.22"
          />
          <polygon
            class="cls-176"
            points="90.06 223.88 90.14 223.92 90.14 219.29 90.06 219.24 90.06 223.88"
          />
          <polygon
            class="cls-131"
            points="90.19 223.75 90.19 223.95 88.68 224.82 88.68 224.62 90.19 223.75"
          />
          <polyline
            class="cls-131"
            points="88.68 224.43 90.02 223.66 90.19 223.75 88.68 224.62"
          />
          <polygon
            class="cls-176"
            points="90.06 223.68 90.14 223.72 88.81 224.51 88.72 224.46 90.06 223.68"
          />
          <polygon
            class="cls-142"
            points="88.85 224.49 90.14 223.72 90.14 219.29 88.64 220.16 88.85 224.49"
          />
          <polygon
            class="cls-142"
            points="88.64 220.16 90.14 219.29 90.06 219.24 88.56 220.11 88.64 220.16"
          />
          <polygon
            class="cls-131"
            points="88.68 224.82 88.85 224.72 88.85 220.09 88.68 220.18 88.68 224.82"
          />
          <polygon
            class="cls-177"
            points="91.6 221.53 91.65 221.5 91.67 221.52 91.63 221.54 91.6 221.53"
          />
          <polygon
            class="cls-178"
            points="91.65 221.11 91.7 221.09 91.7 221.56 91.65 221.58 91.65 221.11"
          />
          <polygon
            class="cls-177"
            points="91.63 221.1 91.65 221.11 91.7 221.09 91.67 221.07 91.63 221.1"
          />
          <polygon
            class="cls-179"
            points="91.65 221.11 91.65 221.58 91.63 221.57 91.6 221.56 91.6 221.53 91.63 221.54 91.63 221.1 91.65 221.11"
          />
          <polygon
            class="cls-131"
            points="91.42 216.28 91.5 216.23 91.5 213.94 91.42 213.99 91.42 216.28"
          />
          <polygon
            class="cls-132"
            points="91.34 216.33 91.42 216.28 91.42 214.06 91.34 214.01 91.34 216.33"
          />
          <polygon
            class="cls-176"
            points="91.36 216.25 91.4 216.27 91.4 214.05 91.36 214.03 91.36 216.25"
          />
          <polygon
            class="cls-131"
            points="91.42 216.19 91.42 216.28 90.5 216.81 90.5 216.72 91.42 216.19"
          />
          <polygon
            class="cls-131"
            points="91.34 216.14 91.42 216.19 90.5 216.72 90.5 216.62 91.34 216.14"
          />
          <polygon
            class="cls-176"
            points="91.36 216.15 91.4 216.17 90.56 216.66 90.52 216.63 91.36 216.15"
          />
          <polygon
            class="cls-142"
            points="90.58 216.65 91.4 216.17 91.4 214.05 90.55 214.47 90.58 216.65"
          />
          <polygon
            class="cls-131"
            points="90.5 216.81 90.58 216.76 90.58 214.45 90.5 214.49 90.5 216.81"
          />
          <polygon
            class="cls-131"
            points="91.5 213.92 91.5 214.01 90.58 214.54 90.58 214.45 91.5 213.92"
          />
          <polygon
            class="cls-131"
            points="91.42 210.88 91.5 210.83 91.5 208.53 91.42 208.58 91.42 210.88"
          />
          <polygon
            class="cls-132"
            points="91.34 210.93 91.42 210.88 91.42 208.66 91.34 208.61 91.34 210.93"
          />
          <polygon
            class="cls-176"
            points="91.36 210.84 91.4 210.87 91.4 208.65 91.36 208.62 91.36 210.84"
          />
          <polygon
            class="cls-131"
            points="91.42 210.78 91.42 210.88 90.5 211.41 90.5 211.31 91.42 210.78"
          />
          <polygon
            class="cls-131"
            points="91.34 210.73 91.42 210.78 90.5 211.31 90.5 211.22 91.34 210.73"
          />
          <polygon
            class="cls-176"
            points="91.36 210.74 91.4 210.77 90.56 211.25 90.52 211.23 91.36 210.74"
          />
          <polygon
            class="cls-142"
            points="90.58 211.24 91.4 210.77 91.4 208.65 90.55 209.06 90.58 211.24"
          />
          <polygon
            class="cls-131"
            points="90.5 211.41 90.58 211.36 90.58 209.04 90.5 209.09 90.5 211.41"
          />
          <polygon
            class="cls-131"
            points="91.5 208.51 91.5 208.61 90.58 209.14 90.58 209.04 91.5 208.51"
          />
          <polygon
            class="cls-131"
            points="91.42 205.47 91.5 205.42 91.5 203.13 91.42 203.18 91.42 205.47"
          />
          <polygon
            class="cls-132"
            points="91.34 205.52 91.42 205.47 91.42 203.25 91.34 203.2 91.34 205.52"
          />
          <polygon
            class="cls-176"
            points="91.36 205.44 91.4 205.46 91.4 203.24 91.36 203.22 91.36 205.44"
          />
          <polygon
            class="cls-131"
            points="91.42 205.38 91.42 205.47 90.5 206 90.5 205.91 91.42 205.38"
          />
          <polygon
            class="cls-131"
            points="91.34 205.33 91.42 205.38 90.5 205.91 90.5 205.81 91.34 205.33"
          />
          <polygon
            class="cls-176"
            points="91.36 205.34 91.4 205.36 90.56 205.85 90.52 205.82 91.36 205.34"
          />
          <polygon
            class="cls-142"
            points="90.58 205.84 91.4 205.36 91.4 203.24 90.55 203.66 90.58 205.84"
          />
          <polygon
            class="cls-131"
            points="90.5 206 90.58 205.96 90.58 203.64 90.5 203.68 90.5 206"
          />
          <polygon
            class="cls-131"
            points="91.5 203.11 91.5 203.2 90.58 203.74 90.58 203.64 91.5 203.11"
          />
          <polygon
            class="cls-131"
            points="91.42 200.07 91.5 200.02 91.5 197.72 91.42 197.77 91.42 200.07"
          />
          <polygon
            class="cls-132"
            points="91.34 200.12 91.42 200.07 91.42 197.85 91.34 197.8 91.34 200.12"
          />
          <polygon
            class="cls-176"
            points="91.36 200.03 91.4 200.06 91.4 197.84 91.36 197.81 91.36 200.03"
          />
          <polygon
            class="cls-131"
            points="91.42 199.97 91.42 200.07 90.5 200.6 90.5 200.5 91.42 199.97"
          />
          <polygon
            class="cls-131"
            points="91.34 199.92 91.42 199.97 90.5 200.5 90.5 200.41 91.34 199.92"
          />
          <polygon
            class="cls-176"
            points="91.36 199.93 91.4 199.96 90.56 200.44 90.52 200.42 91.36 199.93"
          />
          <polygon
            class="cls-142"
            points="90.58 200.43 91.4 199.96 91.4 197.84 90.55 198.25 90.58 200.43"
          />
          <polygon
            class="cls-131"
            points="90.5 200.6 90.58 200.55 90.58 198.23 90.5 198.28 90.5 200.6"
          />
          <polygon
            class="cls-131"
            points="91.5 197.7 91.5 197.8 90.58 198.33 90.58 198.23 91.5 197.7"
          />
          <polygon
            class="cls-131"
            points="91.42 194.66 91.5 194.61 91.5 192.32 91.42 192.37 91.42 194.66"
          />
          <polygon
            class="cls-132"
            points="91.34 194.71 91.42 194.66 91.42 192.44 91.34 192.39 91.34 194.71"
          />
          <polygon
            class="cls-176"
            points="91.36 194.63 91.4 194.65 91.4 192.43 91.36 192.41 91.36 194.63"
          />
          <polygon
            class="cls-131"
            points="91.42 194.56 91.42 194.66 90.5 195.19 90.5 195.1 91.42 194.56"
          />
          <polygon
            class="cls-131"
            points="91.34 194.52 91.42 194.56 90.5 195.1 90.5 195 91.34 194.52"
          />
          <polygon
            class="cls-176"
            points="91.36 194.53 91.4 194.55 90.56 195.04 90.52 195.01 91.36 194.53"
          />
          <polygon
            class="cls-142"
            points="90.58 195.03 91.4 194.55 91.4 192.43 90.55 192.84 90.58 195.03"
          />
          <polygon
            class="cls-131"
            points="90.5 195.19 90.58 195.15 90.58 192.83 90.5 192.87 90.5 195.19"
          />
          <polygon
            class="cls-131"
            points="91.5 192.3 91.5 192.39 90.58 192.92 90.58 192.83 91.5 192.3"
          />
          <polygon
            class="cls-131"
            points="91.42 189.26 91.5 189.21 91.5 186.91 91.42 186.96 91.42 189.26"
          />
          <polygon
            class="cls-132"
            points="91.34 189.31 91.42 189.26 91.42 187.04 91.34 186.99 91.34 189.31"
          />
          <polygon
            class="cls-176"
            points="91.36 189.22 91.4 189.24 91.4 187.03 91.36 187 91.36 189.22"
          />
          <polygon
            class="cls-131"
            points="91.42 189.16 91.42 189.26 90.5 189.79 90.5 189.69 91.42 189.16"
          />
          <polygon
            class="cls-131"
            points="91.34 189.11 91.42 189.16 90.5 189.69 90.5 189.59 91.34 189.11"
          />
          <polygon
            class="cls-176"
            points="91.36 189.12 91.4 189.15 90.56 189.63 90.52 189.61 91.36 189.12"
          />
          <polygon
            class="cls-142"
            points="90.58 189.62 91.4 189.15 91.4 187.03 90.56 187.44 90.58 189.62"
          />
          <polygon
            class="cls-131"
            points="90.5 189.79 90.58 189.74 90.58 187.42 90.5 187.47 90.5 189.79"
          />
          <polygon
            class="cls-131"
            points="91.5 186.89 91.5 186.99 90.58 187.52 90.58 187.42 91.5 186.89"
          />
          <polygon
            class="cls-131"
            points="91.42 183.85 91.5 183.8 91.5 181.51 91.42 181.56 91.42 183.85"
          />
          <polygon
            class="cls-132"
            points="91.34 183.9 91.42 183.85 91.42 181.63 91.34 181.58 91.34 183.9"
          />
          <polygon
            class="cls-176"
            points="91.36 183.81 91.4 183.84 91.4 181.62 91.36 181.59 91.36 183.81"
          />
          <polygon
            class="cls-131"
            points="91.42 183.75 91.42 183.85 90.5 184.38 90.5 184.29 91.42 183.75"
          />
          <polygon
            class="cls-131"
            points="91.34 183.71 91.42 183.75 90.5 184.29 90.5 184.19 91.34 183.71"
          />
          <polygon
            class="cls-176"
            points="91.36 183.72 91.4 183.74 90.56 184.23 90.52 184.2 91.36 183.72"
          />
          <polygon
            class="cls-142"
            points="90.58 184.22 91.4 183.74 91.4 181.62 90.56 182.03 90.58 184.22"
          />
          <polygon
            class="cls-131"
            points="90.5 184.38 90.58 184.33 90.58 182.01 90.5 182.06 90.5 184.38"
          />
          <polygon
            class="cls-131"
            points="91.5 181.49 91.5 181.58 90.58 182.11 90.58 182.02 91.5 181.49"
          />
          <polygon
            class="cls-132"
            points="88.61 220.11 93.96 217.02 93.96 216.25 88.61 219.35 88.61 220.11"
          />
          <polygon
            class="cls-3"
            points="56.7 212.95 59.18 214.33 59.18 213.94 55.24 211.71 55.24 215.17 54.17 215.68 56.75 215.88 56.7 212.95"
          />
          <polygon
            class="cls-3"
            points="77.92 225.14 79.99 226.34 79.99 225.96 76.51 223.94 76.52 227.2 75.24 227.84 77.92 227.84 77.92 225.14"
          />
          <polygon
            class="cls-137"
            points="89.95 225.53 80.59 230.93 80.59 184.95 89.95 179.54 89.95 225.53"
          />
          <polygon
            class="cls-177"
            points="75.51 171.18 75.47 171.15 75.45 171.16 75.49 171.19 75.51 171.18"
          />
          <polygon
            class="cls-178"
            points="75.47 170.76 75.42 170.73 75.42 171.2 75.47 171.23 75.47 170.76"
          />
          <polygon
            class="cls-177"
            points="75.49 170.74 75.47 170.76 75.42 170.73 75.45 170.72 75.49 170.74"
          />
          <polygon
            class="cls-179"
            points="75.47 170.76 75.47 171.23 75.49 171.21 75.51 171.2 75.51 171.18 75.49 171.19 75.49 170.74 75.47 170.76"
          />
          <polygon
            class="cls-131"
            points="82.59 172.63 66.54 163.37 66.54 162.21 82.59 171.48 82.59 172.63"
          />
          <polygon
            class="cls-137"
            points="82.59 172.63 82.59 171.48 95.3 164.14 95.3 165.29 82.59 172.63"
          />
          <polygon
            class="cls-141"
            points="82.59 171.09 66.54 161.82 79.25 154.48 95.3 163.75 82.59 171.09"
          />
          <polygon
            class="cls-131"
            points="91.64 164.08 79.25 156.93 70.2 162.15 82.59 169.3 91.64 164.08"
          />
          <polygon
            class="cls-144"
            points="66.54 162.21 82.59 171.47 82.59 171.09 66.54 161.82 66.54 162.21"
          />
          <polygon
            class="cls-144"
            points="95.3 163.75 82.59 171.09 82.59 171.47 95.3 164.14 95.3 163.75"
          />
          <polygon
            class="cls-144"
            points="79.25 156.27 79.25 156.93 91.64 164.08 92.21 163.75 79.25 156.27"
          />
          <polygon
            class="cls-144"
            points="69.63 161.82 70.2 162.15 79.25 156.93 79.25 156.27 69.63 161.82"
          />
          <polygon
            class="cls-3"
            points="70.2 162.15 70.77 162.48 79.82 157.25 79.25 156.27 79.25 156.93 70.2 162.15"
          />
          <ellipse class="cls-154" cx="49.02" cy="216.35" rx="3.37" ry="1.81" />
          <path
            class="cls-155"
            d="M49,216.56h0a.33.33,0,0,1-.33-.33V211.6a.33.33,0,0,1,.33-.33h0a.33.33,0,0,1,.33.33v4.63A.33.33,0,0,1,49,216.56Z"
          />
          <path
            class="cls-103"
            d="M52,207.11a3.12,3.12,0,0,0,0-.54,3.85,3.85,0,0,0-.68-2.2,3.22,3.22,0,0,0,.09-.76,2.45,2.45,0,1,0-4.84,0,3.77,3.77,0,0,0,.08.76,3.84,3.84,0,0,0-.67,2.2,3.12,3.12,0,0,0,0,.54,3.23,3.23,0,0,0-1.2,2.45c0,1.94,1.87,3.5,4.17,3.5s4.17-1.56,4.17-3.5A3.23,3.23,0,0,0,52,207.11Z"
          />
          <path
            class="cls-156"
            d="M52,207.11a3.12,3.12,0,0,0,0-.54,3.85,3.85,0,0,0-.68-2.2,3.22,3.22,0,0,0,.09-.76A2.88,2.88,0,0,0,50,201c-.93,5.8,1.76,8.43-2.29,11.87a4.66,4.66,0,0,0,1.36.19c2.3,0,4.17-1.56,4.17-3.5A3.23,3.23,0,0,0,52,207.11Z"
          />
          <ellipse class="cls-154" cx="91.86" cy="230.93" rx="3.37" ry="1.81" />
          <path
            class="cls-155"
            d="M91.86,231.14h0a.33.33,0,0,1-.33-.33v-4.63a.33.33,0,0,1,.33-.33h0a.33.33,0,0,1,.33.33v4.63A.33.33,0,0,1,91.86,231.14Z"
          />
          <path
            class="cls-103"
            d="M94.83,221.69a3.27,3.27,0,0,0,0-.54,3.88,3.88,0,0,0-.68-2.21,3.1,3.1,0,0,0,.09-.76,2.45,2.45,0,1,0-4.84,0,3.69,3.69,0,0,0,.08.76,3.88,3.88,0,0,0-.67,2.21,3.27,3.27,0,0,0,0,.54,3.23,3.23,0,0,0-1.2,2.45c0,1.93,1.87,3.5,4.17,3.5s4.17-1.57,4.17-3.5A3.23,3.23,0,0,0,94.83,221.69Z"
          />
          <path
            class="cls-156"
            d="M94.83,221.69a3.27,3.27,0,0,0,0-.54,3.88,3.88,0,0,0-.68-2.21,3.1,3.1,0,0,0,.09-.76,2.87,2.87,0,0,0-1.49-2.6c-.93,5.79,1.76,8.43-2.29,11.87a5,5,0,0,0,1.36.19c2.3,0,4.17-1.57,4.17-3.5A3.23,3.23,0,0,0,94.83,221.69Z"
          />
          <ellipse class="cls-154" cx="109.43" cy="215.5" rx="3.37" ry="1.81" />
          <path
            class="cls-155"
            d="M109.43,215.71h0a.33.33,0,0,1-.33-.33v-4.63a.33.33,0,0,1,.33-.33h0a.33.33,0,0,1,.33.33v4.63A.33.33,0,0,1,109.43,215.71Z"
          />
          <path
            class="cls-103"
            d="M112.41,206.26a4.63,4.63,0,0,0,0-.54,3.88,3.88,0,0,0-.67-2.21,3.68,3.68,0,0,0,.09-.76,2.45,2.45,0,1,0-4.85,0,3.1,3.1,0,0,0,.09.76,3.88,3.88,0,0,0-.68,2.21,4.56,4.56,0,0,0,0,.54,3.23,3.23,0,0,0-1.2,2.45c0,1.93,1.87,3.5,4.17,3.5s4.17-1.57,4.17-3.5A3.22,3.22,0,0,0,112.41,206.26Z"
          />
          <path
            class="cls-156"
            d="M112.41,206.26a4.63,4.63,0,0,0,0-.54,3.88,3.88,0,0,0-.67-2.21,3.68,3.68,0,0,0,.09-.76,2.86,2.86,0,0,0-1.5-2.6c-.93,5.79,1.76,8.43-2.28,11.87a5,5,0,0,0,1.35.19c2.31,0,4.17-1.57,4.17-3.5A3.22,3.22,0,0,0,112.41,206.26Z"
          />

          <text class="cls-263" transform="translate(52.27 331.92)">
            {{ reportData.apartment.benchmarkPriceDeltaYTY }}% change
            <tspan class="cls-264" x="0" y="13">year to year</tspan>
          </text>
          <text class="cls-263" transform="translate(195.71 331.92)">
            {{ reportData.row.benchmarkPriceDeltaYTY }}% change
            <tspan class="cls-264" x="0" y="13">year to year</tspan>
          </text>
          <text class="cls-263" transform="translate(339.16 331.92)">
            {{ reportData['semi-detached'].benchmarkPriceDeltaYTY }}% change
            <tspan class="cls-264" x="0" y="13">year to year</tspan>
          </text>
          <text class="cls-263" transform="translate(486.22 331.92)">
            {{ reportData.detached.benchmarkPriceDeltaYTY }}% change
            <tspan class="cls-264" x="0" y="13">year to year</tspan>
          </text>
          <path
            class="cls-271"
            d="M242.18,481.87c-12.12,1.91-24.09,4.45-36.05,7l-25,5.3c-26.91,5.71-53.86,11.42-80.07,19.2-4.87,1.45-10.66,4.15-10.26,8.59.23,2.58,2.6,4.59,4.91,6.23a88.31,88.31,0,0,0,33.9,14.25c2.69.53,5.68,1.07,7.32,3,.93,1.09,1.27,2.48,2.15,3.61,1.73,2.24,5.08,3,8.13,3.5,27.77,5,55.86,9.84,84.2,9.15,17.18-.42,34.2-2.88,51.32-4.13a364.11,364.11,0,0,1,78.92,2.87c14.36,2.11,28.69,5.09,43.25,4.82,13.9-.26,27.55-3.48,41.45-3.75,12.71-.25,26.74,1.68,37-4.77,4.13-2.58,7.2-6.29,11.48-8.67,5.11-2.84,11.56-3.56,16.42-6.7,3-2,5.24-4.73,7.37-7.45l11.91-15.13c3.48-4.41,7-9,8.24-14.24,2.75-12-7.88-23.65-20.35-29.44s-26.84-7.64-40.06-12c-14.85-4.92-28.62-13.13-44.44-14.5-10-.86-20,1.1-29.73,3.05-10.59,2.12-21.19,4.24-31.71,6.63s-21,5.08-31.31,8.31q-7.62,2.39-15.06,5.22-3.76,1.43-7.45,3c-1.77.75-3.32,1.87-5.08,2.59-2,.82-4.63.36-6.77.3q-4.36-.12-8.74-.13-8.62,0-17.24.39c-11.55.53-23.07,1.63-34.49,3.29Z"
          />
          <path
            class="cls-272"
            d="M242.18,481.86c-12.12,1.91-24.09,4.45-36.06,7l-25,5.31c-26.91,5.7-53.86,11.42-80.08,19.2-4.86,1.44-10.65,4.15-10.26,8.59.23,2.58,2.6,4.59,4.92,6.23a88.26,88.26,0,0,0,33.89,14.25c2.7.52,5.69,1.07,7.33,3,.93,1.09,1.27,2.48,2.14,3.61,1.74,2.24,5.09,3,8.14,3.5,27.76,5,55.85,9.84,84.2,9.15,17.17-.42,34.19-2.88,51.32-4.13a363.38,363.38,0,0,1,78.91,2.87c14.36,2.11,28.7,5.09,43.26,4.82,13.9-.26,27.55-3.48,41.45-3.75,12.71-.25,26.73,1.68,37-4.77,4.12-2.58,7.2-6.3,11.48-8.67,5.11-2.84,11.55-3.56,16.42-6.71,3-2,5.23-4.72,7.37-7.44l11.91-15.13c3.48-4.41,7-9,8.23-14.24,2.76-12-7.87-23.65-20.34-29.45s-26.84-7.63-40.06-12c-14.86-4.92-28.62-13.14-44.45-14.5-10-.86-19.95,1.1-29.72,3.05-10.59,2.11-21.19,4.23-31.71,6.63s-21.05,5.08-31.31,8.31q-7.63,2.38-15.06,5.21-3.76,1.44-7.45,3c-1.77.75-3.33,1.87-5.09,2.59-2,.82-4.62.36-6.76.3q-4.38-.12-8.74-.13-8.62,0-17.24.39c-11.56.53-23.08,1.63-34.49,3.29C245,481.42,243.57,481.64,242.18,481.86Z"
          />
          <ellipse
            class="cls-154"
            cx="378.88"
            cy="475.65"
            rx="16.75"
            ry="8.99"
          />
          <path
            class="cls-155"
            d="M378.88,476.69h0a1.64,1.64,0,0,1-1.63-1.63V452a1.64,1.64,0,0,1,1.63-1.63h0a1.63,1.63,0,0,1,1.63,1.63v23A1.63,1.63,0,0,1,378.88,476.69Z"
          />
          <path
            class="cls-103"
            d="M393.67,429.71a19.67,19.67,0,0,0,.18-2.68,19.14,19.14,0,0,0-3.36-11,16.1,16.1,0,0,0,.45-3.78c0-7.74-5.4-14-12.06-14s-12.05,6.27-12.05,14a16.1,16.1,0,0,0,.45,3.78,19.14,19.14,0,0,0-3.36,11,21.42,21.42,0,0,0,.17,2.68,16,16,0,0,0-5.95,12.19c0,9.61,9.29,17.4,20.74,17.4s20.74-7.79,20.74-17.4A16,16,0,0,0,393.67,429.71Z"
          />
          <path
            class="cls-156"
            d="M393.67,429.71a19.67,19.67,0,0,0,.18-2.68,19.14,19.14,0,0,0-3.36-11,16.1,16.1,0,0,0,.45-3.78c0-5.83-3.07-10.83-7.44-12.94-4.62,28.8,8.76,41.89-11.35,59a24.21,24.21,0,0,0,6.73.94c11.46,0,20.74-7.79,20.74-17.4A16,16,0,0,0,393.67,429.71Z"
          />
          <ellipse
            class="cls-154"
            cx="340.35"
            cy="498.78"
            rx="16.75"
            ry="8.99"
          />
          <path
            class="cls-155"
            d="M340.35,499.82h0a1.63,1.63,0,0,1-1.63-1.63v-23a1.63,1.63,0,0,1,1.63-1.63h0a1.63,1.63,0,0,1,1.63,1.63v23A1.63,1.63,0,0,1,340.35,499.82Z"
          />
          <path
            class="cls-103"
            d="M355.14,452.84a19.67,19.67,0,0,0,.18-2.68,19.1,19.1,0,0,0-3.36-11,16.1,16.1,0,0,0,.44-3.78c0-7.74-5.39-14-12-14s-12.05,6.27-12.05,14a16.65,16.65,0,0,0,.44,3.78,19.16,19.16,0,0,0-3.35,11,21.42,21.42,0,0,0,.17,2.68A16,16,0,0,0,319.61,465c0,9.61,9.29,17.4,20.74,17.4s20.74-7.79,20.74-17.4A16,16,0,0,0,355.14,452.84Z"
          />
          <path
            class="cls-156"
            d="M355.14,452.84a19.67,19.67,0,0,0,.18-2.68,19.1,19.1,0,0,0-3.36-11,16.1,16.1,0,0,0,.44-3.78c0-5.83-3.07-10.84-7.43-12.94-4.62,28.8,8.76,41.89-11.36,59a24.72,24.72,0,0,0,6.74.94c11.46,0,20.74-7.79,20.74-17.4A16,16,0,0,0,355.14,452.84Z"
          />
          <polygon
            class="cls-7"
            points="365.05 509.22 364.57 451.41 387.7 437.19 397.58 438.08 435.34 472.77 435.94 546.3 422.36 539.19 422.36 539.22 365.05 509.22"
          />
          <polygon
            class="cls-273"
            points="435.34 472.84 444.84 467.11 444.84 466.91 445.65 466.62 484.44 454.5 486.42 452.54 508.46 455.17 507.97 502.88 452.68 536.26 452.68 536.2 435.94 546.3 435.34 472.84"
          />
          <polygon
            class="cls-144"
            points="435.96 548.2 435.9 540.35 365 503.29 365.03 511.1 435.96 548.2"
          />
          <polygon
            class="cls-274"
            points="435.96 548.2 435.9 540.35 508.03 496.85 507.97 504.76 435.96 548.2"
          />
          <polygon
            class="cls-275"
            points="391.91 533.92 424.51 534.62 406.8 524.93 391.91 533.92"
          />
          <polygon
            class="cls-276"
            points="391.91 533.92 391.85 526.53 406.74 517.54 406.8 524.93 391.91 533.92"
          />
          <line class="cls-277" x1="445.91" y1="407" x2="446.48" y2="444.3" />
          <polygon
            class="cls-276"
            points="454.21 515.22 466.67 507.69 466.51 487.96 454.05 495.48 454.21 515.22"
          />
          <polygon
            class="cls-107"
            points="454.21 515.22 454.05 495.48 464.33 489.27 464.5 509 454.21 515.22"
          />
          <polygon
            class="cls-276"
            points="454.19 512.43 454.07 497.54 461.83 492.85 461.95 507.74 454.19 512.43"
          />
          <polygon
            class="cls-276"
            points="481.63 499.18 494.1 491.66 493.93 471.93 481.47 479.45 481.63 499.18"
          />
          <polygon
            class="cls-107"
            points="481.63 499.18 481.47 479.45 491.76 473.24 491.92 492.97 481.63 499.18"
          />
          <polygon
            class="cls-276"
            points="481.61 496.39 481.49 481.5 489.25 476.81 489.38 491.71 481.61 496.39"
          />
          <polygon
            class="cls-276"
            points="381.83 496.33 369.25 489.74 369.09 470.01 381.67 476.6 381.83 496.33"
          />
          <polygon
            class="cls-107"
            points="381.83 496.33 381.67 476.6 371.29 471.16 371.45 490.89 381.83 496.33"
          />
          <polygon
            class="cls-276"
            points="381.81 493.54 381.69 478.65 373.85 474.54 373.97 489.44 381.81 493.54"
          />
          <polygon
            class="cls-276"
            points="425.32 516.96 412.74 510.37 412.58 490.64 425.16 497.23 425.32 516.96"
          />
          <polygon
            class="cls-107"
            points="425.32 516.96 425.16 497.23 414.78 491.79 414.94 511.52 425.32 516.96"
          />
          <polygon
            class="cls-276"
            points="425.3 514.17 425.18 499.28 417.34 495.17 417.46 510.07 425.3 514.17"
          />
          <polygon
            class="cls-276"
            points="388.45 478.37 388.77 517.27 403.39 524.93 403.39 524.89 406.88 526.72 406.56 487.81 388.45 478.37"
          />
          <polygon
            class="cls-107"
            points="393.78 519.89 403.39 524.93 403.39 524.89 406.88 526.72 406.56 487.81 393.46 480.98 393.78 519.89"
          />
          <polygon
            class="cls-276"
            points="405.36 499.94 396.69 495.4 396.61 486.08 405.28 490.62 405.36 499.94"
          />
          <path
            class="cls-276"
            d="M395.1,504h0a1.17,1.17,0,0,1-.63-.92l0-2.68c0-.33.28-.46.62-.29h0a1.17,1.17,0,0,1,.63.92l0,2.68C395.72,504,395.44,504.12,395.1,504Z"
          />
          <polygon
            class="cls-274"
            points="367.66 521.46 367.72 528.84 403.35 547.5 418.25 538.5 418.19 531.11 367.66 521.46"
          />
          <polygon
            class="cls-141"
            points="418.19 531.11 382.55 512.46 367.66 521.46 403.29 540.11 418.19 531.11"
          />
          <polygon
            class="cls-141"
            points="465.77 397.51 508.43 453.6 436.3 496.28 394.36 438.18 465.77 397.51"
          />
          <polygon
            class="cls-138"
            points="394.36 438.18 353.61 456.46 371.77 444.14 438.9 407.63 465.77 397.51 394.36 438.18"
          />
          <path
            class="cls-155"
            d="M508.43,453.6,436.3,496.28l-41.94-58.1-.64,2.66,41.64,56.71a1.69,1.69,0,0,0,2.22.45L507,457.22a2.87,2.87,0,0,0,1.42-2.51Z"
          />
          <path
            class="cls-155"
            d="M394.38,440.53l-39,17.05a1.23,1.23,0,0,1-1.73-1.12h0l40.75-18.28Z"
          />
          <ellipse
            class="cls-155"
            cx="457.28"
            cy="456.3"
            rx="6.75"
            ry="8.27"
            transform="translate(-148.94 679.47) rotate(-65.15)"
          />
          <path
            class="cls-278"
            d="M452.33,391.86C445,396.1,439,406.41,439,414.9s5.95,11.93,13.3,7.69,13.31-14.55,13.32-23S459.68,387.63,452.33,391.86Zm2,11.24a6.64,6.64,0,0,1,1-4.89,6.5,6.5,0,0,1,3.86-3.29C459.88,397.69,456.32,402.87,454.32,403.1Z"
          />
          <polygon
            class="cls-278"
            points="456.91 458.29 457.28 404.37 447.35 410.09 447.33 448.25 451.22 454.64 456.91 458.29"
          />
          <polygon
            class="cls-279"
            points="461.88 455.97 461.91 406.26 451.98 411.98 451.95 450.14 456.91 458.29 461.88 455.97"
          />
          <path
            class="cls-279"
            d="M457,393.76c-7.35,4.24-13.31,14.55-13.32,23s5.95,11.93,13.3,7.69,13.32-14.55,13.32-23S464.3,389.52,457,393.76Zm3.68,7.55c-1.48,2.56-3.88,3.95-5.36,3.09s-1.47-3.62,0-6.19,3.88-3.95,5.36-3.09S462.11,398.74,460.63,401.31Z"
          />
          <path
            class="cls-280"
            d="M461.67,396.74a7.05,7.05,0,0,1-1,4.57c-1.48,2.56-3.88,3.95-5.36,3.09-1-.56-1.3-1.94-1-3.54-3.46,3.62-5.9,8.94-5.91,13.52,0,6,4.23,8.48,9.45,5.46s9.46-10.33,9.47-16.36C467.28,399,465,396.53,461.67,396.74Z"
          />
          <path
            class="cls-281"
            d="M451.56,404.36a19.8,19.8,0,0,0-3.2,10c0,6,4.23,8.48,9.45,5.46s9.46-10.33,9.47-16.36a8.49,8.49,0,0,0-1.09-4.47"
          />
          <path
            class="cls-282"
            d="M447.33,395.25a21.34,21.34,0,0,1-4.4-12.29c0-7.17,5-10.69,11.23-7.86S465.4,386,465.4,393.18c0,6.93-4.71,10.44-10.63,8.11"
          />
          <line
            class="cls-281"
            x1="459.23"
            y1="419.35"
            x2="459.79"
            y2="456.65"
          />
          <path
            class="cls-155"
            d="M394.36,438.79a.61.61,0,0,1-.3-1.14l41-23.34a.61.61,0,1,1,.6,1.06l-41,23.34A.54.54,0,0,1,394.36,438.79Z"
          />
          <path
            class="cls-275"
            d="M548.2,498.85l-19.63-10.07L441.42,541l34.31.71L514.1,519a27.42,27.42,0,0,0,4.81.42c8.31,0,15.06-3.62,15.06-8.08a5.17,5.17,0,0,0-1.32-3.31Z"
          />
          <ellipse
            class="cls-154"
            cx="527.56"
            cy="494.26"
            rx="16.75"
            ry="8.99"
          />
          <path
            class="cls-155"
            d="M527.56,495.31h0a1.64,1.64,0,0,1-1.63-1.63v-23a1.64,1.64,0,0,1,1.63-1.63h0a1.63,1.63,0,0,1,1.63,1.63v23A1.63,1.63,0,0,1,527.56,495.31Z"
          />
          <path
            class="cls-103"
            d="M542.35,448.33a19.67,19.67,0,0,0,.18-2.68,19.1,19.1,0,0,0-3.36-11,16.1,16.1,0,0,0,.45-3.78c0-7.74-5.4-14-12.06-14s-12,6.27-12,14a16.1,16.1,0,0,0,.45,3.78,19.1,19.1,0,0,0-3.36,11,19.67,19.67,0,0,0,.18,2.68,16,16,0,0,0-6,12.19c0,9.61,9.29,17.4,20.74,17.4s20.74-7.79,20.74-17.4A16,16,0,0,0,542.35,448.33Z"
          />
          <path
            class="cls-156"
            d="M542.35,448.33a19.67,19.67,0,0,0,.18-2.68,19.1,19.1,0,0,0-3.36-11,16.1,16.1,0,0,0,.45-3.78c0-5.84-3.07-10.84-7.44-12.94-4.62,28.8,8.76,41.89-11.35,59a24.21,24.21,0,0,0,6.73.95c11.46,0,20.74-7.79,20.74-17.4A16,16,0,0,0,542.35,448.33Z"
          />
          <ellipse
            class="cls-154"
            cx="503.73"
            cy="530.53"
            rx="16.75"
            ry="8.99"
          />
          <path
            class="cls-155"
            d="M503.73,531.58h0a1.65,1.65,0,0,1-1.63-1.64v-23a1.64,1.64,0,0,1,1.63-1.63h0a1.64,1.64,0,0,1,1.63,1.63v23A1.64,1.64,0,0,1,503.73,531.58Z"
          />
          <path
            class="cls-103"
            d="M518.52,484.6a19.82,19.82,0,0,0,.18-2.69,19.09,19.09,0,0,0-3.36-11,16.17,16.17,0,0,0,.45-3.78c0-7.74-5.4-14-12.06-14s-12.05,6.27-12.05,14a16.17,16.17,0,0,0,.45,3.78,19.09,19.09,0,0,0-3.36,11,19.82,19.82,0,0,0,.18,2.69,16,16,0,0,0-6,12.19c0,9.61,9.29,17.39,20.74,17.39s20.74-7.78,20.74-17.39A16,16,0,0,0,518.52,484.6Z"
          />
          <path
            class="cls-156"
            d="M518.52,484.6a19.82,19.82,0,0,0,.18-2.69,19.09,19.09,0,0,0-3.36-11,16.17,16.17,0,0,0,.45-3.78c0-5.84-3.07-10.84-7.44-13-4.62,28.81,8.76,41.9-11.35,59a24.21,24.21,0,0,0,6.73.94c11.46,0,20.74-7.78,20.74-17.39A16,16,0,0,0,518.52,484.6Z"
          />
          <g class="cls-283">
            <path
              class="cls-284"
              d="M374.74,538.3c-6.44-3.6-17-3.76-23.55-.37s-6.67,9.07-.23,12.66,16.87,3.77,23.56.44C381.87,547.37,381.18,541.89,374.74,538.3Z"
            />
          </g>
          <path
            class="cls-285"
            d="M369.43,537.51c-6.12-3.42-16.13-3.57-22.37-.35s-6.33,8.61-.21,12,16,3.58,22.37.42C376.2,546.12,375.54,540.92,369.43,537.51Z"
          />
          <path
            class="cls-133"
            d="M369.21,534c-6.11-3.41-16.13-3.57-22.36-.34s-6.33,8.61-.22,12,16,3.58,22.37.42C376,542.58,375.33,537.38,369.21,534Z"
          />
          <path
            class="cls-107"
            d="M353,542.76a1.56,1.56,0,0,1-1.14-.5,1.53,1.53,0,0,1-.32-1.49l1.76-5.63a1.53,1.53,0,1,1,2.92.91l-1,3.14L367,536.72a1.53,1.53,0,0,1,.63,3l-14.27,3A1.63,1.63,0,0,1,353,542.76Z"
          />
          <g class="cls-286">
            <path
              class="cls-287"
              d="M146,524.74a.45.45,0,0,0,.1.14c.48.55,1.77.85,3.52.41,0,0,1-.25,2.53-.59l.35.2a18.72,18.72,0,0,0,19.93-1.54l.26.11.8.32.26.11s-8.61,6.75,2.45,10.73a17,17,0,0,0,6.31,1,20.29,20.29,0,0,1-1,3.47,1,1,0,0,0,.16,1.12,2.51,2.51,0,0,0,1.8.6,4.2,4.2,0,0,0,3.57-1.68,13.12,13.12,0,0,0,1.76-4.82,25.78,25.78,0,0,0,6.05-3.37,1.82,1.82,0,0,0,.29-2.91,18.67,18.67,0,0,0-2.9-1.86,40.45,40.45,0,0,0-10-4.15c-.64-.17-1.28-.34-1.92-.49l-.48-.28a54.16,54.16,0,0,0-10.48-4.37,37.17,37.17,0,0,0-12.18-3.66,2.5,2.5,0,0,0-1.43.29c-2.07,1.14-8,4.76-6.48,8.4l-.93.27C146.37,522.81,145.65,524.15,146,524.74Zm5.7-4.44c0,.21,0,.43,0,.64A2,2,0,0,1,151.7,520.3Z"
            />
          </g>
          <path
            class="cls-144"
            d="M184.75,537.91c2.24-3.85,2.47-7.5.69-10.84-1.42-2.66-4.11-5.13-8-7.34a59.23,59.23,0,0,0-14.58-5.5l-.59.53A61.44,61.44,0,0,1,178.35,525c4.46,4.08.81,12.77.77,12.86a1,1,0,0,0,.16,1.14,2.6,2.6,0,0,0,1.83.61A4.3,4.3,0,0,0,184.75,537.91Z"
          />
          <path
            class="cls-144"
            d="M179.88,520.51a66.27,66.27,0,0,0-34.47.16c-2,.63-2.72,2-2.37,2.6a.71.71,0,0,0,.1.14c.49.56,1.81.86,3.58.42.15,0,14.9-3.77,23.39-2.55a111.71,111.71,0,0,1,22.57,5.4l-.14-.23S188.32,522.84,179.88,520.51Z"
          />
          <path
            class="cls-144"
            d="M149.32,524.69a19,19,0,0,0,20.26-1.56l.26.11.82.33.26.1s-8.75,6.87,2.5,10.92c8.31,3,15.65-1.3,18.92-3.74a2.29,2.29,0,0,0,.86-1.27h0l.33-1.21-.41.15a1.58,1.58,0,0,0-.48-.62c-2.38-1.89-8-5.08-19.5-6.29l-.07,0c-6.07-6.8-16.2-8.43-19-8.75a2.4,2.4,0,0,0-1.45.29C149.9,514.59,140.79,520.22,149.32,524.69Zm23.4.53,1.38-1a2.54,2.54,0,0,1,1.72-.44c6.88.88,10.8,2.75,12.86,4.14,1.16.78.9,2.51-.51,3.26-2.95,1.57-8.16,3.5-13.64,1.53C166.16,529.74,172.72,525.22,172.72,525.22ZM153,515.11a2.42,2.42,0,0,1,1.56-.35c2.08.26,7.82,1.25,12.2,4.67a1.91,1.91,0,0,1-.53,3.15h0s-7.23,4.24-14.86.76C145.05,520.46,150.79,516.42,153,515.11Z"
          />
          <g class="cls-288">
            <path
              class="cls-169"
              d="M169.73,519.22a7.88,7.88,0,0,1-6.76,5.06c-5.34.56-12.4.1-13.62-2.92s-.19-7.41,2.57-8.57S167.16,514.14,169.73,519.22Z"
            />
          </g>
          <g class="cls-288">
            <path
              class="cls-169"
              d="M191,527.81a7.88,7.88,0,0,1-6.76,5.06c-5.34.56-12.4.1-13.62-2.92s-.19-7.41,2.58-8.57S188.39,522.73,191,527.81Z"
            />
          </g>
          <path
            class="cls-141"
            d="M174.87,531.49c-8.37-3-1.8-7.53-1.8-7.53l1.37-1a2.56,2.56,0,0,1,1.72-.44c6.88.88,10.8,2.75,12.86,4.13,1.17.79.9,2.51-.51,3.26C185.57,531.53,180.35,533.46,174.87,531.49Zm-23.17-9.41c-6.31-2.88-.56-6.92,1.62-8.24a2.5,2.5,0,0,1,1.56-.35c2.09.26,7.82,1.26,12.2,4.67a1.9,1.9,0,0,1-.53,3.15h0S159.33,525.56,151.7,522.08Zm21.78-1.74-.07,0c-6.07-6.8-16.2-8.42-19-8.75a2.49,2.49,0,0,0-1.45.3c-2.69,1.47-11.81,7.09-3.28,11.56a19,19,0,0,0,20.26-1.55l.27.1.81.33.27.11s-8.76,6.87,2.49,10.92c8.31,3,15.65-1.3,18.92-3.75a1.85,1.85,0,0,0,.3-3C190.6,524.73,185,521.55,173.48,520.34Z"
          />
          <path
            class="cls-107"
            d="M189.79,529.69l0,0a.08.08,0,0,1,0-.12s1-1.19.59-2.12c-.49-1.09-3.52-2.35-4.44-2.71a.1.1,0,0,1,0-.11.09.09,0,0,1,.11-.05c.93.37,4,1.66,4.53,2.8s-.57,2.25-.62,2.3A.07.07,0,0,1,189.79,529.69Z"
          />
          <path
            class="cls-107"
            d="M168,520.79s0,0,0,0a.07.07,0,0,1,0-.11s1-1.2.59-2.13-3.52-2.35-4.44-2.71a.08.08,0,0,1,0-.11.08.08,0,0,1,.1-.05c1.2.47,4,1.69,4.53,2.8s-.57,2.25-.62,2.3A.07.07,0,0,1,168,520.79Z"
          />
          <path
            class="cls-107"
            d="M185,530.26h0a.28.28,0,0,0,.19-.3l-1-4a.22.22,0,0,0-.3-.13h0a.27.27,0,0,0-.2.3l1,4A.24.24,0,0,0,185,530.26Z"
          />
          <path
            class="cls-107"
            d="M183.38,530.35h0a.11.11,0,0,0,.09-.14L182.39,526a.11.11,0,0,0-.15-.07h0a.13.13,0,0,0-.09.15l1.08,4.18A.11.11,0,0,0,183.38,530.35Z"
          />
          <path
            class="cls-107"
            d="M163.51,521.74h0a.27.27,0,0,0,.2-.3l-1-4a.24.24,0,0,0-.31-.14h0a.28.28,0,0,0-.19.3l1,4A.22.22,0,0,0,163.51,521.74Z"
          />
          <path
            class="cls-107"
            d="M161.9,521.84h0a.12.12,0,0,0,.09-.14l-1.08-4.19a.12.12,0,0,0-.15-.06h0a.11.11,0,0,0-.09.14l1.08,4.18A.11.11,0,0,0,161.9,521.84Z"
          />
          <path
            class="cls-107"
            d="M394,522.18l-1,.57,1.57.79-.66.39-1.57-.8-1,.58,1.9,1-.67.4-2.54-1.3,4-2.28,2.5,1.24-.64.39Z"
          />
          <path
            class="cls-107"
            d="M401.07,528.64l-.65.43L398.28,528l3.84-2.46.65.33-3.17,2Z"
          />
          <path
            class="cls-107"
            d="M399.49,524.1,394,525.77l.7.36,1.71.87.71.36Zm-2.94,2.26-.78-.4-.31-.16,2.5-.75-1.1,1.47Z"
          />
          <path
            class="cls-107"
            d="M388.82,523.08l.73-1.42a2.56,2.56,0,0,0,1.86-.23c1.15-.65-.07-1.26-.07-1.26l-1.17-.58a.12.12,0,0,0-.1,0l-.64.36h0l-1,.53h0l-2.32,1.27s0,0,0,0l.6.3a.12.12,0,0,0,.1,0l1.61-.89.25.13L388,522.7s0,0,0,0l.7.36S388.81,523.11,388.82,523.08Zm1-2-.62-.32.88-.49.58.29s.36.17.25.36a.75.75,0,0,1-.56.26A1.25,1.25,0,0,1,389.8,521.1Z"
          />
          <path
            class="cls-107"
            d="M384.39,522.59c.05,0,.08.06.07.1s0,.07-.09.11a.53.53,0,0,1-.2.05.38.38,0,0,1-.19,0,.1.1,0,0,1-.07-.1.17.17,0,0,1,.09-.1.47.47,0,0,1,.2-.06A.36.36,0,0,1,384.39,522.59Zm-3.26,1.89-.21-.11,2.39-1.3.2.11Z"
          />
          <path
            class="cls-107"
            d="M384.12,523.89h0a1.78,1.78,0,0,1,.56,0,1.21,1.21,0,0,1,.48.12.72.72,0,0,1,.27.22.24.24,0,0,1,0,.22.67.67,0,0,1-.2.23,2.38,2.38,0,0,1-.37.24l-1.44.81-.21-.11,1.44-.8a2.27,2.27,0,0,0,.28-.18.43.43,0,0,0,.18-.17.15.15,0,0,0,0-.17q0-.09-.21-.18a1,1,0,0,0-.41-.11,1.53,1.53,0,0,0-.43,0,2.3,2.3,0,0,0-.42.14l-.38.19-1.19.65-.2-.11,2.38-1.31.2.11Z"
          />
          <path
            class="cls-107"
            d="M384.37,526.19l-.21-.11,2.15-1.22-.24-.12.21-.12.24.12,1-.59.3-.16a2.3,2.3,0,0,1,.34-.12,1.42,1.42,0,0,1,.41,0,1.13,1.13,0,0,1,.34.1.4.4,0,0,1,.14.11l-.2.12-.06-.06-.08,0a.6.6,0,0,0-.27-.07,1.26,1.26,0,0,0-.27,0l-.25.1-.24.13-1,.56.54.28-.21.12-.54-.28Z"
          />
          <path
            class="cls-107"
            d="M388.58,525.75a1,1,0,0,1,.35.28.54.54,0,0,1,.1.34.6.6,0,0,1-.14.35,1.31,1.31,0,0,1-.39.33,2.44,2.44,0,0,1-.57.24,3.44,3.44,0,0,1-.63.1,2.56,2.56,0,0,1-.62,0,1.78,1.78,0,0,1-.55-.18.9.9,0,0,1-.34-.29.51.51,0,0,1-.08-.34.7.7,0,0,1,.15-.35,1.56,1.56,0,0,1,.38-.32,2.41,2.41,0,0,1,.57-.22,3.22,3.22,0,0,1,.62-.11,2.44,2.44,0,0,1,.61,0A1.8,1.8,0,0,1,388.58,525.75Zm-.23.11a1.81,1.81,0,0,0-.43-.14,2.79,2.79,0,0,0-.5,0,4.17,4.17,0,0,0-.51.09,2.76,2.76,0,0,0-.46.19,1.16,1.16,0,0,0-.31.26.52.52,0,0,0-.14.29.45.45,0,0,0,.06.27.75.75,0,0,0,.28.24,1.52,1.52,0,0,0,.44.15,2.24,2.24,0,0,0,.52,0,2.36,2.36,0,0,0,.52-.09,1.71,1.71,0,0,0,.46-.19,1.19,1.19,0,0,0,.33-.27.48.48,0,0,0,.12-.3.41.41,0,0,0-.08-.27A.93.93,0,0,0,388.35,525.86Z"
          />
          <path
            class="cls-107"
            d="M391.94,525.57l.21.11L390,527h0a2,2,0,0,1,.69,0,1.7,1.7,0,0,1,.59.18.89.89,0,0,1,.36.28.48.48,0,0,1,.09.32.75.75,0,0,1-.16.34,1.36,1.36,0,0,1-.4.33,2.5,2.5,0,0,1-.55.25,2.55,2.55,0,0,1-.61.13,2.49,2.49,0,0,1-.61,0,1.91,1.91,0,0,1-.54-.18.86.86,0,0,1-.22-.15.62.62,0,0,1-.14-.18.45.45,0,0,1-.05-.19.35.35,0,0,1,.05-.2h0l-.43.25-.21-.11Zm-2.87,2.9a1.26,1.26,0,0,0,.44.14,2.09,2.09,0,0,0,.5,0,2.78,2.78,0,0,0,.5-.11,2,2,0,0,0,.44-.2,1,1,0,0,0,.3-.26.5.5,0,0,0,.14-.28.45.45,0,0,0-.06-.27.6.6,0,0,0-.26-.23,1.41,1.41,0,0,0-.44-.14,1.93,1.93,0,0,0-.48,0,2.73,2.73,0,0,0-.48.1,2.28,2.28,0,0,0-.45.2,1.31,1.31,0,0,0-.33.26.67.67,0,0,0-.15.29.37.37,0,0,0,0,.27A.72.72,0,0,0,389.07,528.47Z"
          />
          <path
            class="cls-107"
            d="M396.15,529.75l.27.14-.2,1,1.63-.22.27.14-1.9.25L396,532.3l-.27-.14.24-1.11-1.86.26-.26-.14,2.13-.3Z"
          />
          <polygon
            class="cls-107"
            points="391.99 530.52 391.98 530.53 391.98 530.53 391.99 530.52"
          />
          <polygon
            class="cls-107"
            points="393.66 529.47 392.84 529.99 392.19 530.55 393.37 530.71 395.02 529.65 393.66 529.47"
          />
          <polygon
            class="cls-107"
            points="392.61 529.99 392.37 529.76 391.04 529.52 391.98 530.53 391.98 530.53 392.61 529.99"
          />
          <polygon
            class="cls-107"
            points="393.65 529.34 394.99 529.53 393.99 528.6 392.72 528.35 393.65 529.34"
          />
          <polygon
            class="cls-107"
            points="392.54 528.41 390.97 529.38 392.35 529.63 393.18 529.11 392.54 528.41"
          />
          <ellipse
            class="cls-154"
            cx="334.62"
            cy="523.76"
            rx="2.55"
            ry="16.73"
            transform="translate(-281.27 607.28) rotate(-65.15)"
          />
          <g class="cls-2">
            <path
              class="cls-289"
              d="M324.89,519.79h0a.24.24,0,0,1-.08.09l1.49-.87a.12.12,0,0,0,.06-.06l0,0h0v0h0v-.06h0v0h0l-1.49.87A.32.32,0,0,1,324.89,519.79Z"
            />
            <path
              class="cls-289"
              d="M326.52,479.6h0v-.06h0v-.12h0v-.1l0,0,0,0,0,0,0,0v0h0v0h0v0h0l0,0h-.06l-1-.59h-.24l0,0-1.49.86a.25.25,0,0,1,.12,0h0a.3.3,0,0,1,.15,0l1,.58a.53.53,0,0,1,.14.12h0a.61.61,0,0,1,.12.16h0a.75.75,0,0,1,.08.18h0a.57.57,0,0,1,0,.18l-.11,39.16,1.49-.87.11-39.16Z"
            />
            <path
              class="cls-107"
              d="M324.66,479.85a.82.82,0,0,1,.37.64l-.11,39.16c0,.23-.17.32-.37.2l-1-.58a.82.82,0,0,1-.37-.64l.12-39.16c0-.23.17-.32.37-.2Z"
            />
          </g>
          <g class="cls-2">
            <path
              class="cls-290"
              d="M351,503.23h0v-.06h0v-.06h0V503h0v-.08h0l0,0,0,0v0h0v0h0v0h-.09l-24.2-13.89h-.24l-.69.4a.16.16,0,0,1,.1,0h0a.3.3,0,0,1,.14.05l24.19,13.88a.72.72,0,0,1,.24.25h0a.56.56,0,0,1,.07.16h0a.55.55,0,0,1,0,.17l0,16.68a.32.32,0,0,1,0,.14h0a.18.18,0,0,1-.07.08l.7-.4.06-.06v0h0V520h0v0h0v0h0l.05-16.68Z"
            />
            <path
              class="cls-291"
              d="M349.93,503.06a.75.75,0,0,1,.34.59l0,16.68c0,.22-.15.3-.34.19l-24.19-13.88a.74.74,0,0,1-.34-.58l0-16.68c0-.22.16-.31.35-.2Z"
            />
          </g>
          <path
            class="cls-274"
            d="M330.5,491.61a.26.26,0,0,1-.26-.27V489a.26.26,0,0,1,.26-.27.27.27,0,0,1,.26.27v2.37A.27.27,0,0,1,330.5,491.61Z"
          />
          <path
            class="cls-274"
            d="M344.51,499.56a.26.26,0,0,1-.26-.26v-2.38a.27.27,0,0,1,.53,0v2.38A.27.27,0,0,1,344.51,499.56Z"
          />
          <g class="cls-2">
            <path
              class="cls-289"
              d="M354.13,500.65v0h0v-.12h0v-.06h0v-.1h0l0-.05,0,0,0,0v0h0v0h0v0h0l0,0h-.07l-31.87-18.41h-.27l-1.48.87a.2.2,0,0,1,.11,0h0a.3.3,0,0,1,.14.05l31.88,18.4a.53.53,0,0,1,.14.12h0a1,1,0,0,1,.12.16h0a1.42,1.42,0,0,1,.08.18h0a1.1,1.1,0,0,1,0,.18v1.16a.33.33,0,0,1,0,.15h0a.18.18,0,0,1-.08.09h0l1.49-.86.07-.06v0h0v-.1h0v0h0v-1.18Z"
            />
            <path
              class="cls-107"
              d="M352.28,500.89a.8.8,0,0,1,.36.64v1.16c0,.24-.16.34-.37.22L320.39,484.5a.81.81,0,0,1-.37-.64V482.7a.23.23,0,0,1,.37-.21Z"
            />
          </g>
          <path
            class="cls-107"
            d="M330.75,498.63a5.67,5.67,0,0,1,.89.64,5.12,5.12,0,0,1,.78.84l-.41,1a4.64,4.64,0,0,0-1.27-1.2.9.9,0,0,0-.57-.18c-.12,0-.18.13-.18.29a.78.78,0,0,0,.21.48,6.69,6.69,0,0,0,.68.63c.35.3.64.57.88.81a3.76,3.76,0,0,1,.59.88,2.46,2.46,0,0,1,.25,1.12,1.36,1.36,0,0,1-.23.83.83.83,0,0,1-.7.28,2.34,2.34,0,0,1-1.12-.39,6.6,6.6,0,0,1-1.09-.8,5.27,5.27,0,0,1-.85-1l.43-1a5.63,5.63,0,0,0,.72.84,4.78,4.78,0,0,0,.8.63c.5.28.75.27.75-.05a.76.76,0,0,0-.2-.5c-.15-.16-.38-.38-.7-.66a10.27,10.27,0,0,1-.87-.81,3.72,3.72,0,0,1-.6-.87,2.59,2.59,0,0,1-.24-1.12,1.32,1.32,0,0,1,.23-.85.83.83,0,0,1,.69-.29A2.53,2.53,0,0,1,330.75,498.63Z"
          />
          <path
            class="cls-107"
            d="M338.11,504.37a4.88,4.88,0,0,1,.32,1.77,2.51,2.51,0,0,1-.33,1.39,1.2,1.2,0,0,1-.92.57,2.24,2.24,0,0,1-1.32-.36,4.64,4.64,0,0,1-1.32-1.16,5.79,5.79,0,0,1-.91-1.63,5,5,0,0,1-.33-1.77,2.55,2.55,0,0,1,.34-1.39,1.25,1.25,0,0,1,.92-.57,2.34,2.34,0,0,1,1.32.37,4.76,4.76,0,0,1,1.32,1.15A6.36,6.36,0,0,1,338.11,504.37Zm-1.16,1.8a1.6,1.6,0,0,0,.16-.79,2.9,2.9,0,0,0-.16-1,2.82,2.82,0,0,0-.45-.86,2,2,0,0,0-.63-.58,1,1,0,0,0-.63-.15.61.61,0,0,0-.45.34,1.56,1.56,0,0,0-.17.78,3.27,3.27,0,0,0,.61,1.84,2.24,2.24,0,0,0,.63.57,1,1,0,0,0,.64.16.63.63,0,0,0,.45-.34"
          />
          <polygon
            class="cls-107"
            points="340.77 504.53 340.76 509.12 342.96 510.39 342.96 511.72 339.44 509.69 339.46 503.77 340.77 504.53"
          />
          <path
            class="cls-107"
            d="M348.26,510.25a5,5,0,0,1,.32,1.75,2.45,2.45,0,0,1-.33,1.38,1.08,1.08,0,0,1-.91.5,2.53,2.53,0,0,1-1.35-.41l-2.18-1.26v-5.92l2.19,1.26a5.18,5.18,0,0,1,1.34,1.14A5.45,5.45,0,0,1,348.26,510.25Zm-1.36,2a1.13,1.13,0,0,0,.36-1,2.81,2.81,0,0,0-.36-1.4,2.49,2.49,0,0,0-.95-1l-.82-.47v3.23l.82.48a1,1,0,0,0,1,.13"
          />
          <ellipse
            class="cls-275"
            cx="235.42"
            cy="501.05"
            rx="13.46"
            ry="7.61"
          />
          <path
            class="cls-285"
            d="M244.8,497.72a22.52,22.52,0,0,1-.33,4.75c-.43,1.71-1.91,3.33-4.42,4.52-5.5,2.62-13.83,2.19-18.59-.95-2.23-1.46-3.43-2.94-3.46-4.8-.07-1-.1-3.81-.1-3.81.17-.61.88,0,1.33-.54a8.87,8.87,0,0,1,3.73-3c5.51-2.62,13.83-2.2,18.6.94C243.57,496.16,244.66,496.12,244.8,497.72Z"
          />
          <ellipse
            class="cls-107"
            cx="231.36"
            cy="497.72"
            rx="13.46"
            ry="7.61"
          />
          <ellipse
            class="cls-133"
            cx="231.36"
            cy="497.3"
            rx="13.46"
            ry="7.61"
          />
          <ellipse class="cls-107" cx="231.35" cy="497.1" rx="9.41" ry="5.32" />
          <path
            class="cls-292"
            d="M225.35,493.66c4-1.88,9.93-1.56,13.24.7a4.42,4.42,0,0,1,2.15,3.06c.14-1.3-.56-2.63-2.15-3.71-3.31-2.27-9.24-2.58-13.24-.71-2.41,1.13-3.57,2.79-3.39,4.43C222.11,496,223.26,494.63,225.35,493.66Z"
          />
          <path
            class="cls-133"
            d="M227.19,498.85a2.6,2.6,0,0,1-1-1.72L228,497a1.94,1.94,0,0,0,.88,1.38,1.58,1.58,0,0,0,1.69.18c1.2-.59-1.69-2.5.41-3.54a4.5,4.5,0,0,1,3.83,0l1.2-.6,1.06.7-1.18.59a1.72,1.72,0,0,1,.66,1.56l-1.79-.05a1.19,1.19,0,0,0-.6-1.08,1.47,1.47,0,0,0-1.56-.17c-1.11.55,1.85,2.42-.38,3.53a4.66,4.66,0,0,1-4,0l-1.22.6-1-.7Z"
          />
          <ellipse class="cls-293" cx="231.35" cy="497.1" rx="9.41" ry="5.32" />
          <line
            class="cls-294"
            x1="231.55"
            y1="505.47"
            x2="231.59"
            y2="508.7"
          />
          <line
            class="cls-294"
            x1="235.01"
            y1="505.23"
            x2="235.03"
            y2="508.38"
          />
          <line
            class="cls-294"
            x1="238.3"
            y1="504.43"
            x2="238.32"
            y2="507.58"
          />
          <line
            class="cls-294"
            x1="241.26"
            y1="503.09"
            x2="241.27"
            y2="505.99"
          />
          <line class="cls-294" x1="243.67" y1="501.05" x2="243.6" y2="504" />
          <line
            class="cls-294"
            x1="227.93"
            y1="505.23"
            x2="227.92"
            y2="508.38"
          />
          <line
            class="cls-294"
            x1="224.64"
            y1="504.43"
            x2="224.63"
            y2="507.58"
          />
          <line
            class="cls-294"
            x1="221.69"
            y1="503.09"
            x2="221.68"
            y2="505.99"
          />
          <line class="cls-294" x1="219.27" y1="501.05" x2="219.34" y2="504" />
          <path
            class="cls-285"
            d="M245.42,491.86a23.29,23.29,0,0,1-.32,4.76c-.43,1.7-1.92,3.32-4.42,4.51-5.51,2.62-13.83,2.19-18.6-.94-2.22-1.47-3.43-2.95-3.46-4.81-.07-1-.1-3.81-.1-3.81.18-.61.89,0,1.34-.54a9,9,0,0,1,3.73-3c5.5-2.62,13.83-2.2,18.6.94C244.19,490.3,245.28,490.26,245.42,491.86Z"
          />
          <ellipse
            class="cls-107"
            cx="231.98"
            cy="491.86"
            rx="13.46"
            ry="7.61"
          />
          <ellipse
            class="cls-133"
            cx="231.98"
            cy="491.44"
            rx="13.46"
            ry="7.61"
          />
          <ellipse
            class="cls-107"
            cx="231.97"
            cy="491.24"
            rx="9.41"
            ry="5.32"
          />
          <path
            class="cls-292"
            d="M226,487.8c4-1.88,9.94-1.56,13.25.7a4.44,4.44,0,0,1,2.14,3.06c.14-1.3-.56-2.63-2.14-3.71-3.31-2.27-9.25-2.58-13.25-.71-2.41,1.13-3.57,2.8-3.39,4.43C222.73,490.16,223.88,488.77,226,487.8Z"
          />
          <path
            class="cls-133"
            d="M227.81,493a2.55,2.55,0,0,1-1-1.72l1.85-.11a2,2,0,0,0,.88,1.38,1.58,1.58,0,0,0,1.69.18c1.21-.59-1.69-2.49.42-3.54a4.48,4.48,0,0,1,3.82,0l1.21-.6,1.05.71-1.18.58a1.69,1.69,0,0,1,.66,1.56l-1.79,0a1.16,1.16,0,0,0-.6-1.08,1.45,1.45,0,0,0-1.55-.17c-1.12.55,1.85,2.42-.39,3.53a4.62,4.62,0,0,1-4,0l-1.21.6-1.06-.7Z"
          />
          <ellipse
            class="cls-293"
            cx="231.97"
            cy="491.24"
            rx="9.41"
            ry="5.32"
          />
          <line
            class="cls-294"
            x1="232.18"
            y1="499.61"
            x2="232.21"
            y2="502.85"
          />
          <line
            class="cls-294"
            x1="235.64"
            y1="499.37"
            x2="235.65"
            y2="502.52"
          />
          <line
            class="cls-294"
            x1="238.93"
            y1="498.57"
            x2="238.94"
            y2="501.72"
          />
          <line
            class="cls-294"
            x1="241.88"
            y1="497.23"
            x2="241.89"
            y2="500.13"
          />
          <line
            class="cls-294"
            x1="244.3"
            y1="495.19"
            x2="244.23"
            y2="498.14"
          />
          <line
            class="cls-294"
            x1="228.55"
            y1="499.37"
            x2="228.54"
            y2="502.52"
          />
          <line
            class="cls-294"
            x1="225.26"
            y1="498.57"
            x2="225.25"
            y2="501.72"
          />
          <line
            class="cls-294"
            x1="222.31"
            y1="497.23"
            x2="222.3"
            y2="500.13"
          />
          <line
            class="cls-294"
            x1="219.9"
            y1="495.19"
            x2="219.96"
            y2="498.14"
          />
          <ellipse
            class="cls-275"
            cx="204.14"
            cy="509.04"
            rx="13.46"
            ry="7.61"
          />
          <path
            class="cls-285"
            d="M213.52,505.71a22.62,22.62,0,0,1-.33,4.76c-.42,1.7-1.91,3.32-4.41,4.51-5.51,2.62-13.83,2.2-18.6-.94-2.22-1.46-3.43-2.95-3.46-4.81-.07-1-.1-3.8-.1-3.8.18-.62.89,0,1.34-.55a8.89,8.89,0,0,1,3.73-3c5.5-2.62,13.83-2.19,18.59.94C212.29,504.16,213.38,504.12,213.52,505.71Z"
          />
          <ellipse
            class="cls-107"
            cx="200.08"
            cy="505.71"
            rx="13.46"
            ry="7.61"
          />
          <ellipse
            class="cls-133"
            cx="200.08"
            cy="505.3"
            rx="13.46"
            ry="7.61"
          />
          <ellipse class="cls-107" cx="200.07" cy="505.1" rx="9.41" ry="5.32" />
          <path
            class="cls-292"
            d="M194.07,501.65c4-1.88,9.94-1.56,13.25.7a4.45,4.45,0,0,1,2.14,3.07c.14-1.3-.56-2.64-2.14-3.72-3.31-2.26-9.25-2.58-13.25-.7-2.41,1.13-3.57,2.79-3.39,4.43C190.83,504,192,502.63,194.07,501.65Z"
          />
          <path
            class="cls-133"
            d="M195.91,506.84a2.51,2.51,0,0,1-1-1.71l1.85-.11a2,2,0,0,0,.88,1.37,1.58,1.58,0,0,0,1.69.19c1.21-.6-1.69-2.5.42-3.55a4.52,4.52,0,0,1,3.82,0l1.21-.59,1.05.7-1.18.58a1.69,1.69,0,0,1,.66,1.56l-1.79-.05a1.17,1.17,0,0,0-.6-1.08,1.43,1.43,0,0,0-1.55-.16c-1.12.55,1.85,2.41-.39,3.52a4.62,4.62,0,0,1-4,0l-1.22.61-1-.71Z"
          />
          <ellipse class="cls-293" cx="200.07" cy="505.1" rx="9.41" ry="5.32" />
          <line
            class="cls-294"
            x1="200.28"
            y1="513.46"
            x2="200.31"
            y2="516.7"
          />
          <line
            class="cls-294"
            x1="203.74"
            y1="513.22"
            x2="203.75"
            y2="516.37"
          />
          <line
            class="cls-294"
            x1="207.03"
            y1="512.43"
            x2="207.04"
            y2="515.57"
          />
          <line
            class="cls-294"
            x1="209.98"
            y1="511.08"
            x2="209.99"
            y2="513.99"
          />
          <line
            class="cls-294"
            x1="212.4"
            y1="509.04"
            x2="212.33"
            y2="511.99"
          />
          <line
            class="cls-294"
            x1="196.65"
            y1="513.22"
            x2="196.64"
            y2="516.37"
          />
          <line
            class="cls-294"
            x1="193.36"
            y1="512.43"
            x2="193.35"
            y2="515.57"
          />
          <line
            class="cls-294"
            x1="190.41"
            y1="511.08"
            x2="190.4"
            y2="513.99"
          />
          <line
            class="cls-294"
            x1="187.99"
            y1="509.04"
            x2="188.06"
            y2="511.99"
          />
          <path
            class="cls-285"
            d="M214.14,499.85a23.24,23.24,0,0,1-.32,4.76c-.43,1.7-1.91,3.32-4.42,4.51-5.5,2.62-13.83,2.2-18.59-.94-2.23-1.46-3.43-2.95-3.46-4.81-.07-1-.1-3.8-.1-3.8.17-.61.88,0,1.33-.55a9,9,0,0,1,3.73-3c5.51-2.61,13.83-2.19,18.6,1C212.92,498.3,214,498.26,214.14,499.85Z"
          />
          <ellipse
            class="cls-107"
            cx="200.71"
            cy="499.85"
            rx="13.46"
            ry="7.61"
          />
          <ellipse
            class="cls-133"
            cx="200.71"
            cy="499.44"
            rx="13.46"
            ry="7.61"
          />
          <ellipse class="cls-107" cx="200.7" cy="499.24" rx="9.41" ry="5.32" />
          <path
            class="cls-292"
            d="M194.7,495.79c4-1.87,9.93-1.56,13.24.7a4.47,4.47,0,0,1,2.15,3.07c.14-1.3-.56-2.64-2.15-3.72-3.31-2.26-9.24-2.58-13.24-.7-2.41,1.13-3.57,2.79-3.4,4.43C191.46,498.15,192.61,496.77,194.7,495.79Z"
          />
          <path
            class="cls-133"
            d="M196.54,501a2.6,2.6,0,0,1-1-1.72l1.86-.11a1.94,1.94,0,0,0,.87,1.37,1.56,1.56,0,0,0,1.69.19c1.21-.6-1.69-2.5.42-3.54a4.5,4.5,0,0,1,3.83,0l1.2-.59,1.06.7-1.19.59a1.67,1.67,0,0,1,.66,1.55l-1.78-.05a1.2,1.2,0,0,0-.61-1.08,1.44,1.44,0,0,0-1.55-.16c-1.11.55,1.85,2.41-.38,3.52a4.62,4.62,0,0,1-4,0l-1.22.61-1.06-.7Z"
          />
          <ellipse class="cls-293" cx="200.7" cy="499.24" rx="9.41" ry="5.32" />
          <line class="cls-294" x1="200.9" y1="507.6" x2="200.93" y2="510.84" />
          <line
            class="cls-294"
            x1="204.36"
            y1="507.36"
            x2="204.38"
            y2="510.51"
          />
          <line
            class="cls-294"
            x1="207.65"
            y1="506.57"
            x2="207.67"
            y2="509.72"
          />
          <line
            class="cls-294"
            x1="210.6"
            y1="505.22"
            x2="210.62"
            y2="508.13"
          />
          <line
            class="cls-294"
            x1="213.02"
            y1="503.18"
            x2="212.95"
            y2="506.13"
          />
          <line
            class="cls-294"
            x1="197.28"
            y1="507.36"
            x2="197.26"
            y2="510.51"
          />
          <line
            class="cls-294"
            x1="193.99"
            y1="506.57"
            x2="193.97"
            y2="509.72"
          />
          <line
            class="cls-294"
            x1="191.04"
            y1="505.22"
            x2="191.02"
            y2="508.13"
          />
          <line
            class="cls-294"
            x1="188.62"
            y1="503.18"
            x2="188.69"
            y2="506.13"
          />
          <path
            class="cls-285"
            d="M245.9,486.51a23.19,23.19,0,0,1-.32,4.75c-.43,1.71-1.91,3.33-4.42,4.52-5.5,2.61-13.83,2.19-18.59-.95-2.23-1.46-3.43-2.94-3.46-4.8-.07-1-.1-3.81-.1-3.81.17-.61.88,0,1.33-.54a8.87,8.87,0,0,1,3.73-3c5.51-2.62,13.83-2.2,18.6.94C244.68,485,245.76,484.91,245.9,486.51Z"
          />
          <ellipse
            class="cls-107"
            cx="232.47"
            cy="486.51"
            rx="13.46"
            ry="7.61"
          />
          <ellipse
            class="cls-133"
            cx="232.47"
            cy="486.09"
            rx="13.46"
            ry="7.61"
          />
          <ellipse
            class="cls-107"
            cx="232.46"
            cy="485.89"
            rx="9.41"
            ry="5.32"
          />
          <path
            class="cls-292"
            d="M226.46,482.45c4-1.88,9.93-1.57,13.24.7a4.45,4.45,0,0,1,2.15,3.06c.14-1.3-.56-2.63-2.15-3.71-3.31-2.27-9.24-2.58-13.24-.71-2.41,1.13-3.57,2.79-3.4,4.43C223.22,484.8,224.37,483.42,226.46,482.45Z"
          />
          <path
            class="cls-133"
            d="M228.3,487.64a2.6,2.6,0,0,1-1-1.72l1.86-.11a2,2,0,0,0,.87,1.38,1.58,1.58,0,0,0,1.69.18c1.21-.59-1.69-2.5.42-3.54a4.5,4.5,0,0,1,3.83,0l1.2-.6,1.06.7-1.19.59a1.67,1.67,0,0,1,.66,1.56l-1.78-.05a1.18,1.18,0,0,0-.61-1.08,1.45,1.45,0,0,0-1.55-.17c-1.11.55,1.85,2.42-.38,3.53a4.66,4.66,0,0,1-3.95,0l-1.22.6-1.06-.7Z"
          />
          <ellipse
            class="cls-293"
            cx="232.46"
            cy="485.89"
            rx="9.41"
            ry="5.32"
          />
          <line
            class="cls-294"
            x1="232.66"
            y1="494.26"
            x2="232.69"
            y2="497.49"
          />
          <line
            class="cls-294"
            x1="236.12"
            y1="494.02"
            x2="236.14"
            y2="497.17"
          />
          <line
            class="cls-294"
            x1="239.41"
            y1="493.22"
            x2="239.43"
            y2="496.37"
          />
          <line
            class="cls-294"
            x1="242.37"
            y1="491.88"
            x2="242.38"
            y2="494.78"
          />
          <line
            class="cls-294"
            x1="244.78"
            y1="489.84"
            x2="244.71"
            y2="492.79"
          />
          <line
            class="cls-294"
            x1="229.04"
            y1="494.02"
            x2="229.02"
            y2="497.17"
          />
          <line
            class="cls-294"
            x1="225.75"
            y1="493.22"
            x2="225.73"
            y2="496.37"
          />
          <line
            class="cls-294"
            x1="222.8"
            y1="491.88"
            x2="222.78"
            y2="494.78"
          />
          <line
            class="cls-294"
            x1="220.38"
            y1="489.84"
            x2="220.45"
            y2="492.79"
          />
          <path
            class="cls-295"
            d="M267,475.42s6.42,10.63,7.1,17.35c0,0-1.54,3.74-2.88.51-3.28-7.88-5.59-14.65-8.07-17.28S267,475.42,267,475.42Z"
          />
          <path
            class="cls-275"
            d="M268.54,541.43c-4.15,2.63-11.51,3.26-16.43,1.4s-5.55-5.49-1.39-8.12,11.51-3.26,16.43-1.41S272.7,538.8,268.54,541.43Z"
          />
          <path
            class="cls-274"
            d="M256.23,540.78l-2.5-5.19a3.76,3.76,0,0,0-2.31-.77,1,1,0,0,0-.87.74l-.31.91c-.49,1.31-.44,1.52.09,2.1l3.19,3.44a2.07,2.07,0,0,0,2.23.48l.2-.09A1,1,0,0,0,256.23,540.78Z"
          />
          <path
            class="cls-107"
            d="M250.47,535.61c.05,1.25,3.18,1.47,3.13.22l-.16-4.07-3.13-.22Z"
          />
          <path
            class="cls-274"
            d="M267.94,535.62l-5.29-3.47a4.1,4.1,0,0,0-2.42,0c-.42.11-.49-.2-.46.19l-.33,1.29c-.41,1.1.64,2.09,1.9,2.5l4,1.4a3.46,3.46,0,0,0,2.82-.31l.18-.13C269,536.57,268.83,535.93,267.94,535.62Z"
          />
          <path
            class="cls-107"
            d="M259.78,532.61c.05,1.29,3.19,1.18,3.14-.12l-.15-4.19-3.14.11Z"
          />
          <path
            class="cls-296"
            d="M259.19,531.36c1.27.85,3.3.76,3.93-.31a207.07,207.07,0,0,0,1.22-39.34l-9.9-2.58C257,505,259.75,519.07,259.19,531.36Z"
          />
          <path
            class="cls-296"
            d="M249.74,533.24c.94,1.5,3.6,1.37,4.29.38l5.13-42.53-10.48-.42Z"
          />
          <path
            class="cls-297"
            d="M257,505.82l.86,3.92,2-11.91c-.48.16-.51-.43-1-.32Z"
          />
          <path
            class="cls-295"
            d="M250.58,480.36a30.62,30.62,0,0,0-5,8.09,5.55,5.55,0,0,0,.57,5.95c1.48,1.79,3.19,3.81,3.19,3.81l-1.76,1.72s-6.8-5.42-5.94-10.64l3.45-12.43Z"
          />
          <path
            class="cls-295"
            d="M247.75,498.73l.29-.28a1.43,1.43,0,0,1,2,.09l1.2,1.18a1.44,1.44,0,0,1,.11,2l-.28.28a1.43,1.43,0,0,1-2-.08l-1.2-1.19A1.43,1.43,0,0,1,247.75,498.73Z"
          />
          <path
            class="cls-279"
            d="M263.87,468.47c3.29,4.88,6.46,9.79,6.92,13.19-.71,2.88-1.56,1.33-3.53,2.1l-6.34-10.26,1.53-2.8Z"
          />
          <path
            class="cls-279"
            d="M265.06,492.33a122.43,122.43,0,0,1,.65-15.68c0-8.52-3.27-11.66-8.63-9.68l-2.22.6c-6.46,3.53-9.76,3.37-8.56,10.22l1.2,15C247.54,500.56,265.52,501.43,265.06,492.33Z"
          />
          <polygon
            class="cls-280"
            points="250.56 479.84 247.82 491.45 247.5 492.58 247.06 486.99 250.56 479.84"
          />
          <path
            class="cls-279"
            d="M251.08,478.47l-5.67,11.77c-.46.71-4-.25-4-1.49,0-2.57,3.55-16.09,7.33-17.9C251.77,469.39,252.76,474.28,251.08,478.47Z"
          />
          <path
            class="cls-295"
            d="M272.65,497.24h0a1.45,1.45,0,0,0,.93-1.83l-1.07-3.27a1.45,1.45,0,0,0-1.83-.92h0a1.46,1.46,0,0,0-.93,1.83l1.07,3.26A1.46,1.46,0,0,0,272.65,497.24Z"
          />
          <path
            class="cls-295"
            d="M274,494.88h0a1.47,1.47,0,0,0,.8-1.9l-1.3-3.18a1.47,1.47,0,0,0-1.9-.79h0a1.45,1.45,0,0,0-.79,1.89l1.3,3.18A1.46,1.46,0,0,0,274,494.88Z"
          />
          <polygon
            class="cls-298"
            points="273.34 494.67 270.71 495.98 271.4 497.43 274.2 495.82 273.34 494.67"
          />
          <path
            class="cls-291"
            d="M289.67,495.45s-3.4,12.5-10.11,9.92c-5.47-2.11-8.56-8-8.56-8l3.58-1.73s5.2,4.81,6.83,4.47c3.72-.76,3.36-8.95,5.92-9.65C288.79,490.1,289.67,495.45,289.67,495.45Z"
          />
          <path
            class="cls-280"
            d="M245.15,488.9a1.32,1.32,0,0,1,.5,1.59c-.42,1-5.13.53-4.85-1S241.34,487.31,245.15,488.9Z"
          />
          <path
            class="cls-280"
            d="M268.21,484.47a1.32,1.32,0,0,1-1.63-1v0c-.21-1,3.87-3.42,4.52-2S271.56,483.62,268.21,484.47Z"
          />
          <path
            class="cls-274"
            d="M258.28,467.28a4.72,4.72,0,0,1-1.11,1.08c-.41.16-5.58-2.73-4.64-7.13.59-2.78,5.87-1.58,5.87-1.58Z"
          />
          <path
            class="cls-295"
            d="M255.52,471.14l-1.15-1.32c.86.21,3.18.59,3.39-.27l1.13-4.37a1.62,1.62,0,0,0-1.18-1.94l-.26-.06a1.61,1.61,0,0,0-1.94,1.18l-1.81,4.48C253.5,469.7,254.67,470.93,255.52,471.14Z"
          />
          <path
            class="cls-299"
            d="M258.26,467.79a4.39,4.39,0,0,1-3.34-2.21s1.11,3.17,3,3.56Z"
          />
          <path
            class="cls-297"
            d="M249.19,503.52s2.42-4.64,2.44-5.1c0,0,1.07,2.33.14,3.69A3.55,3.55,0,0,1,249.19,503.52Z"
          />
          <path
            class="cls-291"
            d="M303.73,489a32.63,32.63,0,0,1,4.63,12.62,4.9,4.9,0,0,1-.05,2.79c-1.09,3.5-2.19,3.63-2.74,7.29-.27,1.85-2.56.87-2.29-1,.51-3.41.54-2.72,1.75-5.95.23-.61.47-1.21.73-1.81-.24.55,0,1-.06.47-.06-.31-.11-.62-.17-.94-.91-4.88-1.88-10.3-4.5-14.59-1-1.61,1.61-3,2.59-1.39Z"
          />
          <path
            class="cls-291"
            d="M304.41,487.72c1.82,3.45,3,9.22,4.13,13.9.44,1.3.09,2.44-.71,2.36l-2.72.28c-.66-.07-1.88-1.55-2.15-2.63l-3-11.91c-.49-1.93,0-3.57,1.09-3.77l-2.55-2C298.71,483.24,303.36,484.18,304.41,487.72Z"
          />
          <path
            class="cls-274"
            d="M294.56,508.85l13.28,8.32a1,1,0,0,0,1.52-.81l.34-9.45a1,1,0,0,0-.46-.88L296,497.71a1,1,0,0,0-1.52.81l-.34,9.45A1,1,0,0,0,294.56,508.85Z"
          />
          <path
            class="cls-295"
            d="M301.68,515.2l1,.48a1.53,1.53,0,0,0,2-.68h0a1.52,1.52,0,0,0-.69-2l-1-.48a1.52,1.52,0,0,0-2,.68h0A1.52,1.52,0,0,0,301.68,515.2Z"
          />
          <ellipse
            class="cls-275"
            cx="293"
            cy="552.23"
            rx="11.38"
            ry="5.65"
            transform="translate(-10.03 5.44) rotate(-1.05)"
          />
          <path
            class="cls-274"
            d="M300.46,547.26l-2.66-.43c-1.77-.88-2.58-1.52-3.4-1.09l-.23.13c-.82.43-.75,1.25.16,1.81l3.82,3.28a2.61,2.61,0,0,0,2.92-.18s.45-.38.2-2.07C301.12,547.75,301.19,547.72,300.46,547.26Z"
          />
          <path
            class="cls-274"
            d="M288.56,552.2l-2.66.83c-2,0-3.09-.16-3.64.58l-.15.22c-.55.74-.11,1.43,1,1.51l5.68,1.16c1.1.09,1.56-.61,2-1.49a3.86,3.86,0,0,0-.31-2.29C290,551.84,289.43,552.27,288.56,552.2Z"
          />
          <path
            class="cls-107"
            d="M287.37,553.08c0,1.26,3,1.37,3.06.11l.14-4.08-3.05-.11Z"
          />
          <path
            class="cls-300"
            d="M287.08,550.49c.33,1.6,3.51,1.6,4.16.6a172.69,172.69,0,0,1,6.46-42.31l-11-.39A396.64,396.64,0,0,0,287.08,550.49Z"
          />
          <path
            class="cls-107"
            d="M298,547.42c0,1.14,3.08,1.25,3,.11l-.09-3.7-3.05-.11Z"
          />
          <path
            class="cls-300"
            d="M297.44,545.76c1.18,1.3,3.6.85,4.09,0l-.3-36.85-7.71.86Z"
          />
          <path
            class="cls-301"
            d="M291.18,480.15c.85,2.61,2.84,3.28,4.44,1.5s2.2-5.34,1.35-7.95-3.76-.83-5.36.95S290.33,477.54,291.18,480.15Z"
          />
          <path
            class="cls-295"
            d="M288.94,480.23c.66,2.67,3.45,3.72,5.18,2.06s2.58-5.17,1.92-7.83-2.6-3.48-4.32-1.81S288.28,477.57,288.94,480.23Z"
          />
          <path
            class="cls-295"
            d="M295.06,488.07l.28-.05a1.78,1.78,0,0,0,1.43-2.07l-1-5.43a1.78,1.78,0,0,0-2.07-1.42l-.29,0a1.78,1.78,0,0,0-1.42,2.07l.2,5.36C292.36,487.54,294.1,488.25,295.06,488.07Z"
          />
          <path
            class="cls-274"
            d="M298.53,481s-.38,2.47-3.89,1.85c-2.52-.45-1.63-4.54-4.15-5.05-2.77-.55-3.15-4-2-5.29s4.23-1.86,6.42-.8S300.52,472.81,298.53,481Z"
          />
          <path
            class="cls-295"
            d="M290.43,479.21a1.21,1.21,0,0,0,1.46.88,1.21,1.21,0,1,0-1.46-.88Z"
          />
          <path
            class="cls-291"
            d="M301.57,508.4c-.72-5,1.26-8.27,1.37-13.53.74-8.75-2-11.24-5-11,0,0-2.77.71-3.4,1-6.7,3.15-8.5,4.14-8.35,8.08-.26,6.48.43,13.78.45,17C287.8,514.42,300,511.56,301.57,508.4Z"
          />
          <path
            class="cls-299"
            d="M292.05,483.09l.31-.65a1.83,1.83,0,0,1-1.5.33A2.37,2.37,0,0,0,292.05,483.09Z"
          />
          <polygon
            class="cls-276"
            points="294.8 522.05 298.21 517.52 294.92 518.83 294.8 522.05"
          />
          <path
            class="cls-274"
            d="M258.06,473.87h0a1.15,1.15,0,0,1-1.42-.77l-.39-1.6a1.14,1.14,0,0,1,.89-1.33h0a1.15,1.15,0,0,1,1.42.77l.39,1.6A1.14,1.14,0,0,1,258.06,473.87Z"
          />
          <path
            class="cls-274"
            d="M257.18,473.54c.55,3,.18,6.92,0,10.77l2.53,1.64,1.29-2.43A42.6,42.6,0,0,0,258.85,473Z"
          />
          <path
            class="cls-107"
            d="M254.37,467.21l-2.15,1.68s1.64,2.88,3.53,3.32l1.43-2.26A5.32,5.32,0,0,1,254.37,467.21Z"
          />
          <path
            class="cls-107"
            d="M258.51,466.13l1.79.86s.78,3.95-1.12,4.73L256.92,470S258.61,469.12,258.51,466.13Z"
          />
          <path
            class="cls-295"
            d="M257.29,465.76c.88,2.23,2.64,2.71,3.94,1.08a7.82,7.82,0,0,0,.76-7c-.87-2.22-2.64-2.7-3.94-1.07A7.8,7.8,0,0,0,257.29,465.76Z"
          />
          <path
            class="cls-295"
            d="M254.8,465.27c.88,2.23,4.77,3.59,6.07,2s.29-5.54-.59-7.77-2.64-2.71-3.94-1.07S253.93,463,254.8,465.27Z"
          />
          <path
            class="cls-274"
            d="M257.37,459.84s.51,4.41-3,5.41c0,0-3.95-2.27-1.06-6.52,2.54-3.75,6.64-.91,6.64-.91Z"
          />
          <path
            class="cls-274"
            d="M262.47,462.8a4.19,4.19,0,0,0-2.77-2.68l1.81-1.09S263.37,459.45,262.47,462.8Z"
          />
          <path
            class="cls-274"
            d="M255.55,462.44c.76-1,2.4-1,4.73-.19a2.22,2.22,0,0,0,1.11.11c1.73-.37,2-2.52,2-2.52.37-1.43-.58-2.08-2-2.45l-3.75-1a4,4,0,0,0-4.53,2.63l-.1.23C252.61,460.72,254.11,462.07,255.55,462.44Z"
          />
          <path
            class="cls-295"
            d="M254,465.12a1.05,1.05,0,1,0,.59-1.37A1,1,0,0,0,254,465.12Z"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import SocialArrow from '~/components/svgIcons/SocialArrow';
import CityTitle from '~/components/atoms/CityTitle';

export default {
  components: {
    CityTitle,
    SocialArrow,
  },

  props: {
    reportData: { type: Object, default: () => {} },
    month: { type: String, required: true },
    name: { type: String, required: true },
    year: { type: [String, Number], required: true },
  },

  computed: {
    isApartmentFlipped() {
      return this.reportData.apartment.benchmarkPriceDeltaYTY < 0;
    },

    isRowFlipped() {
      return this.reportData.row.benchmarkPriceDeltaYTY < 0;
    },

    isSemiFlipped() {
      return this.reportData['semi-detached'].benchmarkPriceDeltaYTY < 0;
    },

    isDetachedFlipped() {
      return this.reportData.detached.benchmarkPriceDeltaYTY < 0;
    },
  },
};
</script>

<style scoped>
.Container {
  position: relative;
}

.ArrowTop {
  position: absolute;
  top: 53.5%;
}

.ApartmentArr {
  left: 4%;
}

.RowArr {
  left: 28%;
}

.SemiArr {
  left: 52%;
}

.DetachedArr {
  left: 76%;
}
</style>
