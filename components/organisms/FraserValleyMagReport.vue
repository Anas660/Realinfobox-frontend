<!-- eslint-disable vue/html-indent -->
<template>
  <div class="Container">
    <SocialArrow
      class="ArrowTop ApartmentArrow"
      :is-flipped="isApartmentFlipped"
    />
    <SocialArrow
      class="ArrowTop TownhomeArrow"
      :is-flipped="isTownhomeFlipped"
    />
    <SocialArrow
      class="ArrowTop DetachedArrow"
      :is-flipped="isDetachedFlipped"
    />
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
          .cls-3,
          .cls-74 {
            fill: #a7bcf5;
          }
          .cls-192,
          .cls-203,
          .cls-208,
          .cls-209,
          .cls-3,
          .cls-36,
          .cls-5,
          .cls-54,
          .cls-56,
          .cls-57,
          .cls-64,
          .cls-73,
          .cls-77,
          .cls-94 {
            mix-blend-mode: multiply;
          }
          .cls-203,
          .cls-208,
          .cls-3,
          .cls-36,
          .cls-73 {
            opacity: 0.39;
          }
          .cls-4 {
            fill: #ced2ff;
          }
          .cls-192,
          .cls-209,
          .cls-5,
          .cls-54,
          .cls-94 {
            opacity: 0.25;
          }
          .cls-5 {
            fill: url(#linear-gradient);
          }
          .cls-6 {
            font-size: 23px;
          }
          .cls-10,
          .cls-208,
          .cls-22,
          .cls-55,
          .cls-6 {
            fill: #fff;
          }
          .cls-10,
          .cls-14,
          .cls-34,
          .cls-6 {
            font-family: Montserrat-SemiBold, Montserrat;
            font-weight: 600;
          }
          .cls-7 {
            letter-spacing: -0.01em;
          }
          .cls-8 {
            letter-spacing: 0em;
          }
          .cls-9 {
            letter-spacing: 0em;
          }
          .cls-10 {
            font-size: 14px;
          }
          .cls-11 {
            letter-spacing: -0.01em;
          }
          .cls-12 {
            fill: #e8e8ef;
          }
          .cls-13,
          .cls-215,
          .cls-66,
          .cls-71,
          .cls-72,
          .cls-85,
          .cls-86 {
            fill: none;
          }
          .cls-13,
          .cls-71,
          .cls-72 {
            stroke: #182f6e;
          }
          .cls-13,
          .cls-66,
          .cls-71,
          .cls-72,
          .cls-85,
          .cls-86 {
            stroke-linecap: round;
            stroke-linejoin: round;
          }
          .cls-13 {
            stroke-width: 2px;
          }
          .cls-14 {
            font-size: 34px;
          }
          .cls-14,
          .cls-23,
          .cls-34 {
            fill: #223b82;
          }
          .cls-15 {
            letter-spacing: 0em;
          }
          .cls-16 {
            letter-spacing: -0.02em;
          }
          .cls-17 {
            letter-spacing: 0em;
          }
          .cls-18 {
            letter-spacing: 0em;
          }
          .cls-19 {
            letter-spacing: -0.01em;
          }
          .cls-20 {
            letter-spacing: 0em;
          }
          .cls-21 {
            fill: #ebedfc;
          }
          .cls-23,
          .cls-38 {
            font-size: 12px;
            font-family: Montserrat-Medium, Montserrat;
            font-weight: 500;
          }
          .cls-24 {
            letter-spacing: 0em;
          }
          .cls-25 {
            letter-spacing: -0.02em;
          }
          .cls-26 {
            letter-spacing: 0em;
          }
          .cls-27 {
            letter-spacing: 0em;
          }
          .cls-28 {
            letter-spacing: -0.02em;
          }
          .cls-29 {
            letter-spacing: -0.05em;
          }
          .cls-30 {
            letter-spacing: -0.02em;
          }
          .cls-31 {
            letter-spacing: -0.02em;
          }
          .cls-32 {
            letter-spacing: -0.01em;
          }
          .cls-33 {
            letter-spacing: 0.02em;
          }
          .cls-34 {
            font-size: 22px;
          }
          .cls-35 {
            letter-spacing: 0em;
          }
          .cls-36 {
            fill: #a9badf;
          }
          .cls-37 {
            fill: #5f6bc3;
          }
          .cls-218,
          .cls-288,
          .cls-38 {
            fill: #6080d1;
          }
          .cls-39 {
            letter-spacing: -0.01em;
          }
          .cls-40 {
            letter-spacing: 0.01em;
          }
          .cls-41 {
            letter-spacing: 0.01em;
          }
          .cls-42 {
            letter-spacing: -0.01em;
          }
          .cls-43 {
            letter-spacing: -0.02em;
          }
          .cls-44 {
            letter-spacing: -0.01em;
          }
          .cls-45 {
            letter-spacing: -0.01em;
          }
          .cls-46 {
            letter-spacing: -0.02em;
          }
          .cls-47 {
            letter-spacing: 0em;
          }
          .cls-48 {
            letter-spacing: -0.03em;
          }
          .cls-49 {
            letter-spacing: -0.02em;
          }
          .cls-50 {
            letter-spacing: 0em;
          }
          .cls-51 {
            letter-spacing: -0.01em;
          }
          .cls-52 {
            letter-spacing: -0.06em;
          }
          .cls-53 {
            fill: #d2d7ff;
          }
          .cls-54 {
            fill: url(#linear-gradient-2);
          }
          .cls-207,
          .cls-214,
          .cls-216,
          .cls-55 {
            opacity: 0.3;
          }
          .cls-129,
          .cls-56 {
            opacity: 0.1;
          }
          .cls-56 {
            fill: url(#linear-gradient-3);
          }
          .cls-57 {
            fill: #e8eefa;
          }
          .cls-58 {
            fill: #182f6e;
          }
          .cls-59 {
            fill: #52dea1;
          }
          .cls-60 {
            fill: #179e6e;
          }
          .cls-61 {
            fill: #cad1fe;
          }
          .cls-203,
          .cls-216,
          .cls-62 {
            fill: #173978;
          }
          .cls-63 {
            fill: #082b61;
          }
          .cls-64,
          .cls-88 {
            fill: #005cb2;
          }
          .cls-64 {
            opacity: 0.16;
          }
          .cls-65 {
            fill: #093373;
          }
          .cls-66 {
            stroke: #093373;
          }
          .cls-67 {
            fill: #868ed7;
          }
          .cls-68 {
            fill: #ccd3ff;
          }
          .cls-69 {
            fill: #b9afdd;
          }
          .cls-70 {
            fill: #aaa3cc;
          }
          .cls-72 {
            stroke-width: 3px;
          }
          .cls-75 {
            fill: #f4af32;
          }
          .cls-76 {
            fill: #ffd67e;
          }
          .cls-77 {
            opacity: 0.52;
          }
          .cls-78 {
            fill: #a8c4e5;
          }
          .cls-79 {
            opacity: 0.65;
          }
          .cls-80 {
            fill: #e3f2ff;
          }
          .cls-81 {
            fill: #e1eaf4;
          }
          .cls-82 {
            fill: #dd3c3c;
          }
          .cls-83 {
            fill: #ec5451;
          }
          .cls-84 {
            fill: #f2e9d3;
          }
          .cls-85 {
            stroke: #f4af32;
          }
          .cls-86 {
            stroke: #e29e30;
          }
          .cls-87 {
            fill: #ffaa82;
          }
          .cls-89 {
            fill: #003466;
          }
          .cls-90 {
            fill: #dee5ff;
          }
          .cls-91 {
            fill: #d18100;
          }
          .cls-92 {
            fill: #244e8f;
          }
          .cls-93 {
            fill: #e3971b;
          }
          .cls-94 {
            fill: url(#linear-gradient-4);
          }
          .cls-95 {
            fill: #cfe4fa;
          }
          .cls-96 {
            fill: #edf1fa;
          }
          .cls-97 {
            fill: #5d5d5d;
          }
          .cls-98 {
            fill: #2f2f2f;
          }
          .cls-99 {
            fill: #181818;
          }
          .cls-100 {
            fill: #464646;
          }
          .cls-101 {
            fill: silver;
          }
          .cls-102 {
            fill: #a8a8a8;
          }
          .cls-103 {
            fill: #95ceff;
          }
          .cls-103,
          .cls-197 {
            opacity: 0.7;
          }
          .cls-104 {
            fill: #606060;
          }
          .cls-105 {
            fill: #484848;
          }
          .cls-106 {
            fill: #303030;
          }
          .cls-107 {
            fill: #e6cc6a;
          }
          .cls-108 {
            fill: #e0e3f2;
          }
          .cls-109 {
            fill: #f9f9f9;
          }
          .cls-110 {
            fill: #c2c2c0;
          }
          .cls-111 {
            fill: #dbdad8;
          }
          .cls-112 {
            fill: url(#linear-gradient-5);
          }
          .cls-113 {
            fill: url(#linear-gradient-6);
          }
          .cls-114 {
            fill: #fbfbfa;
          }
          .cls-115 {
            fill: url(#linear-gradient-7);
          }
          .cls-116 {
            fill: url(#linear-gradient-8);
          }
          .cls-117 {
            fill: url(#linear-gradient-9);
          }
          .cls-118 {
            fill: url(#linear-gradient-10);
          }
          .cls-119 {
            fill: #6dbcce;
            opacity: 0.4;
          }
          .cls-120 {
            fill: url(#linear-gradient-11);
          }
          .cls-121 {
            fill: url(#linear-gradient-12);
          }
          .cls-122 {
            fill: url(#linear-gradient-13);
          }
          .cls-123 {
            fill: url(#linear-gradient-14);
          }
          .cls-124 {
            fill: url(#linear-gradient-15);
          }
          .cls-125 {
            fill: url(#linear-gradient-16);
          }
          .cls-126 {
            fill: #d8c996;
          }
          .cls-127 {
            fill: #c0b285;
          }
          .cls-128 {
            fill: url(#linear-gradient-17);
          }
          .cls-129 {
            fill: #00060d;
          }
          .cls-130 {
            fill: #f3e5b7;
          }
          .cls-131 {
            fill: url(#linear-gradient-18);
          }
          .cls-132 {
            fill: url(#linear-gradient-19);
          }
          .cls-133 {
            fill: #f1f1f1;
          }
          .cls-134 {
            fill: url(#linear-gradient-20);
          }
          .cls-135 {
            fill: url(#linear-gradient-21);
          }
          .cls-136 {
            fill: url(#linear-gradient-22);
          }
          .cls-137 {
            fill: url(#linear-gradient-23);
          }
          .cls-138 {
            fill: url(#linear-gradient-24);
          }
          .cls-139 {
            fill: #a89c76;
          }
          .cls-140 {
            fill: url(#linear-gradient-25);
          }
          .cls-141 {
            fill: url(#linear-gradient-26);
          }
          .cls-142 {
            clip-path: url(#clip-path);
          }
          .cls-143 {
            fill: #f8f8f8;
          }
          .cls-144 {
            fill: url(#linear-gradient-27);
          }
          .cls-145 {
            fill: #e5e5e5;
          }
          .cls-146 {
            fill: #cbcbcb;
          }
          .cls-147 {
            fill: #bc4073;
          }
          .cls-148 {
            fill: url(#linear-gradient-28);
          }
          .cls-149 {
            fill: url(#linear-gradient-29);
          }
          .cls-150 {
            fill: url(#linear-gradient-30);
          }
          .cls-151 {
            fill: url(#linear-gradient-31);
          }
          .cls-152 {
            fill: url(#linear-gradient-32);
          }
          .cls-153 {
            fill: url(#linear-gradient-33);
          }
          .cls-154 {
            fill: url(#linear-gradient-34);
          }
          .cls-155 {
            fill: url(#linear-gradient-35);
          }
          .cls-156 {
            fill: url(#linear-gradient-36);
          }
          .cls-157 {
            fill: #f4f0e2;
          }
          .cls-158 {
            fill: url(#linear-gradient-37);
          }
          .cls-159 {
            fill: url(#linear-gradient-38);
          }
          .cls-160 {
            fill: url(#linear-gradient-39);
          }
          .cls-161 {
            fill: #ada179;
          }
          .cls-162 {
            fill: url(#linear-gradient-40);
          }
          .cls-163 {
            fill: url(#linear-gradient-41);
          }
          .cls-164 {
            fill: url(#linear-gradient-42);
          }
          .cls-165 {
            fill: url(#linear-gradient-43);
          }
          .cls-166 {
            fill: url(#linear-gradient-44);
          }
          .cls-167 {
            fill: url(#linear-gradient-45);
          }
          .cls-168 {
            fill: url(#linear-gradient-46);
          }
          .cls-169 {
            clip-path: url(#clip-path-2);
          }
          .cls-170 {
            fill: url(#linear-gradient-47);
          }
          .cls-171 {
            fill: #ffd22d;
          }
          .cls-172 {
            fill: url(#linear-gradient-48);
          }
          .cls-173 {
            fill: url(#linear-gradient-49);
          }
          .cls-174 {
            fill: url(#linear-gradient-50);
          }
          .cls-175 {
            fill: url(#linear-gradient-51);
          }
          .cls-176 {
            fill: url(#linear-gradient-52);
          }
          .cls-177 {
            fill: url(#linear-gradient-53);
          }
          .cls-178 {
            fill: url(#linear-gradient-54);
          }
          .cls-179 {
            fill: url(#linear-gradient-55);
          }
          .cls-180 {
            fill: url(#linear-gradient-56);
          }
          .cls-181 {
            fill: #a7a7a7;
          }
          .cls-182 {
            fill: #010101;
          }
          .cls-183 {
            fill: #ffda7d;
          }
          .cls-184 {
            fill: url(#linear-gradient-57);
          }
          .cls-185 {
            fill: #97b255;
          }
          .cls-186 {
            fill: url(#linear-gradient-58);
          }
          .cls-187 {
            fill: #edba00;
          }
          .cls-188 {
            fill: #db9d39;
          }
          .cls-189 {
            fill: url(#linear-gradient-59);
          }
          .cls-190 {
            fill: url(#linear-gradient-60);
          }
          .cls-191 {
            fill: url(#linear-gradient-61);
          }
          .cls-192 {
            fill: url(#linear-gradient-62);
          }
          .cls-193 {
            fill: #ebebeb;
          }
          .cls-194 {
            fill: #ebf5ff;
          }
          .cls-195 {
            fill: #96938a;
          }
          .cls-196 {
            fill: #a2a2a1;
          }
          .cls-197 {
            fill: #85837e;
          }
          .cls-198 {
            fill: #8c5535;
          }
          .cls-199 {
            fill: #c0a291;
          }
          .cls-200 {
            fill: #45446c;
          }
          .cls-201 {
            fill: #93908b;
          }
          .cls-202 {
            fill: #39332f;
            opacity: 0.8;
          }
          .cls-204 {
            fill: #1f1f22;
          }
          .cls-205 {
            fill: #777468;
          }
          .cls-206 {
            fill: #0d0d0d;
          }
          .cls-209 {
            fill: url(#linear-gradient-63);
          }
          .cls-210 {
            fill: #d0d0cf;
          }
          .cls-211 {
            fill: #8ed4b2;
          }
          .cls-212,
          .cls-214 {
            fill: #0f264c;
          }
          .cls-213 {
            fill: #a1745a;
          }
          .cls-217 {
            fill: #2c4482;
          }
          .cls-218 {
            font-size: 10px;
            letter-spacing: 0.01em;
          }
          .cls-218,
          .cls-288 {
            font-family: Montserrat-Regular, Montserrat;
          }
          .cls-219 {
            letter-spacing: 0.03em;
          }
          .cls-220 {
            letter-spacing: 0.02em;
          }
          .cls-221 {
            letter-spacing: 0em;
          }
          .cls-222 {
            letter-spacing: 0.02em;
          }
          .cls-223 {
            letter-spacing: 0.03em;
          }
          .cls-224 {
            letter-spacing: 0.02em;
          }
          .cls-225 {
            letter-spacing: 0.05em;
          }
          .cls-226 {
            letter-spacing: 0.03em;
          }
          .cls-227 {
            letter-spacing: 0.02em;
          }
          .cls-228 {
            letter-spacing: 0.01em;
          }
          .cls-229 {
            letter-spacing: 0em;
          }
          .cls-230 {
            letter-spacing: 0.02em;
          }
          .cls-231 {
            letter-spacing: 0.01em;
          }
          .cls-232 {
            letter-spacing: 0.03em;
          }
          .cls-233 {
            letter-spacing: 0.02em;
          }
          .cls-234 {
            letter-spacing: 0.02em;
          }
          .cls-235 {
            letter-spacing: 0.01em;
          }
          .cls-236 {
            letter-spacing: 0.01em;
          }
          .cls-237 {
            letter-spacing: 0.01em;
          }
          .cls-238 {
            letter-spacing: 0.02em;
          }
          .cls-239 {
            letter-spacing: 0.03em;
          }
          .cls-240 {
            letter-spacing: 0.01em;
          }
          .cls-241 {
            letter-spacing: 0.01em;
          }
          .cls-242 {
            letter-spacing: 0.02em;
          }
          .cls-243 {
            letter-spacing: 0.04em;
          }
          .cls-244 {
            letter-spacing: 0.03em;
          }
          .cls-245 {
            letter-spacing: 0.02em;
          }
          .cls-246 {
            letter-spacing: 0.01em;
          }
          .cls-247 {
            letter-spacing: 0.02em;
          }
          .cls-248 {
            letter-spacing: 0.01em;
          }
          .cls-249 {
            letter-spacing: 0.02em;
          }
          .cls-250 {
            letter-spacing: 0.03em;
          }
          .cls-251 {
            letter-spacing: 0.04em;
          }
          .cls-252 {
            letter-spacing: 0.03em;
          }
          .cls-253 {
            letter-spacing: 0.02em;
          }
          .cls-254 {
            letter-spacing: 0.01em;
          }
          .cls-255 {
            letter-spacing: 0.02em;
          }
          .cls-256 {
            letter-spacing: 0em;
          }
          .cls-257 {
            letter-spacing: 0.02em;
          }
          .cls-258 {
            letter-spacing: 0.01em;
          }
          .cls-259 {
            letter-spacing: 0.02em;
          }
          .cls-260 {
            letter-spacing: 0.03em;
          }
          .cls-261 {
            letter-spacing: 0.01em;
          }
          .cls-262 {
            letter-spacing: 0.01em;
          }
          .cls-263 {
            letter-spacing: 0.02em;
          }
          .cls-264 {
            letter-spacing: 0.02em;
          }
          .cls-265 {
            letter-spacing: 0.01em;
          }
          .cls-266 {
            letter-spacing: 0.02em;
          }
          .cls-267 {
            letter-spacing: 0.02em;
          }
          .cls-268 {
            letter-spacing: 0.01em;
          }
          .cls-269 {
            letter-spacing: 0.02em;
          }
          .cls-270 {
            letter-spacing: 0.02em;
          }
          .cls-271 {
            letter-spacing: 0.02em;
          }
          .cls-272 {
            letter-spacing: 0.01em;
          }
          .cls-273 {
            letter-spacing: 0.01em;
          }
          .cls-274 {
            letter-spacing: 0.03em;
          }
          .cls-275 {
            letter-spacing: 0.02em;
          }
          .cls-276 {
            letter-spacing: 0.03em;
          }
          .cls-277 {
            letter-spacing: 0.01em;
          }
          .cls-278 {
            letter-spacing: 0.02em;
          }
          .cls-279 {
            letter-spacing: 0.01em;
          }
          .cls-280 {
            letter-spacing: 0.03em;
          }
          .cls-281 {
            letter-spacing: 0.06em;
          }
          .cls-282 {
            letter-spacing: -0.01em;
          }
          .cls-283 {
            letter-spacing: 0.02em;
          }
          .cls-284 {
            letter-spacing: 0.03em;
          }
          .cls-285 {
            letter-spacing: 0.01em;
          }
          .cls-286 {
            letter-spacing: 0.01em;
          }
          .cls-287 {
            letter-spacing: 0.03em;
          }
          .cls-288 {
            font-size: 11px;
            letter-spacing: 0.05em;
          }
          .cls-289 {
            letter-spacing: 0.02em;
          }
          .cls-290 {
            letter-spacing: 0.05em;
          }
          .cls-291 {
            letter-spacing: 0.03em;
          }
          .cls-292 {
            letter-spacing: 0.05em;
          }
          .cls-293 {
            letter-spacing: 0.04em;
          }
          .cls-294 {
            letter-spacing: 0.03em;
          }
          .cls-295 {
            letter-spacing: -0.04em;
          }
          .cls-296 {
            letter-spacing: -0.01em;
          }
          .cls-297 {
            letter-spacing: 0em;
          }
          .cls-298 {
            letter-spacing: -0.01em;
          }
          .cls-299 {
            letter-spacing: -0.01em;
          }
        </style>
        <linearGradient
          id="linear-gradient"
          x1="387.65"
          y1="20.53"
          x2="600.55"
          y2="128.27"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.05" stop-color="#bad4ff" />
          <stop offset="0.48" stop-color="#94ceff" />
          <stop offset="0.68" stop-color="#9ec2ff" />
          <stop offset="1" stop-color="#868ed7" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="22.32"
          y1="456.8"
          x2="518.58"
          y2="595.39"
          xlink:href="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-3"
          x1="90.76"
          y1="506.81"
          x2="539.23"
          y2="506.81"
          xlink:href="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-4"
          x1="74.74"
          y1="215.96"
          x2="152.08"
          y2="215.96"
          xlink:href="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-5"
          x1="93.69"
          y1="169.52"
          x2="93.7"
          y2="169.53"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#c9c9c8" />
          <stop offset="0.32" stop-color="#d3d1d0" />
          <stop offset="0.7" stop-color="#d7d5d4" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-6"
          x1="-1149.42"
          y1="169.5"
          x2="-1149.41"
          y2="169.47"
          gradientTransform="matrix(-1, 0, 0, 1, -1055.7, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stop-color="#fbfbfa" />
          <stop offset="0.59" stop-color="#f9f8f7" />
          <stop offset="0.77" stop-color="#f1f0ef" />
          <stop offset="0.91" stop-color="#e3e2e1" />
          <stop offset="1" stop-color="#d7d5d4" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-7"
          x1="94.05"
          y1="169.66"
          x2="94.13"
          y2="169.79"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stop-color="#fbfbfa" />
          <stop offset="0.7" stop-color="#d7d5d4" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-8"
          x1="93.38"
          y1="169.69"
          x2="93.39"
          y2="169.71"
          xlink:href="#linear-gradient-5"
        />
        <linearGradient
          id="linear-gradient-9"
          x1="-1149.12"
          y1="169.67"
          x2="-1149.1"
          y2="169.65"
          xlink:href="#linear-gradient-6"
        />
        <linearGradient
          id="linear-gradient-10"
          x1="93.75"
          y1="169.84"
          x2="93.82"
          y2="169.96"
          xlink:href="#linear-gradient-7"
        />
        <linearGradient
          id="linear-gradient-11"
          x1="109.74"
          y1="178.71"
          x2="109.75"
          y2="178.73"
          xlink:href="#linear-gradient-5"
        />
        <linearGradient
          id="linear-gradient-12"
          x1="-1165.47"
          y1="178.69"
          x2="-1165.46"
          y2="178.66"
          xlink:href="#linear-gradient-6"
        />
        <linearGradient
          id="linear-gradient-13"
          x1="110.11"
          y1="178.85"
          x2="110.18"
          y2="178.98"
          xlink:href="#linear-gradient-7"
        />
        <linearGradient
          id="linear-gradient-14"
          x1="109.44"
          y1="178.89"
          x2="109.45"
          y2="178.91"
          xlink:href="#linear-gradient-5"
        />
        <linearGradient
          id="linear-gradient-15"
          x1="-1165.17"
          y1="178.87"
          x2="-1165.15"
          y2="178.84"
          xlink:href="#linear-gradient-6"
        />
        <linearGradient
          id="linear-gradient-16"
          x1="109.8"
          y1="179.03"
          x2="109.87"
          y2="179.16"
          xlink:href="#linear-gradient-7"
        />
        <linearGradient
          id="linear-gradient-17"
          x1="9937.9"
          y1="179.44"
          x2="9937.93"
          y2="179.38"
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
          id="linear-gradient-18"
          x1="9937.15"
          y1="180.63"
          x2="9937.17"
          y2="180.6"
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
          id="linear-gradient-19"
          x1="9938.24"
          y1="178.97"
          x2="9938.26"
          y2="178.94"
          gradientTransform="translate(-9824.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stop-color="#f3e5b7" />
          <stop offset="0.58" stop-color="#f4e6bb" />
          <stop offset="0.88" stop-color="#f5ebc8" />
          <stop offset="1" stop-color="#f6edcf" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-20"
          x1="9938.26"
          y1="179.93"
          x2="9938.29"
          y2="179.89"
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
          id="linear-gradient-21"
          x1="9938.17"
          y1="179.94"
          x2="9938.19"
          y2="179.9"
          xlink:href="#linear-gradient-20"
        />
        <linearGradient
          id="linear-gradient-22"
          x1="9938.07"
          y1="179.96"
          x2="9938.09"
          y2="179.92"
          xlink:href="#linear-gradient-20"
        />
        <linearGradient
          id="linear-gradient-23"
          x1="9938.41"
          y1="179.87"
          x2="9938.41"
          y2="179.87"
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
          id="linear-gradient-24"
          x1="9937.07"
          y1="180.11"
          x2="9937.1"
          y2="180.05"
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
          id="linear-gradient-25"
          x1="9937.52"
          y1="180.73"
          x2="9937.53"
          y2="180.71"
          gradientTransform="translate(-9824.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stop-color="#f3e5b7" />
          <stop offset="1" stop-color="#f5eac7" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-26"
          x1="9937.48"
          y1="180.78"
          x2="9937.49"
          y2="180.76"
          xlink:href="#linear-gradient-18"
        />
        <clipPath id="clip-path">
          <path id="SVGID" class="cls-1" d="M114.15,179.3l-.56-.33h0l.56.33Z" />
        </clipPath>
        <linearGradient
          id="linear-gradient-27"
          x1="9937.65"
          y1="180.38"
          x2="9938.41"
          y2="179.08"
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
          id="linear-gradient-28"
          x1="9939"
          y1="180.22"
          x2="9939"
          y2="180.22"
          xlink:href="#linear-gradient-23"
        />
        <linearGradient
          id="linear-gradient-29"
          x1="9938.85"
          y1="180.27"
          x2="9938.88"
          y2="180.23"
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
          id="linear-gradient-30"
          x1="9938.76"
          y1="180.29"
          x2="9938.78"
          y2="180.25"
          xlink:href="#linear-gradient-29"
        />
        <linearGradient
          id="linear-gradient-31"
          x1="9938.66"
          y1="180.3"
          x2="9938.68"
          y2="180.26"
          xlink:href="#linear-gradient-29"
        />
        <linearGradient
          id="linear-gradient-32"
          x1="9937.66"
          y1="180.46"
          x2="9937.69"
          y2="180.4"
          xlink:href="#linear-gradient-24"
        />
        <linearGradient
          id="linear-gradient-33"
          x1="9938.7"
          y1="180.16"
          x2="9938.72"
          y2="180.13"
          gradientTransform="translate(-9824.7)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1" stop-color="#c0b285" />
          <stop offset="0.7" stop-color="#f3e5b7" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-34"
          x1="9938.86"
          y1="179.33"
          x2="9938.88"
          y2="179.3"
          xlink:href="#linear-gradient-19"
        />
        <linearGradient
          id="linear-gradient-35"
          x1="9937.77"
          y1="180.99"
          x2="9937.79"
          y2="180.96"
          xlink:href="#linear-gradient-18"
        />
        <linearGradient
          id="linear-gradient-36"
          x1="9938.57"
          y1="179.83"
          x2="9938.61"
          y2="179.77"
          xlink:href="#linear-gradient-17"
        />
        <linearGradient
          id="linear-gradient-37"
          x1="7769.8"
          y1="180.35"
          x2="7769.84"
          y2="180.29"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-17"
        />
        <linearGradient
          id="linear-gradient-38"
          x1="7769.05"
          y1="181.54"
          x2="7769.07"
          y2="181.51"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-18"
        />
        <linearGradient
          id="linear-gradient-39"
          x1="7770.15"
          y1="179.88"
          x2="7770.16"
          y2="179.85"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-19"
        />
        <linearGradient
          id="linear-gradient-40"
          x1="7770.17"
          y1="180.84"
          x2="7770.19"
          y2="180.8"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-20"
        />
        <linearGradient
          id="linear-gradient-41"
          x1="7770.07"
          y1="180.86"
          x2="7770.09"
          y2="180.82"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-20"
        />
        <linearGradient
          id="linear-gradient-42"
          x1="7769.97"
          y1="180.87"
          x2="7770"
          y2="180.83"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-20"
        />
        <linearGradient
          id="linear-gradient-43"
          x1="7770.31"
          y1="180.79"
          x2="7770.31"
          y2="180.78"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-23"
        />
        <linearGradient
          id="linear-gradient-44"
          x1="7768.97"
          y1="181.03"
          x2="7769.01"
          y2="180.97"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-24"
        />
        <linearGradient
          id="linear-gradient-45"
          x1="7769.42"
          y1="181.64"
          x2="7769.43"
          y2="181.62"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-25"
        />
        <linearGradient
          id="linear-gradient-46"
          x1="7769.39"
          y1="181.7"
          x2="7769.4"
          y2="181.67"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-18"
        />
        <clipPath id="clip-path-2">
          <path
            id="SVGID-2"
            data-name="SVGID"
            class="cls-1"
            d="M115.45,180.21l-.57-.32v0l.56.33Z"
          />
        </clipPath>
        <linearGradient
          id="linear-gradient-47"
          x1="7769.56"
          y1="181.29"
          x2="7770.31"
          y2="179.99"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-27"
        />
        <linearGradient
          id="linear-gradient-48"
          x1="7770.9"
          y1="181.13"
          x2="7770.91"
          y2="181.13"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-23"
        />
        <linearGradient
          id="linear-gradient-49"
          x1="7770.76"
          y1="181.19"
          x2="7770.78"
          y2="181.15"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-29"
        />
        <linearGradient
          id="linear-gradient-50"
          x1="7770.66"
          y1="181.2"
          x2="7770.68"
          y2="181.16"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-29"
        />
        <linearGradient
          id="linear-gradient-51"
          x1="7770.56"
          y1="181.21"
          x2="7770.59"
          y2="181.17"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-29"
        />
        <linearGradient
          id="linear-gradient-52"
          x1="7769.56"
          y1="181.37"
          x2="7769.6"
          y2="181.31"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-24"
        />
        <linearGradient
          id="linear-gradient-53"
          x1="7770.6"
          y1="181.07"
          x2="7770.62"
          y2="181.04"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-33"
        />
        <linearGradient
          id="linear-gradient-54"
          x1="7770.77"
          y1="180.24"
          x2="7770.78"
          y2="180.21"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-19"
        />
        <linearGradient
          id="linear-gradient-55"
          x1="7769.67"
          y1="181.9"
          x2="7769.69"
          y2="181.87"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-18"
        />
        <linearGradient
          id="linear-gradient-56"
          x1="7770.48"
          y1="180.74"
          x2="7770.51"
          y2="180.68"
          gradientTransform="translate(-7655.3)"
          xlink:href="#linear-gradient-17"
        />
        <linearGradient
          id="linear-gradient-57"
          x1="1407.98"
          y1="170.12"
          x2="1408.95"
          y2="170.12"
          gradientTransform="matrix(-1, 0, 0, 1, 1542.14, 0)"
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
          id="linear-gradient-58"
          x1="1408.17"
          y1="169.81"
          x2="1408.2"
          y2="169.8"
          gradientTransform="matrix(-1, 0, 0, 1, 1542.14, 0)"
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
          id="linear-gradient-59"
          x1="1408.92"
          y1="170.66"
          x2="1409.89"
          y2="170.66"
          xlink:href="#linear-gradient-57"
        />
        <linearGradient
          id="linear-gradient-60"
          x1="1409.11"
          y1="170.35"
          x2="1409.14"
          y2="170.34"
          xlink:href="#linear-gradient-58"
        />
        <linearGradient
          id="linear-gradient-61"
          x1="1409.86"
          y1="171.2"
          x2="1410.82"
          y2="171.2"
          xlink:href="#linear-gradient-57"
        />
        <linearGradient
          id="linear-gradient-62"
          x1="250.14"
          y1="200.86"
          x2="350.4"
          y2="200.86"
          xlink:href="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-63"
          x1="443.82"
          y1="206.16"
          x2="523.46"
          y2="206.16"
          xlink:href="#linear-gradient"
        />
      </defs>
      <g class="cls-2">
        <g id="Layer_1" data-name="Layer 1">
          <rect
            class="cls-3"
            x="392.53"
            y="30.74"
            width="182.39"
            height="80.58"
            rx="2.46"
          />
          <rect
            class="cls-4"
            x="390.8"
            y="27.72"
            width="181.22"
            height="80.51"
          />
          <rect
            class="cls-5"
            x="390.8"
            y="27.72"
            width="181.22"
            height="80.51"
          />
          <text class="cls-6" transform="translate(438 73.82)">
            {{ month.slice(0, 3) }} {{ year }}
          </text>
          <text class="cls-10" transform="translate(404.13 95.73)">
            BENCHMARK PRICES
          </text>
          <circle class="cls-12" cx="424.66" cy="38.01" r="4.26" />
          <circle class="cls-12" cx="530.38" cy="38.01" r="4.26" />
          <path
            class="cls-13"
            d="M424.7,38.58c0-.54,0-1.1,0-1.65,0-10.58,5.08-19.15,11.34-19.15,3.09,0,5.89,2.09,7.94,5.48"
          />
          <path
            class="cls-13"
            d="M530.76,38.58c0-.54,0-1.1,0-1.65,0-10.58,5.08-19.15,11.34-19.15,3.09,0,5.9,2.09,7.94,5.48"
          />
          <text class="cls-14" transform="translate(25.92 95.73)">
            Market at a Glance
          </text>
          <rect class="cls-21" y="166.32" width="600" height="214.36" />
          <rect
            class="cls-3"
            x="408.49"
            y="154.3"
            width="160.87"
            height="217.48"
            rx="1.16"
          />
          <rect
            class="cls-22"
            x="406.45"
            y="151.55"
            width="160.07"
            height="217.52"
          />
          <text class="cls-23" transform="translate(435 256.91)">
            Detached Homes
          </text>
          <rect
            class="cls-3"
            x="221.39"
            y="154.3"
            width="160.87"
            height="217.48"
            rx="1.16"
          />
          <rect
            class="cls-22"
            x="219.36"
            y="151.55"
            width="160.07"
            height="217.52"
          />
          <text class="cls-23" transform="translate(260 256.91)">
            Townhomes
          </text>
          <rect
            class="cls-3"
            x="34.3"
            y="154.3"
            width="160.87"
            height="217.48"
            rx="1.16"
          />
          <rect
            class="cls-22"
            x="32.27"
            y="151.55"
            width="160.07"
            height="217.52"
          />
          <text class="cls-23" transform="translate(82 256.91)">Apartment</text>
          <text class="cls-34" transform="translate(52 300)">
            $ {{ reportData.apartment.benchmarkPrice | commify }}
          </text>
          <text class="cls-38" transform="translate(84.02 331.92)">
            {{ reportData.apartment.benchmarkPriceDeltaYTY }}% change
            <tspan class="cls-30" x="0" y="13">year to year</tspan>
          </text>
          <text class="cls-34" transform="translate(239 300)">
            $ {{ reportData.townhome.benchmarkPrice | commify }}
          </text>
          <text class="cls-38" transform="translate(271.04 331.92)">
            {{ reportData.townhome.benchmarkPriceDeltaYTY }}% change
            <tspan class="cls-30" x="0" y="13">year to year</tspan>
          </text>
          <text class="cls-34" transform="translate(427 300)">
            $ {{ reportData.detached.benchmarkPrice | commify }}
          </text>
          <text class="cls-38" transform="translate(456.59 331.92)">
            {{ reportData.detached.benchmarkPriceDeltaYTY }}% change
            <tspan class="cls-30" x="0" y="13">year to year</tspan>
          </text>
          <rect class="cls-3" y="467.84" width="600" height="12.49" />
          <rect class="cls-53" y="468.7" width="600" height="131.3" />
          <rect class="cls-54" y="468.7" width="600" height="131.3" />
          <path
            class="cls-55"
            d="M242.18,481.87c-12.12,1.91-24.09,4.45-36.05,7l-25,5.3c-26.91,5.71-53.86,11.42-80.07,19.2-4.87,1.45-10.66,4.15-10.26,8.59.23,2.58,2.6,4.59,4.91,6.23a88.31,88.31,0,0,0,33.9,14.25c2.69.53,5.68,1.07,7.32,3,.93,1.09,1.27,2.48,2.15,3.61,1.73,2.24,5.08,3,8.13,3.5,27.77,5,55.86,9.84,84.2,9.15,17.18-.42,34.2-2.88,51.32-4.13a364.11,364.11,0,0,1,78.92,2.87c14.36,2.11,28.69,5.09,43.25,4.82,13.9-.26,27.55-3.48,41.45-3.75,12.71-.25,26.74,1.68,37-4.77,4.13-2.58,7.2-6.29,11.48-8.67,5.11-2.84,11.56-3.56,16.42-6.7,3-2,5.24-4.73,7.37-7.45l11.91-15.13c3.48-4.41,7-9,8.24-14.24,2.75-12-7.88-23.65-20.35-29.44s-26.84-7.64-40.06-12c-14.85-4.92-28.62-13.13-44.44-14.5-10-.86-20,1.1-29.73,3.05-10.59,2.12-21.19,4.24-31.71,6.63s-21,5.08-31.31,8.31q-7.62,2.39-15.06,5.22-3.76,1.43-7.45,3c-1.77.75-3.32,1.87-5.08,2.59-2,.82-4.63.36-6.77.3q-4.36-.12-8.74-.13-8.62,0-17.24.39c-11.55.53-23.07,1.63-34.49,3.29Z"
          />
          <path
            class="cls-56"
            d="M242.18,481.86c-12.12,1.91-24.09,4.45-36.06,7l-25,5.31c-26.91,5.7-53.86,11.42-80.08,19.2-4.86,1.44-10.65,4.15-10.26,8.59.23,2.58,2.6,4.59,4.92,6.23a88.26,88.26,0,0,0,33.89,14.25c2.7.52,5.69,1.07,7.33,3,.93,1.09,1.27,2.48,2.14,3.61,1.74,2.24,5.09,3,8.14,3.5,27.76,5,55.85,9.84,84.2,9.15,17.17-.42,34.19-2.88,51.32-4.13a363.38,363.38,0,0,1,78.91,2.87c14.36,2.11,28.7,5.09,43.26,4.82,13.9-.26,27.55-3.48,41.45-3.75,12.71-.25,26.73,1.68,37-4.77,4.12-2.58,7.2-6.3,11.48-8.67,5.11-2.84,11.55-3.56,16.42-6.71,3-2,5.23-4.72,7.37-7.44l11.91-15.13c3.48-4.41,7-9,8.23-14.24,2.76-12-7.87-23.65-20.34-29.45s-26.84-7.63-40.06-12c-14.86-4.92-28.62-13.14-44.45-14.5-10-.86-19.95,1.1-29.72,3.05-10.59,2.11-21.19,4.23-31.71,6.63s-21.05,5.08-31.31,8.31q-7.63,2.38-15.06,5.21-3.76,1.44-7.45,3c-1.77.75-3.33,1.87-5.09,2.59-2,.82-4.62.36-6.76.3q-4.38-.12-8.74-.13-8.62,0-17.24.39c-11.56.53-23.08,1.63-34.49,3.29C245,481.42,243.57,481.64,242.18,481.86Z"
          />
          <ellipse
            class="cls-57"
            cx="378.88"
            cy="475.65"
            rx="16.75"
            ry="8.99"
          />
          <path
            class="cls-58"
            d="M378.88,476.69h0a1.64,1.64,0,0,1-1.63-1.63V452a1.64,1.64,0,0,1,1.63-1.63h0a1.63,1.63,0,0,1,1.63,1.63v23A1.63,1.63,0,0,1,378.88,476.69Z"
          />
          <path
            class="cls-59"
            d="M393.67,429.71a19.67,19.67,0,0,0,.18-2.68,19.14,19.14,0,0,0-3.36-11,16.1,16.1,0,0,0,.45-3.78c0-7.74-5.4-14-12.06-14s-12.05,6.27-12.05,14a16.1,16.1,0,0,0,.45,3.78,19.14,19.14,0,0,0-3.36,11,21.42,21.42,0,0,0,.17,2.68,16,16,0,0,0-5.95,12.19c0,9.61,9.29,17.4,20.74,17.4s20.74-7.79,20.74-17.4A16,16,0,0,0,393.67,429.71Z"
          />
          <path
            class="cls-60"
            d="M393.67,429.71a19.67,19.67,0,0,0,.18-2.68,19.14,19.14,0,0,0-3.36-11,16.1,16.1,0,0,0,.45-3.78c0-5.83-3.07-10.83-7.44-12.94-4.62,28.8,8.76,41.89-11.35,59a24.21,24.21,0,0,0,6.73.94c11.46,0,20.74-7.79,20.74-17.4A16,16,0,0,0,393.67,429.71Z"
          />
          <ellipse
            class="cls-57"
            cx="340.35"
            cy="498.78"
            rx="16.75"
            ry="8.99"
          />
          <path
            class="cls-58"
            d="M340.35,499.82h0a1.63,1.63,0,0,1-1.63-1.63v-23a1.63,1.63,0,0,1,1.63-1.63h0a1.63,1.63,0,0,1,1.63,1.63v23A1.63,1.63,0,0,1,340.35,499.82Z"
          />
          <path
            class="cls-59"
            d="M355.14,452.84a19.67,19.67,0,0,0,.18-2.68,19.1,19.1,0,0,0-3.36-11,16.1,16.1,0,0,0,.44-3.78c0-7.74-5.39-14-12-14s-12.05,6.27-12.05,14a16.65,16.65,0,0,0,.44,3.78,19.16,19.16,0,0,0-3.35,11,21.42,21.42,0,0,0,.17,2.68A16,16,0,0,0,319.61,465c0,9.61,9.29,17.4,20.74,17.4s20.74-7.79,20.74-17.4A16,16,0,0,0,355.14,452.84Z"
          />
          <path
            class="cls-60"
            d="M355.14,452.84a19.67,19.67,0,0,0,.18-2.68,19.1,19.1,0,0,0-3.36-11,16.1,16.1,0,0,0,.44-3.78c0-5.83-3.07-10.84-7.43-12.94-4.62,28.8,8.76,41.89-11.36,59a24.72,24.72,0,0,0,6.74.94c11.46,0,20.74-7.79,20.74-17.4A16,16,0,0,0,355.14,452.84Z"
          />
          <polygon
            class="cls-4"
            points="365.05 509.22 364.57 451.41 387.7 437.19 397.58 438.08 435.34 472.77 435.94 546.3 422.36 539.19 422.36 539.22 365.05 509.22"
          />
          <polygon
            class="cls-61"
            points="435.34 472.84 444.84 467.11 444.84 466.91 445.65 466.62 484.44 454.5 486.42 452.54 508.46 455.17 507.97 502.88 452.68 536.26 452.68 536.2 435.94 546.3 435.34 472.84"
          />
          <polygon
            class="cls-62"
            points="435.96 548.2 435.9 540.35 365 503.29 365.03 511.1 435.96 548.2"
          />
          <polygon
            class="cls-63"
            points="435.96 548.2 435.9 540.35 508.03 496.85 507.97 504.76 435.96 548.2"
          />
          <polygon
            class="cls-64"
            points="391.91 533.92 424.51 534.62 406.8 524.93 391.91 533.92"
          />
          <polygon
            class="cls-65"
            points="391.91 533.92 391.85 526.53 406.74 517.54 406.8 524.93 391.91 533.92"
          />
          <line class="cls-66" x1="445.91" y1="407" x2="446.48" y2="444.3" />
          <polygon
            class="cls-65"
            points="454.21 515.22 466.67 507.69 466.51 487.96 454.05 495.48 454.21 515.22"
          />
          <polygon
            class="cls-22"
            points="454.21 515.22 454.05 495.48 464.33 489.27 464.5 509 454.21 515.22"
          />
          <polygon
            class="cls-65"
            points="454.19 512.43 454.07 497.54 461.83 492.85 461.95 507.74 454.19 512.43"
          />
          <polygon
            class="cls-65"
            points="481.63 499.18 494.1 491.66 493.93 471.93 481.47 479.45 481.63 499.18"
          />
          <polygon
            class="cls-22"
            points="481.63 499.18 481.47 479.45 491.76 473.24 491.92 492.97 481.63 499.18"
          />
          <polygon
            class="cls-65"
            points="481.61 496.39 481.49 481.5 489.25 476.81 489.38 491.71 481.61 496.39"
          />
          <polygon
            class="cls-65"
            points="381.83 496.33 369.25 489.74 369.09 470.01 381.67 476.6 381.83 496.33"
          />
          <polygon
            class="cls-22"
            points="381.83 496.33 381.67 476.6 371.29 471.16 371.45 490.89 381.83 496.33"
          />
          <polygon
            class="cls-65"
            points="381.81 493.54 381.69 478.65 373.85 474.54 373.97 489.44 381.81 493.54"
          />
          <polygon
            class="cls-65"
            points="425.32 516.96 412.74 510.37 412.58 490.64 425.16 497.23 425.32 516.96"
          />
          <polygon
            class="cls-22"
            points="425.32 516.96 425.16 497.23 414.78 491.79 414.94 511.52 425.32 516.96"
          />
          <polygon
            class="cls-65"
            points="425.3 514.17 425.18 499.28 417.34 495.17 417.46 510.07 425.3 514.17"
          />
          <polygon
            class="cls-65"
            points="388.45 478.37 388.77 517.27 403.39 524.93 403.39 524.89 406.88 526.72 406.56 487.81 388.45 478.37"
          />
          <polygon
            class="cls-22"
            points="393.78 519.89 403.39 524.93 403.39 524.89 406.88 526.72 406.56 487.81 393.46 480.98 393.78 519.89"
          />
          <polygon
            class="cls-65"
            points="405.36 499.94 396.69 495.4 396.61 486.08 405.28 490.62 405.36 499.94"
          />
          <path
            class="cls-65"
            d="M395.1,504h0a1.17,1.17,0,0,1-.63-.92l0-2.68c0-.33.28-.46.62-.29h0a1.17,1.17,0,0,1,.63.92l0,2.68C395.72,504,395.44,504.12,395.1,504Z"
          />
          <polygon
            class="cls-63"
            points="367.66 521.46 367.72 528.84 403.35 547.5 418.25 538.5 418.19 531.11 367.66 521.46"
          />
          <polygon
            class="cls-37"
            points="418.19 531.11 382.55 512.46 367.66 521.46 403.29 540.11 418.19 531.11"
          />
          <polygon
            class="cls-37"
            points="465.77 397.51 508.43 453.6 436.3 496.28 394.36 438.18 465.77 397.51"
          />
          <polygon
            class="cls-67"
            points="394.36 438.18 353.61 456.46 371.77 444.14 438.9 407.63 465.77 397.51 394.36 438.18"
          />
          <path
            class="cls-58"
            d="M508.43,453.6,436.3,496.28l-41.94-58.1-.64,2.66,41.64,56.71a1.69,1.69,0,0,0,2.22.45L507,457.22a2.87,2.87,0,0,0,1.42-2.51Z"
          />
          <path
            class="cls-58"
            d="M394.38,440.53l-39,17.05a1.23,1.23,0,0,1-1.73-1.12h0l40.75-18.28Z"
          />
          <ellipse
            class="cls-58"
            cx="457.28"
            cy="456.3"
            rx="6.75"
            ry="8.27"
            transform="translate(-148.94 679.47) rotate(-65.15)"
          />
          <path
            class="cls-68"
            d="M452.33,391.86C445,396.1,439,406.41,439,414.9s5.95,11.93,13.3,7.69,13.31-14.55,13.32-23S459.68,387.63,452.33,391.86Zm2,11.24a6.64,6.64,0,0,1,1-4.89,6.5,6.5,0,0,1,3.86-3.29C459.88,397.69,456.32,402.87,454.32,403.1Z"
          />
          <polygon
            class="cls-68"
            points="456.91 458.29 457.28 404.37 447.35 410.09 447.33 448.25 451.22 454.64 456.91 458.29"
          />
          <polygon
            class="cls-69"
            points="461.88 455.97 461.91 406.26 451.98 411.98 451.95 450.14 456.91 458.29 461.88 455.97"
          />
          <path
            class="cls-69"
            d="M457,393.76c-7.35,4.24-13.31,14.55-13.32,23s5.95,11.93,13.3,7.69,13.32-14.55,13.32-23S464.3,389.52,457,393.76Zm3.68,7.55c-1.48,2.56-3.88,3.95-5.36,3.09s-1.47-3.62,0-6.19,3.88-3.95,5.36-3.09S462.11,398.74,460.63,401.31Z"
          />
          <path
            class="cls-70"
            d="M461.67,396.74a7.05,7.05,0,0,1-1,4.57c-1.48,2.56-3.88,3.95-5.36,3.09-1-.56-1.3-1.94-1-3.54-3.46,3.62-5.9,8.94-5.91,13.52,0,6,4.23,8.48,9.45,5.46s9.46-10.33,9.47-16.36C467.28,399,465,396.53,461.67,396.74Z"
          />
          <path
            class="cls-71"
            d="M451.56,404.36a19.8,19.8,0,0,0-3.2,10c0,6,4.23,8.48,9.45,5.46s9.46-10.33,9.47-16.36a8.49,8.49,0,0,0-1.09-4.47"
          />
          <path
            class="cls-72"
            d="M447.33,395.25a21.34,21.34,0,0,1-4.4-12.29c0-7.17,5-10.69,11.23-7.86S465.4,386,465.4,393.18c0,6.93-4.71,10.44-10.63,8.11"
          />
          <line
            class="cls-71"
            x1="459.23"
            y1="419.35"
            x2="459.79"
            y2="456.65"
          />
          <path
            class="cls-58"
            d="M394.36,438.79a.61.61,0,0,1-.3-1.14l41-23.34a.61.61,0,1,1,.6,1.06l-41,23.34A.54.54,0,0,1,394.36,438.79Z"
          />
          <path
            class="cls-64"
            d="M548.2,498.85l-19.63-10.07L441.42,541l34.31.71L514.1,519a27.42,27.42,0,0,0,4.81.42c8.31,0,15.06-3.62,15.06-8.08a5.17,5.17,0,0,0-1.32-3.31Z"
          />
          <ellipse
            class="cls-57"
            cx="527.56"
            cy="494.26"
            rx="16.75"
            ry="8.99"
          />
          <path
            class="cls-58"
            d="M527.56,495.31h0a1.64,1.64,0,0,1-1.63-1.63v-23a1.64,1.64,0,0,1,1.63-1.63h0a1.63,1.63,0,0,1,1.63,1.63v23A1.63,1.63,0,0,1,527.56,495.31Z"
          />
          <path
            class="cls-59"
            d="M542.35,448.33a19.67,19.67,0,0,0,.18-2.68,19.1,19.1,0,0,0-3.36-11,16.1,16.1,0,0,0,.45-3.78c0-7.74-5.4-14-12.06-14s-12,6.27-12,14a16.1,16.1,0,0,0,.45,3.78,19.1,19.1,0,0,0-3.36,11,19.67,19.67,0,0,0,.18,2.68,16,16,0,0,0-6,12.19c0,9.61,9.29,17.4,20.74,17.4s20.74-7.79,20.74-17.4A16,16,0,0,0,542.35,448.33Z"
          />
          <path
            class="cls-60"
            d="M542.35,448.33a19.67,19.67,0,0,0,.18-2.68,19.1,19.1,0,0,0-3.36-11,16.1,16.1,0,0,0,.45-3.78c0-5.84-3.07-10.84-7.44-12.94-4.62,28.8,8.76,41.89-11.35,59a24.21,24.21,0,0,0,6.73.95c11.46,0,20.74-7.79,20.74-17.4A16,16,0,0,0,542.35,448.33Z"
          />
          <ellipse
            class="cls-57"
            cx="503.73"
            cy="530.53"
            rx="16.75"
            ry="8.99"
          />
          <path
            class="cls-58"
            d="M503.73,531.58h0a1.65,1.65,0,0,1-1.63-1.64v-23a1.64,1.64,0,0,1,1.63-1.63h0a1.64,1.64,0,0,1,1.63,1.63v23A1.64,1.64,0,0,1,503.73,531.58Z"
          />
          <path
            class="cls-59"
            d="M518.52,484.6a19.82,19.82,0,0,0,.18-2.69,19.09,19.09,0,0,0-3.36-11,16.17,16.17,0,0,0,.45-3.78c0-7.74-5.4-14-12.06-14s-12.05,6.27-12.05,14a16.17,16.17,0,0,0,.45,3.78,19.09,19.09,0,0,0-3.36,11,19.82,19.82,0,0,0,.18,2.69,16,16,0,0,0-6,12.19c0,9.61,9.29,17.39,20.74,17.39s20.74-7.78,20.74-17.39A16,16,0,0,0,518.52,484.6Z"
          />
          <path
            class="cls-60"
            d="M518.52,484.6a19.82,19.82,0,0,0,.18-2.69,19.09,19.09,0,0,0-3.36-11,16.17,16.17,0,0,0,.45-3.78c0-5.84-3.07-10.84-7.44-13-4.62,28.81,8.76,41.9-11.35,59a24.21,24.21,0,0,0,6.73.94c11.46,0,20.74-7.78,20.74-17.39A16,16,0,0,0,518.52,484.6Z"
          />
          <g class="cls-73">
            <path
              class="cls-74"
              d="M374.74,538.3c-6.44-3.6-17-3.76-23.55-.37s-6.67,9.07-.23,12.66,16.87,3.77,23.56.44C381.87,547.37,381.18,541.89,374.74,538.3Z"
            />
          </g>
          <path
            class="cls-75"
            d="M369.43,537.51c-6.12-3.42-16.13-3.57-22.37-.35s-6.33,8.61-.21,12,16,3.58,22.37.42C376.2,546.12,375.54,540.92,369.43,537.51Z"
          />
          <path
            class="cls-76"
            d="M369.21,534c-6.11-3.41-16.13-3.57-22.36-.34s-6.33,8.61-.22,12,16,3.58,22.37.42C376,542.58,375.33,537.38,369.21,534Z"
          />
          <path
            class="cls-22"
            d="M353,542.76a1.56,1.56,0,0,1-1.14-.5,1.53,1.53,0,0,1-.32-1.49l1.76-5.63a1.53,1.53,0,1,1,2.92.91l-1,3.14L367,536.72a1.53,1.53,0,0,1,.63,3l-14.27,3A1.63,1.63,0,0,1,353,542.76Z"
          />
          <g class="cls-77">
            <path
              class="cls-78"
              d="M146,524.74a.45.45,0,0,0,.1.14c.48.55,1.77.85,3.52.41,0,0,1-.25,2.53-.59l.35.2a18.72,18.72,0,0,0,19.93-1.54l.26.11.8.32.26.11s-8.61,6.75,2.45,10.73a17,17,0,0,0,6.31,1,20.29,20.29,0,0,1-1,3.47,1,1,0,0,0,.16,1.12,2.51,2.51,0,0,0,1.8.6,4.2,4.2,0,0,0,3.57-1.68,13.12,13.12,0,0,0,1.76-4.82,25.78,25.78,0,0,0,6.05-3.37,1.82,1.82,0,0,0,.29-2.91,18.67,18.67,0,0,0-2.9-1.86,40.45,40.45,0,0,0-10-4.15c-.64-.17-1.28-.34-1.92-.49l-.48-.28a54.16,54.16,0,0,0-10.48-4.37,37.17,37.17,0,0,0-12.18-3.66,2.5,2.5,0,0,0-1.43.29c-2.07,1.14-8,4.76-6.48,8.4l-.93.27C146.37,522.81,145.65,524.15,146,524.74Zm5.7-4.44c0,.21,0,.43,0,.64A2,2,0,0,1,151.7,520.3Z"
            />
          </g>
          <path
            class="cls-62"
            d="M184.75,537.91c2.24-3.85,2.47-7.5.69-10.84-1.42-2.66-4.11-5.13-8-7.34a59.23,59.23,0,0,0-14.58-5.5l-.59.53A61.44,61.44,0,0,1,178.35,525c4.46,4.08.81,12.77.77,12.86a1,1,0,0,0,.16,1.14,2.6,2.6,0,0,0,1.83.61A4.3,4.3,0,0,0,184.75,537.91Z"
          />
          <path
            class="cls-62"
            d="M179.88,520.51a66.27,66.27,0,0,0-34.47.16c-2,.63-2.72,2-2.37,2.6a.71.71,0,0,0,.1.14c.49.56,1.81.86,3.58.42.15,0,14.9-3.77,23.39-2.55a111.71,111.71,0,0,1,22.57,5.4l-.14-.23S188.32,522.84,179.88,520.51Z"
          />
          <path
            class="cls-62"
            d="M149.32,524.69a19,19,0,0,0,20.26-1.56l.26.11.82.33.26.1s-8.75,6.87,2.5,10.92c8.31,3,15.65-1.3,18.92-3.74a2.29,2.29,0,0,0,.86-1.27h0l.33-1.21-.41.15a1.58,1.58,0,0,0-.48-.62c-2.38-1.89-8-5.08-19.5-6.29l-.07,0c-6.07-6.8-16.2-8.43-19-8.75a2.4,2.4,0,0,0-1.45.29C149.9,514.59,140.79,520.22,149.32,524.69Zm23.4.53,1.38-1a2.54,2.54,0,0,1,1.72-.44c6.88.88,10.8,2.75,12.86,4.14,1.16.78.9,2.51-.51,3.26-2.95,1.57-8.16,3.5-13.64,1.53C166.16,529.74,172.72,525.22,172.72,525.22ZM153,515.11a2.42,2.42,0,0,1,1.56-.35c2.08.26,7.82,1.25,12.2,4.67a1.91,1.91,0,0,1-.53,3.15h0s-7.23,4.24-14.86.76C145.05,520.46,150.79,516.42,153,515.11Z"
          />
          <g class="cls-79">
            <path
              class="cls-80"
              d="M169.73,519.22a7.88,7.88,0,0,1-6.76,5.06c-5.34.56-12.4.1-13.62-2.92s-.19-7.41,2.57-8.57S167.16,514.14,169.73,519.22Z"
            />
          </g>
          <g class="cls-79">
            <path
              class="cls-80"
              d="M191,527.81a7.88,7.88,0,0,1-6.76,5.06c-5.34.56-12.4.1-13.62-2.92s-.19-7.41,2.58-8.57S188.39,522.73,191,527.81Z"
            />
          </g>
          <path
            class="cls-37"
            d="M174.87,531.49c-8.37-3-1.8-7.53-1.8-7.53l1.37-1a2.56,2.56,0,0,1,1.72-.44c6.88.88,10.8,2.75,12.86,4.13,1.17.79.9,2.51-.51,3.26C185.57,531.53,180.35,533.46,174.87,531.49Zm-23.17-9.41c-6.31-2.88-.56-6.92,1.62-8.24a2.5,2.5,0,0,1,1.56-.35c2.09.26,7.82,1.26,12.2,4.67a1.9,1.9,0,0,1-.53,3.15h0S159.33,525.56,151.7,522.08Zm21.78-1.74-.07,0c-6.07-6.8-16.2-8.42-19-8.75a2.49,2.49,0,0,0-1.45.3c-2.69,1.47-11.81,7.09-3.28,11.56a19,19,0,0,0,20.26-1.55l.27.1.81.33.27.11s-8.76,6.87,2.49,10.92c8.31,3,15.65-1.3,18.92-3.75a1.85,1.85,0,0,0,.3-3C190.6,524.73,185,521.55,173.48,520.34Z"
          />
          <path
            class="cls-22"
            d="M189.79,529.69l0,0a.08.08,0,0,1,0-.12s1-1.19.59-2.12c-.49-1.09-3.52-2.35-4.44-2.71a.1.1,0,0,1,0-.11.09.09,0,0,1,.11-.05c.93.37,4,1.66,4.53,2.8s-.57,2.25-.62,2.3A.07.07,0,0,1,189.79,529.69Z"
          />
          <path
            class="cls-22"
            d="M168,520.79s0,0,0,0a.07.07,0,0,1,0-.11s1-1.2.59-2.13-3.52-2.35-4.44-2.71a.08.08,0,0,1,0-.11.08.08,0,0,1,.1-.05c1.2.47,4,1.69,4.53,2.8s-.57,2.25-.62,2.3A.07.07,0,0,1,168,520.79Z"
          />
          <path
            class="cls-22"
            d="M185,530.26h0a.28.28,0,0,0,.19-.3l-1-4a.22.22,0,0,0-.3-.13h0a.27.27,0,0,0-.2.3l1,4A.24.24,0,0,0,185,530.26Z"
          />
          <path
            class="cls-22"
            d="M183.38,530.35h0a.11.11,0,0,0,.09-.14L182.39,526a.11.11,0,0,0-.15-.07h0a.13.13,0,0,0-.09.15l1.08,4.18A.11.11,0,0,0,183.38,530.35Z"
          />
          <path
            class="cls-22"
            d="M163.51,521.74h0a.27.27,0,0,0,.2-.3l-1-4a.24.24,0,0,0-.31-.14h0a.28.28,0,0,0-.19.3l1,4A.22.22,0,0,0,163.51,521.74Z"
          />
          <path
            class="cls-22"
            d="M161.9,521.84h0a.12.12,0,0,0,.09-.14l-1.08-4.19a.12.12,0,0,0-.15-.06h0a.11.11,0,0,0-.09.14l1.08,4.18A.11.11,0,0,0,161.9,521.84Z"
          />
          <path
            class="cls-22"
            d="M394,522.18l-1,.57,1.57.79-.66.39-1.57-.8-1,.58,1.9,1-.67.4-2.54-1.3,4-2.28,2.5,1.24-.64.39Z"
          />
          <path
            class="cls-22"
            d="M401.07,528.64l-.65.43L398.28,528l3.84-2.46.65.33-3.17,2Z"
          />
          <path
            class="cls-22"
            d="M399.49,524.1,394,525.77l.7.36,1.71.87.71.36Zm-2.94,2.26-.78-.4-.31-.16,2.5-.75-1.1,1.47Z"
          />
          <path
            class="cls-22"
            d="M388.82,523.08l.73-1.42a2.56,2.56,0,0,0,1.86-.23c1.15-.65-.07-1.26-.07-1.26l-1.17-.58a.12.12,0,0,0-.1,0l-.64.36h0l-1,.53h0l-2.32,1.27s0,0,0,0l.6.3a.12.12,0,0,0,.1,0l1.61-.89.25.13L388,522.7s0,0,0,0l.7.36S388.81,523.11,388.82,523.08Zm1-2-.62-.32.88-.49.58.29s.36.17.25.36a.75.75,0,0,1-.56.26A1.25,1.25,0,0,1,389.8,521.1Z"
          />
          <path
            class="cls-22"
            d="M384.39,522.59c.05,0,.08.06.07.1s0,.07-.09.11a.53.53,0,0,1-.2.05.38.38,0,0,1-.19,0,.1.1,0,0,1-.07-.1.17.17,0,0,1,.09-.1.47.47,0,0,1,.2-.06A.36.36,0,0,1,384.39,522.59Zm-3.26,1.89-.21-.11,2.39-1.3.2.11Z"
          />
          <path
            class="cls-22"
            d="M384.12,523.89h0a1.78,1.78,0,0,1,.56,0,1.21,1.21,0,0,1,.48.12.72.72,0,0,1,.27.22.24.24,0,0,1,0,.22.67.67,0,0,1-.2.23,2.38,2.38,0,0,1-.37.24l-1.44.81-.21-.11,1.44-.8a2.27,2.27,0,0,0,.28-.18.43.43,0,0,0,.18-.17.15.15,0,0,0,0-.17q0-.09-.21-.18a1,1,0,0,0-.41-.11,1.53,1.53,0,0,0-.43,0,2.3,2.3,0,0,0-.42.14l-.38.19-1.19.65-.2-.11,2.38-1.31.2.11Z"
          />
          <path
            class="cls-22"
            d="M384.37,526.19l-.21-.11,2.15-1.22-.24-.12.21-.12.24.12,1-.59.3-.16a2.3,2.3,0,0,1,.34-.12,1.42,1.42,0,0,1,.41,0,1.13,1.13,0,0,1,.34.1.4.4,0,0,1,.14.11l-.2.12-.06-.06-.08,0a.6.6,0,0,0-.27-.07,1.26,1.26,0,0,0-.27,0l-.25.1-.24.13-1,.56.54.28-.21.12-.54-.28Z"
          />
          <path
            class="cls-22"
            d="M388.58,525.75a1,1,0,0,1,.35.28.54.54,0,0,1,.1.34.6.6,0,0,1-.14.35,1.31,1.31,0,0,1-.39.33,2.44,2.44,0,0,1-.57.24,3.44,3.44,0,0,1-.63.1,2.56,2.56,0,0,1-.62,0,1.78,1.78,0,0,1-.55-.18.9.9,0,0,1-.34-.29.51.51,0,0,1-.08-.34.7.7,0,0,1,.15-.35,1.56,1.56,0,0,1,.38-.32,2.41,2.41,0,0,1,.57-.22,3.22,3.22,0,0,1,.62-.11,2.44,2.44,0,0,1,.61,0A1.8,1.8,0,0,1,388.58,525.75Zm-.23.11a1.81,1.81,0,0,0-.43-.14,2.79,2.79,0,0,0-.5,0,4.17,4.17,0,0,0-.51.09,2.76,2.76,0,0,0-.46.19,1.16,1.16,0,0,0-.31.26.52.52,0,0,0-.14.29.45.45,0,0,0,.06.27.75.75,0,0,0,.28.24,1.52,1.52,0,0,0,.44.15,2.24,2.24,0,0,0,.52,0,2.36,2.36,0,0,0,.52-.09,1.71,1.71,0,0,0,.46-.19,1.19,1.19,0,0,0,.33-.27.48.48,0,0,0,.12-.3.41.41,0,0,0-.08-.27A.93.93,0,0,0,388.35,525.86Z"
          />
          <path
            class="cls-22"
            d="M391.94,525.57l.21.11L390,527h0a2,2,0,0,1,.69,0,1.7,1.7,0,0,1,.59.18.89.89,0,0,1,.36.28.48.48,0,0,1,.09.32.75.75,0,0,1-.16.34,1.36,1.36,0,0,1-.4.33,2.5,2.5,0,0,1-.55.25,2.55,2.55,0,0,1-.61.13,2.49,2.49,0,0,1-.61,0,1.91,1.91,0,0,1-.54-.18.86.86,0,0,1-.22-.15.62.62,0,0,1-.14-.18.45.45,0,0,1-.05-.19.35.35,0,0,1,.05-.2h0l-.43.25-.21-.11Zm-2.87,2.9a1.26,1.26,0,0,0,.44.14,2.09,2.09,0,0,0,.5,0,2.78,2.78,0,0,0,.5-.11,2,2,0,0,0,.44-.2,1,1,0,0,0,.3-.26.5.5,0,0,0,.14-.28.45.45,0,0,0-.06-.27.6.6,0,0,0-.26-.23,1.41,1.41,0,0,0-.44-.14,1.93,1.93,0,0,0-.48,0,2.73,2.73,0,0,0-.48.1,2.28,2.28,0,0,0-.45.2,1.31,1.31,0,0,0-.33.26.67.67,0,0,0-.15.29.37.37,0,0,0,0,.27A.72.72,0,0,0,389.07,528.47Z"
          />
          <path
            class="cls-22"
            d="M396.15,529.75l.27.14-.2,1,1.63-.22.27.14-1.9.25L396,532.3l-.27-.14.24-1.11-1.86.26-.26-.14,2.13-.3Z"
          />
          <polygon
            class="cls-22"
            points="391.99 530.52 391.98 530.53 391.98 530.53 391.99 530.52"
          />
          <polygon
            class="cls-22"
            points="393.66 529.47 392.84 529.99 392.19 530.55 393.37 530.71 395.02 529.65 393.66 529.47"
          />
          <polygon
            class="cls-22"
            points="392.61 529.99 392.37 529.76 391.04 529.52 391.98 530.53 391.98 530.53 392.61 529.99"
          />
          <polygon
            class="cls-22"
            points="393.65 529.34 394.99 529.53 393.99 528.6 392.72 528.35 393.65 529.34"
          />
          <polygon
            class="cls-22"
            points="392.54 528.41 390.97 529.38 392.35 529.63 393.18 529.11 392.54 528.41"
          />
          <ellipse
            class="cls-57"
            cx="334.62"
            cy="523.76"
            rx="2.55"
            ry="16.73"
            transform="translate(-281.27 607.28) rotate(-65.15)"
          />
          <g class="cls-2">
            <path
              class="cls-81"
              d="M324.89,519.79h0a.24.24,0,0,1-.08.09l1.49-.87a.12.12,0,0,0,.06-.06l0,0h0v0h0v-.06h0v0h0l-1.49.87A.32.32,0,0,1,324.89,519.79Z"
            />
            <path
              class="cls-81"
              d="M326.52,479.6h0v-.06h0v-.12h0v-.1l0,0,0,0,0,0,0,0v0h0v0h0v0h0l0,0h-.06l-1-.59h-.24l0,0-1.49.86a.25.25,0,0,1,.12,0h0a.3.3,0,0,1,.15,0l1,.58a.53.53,0,0,1,.14.12h0a.61.61,0,0,1,.12.16h0a.75.75,0,0,1,.08.18h0a.57.57,0,0,1,0,.18l-.11,39.16,1.49-.87.11-39.16Z"
            />
            <path
              class="cls-22"
              d="M324.66,479.85a.82.82,0,0,1,.37.64l-.11,39.16c0,.23-.17.32-.37.2l-1-.58a.82.82,0,0,1-.37-.64l.12-39.16c0-.23.17-.32.37-.2Z"
            />
          </g>
          <g class="cls-2">
            <path
              class="cls-82"
              d="M351,503.23h0v-.06h0v-.06h0V503h0v-.08h0l0,0,0,0v0h0v0h0v0h-.09l-24.2-13.89h-.24l-.69.4a.16.16,0,0,1,.1,0h0a.3.3,0,0,1,.14.05l24.19,13.88a.72.72,0,0,1,.24.25h0a.56.56,0,0,1,.07.16h0a.55.55,0,0,1,0,.17l0,16.68a.32.32,0,0,1,0,.14h0a.18.18,0,0,1-.07.08l.7-.4.06-.06v0h0V520h0v0h0v0h0l.05-16.68Z"
            />
            <path
              class="cls-83"
              d="M349.93,503.06a.75.75,0,0,1,.34.59l0,16.68c0,.22-.15.3-.34.19l-24.19-13.88a.74.74,0,0,1-.34-.58l0-16.68c0-.22.16-.31.35-.2Z"
            />
          </g>
          <path
            class="cls-63"
            d="M330.5,491.61a.26.26,0,0,1-.26-.27V489a.26.26,0,0,1,.26-.27.27.27,0,0,1,.26.27v2.37A.27.27,0,0,1,330.5,491.61Z"
          />
          <path
            class="cls-63"
            d="M344.51,499.56a.26.26,0,0,1-.26-.26v-2.38a.27.27,0,0,1,.53,0v2.38A.27.27,0,0,1,344.51,499.56Z"
          />
          <g class="cls-2">
            <path
              class="cls-81"
              d="M354.13,500.65v0h0v-.12h0v-.06h0v-.1h0l0-.05,0,0,0,0v0h0v0h0v0h0l0,0h-.07l-31.87-18.41h-.27l-1.48.87a.2.2,0,0,1,.11,0h0a.3.3,0,0,1,.14.05l31.88,18.4a.53.53,0,0,1,.14.12h0a1,1,0,0,1,.12.16h0a1.42,1.42,0,0,1,.08.18h0a1.1,1.1,0,0,1,0,.18v1.16a.33.33,0,0,1,0,.15h0a.18.18,0,0,1-.08.09h0l1.49-.86.07-.06v0h0v-.1h0v0h0v-1.18Z"
            />
            <path
              class="cls-22"
              d="M352.28,500.89a.8.8,0,0,1,.36.64v1.16c0,.24-.16.34-.37.22L320.39,484.5a.81.81,0,0,1-.37-.64V482.7a.23.23,0,0,1,.37-.21Z"
            />
          </g>
          <path
            class="cls-22"
            d="M330.75,498.63a5.67,5.67,0,0,1,.89.64,5.12,5.12,0,0,1,.78.84l-.41,1a4.64,4.64,0,0,0-1.27-1.2.9.9,0,0,0-.57-.18c-.12,0-.18.13-.18.29a.78.78,0,0,0,.21.48,6.69,6.69,0,0,0,.68.63c.35.3.64.57.88.81a3.76,3.76,0,0,1,.59.88,2.46,2.46,0,0,1,.25,1.12,1.36,1.36,0,0,1-.23.83.83.83,0,0,1-.7.28,2.34,2.34,0,0,1-1.12-.39,6.6,6.6,0,0,1-1.09-.8,5.27,5.27,0,0,1-.85-1l.43-1a5.63,5.63,0,0,0,.72.84,4.78,4.78,0,0,0,.8.63c.5.28.75.27.75-.05a.76.76,0,0,0-.2-.5c-.15-.16-.38-.38-.7-.66a10.27,10.27,0,0,1-.87-.81,3.72,3.72,0,0,1-.6-.87,2.59,2.59,0,0,1-.24-1.12,1.32,1.32,0,0,1,.23-.85.83.83,0,0,1,.69-.29A2.53,2.53,0,0,1,330.75,498.63Z"
          />
          <path
            class="cls-22"
            d="M338.11,504.37a4.88,4.88,0,0,1,.32,1.77,2.51,2.51,0,0,1-.33,1.39,1.2,1.2,0,0,1-.92.57,2.24,2.24,0,0,1-1.32-.36,4.64,4.64,0,0,1-1.32-1.16,5.79,5.79,0,0,1-.91-1.63,5,5,0,0,1-.33-1.77,2.55,2.55,0,0,1,.34-1.39,1.25,1.25,0,0,1,.92-.57,2.34,2.34,0,0,1,1.32.37,4.76,4.76,0,0,1,1.32,1.15A6.36,6.36,0,0,1,338.11,504.37Zm-1.16,1.8a1.6,1.6,0,0,0,.16-.79,2.9,2.9,0,0,0-.16-1,2.82,2.82,0,0,0-.45-.86,2,2,0,0,0-.63-.58,1,1,0,0,0-.63-.15.61.61,0,0,0-.45.34,1.56,1.56,0,0,0-.17.78,3.27,3.27,0,0,0,.61,1.84,2.24,2.24,0,0,0,.63.57,1,1,0,0,0,.64.16.63.63,0,0,0,.45-.34"
          />
          <polygon
            class="cls-22"
            points="340.77 504.53 340.76 509.12 342.96 510.39 342.96 511.72 339.44 509.69 339.46 503.77 340.77 504.53"
          />
          <path
            class="cls-22"
            d="M348.26,510.25a5,5,0,0,1,.32,1.75,2.45,2.45,0,0,1-.33,1.38,1.08,1.08,0,0,1-.91.5,2.53,2.53,0,0,1-1.35-.41l-2.18-1.26v-5.92l2.19,1.26a5.18,5.18,0,0,1,1.34,1.14A5.45,5.45,0,0,1,348.26,510.25Zm-1.36,2a1.13,1.13,0,0,0,.36-1,2.81,2.81,0,0,0-.36-1.4,2.49,2.49,0,0,0-.95-1l-.82-.47v3.23l.82.48a1,1,0,0,0,1,.13"
          />
          <ellipse
            class="cls-64"
            cx="235.42"
            cy="501.05"
            rx="13.46"
            ry="7.61"
          />
          <path
            class="cls-75"
            d="M244.8,497.72a22.52,22.52,0,0,1-.33,4.75c-.43,1.71-1.91,3.33-4.42,4.52-5.5,2.62-13.83,2.19-18.59-.95-2.23-1.46-3.43-2.94-3.46-4.8-.07-1-.1-3.81-.1-3.81.17-.61.88,0,1.33-.54a8.87,8.87,0,0,1,3.73-3c5.51-2.62,13.83-2.2,18.6.94C243.57,496.16,244.66,496.12,244.8,497.72Z"
          />
          <ellipse
            class="cls-22"
            cx="231.36"
            cy="497.72"
            rx="13.46"
            ry="7.61"
          />
          <ellipse class="cls-76" cx="231.36" cy="497.3" rx="13.46" ry="7.61" />
          <ellipse class="cls-22" cx="231.35" cy="497.1" rx="9.41" ry="5.32" />
          <path
            class="cls-84"
            d="M225.35,493.66c4-1.88,9.93-1.56,13.24.7a4.42,4.42,0,0,1,2.15,3.06c.14-1.3-.56-2.63-2.15-3.71-3.31-2.27-9.24-2.58-13.24-.71-2.41,1.13-3.57,2.79-3.39,4.43C222.11,496,223.26,494.63,225.35,493.66Z"
          />
          <path
            class="cls-76"
            d="M227.19,498.85a2.6,2.6,0,0,1-1-1.72L228,497a1.94,1.94,0,0,0,.88,1.38,1.58,1.58,0,0,0,1.69.18c1.2-.59-1.69-2.5.41-3.54a4.5,4.5,0,0,1,3.83,0l1.2-.6,1.06.7-1.18.59a1.72,1.72,0,0,1,.66,1.56l-1.79-.05a1.19,1.19,0,0,0-.6-1.08,1.47,1.47,0,0,0-1.56-.17c-1.11.55,1.85,2.42-.38,3.53a4.66,4.66,0,0,1-4,0l-1.22.6-1-.7Z"
          />
          <ellipse class="cls-85" cx="231.35" cy="497.1" rx="9.41" ry="5.32" />
          <line class="cls-86" x1="231.55" y1="505.47" x2="231.59" y2="508.7" />
          <line
            class="cls-86"
            x1="235.01"
            y1="505.23"
            x2="235.03"
            y2="508.38"
          />
          <line class="cls-86" x1="238.3" y1="504.43" x2="238.32" y2="507.58" />
          <line
            class="cls-86"
            x1="241.26"
            y1="503.09"
            x2="241.27"
            y2="505.99"
          />
          <line class="cls-86" x1="243.67" y1="501.05" x2="243.6" y2="504" />
          <line
            class="cls-86"
            x1="227.93"
            y1="505.23"
            x2="227.92"
            y2="508.38"
          />
          <line
            class="cls-86"
            x1="224.64"
            y1="504.43"
            x2="224.63"
            y2="507.58"
          />
          <line
            class="cls-86"
            x1="221.69"
            y1="503.09"
            x2="221.68"
            y2="505.99"
          />
          <line class="cls-86" x1="219.27" y1="501.05" x2="219.34" y2="504" />
          <path
            class="cls-75"
            d="M245.42,491.86a23.29,23.29,0,0,1-.32,4.76c-.43,1.7-1.92,3.32-4.42,4.51-5.51,2.62-13.83,2.19-18.6-.94-2.22-1.47-3.43-2.95-3.46-4.81-.07-1-.1-3.81-.1-3.81.18-.61.89,0,1.34-.54a9,9,0,0,1,3.73-3c5.5-2.62,13.83-2.2,18.6.94C244.19,490.3,245.28,490.26,245.42,491.86Z"
          />
          <ellipse
            class="cls-22"
            cx="231.98"
            cy="491.86"
            rx="13.46"
            ry="7.61"
          />
          <ellipse
            class="cls-76"
            cx="231.98"
            cy="491.44"
            rx="13.46"
            ry="7.61"
          />
          <ellipse class="cls-22" cx="231.97" cy="491.24" rx="9.41" ry="5.32" />
          <path
            class="cls-84"
            d="M226,487.8c4-1.88,9.94-1.56,13.25.7a4.44,4.44,0,0,1,2.14,3.06c.14-1.3-.56-2.63-2.14-3.71-3.31-2.27-9.25-2.58-13.25-.71-2.41,1.13-3.57,2.8-3.39,4.43C222.73,490.16,223.88,488.77,226,487.8Z"
          />
          <path
            class="cls-76"
            d="M227.81,493a2.55,2.55,0,0,1-1-1.72l1.85-.11a2,2,0,0,0,.88,1.38,1.58,1.58,0,0,0,1.69.18c1.21-.59-1.69-2.49.42-3.54a4.48,4.48,0,0,1,3.82,0l1.21-.6,1.05.71-1.18.58a1.69,1.69,0,0,1,.66,1.56l-1.79,0a1.16,1.16,0,0,0-.6-1.08,1.45,1.45,0,0,0-1.55-.17c-1.12.55,1.85,2.42-.39,3.53a4.62,4.62,0,0,1-4,0l-1.21.6-1.06-.7Z"
          />
          <ellipse class="cls-85" cx="231.97" cy="491.24" rx="9.41" ry="5.32" />
          <line
            class="cls-86"
            x1="232.18"
            y1="499.61"
            x2="232.21"
            y2="502.85"
          />
          <line
            class="cls-86"
            x1="235.64"
            y1="499.37"
            x2="235.65"
            y2="502.52"
          />
          <line
            class="cls-86"
            x1="238.93"
            y1="498.57"
            x2="238.94"
            y2="501.72"
          />
          <line
            class="cls-86"
            x1="241.88"
            y1="497.23"
            x2="241.89"
            y2="500.13"
          />
          <line class="cls-86" x1="244.3" y1="495.19" x2="244.23" y2="498.14" />
          <line
            class="cls-86"
            x1="228.55"
            y1="499.37"
            x2="228.54"
            y2="502.52"
          />
          <line
            class="cls-86"
            x1="225.26"
            y1="498.57"
            x2="225.25"
            y2="501.72"
          />
          <line class="cls-86" x1="222.31" y1="497.23" x2="222.3" y2="500.13" />
          <line class="cls-86" x1="219.9" y1="495.19" x2="219.96" y2="498.14" />
          <ellipse
            class="cls-64"
            cx="204.14"
            cy="509.04"
            rx="13.46"
            ry="7.61"
          />
          <path
            class="cls-75"
            d="M213.52,505.71a22.62,22.62,0,0,1-.33,4.76c-.42,1.7-1.91,3.32-4.41,4.51-5.51,2.62-13.83,2.2-18.6-.94-2.22-1.46-3.43-2.95-3.46-4.81-.07-1-.1-3.8-.1-3.8.18-.62.89,0,1.34-.55a8.89,8.89,0,0,1,3.73-3c5.5-2.62,13.83-2.19,18.59.94C212.29,504.16,213.38,504.12,213.52,505.71Z"
          />
          <ellipse
            class="cls-22"
            cx="200.08"
            cy="505.71"
            rx="13.46"
            ry="7.61"
          />
          <ellipse class="cls-76" cx="200.08" cy="505.3" rx="13.46" ry="7.61" />
          <ellipse class="cls-22" cx="200.07" cy="505.1" rx="9.41" ry="5.32" />
          <path
            class="cls-84"
            d="M194.07,501.65c4-1.88,9.94-1.56,13.25.7a4.45,4.45,0,0,1,2.14,3.07c.14-1.3-.56-2.64-2.14-3.72-3.31-2.26-9.25-2.58-13.25-.7-2.41,1.13-3.57,2.79-3.39,4.43C190.83,504,192,502.63,194.07,501.65Z"
          />
          <path
            class="cls-76"
            d="M195.91,506.84a2.51,2.51,0,0,1-1-1.71l1.85-.11a2,2,0,0,0,.88,1.37,1.58,1.58,0,0,0,1.69.19c1.21-.6-1.69-2.5.42-3.55a4.52,4.52,0,0,1,3.82,0l1.21-.59,1.05.7-1.18.58a1.69,1.69,0,0,1,.66,1.56l-1.79-.05a1.17,1.17,0,0,0-.6-1.08,1.43,1.43,0,0,0-1.55-.16c-1.12.55,1.85,2.41-.39,3.52a4.62,4.62,0,0,1-4,0l-1.22.61-1-.71Z"
          />
          <ellipse class="cls-85" cx="200.07" cy="505.1" rx="9.41" ry="5.32" />
          <line class="cls-86" x1="200.28" y1="513.46" x2="200.31" y2="516.7" />
          <line
            class="cls-86"
            x1="203.74"
            y1="513.22"
            x2="203.75"
            y2="516.37"
          />
          <line
            class="cls-86"
            x1="207.03"
            y1="512.43"
            x2="207.04"
            y2="515.57"
          />
          <line
            class="cls-86"
            x1="209.98"
            y1="511.08"
            x2="209.99"
            y2="513.99"
          />
          <line class="cls-86" x1="212.4" y1="509.04" x2="212.33" y2="511.99" />
          <line
            class="cls-86"
            x1="196.65"
            y1="513.22"
            x2="196.64"
            y2="516.37"
          />
          <line
            class="cls-86"
            x1="193.36"
            y1="512.43"
            x2="193.35"
            y2="515.57"
          />
          <line class="cls-86" x1="190.41" y1="511.08" x2="190.4" y2="513.99" />
          <line
            class="cls-86"
            x1="187.99"
            y1="509.04"
            x2="188.06"
            y2="511.99"
          />
          <path
            class="cls-75"
            d="M214.14,499.85a23.24,23.24,0,0,1-.32,4.76c-.43,1.7-1.91,3.32-4.42,4.51-5.5,2.62-13.83,2.2-18.59-.94-2.23-1.46-3.43-2.95-3.46-4.81-.07-1-.1-3.8-.1-3.8.17-.61.88,0,1.33-.55a9,9,0,0,1,3.73-3c5.51-2.61,13.83-2.19,18.6,1C212.92,498.3,214,498.26,214.14,499.85Z"
          />
          <ellipse
            class="cls-22"
            cx="200.71"
            cy="499.85"
            rx="13.46"
            ry="7.61"
          />
          <ellipse
            class="cls-76"
            cx="200.71"
            cy="499.44"
            rx="13.46"
            ry="7.61"
          />
          <ellipse class="cls-22" cx="200.7" cy="499.24" rx="9.41" ry="5.32" />
          <path
            class="cls-84"
            d="M194.7,495.79c4-1.87,9.93-1.56,13.24.7a4.47,4.47,0,0,1,2.15,3.07c.14-1.3-.56-2.64-2.15-3.72-3.31-2.26-9.24-2.58-13.24-.7-2.41,1.13-3.57,2.79-3.4,4.43C191.46,498.15,192.61,496.77,194.7,495.79Z"
          />
          <path
            class="cls-76"
            d="M196.54,501a2.6,2.6,0,0,1-1-1.72l1.86-.11a1.94,1.94,0,0,0,.87,1.37,1.56,1.56,0,0,0,1.69.19c1.21-.6-1.69-2.5.42-3.54a4.5,4.5,0,0,1,3.83,0l1.2-.59,1.06.7-1.19.59a1.67,1.67,0,0,1,.66,1.55l-1.78-.05a1.2,1.2,0,0,0-.61-1.08,1.44,1.44,0,0,0-1.55-.16c-1.11.55,1.85,2.41-.38,3.52a4.62,4.62,0,0,1-4,0l-1.22.61-1.06-.7Z"
          />
          <ellipse class="cls-85" cx="200.7" cy="499.24" rx="9.41" ry="5.32" />
          <line class="cls-86" x1="200.9" y1="507.6" x2="200.93" y2="510.84" />
          <line
            class="cls-86"
            x1="204.36"
            y1="507.36"
            x2="204.38"
            y2="510.51"
          />
          <line
            class="cls-86"
            x1="207.65"
            y1="506.57"
            x2="207.67"
            y2="509.72"
          />
          <line class="cls-86" x1="210.6" y1="505.22" x2="210.62" y2="508.13" />
          <line
            class="cls-86"
            x1="213.02"
            y1="503.18"
            x2="212.95"
            y2="506.13"
          />
          <line
            class="cls-86"
            x1="197.28"
            y1="507.36"
            x2="197.26"
            y2="510.51"
          />
          <line
            class="cls-86"
            x1="193.99"
            y1="506.57"
            x2="193.97"
            y2="509.72"
          />
          <line
            class="cls-86"
            x1="191.04"
            y1="505.22"
            x2="191.02"
            y2="508.13"
          />
          <line
            class="cls-86"
            x1="188.62"
            y1="503.18"
            x2="188.69"
            y2="506.13"
          />
          <path
            class="cls-75"
            d="M245.9,486.51a23.19,23.19,0,0,1-.32,4.75c-.43,1.71-1.91,3.33-4.42,4.52-5.5,2.61-13.83,2.19-18.59-.95-2.23-1.46-3.43-2.94-3.46-4.8-.07-1-.1-3.81-.1-3.81.17-.61.88,0,1.33-.54a8.87,8.87,0,0,1,3.73-3c5.51-2.62,13.83-2.2,18.6.94C244.68,485,245.76,484.91,245.9,486.51Z"
          />
          <ellipse
            class="cls-22"
            cx="232.47"
            cy="486.51"
            rx="13.46"
            ry="7.61"
          />
          <ellipse
            class="cls-76"
            cx="232.47"
            cy="486.09"
            rx="13.46"
            ry="7.61"
          />
          <ellipse class="cls-22" cx="232.46" cy="485.89" rx="9.41" ry="5.32" />
          <path
            class="cls-84"
            d="M226.46,482.45c4-1.88,9.93-1.57,13.24.7a4.45,4.45,0,0,1,2.15,3.06c.14-1.3-.56-2.63-2.15-3.71-3.31-2.27-9.24-2.58-13.24-.71-2.41,1.13-3.57,2.79-3.4,4.43C223.22,484.8,224.37,483.42,226.46,482.45Z"
          />
          <path
            class="cls-76"
            d="M228.3,487.64a2.6,2.6,0,0,1-1-1.72l1.86-.11a2,2,0,0,0,.87,1.38,1.58,1.58,0,0,0,1.69.18c1.21-.59-1.69-2.5.42-3.54a4.5,4.5,0,0,1,3.83,0l1.2-.6,1.06.7-1.19.59a1.67,1.67,0,0,1,.66,1.56l-1.78-.05a1.18,1.18,0,0,0-.61-1.08,1.45,1.45,0,0,0-1.55-.17c-1.11.55,1.85,2.42-.38,3.53a4.66,4.66,0,0,1-3.95,0l-1.22.6-1.06-.7Z"
          />
          <ellipse class="cls-85" cx="232.46" cy="485.89" rx="9.41" ry="5.32" />
          <line
            class="cls-86"
            x1="232.66"
            y1="494.26"
            x2="232.69"
            y2="497.49"
          />
          <line
            class="cls-86"
            x1="236.12"
            y1="494.02"
            x2="236.14"
            y2="497.17"
          />
          <line
            class="cls-86"
            x1="239.41"
            y1="493.22"
            x2="239.43"
            y2="496.37"
          />
          <line
            class="cls-86"
            x1="242.37"
            y1="491.88"
            x2="242.38"
            y2="494.78"
          />
          <line
            class="cls-86"
            x1="244.78"
            y1="489.84"
            x2="244.71"
            y2="492.79"
          />
          <line
            class="cls-86"
            x1="229.04"
            y1="494.02"
            x2="229.02"
            y2="497.17"
          />
          <line
            class="cls-86"
            x1="225.75"
            y1="493.22"
            x2="225.73"
            y2="496.37"
          />
          <line class="cls-86" x1="222.8" y1="491.88" x2="222.78" y2="494.78" />
          <line
            class="cls-86"
            x1="220.38"
            y1="489.84"
            x2="220.45"
            y2="492.79"
          />
          <path
            class="cls-87"
            d="M267,475.42s6.42,10.63,7.1,17.35c0,0-1.54,3.74-2.88.51-3.28-7.88-5.59-14.65-8.07-17.28S267,475.42,267,475.42Z"
          />
          <path
            class="cls-64"
            d="M268.54,541.43c-4.15,2.63-11.51,3.26-16.43,1.4s-5.55-5.49-1.39-8.12,11.51-3.26,16.43-1.41S272.7,538.8,268.54,541.43Z"
          />
          <path
            class="cls-63"
            d="M256.23,540.78l-2.5-5.19a3.76,3.76,0,0,0-2.31-.77,1,1,0,0,0-.87.74l-.31.91c-.49,1.31-.44,1.52.09,2.1l3.19,3.44a2.07,2.07,0,0,0,2.23.48l.2-.09A1,1,0,0,0,256.23,540.78Z"
          />
          <path
            class="cls-22"
            d="M250.47,535.61c.05,1.25,3.18,1.47,3.13.22l-.16-4.07-3.13-.22Z"
          />
          <path
            class="cls-63"
            d="M267.94,535.62l-5.29-3.47a4.1,4.1,0,0,0-2.42,0c-.42.11-.49-.2-.46.19l-.33,1.29c-.41,1.1.64,2.09,1.9,2.5l4,1.4a3.46,3.46,0,0,0,2.82-.31l.18-.13C269,536.57,268.83,535.93,267.94,535.62Z"
          />
          <path
            class="cls-22"
            d="M259.78,532.61c.05,1.29,3.19,1.18,3.14-.12l-.15-4.19-3.14.11Z"
          />
          <path
            class="cls-88"
            d="M259.19,531.36c1.27.85,3.3.76,3.93-.31a207.07,207.07,0,0,0,1.22-39.34l-9.9-2.58C257,505,259.75,519.07,259.19,531.36Z"
          />
          <path
            class="cls-88"
            d="M249.74,533.24c.94,1.5,3.6,1.37,4.29.38l5.13-42.53-10.48-.42Z"
          />
          <path
            class="cls-89"
            d="M257,505.82l.86,3.92,2-11.91c-.48.16-.51-.43-1-.32Z"
          />
          <path
            class="cls-87"
            d="M250.58,480.36a30.62,30.62,0,0,0-5,8.09,5.55,5.55,0,0,0,.57,5.95c1.48,1.79,3.19,3.81,3.19,3.81l-1.76,1.72s-6.8-5.42-5.94-10.64l3.45-12.43Z"
          />
          <path
            class="cls-87"
            d="M247.75,498.73l.29-.28a1.43,1.43,0,0,1,2,.09l1.2,1.18a1.44,1.44,0,0,1,.11,2l-.28.28a1.43,1.43,0,0,1-2-.08l-1.2-1.19A1.43,1.43,0,0,1,247.75,498.73Z"
          />
          <path
            class="cls-69"
            d="M263.87,468.47c3.29,4.88,6.46,9.79,6.92,13.19-.71,2.88-1.56,1.33-3.53,2.1l-6.34-10.26,1.53-2.8Z"
          />
          <path
            class="cls-69"
            d="M265.06,492.33a122.43,122.43,0,0,1,.65-15.68c0-8.52-3.27-11.66-8.63-9.68l-2.22.6c-6.46,3.53-9.76,3.37-8.56,10.22l1.2,15C247.54,500.56,265.52,501.43,265.06,492.33Z"
          />
          <polygon
            class="cls-70"
            points="250.56 479.84 247.82 491.45 247.5 492.58 247.06 486.99 250.56 479.84"
          />
          <path
            class="cls-69"
            d="M251.08,478.47l-5.67,11.77c-.46.71-4-.25-4-1.49,0-2.57,3.55-16.09,7.33-17.9C251.77,469.39,252.76,474.28,251.08,478.47Z"
          />
          <path
            class="cls-87"
            d="M272.65,497.24h0a1.45,1.45,0,0,0,.93-1.83l-1.07-3.27a1.45,1.45,0,0,0-1.83-.92h0a1.46,1.46,0,0,0-.93,1.83l1.07,3.26A1.46,1.46,0,0,0,272.65,497.24Z"
          />
          <path
            class="cls-87"
            d="M274,494.88h0a1.47,1.47,0,0,0,.8-1.9l-1.3-3.18a1.47,1.47,0,0,0-1.9-.79h0a1.45,1.45,0,0,0-.79,1.89l1.3,3.18A1.46,1.46,0,0,0,274,494.88Z"
          />
          <polygon
            class="cls-90"
            points="273.34 494.67 270.71 495.98 271.4 497.43 274.2 495.82 273.34 494.67"
          />
          <path
            class="cls-83"
            d="M289.67,495.45s-3.4,12.5-10.11,9.92c-5.47-2.11-8.56-8-8.56-8l3.58-1.73s5.2,4.81,6.83,4.47c3.72-.76,3.36-8.95,5.92-9.65C288.79,490.1,289.67,495.45,289.67,495.45Z"
          />
          <path
            class="cls-70"
            d="M245.15,488.9a1.32,1.32,0,0,1,.5,1.59c-.42,1-5.13.53-4.85-1S241.34,487.31,245.15,488.9Z"
          />
          <path
            class="cls-70"
            d="M268.21,484.47a1.32,1.32,0,0,1-1.63-1v0c-.21-1,3.87-3.42,4.52-2S271.56,483.62,268.21,484.47Z"
          />
          <path
            class="cls-63"
            d="M258.28,467.28a4.72,4.72,0,0,1-1.11,1.08c-.41.16-5.58-2.73-4.64-7.13.59-2.78,5.87-1.58,5.87-1.58Z"
          />
          <path
            class="cls-87"
            d="M255.52,471.14l-1.15-1.32c.86.21,3.18.59,3.39-.27l1.13-4.37a1.62,1.62,0,0,0-1.18-1.94l-.26-.06a1.61,1.61,0,0,0-1.94,1.18l-1.81,4.48C253.5,469.7,254.67,470.93,255.52,471.14Z"
          />
          <path
            class="cls-91"
            d="M258.26,467.79a4.39,4.39,0,0,1-3.34-2.21s1.11,3.17,3,3.56Z"
          />
          <path
            class="cls-89"
            d="M249.19,503.52s2.42-4.64,2.44-5.1c0,0,1.07,2.33.14,3.69A3.55,3.55,0,0,1,249.19,503.52Z"
          />
          <path
            class="cls-83"
            d="M303.73,489a32.63,32.63,0,0,1,4.63,12.62,4.9,4.9,0,0,1-.05,2.79c-1.09,3.5-2.19,3.63-2.74,7.29-.27,1.85-2.56.87-2.29-1,.51-3.41.54-2.72,1.75-5.95.23-.61.47-1.21.73-1.81-.24.55,0,1-.06.47-.06-.31-.11-.62-.17-.94-.91-4.88-1.88-10.3-4.5-14.59-1-1.61,1.61-3,2.59-1.39Z"
          />
          <path
            class="cls-83"
            d="M304.41,487.72c1.82,3.45,3,9.22,4.13,13.9.44,1.3.09,2.44-.71,2.36l-2.72.28c-.66-.07-1.88-1.55-2.15-2.63l-3-11.91c-.49-1.93,0-3.57,1.09-3.77l-2.55-2C298.71,483.24,303.36,484.18,304.41,487.72Z"
          />
          <path
            class="cls-63"
            d="M294.56,508.85l13.28,8.32a1,1,0,0,0,1.52-.81l.34-9.45a1,1,0,0,0-.46-.88L296,497.71a1,1,0,0,0-1.52.81l-.34,9.45A1,1,0,0,0,294.56,508.85Z"
          />
          <path
            class="cls-87"
            d="M301.68,515.2l1,.48a1.53,1.53,0,0,0,2-.68h0a1.52,1.52,0,0,0-.69-2l-1-.48a1.52,1.52,0,0,0-2,.68h0A1.52,1.52,0,0,0,301.68,515.2Z"
          />
          <ellipse
            class="cls-64"
            cx="293"
            cy="552.23"
            rx="11.38"
            ry="5.65"
            transform="translate(-10.03 5.44) rotate(-1.05)"
          />
          <path
            class="cls-63"
            d="M300.46,547.26l-2.66-.43c-1.77-.88-2.58-1.52-3.4-1.09l-.23.13c-.82.43-.75,1.25.16,1.81l3.82,3.28a2.61,2.61,0,0,0,2.92-.18s.45-.38.2-2.07C301.12,547.75,301.19,547.72,300.46,547.26Z"
          />
          <path
            class="cls-63"
            d="M288.56,552.2l-2.66.83c-2,0-3.09-.16-3.64.58l-.15.22c-.55.74-.11,1.43,1,1.51l5.68,1.16c1.1.09,1.56-.61,2-1.49a3.86,3.86,0,0,0-.31-2.29C290,551.84,289.43,552.27,288.56,552.2Z"
          />
          <path
            class="cls-22"
            d="M287.37,553.08c0,1.26,3,1.37,3.06.11l.14-4.08-3.05-.11Z"
          />
          <path
            class="cls-92"
            d="M287.08,550.49c.33,1.6,3.51,1.6,4.16.6a172.69,172.69,0,0,1,6.46-42.31l-11-.39A396.64,396.64,0,0,0,287.08,550.49Z"
          />
          <path
            class="cls-22"
            d="M298,547.42c0,1.14,3.08,1.25,3,.11l-.09-3.7-3.05-.11Z"
          />
          <path
            class="cls-92"
            d="M297.44,545.76c1.18,1.3,3.6.85,4.09,0l-.3-36.85-7.71.86Z"
          />
          <path
            class="cls-93"
            d="M291.18,480.15c.85,2.61,2.84,3.28,4.44,1.5s2.2-5.34,1.35-7.95-3.76-.83-5.36.95S290.33,477.54,291.18,480.15Z"
          />
          <path
            class="cls-87"
            d="M288.94,480.23c.66,2.67,3.45,3.72,5.18,2.06s2.58-5.17,1.92-7.83-2.6-3.48-4.32-1.81S288.28,477.57,288.94,480.23Z"
          />
          <path
            class="cls-87"
            d="M295.06,488.07l.28-.05a1.78,1.78,0,0,0,1.43-2.07l-1-5.43a1.78,1.78,0,0,0-2.07-1.42l-.29,0a1.78,1.78,0,0,0-1.42,2.07l.2,5.36C292.36,487.54,294.1,488.25,295.06,488.07Z"
          />
          <path
            class="cls-63"
            d="M298.53,481s-.38,2.47-3.89,1.85c-2.52-.45-1.63-4.54-4.15-5.05-2.77-.55-3.15-4-2-5.29s4.23-1.86,6.42-.8S300.52,472.81,298.53,481Z"
          />
          <path
            class="cls-87"
            d="M290.43,479.21a1.21,1.21,0,0,0,1.46.88,1.21,1.21,0,1,0-1.46-.88Z"
          />
          <path
            class="cls-83"
            d="M301.57,508.4c-.72-5,1.26-8.27,1.37-13.53.74-8.75-2-11.24-5-11,0,0-2.77.71-3.4,1-6.7,3.15-8.5,4.14-8.35,8.08-.26,6.48.43,13.78.45,17C287.8,514.42,300,511.56,301.57,508.4Z"
          />
          <path
            class="cls-91"
            d="M292.05,483.09l.31-.65a1.83,1.83,0,0,1-1.5.33A2.37,2.37,0,0,0,292.05,483.09Z"
          />
          <polygon
            class="cls-65"
            points="294.8 522.05 298.21 517.52 294.92 518.83 294.8 522.05"
          />
          <path
            class="cls-63"
            d="M258.06,473.87h0a1.15,1.15,0,0,1-1.42-.77l-.39-1.6a1.14,1.14,0,0,1,.89-1.33h0a1.15,1.15,0,0,1,1.42.77l.39,1.6A1.14,1.14,0,0,1,258.06,473.87Z"
          />
          <path
            class="cls-63"
            d="M257.18,473.54c.55,3,.18,6.92,0,10.77l2.53,1.64,1.29-2.43A42.6,42.6,0,0,0,258.85,473Z"
          />
          <path
            class="cls-22"
            d="M254.37,467.21l-2.15,1.68s1.64,2.88,3.53,3.32l1.43-2.26A5.32,5.32,0,0,1,254.37,467.21Z"
          />
          <path
            class="cls-22"
            d="M258.51,466.13l1.79.86s.78,3.95-1.12,4.73L256.92,470S258.61,469.12,258.51,466.13Z"
          />
          <path
            class="cls-87"
            d="M257.29,465.76c.88,2.23,2.64,2.71,3.94,1.08a7.82,7.82,0,0,0,.76-7c-.87-2.22-2.64-2.7-3.94-1.07A7.8,7.8,0,0,0,257.29,465.76Z"
          />
          <path
            class="cls-87"
            d="M254.8,465.27c.88,2.23,4.77,3.59,6.07,2s.29-5.54-.59-7.77-2.64-2.71-3.94-1.07S253.93,463,254.8,465.27Z"
          />
          <path
            class="cls-63"
            d="M257.37,459.84s.51,4.41-3,5.41c0,0-3.95-2.27-1.06-6.52,2.54-3.75,6.64-.91,6.64-.91Z"
          />
          <path
            class="cls-63"
            d="M262.47,462.8a4.19,4.19,0,0,0-2.77-2.68l1.81-1.09S263.37,459.45,262.47,462.8Z"
          />
          <path
            class="cls-63"
            d="M255.55,462.44c.76-1,2.4-1,4.73-.19a2.22,2.22,0,0,0,1.11.11c1.73-.37,2-2.52,2-2.52.37-1.43-.58-2.08-2-2.45l-3.75-1a4,4,0,0,0-4.53,2.63l-.1.23C252.61,460.72,254.11,462.07,255.55,462.44Z"
          />
          <path
            class="cls-87"
            d="M254,465.12a1.05,1.05,0,1,0,.59-1.37A1,1,0,0,0,254,465.12Z"
          />
          <path
            class="cls-53"
            d="M104.37,192.8c-5.32,1.83-18.07,6.52-24.53,8.9a6.3,6.3,0,0,0-4.11,5.57l-1,17.86a6.31,6.31,0,0,0,5,6.52l38.11,7.78a6.27,6.27,0,0,0,4.46-.75L143.82,226a20.53,20.53,0,0,0,6.34-6.44c1-1.69,1.76-2.86,1.89-4.06,1.08-9.73-36.07-19.68-43.13-22.53C108.58,192.85,107.34,191.78,104.37,192.8Z"
          />
          <path
            class="cls-94"
            d="M104.37,192.8c-5.32,1.83-18.07,6.52-24.53,8.9a6.3,6.3,0,0,0-4.11,5.57l-1,17.86a6.31,6.31,0,0,0,5,6.52l38.11,7.78a6.27,6.27,0,0,0,4.46-.75L143.82,226a20.53,20.53,0,0,0,6.34-6.44c1-1.69,1.76-2.86,1.89-4.06,1.08-9.73-36.07-19.68-43.13-22.53C108.58,192.85,107.34,191.78,104.37,192.8Z"
          />
          <path
            class="cls-3"
            d="M151,216.47l-14.45-8.36-24.39,23.65h13.14a1.71,1.71,0,0,0,.88-.24L151,217.2A.42.42,0,0,0,151,216.47Z"
          />
          <polygon
            class="cls-95"
            points="85.26 216.24 86.35 215.73 94.44 210.94 94.44 164.16 85.26 169.47 85.26 216.24"
          />
          <polygon
            class="cls-96"
            points="84.92 216.05 85.26 216.24 85.26 169.47 84.92 169.27 84.92 216.05"
          />
          <polygon
            class="cls-97"
            points="110.03 229.05 107.99 227.87 108.12 227.79 110.16 228.97 110.03 229.05"
          />
          <polygon
            class="cls-98"
            points="110.03 229.13 110.03 229.05 110.16 228.97 110.16 229.05 110.03 229.13"
          />
          <polygon
            class="cls-99"
            points="110.03 229.13 110.03 229.06 110.16 228.99 110.16 229.05 110.03 229.13"
          />
          <polygon
            class="cls-100"
            points="110.03 229.13 107.99 227.95 107.99 227.87 110.03 229.05 110.03 229.13"
          />
          <polygon
            class="cls-98"
            points="110.03 229.13 107.99 227.95 107.99 227.89 110.03 229.06 110.03 229.13"
          />
          <polygon
            class="cls-97"
            points="112.2 230.31 110.03 229.05 110.16 228.97 112.34 230.23 112.2 230.31"
          />
          <polygon
            class="cls-98"
            points="112.2 230.38 112.2 230.31 112.34 230.23 112.34 230.31 112.2 230.38"
          />
          <polygon
            class="cls-99"
            points="112.2 230.38 112.2 230.32 112.34 230.24 112.34 230.31 112.2 230.38"
          />
          <polygon
            class="cls-100"
            points="112.2 230.38 110.03 229.13 110.03 229.05 112.2 230.31 112.2 230.38"
          />
          <polygon
            class="cls-98"
            points="112.2 230.38 110.03 229.13 110.03 229.06 112.2 230.32 112.2 230.38"
          />
          <polygon
            class="cls-97"
            points="113.37 230.97 112.2 230.31 112.34 230.23 113.5 230.9 113.37 230.97"
          />
          <polygon
            class="cls-100"
            points="113.37 231.05 112.2 230.38 112.2 230.31 113.37 230.97 113.37 231.05"
          />
          <polygon
            class="cls-98"
            points="113.37 231.05 112.2 230.38 112.2 230.32 113.37 230.99 113.37 231.05"
          />
          <polygon
            class="cls-97"
            points="108.78 228.51 107.82 227.96 107.96 227.89 108.91 228.44 108.78 228.51"
          />
          <polygon
            class="cls-98"
            points="108.78 228.59 108.78 228.51 108.91 228.44 108.91 228.51 108.78 228.59"
          />
          <polygon
            class="cls-99"
            points="108.78 228.59 108.78 228.53 108.91 228.45 108.91 228.51 108.78 228.59"
          />
          <polygon
            class="cls-100"
            points="108.78 228.59 107.82 228.04 107.82 227.96 108.78 228.51 108.78 228.59"
          />
          <polygon
            class="cls-98"
            points="108.78 228.59 107.82 228.04 107.82 227.98 108.78 228.53 108.78 228.59"
          />
          <polygon
            class="cls-97"
            points="110.95 229.77 108.78 228.51 108.91 228.44 111.09 229.69 110.95 229.77"
          />
          <polygon
            class="cls-98"
            points="110.95 229.85 110.95 229.77 111.09 229.69 111.09 229.77 110.95 229.85"
          />
          <polygon
            class="cls-99"
            points="110.95 229.85 110.95 229.79 111.09 229.71 111.09 229.77 110.95 229.85"
          />
          <polygon
            class="cls-100"
            points="110.95 229.85 108.78 228.59 108.78 228.51 110.95 229.77 110.95 229.85"
          />
          <polygon
            class="cls-98"
            points="110.95 229.85 108.78 228.59 108.78 228.53 110.95 229.79 110.95 229.85"
          />
          <polygon
            class="cls-97"
            points="113.13 231.03 110.95 229.77 111.09 229.69 113.27 230.95 113.13 231.03"
          />
          <polygon
            class="cls-98"
            points="113.13 231.11 113.13 231.03 113.27 230.95 113.27 231.03 113.13 231.11"
          />
          <polygon
            class="cls-99"
            points="113.13 231.11 113.13 231.04 113.27 230.96 113.27 231.03 113.13 231.11"
          />
          <polygon
            class="cls-100"
            points="113.13 231.11 110.95 229.85 110.95 229.77 113.13 231.03 113.13 231.11"
          />
          <polygon
            class="cls-98"
            points="113.13 231.11 110.95 229.85 110.95 229.79 113.13 231.04 113.13 231.11"
          />
          <polygon
            class="cls-97"
            points="113.04 231.16 111.88 230.49 112.02 230.41 113.18 231.08 113.04 231.16"
          />
          <polygon
            class="cls-100"
            points="113.04 231.24 111.88 230.57 111.88 230.49 113.04 231.16 113.04 231.24"
          />
          <polygon
            class="cls-98"
            points="113.04 231.24 111.88 230.57 111.88 230.51 113.04 231.18 113.04 231.24"
          />
          <polygon
            class="cls-97"
            points="112.72 231.35 111.56 230.68 111.69 230.6 112.86 231.27 112.72 231.35"
          />
          <polygon
            class="cls-100"
            points="112.72 231.43 111.56 230.76 111.56 230.68 112.72 231.35 112.72 231.43"
          />
          <polygon
            class="cls-98"
            points="112.72 231.43 111.56 230.76 111.56 230.69 112.72 231.36 112.72 231.43"
          />
          <polygon
            class="cls-101"
            points="89.11 216.98 86.64 215.75 86.64 210.65 89.11 212.07 89.11 216.98"
          />
          <polygon
            class="cls-96"
            points="86.52 215.83 86.35 215.73 86.35 210.62 86.52 210.72 86.52 215.83"
          />
          <polygon
            class="cls-95"
            points="86.69 215.73 86.52 215.83 86.52 210.72 86.69 210.62 86.69 215.73"
          />
          <polygon
            class="cls-96"
            points="86.69 210.62 86.52 210.72 86.35 210.62 86.52 210.53 86.69 210.62"
          />
          <polygon
            class="cls-102"
            points="86.64 215.75 86.56 215.8 86.56 210.7 86.62 210.65 86.64 215.75"
          />
          <polygon
            class="cls-95"
            points="89.15 216.96 88.98 217.05 88.98 217.25 89.16 217.15 89.15 216.96"
          />
          <polygon
            class="cls-102"
            points="86.64 215.75 86.56 215.8 88.86 216.94 88.94 216.89 86.64 215.75"
          />
          <polyline
            class="cls-103"
            points="86.56 210.77 89.03 212.12 88.81 216.91 86.56 215.8"
          />
          <polygon
            class="cls-96"
            points="88.98 217.25 88.81 217.15 88.81 212.05 88.98 212.15 88.98 217.25"
          />
          <polygon
            class="cls-95"
            points="89.16 217.15 88.98 217.25 88.98 212.15 89.16 212.05 89.16 217.15"
          />
          <polygon
            class="cls-96"
            points="89.16 212.05 88.98 212.15 88.81 212.05 88.98 211.95 89.16 212.05"
          />
          <polygon
            class="cls-101"
            points="91.58 218.41 89.28 217.11 89.28 212.3 91.58 213.6 91.58 218.41"
          />
          <polygon
            class="cls-96"
            points="89.16 217.35 88.98 217.25 88.98 212.15 89.16 212.24 89.16 217.35"
          />
          <polygon
            class="cls-95"
            points="89.33 217.25 89.16 217.35 89.16 212.24 89.33 212.15 89.33 217.25"
          />
          <polygon
            class="cls-96"
            points="89.33 212.15 89.16 212.24 88.98 212.15 89.16 212.05 89.33 212.15"
          />
          <polygon
            class="cls-102"
            points="89.28 217.28 89.2 217.32 89.2 212.22 89.28 212.17 89.28 217.28"
          />
          <polygon
            class="cls-96"
            points="89.16 217.15 89.16 217.35 91.45 218.67 91.45 218.48 89.16 217.15"
          />
          <polygon
            class="cls-96"
            points="89.33 217.05 89.16 217.15 91.45 218.48 91.62 218.38 89.33 217.05"
          />
          <polygon
            class="cls-95"
            points="91.62 218.38 91.45 218.48 91.45 218.67 91.62 218.58 91.62 218.38"
          />
          <polygon
            class="cls-102"
            points="89.28 217.07 89.2 217.12 91.32 218.36 91.41 218.31 89.28 217.07"
          />
          <polygon
            class="cls-103"
            points="91.28 218.34 89.2 217.12 89.2 212.22 91.49 213.54 91.28 218.34"
          />
          <polygon
            class="cls-96"
            points="91.45 218.67 91.28 218.58 91.28 213.47 91.45 213.57 91.45 218.67"
          />
          <polygon
            class="cls-95"
            points="91.62 218.58 91.45 218.67 91.45 213.57 91.62 213.47 91.62 218.58"
          />
          <polygon
            class="cls-96"
            points="91.62 213.47 91.45 213.57 91.28 213.47 91.45 213.37 91.62 213.47"
          />
          <polygon
            class="cls-101"
            points="93.28 220.96 92.09 220.27 92.09 215.36 93.28 216.05 93.28 220.96"
          />
          <polygon
            class="cls-96"
            points="91.96 220.54 91.79 220.44 91.79 215.34 91.96 215.44 91.96 220.54"
          />
          <polygon
            class="cls-95"
            points="92.13 220.44 91.96 220.54 91.96 215.44 92.13 215.34 92.13 220.44"
          />
          <polygon
            class="cls-96"
            points="92.13 215.34 91.96 215.44 91.79 215.34 91.96 215.24 92.13 215.34"
          />
          <polygon
            class="cls-102"
            points="92.09 220.47 92 220.51 92 215.41 92.09 215.36 92.09 220.47"
          />
          <polygon
            class="cls-96"
            points="91.96 220.34 91.96 220.54 93.15 221.23 93.15 221.03 91.96 220.34"
          />
          <polygon
            class="cls-96"
            points="92.13 220.25 91.96 220.34 93.15 221.03 93.32 220.93 92.13 220.25"
          />
          <polygon
            class="cls-95"
            points="93.32 220.93 93.15 221.03 93.15 221.23 93.32 221.13 93.32 220.93"
          />
          <polygon
            class="cls-102"
            points="92.09 220.26 92 220.31 93.03 220.91 93.11 220.87 92.09 220.26"
          />
          <polygon
            class="cls-103"
            points="92.98 220.89 92 220.31 92 215.41 93.2 216.1 92.98 220.89"
          />
          <polygon
            class="cls-96"
            points="93.15 221.23 92.98 221.13 92.98 216.03 93.15 216.12 93.15 221.23"
          />
          <polygon
            class="cls-95"
            points="93.32 221.13 93.15 221.23 93.15 216.12 93.32 216.03 93.32 221.13"
          />
          <polygon
            class="cls-96"
            points="93.32 216.03 93.15 216.12 92.98 216.03 93.15 215.93 93.32 216.03"
          />
          <polygon
            class="cls-104"
            points="93.06 219.29 93.01 219.26 92.99 219.28 93.03 219.3 93.06 219.29"
          />
          <polygon
            class="cls-105"
            points="93.01 218.87 92.96 218.84 92.96 219.32 93.01 219.35 93.01 218.87"
          />
          <polygon
            class="cls-104"
            points="93.03 218.85 93.01 218.87 92.96 218.84 92.99 218.82 93.03 218.85"
          />
          <polygon
            class="cls-106"
            points="93.01 218.87 93.01 219.35 93.03 219.33 93.06 219.32 93.06 219.29 93.03 219.3 93.03 218.85 93.01 218.87"
          />
          <polygon
            class="cls-101"
            points="94.64 221.75 93.45 221.06 93.45 216.15 94.64 216.84 94.64 221.75"
          />
          <polygon
            class="cls-96"
            points="93.32 221.33 93.15 221.23 93.15 216.12 93.32 216.22 93.32 221.33"
          />
          <polygon
            class="cls-95"
            points="93.49 221.23 93.32 221.33 93.32 216.22 93.49 216.12 93.49 221.23"
          />
          <polygon
            class="cls-96"
            points="93.49 216.12 93.32 216.22 93.15 216.12 93.32 216.03 93.49 216.12"
          />
          <polygon
            class="cls-102"
            points="93.45 221.25 93.37 221.3 93.37 216.2 93.45 216.15 93.45 221.25"
          />
          <polygon
            class="cls-96"
            points="93.32 221.13 93.32 221.33 94.51 222.01 94.51 221.82 93.32 221.13"
          />
          <polygon
            class="cls-96"
            points="93.49 221.03 93.32 221.13 94.51 221.82 94.69 221.72 93.49 221.03"
          />
          <polygon
            class="cls-95"
            points="94.69 221.72 94.51 221.82 94.51 222.01 94.69 221.91 94.69 221.72"
          />
          <polygon
            class="cls-102"
            points="93.45 221.05 93.37 221.1 94.39 221.7 94.47 221.65 93.45 221.05"
          />
          <polygon
            class="cls-103"
            points="94.34 221.68 93.37 221.1 93.37 216.2 94.56 216.88 94.34 221.68"
          />
          <polygon
            class="cls-96"
            points="94.51 222.01 94.34 221.91 94.34 216.81 94.51 216.91 94.51 222.01"
          />
          <polygon
            class="cls-95"
            points="94.69 221.91 94.51 222.01 94.51 216.91 94.69 216.81 94.69 221.91"
          />
          <polygon
            class="cls-96"
            points="94.69 216.81 94.51 216.91 94.34 216.81 94.52 216.71 94.69 216.81"
          />
          <polygon
            class="cls-101"
            points="98.04 223.71 96.51 222.82 96.51 217.92 98.04 218.8 98.04 223.71"
          />
          <polygon
            class="cls-96"
            points="96.39 223.09 96.22 223 96.22 217.89 96.39 217.99 96.39 223.09"
          />
          <polygon
            class="cls-95"
            points="96.56 223 96.39 223.09 96.39 217.99 96.56 217.89 96.56 223"
          />
          <polygon
            class="cls-96"
            points="96.56 217.89 96.39 217.99 96.22 217.89 96.39 217.79 96.56 217.89"
          />
          <polygon
            class="cls-102"
            points="96.51 223.02 96.43 223.07 96.43 217.96 96.51 217.92 96.51 223.02"
          />
          <polygon
            class="cls-96"
            points="96.39 222.9 96.39 223.09 97.92 223.98 97.92 223.78 96.39 222.9"
          />
          <polygon
            class="cls-96"
            points="96.56 222.8 96.39 222.9 97.92 223.78 98.09 223.68 96.56 222.8"
          />
          <polygon
            class="cls-95"
            points="98.09 223.68 97.92 223.78 97.92 223.98 98.09 223.88 98.09 223.68"
          />
          <polygon
            class="cls-102"
            points="96.51 222.82 96.43 222.87 97.79 223.66 97.87 223.62 96.51 222.82"
          />
          <polygon
            class="cls-103"
            points="97.75 223.64 96.43 222.87 96.43 217.96 97.96 218.85 97.75 223.64"
          />
          <polygon
            class="cls-96"
            points="97.92 223.98 97.75 223.88 97.75 218.78 97.92 218.87 97.92 223.98"
          />
          <polygon
            class="cls-95"
            points="98.09 223.88 97.92 223.98 97.92 218.87 98.09 218.78 98.09 223.88"
          />
          <polygon
            class="cls-96"
            points="98.09 218.78 97.92 218.87 97.75 218.78 97.92 218.68 98.09 218.78"
          />
          <polygon
            class="cls-101"
            points="99.41 224.49 98.21 223.81 98.21 218.9 99.41 219.59 99.41 224.49"
          />
          <polygon
            class="cls-96"
            points="98.09 224.07 97.92 223.98 97.92 218.87 98.09 218.97 98.09 224.07"
          />
          <polygon
            class="cls-95"
            points="98.26 223.98 98.09 224.07 98.09 218.97 98.26 218.87 98.26 223.98"
          />
          <polygon
            class="cls-96"
            points="98.26 218.87 98.09 218.97 97.92 218.87 98.09 218.78 98.26 218.87"
          />
          <polygon
            class="cls-102"
            points="98.21 224 98.13 224.05 98.13 218.95 98.21 218.9 98.21 224"
          />
          <polygon
            class="cls-96"
            points="98.09 223.88 98.09 224.07 99.28 224.76 99.28 224.57 98.09 223.88"
          />
          <polygon
            class="cls-96"
            points="98.26 223.78 98.09 223.88 99.28 224.57 99.45 224.47 98.26 223.78"
          />
          <polygon
            class="cls-95"
            points="99.45 224.47 99.28 224.57 99.28 224.76 99.45 224.66 99.45 224.47"
          />
          <polygon
            class="cls-102"
            points="98.21 223.8 98.13 223.85 99.15 224.45 99.23 224.4 98.21 223.8"
          />
          <polygon
            class="cls-103"
            points="99.11 224.43 98.13 223.85 98.13 218.95 99.32 219.63 99.11 224.43"
          />
          <polygon
            class="cls-96"
            points="99.28 224.76 99.11 224.66 99.11 219.56 99.28 219.66 99.28 224.76"
          />
          <polygon
            class="cls-95"
            points="99.45 224.66 99.28 224.76 99.28 219.66 99.45 219.56 99.45 224.66"
          />
          <polygon
            class="cls-96"
            points="99.45 219.56 99.28 219.66 99.11 219.56 99.28 219.46 99.45 219.56"
          />
          <polygon
            class="cls-101"
            points="101.11 225.48 99.58 224.59 99.58 219.68 101.11 220.57 101.11 225.48"
          />
          <polygon
            class="cls-96"
            points="99.45 224.86 99.28 224.76 99.28 219.66 99.45 219.76 99.45 224.86"
          />
          <polygon
            class="cls-95"
            points="99.62 224.76 99.45 224.86 99.45 219.76 99.62 219.66 99.62 224.76"
          />
          <polygon
            class="cls-96"
            points="99.62 219.66 99.45 219.76 99.28 219.66 99.45 219.56 99.62 219.66"
          />
          <polygon
            class="cls-102"
            points="99.58 224.79 99.49 224.84 99.49 219.73 99.58 219.68 99.58 224.79"
          />
          <polygon
            class="cls-96"
            points="99.45 224.66 99.45 224.86 100.98 225.75 100.98 225.55 99.45 224.66"
          />
          <polygon
            class="cls-96"
            points="99.62 224.57 99.45 224.66 100.98 225.55 101.15 225.45 99.62 224.57"
          />
          <polygon
            class="cls-95"
            points="101.15 225.45 100.98 225.55 100.98 225.75 101.15 225.65 101.15 225.45"
          />
          <polygon
            class="cls-102"
            points="99.58 224.59 99.49 224.63 100.85 225.43 100.94 225.38 99.58 224.59"
          />
          <polygon
            class="cls-103"
            points="100.81 225.41 99.49 224.63 99.49 219.73 101.02 220.62 100.81 225.41"
          />
          <polygon
            class="cls-96"
            points="100.98 225.75 100.81 225.65 100.81 220.54 100.98 220.64 100.98 225.75"
          />
          <polygon
            class="cls-95"
            points="101.15 225.65 100.98 225.75 100.98 220.64 101.15 220.54 101.15 225.65"
          />
          <polygon
            class="cls-96"
            points="101.15 220.54 100.98 220.64 100.81 220.54 100.98 220.44 101.15 220.54"
          />
          <polygon
            class="cls-104"
            points="99.45 222.56 99.4 222.53 99.38 222.54 99.43 222.57 99.45 222.56"
          />
          <polygon
            class="cls-105"
            points="99.4 222.13 99.36 222.11 99.36 222.58 99.4 222.61 99.4 222.13"
          />
          <polygon
            class="cls-104"
            points="99.43 222.12 99.4 222.13 99.36 222.1 99.38 222.09 99.43 222.12"
          />
          <polygon
            class="cls-106"
            points="99.4 222.13 99.4 222.61 99.43 222.6 99.45 222.58 99.45 222.56 99.43 222.57 99.43 222.12 99.4 222.13"
          />
          <polygon
            class="cls-95"
            points="106.69 228.62 107.78 228.1 112.48 225.28 112.48 220.18 106.69 223.51 106.69 228.62"
          />
          <polygon
            class="cls-96"
            points="106.69 228.62 101.11 225.43 101.06 220.34 106.69 223.51 106.69 228.62"
          />
          <polygon
            class="cls-101"
            points="110.55 229.35 108.08 227.93 108.08 223.02 110.55 224.44 110.55 229.35"
          />
          <polygon
            class="cls-96"
            points="107.95 228.2 107.78 228.1 107.78 223 107.95 223.09 107.95 228.2"
          />
          <polygon
            class="cls-95"
            points="108.13 228.1 107.95 228.2 107.95 223.09 108.13 223 108.13 228.1"
          />
          <polygon
            class="cls-96"
            points="108.13 223 107.95 223.09 107.78 223 107.95 222.9 108.13 223"
          />
          <polygon
            class="cls-102"
            points="108.08 228.12 108 228.17 108 223.07 108.08 223.02 108.08 228.12"
          />
          <polygon
            class="cls-96"
            points="107.95 228 107.95 228.2 110.42 229.62 110.42 229.43 107.95 228"
          />
          <polygon
            class="cls-96"
            points="108.13 227.9 107.95 228 110.42 229.43 110.59 229.33 108.13 227.9"
          />
          <polygon
            class="cls-95"
            points="110.59 229.33 110.42 229.43 110.42 229.62 110.59 229.52 110.59 229.33"
          />
          <polygon
            class="cls-102"
            points="108.08 227.92 108 227.97 110.29 229.31 110.38 229.26 108.08 227.92"
          />
          <polygon
            class="cls-103"
            points="110.25 229.28 108 227.97 108 223.07 110.46 224.49 110.25 229.28"
          />
          <polygon
            class="cls-96"
            points="110.42 229.62 110.25 229.52 110.25 224.42 110.42 224.52 110.42 229.62"
          />
          <polygon
            class="cls-95"
            points="110.59 229.52 110.42 229.62 110.42 224.52 110.59 224.42 110.59 229.52"
          />
          <polygon
            class="cls-96"
            points="110.59 224.42 110.42 224.52 110.25 224.42 110.42 224.32 110.59 224.42"
          />
          <polygon
            class="cls-101"
            points="113.02 230.78 110.72 229.45 110.72 224.54 113.02 225.87 113.02 230.78"
          />
          <polygon
            class="cls-96"
            points="110.59 229.72 110.42 229.62 110.42 224.52 110.59 224.62 110.59 229.72"
          />
          <polygon
            class="cls-95"
            points="110.76 229.62 110.59 229.72 110.59 224.62 110.76 224.52 110.76 229.62"
          />
          <polygon
            class="cls-96"
            points="110.76 224.52 110.59 224.62 110.42 224.52 110.59 224.42 110.76 224.52"
          />
          <polygon
            class="cls-102"
            points="110.72 229.65 110.63 229.7 110.63 224.59 110.72 224.54 110.72 229.65"
          />
          <polygon
            class="cls-96"
            points="110.59 229.52 110.59 229.72 112.89 231.05 112.89 230.85 110.59 229.52"
          />
          <polygon
            class="cls-96"
            points="110.76 229.43 110.59 229.52 112.89 230.85 113.06 230.75 110.76 229.43"
          />
          <polygon
            class="cls-95"
            points="113.06 230.75 112.89 230.85 112.89 231.05 113.06 230.95 113.06 230.75"
          />
          <polygon
            class="cls-102"
            points="110.72 229.44 110.63 229.49 112.76 230.73 112.85 230.68 110.72 229.44"
          />
          <polygon
            class="cls-103"
            points="112.72 230.71 110.63 229.49 110.63 224.59 112.93 225.92 112.72 230.71"
          />
          <polygon
            class="cls-96"
            points="112.89 231.05 112.72 230.95 112.72 225.84 112.89 225.94 112.89 231.05"
          />
          <polygon
            class="cls-95"
            points="113.06 230.95 112.89 231.05 112.89 225.94 113.06 225.84 113.06 230.95"
          />
          <polygon
            class="cls-96"
            points="113.06 225.84 112.89 225.94 112.72 225.84 112.89 225.75 113.06 225.84"
          />
          <polygon
            class="cls-96"
            points="112.14 226.26 84.92 210.55 84.92 211.33 112.14 227.05 112.14 226.26"
          />
          <polygon
            class="cls-101"
            points="93.28 215.46 92.09 214.77 92.09 209.86 93.28 210.55 93.28 215.46"
          />
          <polygon
            class="cls-96"
            points="91.96 215.04 91.79 214.94 91.79 209.84 91.96 209.93 91.96 215.04"
          />
          <polygon
            class="cls-95"
            points="92.13 214.94 91.96 215.04 91.96 209.93 92.13 209.84 92.13 214.94"
          />
          <polygon
            class="cls-96"
            points="92.13 209.84 91.96 209.93 91.79 209.84 91.96 209.74 92.13 209.84"
          />
          <polygon
            class="cls-102"
            points="92.09 214.96 92 215.01 92 209.91 92.09 209.86 92.09 214.96"
          />
          <polygon
            class="cls-96"
            points="91.96 214.84 91.96 215.04 93.15 215.73 93.15 215.53 91.96 214.84"
          />
          <polygon
            class="cls-96"
            points="92.13 214.74 91.96 214.84 93.15 215.53 93.32 215.43 92.13 214.74"
          />
          <polygon
            class="cls-95"
            points="93.32 215.43 93.15 215.53 93.15 215.73 93.32 215.63 93.32 215.43"
          />
          <polygon
            class="cls-102"
            points="92.09 214.76 92 214.81 93.03 215.41 93.11 215.36 92.09 214.76"
          />
          <polygon
            class="cls-103"
            points="92.98 215.39 92 214.81 92 209.91 93.2 210.6 92.98 215.39"
          />
          <polygon
            class="cls-96"
            points="93.15 215.73 92.98 215.63 92.98 210.52 93.15 210.62 93.15 215.73"
          />
          <polygon
            class="cls-95"
            points="93.32 215.63 93.15 215.73 93.15 210.62 93.32 210.52 93.32 215.63"
          />
          <polygon
            class="cls-96"
            points="93.32 210.52 93.15 210.62 92.98 210.52 93.15 210.43 93.32 210.52"
          />
          <polygon
            class="cls-101"
            points="94.64 216.24 93.45 215.56 93.45 210.65 94.64 211.33 94.64 216.24"
          />
          <polygon
            class="cls-96"
            points="93.32 215.82 93.15 215.73 93.15 210.62 93.32 210.72 93.32 215.82"
          />
          <polygon
            class="cls-95"
            points="93.49 215.73 93.32 215.82 93.32 210.72 93.49 210.62 93.49 215.73"
          />
          <polygon
            class="cls-96"
            points="93.49 210.62 93.32 210.72 93.15 210.62 93.32 210.52 93.49 210.62"
          />
          <polygon
            class="cls-102"
            points="93.45 215.75 93.37 215.8 93.37 210.69 93.45 210.65 93.45 215.75"
          />
          <polygon
            class="cls-96"
            points="93.32 215.63 93.32 215.82 94.52 216.51 94.52 216.31 93.32 215.63"
          />
          <polygon
            class="cls-96"
            points="93.49 215.53 93.32 215.63 94.52 216.31 94.69 216.22 93.49 215.53"
          />
          <polygon
            class="cls-95"
            points="94.69 216.22 94.52 216.31 94.52 216.51 94.69 216.41 94.69 216.22"
          />
          <polygon
            class="cls-102"
            points="93.45 215.55 93.37 215.6 94.39 216.2 94.47 216.15 93.45 215.55"
          />
          <polygon
            class="cls-103"
            points="94.34 216.17 93.37 215.6 93.37 210.69 94.56 211.38 94.34 216.17"
          />
          <polygon
            class="cls-96"
            points="94.52 216.51 94.34 216.41 94.34 211.31 94.52 211.41 94.52 216.51"
          />
          <polygon
            class="cls-95"
            points="94.69 216.41 94.52 216.51 94.52 211.41 94.69 211.31 94.69 216.41"
          />
          <polygon
            class="cls-96"
            points="94.69 211.31 94.52 211.41 94.34 211.31 94.52 211.21 94.69 211.31"
          />
          <polygon
            class="cls-101"
            points="87.75 212.26 85.28 210.84 85.28 205.93 87.75 207.35 87.75 212.26"
          />
          <polygon
            class="cls-96"
            points="85.16 211.11 84.99 211.01 84.99 205.91 85.16 206 85.16 211.11"
          />
          <polygon
            class="cls-95"
            points="85.33 211.01 85.16 211.11 85.16 206 85.33 205.91 85.33 211.01"
          />
          <polygon
            class="cls-96"
            points="85.33 205.91 85.16 206 84.99 205.91 85.16 205.81 85.33 205.91"
          />
          <polygon
            class="cls-102"
            points="85.28 211.04 85.2 211.09 85.2 205.98 85.28 205.93 85.28 211.04"
          />
          <polygon
            class="cls-96"
            points="85.16 210.91 85.16 211.11 87.62 212.53 87.62 212.34 85.16 210.91"
          />
          <polygon
            class="cls-96"
            points="85.33 210.82 85.16 210.91 87.62 212.34 87.79 212.24 85.33 210.82"
          />
          <polygon
            class="cls-95"
            points="87.79 212.24 87.62 212.34 87.62 212.53 87.79 212.44 87.79 212.24"
          />
          <polygon
            class="cls-102"
            points="85.28 210.84 85.2 210.88 87.5 212.22 87.58 212.17 85.28 210.84"
          />
          <polygon
            class="cls-103"
            points="87.45 212.2 85.2 210.88 85.2 205.98 87.67 207.4 87.45 212.2"
          />
          <polygon
            class="cls-96"
            points="87.62 212.53 87.45 212.44 87.45 207.33 87.62 207.43 87.62 212.53"
          />
          <polygon
            class="cls-95"
            points="87.79 212.44 87.62 212.53 87.62 207.43 87.79 207.33 87.79 212.44"
          />
          <polygon
            class="cls-96"
            points="87.79 207.33 87.62 207.43 87.45 207.33 87.62 207.23 87.79 207.33"
          />
          <polygon
            class="cls-101"
            points="90.22 213.68 87.92 212.36 87.92 207.45 90.22 208.78 90.22 213.68"
          />
          <polygon
            class="cls-96"
            points="87.79 212.63 87.62 212.53 87.62 207.43 87.79 207.53 87.79 212.63"
          />
          <polygon
            class="cls-95"
            points="87.96 212.53 87.79 212.63 87.79 207.53 87.96 207.43 87.96 212.53"
          />
          <polygon
            class="cls-96"
            points="87.96 207.43 87.79 207.53 87.62 207.43 87.79 207.33 87.96 207.43"
          />
          <polygon
            class="cls-102"
            points="87.92 212.56 87.84 212.61 87.84 207.5 87.92 207.45 87.92 212.56"
          />
          <polygon
            class="cls-96"
            points="87.79 212.44 87.79 212.63 90.09 213.96 90.09 213.76 87.79 212.44"
          />
          <polygon
            class="cls-96"
            points="87.96 212.34 87.79 212.44 90.09 213.76 90.26 213.66 87.96 212.34"
          />
          <polygon
            class="cls-95"
            points="90.26 213.66 90.09 213.76 90.09 213.96 90.26 213.86 90.26 213.66"
          />
          <polygon
            class="cls-102"
            points="87.92 212.36 87.84 212.41 89.96 213.65 90.05 213.6 87.92 212.36"
          />
          <polygon
            class="cls-103"
            points="89.92 213.62 87.84 212.41 87.84 207.5 90.13 208.83 89.92 213.62"
          />
          <polygon
            class="cls-96"
            points="90.09 213.96 89.92 213.86 89.92 208.75 90.09 208.85 90.09 213.96"
          />
          <polygon
            class="cls-95"
            points="90.26 213.86 90.09 213.96 90.09 208.85 90.26 208.75 90.26 213.86"
          />
          <polygon
            class="cls-96"
            points="90.26 208.75 90.09 208.85 89.92 208.75 90.09 208.66 90.26 208.75"
          />
          <polygon
            class="cls-101"
            points="98.04 218.2 96.51 217.32 96.51 212.41 98.04 213.3 98.04 218.2"
          />
          <polygon
            class="cls-96"
            points="96.39 217.59 96.22 217.5 96.22 212.39 96.39 212.49 96.39 217.59"
          />
          <polygon
            class="cls-95"
            points="96.56 217.5 96.39 217.59 96.39 212.49 96.56 212.39 96.56 217.5"
          />
          <polygon
            class="cls-96"
            points="96.56 212.39 96.39 212.49 96.22 212.39 96.39 212.29 96.56 212.39"
          />
          <polygon
            class="cls-102"
            points="96.51 217.52 96.43 217.57 96.43 212.46 96.51 212.41 96.51 217.52"
          />
          <polygon
            class="cls-96"
            points="96.39 217.4 96.39 217.59 97.92 218.48 97.92 218.28 96.39 217.4"
          />
          <polygon
            class="cls-96"
            points="96.56 217.3 96.39 217.4 97.92 218.28 98.09 218.18 96.56 217.3"
          />
          <polygon
            class="cls-95"
            points="98.09 218.18 97.92 218.28 97.92 218.48 98.09 218.38 98.09 218.18"
          />
          <polygon
            class="cls-102"
            points="96.51 217.32 96.43 217.37 97.79 218.16 97.87 218.12 96.51 217.32"
          />
          <polygon
            class="cls-103"
            points="97.75 218.14 96.43 217.37 96.43 212.46 97.96 213.34 97.75 218.14"
          />
          <polygon
            class="cls-96"
            points="97.92 218.48 97.75 218.38 97.75 213.27 97.92 213.37 97.92 218.48"
          />
          <polygon
            class="cls-95"
            points="98.09 218.38 97.92 218.48 97.92 213.37 98.09 213.27 98.09 218.38"
          />
          <polygon
            class="cls-96"
            points="98.09 213.27 97.92 213.37 97.75 213.27 97.92 213.17 98.09 213.27"
          />
          <polygon
            class="cls-101"
            points="99.41 218.99 98.21 218.3 98.21 213.4 99.41 214.08 99.41 218.99"
          />
          <polygon
            class="cls-96"
            points="98.09 218.57 97.92 218.48 97.92 213.37 98.09 213.47 98.09 218.57"
          />
          <polygon
            class="cls-95"
            points="98.26 218.48 98.09 218.57 98.09 213.47 98.26 213.37 98.26 218.48"
          />
          <polygon
            class="cls-96"
            points="98.26 213.37 98.09 213.47 97.92 213.37 98.09 213.27 98.26 213.37"
          />
          <polygon
            class="cls-102"
            points="98.21 218.5 98.13 218.55 98.13 213.44 98.21 213.4 98.21 218.5"
          />
          <polygon
            class="cls-96"
            points="98.09 218.38 98.09 218.57 99.28 219.26 99.28 219.07 98.09 218.38"
          />
          <polygon
            class="cls-96"
            points="98.26 218.28 98.09 218.38 99.28 219.07 99.45 218.97 98.26 218.28"
          />
          <polygon
            class="cls-95"
            points="99.45 218.97 99.28 219.07 99.28 219.26 99.45 219.16 99.45 218.97"
          />
          <polygon
            class="cls-102"
            points="98.21 218.3 98.13 218.35 99.15 218.95 99.23 218.9 98.21 218.3"
          />
          <polygon
            class="cls-103"
            points="99.11 218.93 98.13 218.35 98.13 213.44 99.32 214.13 99.11 218.93"
          />
          <polygon
            class="cls-96"
            points="99.28 219.26 99.11 219.16 99.11 214.06 99.28 214.16 99.28 219.26"
          />
          <polygon
            class="cls-95"
            points="99.45 219.16 99.28 219.26 99.28 214.16 99.45 214.06 99.45 219.16"
          />
          <polygon
            class="cls-96"
            points="99.45 214.06 99.28 214.16 99.11 214.06 99.28 213.96 99.45 214.06"
          />
          <polygon
            class="cls-101"
            points="101.11 219.97 99.58 219.09 99.58 214.18 101.11 215.06 101.11 219.97"
          />
          <polygon
            class="cls-96"
            points="99.45 219.36 99.28 219.26 99.28 214.16 99.45 214.25 99.45 219.36"
          />
          <polygon
            class="cls-95"
            points="99.62 219.26 99.45 219.36 99.45 214.25 99.62 214.16 99.62 219.26"
          />
          <polygon
            class="cls-96"
            points="99.62 214.16 99.45 214.25 99.28 214.16 99.45 214.06 99.62 214.16"
          />
          <polygon
            class="cls-102"
            points="99.58 219.29 99.49 219.34 99.49 214.23 99.58 214.18 99.58 219.29"
          />
          <polygon
            class="cls-96"
            points="99.45 219.16 99.45 219.36 100.98 220.25 100.98 220.05 99.45 219.16"
          />
          <polygon
            class="cls-96"
            points="99.62 219.07 99.45 219.16 100.98 220.05 101.15 219.95 99.62 219.07"
          />
          <polygon
            class="cls-95"
            points="101.15 219.95 100.98 220.05 100.98 220.25 101.15 220.15 101.15 219.95"
          />
          <polygon
            class="cls-102"
            points="99.58 219.09 99.49 219.13 100.85 219.93 100.94 219.88 99.58 219.09"
          />
          <polygon
            class="cls-103"
            points="100.81 219.91 99.49 219.13 99.49 214.23 101.02 215.11 100.81 219.91"
          />
          <polygon
            class="cls-96"
            points="100.98 220.25 100.81 220.15 100.81 215.04 100.98 215.14 100.98 220.25"
          />
          <polygon
            class="cls-95"
            points="101.15 220.15 100.98 220.25 100.98 215.14 101.15 215.04 101.15 220.15"
          />
          <polygon
            class="cls-96"
            points="101.15 215.04 100.98 215.14 100.81 215.04 100.98 214.94 101.15 215.04"
          />
          <polygon
            class="cls-96"
            points="103.45 221.62 100.98 220.22 100.98 215.04 103.45 216.44 103.45 221.62"
          />
          <polygon
            class="cls-101"
            points="105.53 222.52 103.66 221.44 103.66 216.54 105.53 217.62 105.53 222.52"
          />
          <polygon
            class="cls-96"
            points="103.53 221.72 103.36 221.62 103.36 216.51 103.53 216.61 103.53 221.72"
          />
          <polygon
            class="cls-95"
            points="103.7 221.62 103.53 221.72 103.53 216.61 103.7 216.51 103.7 221.62"
          />
          <polygon
            class="cls-96"
            points="103.7 216.51 103.53 216.61 103.36 216.51 103.53 216.41 103.7 216.51"
          />
          <polygon
            class="cls-102"
            points="103.66 221.65 103.57 221.69 103.57 216.59 103.66 216.54 103.66 221.65"
          />
          <polygon
            class="cls-96"
            points="103.53 221.52 103.53 221.72 105.4 222.8 105.4 222.6 103.53 221.52"
          />
          <polygon
            class="cls-96"
            points="103.7 221.42 103.53 221.52 105.4 222.6 105.57 222.5 103.7 221.42"
          />
          <polygon
            class="cls-95"
            points="105.57 222.5 105.4 222.6 105.4 222.8 105.57 222.7 105.57 222.5"
          />
          <polygon
            class="cls-102"
            points="103.66 221.44 103.57 221.49 105.28 222.49 105.36 222.44 103.66 221.44"
          />
          <polygon
            class="cls-103"
            points="105.23 222.46 103.57 221.49 103.57 216.59 105.44 217.67 105.23 222.46"
          />
          <polygon
            class="cls-96"
            points="105.4 222.8 105.23 222.7 105.23 217.59 105.4 217.69 105.4 222.8"
          />
          <polygon
            class="cls-95"
            points="105.57 222.7 105.4 222.8 105.4 217.69 105.57 217.59 105.57 222.7"
          />
          <polygon
            class="cls-96"
            points="105.57 217.59 105.4 217.69 105.23 217.59 105.4 217.5 105.57 217.59"
          />
          <polygon
            class="cls-96"
            points="106.14 218 106.14 218 105.4 217.6 105.4 222.79 106.14 223.19 106.14 223.19 106.51 223.39 106.51 218.2 106.14 218"
          />
          <polygon
            class="cls-101"
            points="109.19 224.63 106.72 223.21 106.72 218.31 109.19 219.73 109.19 224.63"
          />
          <polygon
            class="cls-96"
            points="106.59 223.49 106.42 223.39 106.42 218.28 106.59 218.38 106.59 223.49"
          />
          <polygon
            class="cls-95"
            points="106.76 223.39 106.59 223.49 106.59 218.38 106.76 218.28 106.76 223.39"
          />
          <polygon
            class="cls-96"
            points="106.76 218.28 106.59 218.38 106.42 218.28 106.59 218.18 106.76 218.28"
          />
          <polygon
            class="cls-102"
            points="106.72 223.41 106.64 223.46 106.64 218.35 106.72 218.31 106.72 223.41"
          />
          <polygon
            class="cls-96"
            points="106.59 223.29 106.59 223.49 109.06 224.91 109.06 224.71 106.59 223.29"
          />
          <polygon
            class="cls-96"
            points="106.76 223.19 106.59 223.29 109.06 224.71 109.23 224.62 106.76 223.19"
          />
          <polygon
            class="cls-95"
            points="109.23 224.62 109.06 224.71 109.06 224.91 109.23 224.81 109.23 224.62"
          />
          <polygon
            class="cls-102"
            points="106.72 223.21 106.64 223.26 108.93 224.6 109.02 224.55 106.72 223.21"
          />
          <polygon
            class="cls-103"
            points="108.89 224.57 106.64 223.26 106.64 218.35 109.1 219.78 108.89 224.57"
          />
          <polygon
            class="cls-96"
            points="109.06 224.91 108.89 224.81 108.89 219.71 109.06 219.8 109.06 224.91"
          />
          <polygon
            class="cls-95"
            points="109.23 224.81 109.06 224.91 109.06 219.8 109.23 219.71 109.23 224.81"
          />
          <polygon
            class="cls-96"
            points="109.23 219.71 109.06 219.8 108.89 219.71 109.06 219.61 109.23 219.71"
          />
          <polygon
            class="cls-101"
            points="111.66 226.06 109.36 224.73 109.36 219.83 111.66 221.15 111.66 226.06"
          />
          <polygon
            class="cls-96"
            points="109.23 225.01 109.06 224.91 109.06 219.8 109.23 219.9 109.23 225.01"
          />
          <polygon
            class="cls-95"
            points="109.4 224.91 109.23 225.01 109.23 219.9 109.4 219.8 109.4 224.91"
          />
          <polygon
            class="cls-96"
            points="109.4 219.8 109.23 219.9 109.06 219.8 109.23 219.71 109.4 219.8"
          />
          <polygon
            class="cls-102"
            points="109.36 224.94 109.27 224.99 109.27 219.88 109.36 219.83 109.36 224.94"
          />
          <polygon
            class="cls-96"
            points="109.23 224.81 109.23 225.01 111.53 226.34 111.53 226.14 109.23 224.81"
          />
          <polygon
            class="cls-96"
            points="109.4 224.71 109.23 224.81 111.53 226.14 111.7 226.04 109.4 224.71"
          />
          <polygon
            class="cls-95"
            points="111.7 226.04 111.53 226.14 111.53 226.34 111.7 226.24 111.7 226.04"
          />
          <polygon
            class="cls-102"
            points="109.36 224.73 109.27 224.78 111.4 226.02 111.48 225.97 109.36 224.73"
          />
          <polygon
            class="cls-103"
            points="111.36 226 109.27 224.78 109.27 219.88 111.57 221.2 111.36 226"
          />
          <polygon
            class="cls-96"
            points="111.53 226.34 111.36 226.24 111.36 221.13 111.53 221.23 111.53 226.34"
          />
          <polygon
            class="cls-95"
            points="111.7 226.24 111.53 226.34 111.53 221.23 111.7 221.13 111.7 226.24"
          />
          <polygon
            class="cls-96"
            points="111.7 221.13 111.53 221.23 111.36 221.13 111.53 221.03 111.7 221.13"
          />
          <polygon
            class="cls-96"
            points="112.14 220.76 84.92 205.05 84.92 205.83 112.14 221.55 112.14 220.76"
          />
          <polygon
            class="cls-101"
            points="93.28 209.96 92.09 209.27 92.09 204.36 93.28 205.05 93.28 209.96"
          />
          <polygon
            class="cls-96"
            points="91.96 209.54 91.79 209.44 91.79 204.34 91.96 204.43 91.96 209.54"
          />
          <polygon
            class="cls-95"
            points="92.13 209.44 91.96 209.54 91.96 204.43 92.13 204.34 92.13 209.44"
          />
          <polygon
            class="cls-96"
            points="92.13 204.34 91.96 204.43 91.79 204.34 91.96 204.24 92.13 204.34"
          />
          <polygon
            class="cls-102"
            points="92.09 209.46 92 209.51 92 204.41 92.09 204.36 92.09 209.46"
          />
          <polygon
            class="cls-96"
            points="91.96 209.34 91.96 209.54 93.15 210.22 93.15 210.03 91.96 209.34"
          />
          <polygon
            class="cls-96"
            points="92.13 209.24 91.96 209.34 93.15 210.03 93.32 209.93 92.13 209.24"
          />
          <polygon
            class="cls-95"
            points="93.32 209.93 93.15 210.03 93.15 210.22 93.32 210.13 93.32 209.93"
          />
          <polygon
            class="cls-102"
            points="92.09 209.26 92 209.31 93.03 209.91 93.11 209.86 92.09 209.26"
          />
          <polygon
            class="cls-103"
            points="92.98 209.89 92 209.31 92 204.41 93.2 205.1 92.98 209.89"
          />
          <polygon
            class="cls-96"
            points="93.15 210.22 92.98 210.13 92.98 205.02 93.15 205.12 93.15 210.22"
          />
          <polygon
            class="cls-95"
            points="93.32 210.13 93.15 210.22 93.15 205.12 93.32 205.02 93.32 210.13"
          />
          <polygon
            class="cls-96"
            points="93.32 205.02 93.15 205.12 92.98 205.02 93.15 204.93 93.32 205.02"
          />
          <polygon
            class="cls-101"
            points="94.64 210.74 93.45 210.06 93.45 205.15 94.64 205.83 94.64 210.74"
          />
          <polygon
            class="cls-96"
            points="93.32 210.32 93.15 210.22 93.15 205.12 93.32 205.22 93.32 210.32"
          />
          <polygon
            class="cls-95"
            points="93.49 210.22 93.32 210.32 93.32 205.22 93.49 205.12 93.49 210.22"
          />
          <polygon
            class="cls-96"
            points="93.49 205.12 93.32 205.22 93.15 205.12 93.32 205.02 93.49 205.12"
          />
          <polygon
            class="cls-102"
            points="93.45 210.25 93.37 210.3 93.37 205.19 93.45 205.15 93.45 210.25"
          />
          <polygon
            class="cls-96"
            points="93.32 210.13 93.32 210.32 94.51 211.01 94.51 210.81 93.32 210.13"
          />
          <polygon
            class="cls-96"
            points="93.49 210.03 93.32 210.13 94.51 210.81 94.69 210.72 93.49 210.03"
          />
          <polygon
            class="cls-95"
            points="94.69 210.72 94.51 210.81 94.51 211.01 94.69 210.91 94.69 210.72"
          />
          <polygon
            class="cls-102"
            points="93.45 210.05 93.37 210.1 94.39 210.7 94.47 210.65 93.45 210.05"
          />
          <polygon
            class="cls-103"
            points="94.34 210.67 93.37 210.1 93.37 205.19 94.56 205.88 94.34 210.67"
          />
          <polygon
            class="cls-96"
            points="94.51 211.01 94.34 210.91 94.34 205.81 94.51 205.91 94.51 211.01"
          />
          <polygon
            class="cls-95"
            points="94.69 210.91 94.51 211.01 94.51 205.91 94.69 205.81 94.69 210.91"
          />
          <polygon
            class="cls-96"
            points="94.69 205.81 94.51 205.91 94.34 205.81 94.51 205.71 94.69 205.81"
          />
          <polygon
            class="cls-101"
            points="87.75 206.76 85.28 205.34 85.28 200.43 87.75 201.85 87.75 206.76"
          />
          <polygon
            class="cls-96"
            points="85.16 205.61 84.99 205.51 84.99 200.41 85.16 200.5 85.16 205.61"
          />
          <polygon
            class="cls-95"
            points="85.33 205.51 85.16 205.61 85.16 200.5 85.33 200.41 85.33 205.51"
          />
          <polygon
            class="cls-96"
            points="85.33 200.41 85.16 200.5 84.99 200.41 85.16 200.31 85.33 200.41"
          />
          <polygon
            class="cls-102"
            points="85.28 205.54 85.2 205.59 85.2 200.48 85.28 200.43 85.28 205.54"
          />
          <polygon
            class="cls-96"
            points="85.16 205.41 85.16 205.61 87.62 207.03 87.62 206.84 85.16 205.41"
          />
          <polygon
            class="cls-96"
            points="85.33 205.32 85.16 205.41 87.62 206.84 87.79 206.74 85.33 205.32"
          />
          <polygon
            class="cls-95"
            points="87.79 206.74 87.62 206.84 87.62 207.03 87.79 206.94 87.79 206.74"
          />
          <polygon
            class="cls-102"
            points="85.28 205.34 85.2 205.38 87.5 206.72 87.58 206.67 85.28 205.34"
          />
          <polygon
            class="cls-103"
            points="87.45 206.7 85.2 205.38 85.2 200.48 87.67 201.9 87.45 206.7"
          />
          <polygon
            class="cls-96"
            points="87.62 207.03 87.45 206.94 87.45 201.83 87.62 201.93 87.62 207.03"
          />
          <polygon
            class="cls-95"
            points="87.79 206.94 87.62 207.03 87.62 201.93 87.79 201.83 87.79 206.94"
          />
          <polygon
            class="cls-96"
            points="87.79 201.83 87.62 201.93 87.45 201.83 87.62 201.73 87.79 201.83"
          />
          <polygon
            class="cls-101"
            points="90.22 208.18 87.92 206.86 87.92 201.95 90.22 203.28 90.22 208.18"
          />
          <polygon
            class="cls-96"
            points="87.79 207.13 87.62 207.03 87.62 201.93 87.79 202.03 87.79 207.13"
          />
          <polygon
            class="cls-95"
            points="87.96 207.03 87.79 207.13 87.79 202.03 87.96 201.93 87.96 207.03"
          />
          <polygon
            class="cls-96"
            points="87.96 201.93 87.79 202.03 87.62 201.93 87.79 201.83 87.96 201.93"
          />
          <polygon
            class="cls-102"
            points="87.92 207.06 87.84 207.11 87.84 202 87.92 201.95 87.92 207.06"
          />
          <polygon
            class="cls-96"
            points="87.79 206.94 87.79 207.13 90.09 208.46 90.09 208.26 87.79 206.94"
          />
          <polygon
            class="cls-96"
            points="87.96 206.84 87.79 206.94 90.09 208.26 90.26 208.16 87.96 206.84"
          />
          <polygon
            class="cls-95"
            points="90.26 208.16 90.09 208.26 90.09 208.46 90.26 208.36 90.26 208.16"
          />
          <polygon
            class="cls-102"
            points="87.92 206.86 87.84 206.91 89.96 208.15 90.05 208.1 87.92 206.86"
          />
          <polygon
            class="cls-103"
            points="89.92 208.12 87.84 206.91 87.84 202 90.13 203.33 89.92 208.12"
          />
          <polygon
            class="cls-96"
            points="90.09 208.46 89.92 208.36 89.92 203.25 90.09 203.35 90.09 208.46"
          />
          <polygon
            class="cls-95"
            points="90.26 208.36 90.09 208.46 90.09 203.35 90.26 203.25 90.26 208.36"
          />
          <polygon
            class="cls-96"
            points="90.26 203.25 90.09 203.35 89.92 203.25 90.09 203.16 90.26 203.25"
          />
          <polygon
            class="cls-101"
            points="98.04 212.7 96.51 211.82 96.51 206.91 98.04 207.8 98.04 212.7"
          />
          <polygon
            class="cls-96"
            points="96.39 212.09 96.22 211.99 96.22 206.89 96.39 206.99 96.39 212.09"
          />
          <polygon
            class="cls-95"
            points="96.56 211.99 96.39 212.09 96.39 206.99 96.56 206.89 96.56 211.99"
          />
          <polygon
            class="cls-96"
            points="96.56 206.89 96.39 206.99 96.22 206.89 96.39 206.79 96.56 206.89"
          />
          <polygon
            class="cls-102"
            points="96.51 212.02 96.43 212.07 96.43 206.96 96.51 206.91 96.51 212.02"
          />
          <polygon
            class="cls-96"
            points="96.39 211.9 96.39 212.09 97.92 212.98 97.92 212.78 96.39 211.9"
          />
          <polygon
            class="cls-96"
            points="96.56 211.8 96.39 211.9 97.92 212.78 98.09 212.68 96.56 211.8"
          />
          <polygon
            class="cls-95"
            points="98.09 212.68 97.92 212.78 97.92 212.98 98.09 212.88 98.09 212.68"
          />
          <polygon
            class="cls-102"
            points="96.51 211.82 96.43 211.87 97.79 212.66 97.87 212.61 96.51 211.82"
          />
          <polygon
            class="cls-103"
            points="97.75 212.64 96.43 211.87 96.43 206.96 97.96 207.84 97.75 212.64"
          />
          <polygon
            class="cls-96"
            points="97.92 212.98 97.75 212.88 97.75 207.77 97.92 207.87 97.92 212.98"
          />
          <polygon
            class="cls-95"
            points="98.09 212.88 97.92 212.98 97.92 207.87 98.09 207.77 98.09 212.88"
          />
          <polygon
            class="cls-96"
            points="98.09 207.77 97.92 207.87 97.75 207.77 97.92 207.67 98.09 207.77"
          />
          <polygon
            class="cls-101"
            points="99.41 213.49 98.21 212.8 98.21 207.89 99.41 208.58 99.41 213.49"
          />
          <polygon
            class="cls-96"
            points="98.09 213.07 97.92 212.98 97.92 207.87 98.09 207.97 98.09 213.07"
          />
          <polygon
            class="cls-95"
            points="98.26 212.98 98.09 213.07 98.09 207.97 98.26 207.87 98.26 212.98"
          />
          <polygon
            class="cls-96"
            points="98.26 207.87 98.09 207.97 97.92 207.87 98.09 207.77 98.26 207.87"
          />
          <polygon
            class="cls-102"
            points="98.21 213 98.13 213.05 98.13 207.94 98.21 207.89 98.21 213"
          />
          <polygon
            class="cls-96"
            points="98.09 212.88 98.09 213.07 99.28 213.76 99.28 213.57 98.09 212.88"
          />
          <polygon
            class="cls-96"
            points="98.26 212.78 98.09 212.88 99.28 213.57 99.45 213.47 98.26 212.78"
          />
          <polygon
            class="cls-95"
            points="99.45 213.47 99.28 213.57 99.28 213.76 99.45 213.66 99.45 213.47"
          />
          <polygon
            class="cls-102"
            points="98.21 212.8 98.13 212.85 99.15 213.45 99.23 213.4 98.21 212.8"
          />
          <polygon
            class="cls-103"
            points="99.11 213.42 98.13 212.85 98.13 207.94 99.32 208.63 99.11 213.42"
          />
          <polygon
            class="cls-96"
            points="99.28 213.76 99.11 213.66 99.11 208.56 99.28 208.66 99.28 213.76"
          />
          <polygon
            class="cls-95"
            points="99.45 213.66 99.28 213.76 99.28 208.66 99.45 208.56 99.45 213.66"
          />
          <polygon
            class="cls-96"
            points="99.45 208.56 99.28 208.66 99.11 208.56 99.28 208.46 99.45 208.56"
          />
          <polygon
            class="cls-101"
            points="101.11 214.47 99.58 213.59 99.58 208.68 101.11 209.56 101.11 214.47"
          />
          <polygon
            class="cls-96"
            points="99.45 213.86 99.28 213.76 99.28 208.66 99.45 208.75 99.45 213.86"
          />
          <polygon
            class="cls-95"
            points="99.62 213.76 99.45 213.86 99.45 208.75 99.62 208.66 99.62 213.76"
          />
          <polygon
            class="cls-96"
            points="99.62 208.66 99.45 208.75 99.28 208.66 99.45 208.56 99.62 208.66"
          />
          <polygon
            class="cls-102"
            points="99.58 213.79 99.49 213.84 99.49 208.73 99.58 208.68 99.58 213.79"
          />
          <polygon
            class="cls-96"
            points="99.45 213.66 99.45 213.86 100.98 214.75 100.98 214.55 99.45 213.66"
          />
          <polygon
            class="cls-96"
            points="99.62 213.57 99.45 213.66 100.98 214.55 101.15 214.45 99.62 213.57"
          />
          <polygon
            class="cls-95"
            points="101.15 214.45 100.98 214.55 100.98 214.75 101.15 214.65 101.15 214.45"
          />
          <polygon
            class="cls-102"
            points="99.58 213.59 99.49 213.63 100.85 214.43 100.94 214.38 99.58 213.59"
          />
          <polygon
            class="cls-103"
            points="100.81 214.41 99.49 213.63 99.49 208.73 101.02 209.61 100.81 214.41"
          />
          <polygon
            class="cls-96"
            points="100.98 214.75 100.81 214.65 100.81 209.54 100.98 209.64 100.98 214.75"
          />
          <polygon
            class="cls-95"
            points="101.15 214.65 100.98 214.75 100.98 209.64 101.15 209.54 101.15 214.65"
          />
          <polygon
            class="cls-96"
            points="101.15 209.54 100.98 209.64 100.81 209.54 100.98 209.44 101.15 209.54"
          />
          <polygon
            class="cls-96"
            points="103.45 216.12 100.84 214.7 100.84 209.44 103.45 210.86 103.45 216.12"
          />
          <polygon
            class="cls-101"
            points="105.53 217.02 103.66 215.94 103.66 211.04 105.53 212.12 105.53 217.02"
          />
          <polygon
            class="cls-96"
            points="103.53 216.22 103.36 216.12 103.36 211.01 103.53 211.11 103.53 216.22"
          />
          <polygon
            class="cls-95"
            points="103.7 216.12 103.53 216.22 103.53 211.11 103.7 211.01 103.7 216.12"
          />
          <polygon
            class="cls-96"
            points="103.7 211.01 103.53 211.11 103.36 211.01 103.53 210.91 103.7 211.01"
          />
          <polygon
            class="cls-102"
            points="103.66 216.15 103.57 216.19 103.57 211.09 103.66 211.04 103.66 216.15"
          />
          <polygon
            class="cls-96"
            points="103.53 216.02 103.53 216.22 105.4 217.3 105.4 217.1 103.53 216.02"
          />
          <polygon
            class="cls-96"
            points="103.7 215.92 103.53 216.02 105.4 217.1 105.57 217 103.7 215.92"
          />
          <polygon
            class="cls-95"
            points="105.57 217 105.4 217.1 105.4 217.3 105.57 217.2 105.57 217"
          />
          <polygon
            class="cls-102"
            points="103.66 215.94 103.57 215.99 105.27 216.99 105.36 216.94 103.66 215.94"
          />
          <polygon
            class="cls-103"
            points="105.23 216.96 103.57 215.99 103.57 211.09 105.44 212.17 105.23 216.96"
          />
          <polygon
            class="cls-96"
            points="105.4 217.3 105.23 217.2 105.23 212.09 105.4 212.19 105.4 217.3"
          />
          <polygon
            class="cls-95"
            points="105.57 217.2 105.4 217.3 105.4 212.19 105.57 212.09 105.57 217.2"
          />
          <polygon
            class="cls-96"
            points="105.57 212.09 105.4 212.19 105.23 212.09 105.4 211.99 105.57 212.09"
          />
          <polygon
            class="cls-96"
            points="106.11 212.31 106.11 212.31 105.4 211.9 105.4 217.27 106.11 217.68 106.11 217.68 106.47 217.89 106.47 212.51 106.11 212.31"
          />
          <polygon
            class="cls-101"
            points="109.19 219.13 106.72 217.71 106.72 212.81 109.19 214.23 109.19 219.13"
          />
          <polygon
            class="cls-96"
            points="106.59 217.99 106.42 217.89 106.42 212.78 106.59 212.88 106.59 217.99"
          />
          <polygon
            class="cls-95"
            points="106.76 217.89 106.59 217.99 106.59 212.88 106.76 212.78 106.76 217.89"
          />
          <polygon
            class="cls-96"
            points="106.76 212.78 106.59 212.88 106.42 212.78 106.59 212.68 106.76 212.78"
          />
          <polygon
            class="cls-102"
            points="106.72 217.91 106.64 217.96 106.64 212.85 106.72 212.81 106.72 217.91"
          />
          <polygon
            class="cls-96"
            points="106.59 217.79 106.59 217.99 109.06 219.41 109.06 219.21 106.59 217.79"
          />
          <polygon
            class="cls-96"
            points="106.76 217.69 106.59 217.79 109.06 219.21 109.23 219.12 106.76 217.69"
          />
          <polygon
            class="cls-95"
            points="109.23 219.12 109.06 219.21 109.06 219.41 109.23 219.31 109.23 219.12"
          />
          <polygon
            class="cls-102"
            points="106.72 217.71 106.64 217.76 108.93 219.1 109.02 219.05 106.72 217.71"
          />
          <polygon
            class="cls-103"
            points="108.89 219.07 106.64 217.76 106.64 212.85 109.1 214.28 108.89 219.07"
          />
          <polygon
            class="cls-96"
            points="109.06 219.41 108.89 219.31 108.89 214.21 109.06 214.3 109.06 219.41"
          />
          <polygon
            class="cls-95"
            points="109.23 219.31 109.06 219.41 109.06 214.3 109.23 214.21 109.23 219.31"
          />
          <polygon
            class="cls-96"
            points="109.23 214.21 109.06 214.3 108.89 214.21 109.06 214.11 109.23 214.21"
          />
          <polygon
            class="cls-101"
            points="111.65 220.56 109.36 219.23 109.36 214.33 111.65 215.65 111.65 220.56"
          />
          <polygon
            class="cls-96"
            points="109.23 219.51 109.06 219.41 109.06 214.3 109.23 214.4 109.23 219.51"
          />
          <polygon
            class="cls-95"
            points="109.4 219.41 109.23 219.51 109.23 214.4 109.4 214.3 109.4 219.41"
          />
          <polygon
            class="cls-96"
            points="109.4 214.3 109.23 214.4 109.06 214.3 109.23 214.21 109.4 214.3"
          />
          <polygon
            class="cls-102"
            points="109.36 219.44 109.27 219.48 109.27 214.38 109.36 214.33 109.36 219.44"
          />
          <polygon
            class="cls-96"
            points="109.23 219.31 109.23 219.51 111.53 220.84 111.53 220.64 109.23 219.31"
          />
          <polygon
            class="cls-96"
            points="109.4 219.21 109.23 219.31 111.53 220.64 111.7 220.54 109.4 219.21"
          />
          <polygon
            class="cls-95"
            points="111.7 220.54 111.53 220.64 111.53 220.84 111.7 220.74 111.7 220.54"
          />
          <polygon
            class="cls-102"
            points="109.36 219.23 109.27 219.28 111.4 220.52 111.48 220.47 109.36 219.23"
          />
          <polygon
            class="cls-103"
            points="111.36 220.5 109.27 219.28 109.27 214.38 111.57 215.7 111.36 220.5"
          />
          <polygon
            class="cls-96"
            points="111.53 220.84 111.36 220.74 111.36 215.63 111.53 215.73 111.53 220.84"
          />
          <polygon
            class="cls-95"
            points="111.7 220.74 111.53 220.84 111.53 215.73 111.7 215.63 111.7 220.74"
          />
          <polygon
            class="cls-96"
            points="111.7 215.63 111.53 215.73 111.36 215.63 111.53 215.53 111.7 215.63"
          />
          <polygon
            class="cls-96"
            points="112.14 215.26 84.92 199.55 84.92 200.33 112.14 216.05 112.14 215.26"
          />
          <polygon
            class="cls-37"
            points="113.5 214.48 112.14 215.26 85.26 199.75 86.62 198.96 113.5 214.48"
          />
          <polygon
            class="cls-101"
            points="88.35 200.04 86.65 199.06 86.65 194.01 88.35 194.99 88.35 200.04"
          />
          <polygon
            class="cls-96"
            points="86.52 199.33 86.35 199.23 86.35 193.99 86.52 194.08 86.52 199.33"
          />
          <polygon
            class="cls-95"
            points="86.69 199.23 86.52 199.33 86.52 194.08 86.69 193.99 86.69 199.23"
          />
          <polygon
            class="cls-96"
            points="86.69 193.99 86.52 194.08 86.35 193.99 86.52 193.89 86.69 193.99"
          />
          <polygon
            class="cls-102"
            points="86.65 199.25 86.56 199.3 86.56 194.06 86.65 194.01 86.65 199.25"
          />
          <polygon
            class="cls-96"
            points="86.52 199.13 86.52 199.33 88.22 200.31 88.22 200.11 86.52 199.13"
          />
          <polygon
            class="cls-96"
            points="86.69 199.03 86.52 199.13 88.22 200.11 88.39 200.01 86.69 199.03"
          />
          <polygon
            class="cls-95"
            points="88.39 200.01 88.22 200.11 88.22 200.31 88.39 200.21 88.39 200.01"
          />
          <polygon
            class="cls-102"
            points="86.65 199.05 86.56 199.1 88.09 200 88.18 199.95 86.65 199.05"
          />
          <polygon
            class="cls-103"
            points="88.05 199.97 86.56 199.1 86.56 194.06 88.26 195.04 88.05 199.97"
          />
          <polygon
            class="cls-96"
            points="88.22 200.31 88.05 200.21 88.05 194.97 88.22 195.07 88.22 200.31"
          />
          <polygon
            class="cls-95"
            points="88.39 200.21 88.22 200.31 88.22 195.07 88.39 194.97 88.39 200.21"
          />
          <polygon
            class="cls-96"
            points="88.39 194.97 88.22 195.07 88.05 194.97 88.22 194.87 88.39 194.97"
          />
          <polygon
            class="cls-101"
            points="89.71 200.83 88.52 200.14 88.52 195.09 89.71 195.78 89.71 200.83"
          />
          <polygon
            class="cls-96"
            points="88.39 200.41 88.22 200.31 88.22 195.07 88.39 195.16 88.39 200.41"
          />
          <polygon
            class="cls-95"
            points="88.56 200.31 88.39 200.41 88.39 195.16 88.56 195.07 88.56 200.31"
          />
          <polygon
            class="cls-96"
            points="88.56 195.07 88.39 195.16 88.22 195.07 88.39 194.97 88.56 195.07"
          />
          <polygon
            class="cls-102"
            points="88.52 200.33 88.43 200.38 88.43 195.14 88.52 195.09 88.52 200.33"
          />
          <polygon
            class="cls-96"
            points="88.39 200.21 88.39 200.41 89.58 201.09 89.58 200.9 88.39 200.21"
          />
          <polygon
            class="cls-96"
            points="88.56 200.11 88.39 200.21 89.58 200.9 89.75 200.8 88.56 200.11"
          />
          <polygon
            class="cls-95"
            points="89.75 200.8 89.58 200.9 89.58 201.09 89.75 201 89.75 200.8"
          />
          <polygon
            class="cls-102"
            points="88.52 200.13 88.43 200.18 89.45 200.78 89.54 200.73 88.52 200.13"
          />
          <polygon
            class="cls-103"
            points="89.41 200.76 88.43 200.18 88.43 195.14 89.62 195.83 89.41 200.76"
          />
          <polygon
            class="cls-96"
            points="89.58 201.09 89.41 201 89.41 195.75 89.58 195.85 89.58 201.09"
          />
          <polygon
            class="cls-95"
            points="89.75 201 89.58 201.09 89.58 195.85 89.75 195.75 89.75 201"
          />
          <polygon
            class="cls-96"
            points="89.75 195.75 89.58 195.85 89.41 195.75 89.58 195.66 89.75 195.75"
          />
          <polygon
            class="cls-101"
            points="91.58 201.91 89.88 200.93 89.88 195.88 91.58 196.86 91.58 201.91"
          />
          <polygon
            class="cls-96"
            points="89.75 201.19 89.58 201.09 89.58 195.85 89.75 195.95 89.75 201.19"
          />
          <polygon
            class="cls-95"
            points="89.92 201.09 89.75 201.19 89.75 195.95 89.92 195.85 89.92 201.09"
          />
          <polygon
            class="cls-96"
            points="89.92 195.85 89.75 195.95 89.58 195.85 89.75 195.75 89.92 195.85"
          />
          <polygon
            class="cls-102"
            points="89.88 201.12 89.79 201.17 89.79 195.93 89.88 195.88 89.88 201.12"
          />
          <polygon
            class="cls-96"
            points="89.75 201 89.75 201.19 91.45 202.17 91.45 201.98 89.75 201"
          />
          <polygon
            class="cls-96"
            points="89.92 200.9 89.75 201 91.45 201.98 91.62 201.88 89.92 200.9"
          />
          <polygon
            class="cls-95"
            points="91.62 201.88 91.45 201.98 91.45 202.17 91.62 202.07 91.62 201.88"
          />
          <polygon
            class="cls-102"
            points="89.88 200.92 89.79 200.97 91.32 201.86 91.41 201.81 89.88 200.92"
          />
          <polygon
            class="cls-103"
            points="91.28 201.84 89.79 200.97 89.79 195.93 91.5 196.91 91.28 201.84"
          />
          <polygon
            class="cls-96"
            points="91.45 202.17 91.28 202.07 91.28 196.83 91.45 196.93 91.45 202.17"
          />
          <polygon
            class="cls-95"
            points="91.62 202.07 91.45 202.17 91.45 196.93 91.62 196.83 91.62 202.07"
          />
          <polygon
            class="cls-96"
            points="91.62 196.83 91.45 196.93 91.28 196.83 91.45 196.74 91.62 196.83"
          />
          <polygon
            class="cls-104"
            points="89.48 199.16 89.44 199.13 89.42 199.15 89.46 199.17 89.48 199.16"
          />
          <polygon
            class="cls-105"
            points="89.44 198.73 89.39 198.71 89.39 199.19 89.44 199.21 89.44 198.73"
          />
          <polygon
            class="cls-104"
            points="89.46 198.72 89.44 198.73 89.39 198.71 89.42 198.69 89.46 198.72"
          />
          <polygon
            class="cls-106"
            points="89.44 198.73 89.44 199.21 89.46 199.2 89.48 199.19 89.48 199.16 89.46 199.17 89.46 198.72 89.44 198.73"
          />
          <polygon
            class="cls-101"
            points="93.55 204.19 92.36 203.5 92.36 198.46 93.55 199.14 93.55 204.19"
          />
          <polygon
            class="cls-96"
            points="92.23 203.77 92.06 203.67 92.06 198.43 92.23 198.53 92.23 203.77"
          />
          <polygon
            class="cls-95"
            points="92.4 203.67 92.23 203.77 92.23 198.53 92.4 198.43 92.4 203.67"
          />
          <polygon
            class="cls-96"
            points="92.4 198.43 92.23 198.53 92.06 198.43 92.23 198.33 92.4 198.43"
          />
          <polygon
            class="cls-102"
            points="92.36 203.7 92.28 203.75 92.28 198.5 92.36 198.46 92.36 203.7"
          />
          <polygon
            class="cls-96"
            points="92.23 203.57 92.23 203.77 93.42 204.46 93.42 204.26 92.23 203.57"
          />
          <polygon
            class="cls-96"
            points="92.4 203.48 92.23 203.57 93.42 204.26 93.59 204.16 92.4 203.48"
          />
          <polygon
            class="cls-95"
            points="93.59 204.16 93.42 204.26 93.42 204.46 93.59 204.36 93.59 204.16"
          />
          <polygon
            class="cls-102"
            points="92.36 203.5 92.28 203.54 93.3 204.15 93.38 204.1 92.36 203.5"
          />
          <polygon
            class="cls-103"
            points="93.25 204.12 92.28 203.54 92.28 198.5 93.47 199.19 93.25 204.12"
          />
          <polygon
            class="cls-96"
            points="93.42 204.46 93.25 204.36 93.25 199.12 93.42 199.22 93.42 204.46"
          />
          <polygon
            class="cls-95"
            points="93.59 204.36 93.42 204.46 93.42 199.22 93.59 199.12 93.59 204.36"
          />
          <polygon
            class="cls-96"
            points="93.59 199.12 93.42 199.22 93.25 199.12 93.42 199.02 93.59 199.12"
          />
          <polygon
            class="cls-101"
            points="94.91 204.98 93.72 204.29 93.72 199.24 94.91 199.93 94.91 204.98"
          />
          <polygon
            class="cls-96"
            points="93.59 204.56 93.42 204.46 93.42 199.22 93.59 199.31 93.59 204.56"
          />
          <polygon
            class="cls-95"
            points="93.76 204.46 93.59 204.56 93.59 199.31 93.76 199.22 93.76 204.46"
          />
          <polygon
            class="cls-96"
            points="93.76 199.22 93.59 199.31 93.42 199.22 93.59 199.12 93.76 199.22"
          />
          <polygon
            class="cls-102"
            points="93.72 204.48 93.64 204.53 93.64 199.29 93.72 199.24 93.72 204.48"
          />
          <polygon
            class="cls-96"
            points="93.59 204.36 93.59 204.56 94.78 205.25 94.78 205.05 93.59 204.36"
          />
          <polygon
            class="cls-96"
            points="93.76 204.26 93.59 204.36 94.78 205.05 94.95 204.95 93.76 204.26"
          />
          <polygon
            class="cls-95"
            points="94.95 204.95 94.78 205.05 94.78 205.25 94.95 205.15 94.95 204.95"
          />
          <polygon
            class="cls-102"
            points="93.72 204.28 93.64 204.33 94.66 204.93 94.74 204.88 93.72 204.28"
          />
          <polygon
            class="cls-103"
            points="94.61 204.91 93.64 204.33 93.64 199.29 94.83 199.98 94.61 204.91"
          />
          <polygon
            class="cls-96"
            points="94.78 205.25 94.61 205.15 94.61 199.9 94.78 200 94.78 205.25"
          />
          <polygon
            class="cls-95"
            points="94.95 205.15 94.78 205.25 94.78 200 94.95 199.9 94.95 205.15"
          />
          <polygon
            class="cls-96"
            points="94.95 199.9 94.78 200 94.61 199.9 94.78 199.81 94.95 199.9"
          />
          <polygon
            class="cls-101"
            points="98.04 207.21 96.51 206.33 96.51 201.28 98.05 202.16 98.04 207.21"
          />
          <polygon
            class="cls-96"
            points="96.39 206.59 96.22 206.5 96.22 201.25 96.39 201.35 96.39 206.59"
          />
          <polygon
            class="cls-95"
            points="96.56 206.5 96.39 206.59 96.39 201.35 96.56 201.25 96.56 206.5"
          />
          <polygon
            class="cls-96"
            points="96.56 201.25 96.39 201.35 96.22 201.25 96.39 201.16 96.56 201.25"
          />
          <polygon
            class="cls-102"
            points="96.51 206.52 96.43 206.57 96.43 201.33 96.51 201.28 96.51 206.52"
          />
          <polygon
            class="cls-96"
            points="96.39 206.4 96.39 206.59 97.92 207.48 97.92 207.28 96.39 206.4"
          />
          <polygon
            class="cls-96"
            points="96.56 206.3 96.39 206.4 97.92 207.28 98.09 207.18 96.56 206.3"
          />
          <polygon
            class="cls-95"
            points="98.09 207.18 97.92 207.28 97.92 207.48 98.09 207.38 98.09 207.18"
          />
          <polygon
            class="cls-102"
            points="96.51 206.32 96.43 206.37 97.79 207.16 97.88 207.12 96.51 206.32"
          />
          <polygon
            class="cls-103"
            points="97.75 207.14 96.43 206.37 96.43 201.33 97.96 202.21 97.75 207.14"
          />
          <polygon
            class="cls-96"
            points="97.92 207.48 97.75 207.38 97.75 202.14 97.92 202.24 97.92 207.48"
          />
          <polygon
            class="cls-95"
            points="98.09 207.38 97.92 207.48 97.92 202.24 98.09 202.14 98.09 207.38"
          />
          <polygon
            class="cls-96"
            points="98.09 202.14 97.92 202.24 97.75 202.14 97.92 202.04 98.09 202.14"
          />
          <polygon
            class="cls-101"
            points="99.41 208 98.22 207.31 98.22 202.26 99.41 202.95 99.41 208"
          />
          <polygon
            class="cls-96"
            points="98.09 207.58 97.92 207.48 97.92 202.24 98.09 202.33 98.09 207.58"
          />
          <polygon
            class="cls-95"
            points="98.26 207.48 98.09 207.58 98.09 202.33 98.26 202.24 98.26 207.48"
          />
          <polygon
            class="cls-96"
            points="98.26 202.24 98.09 202.33 97.92 202.24 98.09 202.14 98.26 202.24"
          />
          <polygon
            class="cls-102"
            points="98.22 207.5 98.13 207.55 98.13 202.31 98.22 202.26 98.22 207.5"
          />
          <polygon
            class="cls-96"
            points="98.09 207.38 98.09 207.58 99.28 208.26 99.28 208.07 98.09 207.38"
          />
          <polygon
            class="cls-96"
            points="98.26 207.28 98.09 207.38 99.28 208.07 99.45 207.97 98.26 207.28"
          />
          <polygon
            class="cls-95"
            points="99.45 207.97 99.28 208.07 99.28 208.26 99.45 208.17 99.45 207.97"
          />
          <polygon
            class="cls-102"
            points="98.22 207.3 98.13 207.35 99.15 207.95 99.24 207.9 98.22 207.3"
          />
          <polygon
            class="cls-103"
            points="99.11 207.93 98.13 207.35 98.13 202.31 99.32 203 99.11 207.93"
          />
          <polygon
            class="cls-96"
            points="99.28 208.26 99.11 208.17 99.11 202.92 99.28 203.02 99.28 208.26"
          />
          <polygon
            class="cls-95"
            points="99.45 208.17 99.28 208.26 99.28 203.02 99.45 202.92 99.45 208.17"
          />
          <polygon
            class="cls-96"
            points="99.45 202.92 99.28 203.02 99.11 202.92 99.28 202.82 99.45 202.92"
          />
          <polygon
            class="cls-101"
            points="101.11 208.98 99.58 208.1 99.58 203.05 101.11 203.93 101.11 208.98"
          />
          <polygon
            class="cls-96"
            points="99.45 208.36 99.28 208.26 99.28 203.02 99.45 203.12 99.45 208.36"
          />
          <polygon
            class="cls-95"
            points="99.62 208.26 99.45 208.36 99.45 203.12 99.62 203.02 99.62 208.26"
          />
          <polygon
            class="cls-96"
            points="99.62 203.02 99.45 203.12 99.28 203.02 99.45 202.92 99.62 203.02"
          />
          <polygon
            class="cls-102"
            points="99.58 208.29 99.49 208.34 99.49 203.09 99.58 203.05 99.58 208.29"
          />
          <polygon
            class="cls-96"
            points="99.45 208.17 99.45 208.36 100.98 209.25 100.98 209.05 99.45 208.17"
          />
          <polygon
            class="cls-96"
            points="99.62 208.07 99.45 208.17 100.98 209.05 101.15 208.95 99.62 208.07"
          />
          <polygon
            class="cls-95"
            points="101.15 208.95 100.98 209.05 100.98 209.25 101.15 209.15 101.15 208.95"
          />
          <polygon
            class="cls-102"
            points="99.58 208.09 99.49 208.13 100.85 208.93 100.94 208.88 99.58 208.09"
          />
          <polygon
            class="cls-103"
            points="100.81 208.91 99.49 208.13 99.49 203.09 101.02 203.98 100.81 208.91"
          />
          <polygon
            class="cls-96"
            points="100.98 209.25 100.81 209.15 100.81 203.91 100.98 204 100.98 209.25"
          />
          <polygon
            class="cls-95"
            points="101.15 209.15 100.98 209.25 100.98 204 101.15 203.91 101.15 209.15"
          />
          <polygon
            class="cls-96"
            points="101.15 203.91 100.98 204 100.81 203.91 100.98 203.81 101.15 203.91"
          />
          <polygon
            class="cls-95"
            points="106.69 212.12 112.48 208.78 112.48 203.54 106.69 206.88 106.69 212.12"
          />
          <polygon
            class="cls-96"
            points="106.69 212.64 100.98 209.3 100.98 203.73 106.69 207.07 106.69 212.64"
          />
          <polygon
            class="cls-101"
            points="109.78 212.41 108.08 211.43 108.08 206.38 109.78 207.37 109.78 212.41"
          />
          <polygon
            class="cls-96"
            points="107.95 211.7 107.78 211.6 107.78 206.36 107.95 206.46 107.95 211.7"
          />
          <polygon
            class="cls-95"
            points="108.13 211.6 107.95 211.7 107.95 206.46 108.13 206.36 108.13 211.6"
          />
          <polygon
            class="cls-96"
            points="108.13 206.36 107.95 206.46 107.78 206.36 107.95 206.26 108.13 206.36"
          />
          <polygon
            class="cls-102"
            points="108.08 211.63 108 211.68 108 206.43 108.08 206.38 108.08 211.63"
          />
          <polygon
            class="cls-96"
            points="107.95 211.5 107.95 211.7 109.66 212.68 109.66 212.49 107.95 211.5"
          />
          <polygon
            class="cls-96"
            points="108.13 211.4 107.95 211.5 109.66 212.49 109.83 212.39 108.13 211.4"
          />
          <polygon
            class="cls-95"
            points="109.83 212.39 109.66 212.49 109.66 212.68 109.83 212.58 109.83 212.39"
          />
          <polygon
            class="cls-102"
            points="108.08 211.42 108 211.47 109.53 212.37 109.61 212.32 108.08 211.42"
          />
          <polygon
            class="cls-103"
            points="109.49 212.34 108 211.47 108 206.43 109.7 207.41 109.49 212.34"
          />
          <polygon
            class="cls-96"
            points="109.66 212.68 109.49 212.58 109.49 207.34 109.66 207.44 109.66 212.68"
          />
          <polygon
            class="cls-95"
            points="109.83 212.58 109.66 212.68 109.66 207.44 109.83 207.34 109.83 212.58"
          />
          <polygon
            class="cls-96"
            points="109.83 207.34 109.66 207.44 109.49 207.34 109.66 207.24 109.83 207.34"
          />
          <polygon
            class="cls-101"
            points="111.14 213.2 109.95 212.51 109.95 207.46 111.14 208.15 111.14 213.2"
          />
          <polygon
            class="cls-96"
            points="109.83 212.78 109.66 212.68 109.66 207.44 109.83 207.54 109.83 212.78"
          />
          <polygon
            class="cls-95"
            points="110 212.68 109.83 212.78 109.83 207.54 110 207.44 110 212.68"
          />
          <polygon
            class="cls-96"
            points="110 207.44 109.83 207.54 109.66 207.44 109.83 207.34 110 207.44"
          />
          <polygon
            class="cls-102"
            points="109.95 212.71 109.87 212.75 109.87 207.51 109.95 207.46 109.95 212.71"
          />
          <polygon
            class="cls-96"
            points="109.83 212.58 109.83 212.78 111.02 213.47 111.02 213.27 109.83 212.58"
          />
          <polygon
            class="cls-96"
            points="110 212.49 109.83 212.58 111.02 213.27 111.19 213.17 110 212.49"
          />
          <polygon
            class="cls-95"
            points="111.19 213.17 111.02 213.27 111.02 213.47 111.19 213.37 111.19 213.17"
          />
          <polygon
            class="cls-102"
            points="109.95 212.5 109.87 212.55 110.89 213.15 110.97 213.1 109.95 212.5"
          />
          <polygon
            class="cls-103"
            points="110.85 213.13 109.87 212.55 109.87 207.51 111.06 208.2 110.85 213.13"
          />
          <polygon
            class="cls-96"
            points="111.02 213.47 110.85 213.37 110.85 208.13 111.02 208.22 111.02 213.47"
          />
          <polygon
            class="cls-95"
            points="111.19 213.37 111.02 213.47 111.02 208.22 111.19 208.13 111.19 213.37"
          />
          <polygon
            class="cls-96"
            points="111.19 208.13 111.02 208.22 110.85 208.13 111.02 208.03 111.19 208.13"
          />
          <polygon
            class="cls-101"
            points="113.02 214.28 111.31 213.3 111.32 208.25 113.02 209.23 113.02 214.28"
          />
          <polygon
            class="cls-96"
            points="111.19 213.56 111.02 213.47 111.02 208.22 111.19 208.32 111.19 213.56"
          />
          <polygon
            class="cls-95"
            points="111.36 213.47 111.19 213.56 111.19 208.32 111.36 208.22 111.36 213.47"
          />
          <polygon
            class="cls-96"
            points="111.36 208.22 111.19 208.32 111.02 208.22 111.19 208.13 111.36 208.22"
          />
          <polygon
            class="cls-102"
            points="111.32 213.49 111.23 213.54 111.23 208.3 111.32 208.25 111.32 213.49"
          />
          <polygon
            class="cls-96"
            points="111.19 213.37 111.19 213.56 112.89 214.55 112.89 214.35 111.19 213.37"
          />
          <polygon
            class="cls-96"
            points="111.36 213.27 111.19 213.37 112.89 214.35 113.06 214.25 111.36 213.27"
          />
          <polygon
            class="cls-95"
            points="113.06 214.25 112.89 214.35 112.89 214.55 113.06 214.45 113.06 214.25"
          />
          <polygon
            class="cls-102"
            points="111.32 213.29 111.23 213.34 112.76 214.23 112.85 214.18 111.32 213.29"
          />
          <polygon
            class="cls-103"
            points="112.72 214.21 111.23 213.34 111.23 208.3 112.93 209.28 112.72 214.21"
          />
          <polygon
            class="cls-96"
            points="112.89 214.55 112.72 214.45 112.72 209.21 112.89 209.3 112.89 214.55"
          />
          <polygon
            class="cls-95"
            points="113.06 214.45 112.89 214.55 112.89 209.3 113.06 209.21 113.06 214.45"
          />
          <polygon
            class="cls-96"
            points="113.06 209.21 112.89 209.3 112.72 209.21 112.89 209.11 113.06 209.21"
          />
          <polygon
            class="cls-104"
            points="110.92 211.53 110.87 211.5 110.85 211.52 110.9 211.54 110.92 211.53"
          />
          <polygon
            class="cls-105"
            points="110.87 211.11 110.83 211.08 110.83 211.56 110.87 211.59 110.87 211.11"
          />
          <polygon
            class="cls-104"
            points="110.9 211.09 110.87 211.11 110.83 211.08 110.85 211.06 110.9 211.09"
          />
          <polygon
            class="cls-106"
            points="110.87 211.11 110.87 211.59 110.9 211.57 110.92 211.56 110.92 211.53 110.9 211.54 110.9 211.09 110.87 211.11"
          />
          <polygon
            class="cls-96"
            points="112.14 209.76 84.92 194.05 84.92 194.83 112.14 210.55 112.14 209.76"
          />
          <polygon
            class="cls-3"
            points="87.98 197 90.36 198.37 90.36 197.98 86.61 195.82 86.61 198.96 85.25 199.74 87.98 199.74 87.98 197"
          />
          <polygon
            class="cls-3"
            points="109.42 209.37 111.8 210.75 111.8 210.35 108.05 208.19 108.05 211.33 106.69 212.12 109.42 212.12 109.42 209.37"
          />
          <path
            class="cls-62"
            d="M91,201.83h0l-5.6-3.24h-.11s0,0,0,0L90.94,202a0,0,0,0,0,0,0,.13.13,0,0,0,.06-.11S91.05,201.83,91,201.83Z"
          />
          <path
            class="cls-62"
            d="M91,201.37h0l-5.6-3.23h-.11a.05.05,0,0,0,0,0l5.59,3.24h0a.13.13,0,0,0,.06-.11S91.05,201.38,91,201.37Z"
          />
          <path
            class="cls-62"
            d="M91,200.92h0l-5.6-3.23h-.11v0a.05.05,0,0,0,0,0l5.59,3.23a0,0,0,0,0,0,0,.13.13,0,0,0,.06-.11S91.05,200.93,91,200.92Z"
          />
          <path
            class="cls-62"
            d="M112.46,214.2h0L106.87,211h-.11v0a.05.05,0,0,0,0,0l5.59,3.23a0,0,0,0,0,0,0,.13.13,0,0,0,.06-.11S112.48,214.21,112.46,214.2Z"
          />
          <path
            class="cls-62"
            d="M112.46,213.75h0l-5.59-3.24h-.11s0,0,0,0l5.59,3.24s0,0,0,0a.11.11,0,0,0,.06-.1S112.48,213.75,112.46,213.75Z"
          />
          <path
            class="cls-62"
            d="M112.46,213.29h0l-5.59-3.23h-.11a.05.05,0,0,0,0,0l5.59,3.23h0a.13.13,0,0,0,.06-.11S112.48,213.3,112.46,213.29Z"
          />
          <polygon
            class="cls-37"
            points="113.5 208.98 112.14 209.76 85.26 194.25 86.62 193.46 113.5 208.98"
          />
          <polygon
            class="cls-101"
            points="88.35 194.54 86.65 193.56 86.65 188.51 88.35 189.49 88.35 194.54"
          />
          <polygon
            class="cls-96"
            points="86.52 193.83 86.35 193.73 86.35 188.49 86.52 188.58 86.52 193.83"
          />
          <polygon
            class="cls-95"
            points="86.69 193.73 86.52 193.83 86.52 188.58 86.69 188.49 86.69 193.73"
          />
          <polygon
            class="cls-96"
            points="86.69 188.49 86.52 188.58 86.35 188.49 86.52 188.39 86.69 188.49"
          />
          <polygon
            class="cls-102"
            points="86.65 193.75 86.56 193.8 86.56 188.56 86.65 188.51 86.65 193.75"
          />
          <polygon
            class="cls-96"
            points="86.52 193.63 86.52 193.83 88.22 194.81 88.22 194.61 86.52 193.63"
          />
          <polygon
            class="cls-96"
            points="86.69 193.53 86.52 193.63 88.22 194.61 88.39 194.51 86.69 193.53"
          />
          <polygon
            class="cls-95"
            points="88.39 194.51 88.22 194.61 88.22 194.81 88.39 194.71 88.39 194.51"
          />
          <polygon
            class="cls-102"
            points="86.65 193.55 86.56 193.6 88.09 194.5 88.18 194.45 86.65 193.55"
          />
          <polygon
            class="cls-103"
            points="88.05 194.47 86.56 193.6 86.56 188.56 88.26 189.54 88.05 194.47"
          />
          <polygon
            class="cls-96"
            points="88.22 194.81 88.05 194.71 88.05 189.47 88.22 189.57 88.22 194.81"
          />
          <polygon
            class="cls-95"
            points="88.39 194.71 88.22 194.81 88.22 189.57 88.39 189.47 88.39 194.71"
          />
          <polygon
            class="cls-96"
            points="88.39 189.47 88.22 189.57 88.05 189.47 88.22 189.37 88.39 189.47"
          />
          <polygon
            class="cls-101"
            points="89.71 195.33 88.52 194.64 88.52 189.59 89.71 190.28 89.71 195.33"
          />
          <polygon
            class="cls-96"
            points="88.39 194.91 88.22 194.81 88.22 189.56 88.39 189.66 88.39 194.91"
          />
          <polygon
            class="cls-95"
            points="88.56 194.81 88.39 194.91 88.39 189.66 88.56 189.56 88.56 194.81"
          />
          <polygon
            class="cls-96"
            points="88.56 189.56 88.39 189.66 88.22 189.56 88.39 189.47 88.56 189.56"
          />
          <polygon
            class="cls-102"
            points="88.52 194.83 88.43 194.88 88.43 189.64 88.52 189.59 88.52 194.83"
          />
          <polygon
            class="cls-96"
            points="88.39 194.71 88.39 194.91 89.58 195.59 89.58 195.4 88.39 194.71"
          />
          <polygon
            class="cls-96"
            points="88.56 194.61 88.39 194.71 89.58 195.4 89.75 195.3 88.56 194.61"
          />
          <polygon
            class="cls-95"
            points="89.75 195.3 89.58 195.4 89.58 195.59 89.75 195.5 89.75 195.3"
          />
          <polygon
            class="cls-102"
            points="88.52 194.63 88.43 194.68 89.45 195.28 89.54 195.23 88.52 194.63"
          />
          <polygon
            class="cls-103"
            points="89.41 195.26 88.43 194.68 88.43 189.64 89.62 190.33 89.41 195.26"
          />
          <polygon
            class="cls-96"
            points="89.58 195.59 89.41 195.5 89.41 190.25 89.58 190.35 89.58 195.59"
          />
          <polygon
            class="cls-95"
            points="89.75 195.5 89.58 195.59 89.58 190.35 89.75 190.25 89.75 195.5"
          />
          <polygon
            class="cls-96"
            points="89.75 190.25 89.58 190.35 89.41 190.25 89.58 190.15 89.75 190.25"
          />
          <polygon
            class="cls-101"
            points="91.58 196.41 89.88 195.43 89.88 190.38 91.58 191.36 91.58 196.41"
          />
          <polygon
            class="cls-96"
            points="89.75 195.69 89.58 195.59 89.58 190.35 89.75 190.45 89.75 195.69"
          />
          <polygon
            class="cls-95"
            points="89.92 195.59 89.75 195.69 89.75 190.45 89.92 190.35 89.92 195.59"
          />
          <polygon
            class="cls-96"
            points="89.92 190.35 89.75 190.45 89.58 190.35 89.75 190.25 89.92 190.35"
          />
          <polygon
            class="cls-102"
            points="89.88 195.62 89.79 195.67 89.79 190.43 89.88 190.38 89.88 195.62"
          />
          <polygon
            class="cls-96"
            points="89.75 195.5 89.75 195.69 91.45 196.67 91.45 196.48 89.75 195.5"
          />
          <polygon
            class="cls-96"
            points="89.92 195.4 89.75 195.5 91.45 196.48 91.62 196.38 89.92 195.4"
          />
          <polygon
            class="cls-95"
            points="91.62 196.38 91.45 196.48 91.45 196.67 91.62 196.57 91.62 196.38"
          />
          <polygon
            class="cls-102"
            points="89.88 195.42 89.79 195.47 91.32 196.36 91.41 196.31 89.88 195.42"
          />
          <polygon
            class="cls-103"
            points="91.28 196.34 89.79 195.47 89.79 190.43 91.5 191.41 91.28 196.34"
          />
          <polygon
            class="cls-96"
            points="91.45 196.67 91.28 196.57 91.28 191.33 91.45 191.43 91.45 196.67"
          />
          <polygon
            class="cls-95"
            points="91.62 196.57 91.45 196.67 91.45 191.43 91.62 191.33 91.62 196.57"
          />
          <polygon
            class="cls-96"
            points="91.62 191.33 91.45 191.43 91.28 191.33 91.45 191.23 91.62 191.33"
          />
          <polygon
            class="cls-104"
            points="89.48 193.66 89.44 193.63 89.42 193.64 89.46 193.67 89.48 193.66"
          />
          <polygon
            class="cls-105"
            points="89.44 193.23 89.39 193.21 89.39 193.69 89.44 193.71 89.44 193.23"
          />
          <polygon
            class="cls-104"
            points="89.46 193.22 89.44 193.23 89.39 193.21 89.42 193.19 89.46 193.22"
          />
          <polygon
            class="cls-106"
            points="89.44 193.23 89.44 193.71 89.46 193.7 89.48 193.69 89.48 193.66 89.46 193.67 89.46 193.22 89.44 193.23"
          />
          <polygon
            class="cls-101"
            points="93.55 198.69 92.36 198 92.36 192.96 93.55 193.64 93.55 198.69"
          />
          <polygon
            class="cls-96"
            points="92.23 198.27 92.06 198.17 92.06 192.93 92.23 193.03 92.23 198.27"
          />
          <polygon
            class="cls-95"
            points="92.4 198.17 92.23 198.27 92.23 193.03 92.4 192.93 92.4 198.17"
          />
          <polygon
            class="cls-96"
            points="92.4 192.93 92.23 193.03 92.06 192.93 92.23 192.83 92.4 192.93"
          />
          <polygon
            class="cls-102"
            points="92.36 198.2 92.28 198.25 92.28 193 92.36 192.96 92.36 198.2"
          />
          <polygon
            class="cls-96"
            points="92.23 198.07 92.23 198.27 93.42 198.96 93.42 198.76 92.23 198.07"
          />
          <polygon
            class="cls-96"
            points="92.4 197.98 92.23 198.07 93.42 198.76 93.59 198.66 92.4 197.98"
          />
          <polygon
            class="cls-95"
            points="93.59 198.66 93.42 198.76 93.42 198.96 93.59 198.86 93.59 198.66"
          />
          <polygon
            class="cls-102"
            points="92.36 198 92.28 198.04 93.3 198.65 93.38 198.6 92.36 198"
          />
          <polygon
            class="cls-103"
            points="93.25 198.62 92.28 198.04 92.28 193 93.47 193.69 93.25 198.62"
          />
          <polygon
            class="cls-96"
            points="93.42 198.96 93.25 198.86 93.25 193.62 93.42 193.72 93.42 198.96"
          />
          <polygon
            class="cls-95"
            points="93.59 198.86 93.42 198.96 93.42 193.72 93.59 193.62 93.59 198.86"
          />
          <polygon
            class="cls-96"
            points="93.59 193.62 93.42 193.72 93.25 193.62 93.42 193.52 93.59 193.62"
          />
          <polygon
            class="cls-101"
            points="94.91 199.48 93.72 198.79 93.72 193.74 94.91 194.43 94.91 199.48"
          />
          <polygon
            class="cls-96"
            points="93.59 199.06 93.42 198.96 93.42 193.72 93.59 193.81 93.59 199.06"
          />
          <polygon
            class="cls-95"
            points="93.76 198.96 93.59 199.06 93.59 193.81 93.76 193.72 93.76 198.96"
          />
          <polygon
            class="cls-96"
            points="93.76 193.72 93.59 193.81 93.42 193.72 93.59 193.62 93.76 193.72"
          />
          <polygon
            class="cls-102"
            points="93.72 198.98 93.64 199.03 93.64 193.79 93.72 193.74 93.72 198.98"
          />
          <polygon
            class="cls-96"
            points="93.59 198.86 93.59 199.06 94.78 199.74 94.78 199.55 93.59 198.86"
          />
          <polygon
            class="cls-96"
            points="93.76 198.76 93.59 198.86 94.78 199.55 94.95 199.45 93.76 198.76"
          />
          <polygon
            class="cls-95"
            points="94.95 199.45 94.78 199.55 94.78 199.74 94.95 199.65 94.95 199.45"
          />
          <polygon
            class="cls-102"
            points="93.72 198.78 93.64 198.83 94.66 199.43 94.74 199.38 93.72 198.78"
          />
          <polygon
            class="cls-103"
            points="94.61 199.41 93.64 198.83 93.64 193.79 94.83 194.48 94.61 199.41"
          />
          <polygon
            class="cls-96"
            points="94.78 199.74 94.61 199.65 94.61 194.4 94.78 194.5 94.78 199.74"
          />
          <polygon
            class="cls-95"
            points="94.95 199.65 94.78 199.74 94.78 194.5 94.95 194.4 94.95 199.65"
          />
          <polygon
            class="cls-96"
            points="94.95 194.4 94.78 194.5 94.61 194.4 94.78 194.31 94.95 194.4"
          />
          <polygon
            class="cls-101"
            points="98.04 201.71 96.51 200.83 96.51 195.78 98.05 196.66 98.04 201.71"
          />
          <polygon
            class="cls-96"
            points="96.39 201.09 96.22 201 96.22 195.75 96.39 195.85 96.39 201.09"
          />
          <polygon
            class="cls-95"
            points="96.56 201 96.39 201.09 96.39 195.85 96.56 195.75 96.56 201"
          />
          <polygon
            class="cls-96"
            points="96.56 195.75 96.39 195.85 96.22 195.75 96.39 195.65 96.56 195.75"
          />
          <polygon
            class="cls-102"
            points="96.51 201.02 96.43 201.07 96.43 195.83 96.51 195.78 96.51 201.02"
          />
          <polygon
            class="cls-96"
            points="96.39 200.9 96.39 201.09 97.92 201.98 97.92 201.78 96.39 200.9"
          />
          <polygon
            class="cls-96"
            points="96.56 200.8 96.39 200.9 97.92 201.78 98.09 201.68 96.56 200.8"
          />
          <polygon
            class="cls-95"
            points="98.09 201.68 97.92 201.78 97.92 201.98 98.09 201.88 98.09 201.68"
          />
          <polygon
            class="cls-102"
            points="96.51 200.82 96.43 200.87 97.79 201.66 97.88 201.62 96.51 200.82"
          />
          <polygon
            class="cls-103"
            points="97.75 201.64 96.43 200.87 96.43 195.83 97.96 196.71 97.75 201.64"
          />
          <polygon
            class="cls-96"
            points="97.92 201.98 97.75 201.88 97.75 196.64 97.92 196.74 97.92 201.98"
          />
          <polygon
            class="cls-95"
            points="98.09 201.88 97.92 201.98 97.92 196.74 98.09 196.64 98.09 201.88"
          />
          <polygon
            class="cls-96"
            points="98.09 196.64 97.92 196.74 97.75 196.64 97.92 196.54 98.09 196.64"
          />
          <polygon
            class="cls-101"
            points="99.41 202.5 98.22 201.81 98.22 196.76 99.41 197.45 99.41 202.5"
          />
          <polygon
            class="cls-96"
            points="98.09 202.08 97.92 201.98 97.92 196.74 98.09 196.83 98.09 202.08"
          />
          <polygon
            class="cls-95"
            points="98.26 201.98 98.09 202.08 98.09 196.83 98.26 196.74 98.26 201.98"
          />
          <polygon
            class="cls-96"
            points="98.26 196.74 98.09 196.83 97.92 196.74 98.09 196.64 98.26 196.74"
          />
          <polygon
            class="cls-102"
            points="98.22 202 98.13 202.05 98.13 196.81 98.22 196.76 98.22 202"
          />
          <polygon
            class="cls-96"
            points="98.09 201.88 98.09 202.08 99.28 202.76 99.28 202.57 98.09 201.88"
          />
          <polygon
            class="cls-96"
            points="98.26 201.78 98.09 201.88 99.28 202.57 99.45 202.47 98.26 201.78"
          />
          <polygon
            class="cls-95"
            points="99.45 202.47 99.28 202.57 99.28 202.76 99.45 202.66 99.45 202.47"
          />
          <polygon
            class="cls-102"
            points="98.22 201.8 98.13 201.85 99.15 202.45 99.24 202.4 98.22 201.8"
          />
          <polygon
            class="cls-103"
            points="99.11 202.43 98.13 201.85 98.13 196.81 99.32 197.5 99.11 202.43"
          />
          <polygon
            class="cls-96"
            points="99.28 202.76 99.11 202.66 99.11 197.42 99.28 197.52 99.28 202.76"
          />
          <polygon
            class="cls-95"
            points="99.45 202.66 99.28 202.76 99.28 197.52 99.45 197.42 99.45 202.66"
          />
          <polygon
            class="cls-96"
            points="99.45 197.42 99.28 197.52 99.11 197.42 99.28 197.32 99.45 197.42"
          />
          <polygon
            class="cls-101"
            points="101.11 203.48 99.58 202.59 99.58 197.54 101.11 198.43 101.11 203.48"
          />
          <polygon
            class="cls-96"
            points="99.45 202.86 99.28 202.76 99.28 197.52 99.45 197.62 99.45 202.86"
          />
          <polygon
            class="cls-95"
            points="99.62 202.76 99.45 202.86 99.45 197.62 99.62 197.52 99.62 202.76"
          />
          <polygon
            class="cls-96"
            points="99.62 197.52 99.45 197.62 99.28 197.52 99.45 197.42 99.62 197.52"
          />
          <polygon
            class="cls-102"
            points="99.58 202.79 99.49 202.84 99.49 197.59 99.58 197.54 99.58 202.79"
          />
          <polygon
            class="cls-96"
            points="99.45 202.66 99.45 202.86 100.98 203.75 100.98 203.55 99.45 202.66"
          />
          <polygon
            class="cls-96"
            points="99.62 202.57 99.45 202.66 100.98 203.55 101.15 203.45 99.62 202.57"
          />
          <polygon
            class="cls-95"
            points="101.15 203.45 100.98 203.55 100.98 203.75 101.15 203.65 101.15 203.45"
          />
          <polygon
            class="cls-102"
            points="99.58 202.59 99.49 202.63 100.85 203.43 100.94 203.38 99.58 202.59"
          />
          <polygon
            class="cls-103"
            points="100.81 203.41 99.49 202.63 99.49 197.59 101.02 198.48 100.81 203.41"
          />
          <polygon
            class="cls-96"
            points="100.98 203.75 100.81 203.65 100.81 198.4 100.98 198.5 100.98 203.75"
          />
          <polygon
            class="cls-95"
            points="101.15 203.65 100.98 203.75 100.98 198.5 101.15 198.4 101.15 203.65"
          />
          <polygon
            class="cls-96"
            points="101.15 198.4 100.98 198.5 100.81 198.4 100.98 198.31 101.15 198.4"
          />
          <polygon
            class="cls-95"
            points="106.69 206.62 112.48 203.28 112.48 198.04 106.69 201.38 106.69 206.62"
          />
          <polygon
            class="cls-96"
            points="106.69 207.25 100.98 203.73 100.98 197.85 106.69 201.37 106.69 207.25"
          />
          <polygon
            class="cls-101"
            points="109.78 206.91 108.08 205.93 108.08 200.88 109.78 201.86 109.78 206.91"
          />
          <polygon
            class="cls-96"
            points="107.95 206.2 107.78 206.1 107.78 200.86 107.95 200.96 107.95 206.2"
          />
          <polygon
            class="cls-95"
            points="108.13 206.1 107.95 206.2 107.95 200.96 108.13 200.86 108.13 206.1"
          />
          <polygon
            class="cls-96"
            points="108.13 200.86 107.95 200.96 107.78 200.86 107.95 200.76 108.13 200.86"
          />
          <polygon
            class="cls-102"
            points="108.08 206.13 108 206.17 108 200.93 108.08 200.88 108.08 206.13"
          />
          <polygon
            class="cls-96"
            points="107.95 206 107.95 206.2 109.66 207.18 109.66 206.98 107.95 206"
          />
          <polygon
            class="cls-96"
            points="108.13 205.9 107.95 206 109.66 206.98 109.83 206.89 108.13 205.9"
          />
          <polygon
            class="cls-95"
            points="109.83 206.89 109.66 206.98 109.66 207.18 109.83 207.08 109.83 206.89"
          />
          <polygon
            class="cls-102"
            points="108.08 205.92 108 205.97 109.53 206.87 109.61 206.82 108.08 205.92"
          />
          <polygon
            class="cls-103"
            points="109.49 206.84 108 205.97 108 200.93 109.7 201.91 109.49 206.84"
          />
          <polygon
            class="cls-96"
            points="109.66 207.18 109.49 207.08 109.49 201.84 109.66 201.94 109.66 207.18"
          />
          <polygon
            class="cls-95"
            points="109.83 207.08 109.66 207.18 109.66 201.94 109.83 201.84 109.83 207.08"
          />
          <polygon
            class="cls-96"
            points="109.83 201.84 109.66 201.94 109.49 201.84 109.66 201.74 109.83 201.84"
          />
          <polygon
            class="cls-101"
            points="111.14 207.7 109.95 207.01 109.95 201.96 111.14 202.65 111.14 207.7"
          />
          <polygon
            class="cls-96"
            points="109.83 207.28 109.66 207.18 109.66 201.94 109.83 202.04 109.83 207.28"
          />
          <polygon
            class="cls-95"
            points="110 207.18 109.83 207.28 109.83 202.04 110 201.94 110 207.18"
          />
          <polygon
            class="cls-96"
            points="110 201.94 109.83 202.04 109.66 201.94 109.83 201.84 110 201.94"
          />
          <polygon
            class="cls-102"
            points="109.95 207.21 109.87 207.25 109.87 202.01 109.95 201.96 109.95 207.21"
          />
          <polygon
            class="cls-96"
            points="109.83 207.08 109.83 207.28 111.02 207.97 111.02 207.77 109.83 207.08"
          />
          <polygon
            class="cls-96"
            points="110 206.98 109.83 207.08 111.02 207.77 111.19 207.67 110 206.98"
          />
          <polygon
            class="cls-95"
            points="111.19 207.67 111.02 207.77 111.02 207.97 111.19 207.87 111.19 207.67"
          />
          <polygon
            class="cls-102"
            points="109.95 207 109.87 207.05 110.89 207.65 110.97 207.6 109.95 207"
          />
          <polygon
            class="cls-103"
            points="110.85 207.63 109.87 207.05 109.87 202.01 111.06 202.7 110.85 207.63"
          />
          <polygon
            class="cls-96"
            points="111.02 207.97 110.85 207.87 110.85 202.63 111.02 202.72 111.02 207.97"
          />
          <polygon
            class="cls-95"
            points="111.19 207.87 111.02 207.97 111.02 202.72 111.19 202.63 111.19 207.87"
          />
          <polygon
            class="cls-96"
            points="111.19 202.63 111.02 202.72 110.85 202.63 111.02 202.53 111.19 202.63"
          />
          <polygon
            class="cls-101"
            points="113.02 208.78 111.31 207.8 111.32 202.75 113.02 203.73 113.02 208.78"
          />
          <polygon
            class="cls-96"
            points="111.19 208.06 111.02 207.97 111.02 202.72 111.19 202.82 111.19 208.06"
          />
          <polygon
            class="cls-95"
            points="111.36 207.97 111.19 208.06 111.19 202.82 111.36 202.72 111.36 207.97"
          />
          <polygon
            class="cls-96"
            points="111.36 202.72 111.19 202.82 111.02 202.72 111.19 202.63 111.36 202.72"
          />
          <polygon
            class="cls-102"
            points="111.32 207.99 111.23 208.04 111.23 202.8 111.32 202.75 111.32 207.99"
          />
          <polygon
            class="cls-96"
            points="111.19 207.87 111.19 208.06 112.89 209.04 112.89 208.85 111.19 207.87"
          />
          <polygon
            class="cls-96"
            points="111.36 207.77 111.19 207.87 112.89 208.85 113.06 208.75 111.36 207.77"
          />
          <polygon
            class="cls-95"
            points="113.06 208.75 112.89 208.85 112.89 209.04 113.06 208.95 113.06 208.75"
          />
          <polygon
            class="cls-102"
            points="111.32 207.79 111.23 207.84 112.76 208.73 112.85 208.68 111.32 207.79"
          />
          <polygon
            class="cls-103"
            points="112.72 208.71 111.23 207.84 111.23 202.8 112.93 203.78 112.72 208.71"
          />
          <polygon
            class="cls-96"
            points="112.89 209.04 112.72 208.95 112.72 203.7 112.89 203.8 112.89 209.04"
          />
          <polygon
            class="cls-95"
            points="113.06 208.95 112.89 209.04 112.89 203.8 113.06 203.7 113.06 208.95"
          />
          <polygon
            class="cls-96"
            points="113.06 203.7 112.89 203.8 112.72 203.7 112.89 203.61 113.06 203.7"
          />
          <polygon
            class="cls-104"
            points="110.92 206.03 110.87 206 110.85 206.02 110.9 206.04 110.92 206.03"
          />
          <polygon
            class="cls-105"
            points="110.87 205.6 110.83 205.58 110.83 206.06 110.87 206.08 110.87 205.6"
          />
          <polygon
            class="cls-104"
            points="110.9 205.59 110.87 205.6 110.83 205.58 110.85 205.56 110.9 205.59"
          />
          <polygon
            class="cls-106"
            points="110.87 205.61 110.87 206.08 110.9 206.07 110.92 206.06 110.92 206.03 110.9 206.04 110.9 205.59 110.87 205.61"
          />
          <polygon
            class="cls-96"
            points="112.14 204.26 84.92 188.55 84.92 189.33 112.14 205.05 112.14 204.26"
          />
          <polygon
            class="cls-3"
            points="87.98 191.5 90.36 192.87 90.36 192.48 86.61 190.31 86.61 193.46 85.25 194.24 87.98 194.24 87.98 191.5"
          />
          <polygon
            class="cls-3"
            points="109.42 203.87 111.8 205.25 111.8 204.85 108.05 202.69 108.05 205.83 106.69 206.62 109.42 206.62 109.42 203.87"
          />
          <path
            class="cls-62"
            d="M91,196.33h0l-5.6-3.24h-.11s0,0,0,0l5.59,3.24s0,0,0,0a.11.11,0,0,0,.06-.1S91.05,196.33,91,196.33Z"
          />
          <path
            class="cls-62"
            d="M91,195.87h0l-5.6-3.23h-.11a.05.05,0,0,0,0,0L90.94,196h0a.13.13,0,0,0,.06-.11S91.05,195.88,91,195.87Z"
          />
          <path
            class="cls-62"
            d="M91,195.42h0l-5.6-3.24h-.11v0a.05.05,0,0,0,0,0l5.59,3.23a0,0,0,0,0,0,0,.13.13,0,0,0,.06-.11S91.05,195.43,91,195.42Z"
          />
          <path
            class="cls-62"
            d="M112.46,208.7h0l-5.59-3.24h-.11v0a.05.05,0,0,0,0,0l5.59,3.23a0,0,0,0,0,0,0,.13.13,0,0,0,.06-.11S112.48,208.71,112.46,208.7Z"
          />
          <path
            class="cls-62"
            d="M112.46,208.25h0L106.87,205h-.11s0,0,0,0l5.59,3.24h0a.11.11,0,0,0,.06-.1S112.48,208.25,112.46,208.25Z"
          />
          <path
            class="cls-62"
            d="M112.46,207.79h0l-5.59-3.23h-.11a.05.05,0,0,0,0,0l5.59,3.23h0a.13.13,0,0,0,.06-.11S112.48,207.8,112.46,207.79Z"
          />
          <polygon
            class="cls-37"
            points="113.5 203.47 112.14 204.26 85.26 188.74 86.62 187.96 113.5 203.47"
          />
          <polygon
            class="cls-101"
            points="88.35 189.04 86.65 188.06 86.65 183.01 88.35 183.99 88.35 189.04"
          />
          <polygon
            class="cls-96"
            points="86.52 188.33 86.35 188.23 86.35 182.98 86.52 183.08 86.52 188.33"
          />
          <polygon
            class="cls-95"
            points="86.69 188.23 86.52 188.33 86.52 183.08 86.69 182.98 86.69 188.23"
          />
          <polygon
            class="cls-96"
            points="86.69 182.98 86.52 183.08 86.35 182.98 86.52 182.89 86.69 182.98"
          />
          <polygon
            class="cls-102"
            points="86.65 188.25 86.56 188.3 86.56 183.06 86.65 183.01 86.65 188.25"
          />
          <polygon
            class="cls-96"
            points="86.52 188.13 86.52 188.32 88.22 189.31 88.22 189.11 86.52 188.13"
          />
          <polygon
            class="cls-96"
            points="86.69 188.03 86.52 188.13 88.22 189.11 88.39 189.01 86.69 188.03"
          />
          <polygon
            class="cls-95"
            points="88.39 189.01 88.22 189.11 88.22 189.31 88.39 189.21 88.39 189.01"
          />
          <polygon
            class="cls-102"
            points="86.65 188.05 86.56 188.1 88.09 188.99 88.18 188.94 86.65 188.05"
          />
          <polygon
            class="cls-103"
            points="88.05 188.97 86.56 188.1 86.56 183.06 88.26 184.04 88.05 188.97"
          />
          <polygon
            class="cls-96"
            points="88.22 189.31 88.05 189.21 88.05 183.97 88.22 184.06 88.22 189.31"
          />
          <polygon
            class="cls-95"
            points="88.39 189.21 88.22 189.31 88.22 184.06 88.39 183.97 88.39 189.21"
          />
          <polygon
            class="cls-96"
            points="88.39 183.97 88.22 184.06 88.05 183.97 88.22 183.87 88.39 183.97"
          />
          <polygon
            class="cls-101"
            points="89.71 189.83 88.52 189.14 88.52 184.09 89.71 184.78 89.71 189.83"
          />
          <polygon
            class="cls-96"
            points="88.39 189.41 88.22 189.31 88.22 184.06 88.39 184.16 88.39 189.41"
          />
          <polygon
            class="cls-95"
            points="88.56 189.31 88.39 189.41 88.39 184.16 88.56 184.06 88.56 189.31"
          />
          <polygon
            class="cls-96"
            points="88.56 184.06 88.39 184.16 88.22 184.06 88.39 183.97 88.56 184.06"
          />
          <polygon
            class="cls-102"
            points="88.52 189.33 88.43 189.38 88.43 184.14 88.52 184.09 88.52 189.33"
          />
          <polygon
            class="cls-96"
            points="88.39 189.21 88.39 189.41 89.58 190.09 89.58 189.9 88.39 189.21"
          />
          <polygon
            class="cls-96"
            points="88.56 189.11 88.39 189.21 89.58 189.9 89.75 189.8 88.56 189.11"
          />
          <polygon
            class="cls-95"
            points="89.75 189.8 89.58 189.9 89.58 190.09 89.75 190 89.75 189.8"
          />
          <polygon
            class="cls-102"
            points="88.52 189.13 88.43 189.18 89.45 189.78 89.54 189.73 88.52 189.13"
          />
          <polygon
            class="cls-103"
            points="89.41 189.76 88.43 189.18 88.43 184.14 89.62 184.83 89.41 189.76"
          />
          <polygon
            class="cls-96"
            points="89.58 190.09 89.41 190 89.41 184.75 89.58 184.85 89.58 190.09"
          />
          <polygon
            class="cls-95"
            points="89.75 190 89.58 190.09 89.58 184.85 89.75 184.75 89.75 190"
          />
          <polygon
            class="cls-96"
            points="89.75 184.75 89.58 184.85 89.41 184.75 89.58 184.65 89.75 184.75"
          />
          <polygon
            class="cls-101"
            points="91.58 190.91 89.88 189.93 89.88 184.88 91.58 185.86 91.58 190.91"
          />
          <polygon
            class="cls-96"
            points="89.75 190.19 89.58 190.09 89.58 184.85 89.75 184.95 89.75 190.19"
          />
          <polygon
            class="cls-95"
            points="89.92 190.09 89.75 190.19 89.75 184.95 89.92 184.85 89.92 190.09"
          />
          <polygon
            class="cls-96"
            points="89.92 184.85 89.75 184.95 89.58 184.85 89.75 184.75 89.92 184.85"
          />
          <polygon
            class="cls-102"
            points="89.88 190.12 89.79 190.17 89.79 184.92 89.88 184.88 89.88 190.12"
          />
          <polygon
            class="cls-96"
            points="89.75 190 89.75 190.19 91.45 191.17 91.45 190.98 89.75 190"
          />
          <polygon
            class="cls-96"
            points="89.92 189.9 89.75 190 91.45 190.98 91.62 190.88 89.92 189.9"
          />
          <polygon
            class="cls-95"
            points="91.62 190.88 91.45 190.98 91.45 191.17 91.62 191.07 91.62 190.88"
          />
          <polygon
            class="cls-102"
            points="89.88 189.91 89.79 189.97 91.32 190.86 91.41 190.81 89.88 189.91"
          />
          <polygon
            class="cls-103"
            points="91.28 190.83 89.79 189.97 89.79 184.92 91.5 185.91 91.28 190.83"
          />
          <polygon
            class="cls-96"
            points="91.45 191.17 91.28 191.07 91.28 185.83 91.45 185.93 91.45 191.17"
          />
          <polygon
            class="cls-95"
            points="91.62 191.07 91.45 191.17 91.45 185.93 91.62 185.83 91.62 191.07"
          />
          <polygon
            class="cls-96"
            points="91.62 185.83 91.45 185.93 91.28 185.83 91.45 185.73 91.62 185.83"
          />
          <polygon
            class="cls-104"
            points="89.48 188.16 89.44 188.13 89.42 188.14 89.46 188.17 89.48 188.16"
          />
          <polygon
            class="cls-105"
            points="89.44 187.73 89.39 187.71 89.39 188.18 89.44 188.21 89.44 187.73"
          />
          <polygon
            class="cls-104"
            points="89.46 187.72 89.44 187.73 89.39 187.71 89.42 187.69 89.46 187.72"
          />
          <polygon
            class="cls-106"
            points="89.44 187.73 89.44 188.21 89.46 188.2 89.48 188.18 89.48 188.16 89.46 188.17 89.46 187.72 89.44 187.73"
          />
          <polygon
            class="cls-101"
            points="93.28 193.46 92.09 192.77 92.09 187.72 93.28 188.41 93.28 193.46"
          />
          <polygon
            class="cls-96"
            points="91.96 193.04 91.79 192.94 91.79 187.7 91.96 187.8 91.96 193.04"
          />
          <polygon
            class="cls-95"
            points="92.13 192.94 91.96 193.04 91.96 187.8 92.13 187.7 92.13 192.94"
          />
          <polygon
            class="cls-96"
            points="92.13 187.7 91.96 187.8 91.79 187.7 91.96 187.6 92.13 187.7"
          />
          <polygon
            class="cls-102"
            points="92.09 192.97 92 193.01 92 187.77 92.09 187.72 92.09 192.97"
          />
          <polygon
            class="cls-96"
            points="91.96 192.84 91.96 193.04 93.15 193.73 93.15 193.53 91.96 192.84"
          />
          <polygon
            class="cls-96"
            points="92.13 192.75 91.96 192.84 93.15 193.53 93.32 193.43 92.13 192.75"
          />
          <polygon
            class="cls-95"
            points="93.32 193.43 93.15 193.53 93.15 193.73 93.32 193.63 93.32 193.43"
          />
          <polygon
            class="cls-102"
            points="92.09 192.76 92 192.81 93.03 193.41 93.11 193.36 92.09 192.76"
          />
          <polygon
            class="cls-103"
            points="92.98 193.39 92 192.81 92 187.77 93.2 188.46 92.98 193.39"
          />
          <polygon
            class="cls-96"
            points="93.15 193.73 92.98 193.63 92.98 188.39 93.15 188.49 93.15 193.73"
          />
          <polygon
            class="cls-95"
            points="93.32 193.63 93.15 193.73 93.15 188.49 93.32 188.39 93.32 193.63"
          />
          <polygon
            class="cls-96"
            points="93.32 188.39 93.15 188.49 92.98 188.39 93.15 188.29 93.32 188.39"
          />
          <polygon
            class="cls-101"
            points="94.64 194.25 93.45 193.56 93.45 188.51 94.64 189.2 94.64 194.25"
          />
          <polygon
            class="cls-96"
            points="93.32 193.82 93.15 193.73 93.15 188.49 93.32 188.58 93.32 193.82"
          />
          <polygon
            class="cls-95"
            points="93.49 193.73 93.32 193.82 93.32 188.58 93.49 188.49 93.49 193.73"
          />
          <polygon
            class="cls-96"
            points="93.49 188.49 93.32 188.58 93.15 188.49 93.32 188.39 93.49 188.49"
          />
          <polygon
            class="cls-102"
            points="93.45 193.75 93.37 193.8 93.37 188.56 93.45 188.51 93.45 193.75"
          />
          <polygon
            class="cls-96"
            points="93.32 193.63 93.32 193.82 94.52 194.51 94.52 194.32 93.32 193.63"
          />
          <polygon
            class="cls-96"
            points="93.49 193.53 93.32 193.63 94.52 194.32 94.69 194.22 93.49 193.53"
          />
          <polygon
            class="cls-95"
            points="94.69 194.22 94.52 194.32 94.52 194.51 94.69 194.41 94.69 194.22"
          />
          <polygon
            class="cls-102"
            points="93.45 193.55 93.37 193.6 94.39 194.2 94.47 194.15 93.45 193.55"
          />
          <polygon
            class="cls-103"
            points="94.34 194.18 93.37 193.6 93.37 188.56 94.56 189.25 94.34 194.18"
          />
          <polygon
            class="cls-96"
            points="94.52 194.51 94.35 194.41 94.34 189.17 94.52 189.27 94.52 194.51"
          />
          <polygon
            class="cls-95"
            points="94.69 194.41 94.52 194.51 94.52 189.27 94.69 189.17 94.69 194.41"
          />
          <polygon
            class="cls-96"
            points="94.69 189.17 94.52 189.27 94.35 189.17 94.52 189.07 94.69 189.17"
          />
          <polygon
            class="cls-101"
            points="98.04 196.21 96.51 195.33 96.51 190.28 98.05 191.16 98.04 196.21"
          />
          <polygon
            class="cls-96"
            points="96.39 195.59 96.22 195.49 96.22 190.25 96.39 190.35 96.39 195.59"
          />
          <polygon
            class="cls-95"
            points="96.56 195.49 96.39 195.59 96.39 190.35 96.56 190.25 96.56 195.49"
          />
          <polygon
            class="cls-96"
            points="96.56 190.25 96.39 190.35 96.22 190.25 96.39 190.15 96.56 190.25"
          />
          <polygon
            class="cls-102"
            points="96.51 195.52 96.43 195.57 96.43 190.32 96.51 190.28 96.51 195.52"
          />
          <polygon
            class="cls-96"
            points="96.39 195.4 96.39 195.59 97.92 196.48 97.92 196.28 96.39 195.4"
          />
          <polygon
            class="cls-96"
            points="96.56 195.3 96.39 195.4 97.92 196.28 98.09 196.18 96.56 195.3"
          />
          <polygon
            class="cls-95"
            points="98.09 196.18 97.92 196.28 97.92 196.48 98.09 196.38 98.09 196.18"
          />
          <polygon
            class="cls-102"
            points="96.51 195.32 96.43 195.37 97.79 196.16 97.88 196.11 96.51 195.32"
          />
          <polygon
            class="cls-103"
            points="97.75 196.14 96.43 195.37 96.43 190.32 97.96 191.21 97.75 196.14"
          />
          <polygon
            class="cls-96"
            points="97.92 196.48 97.75 196.38 97.75 191.13 97.92 191.23 97.92 196.48"
          />
          <polygon
            class="cls-95"
            points="98.09 196.38 97.92 196.48 97.92 191.23 98.09 191.14 98.09 196.38"
          />
          <polygon
            class="cls-96"
            points="98.09 191.14 97.92 191.23 97.75 191.14 97.92 191.04 98.09 191.14"
          />
          <polygon
            class="cls-101"
            points="99.41 197 98.22 196.31 98.22 191.26 99.41 191.95 99.41 197"
          />
          <polygon
            class="cls-96"
            points="98.09 196.57 97.92 196.48 97.92 191.23 98.09 191.33 98.09 196.57"
          />
          <polygon
            class="cls-95"
            points="98.26 196.48 98.09 196.57 98.09 191.33 98.26 191.23 98.26 196.48"
          />
          <polygon
            class="cls-96"
            points="98.26 191.23 98.09 191.33 97.92 191.23 98.09 191.13 98.26 191.23"
          />
          <polygon
            class="cls-102"
            points="98.22 196.5 98.13 196.55 98.13 191.31 98.22 191.26 98.22 196.5"
          />
          <polygon
            class="cls-96"
            points="98.09 196.38 98.09 196.57 99.28 197.26 99.28 197.07 98.09 196.38"
          />
          <polygon
            class="cls-96"
            points="98.26 196.28 98.09 196.38 99.28 197.07 99.45 196.97 98.26 196.28"
          />
          <polygon
            class="cls-95"
            points="99.45 196.97 99.28 197.07 99.28 197.26 99.45 197.16 99.45 196.97"
          />
          <polygon
            class="cls-102"
            points="98.22 196.3 98.13 196.35 99.15 196.95 99.24 196.9 98.22 196.3"
          />
          <polygon
            class="cls-103"
            points="99.11 196.92 98.13 196.35 98.13 191.31 99.32 192 99.11 196.92"
          />
          <polygon
            class="cls-96"
            points="99.28 197.26 99.11 197.16 99.11 191.92 99.28 192.02 99.28 197.26"
          />
          <polygon
            class="cls-95"
            points="99.45 197.16 99.28 197.26 99.28 192.02 99.45 191.92 99.45 197.16"
          />
          <polygon
            class="cls-96"
            points="99.45 191.92 99.28 192.02 99.11 191.92 99.28 191.82 99.45 191.92"
          />
          <polygon
            class="cls-101"
            points="101.11 197.98 99.58 197.09 99.58 192.04 101.11 192.93 101.11 197.98"
          />
          <polygon
            class="cls-96"
            points="99.45 197.36 99.28 197.26 99.28 192.02 99.45 192.12 99.45 197.36"
          />
          <polygon
            class="cls-95"
            points="99.62 197.26 99.45 197.36 99.45 192.12 99.62 192.02 99.62 197.26"
          />
          <polygon
            class="cls-96"
            points="99.62 192.02 99.45 192.12 99.28 192.02 99.45 191.92 99.62 192.02"
          />
          <polygon
            class="cls-102"
            points="99.58 197.29 99.49 197.34 99.49 192.09 99.58 192.04 99.58 197.29"
          />
          <polygon
            class="cls-96"
            points="99.45 197.16 99.45 197.36 100.98 198.25 100.98 198.05 99.45 197.16"
          />
          <polygon
            class="cls-96"
            points="99.62 197.07 99.45 197.16 100.98 198.05 101.15 197.95 99.62 197.07"
          />
          <polygon
            class="cls-95"
            points="101.15 197.95 100.98 198.05 100.98 198.25 101.15 198.15 101.15 197.95"
          />
          <polygon
            class="cls-102"
            points="99.58 197.09 99.49 197.13 100.85 197.93 100.94 197.88 99.58 197.09"
          />
          <polygon
            class="cls-103"
            points="100.81 197.91 99.49 197.13 99.49 192.09 101.02 192.98 100.81 197.91"
          />
          <polygon
            class="cls-96"
            points="100.98 198.25 100.81 198.15 100.81 192.9 100.98 193 100.98 198.25"
          />
          <polygon
            class="cls-95"
            points="101.15 198.15 100.98 198.25 100.98 193 101.15 192.9 101.15 198.15"
          />
          <polygon
            class="cls-96"
            points="101.15 192.9 100.98 193 100.81 192.9 100.98 192.81 101.15 192.9"
          />
          <polygon
            class="cls-95"
            points="106.69 201.12 112.48 197.78 112.48 192.54 106.69 195.88 106.69 201.12"
          />
          <polygon
            class="cls-96"
            points="106.69 201.71 100.89 198.35 100.89 192.73 106.69 196.1 106.69 201.71"
          />
          <polygon
            class="cls-101"
            points="109.78 201.41 108.08 200.43 108.08 195.38 109.78 196.36 109.78 201.41"
          />
          <polygon
            class="cls-96"
            points="107.95 200.7 107.78 200.6 107.78 195.36 107.95 195.46 107.95 200.7"
          />
          <polygon
            class="cls-95"
            points="108.13 200.6 107.95 200.7 107.95 195.46 108.13 195.36 108.13 200.6"
          />
          <polygon
            class="cls-96"
            points="108.13 195.36 107.95 195.46 107.78 195.36 107.95 195.26 108.13 195.36"
          />
          <polygon
            class="cls-102"
            points="108.08 200.62 108 200.67 108 195.43 108.08 195.38 108.08 200.62"
          />
          <polygon
            class="cls-96"
            points="107.95 200.5 107.95 200.7 109.66 201.68 109.66 201.48 107.95 200.5"
          />
          <polygon
            class="cls-96"
            points="108.13 200.4 107.95 200.5 109.66 201.48 109.83 201.38 108.13 200.4"
          />
          <polygon
            class="cls-95"
            points="109.83 201.38 109.66 201.48 109.66 201.68 109.83 201.58 109.83 201.38"
          />
          <polygon
            class="cls-102"
            points="108.08 200.42 108 200.47 109.53 201.37 109.61 201.32 108.08 200.42"
          />
          <polygon
            class="cls-103"
            points="109.49 201.34 108 200.47 108 195.43 109.7 196.41 109.49 201.34"
          />
          <polygon
            class="cls-96"
            points="109.66 201.68 109.49 201.58 109.49 196.34 109.66 196.44 109.66 201.68"
          />
          <polygon
            class="cls-95"
            points="109.83 201.58 109.66 201.68 109.66 196.44 109.83 196.34 109.83 201.58"
          />
          <polygon
            class="cls-96"
            points="109.83 196.34 109.66 196.44 109.49 196.34 109.66 196.24 109.83 196.34"
          />
          <polygon
            class="cls-101"
            points="111.14 202.2 109.95 201.51 109.95 196.46 111.14 197.15 111.14 202.2"
          />
          <polygon
            class="cls-96"
            points="109.83 201.78 109.66 201.68 109.66 196.44 109.83 196.53 109.83 201.78"
          />
          <polygon
            class="cls-95"
            points="110 201.68 109.83 201.78 109.83 196.53 110 196.44 110 201.68"
          />
          <polygon
            class="cls-96"
            points="110 196.44 109.83 196.53 109.66 196.44 109.83 196.34 110 196.44"
          />
          <polygon
            class="cls-102"
            points="109.95 201.7 109.87 201.75 109.87 196.51 109.95 196.46 109.95 201.7"
          />
          <polygon
            class="cls-96"
            points="109.83 201.58 109.83 201.78 111.02 202.47 111.02 202.27 109.83 201.58"
          />
          <polygon
            class="cls-96"
            points="110 201.48 109.83 201.58 111.02 202.27 111.19 202.17 110 201.48"
          />
          <polygon
            class="cls-95"
            points="111.19 202.17 111.02 202.27 111.02 202.47 111.19 202.37 111.19 202.17"
          />
          <polygon
            class="cls-102"
            points="109.95 201.5 109.87 201.55 110.89 202.15 110.97 202.1 109.95 201.5"
          />
          <polygon
            class="cls-103"
            points="110.85 202.13 109.87 201.55 109.87 196.51 111.06 197.2 110.85 202.13"
          />
          <polygon
            class="cls-96"
            points="111.02 202.47 110.85 202.37 110.85 197.13 111.02 197.22 111.02 202.47"
          />
          <polygon
            class="cls-95"
            points="111.19 202.37 111.02 202.47 111.02 197.22 111.19 197.13 111.19 202.37"
          />
          <polygon
            class="cls-96"
            points="111.19 197.13 111.02 197.22 110.85 197.13 111.02 197.03 111.19 197.13"
          />
          <polygon
            class="cls-101"
            points="113.02 203.28 111.31 202.3 111.32 197.25 113.02 198.23 113.02 203.28"
          />
          <polygon
            class="cls-96"
            points="111.19 202.56 111.02 202.47 111.02 197.22 111.19 197.32 111.19 202.56"
          />
          <polygon
            class="cls-95"
            points="111.36 202.47 111.19 202.56 111.19 197.32 111.36 197.22 111.36 202.47"
          />
          <polygon
            class="cls-96"
            points="111.36 197.22 111.19 197.32 111.02 197.22 111.19 197.13 111.36 197.22"
          />
          <polygon
            class="cls-102"
            points="111.32 202.49 111.23 202.54 111.23 197.3 111.32 197.25 111.32 202.49"
          />
          <polygon
            class="cls-96"
            points="111.19 202.37 111.19 202.56 112.89 203.54 112.89 203.35 111.19 202.37"
          />
          <polygon
            class="cls-96"
            points="111.36 202.27 111.19 202.37 112.89 203.35 113.06 203.25 111.36 202.27"
          />
          <polygon
            class="cls-95"
            points="113.06 203.25 112.89 203.35 112.89 203.54 113.06 203.45 113.06 203.25"
          />
          <polygon
            class="cls-102"
            points="111.32 202.29 111.23 202.34 112.76 203.23 112.85 203.18 111.32 202.29"
          />
          <polygon
            class="cls-103"
            points="112.72 203.21 111.23 202.34 111.23 197.3 112.93 198.28 112.72 203.21"
          />
          <polygon
            class="cls-96"
            points="112.89 203.54 112.72 203.45 112.72 198.2 112.89 198.3 112.89 203.54"
          />
          <polygon
            class="cls-95"
            points="113.06 203.45 112.89 203.54 112.89 198.3 113.06 198.2 113.06 203.45"
          />
          <polygon
            class="cls-96"
            points="113.06 198.2 112.89 198.3 112.72 198.2 112.89 198.1 113.06 198.2"
          />
          <polygon
            class="cls-104"
            points="110.92 200.53 110.87 200.5 110.85 200.51 110.9 200.54 110.92 200.53"
          />
          <polygon
            class="cls-105"
            points="110.87 200.1 110.83 200.08 110.83 200.56 110.87 200.58 110.87 200.1"
          />
          <polygon
            class="cls-104"
            points="110.9 200.09 110.87 200.1 110.83 200.08 110.85 200.06 110.9 200.09"
          />
          <polygon
            class="cls-106"
            points="110.87 200.1 110.87 200.58 110.9 200.57 110.92 200.56 110.92 200.53 110.9 200.54 110.9 200.09 110.87 200.1"
          />
          <polygon
            class="cls-96"
            points="112.14 198.76 84.92 183.05 84.92 183.83 112.14 199.55 112.14 198.76"
          />
          <polygon
            class="cls-3"
            points="87.98 186 90.36 187.37 90.36 186.98 86.61 184.81 86.61 187.96 85.25 188.74 87.98 188.74 87.98 186"
          />
          <polygon
            class="cls-3"
            points="109.42 198.37 111.8 199.74 111.8 199.35 108.05 197.19 108.05 200.33 106.69 201.12 109.42 201.12 109.42 198.37"
          />
          <path
            class="cls-62"
            d="M91,190.83h0l-5.6-3.24h-.11s0,0,0,0L90.94,191h0a.11.11,0,0,0,.06-.1S91.05,190.83,91,190.83Z"
          />
          <path
            class="cls-62"
            d="M91,190.37h0l-5.6-3.23h-.11a.05.05,0,0,0,0,0l5.59,3.23h0a.13.13,0,0,0,.06-.11S91.05,190.38,91,190.37Z"
          />
          <path
            class="cls-62"
            d="M91,189.92h0l-5.6-3.24h-.11v0a.05.05,0,0,0,0,0l5.59,3.23a0,0,0,0,0,0,0,.13.13,0,0,0,.06-.11S91.05,189.93,91,189.92Z"
          />
          <path
            class="cls-62"
            d="M112.46,203.2h0L106.87,200h-.11a.08.08,0,0,0,0,.05l5.59,3.23a0,0,0,0,0,0,0,.13.13,0,0,0,.06-.11S112.48,203.2,112.46,203.2Z"
          />
          <path
            class="cls-62"
            d="M112.46,202.75h0l-5.59-3.24h-.11a.05.05,0,0,0,0,0l5.59,3.24h0a.12.12,0,0,0,.06-.1S112.48,202.75,112.46,202.75Z"
          />
          <path
            class="cls-62"
            d="M112.46,202.29h0l-5.59-3.23h-.11a.05.05,0,0,0,0,0l5.59,3.23h0a.13.13,0,0,0,.06-.11S112.48,202.3,112.46,202.29Z"
          />
          <polygon
            class="cls-37"
            points="113.5 197.97 112.14 198.76 85.26 183.24 86.62 182.46 113.5 197.97"
          />
          <polygon
            class="cls-101"
            points="88.35 183.54 86.65 182.56 86.65 177.51 88.35 178.49 88.35 183.54"
          />
          <polygon
            class="cls-96"
            points="86.52 182.82 86.35 182.73 86.35 177.48 86.52 177.58 86.52 182.82"
          />
          <polygon
            class="cls-95"
            points="86.69 182.73 86.52 182.82 86.52 177.58 86.69 177.48 86.69 182.73"
          />
          <polygon
            class="cls-96"
            points="86.69 177.48 86.52 177.58 86.35 177.48 86.52 177.38 86.69 177.48"
          />
          <polygon
            class="cls-102"
            points="86.65 182.75 86.56 182.8 86.56 177.56 86.65 177.51 86.65 182.75"
          />
          <polygon
            class="cls-96"
            points="86.52 182.63 86.52 182.82 88.22 183.81 88.22 183.61 86.52 182.63"
          />
          <polygon
            class="cls-96"
            points="86.69 182.53 86.52 182.63 88.22 183.61 88.39 183.51 86.69 182.53"
          />
          <polygon
            class="cls-95"
            points="88.39 183.51 88.22 183.61 88.22 183.81 88.39 183.71 88.39 183.51"
          />
          <polygon
            class="cls-102"
            points="86.65 182.55 86.56 182.6 88.09 183.49 88.18 183.44 86.65 182.55"
          />
          <polygon
            class="cls-103"
            points="88.05 183.47 86.56 182.6 86.56 177.56 88.26 178.54 88.05 183.47"
          />
          <polygon
            class="cls-96"
            points="88.22 183.81 88.05 183.71 88.05 178.47 88.22 178.56 88.22 183.81"
          />
          <polygon
            class="cls-95"
            points="88.39 183.71 88.22 183.81 88.22 178.56 88.39 178.47 88.39 183.71"
          />
          <polygon
            class="cls-96"
            points="88.39 178.47 88.22 178.56 88.05 178.47 88.22 178.37 88.39 178.47"
          />
          <polygon
            class="cls-101"
            points="89.71 184.33 88.52 183.64 88.52 178.59 89.71 179.28 89.71 184.33"
          />
          <polygon
            class="cls-96"
            points="88.39 183.91 88.22 183.81 88.22 178.56 88.39 178.66 88.39 183.91"
          />
          <polygon
            class="cls-95"
            points="88.56 183.81 88.39 183.91 88.39 178.66 88.56 178.56 88.56 183.81"
          />
          <polygon
            class="cls-96"
            points="88.56 178.56 88.39 178.66 88.22 178.56 88.39 178.47 88.56 178.56"
          />
          <polygon
            class="cls-102"
            points="88.52 183.83 88.43 183.88 88.43 178.64 88.52 178.59 88.52 183.83"
          />
          <polygon
            class="cls-96"
            points="88.39 183.71 88.39 183.91 89.58 184.59 89.58 184.4 88.39 183.71"
          />
          <polygon
            class="cls-96"
            points="88.56 183.61 88.39 183.71 89.58 184.4 89.75 184.3 88.56 183.61"
          />
          <polygon
            class="cls-95"
            points="89.75 184.3 89.58 184.4 89.58 184.59 89.75 184.49 89.75 184.3"
          />
          <polygon
            class="cls-102"
            points="88.52 183.63 88.43 183.68 89.45 184.28 89.54 184.23 88.52 183.63"
          />
          <polygon
            class="cls-103"
            points="89.41 184.25 88.43 183.68 88.43 178.64 89.62 179.32 89.41 184.25"
          />
          <polygon
            class="cls-96"
            points="89.58 184.59 89.41 184.49 89.41 179.25 89.58 179.35 89.58 184.59"
          />
          <polygon
            class="cls-95"
            points="89.75 184.5 89.58 184.59 89.58 179.35 89.75 179.25 89.75 184.5"
          />
          <polygon
            class="cls-96"
            points="89.75 179.25 89.58 179.35 89.41 179.25 89.58 179.15 89.75 179.25"
          />
          <polygon
            class="cls-101"
            points="91.58 185.41 89.88 184.43 89.88 179.37 91.58 180.35 91.58 185.41"
          />
          <polygon
            class="cls-96"
            points="89.75 184.69 89.58 184.59 89.58 179.35 89.75 179.45 89.75 184.69"
          />
          <polygon
            class="cls-95"
            points="89.92 184.59 89.75 184.69 89.75 179.45 89.92 179.35 89.92 184.59"
          />
          <polygon
            class="cls-96"
            points="89.92 179.35 89.75 179.45 89.58 179.35 89.75 179.25 89.92 179.35"
          />
          <polygon
            class="cls-102"
            points="89.88 184.62 89.79 184.67 89.79 179.42 89.88 179.37 89.88 184.62"
          />
          <polygon
            class="cls-96"
            points="89.75 184.49 89.75 184.69 91.45 185.67 91.45 185.47 89.75 184.49"
          />
          <polygon
            class="cls-96"
            points="89.92 184.4 89.75 184.49 91.45 185.47 91.62 185.38 89.92 184.4"
          />
          <polygon
            class="cls-95"
            points="91.62 185.38 91.45 185.47 91.45 185.67 91.62 185.57 91.62 185.38"
          />
          <polygon
            class="cls-102"
            points="89.88 184.41 89.79 184.46 91.32 185.36 91.41 185.31 89.88 184.41"
          />
          <polygon
            class="cls-103"
            points="91.28 185.33 89.79 184.46 89.79 179.42 91.5 180.4 91.28 185.33"
          />
          <polygon
            class="cls-96"
            points="91.45 185.67 91.28 185.57 91.28 180.33 91.45 180.43 91.45 185.67"
          />
          <polygon
            class="cls-95"
            points="91.62 185.57 91.45 185.67 91.45 180.43 91.62 180.33 91.62 185.57"
          />
          <polygon
            class="cls-96"
            points="91.62 180.33 91.45 180.43 91.28 180.33 91.45 180.23 91.62 180.33"
          />
          <polygon
            class="cls-104"
            points="89.48 182.66 89.44 182.63 89.42 182.64 89.46 182.67 89.48 182.66"
          />
          <polygon
            class="cls-105"
            points="89.44 182.23 89.39 182.2 89.39 182.68 89.44 182.71 89.44 182.23"
          />
          <polygon
            class="cls-104"
            points="89.46 182.22 89.44 182.23 89.39 182.2 89.42 182.19 89.46 182.22"
          />
          <polygon
            class="cls-106"
            points="89.44 182.23 89.44 182.71 89.46 182.69 89.48 182.68 89.48 182.66 89.46 182.67 89.46 182.22 89.44 182.23"
          />
          <polygon
            class="cls-101"
            points="93.28 187.96 92.09 187.27 92.09 182.22 93.28 182.91 93.28 187.96"
          />
          <polygon
            class="cls-96"
            points="91.96 187.54 91.79 187.44 91.79 182.2 91.96 182.3 91.96 187.54"
          />
          <polygon
            class="cls-95"
            points="92.13 187.44 91.96 187.54 91.96 182.3 92.13 182.2 92.13 187.44"
          />
          <polygon
            class="cls-96"
            points="92.13 182.2 91.96 182.3 91.79 182.2 91.96 182.1 92.13 182.2"
          />
          <polygon
            class="cls-102"
            points="92.09 187.47 92 187.51 92 182.27 92.09 182.22 92.09 187.47"
          />
          <polygon
            class="cls-96"
            points="91.96 187.34 91.96 187.54 93.15 188.23 93.15 188.03 91.96 187.34"
          />
          <polygon
            class="cls-96"
            points="92.13 187.24 91.96 187.34 93.15 188.03 93.32 187.93 92.13 187.24"
          />
          <polygon
            class="cls-95"
            points="93.32 187.93 93.15 188.03 93.15 188.23 93.32 188.13 93.32 187.93"
          />
          <polygon
            class="cls-102"
            points="92.09 187.26 92 187.31 93.03 187.91 93.11 187.86 92.09 187.26"
          />
          <polygon
            class="cls-103"
            points="92.98 187.89 92 187.31 92 182.27 93.2 182.96 92.98 187.89"
          />
          <polygon
            class="cls-96"
            points="93.15 188.23 92.98 188.13 92.98 182.88 93.15 182.98 93.15 188.23"
          />
          <polygon
            class="cls-95"
            points="93.32 188.13 93.15 188.23 93.15 182.98 93.32 182.88 93.32 188.13"
          />
          <polygon
            class="cls-96"
            points="93.32 182.88 93.15 182.98 92.98 182.88 93.15 182.79 93.32 182.88"
          />
          <polygon
            class="cls-101"
            points="94.64 188.75 93.45 188.06 93.45 183.01 94.64 183.69 94.64 188.75"
          />
          <polygon
            class="cls-96"
            points="93.32 188.32 93.15 188.23 93.15 182.98 93.32 183.08 93.32 188.32"
          />
          <polygon
            class="cls-95"
            points="93.49 188.23 93.32 188.32 93.32 183.08 93.49 182.98 93.49 188.23"
          />
          <polygon
            class="cls-96"
            points="93.49 182.98 93.32 183.08 93.15 182.98 93.32 182.88 93.49 182.98"
          />
          <polygon
            class="cls-102"
            points="93.45 188.25 93.37 188.3 93.37 183.06 93.45 183.01 93.45 188.25"
          />
          <polygon
            class="cls-96"
            points="93.32 188.13 93.32 188.32 94.52 189.01 94.52 188.82 93.32 188.13"
          />
          <polygon
            class="cls-96"
            points="93.49 188.03 93.32 188.13 94.52 188.82 94.69 188.72 93.49 188.03"
          />
          <polygon
            class="cls-95"
            points="94.69 188.72 94.52 188.82 94.52 189.01 94.69 188.91 94.69 188.72"
          />
          <polygon
            class="cls-102"
            points="93.45 188.05 93.37 188.1 94.39 188.7 94.47 188.65 93.45 188.05"
          />
          <polygon
            class="cls-103"
            points="94.34 188.67 93.37 188.1 93.37 183.06 94.56 183.75 94.34 188.67"
          />
          <polygon
            class="cls-96"
            points="94.52 189.01 94.35 188.91 94.34 183.67 94.52 183.77 94.52 189.01"
          />
          <polygon
            class="cls-95"
            points="94.69 188.91 94.52 189.01 94.52 183.77 94.69 183.67 94.69 188.91"
          />
          <polygon
            class="cls-96"
            points="94.69 183.67 94.52 183.77 94.35 183.67 94.52 183.57 94.69 183.67"
          />
          <polygon
            class="cls-101"
            points="98.04 190.71 96.51 189.83 96.51 184.78 98.05 185.66 98.04 190.71"
          />
          <polygon
            class="cls-96"
            points="96.39 190.09 96.22 189.99 96.22 184.75 96.39 184.85 96.39 190.09"
          />
          <polygon
            class="cls-95"
            points="96.56 189.99 96.39 190.09 96.39 184.85 96.56 184.75 96.56 189.99"
          />
          <polygon
            class="cls-96"
            points="96.56 184.75 96.39 184.85 96.22 184.75 96.39 184.65 96.56 184.75"
          />
          <polygon
            class="cls-102"
            points="96.51 190.02 96.43 190.07 96.43 184.82 96.51 184.78 96.51 190.02"
          />
          <polygon
            class="cls-96"
            points="96.39 189.9 96.39 190.09 97.92 190.98 97.92 190.78 96.39 189.9"
          />
          <polygon
            class="cls-96"
            points="96.56 189.8 96.39 189.9 97.92 190.78 98.09 190.68 96.56 189.8"
          />
          <polygon
            class="cls-95"
            points="98.09 190.68 97.92 190.78 97.92 190.98 98.09 190.88 98.09 190.68"
          />
          <polygon
            class="cls-102"
            points="96.51 189.82 96.43 189.87 97.79 190.66 97.88 190.61 96.51 189.82"
          />
          <polygon
            class="cls-103"
            points="97.75 190.64 96.43 189.87 96.43 184.82 97.96 185.71 97.75 190.64"
          />
          <polygon
            class="cls-96"
            points="97.92 190.98 97.75 190.88 97.75 185.63 97.92 185.73 97.92 190.98"
          />
          <polygon
            class="cls-95"
            points="98.09 190.88 97.92 190.98 97.92 185.73 98.09 185.63 98.09 190.88"
          />
          <polygon
            class="cls-96"
            points="98.09 185.63 97.92 185.73 97.75 185.63 97.92 185.54 98.09 185.63"
          />
          <polygon
            class="cls-101"
            points="99.41 191.5 98.22 190.81 98.22 185.76 99.41 186.44 99.41 191.5"
          />
          <polygon
            class="cls-96"
            points="98.09 191.07 97.92 190.98 97.92 185.73 98.09 185.83 98.09 191.07"
          />
          <polygon
            class="cls-95"
            points="98.26 190.98 98.09 191.07 98.09 185.83 98.26 185.73 98.26 190.98"
          />
          <polygon
            class="cls-96"
            points="98.26 185.73 98.09 185.83 97.92 185.73 98.09 185.63 98.26 185.73"
          />
          <polygon
            class="cls-102"
            points="98.22 191 98.13 191.05 98.13 185.81 98.22 185.76 98.22 191"
          />
          <polygon
            class="cls-96"
            points="98.09 190.88 98.09 191.07 99.28 191.76 99.28 191.56 98.09 190.88"
          />
          <polygon
            class="cls-96"
            points="98.26 190.78 98.09 190.88 99.28 191.56 99.45 191.47 98.26 190.78"
          />
          <polygon
            class="cls-95"
            points="99.45 191.47 99.28 191.56 99.28 191.76 99.45 191.66 99.45 191.47"
          />
          <polygon
            class="cls-102"
            points="98.22 190.8 98.13 190.85 99.15 191.45 99.24 191.4 98.22 190.8"
          />
          <polygon
            class="cls-103"
            points="99.11 191.42 98.13 190.85 98.13 185.81 99.32 186.49 99.11 191.42"
          />
          <polygon
            class="cls-96"
            points="99.28 191.76 99.11 191.66 99.11 186.42 99.28 186.52 99.28 191.76"
          />
          <polygon
            class="cls-95"
            points="99.45 191.66 99.28 191.76 99.28 186.52 99.45 186.42 99.45 191.66"
          />
          <polygon
            class="cls-96"
            points="99.45 186.42 99.28 186.52 99.11 186.42 99.28 186.32 99.45 186.42"
          />
          <polygon
            class="cls-101"
            points="101.11 192.48 99.58 191.59 99.58 186.54 101.11 187.43 101.11 192.48"
          />
          <polygon
            class="cls-96"
            points="99.45 191.86 99.28 191.76 99.28 186.52 99.45 186.62 99.45 191.86"
          />
          <polygon
            class="cls-95"
            points="99.62 191.76 99.45 191.86 99.45 186.62 99.62 186.52 99.62 191.76"
          />
          <polygon
            class="cls-96"
            points="99.62 186.52 99.45 186.62 99.28 186.52 99.45 186.42 99.62 186.52"
          />
          <polygon
            class="cls-102"
            points="99.58 191.79 99.49 191.84 99.49 186.59 99.58 186.54 99.58 191.79"
          />
          <polygon
            class="cls-96"
            points="99.45 191.66 99.45 191.86 100.98 192.74 100.98 192.55 99.45 191.66"
          />
          <polygon
            class="cls-96"
            points="99.62 191.56 99.45 191.66 100.98 192.55 101.15 192.45 99.62 191.56"
          />
          <polygon
            class="cls-95"
            points="101.15 192.45 100.98 192.55 100.98 192.74 101.15 192.65 101.15 192.45"
          />
          <polygon
            class="cls-102"
            points="99.58 191.58 99.49 191.63 100.85 192.43 100.94 192.38 99.58 191.58"
          />
          <polygon
            class="cls-103"
            points="100.81 192.41 99.49 191.63 99.49 186.59 101.02 187.48 100.81 192.41"
          />
          <polygon
            class="cls-96"
            points="100.98 192.74 100.81 192.65 100.81 187.4 100.98 187.5 100.98 192.74"
          />
          <polygon
            class="cls-95"
            points="101.15 192.65 100.98 192.74 100.98 187.5 101.15 187.4 101.15 192.65"
          />
          <polygon
            class="cls-96"
            points="101.15 187.4 100.98 187.5 100.81 187.4 100.98 187.3 101.15 187.4"
          />
          <polygon
            class="cls-95"
            points="106.69 195.62 112.48 192.28 112.48 187.03 106.69 190.38 106.69 195.62"
          />
          <polygon
            class="cls-96"
            points="106.69 196.28 100.94 192.89 100.94 187.23 106.69 190.62 106.69 196.28"
          />
          <polygon
            class="cls-101"
            points="109.78 195.91 108.08 194.93 108.08 189.88 109.78 190.86 109.78 195.91"
          />
          <polygon
            class="cls-96"
            points="107.95 195.2 107.78 195.1 107.78 189.86 107.95 189.95 107.95 195.2"
          />
          <polygon
            class="cls-95"
            points="108.13 195.1 107.95 195.2 107.95 189.95 108.13 189.86 108.13 195.1"
          />
          <polygon
            class="cls-96"
            points="108.13 189.86 107.95 189.95 107.78 189.86 107.95 189.76 108.13 189.86"
          />
          <polygon
            class="cls-102"
            points="108.08 195.12 108 195.17 108 189.93 108.08 189.88 108.08 195.12"
          />
          <polygon
            class="cls-96"
            points="107.95 195 107.95 195.2 109.66 196.18 109.66 195.98 107.95 195"
          />
          <polygon
            class="cls-96"
            points="108.13 194.9 107.95 195 109.66 195.98 109.83 195.88 108.13 194.9"
          />
          <polygon
            class="cls-95"
            points="109.83 195.88 109.66 195.98 109.66 196.18 109.83 196.08 109.83 195.88"
          />
          <polygon
            class="cls-102"
            points="108.08 194.92 108 194.97 109.53 195.87 109.61 195.82 108.08 194.92"
          />
          <polygon
            class="cls-103"
            points="109.49 195.84 108 194.97 108 189.93 109.7 190.91 109.49 195.84"
          />
          <polygon
            class="cls-96"
            points="109.66 196.18 109.49 196.08 109.49 190.84 109.66 190.94 109.66 196.18"
          />
          <polygon
            class="cls-95"
            points="109.83 196.08 109.66 196.18 109.66 190.94 109.83 190.84 109.83 196.08"
          />
          <polygon
            class="cls-96"
            points="109.83 190.84 109.66 190.94 109.49 190.84 109.66 190.74 109.83 190.84"
          />
          <polygon
            class="cls-101"
            points="111.14 196.7 109.95 196.01 109.95 190.96 111.14 191.65 111.14 196.7"
          />
          <polygon
            class="cls-96"
            points="109.83 196.28 109.66 196.18 109.66 190.94 109.83 191.03 109.83 196.28"
          />
          <polygon
            class="cls-95"
            points="110 196.18 109.83 196.28 109.83 191.03 110 190.94 110 196.18"
          />
          <polygon
            class="cls-96"
            points="110 190.94 109.83 191.03 109.66 190.94 109.83 190.84 110 190.94"
          />
          <polygon
            class="cls-102"
            points="109.95 196.2 109.87 196.25 109.87 191.01 109.95 190.96 109.95 196.2"
          />
          <polygon
            class="cls-96"
            points="109.83 196.08 109.83 196.28 111.02 196.97 111.02 196.77 109.83 196.08"
          />
          <polygon
            class="cls-96"
            points="110 195.98 109.83 196.08 111.02 196.77 111.19 196.67 110 195.98"
          />
          <polygon
            class="cls-95"
            points="111.19 196.67 111.02 196.77 111.02 196.97 111.19 196.87 111.19 196.67"
          />
          <polygon
            class="cls-102"
            points="109.95 196 109.87 196.05 110.89 196.65 110.97 196.6 109.95 196"
          />
          <polygon
            class="cls-103"
            points="110.85 196.63 109.87 196.05 109.87 191.01 111.06 191.7 110.85 196.63"
          />
          <polygon
            class="cls-96"
            points="111.02 196.97 110.85 196.87 110.85 191.62 111.02 191.72 111.02 196.97"
          />
          <polygon
            class="cls-95"
            points="111.19 196.87 111.02 196.97 111.02 191.72 111.19 191.62 111.19 196.87"
          />
          <polygon
            class="cls-96"
            points="111.19 191.62 111.02 191.72 110.85 191.62 111.02 191.53 111.19 191.62"
          />
          <polygon
            class="cls-101"
            points="113.02 197.78 111.31 196.8 111.32 191.75 113.02 192.73 113.02 197.78"
          />
          <polygon
            class="cls-96"
            points="111.19 197.06 111.02 196.97 111.02 191.72 111.19 191.82 111.19 197.06"
          />
          <polygon
            class="cls-95"
            points="111.36 196.97 111.19 197.06 111.19 191.82 111.36 191.72 111.36 196.97"
          />
          <polygon
            class="cls-96"
            points="111.36 191.72 111.19 191.82 111.02 191.72 111.19 191.62 111.36 191.72"
          />
          <polygon
            class="cls-102"
            points="111.32 196.99 111.23 197.04 111.23 191.8 111.32 191.75 111.32 196.99"
          />
          <polygon
            class="cls-96"
            points="111.19 196.87 111.19 197.06 112.89 198.04 112.89 197.85 111.19 196.87"
          />
          <polygon
            class="cls-96"
            points="111.36 196.77 111.19 196.87 112.89 197.85 113.06 197.75 111.36 196.77"
          />
          <polygon
            class="cls-95"
            points="113.06 197.75 112.89 197.85 112.89 198.04 113.06 197.94 113.06 197.75"
          />
          <polygon
            class="cls-102"
            points="111.32 196.79 111.23 196.84 112.76 197.73 112.85 197.68 111.32 196.79"
          />
          <polygon
            class="cls-103"
            points="112.72 197.71 111.23 196.84 111.23 191.8 112.93 192.78 112.72 197.71"
          />
          <polygon
            class="cls-96"
            points="112.89 198.04 112.72 197.94 112.72 192.7 112.89 192.8 112.89 198.04"
          />
          <polygon
            class="cls-95"
            points="113.06 197.94 112.89 198.04 112.89 192.8 113.06 192.7 113.06 197.94"
          />
          <polygon
            class="cls-96"
            points="113.06 192.7 112.89 192.8 112.72 192.7 112.89 192.6 113.06 192.7"
          />
          <polygon
            class="cls-104"
            points="110.92 195.03 110.87 195 110.85 195.01 110.9 195.04 110.92 195.03"
          />
          <polygon
            class="cls-105"
            points="110.87 194.6 110.83 194.58 110.83 195.06 110.87 195.08 110.87 194.6"
          />
          <polygon
            class="cls-104"
            points="110.9 194.59 110.87 194.6 110.83 194.58 110.85 194.56 110.9 194.59"
          />
          <polygon
            class="cls-106"
            points="110.87 194.6 110.87 195.08 110.9 195.07 110.92 195.06 110.92 195.03 110.9 195.04 110.9 194.59 110.87 194.6"
          />
          <polygon
            class="cls-96"
            points="112.14 193.26 84.92 177.54 84.92 178.33 112.14 194.04 112.14 193.26"
          />
          <polygon
            class="cls-3"
            points="87.98 180.5 90.36 181.87 90.36 181.47 86.61 179.31 86.61 182.45 85.25 183.24 87.98 183.24 87.98 180.5"
          />
          <polygon
            class="cls-3"
            points="109.42 192.87 111.8 194.24 111.8 193.85 108.05 191.69 108.05 194.83 106.69 195.62 109.42 195.62 109.42 192.87"
          />
          <path
            class="cls-62"
            d="M91,185.32h0l-5.6-3.23h-.11s0,0,0,0l5.59,3.24h0a.12.12,0,0,0,.06-.1A.07.07,0,0,0,91,185.32Z"
          />
          <path
            class="cls-62"
            d="M91,184.87h0l-5.6-3.23h-.11a.05.05,0,0,0,0,0L90.94,185h0a.13.13,0,0,0,.06-.11S91.05,184.88,91,184.87Z"
          />
          <path
            class="cls-62"
            d="M91,184.42h0l-5.6-3.24h-.11v0l0,0,5.59,3.23a0,0,0,0,0,0,0,.13.13,0,0,0,.06-.11S91.05,184.42,91,184.42Z"
          />
          <path
            class="cls-62"
            d="M112.46,197.7h0l-5.59-3.24h-.11s0,0,0,0l5.59,3.24a0,0,0,0,0,0,0,.13.13,0,0,0,.06-.11S112.48,197.7,112.46,197.7Z"
          />
          <path
            class="cls-62"
            d="M112.46,197.24h0L106.87,194h-.11a.05.05,0,0,0,0,0l5.59,3.23a0,0,0,0,0,0,0,.13.13,0,0,0,.06-.11S112.48,197.25,112.46,197.24Z"
          />
          <path
            class="cls-62"
            d="M112.46,196.79h0l-5.59-3.24h-.11v0a.05.05,0,0,0,0,0l5.59,3.23h0a.13.13,0,0,0,.06-.11S112.48,196.8,112.46,196.79Z"
          />
          <polygon
            class="cls-37"
            points="113.5 192.47 112.14 193.26 85.26 177.74 86.62 176.96 113.5 192.47"
          />
          <polygon
            class="cls-101"
            points="88.35 178.04 86.65 177.06 86.65 172.01 88.35 172.99 88.35 178.04"
          />
          <polygon
            class="cls-96"
            points="86.52 177.32 86.35 177.22 86.35 171.98 86.52 172.08 86.52 177.32"
          />
          <polygon
            class="cls-95"
            points="86.69 177.22 86.52 177.32 86.52 172.08 86.69 171.98 86.69 177.22"
          />
          <polygon
            class="cls-96"
            points="86.69 171.98 86.52 172.08 86.35 171.98 86.52 171.88 86.69 171.98"
          />
          <polygon
            class="cls-102"
            points="86.65 177.25 86.56 177.3 86.56 172.06 86.65 172.01 86.65 177.25"
          />
          <polygon
            class="cls-96"
            points="86.52 177.13 86.52 177.32 88.22 178.31 88.22 178.11 86.52 177.13"
          />
          <polygon
            class="cls-96"
            points="86.69 177.03 86.52 177.13 88.22 178.11 88.39 178.01 86.69 177.03"
          />
          <polygon
            class="cls-95"
            points="88.39 178.01 88.22 178.11 88.22 178.31 88.39 178.21 88.39 178.01"
          />
          <polygon
            class="cls-102"
            points="86.65 177.05 86.56 177.1 88.09 177.99 88.18 177.94 86.65 177.05"
          />
          <polygon
            class="cls-103"
            points="88.05 177.97 86.56 177.1 86.56 172.06 88.26 173.04 88.05 177.97"
          />
          <polygon
            class="cls-96"
            points="88.22 178.31 88.05 178.21 88.05 172.97 88.22 173.06 88.22 178.31"
          />
          <polygon
            class="cls-95"
            points="88.39 178.21 88.22 178.31 88.22 173.06 88.39 172.97 88.39 178.21"
          />
          <polygon
            class="cls-96"
            points="88.39 172.97 88.22 173.06 88.05 172.97 88.22 172.87 88.39 172.97"
          />
          <polygon
            class="cls-101"
            points="89.71 178.83 88.52 178.14 88.52 173.09 89.71 173.78 89.71 178.83"
          />
          <polygon
            class="cls-96"
            points="88.39 178.4 88.22 178.31 88.22 173.06 88.39 173.16 88.39 178.4"
          />
          <polygon
            class="cls-95"
            points="88.56 178.31 88.39 178.4 88.39 173.16 88.56 173.06 88.56 178.31"
          />
          <polygon
            class="cls-96"
            points="88.56 173.06 88.39 173.16 88.22 173.06 88.39 172.97 88.56 173.06"
          />
          <polygon
            class="cls-102"
            points="88.52 178.33 88.43 178.38 88.43 173.14 88.52 173.09 88.52 178.33"
          />
          <polygon
            class="cls-96"
            points="88.39 178.21 88.39 178.4 89.58 179.09 89.58 178.9 88.39 178.21"
          />
          <polygon
            class="cls-96"
            points="88.56 178.11 88.39 178.21 89.58 178.9 89.75 178.8 88.56 178.11"
          />
          <polygon
            class="cls-95"
            points="89.75 178.8 89.58 178.9 89.58 179.09 89.75 178.99 89.75 178.8"
          />
          <polygon
            class="cls-102"
            points="88.52 178.13 88.43 178.18 89.45 178.78 89.54 178.73 88.52 178.13"
          />
          <polygon
            class="cls-103"
            points="89.41 178.75 88.43 178.18 88.43 173.14 89.62 173.82 89.41 178.75"
          />
          <polygon
            class="cls-96"
            points="89.58 179.09 89.41 178.99 89.41 173.75 89.58 173.85 89.58 179.09"
          />
          <polygon
            class="cls-95"
            points="89.75 178.99 89.58 179.09 89.58 173.85 89.75 173.75 89.75 178.99"
          />
          <polygon
            class="cls-96"
            points="89.75 173.75 89.58 173.85 89.41 173.75 89.58 173.65 89.75 173.75"
          />
          <polygon
            class="cls-101"
            points="91.58 179.9 89.88 178.92 89.88 173.87 91.58 174.85 91.58 179.9"
          />
          <polygon
            class="cls-96"
            points="89.75 179.19 89.58 179.09 89.58 173.85 89.75 173.95 89.75 179.19"
          />
          <polygon
            class="cls-95"
            points="89.92 179.09 89.75 179.19 89.75 173.95 89.92 173.85 89.92 179.09"
          />
          <polygon
            class="cls-96"
            points="89.92 173.85 89.75 173.95 89.58 173.85 89.75 173.75 89.92 173.85"
          />
          <polygon
            class="cls-102"
            points="89.88 179.12 89.79 179.17 89.79 173.92 89.88 173.87 89.88 179.12"
          />
          <polygon
            class="cls-96"
            points="89.75 178.99 89.75 179.19 91.45 180.17 91.45 179.97 89.75 178.99"
          />
          <polygon
            class="cls-96"
            points="89.92 178.9 89.75 178.99 91.45 179.97 91.62 179.88 89.92 178.9"
          />
          <polygon
            class="cls-95"
            points="91.62 179.88 91.45 179.97 91.45 180.17 91.62 180.07 91.62 179.88"
          />
          <polygon
            class="cls-102"
            points="89.88 178.91 89.79 178.96 91.32 179.86 91.41 179.81 89.88 178.91"
          />
          <polygon
            class="cls-103"
            points="91.28 179.83 89.79 178.96 89.79 173.92 91.5 174.9 91.28 179.83"
          />
          <polygon
            class="cls-96"
            points="91.45 180.17 91.28 180.07 91.28 174.83 91.45 174.93 91.45 180.17"
          />
          <polygon
            class="cls-95"
            points="91.62 180.07 91.45 180.17 91.45 174.93 91.62 174.83 91.62 180.07"
          />
          <polygon
            class="cls-96"
            points="91.62 174.83 91.45 174.93 91.28 174.83 91.45 174.73 91.62 174.83"
          />
          <polygon
            class="cls-104"
            points="89.48 177.16 89.44 177.13 89.42 177.14 89.46 177.17 89.48 177.16"
          />
          <polygon
            class="cls-105"
            points="89.44 176.73 89.39 176.7 89.39 177.18 89.44 177.21 89.44 176.73"
          />
          <polygon
            class="cls-104"
            points="89.46 176.72 89.44 176.73 89.39 176.7 89.42 176.69 89.46 176.72"
          />
          <polygon
            class="cls-106"
            points="89.44 176.73 89.44 177.21 89.46 177.19 89.48 177.18 89.48 177.16 89.46 177.17 89.46 176.72 89.44 176.73"
          />
          <polygon
            class="cls-101"
            points="93.28 182.46 92.09 181.77 92.09 176.72 93.28 177.41 93.28 182.46"
          />
          <polygon
            class="cls-96"
            points="91.96 182.04 91.79 181.94 91.79 176.7 91.96 176.79 91.96 182.04"
          />
          <polygon
            class="cls-95"
            points="92.13 181.94 91.96 182.04 91.96 176.79 92.13 176.7 92.13 181.94"
          />
          <polygon
            class="cls-96"
            points="92.13 176.7 91.96 176.79 91.79 176.7 91.96 176.6 92.13 176.7"
          />
          <polygon
            class="cls-102"
            points="92.09 181.96 92 182.01 92 176.77 92.09 176.72 92.09 181.96"
          />
          <polygon
            class="cls-96"
            points="91.96 181.84 91.96 182.04 93.15 182.73 93.15 182.53 91.96 181.84"
          />
          <polygon
            class="cls-96"
            points="92.13 181.74 91.96 181.84 93.15 182.53 93.32 182.43 92.13 181.74"
          />
          <polygon
            class="cls-95"
            points="93.32 182.43 93.15 182.53 93.15 182.73 93.32 182.63 93.32 182.43"
          />
          <polygon
            class="cls-102"
            points="92.09 181.76 92 181.81 93.03 182.41 93.11 182.36 92.09 181.76"
          />
          <polygon
            class="cls-103"
            points="92.98 182.39 92 181.81 92 176.77 93.2 177.46 92.98 182.39"
          />
          <polygon
            class="cls-96"
            points="93.15 182.73 92.98 182.63 92.98 177.38 93.15 177.48 93.15 182.73"
          />
          <polygon
            class="cls-95"
            points="93.32 182.63 93.15 182.73 93.15 177.48 93.32 177.38 93.32 182.63"
          />
          <polygon
            class="cls-96"
            points="93.32 177.38 93.15 177.48 92.98 177.38 93.15 177.29 93.32 177.38"
          />
          <polygon
            class="cls-101"
            points="94.64 183.25 93.45 182.56 93.45 177.51 94.64 178.19 94.64 183.25"
          />
          <polygon
            class="cls-96"
            points="93.32 182.82 93.15 182.73 93.15 177.48 93.32 177.58 93.32 182.82"
          />
          <polygon
            class="cls-95"
            points="93.49 182.73 93.32 182.82 93.32 177.58 93.49 177.48 93.49 182.73"
          />
          <polygon
            class="cls-96"
            points="93.49 177.48 93.32 177.58 93.15 177.48 93.32 177.38 93.49 177.48"
          />
          <polygon
            class="cls-102"
            points="93.45 182.75 93.37 182.8 93.37 177.56 93.45 177.51 93.45 182.75"
          />
          <polygon
            class="cls-96"
            points="93.32 182.63 93.32 182.82 94.52 183.51 94.52 183.31 93.32 182.63"
          />
          <polygon
            class="cls-96"
            points="93.49 182.53 93.32 182.63 94.52 183.31 94.69 183.22 93.49 182.53"
          />
          <polygon
            class="cls-95"
            points="94.69 183.22 94.52 183.31 94.52 183.51 94.69 183.41 94.69 183.22"
          />
          <polygon
            class="cls-102"
            points="93.45 182.55 93.37 182.6 94.39 183.2 94.47 183.15 93.45 182.55"
          />
          <polygon
            class="cls-103"
            points="94.34 183.17 93.37 182.6 93.37 177.56 94.56 178.24 94.34 183.17"
          />
          <polygon
            class="cls-96"
            points="94.52 183.51 94.35 183.41 94.34 178.17 94.52 178.27 94.52 183.51"
          />
          <polygon
            class="cls-95"
            points="94.69 183.41 94.52 183.51 94.52 178.27 94.69 178.17 94.69 183.41"
          />
          <polygon
            class="cls-96"
            points="94.69 178.17 94.52 178.27 94.35 178.17 94.52 178.07 94.69 178.17"
          />
          <polygon
            class="cls-101"
            points="98.04 185.21 96.51 184.32 96.51 179.27 98.05 180.16 98.04 185.21"
          />
          <polygon
            class="cls-96"
            points="96.39 184.59 96.22 184.49 96.22 179.25 96.39 179.35 96.39 184.59"
          />
          <polygon
            class="cls-95"
            points="96.56 184.49 96.39 184.59 96.39 179.35 96.56 179.25 96.56 184.49"
          />
          <polygon
            class="cls-96"
            points="96.56 179.25 96.39 179.35 96.22 179.25 96.39 179.15 96.56 179.25"
          />
          <polygon
            class="cls-102"
            points="96.51 184.52 96.43 184.57 96.43 179.32 96.51 179.27 96.51 184.52"
          />
          <polygon
            class="cls-96"
            points="96.39 184.39 96.39 184.59 97.92 185.47 97.92 185.28 96.39 184.39"
          />
          <polygon
            class="cls-96"
            points="96.56 184.3 96.39 184.4 97.92 185.28 98.09 185.18 96.56 184.3"
          />
          <polygon
            class="cls-95"
            points="98.09 185.18 97.92 185.28 97.92 185.47 98.09 185.38 98.09 185.18"
          />
          <polygon
            class="cls-102"
            points="96.51 184.31 96.43 184.36 97.79 185.16 97.88 185.11 96.51 184.31"
          />
          <polygon
            class="cls-103"
            points="97.75 185.14 96.43 184.36 96.43 179.32 97.96 180.21 97.75 185.14"
          />
          <polygon
            class="cls-96"
            points="97.92 185.47 97.75 185.38 97.75 180.13 97.92 180.23 97.92 185.47"
          />
          <polygon
            class="cls-95"
            points="98.09 185.38 97.92 185.47 97.92 180.23 98.09 180.13 98.09 185.38"
          />
          <polygon
            class="cls-96"
            points="98.09 180.13 97.92 180.23 97.75 180.13 97.92 180.04 98.09 180.13"
          />
          <polygon
            class="cls-101"
            points="99.41 186 98.22 185.31 98.22 180.26 99.41 180.94 99.41 186"
          />
          <polygon
            class="cls-96"
            points="98.09 185.57 97.92 185.47 97.92 180.23 98.09 180.33 98.09 185.57"
          />
          <polygon
            class="cls-95"
            points="98.26 185.47 98.09 185.57 98.09 180.33 98.26 180.23 98.26 185.47"
          />
          <polygon
            class="cls-96"
            points="98.26 180.23 98.09 180.33 97.92 180.23 98.09 180.13 98.26 180.23"
          />
          <polygon
            class="cls-102"
            points="98.22 185.5 98.13 185.55 98.13 180.31 98.22 180.26 98.22 185.5"
          />
          <polygon
            class="cls-96"
            points="98.09 185.38 98.09 185.57 99.28 186.26 99.28 186.06 98.09 185.38"
          />
          <polygon
            class="cls-96"
            points="98.26 185.28 98.09 185.38 99.28 186.06 99.45 185.97 98.26 185.28"
          />
          <polygon
            class="cls-95"
            points="99.45 185.97 99.28 186.06 99.28 186.26 99.45 186.16 99.45 185.97"
          />
          <polygon
            class="cls-102"
            points="98.22 185.3 98.13 185.35 99.15 185.95 99.24 185.9 98.22 185.3"
          />
          <polygon
            class="cls-103"
            points="99.11 185.92 98.13 185.35 98.13 180.31 99.32 180.99 99.11 185.92"
          />
          <polygon
            class="cls-96"
            points="99.28 186.26 99.11 186.16 99.11 180.92 99.28 181.02 99.28 186.26"
          />
          <polygon
            class="cls-95"
            points="99.45 186.16 99.28 186.26 99.28 181.02 99.45 180.92 99.45 186.16"
          />
          <polygon
            class="cls-96"
            points="99.45 180.92 99.28 181.02 99.11 180.92 99.28 180.82 99.45 180.92"
          />
          <polygon
            class="cls-101"
            points="101.11 186.98 99.58 186.09 99.58 181.04 101.11 181.93 101.11 186.98"
          />
          <polygon
            class="cls-96"
            points="99.45 186.36 99.28 186.26 99.28 181.02 99.45 181.12 99.45 186.36"
          />
          <polygon
            class="cls-95"
            points="99.62 186.26 99.45 186.36 99.45 181.12 99.62 181.02 99.62 186.26"
          />
          <polygon
            class="cls-96"
            points="99.62 181.02 99.45 181.12 99.28 181.02 99.45 180.92 99.62 181.02"
          />
          <polygon
            class="cls-102"
            points="99.58 186.28 99.49 186.34 99.49 181.09 99.58 181.04 99.58 186.28"
          />
          <polygon
            class="cls-96"
            points="99.45 186.16 99.45 186.36 100.98 187.24 100.98 187.05 99.45 186.16"
          />
          <polygon
            class="cls-96"
            points="99.62 186.06 99.45 186.16 100.98 187.05 101.15 186.95 99.62 186.06"
          />
          <polygon
            class="cls-95"
            points="101.15 186.95 100.98 187.05 100.98 187.24 101.15 187.15 101.15 186.95"
          />
          <polygon
            class="cls-102"
            points="99.58 186.08 99.49 186.13 100.85 186.93 100.94 186.88 99.58 186.08"
          />
          <polygon
            class="cls-103"
            points="100.81 186.91 99.49 186.13 99.49 181.09 101.02 181.97 100.81 186.91"
          />
          <polygon
            class="cls-96"
            points="100.98 187.24 100.81 187.15 100.81 181.9 100.98 182 100.98 187.24"
          />
          <polygon
            class="cls-95"
            points="101.15 187.15 100.98 187.24 100.98 182 101.15 181.9 101.15 187.15"
          />
          <polygon
            class="cls-96"
            points="101.15 181.9 100.98 182 100.81 181.9 100.98 181.8 101.15 181.9"
          />
          <polygon
            class="cls-95"
            points="106.69 190.12 112.48 186.78 112.48 181.53 106.69 184.87 106.69 190.12"
          />
          <polygon
            class="cls-96"
            points="106.69 191.2 100.94 187.65 100.94 181.73 106.69 185.28 106.69 191.2"
          />
          <polygon
            class="cls-101"
            points="109.78 190.41 108.08 189.43 108.08 184.38 109.78 185.36 109.78 190.41"
          />
          <polygon
            class="cls-96"
            points="107.95 189.7 107.78 189.6 107.78 184.35 107.95 184.45 107.95 189.7"
          />
          <polygon
            class="cls-95"
            points="108.13 189.6 107.95 189.7 107.95 184.45 108.13 184.35 108.13 189.6"
          />
          <polygon
            class="cls-96"
            points="108.13 184.35 107.95 184.45 107.78 184.35 107.95 184.26 108.13 184.35"
          />
          <polygon
            class="cls-102"
            points="108.08 189.62 108 189.67 108 184.43 108.08 184.38 108.08 189.62"
          />
          <polygon
            class="cls-96"
            points="107.95 189.5 107.95 189.7 109.66 190.68 109.66 190.48 107.95 189.5"
          />
          <polygon
            class="cls-96"
            points="108.13 189.4 107.95 189.5 109.66 190.48 109.83 190.38 108.13 189.4"
          />
          <polygon
            class="cls-95"
            points="109.83 190.38 109.66 190.48 109.66 190.68 109.83 190.58 109.83 190.38"
          />
          <polygon
            class="cls-102"
            points="108.08 189.42 108 189.47 109.53 190.37 109.61 190.31 108.08 189.42"
          />
          <polygon
            class="cls-103"
            points="109.49 190.34 108 189.47 108 184.43 109.7 185.41 109.49 190.34"
          />
          <polygon
            class="cls-96"
            points="109.66 190.68 109.49 190.58 109.49 185.34 109.66 185.44 109.66 190.68"
          />
          <polygon
            class="cls-95"
            points="109.83 190.58 109.66 190.68 109.66 185.44 109.83 185.34 109.83 190.58"
          />
          <polygon
            class="cls-96"
            points="109.83 185.34 109.66 185.44 109.49 185.34 109.66 185.24 109.83 185.34"
          />
          <polygon
            class="cls-101"
            points="111.14 191.2 109.95 190.51 109.95 185.46 111.14 186.15 111.14 191.2"
          />
          <polygon
            class="cls-96"
            points="109.83 190.78 109.66 190.68 109.66 185.44 109.83 185.53 109.83 190.78"
          />
          <polygon
            class="cls-95"
            points="110 190.68 109.83 190.78 109.83 185.53 110 185.44 110 190.68"
          />
          <polygon
            class="cls-96"
            points="110 185.44 109.83 185.53 109.66 185.44 109.83 185.34 110 185.44"
          />
          <polygon
            class="cls-102"
            points="109.95 190.7 109.87 190.75 109.87 185.51 109.95 185.46 109.95 190.7"
          />
          <polygon
            class="cls-96"
            points="109.83 190.58 109.83 190.78 111.02 191.46 111.02 191.27 109.83 190.58"
          />
          <polygon
            class="cls-96"
            points="110 190.48 109.83 190.58 111.02 191.27 111.19 191.17 110 190.48"
          />
          <polygon
            class="cls-95"
            points="111.19 191.17 111.02 191.27 111.02 191.46 111.19 191.37 111.19 191.17"
          />
          <polygon
            class="cls-102"
            points="109.95 190.5 109.87 190.55 110.89 191.15 110.97 191.1 109.95 190.5"
          />
          <polygon
            class="cls-103"
            points="110.85 191.13 109.87 190.55 109.87 185.51 111.06 186.2 110.85 191.13"
          />
          <polygon
            class="cls-96"
            points="111.02 191.46 110.85 191.37 110.85 186.12 111.02 186.22 111.02 191.46"
          />
          <polygon
            class="cls-95"
            points="111.19 191.37 111.02 191.46 111.02 186.22 111.19 186.12 111.19 191.37"
          />
          <polygon
            class="cls-96"
            points="111.19 186.12 111.02 186.22 110.85 186.12 111.02 186.03 111.19 186.12"
          />
          <polygon
            class="cls-101"
            points="113.02 192.28 111.31 191.3 111.32 186.25 113.02 187.23 113.02 192.28"
          />
          <polygon
            class="cls-96"
            points="111.19 191.56 111.02 191.46 111.02 186.22 111.19 186.32 111.19 191.56"
          />
          <polygon
            class="cls-95"
            points="111.36 191.46 111.19 191.56 111.19 186.32 111.36 186.22 111.36 191.46"
          />
          <polygon
            class="cls-96"
            points="111.36 186.22 111.19 186.32 111.02 186.22 111.19 186.12 111.36 186.22"
          />
          <polygon
            class="cls-102"
            points="111.32 191.49 111.23 191.54 111.23 186.29 111.32 186.25 111.32 191.49"
          />
          <polygon
            class="cls-96"
            points="111.19 191.37 111.19 191.56 112.89 192.54 112.89 192.35 111.19 191.37"
          />
          <polygon
            class="cls-96"
            points="111.36 191.27 111.19 191.37 112.89 192.35 113.06 192.25 111.36 191.27"
          />
          <polygon
            class="cls-95"
            points="113.06 192.25 112.89 192.35 112.89 192.54 113.06 192.44 113.06 192.25"
          />
          <polygon
            class="cls-102"
            points="111.32 191.29 111.23 191.34 112.76 192.23 112.85 192.18 111.32 191.29"
          />
          <polygon
            class="cls-103"
            points="112.72 192.21 111.23 191.34 111.23 186.29 112.93 187.28 112.72 192.21"
          />
          <polygon
            class="cls-96"
            points="112.89 192.54 112.72 192.44 112.72 187.2 112.89 187.3 112.89 192.54"
          />
          <polygon
            class="cls-95"
            points="113.06 192.44 112.89 192.54 112.89 187.3 113.06 187.2 113.06 192.44"
          />
          <polygon
            class="cls-96"
            points="113.06 187.2 112.89 187.3 112.72 187.2 112.89 187.1 113.06 187.2"
          />
          <polygon
            class="cls-104"
            points="110.92 189.53 110.87 189.5 110.85 189.51 110.9 189.54 110.92 189.53"
          />
          <polygon
            class="cls-105"
            points="110.87 189.1 110.83 189.08 110.83 189.56 110.87 189.58 110.87 189.1"
          />
          <polygon
            class="cls-104"
            points="110.9 189.09 110.87 189.1 110.83 189.08 110.85 189.06 110.9 189.09"
          />
          <polygon
            class="cls-106"
            points="110.87 189.1 110.87 189.58 110.9 189.57 110.92 189.56 110.92 189.53 110.9 189.54 110.9 189.09 110.87 189.1"
          />
          <polygon
            class="cls-96"
            points="112.14 187.76 84.92 172.04 84.92 172.83 112.14 188.54 112.14 187.76"
          />
          <polygon
            class="cls-3"
            points="87.98 174.99 90.36 176.37 90.36 175.97 86.61 173.81 86.61 176.95 85.25 177.74 87.98 177.74 87.98 174.99"
          />
          <polygon
            class="cls-3"
            points="109.42 187.37 111.8 188.74 111.8 188.35 108.05 186.19 108.05 189.33 106.69 190.12 109.42 190.12 109.42 187.37"
          />
          <path
            class="cls-62"
            d="M91,179.82h0l-5.6-3.23h-.11a.05.05,0,0,0,0,0L90.94,180h0a.13.13,0,0,0,.06-.11S91.05,179.83,91,179.82Z"
          />
          <path
            class="cls-62"
            d="M91,179.37h0l-5.6-3.23h-.11a.05.05,0,0,0,0,0l5.59,3.23h0a.13.13,0,0,0,.06-.11S91.05,179.38,91,179.37Z"
          />
          <path
            class="cls-62"
            d="M91,178.92h0l-5.6-3.24h-.11s0,0,0,0l5.59,3.24a0,0,0,0,0,0,0,.13.13,0,0,0,.06-.11S91.05,178.92,91,178.92Z"
          />
          <path
            class="cls-62"
            d="M112.46,192.2h0L106.87,189h-.11s0,0,0,0l5.59,3.24s0,0,0,0a.11.11,0,0,0,.06-.1S112.48,192.2,112.46,192.2Z"
          />
          <path
            class="cls-62"
            d="M112.46,191.74h0l-5.59-3.23h-.11a.05.05,0,0,0,0,0l5.59,3.23a0,0,0,0,0,0,0,.13.13,0,0,0,.06-.11S112.48,191.75,112.46,191.74Z"
          />
          <path
            class="cls-62"
            d="M112.46,191.29h0l-5.59-3.24h-.11v0a.05.05,0,0,0,0,0l5.59,3.23h0a.13.13,0,0,0,.06-.11S112.48,191.3,112.46,191.29Z"
          />
          <polygon
            class="cls-107"
            points="136.64 170.83 127.11 176.33 125.75 175.55 120.3 178.69 121.67 179.47 112.14 184.97 84.92 169.26 94.44 163.76 95.81 164.55 101.25 161.4 99.89 160.62 109.42 155.12 136.64 170.83"
          />
          <path
            class="cls-37"
            d="M128.23,172.37l-2.72-1.58L123,169.32h0l-1.36-.8h0L118.87,167l-2.72-1.57-2.55-1.47h0l-1.36-.79h0l-2.72-1.57L106.79,160l-2.55-1.48-.17.1v0l0,0-.17.1v0h0l-.17.1v0h0l0,0-.17.1v0l0,0-.17.1h0v0l0,0-.17.1h0v0h0l-.17.09v0l0,0-.17.1v0h0l-.17.1v0h0l0,0-.17.1v0l0,0-.18.1v0l0,0-.17.1h0v0l0,0-.17.1v0l0,0-.17.1v0h0l-.17.1h0v0l0,0-.17.1v0l0,0-.17.1v0l0,0-.17.09v.1l1.19.69,2.72,1.57,2.72,1.57h0L110,166.1h0l1.19.68,2.72,1.57,2.72,1.58h0l2.72,1.58h0l1.19.69,2.72,1.57,2.73,1.57h0l1.52.88.17-.1V176h0l-.08-.05.12-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.2.12.17-.1v-.1l-.08-.05.12-.07v0l.19.11.17-.1v-.08h0l-.08,0,.12-.07v0l.19.11.17-.1v-.1l-.07,0,.12-.07v0l.19.12.17-.1v-.1l-.08,0,.12-.06v0l.19.11.17-.1v-.08h0l-.08-.05.12-.07v0l.2.11.17-.1v-.1l-.08,0,.12-.07v0l.19.12.17-.1v-.1l-.08-.05L131,174v-.1Zm-.28,3.3.12-.07h0l-.12.07Zm.41-.24.11-.06h0l-.11.07Z"
          />
          <polygon
            class="cls-108"
            points="100.23 160.81 109.75 155.31 109.75 153.35 100.23 158.85 100.23 160.81"
          />
          <polygon
            class="cls-96"
            points="99.89 160.62 100.23 160.81 100.23 158.85 99.89 158.65 99.89 160.62"
          />
          <polygon
            class="cls-96"
            points="99.89 158.65 100.23 158.85 109.75 153.35 109.42 153.15 99.89 158.65"
          />
          <polygon
            class="cls-96"
            points="101.59 161.6 100.23 160.81 100.23 158.85 101.59 159.64 101.59 161.6"
          />
          <polygon
            class="cls-96"
            points="101.93 161.4 101.59 161.6 101.59 159.64 101.93 159.44 101.93 161.4"
          />
          <polygon
            class="cls-96"
            points="101.93 159.44 101.59 159.64 100.23 158.85 100.57 158.65 101.93 159.44"
          />
          <polygon
            class="cls-37"
            points="131.07 167.47 130.9 167.57 130.9 167.59 130.9 167.61 129.5 166.81 129.34 166.9 129.34 166.92 129.34 167 132.06 168.57 132.23 168.47 132.23 168.44 133.62 169.24 133.79 169.14 133.79 169.06 133.79 169.04 131.07 167.47"
          />
          <path
            class="cls-37"
            d="M121.87,172.89l-2.55-1.47h0l-1.37-.79h0l-2.72-1.57-2.72-1.57L110,166h0l-1.36-.79h0l-2.72-1.57-2.72-1.57-2.55-1.48-.17.1v0l0,0-.17.1v.1l.93.53-.11.07v0l0,0-.17.09v0l0,0-.17.1v0l0,0-.17.1v0h0l-.17.1h0v0l0,0-.17.1v0l0,0-.17.1v0l0,0-.17.09v0l0,0-.17.1v0l0,0-.17.1h0v0h0l-.17.09v0l0,0-.17.1v0l0,0-.17.1v0l0,0-.17.09v0l0,0-.17.1h0v0l0,0-.17.1v0h0l-.17.09v0l0,0-.17.1v0l0,0-.17.1v0l0,0-.17.09v0l0,0-.17.1v0l0,0-.17.1v0h0l-.17.09v0l0,0-.17.1v0h0l-.17.1v0l0,0-.17.1v0l0,0h0l-1-.58-.17.1v0l0,0-.17.1v0l0,0-.17.1v0l0,0-.17.1h0v0h0l-.17.09v0l0,0-.17.1v0h0l-.17.1h0v0l0,0-.17.1v0l0,0-.17.1v0l0,0L93,165h0v0l0,0-.17.1v0l0,0-.17.1v0h0l-.17.1h0v0l0,0-.17.1v0l0,0-.17.1v0l0,0-.17.1h0v0l0,0-.17.1v0l0,0-.17.1v0h0l-.17.1h0v0l0,0-.17.1v0l0,0-.17.1v0l0,0-.18.09v0l0,0-.17.1v0l0,0-.17.1v0h0l-.17.1h0v0l0,0-.17.1h0v0l0,0-.17.1v0l0,0-.17.09v0l0,0-.17.1v0l0,0-.17.1v0h0l-.17.09v0l0,0-.17.1v0l0,0-.17.1v0l0,0-.17.09v0l0,0-.17.1v0l0,0-.17.1v0h0l-.17.09v0l0,0-.17.1v0l0,0-.17.1v0l0,0-.17.09v0l0,0-.17.1v0l0,0-.17.1v0h0l-.17.09v0l0,0-.17.1v0h0l-.17.1v0l0,0-.17.1v0l0,0-.17.1v0l0,0-.17.1h0v.08l1.2.69,2.72,1.57,2.72,1.57h0L94.63,175l1.2.68,2.72,1.58,2.72,1.57h0l2.71,1.58h0l1.2.69,2.72,1.57,2.72,1.57h0l1.51.88.17-.1v-.09l-.07,0,.12-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.19.12.17-.1v-.1l-.08,0,.12-.07v0l.19.11.18-.09v-.1l-.08-.05.12-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.19.12.17-.1v-.1l-.07,0,.12-.07v0l.19.11.17-.09v-.1l-.17.1h0l.17-.1-.08,0,.12-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.2.11.17-.1V183l-.08,0,.12-.07v0l.19.11.17-.09v-.1l-.08-.05.12-.07v0l.19.11.17-.1v-.1l-.07,0,.12-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.19.11.17-.09v-.1l-.08-.05.12-.07v0l.2.11.17-.1v-.1l-.08,0,.12-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.19.12.17-.1v-.1l-.07,0,.12-.07v0l.19.11.17-.1v-.08h0l-.08-.05.12-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.2.12.17-.1v-.1l-.08-.05.12-.07v0l.19.11.17-.1v-.08h0l-.08,0,.12-.07v0l.19.11.17-.1v-.1l-.07,0,.12-.07v0l.19.12.17-.1V180l-.17.1h0l.17-.1-.08,0,.12-.06v0l.19.11.17-.1v-.08h0l-.08-.05.12-.07v0l.2.11.17-.1v-.1l-.08,0,.12-.07v-.1l-.9-.52.11-.06v-.1l-.07-.05.11-.07v0l.2.11.17-.1v-.1l-.08,0,.12-.07v0l.19.12.17-.1v-.1l-.08-.05.12-.06v0l.19.11.17-.09v-.1l-.07,0,.12-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.19.12.17-.1v-.1l-.07,0,.11-.07v0l.2.11.17-.09v-.1l-.08-.05.12-.07v0l.19.11.17-.1V177l-.08,0,.12-.07v0l.19.12.17-.1v-.1l-.07,0,.12-.07v0l.19.11.17-.09v-.1l-.08-.05.12-.07v0l.19.11.17-.1v-.1l-.07,0,.12-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.19.11.17-.09v-.1l-.08,0,.12-.07v-.08h0l0,0,.12-.07v0l1.28.74.18-.1v-.08h0l-2.73-1.58ZM96,174.09h0l-.12.07Zm12.28,3.73ZM104.4,180h0l.11-.07h0Zm6.06-3.5h0l.11-.06h0Zm2.94-1.7h0l-.11.07h0Zm-13.31-3.12h0Zm20.78,5,1.49.86h0l-1.49-.86Zm.28,1.56.12-.07h0l-.12.07Zm2.83-1.63.12-.07h0l-.12.07Z"
          />
          <polygon
            class="cls-95"
            points="125.75 222.33 120.3 225.47 120.3 178.69 125.75 175.55 125.75 222.33"
          />
          <polygon
            class="cls-3"
            points="128.38 170.9 121.23 166.79 121.23 171.11 108.3 178.57 115.1 178.57 128.38 170.9"
          />
          <polygon
            class="cls-3"
            points="99.22 164.95 99.56 164.75 97.84 163.77 97.84 163.77 97.16 163.77 96.14 164.35 94.44 164.15 85.25 169.46 88.66 169.46 88.66 169.46 96.48 164.95 99.22 164.95"
          />
          <path
            class="cls-62"
            d="M95.41,164.18h0l6-3.44h.1s0,0,0,0l-6,3.44h0a.13.13,0,0,1-.06-.11S95.4,164.19,95.41,164.18Z"
          />
          <path
            class="cls-62"
            d="M95.41,163.73h0l6-3.44h.1s0,0,0,0l-6,3.44h0a.11.11,0,0,1-.06-.1S95.4,163.73,95.41,163.73Z"
          />
          <path
            class="cls-62"
            d="M95.41,163.27h0l6-3.43h.1s0,0,0,0l-6,3.43s0,0,0,0a.13.13,0,0,1-.06-.11S95.4,163.28,95.41,163.27Z"
          />
          <polygon
            class="cls-108"
            points="85.26 169.46 94.78 163.96 94.78 161.99 85.26 167.49 85.26 169.46"
          />
          <polygon
            class="cls-96"
            points="84.92 169.26 85.26 169.46 85.26 167.49 84.92 167.3 84.92 169.26"
          />
          <polygon
            class="cls-96"
            points="84.92 167.3 85.26 167.49 94.78 161.99 94.44 161.8 84.92 167.3"
          />
          <polygon
            class="cls-96"
            points="95.81 164.94 94.44 164.15 94.44 162.19 95.81 162.97 95.81 164.94"
          />
          <polygon
            class="cls-108"
            points="96.14 164.74 95.81 164.94 95.81 162.97 96.14 162.78 96.14 164.74"
          />
          <polygon
            class="cls-96"
            points="96.14 162.78 95.81 162.97 94.44 162.19 94.78 161.99 96.14 162.78"
          />
          <polygon
            class="cls-3"
            points="96.88 169.46 96.88 169.46 96.88 169.46 96.89 169.46 96.99 169.46 113.32 178.89 109.58 181.05 109.48 181.05 109.48 181.05 109.48 181.05 108.12 181.05 91.78 171.62 95.52 169.46 96.88 169.46"
          />
          <polygon
            class="cls-108"
            points="108.05 181.05 111.8 178.89 111.8 178.1 108.05 180.26 108.05 181.05"
          />
          <polygon
            class="cls-96"
            points="91.72 171.62 108.05 181.05 108.05 180.26 91.72 170.83 91.72 171.62"
          />
          <polygon
            class="cls-109"
            points="91.72 170.83 108.05 180.26 111.8 178.1 95.47 168.67 91.72 170.83"
          />
          <polygon
            class="cls-62"
            points="91.72 170.83 108.05 180.26 108.05 180.2 91.72 170.77 91.72 170.83"
          />
          <polygon
            class="cls-62"
            points="108.05 180.2 108.05 180.26 111.8 178.1 111.8 178.04 108.05 180.2"
          />
          <polygon
            class="cls-37"
            points="95.46 168.61 111.8 178.04 108.05 180.2 91.72 170.77 95.46 168.61"
          />
          <polygon
            class="cls-96"
            points="109.75 178.82 95.46 170.57 93.76 171.55 108.05 179.8 109.75 178.82"
          />
          <polygon
            class="cls-110"
            points="92.4 170.77 93.76 171.55 95.46 170.57 95.46 170.57 95.46 169 92.4 170.77"
          />
          <polygon
            class="cls-111"
            points="111.11 178.04 95.46 169 95.46 170.57 109.75 178.82 111.11 178.04"
          />
          <polygon
            class="cls-3"
            points="93.76 171.55 95.12 172.34 96.82 171.36 96.82 171.36 95.46 169 95.46 170.57 93.76 171.55"
          />
          <polygon
            class="cls-103"
            points="95.46 169.14 111 178.11 108.05 179.8 92.53 170.84 95.46 169.14"
          />
          <polygon
            class="cls-108"
            points="93.68 169.64 93.7 169.63 93.7 169.53 93.68 169.55 93.68 169.64"
          />
          <path
            class="cls-112"
            d="M93.69,169.52l0,0v0l0,0S93.68,169.52,93.69,169.52Z"
          />
          <path class="cls-113" d="M93.72,169.49h0l0,0h0Z" />
          <polygon
            class="cls-108"
            points="94.11 170.43 94.13 170.41 94.13 169.78 94.11 169.8 94.11 170.43"
          />
          <polygon
            class="cls-114"
            points="94.03 169.67 94.06 169.66 93.75 169.48 93.72 169.49 94.03 169.67"
          />
          <polygon
            class="cls-115"
            points="94.11 169.79 94.11 169.79 94.11 169.79 94.11 169.78 94.11 169.78 94.11 169.78 94.11 169.78 94.11 169.78 94.11 169.77 94.1 169.77 94.1 169.77 94.1 169.77 94.1 169.76 94.1 169.76 94.1 169.76 94.1 169.76 94.1 169.75 94.1 169.75 94.1 169.75 94.09 169.74 94.09 169.74 94.09 169.74 94.09 169.73 94.09 169.73 94.09 169.73 94.08 169.72 94.08 169.72 94.08 169.72 94.08 169.71 94.08 169.71 94.07 169.71 94.07 169.71 94.07 169.71 94.07 169.7 94.07 169.7 94.07 169.7 94.06 169.69 94.06 169.69 94.06 169.69 94.06 169.69 94.06 169.69 94.05 169.69 94.05 169.69 94.05 169.68 94.05 169.68 94.05 169.68 94.05 169.68 94.04 169.68 94.04 169.68 94.04 169.68 94.04 169.67 94.03 169.67 94.06 169.66 94.06 169.66 94.06 169.66 94.07 169.66 94.07 169.66 94.07 169.66 94.07 169.67 94.07 169.67 94.07 169.67 94.08 169.67 94.08 169.67 94.08 169.67 94.08 169.67 94.08 169.68 94.08 169.68 94.09 169.68 94.09 169.68 94.09 169.69 94.09 169.69 94.09 169.69 94.09 169.69 94.09 169.69 94.1 169.69 94.1 169.69 94.1 169.69 94.1 169.7 94.1 169.7 94.1 169.7 94.11 169.71 94.11 169.71 94.11 169.71 94.11 169.71 94.11 169.71 94.11 169.71 94.11 169.72 94.11 169.72 94.11 169.72 94.12 169.72 94.12 169.72 94.12 169.72 94.12 169.72 94.12 169.72 94.12 169.72 94.12 169.73 94.12 169.73 94.12 169.73 94.12 169.74 94.12 169.74 94.12 169.74 94.12 169.74 94.12 169.74 94.13 169.75 94.13 169.75 94.13 169.75 94.13 169.75 94.13 169.75 94.13 169.75 94.13 169.76 94.13 169.76 94.13 169.76 94.13 169.76 94.13 169.76 94.13 169.77 94.13 169.77 94.13 169.77 94.13 169.77 94.13 169.77 94.13 169.78 94.13 169.78 94.13 169.78 94.13 169.78 94.11 169.8 94.11 169.79 94.11 169.79"
          />
          <path
            class="cls-80"
            d="M93.72,169.49s-.07,0-.07,0v.1h0v-.09s0,0,0,0l.32.18a.1.1,0,0,1,0,.08v.63h0v-.62a.16.16,0,0,0-.07-.13Z"
          />
          <g class="cls-2">
            <polygon
              class="cls-108"
              points="93.82 170.49 94.11 170.32 94.11 170.29 93.82 170.46 93.82 170.49"
            />
            <polygon
              class="cls-114"
              points="93.82 170.46 94.11 170.29 94.08 170.28 93.79 170.45 93.82 170.46"
            />
          </g>
          <g class="cls-2">
            <polygon
              class="cls-108"
              points="93.82 170.37 94.11 170.2 94.11 170.17 93.82 170.34 93.82 170.37"
            />
            <polygon
              class="cls-114"
              points="93.82 170.34 94.11 170.17 94.08 170.16 93.79 170.33 93.82 170.34"
            />
          </g>
          <g class="cls-2">
            <polygon
              class="cls-108"
              points="93.82 170.25 94.11 170.09 94.11 170.06 93.82 170.23 93.82 170.25"
            />
            <polygon
              class="cls-114"
              points="93.82 170.23 94.11 170.06 94.08 170.04 93.79 170.21 93.82 170.23"
            />
          </g>
          <polygon
            class="cls-108"
            points="93.37 169.82 93.39 169.81 93.39 169.71 93.37 169.72 93.37 169.82"
          />
          <path
            class="cls-116"
            d="M93.38,169.69h0s0,0,0,0h0A0,0,0,0,1,93.38,169.69Z"
          />
          <path class="cls-117" d="M93.41,169.67Z" />
          <polygon
            class="cls-108"
            points="93.8 170.6 93.82 170.59 93.82 169.96 93.8 169.97 93.8 170.6"
          />
          <polygon
            class="cls-114"
            points="93.73 169.85 93.75 169.84 93.44 169.66 93.42 169.67 93.73 169.85"
          />
          <polygon
            class="cls-118"
            points="93.8 169.97 93.8 169.97 93.8 169.96 93.8 169.96 93.8 169.96 93.8 169.96 93.8 169.96 93.8 169.95 93.8 169.95 93.8 169.95 93.8 169.95 93.8 169.94 93.8 169.94 93.8 169.94 93.8 169.94 93.79 169.93 93.79 169.93 93.79 169.93 93.79 169.92 93.79 169.92 93.79 169.91 93.79 169.91 93.78 169.91 93.78 169.91 93.78 169.9 93.78 169.9 93.78 169.9 93.78 169.9 93.77 169.89 93.77 169.89 93.77 169.88 93.77 169.88 93.77 169.88 93.76 169.88 93.76 169.88 93.76 169.88 93.76 169.87 93.76 169.87 93.75 169.87 93.75 169.87 93.75 169.87 93.75 169.86 93.75 169.86 93.74 169.86 93.74 169.86 93.74 169.86 93.74 169.86 93.74 169.85 93.73 169.85 93.73 169.85 93.73 169.85 93.73 169.85 93.75 169.84 93.76 169.84 93.76 169.84 93.76 169.84 93.76 169.84 93.76 169.84 93.76 169.84 93.77 169.84 93.77 169.85 93.77 169.85 93.77 169.85 93.77 169.85 93.78 169.85 93.78 169.85 93.78 169.85 93.78 169.86 93.78 169.86 93.78 169.86 93.78 169.86 93.79 169.86 93.79 169.87 93.79 169.87 93.79 169.87 93.79 169.87 93.79 169.87 93.8 169.88 93.8 169.88 93.8 169.88 93.8 169.88 93.8 169.88 93.8 169.88 93.8 169.89 93.8 169.89 93.8 169.89 93.81 169.89 93.81 169.89 93.81 169.9 93.81 169.9 93.81 169.9 93.81 169.9 93.81 169.9 93.81 169.9 93.81 169.9 93.81 169.91 93.81 169.91 93.81 169.91 93.81 169.91 93.81 169.91 93.81 169.91 93.82 169.92 93.82 169.92 93.82 169.92 93.82 169.93 93.82 169.93 93.82 169.93 93.82 169.93 93.82 169.93 93.82 169.93 93.82 169.94 93.82 169.94 93.82 169.94 93.82 169.94 93.82 169.94 93.82 169.95 93.82 169.95 93.82 169.95 93.82 169.95 93.82 169.95 93.82 169.95 93.82 169.96 93.82 169.96 93.8 169.97 93.8 169.97 93.8 169.97"
          />
          <path
            class="cls-80"
            d="M93.42,169.67s-.07,0-.07,0v.1h0v-.1s0,0,0,0l.31.18a.09.09,0,0,1,0,.08v.63h0V170a.15.15,0,0,0-.07-.12Z"
          />
          <path
            class="cls-119"
            d="M94.11,170.12h0v0l-.26.15v0h0v.3h0v-.11l.26-.15v.08h0v-.3Zm0,.16-.26.15v-.06l.26-.15Z"
          />
          <polygon
            class="cls-108"
            points="109.73 178.84 109.75 178.82 109.75 178.73 109.73 178.74 109.73 178.84"
          />
          <path
            class="cls-120"
            d="M109.74,178.71h0s0,0,0,0h0A0,0,0,0,1,109.74,178.71Z"
          />
          <path class="cls-121" d="M109.77,178.68h0l0,0Z" />
          <polygon
            class="cls-108"
            points="110.16 179.62 110.18 179.6 110.18 178.98 110.16 178.99 110.16 179.62"
          />
          <polygon
            class="cls-114"
            points="110.09 178.87 110.11 178.85 109.8 178.67 109.78 178.69 110.09 178.87"
          />
          <polygon
            class="cls-122"
            points="110.16 178.99 110.16 178.98 110.16 178.98 110.16 178.98 110.16 178.98 110.16 178.97 110.16 178.97 110.16 178.97 110.16 178.97 110.16 178.97 110.16 178.96 110.16 178.96 110.16 178.96 110.15 178.96 110.15 178.96 110.15 178.95 110.15 178.94 110.15 178.94 110.15 178.94 110.15 178.94 110.14 178.93 110.14 178.93 110.14 178.93 110.14 178.92 110.14 178.92 110.14 178.92 110.14 178.91 110.13 178.91 110.13 178.91 110.13 178.91 110.13 178.9 110.13 178.9 110.12 178.9 110.12 178.9 110.12 178.9 110.12 178.89 110.11 178.89 110.11 178.89 110.11 178.88 110.11 178.88 110.11 178.88 110.11 178.88 110.11 178.88 110.1 178.88 110.1 178.88 110.1 178.87 110.1 178.87 110.1 178.87 110.09 178.87 110.09 178.87 110.09 178.87 110.09 178.87 110.11 178.85 110.11 178.85 110.12 178.85 110.12 178.86 110.12 178.86 110.12 178.86 110.12 178.86 110.13 178.86 110.13 178.86 110.13 178.86 110.13 178.87 110.13 178.87 110.13 178.87 110.14 178.87 110.14 178.87 110.14 178.87 110.14 178.88 110.14 178.88 110.14 178.88 110.14 178.88 110.15 178.88 110.15 178.88 110.15 178.89 110.15 178.89 110.15 178.89 110.15 178.89 110.15 178.89 110.15 178.89 110.16 178.9 110.16 178.9 110.16 178.9 110.16 178.91 110.16 178.91 110.16 178.91 110.17 178.91 110.17 178.91 110.17 178.91 110.17 178.92 110.17 178.92 110.17 178.92 110.17 178.92 110.17 178.92 110.17 178.92 110.17 178.92 110.17 178.92 110.17 178.92 110.17 178.93 110.17 178.93 110.17 178.93 110.18 178.94 110.18 178.94 110.18 178.94 110.18 178.94 110.18 178.94 110.18 178.94 110.18 178.95 110.18 178.95 110.18 178.95 110.18 178.95 110.18 178.95 110.18 178.96 110.18 178.96 110.18 178.96 110.18 178.96 110.18 178.96 110.18 178.97 110.18 178.97 110.18 178.97 110.18 178.97 110.18 178.97 110.18 178.98 110.16 178.99 110.16 178.99 110.16 178.99"
          />
          <path
            class="cls-80"
            d="M109.78,178.69a0,0,0,0,0-.08,0v.09l0,0v-.1s0,0,0,0l.31.18a.16.16,0,0,1,0,.09v.62l0,0V179a.15.15,0,0,0-.07-.12Z"
          />
          <g class="cls-2">
            <polygon
              class="cls-108"
              points="109.87 179.68 110.16 179.51 110.16 179.49 109.87 179.66 109.87 179.68"
            />
            <polygon
              class="cls-114"
              points="109.87 179.66 110.16 179.49 110.14 179.47 109.84 179.64 109.87 179.66"
            />
          </g>
          <g class="cls-2">
            <polygon
              class="cls-108"
              points="109.87 179.56 110.16 179.4 110.16 179.37 109.87 179.54 109.87 179.56"
            />
            <polygon
              class="cls-114"
              points="109.87 179.54 110.16 179.37 110.14 179.35 109.84 179.52 109.87 179.54"
            />
          </g>
          <g class="cls-2">
            <polygon
              class="cls-108"
              points="109.87 179.45 110.16 179.28 110.16 179.25 109.87 179.42 109.87 179.45"
            />
            <polygon
              class="cls-114"
              points="109.87 179.42 110.16 179.25 110.14 179.24 109.84 179.41 109.87 179.42"
            />
          </g>
          <polygon
            class="cls-108"
            points="109.42 179.01 109.45 179 109.45 178.91 109.42 178.92 109.42 179.01"
          />
          <path
            class="cls-123"
            d="M109.44,178.89l0,0s0,0,0,0h0S109.43,178.89,109.44,178.89Z"
          />
          <path class="cls-124" d="M109.47,178.86h0Z" />
          <polygon
            class="cls-108"
            points="109.85 179.8 109.88 179.78 109.88 179.15 109.85 179.17 109.85 179.8"
          />
          <polygon
            class="cls-114"
            points="109.78 179.04 109.81 179.03 109.5 178.85 109.47 178.86 109.78 179.04"
          />
          <polygon
            class="cls-125"
            points="109.85 179.16 109.85 179.16 109.85 179.16 109.85 179.16 109.85 179.15 109.85 179.15 109.85 179.15 109.85 179.15 109.85 179.14 109.85 179.14 109.85 179.14 109.85 179.14 109.85 179.14 109.85 179.13 109.85 179.13 109.85 179.13 109.84 179.12 109.84 179.12 109.84 179.12 109.84 179.12 109.84 179.11 109.84 179.11 109.83 179.1 109.83 179.1 109.83 179.1 109.83 179.09 109.83 179.09 109.83 179.09 109.82 179.08 109.82 179.08 109.82 179.08 109.82 179.08 109.82 179.07 109.82 179.07 109.81 179.07 109.81 179.07 109.81 179.06 109.81 179.06 109.81 179.06 109.8 179.06 109.8 179.06 109.8 179.06 109.8 179.06 109.8 179.05 109.8 179.05 109.79 179.05 109.79 179.05 109.79 179.05 109.79 179.05 109.79 179.04 109.78 179.04 109.78 179.04 109.81 179.03 109.81 179.03 109.81 179.03 109.81 179.03 109.81 179.03 109.81 179.04 109.82 179.04 109.82 179.04 109.82 179.04 109.82 179.04 109.82 179.04 109.83 179.04 109.83 179.04 109.83 179.05 109.83 179.05 109.83 179.05 109.83 179.05 109.84 179.06 109.84 179.06 109.84 179.06 109.84 179.06 109.84 179.06 109.84 179.06 109.84 179.06 109.84 179.06 109.85 179.07 109.85 179.07 109.85 179.07 109.85 179.07 109.85 179.08 109.85 179.08 109.86 179.08 109.86 179.08 109.86 179.08 109.86 179.09 109.86 179.09 109.86 179.09 109.86 179.09 109.86 179.09 109.86 179.09 109.86 179.09 109.86 179.09 109.86 179.09 109.86 179.1 109.86 179.1 109.86 179.1 109.87 179.11 109.87 179.11 109.87 179.11 109.87 179.11 109.87 179.11 109.87 179.12 109.87 179.12 109.87 179.12 109.87 179.12 109.87 179.12 109.87 179.13 109.87 179.13 109.87 179.13 109.87 179.13 109.88 179.13 109.88 179.13 109.88 179.14 109.88 179.14 109.88 179.14 109.88 179.14 109.88 179.14 109.88 179.15 109.88 179.15 109.88 179.15 109.88 179.15 109.85 179.17 109.85 179.16 109.85 179.16"
          />
          <path
            class="cls-80"
            d="M109.47,178.86s-.07,0-.07,0V179h0v-.09s0,0,0,0l.31.18a.1.1,0,0,1,0,.08v.63l0,0v-.63a.17.17,0,0,0-.07-.13Z"
          />
          <path
            class="cls-3"
            d="M113.75,179.92h-.07v0h0l-.17.38-1,.23h0s0,0,0,0h.1l.56.32h0v0h.11l.54-.12.25.14h0l0,0h.11l.11-.26.94-.2h.11l.74-.16h0l-.1-.06h0l-.1-.06h0l-.1-.05-.12-.07h0l-.13-.07h-.12l-.4.09-.27,0-.09,0-.73-.17,0,0h0l0,0Zm.49.8v0h.63l.15,0Zm-.29.16h.1L114,181h0Zm-.48-.44v0l-.06,0a.08.08,0,0,0,0,.12l0,.06h0l0,0h0l.21.12h0l-.43.1-.21-.12-.35-.2Zm2.36-.07-.67.14h0l-.13,0h.82Zm-1.66-.16-.28-.16.51.11Zm-.4-.14v0l.32.18-.31.09-.14,0,.09-.2,0,0h0v0h0Z"
          />
          <path
            class="cls-126"
            d="M113.58,179.87s0,0,0,0h0l-.32-.48s0,0,0,0h0Z"
          />
          <polygon
            class="cls-127"
            points="113.54 179.93 113.51 179.91 113.19 179.43 113.22 179.45 113.54 179.93"
          />
          <path class="cls-128" d="M113.23,179.37h0l0,0h0l0,0Z" />
          <polygon
            class="cls-129"
            points="113.26 179.51 113.23 179.47 113.27 179.41 113.3 179.45 113.26 179.51"
          />
          <path
            class="cls-126"
            d="M113.58,179v0a0,0,0,0,1,0,0l-1.07,1.63h0s0,0,0,0,0,0,0,0l1.07-1.63,0,0Z"
          />
          <polygon
            class="cls-130"
            points="112.48 180.6 112.45 180.58 113.52 178.95 113.55 178.97 112.48 180.6"
          />
          <path class="cls-131" d="M112.47,180.64h0l0,0h0Z" />
          <path class="cls-132" d="M113.57,179h0l0,0h0Z" />
          <path class="cls-133" d="M113.27,179.45v0s0,0,0,0h0Z" />
          <polygon
            class="cls-134"
            points="113.6 179.9 113.6 179.9 113.6 179.9 113.6 179.9 113.6 179.9 113.57 179.88 113.57 179.88 113.57 179.88 113.57 179.89 113.57 179.89 113.57 179.89 113.57 179.89 113.57 179.89 113.57 179.9 113.57 179.9 113.57 179.9 113.57 179.9 113.57 179.91 113.57 179.91 113.56 179.91 113.56 179.91 113.56 179.91 113.56 179.91 113.56 179.91 113.56 179.91 113.56 179.92 113.55 179.92 113.55 179.92 113.55 179.92 113.55 179.92 113.55 179.92 113.55 179.92 113.54 179.92 113.54 179.92 113.56 179.93 113.57 179.93 113.57 179.93 113.57 179.93 113.57 179.94 113.57 179.94 113.58 179.94 113.58 179.94 113.58 179.94 113.58 179.94 113.58 179.94 113.58 179.94 113.58 179.94 113.58 179.94 113.58 179.94 113.58 179.94 113.58 179.93 113.58 179.93 113.58 179.93 113.59 179.93 113.59 179.93 113.59 179.93 113.59 179.93 113.59 179.93 113.59 179.93 113.59 179.93 113.59 179.93 113.59 179.93 113.59 179.92 113.6 179.92 113.6 179.92 113.6 179.92 113.6 179.92 113.6 179.92 113.6 179.92 113.6 179.92 113.6 179.92 113.6 179.91 113.6 179.91 113.6 179.91 113.6 179.91 113.6 179.91 113.6 179.91 113.6 179.91 113.6 179.91 113.6 179.91 113.6 179.91 113.6 179.9"
          />
          <path class="cls-135" d="M113.5,179.92h0l0,0h0l0,0h0Z" />
          <path class="cls-136" d="M113.41,179.93h0l0,0h0Z" />
          <path
            class="cls-126"
            d="M113.72,179.88s0,0,0,0l0,0h0l-1.3.18s0,0,0,0,0,0,0,0h0l.94-.13v0h.08l0,0h0v0h0l0,0h0v0h0Z"
          />
          <path
            class="cls-133"
            d="M112.88,180h0s0,0,0,0S112.87,180,112.88,180Z"
          />
          <polygon
            class="cls-137"
            points="113.72 179.88 113.72 179.88 113.72 179.88 113.73 179.88 113.73 179.88 113.73 179.88 113.73 179.88 113.7 179.87 113.7 179.87 113.7 179.87 113.7 179.87 113.7 179.87 113.7 179.87 113.7 179.87 113.69 179.87 113.69 179.87 113.69 179.87 113.69 179.87 113.72 179.88 113.72 179.88 113.72 179.88 113.72 179.88"
          />
          <polygon
            class="cls-130"
            points="113.6 179.9 113.57 179.88 113.69 179.87 113.72 179.88 113.6 179.9"
          />
          <polygon
            class="cls-130"
            points="113.5 179.91 113.47 179.9 113.52 179.89 113.55 179.9 113.5 179.91"
          />
          <polygon
            class="cls-130"
            points="113.41 179.93 113.38 179.91 113.43 179.9 113.45 179.92 113.41 179.93"
          />
          <polygon
            class="cls-130"
            points="112.42 180.06 112.39 180.05 113.33 179.91 113.36 179.93 112.42 180.06"
          />
          <path class="cls-138" d="M112.42,180.07h0l0,0h0Z" />
          <g class="cls-2">
            <polygon
              class="cls-139"
              points="114.16 179.35 113.56 179 113.55 178.98 114.15 179.33 114.16 179.35"
            />
            <polygon
              class="cls-130"
              points="114.15 179.33 113.55 178.98 113.56 178.96 114.17 179.31 114.15 179.33"
            />
          </g>
          <polygon
            class="cls-140"
            points="113.11 180.89 113.12 180.89 113.12 180.89 113.12 180.89 113.12 180.89 113.12 180.89 113.13 180.88 113.13 180.88 113.13 180.88 113.13 180.88 113.13 180.89 112.76 180.67 112.54 180.54 112.54 180.54 112.54 180.54 112.54 180.54 112.54 180.54 112.54 180.54 112.53 180.54 112.53 180.54 112.53 180.54 112.53 180.54 112.53 180.54 112.53 180.54 112.53 180.54 112.53 180.54 112.53 180.54 112.53 180.54 112.53 180.54 112.53 180.54 112.52 180.55 112.52 180.55 112.52 180.55 112.52 180.55 112.52 180.55 112.52 180.55 112.52 180.55 112.52 180.55 113.11 180.9 113.11 180.89 113.11 180.89 113.11 180.89"
          />
          <polygon
            class="cls-130"
            points="113.09 180.93 112.5 180.59 112.52 180.55 113.11 180.9 113.09 180.93"
          />
          <polygon
            class="cls-141"
            points="113.08 180.96 113.08 180.96 113.08 180.95 113.08 180.95 113.08 180.95 113.08 180.95 113.08 180.95 113.08 180.94 113.08 180.94 113.08 180.94 113.08 180.94 113.08 180.94 113.08 180.94 113.09 180.93 112.5 180.59 112.49 180.59 112.49 180.59 112.49 180.59 112.49 180.59 112.49 180.59 112.49 180.59 112.49 180.59 112.49 180.6 112.49 180.6 112.49 180.6 112.49 180.6 112.49 180.6 112.49 180.6 112.49 180.6 112.49 180.6 112.49 180.6 112.49 180.6 112.49 180.6 112.49 180.61 112.49 180.61 112.49 180.61 112.49 180.61 112.49 180.61 112.49 180.61 112.49 180.61 113.08 180.96 113.08 180.96 113.08 180.96"
          />
          <g class="cls-2">
            <path
              id="SVGID-3"
              data-name="SVGID"
              class="cls-1"
              d="M114.15,179.3l-.56-.33h0l.56.33Z"
            />
            <g class="cls-142">
              <g class="cls-2">
                <path class="cls-1" d="M114.15,179.3l-.56-.33h0l.56.33Z" />
              </g>
            </g>
          </g>
          <polygon
            class="cls-143"
            points="114.12 179.31 113.55 178.99 113.57 178.96 114.14 179.28 114.12 179.31"
          />
          <path
            class="cls-144"
            d="M114.11,179.39h0l-.57-.33h-.12v0h0v0h0l0,0h0l0,0h0l0,0h0a.08.08,0,0,0,0,0h0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0l0,0h0v0h0l0,0h-.62l.57.33h.59l0,0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0v0h0v0h0v0h0l0,0h0l0,0h0l0,0h0l0,0H114v0h.08Z"
          />
          <polygon
            class="cls-133"
            points="112.97 180.41 112.41 180.08 112.43 180.08 112.99 180.4 112.97 180.41"
          />
          <polygon
            class="cls-145"
            points="112.96 180.44 112.4 180.12 112.41 180.08 112.97 180.41 112.96 180.44"
          />
          <path
            class="cls-146"
            d="M114.15,179.3h0v0a1,1,0,0,1-.15.43,1.91,1.91,0,0,1-.35.48.78.78,0,0,1-.21.17l-.11,0a.31.31,0,0,1-.31,0h0v0h0a.36.36,0,0,0,.42,0,1,1,0,0,0,.21-.17,2,2,0,0,0,.35-.49,1.12,1.12,0,0,0,.15-.42v0Z"
          />
          <polygon
            class="cls-147"
            points="113.67 179.06 113.55 178.99 113.57 178.96 113.69 179.03 113.67 179.06"
          />
          <path
            class="cls-147"
            d="M113.66,179.14h0l-.12-.07h-.12v0h0v0h0l0,0h0l0,0h0l0,0h0a.08.08,0,0,0,0,0h0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0l0,0h0v0h0l0,0h-.62l.12.07h.62l0,0h0v0h0l0,0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0l0,0h0l0,0h0l0,0h0v0h0v0h.12Z"
          />
          <polygon
            class="cls-147"
            points="112.53 180.15 112.41 180.08 112.43 180.08 112.55 180.15 112.53 180.15"
          />
          <polygon
            class="cls-147"
            points="112.52 180.19 112.4 180.12 112.41 180.08 112.53 180.15 112.52 180.19"
          />
          <polygon
            class="cls-147"
            points="114.12 179.31 114 179.25 114.02 179.21 114.14 179.28 114.12 179.31"
          />
          <path
            class="cls-147"
            d="M114.11,179.39h0l-.12-.08v0h-.1v0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h-.09v0h0v0h0v0h0v0h0v0h0v0h0l0,0h0l0,0h-.59l.12.07h.59l0,0h0l0,0h0l0,0h0l0,0h0v0h0l0,0h0l0,0h0v0h0v0h0v0h0v0h0l0,0h0l0,0h0l0,0h0l0,0H114v0h.08Z"
          />
          <polygon
            class="cls-147"
            points="112.97 180.41 112.85 180.34 112.87 180.33 112.99 180.4 112.97 180.41"
          />
          <polygon
            class="cls-147"
            points="112.96 180.44 112.84 180.37 112.85 180.34 112.97 180.41 112.96 180.44"
          />
          <polygon
            class="cls-147"
            points="113.89 179.19 113.77 179.12 113.79 179.09 113.91 179.16 113.89 179.19"
          />
          <path
            class="cls-147"
            d="M113.89,179.26h0l-.12-.07h-.1v0h0v0h0v0h0l0,0h0l0,0h0a.05.05,0,0,0,0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0l0,0h-.6l.13.07h.59l0,0h0l0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0a.08.08,0,0,0,0,0h0a.05.05,0,0,0,0,0h0l0,0h0v0h.13Z"
          />
          <polygon
            class="cls-147"
            points="112.75 180.28 112.63 180.21 112.65 180.2 112.77 180.28 112.75 180.28"
          />
          <polygon
            class="cls-147"
            points="112.74 180.32 112.62 180.25 112.63 180.21 112.75 180.28 112.74 180.32"
          />
          <polygon
            class="cls-148"
            points="114.32 180.22 114.32 180.22 114.32 180.22 114.32 180.23 114.32 180.23 114.32 180.23 114.32 180.23 114.29 180.21 114.29 180.21 114.29 180.21 114.29 180.21 114.29 180.21 114.29 180.21 114.29 180.21 114.29 180.21 114.29 180.21 114.28 180.21 114.28 180.21 114.31 180.22 114.31 180.22 114.31 180.22 114.32 180.22"
          />
          <polygon
            class="cls-130"
            points="114.19 180.24 114.16 180.23 114.28 180.21 114.31 180.22 114.19 180.24"
          />
          <polygon
            class="cls-130"
            points="114.09 180.25 114.07 180.24 114.11 180.23 114.14 180.25 114.09 180.25"
          />
          <polygon
            class="cls-130"
            points="114 180.27 113.97 180.25 114.02 180.25 114.05 180.26 114 180.27"
          />
          <polygon
            class="cls-149"
            points="114.19 180.25 114.19 180.25 114.19 180.25 114.19 180.25 114.19 180.24 114.19 180.24 114.19 180.24 114.16 180.23 114.16 180.23 114.16 180.23 114.16 180.23 114.17 180.23 114.16 180.23 114.16 180.23 114.16 180.24 114.16 180.24 114.16 180.24 114.16 180.25 114.16 180.25 114.16 180.25 114.16 180.25 114.16 180.25 114.16 180.25 114.15 180.25 114.15 180.26 114.15 180.26 114.15 180.26 114.15 180.26 114.14 180.26 114.14 180.26 114.14 180.26 114.14 180.26 114.14 180.26 114.14 180.26 114.14 180.26 114.14 180.26 114.15 180.27 114.16 180.27 114.16 180.28 114.16 180.28 114.17 180.28 114.17 180.28 114.17 180.28 114.17 180.28 114.17 180.28 114.17 180.28 114.17 180.28 114.17 180.28 114.17 180.28 114.17 180.28 114.17 180.28 114.17 180.28 114.17 180.28 114.17 180.28 114.18 180.28 114.18 180.28 114.18 180.28 114.18 180.27 114.18 180.27 114.18 180.27 114.18 180.27 114.18 180.27 114.19 180.27 114.19 180.27 114.19 180.27 114.19 180.27 114.19 180.27 114.19 180.26 114.19 180.26 114.19 180.26 114.19 180.26 114.19 180.26 114.19 180.26 114.19 180.26 114.19 180.26 114.19 180.26 114.19 180.26 114.19 180.25 114.19 180.25 114.19 180.25 114.19 180.25 114.19 180.25"
          />
          <path class="cls-150" d="M114.09,180.26h0l0,0h0Z" />
          <path class="cls-151" d="M114,180.27h0l0,0h0l0,0h0Z" />
          <path class="cls-152" d="M113,180.46h0l0,0h0Z" />
          <path
            class="cls-126"
            d="M114.31,180.22s0,0,0,0l0,0h0l-1.3.18s0,0,0,0l0,0h0l.94-.13,0,0h0s0,0,0,0h0v0h0s0,0,0,0h0l0,0h0v0h0Z"
          />
          <polygon
            class="cls-130"
            points="113.01 180.41 112.98 180.39 113.92 180.26 113.95 180.28 113.01 180.41"
          />
          <polygon
            class="cls-129"
            points="113.53 180.4 113.46 180.41 113.5 180.34 113.57 180.33 113.53 180.4"
          />
          <polygon
            class="cls-127"
            points="113.78 180.05 114.22 180.31 114.22 180.31 114.21 180.28 113.79 180.04 113.78 180.05"
          />
          <path class="cls-153" d="M113.81,180l0,0,.42.24h0Z" />
          <polygon
            class="cls-129"
            points="114.29 180.29 114.24 180.3 114.2 180.24 114.25 180.23 114.29 180.29"
          />
          <path class="cls-154" d="M114.18,179.32h0l0,0h0Z" />
          <path
            class="cls-126"
            d="M114.2,179.31s0,0,0,0a0,0,0,0,1,0,0L113.13,181h0s0,0,0,0l1.07-1.63s0,0,0,0Z"
          />
          <polygon
            class="cls-130"
            points="113.1 180.96 113.07 180.94 114.14 179.31 114.17 179.33 113.1 180.96"
          />
          <path class="cls-155" d="M113.09,181h0l0,0h0Z" />
          <path
            class="cls-133"
            d="M113.15,180.91h0S113.14,180.91,113.15,180.91Z"
          />
          <path class="cls-133" d="M113.12,181h0s0,0,0,0h0Z" />
          <path class="cls-133" d="M113.49,180.4a0,0,0,0,0,0,0h0v0Z" />
          <path class="cls-133" d="M114.18,179.33h0v0a0,0,0,0,1,0,0Z" />
          <path
            class="cls-126"
            d="M114.26,180.27a.06.06,0,0,1,0,0h0s0,0,0,0h0l-.32-.48a.06.06,0,0,1,0,0h0Z"
          />
          <polygon
            class="cls-127"
            points="114.21 180.32 113.89 179.84 113.86 179.82 114.19 180.3 114.19 180.31 114.2 180.31 114.2 180.31 114.2 180.32 114.22 180.32 114.21 180.32"
          />
          <path class="cls-156" d="M113.92,179.78Z" />
          <path class="cls-133" d="M114.23,180.28h0s0,0,0,0a0,0,0,0,1,0,0Z" />
          <path class="cls-133" d="M113.91,179.8h0s0,0,0,0Z" />
          <path
            class="cls-133"
            d="M114.22,180.26h0a0,0,0,0,1,0,0h0A0,0,0,0,1,114.22,180.26Z"
          />
          <polygon
            class="cls-126"
            points="114.16 180.28 114.09 180.25 114.14 180.25 114.16 180.28"
          />
          <polygon
            class="cls-130"
            points="114.14 180.25 114.09 180.25 114.07 180.24 114.11 180.23 114.14 180.25"
          />
          <path
            class="cls-3"
            d="M115.05,180.83H115v0h0s0,0,0,0h0l-.16.39-1,.22h0s0,0,0,0h0l0,0h.07l.56.32h0s0,0,0,0h.11l.55-.12.24.14h0l0,0h.11l.11-.26.93-.2h.11l.74-.16h0l-.1-.06h0l-.1-.05h0l-.1-.06-.12-.07h0l-.12-.07h-.13l-.4.09-.27,0-.09,0-.73-.16,0,0h0l0,0Zm.49.8v0h.63l.15,0Zm-.29.16h.11l-.07.16h0Zm-.48-.44v0l-.05,0a.08.08,0,0,0,0,.12l0,.06h0l0,0h0l.21.12h0l-.43.1-.2-.12-.36-.2Zm2.37-.07-.68.15h0l-.13,0h.83Zm-1.66-.16-.29-.16.51.11Zm-.41-.14v0l.32.18-.31.09-.13,0,.08-.2h0v0l0,0h0Z"
          />
          <path
            class="cls-157"
            d="M114.88,180.78s0,0,0,.05h0l-.32-.48a0,0,0,0,1,0,0v0h0Z"
          />
          <polygon
            class="cls-127"
            points="114.84 180.84 114.81 180.82 114.49 180.34 114.52 180.36 114.84 180.84"
          />
          <path class="cls-158" d="M114.53,180.29h0l0,0h0Z" />
          <polygon
            class="cls-129"
            points="114.56 180.42 114.53 180.38 114.57 180.32 114.6 180.36 114.56 180.42"
          />
          <path
            class="cls-157"
            d="M114.88,179.86v0a0,0,0,0,1,0,0l-1.07,1.63h0a0,0,0,0,1,0-.05l1.08-1.63h0Z"
          />
          <polygon
            class="cls-130"
            points="113.77 181.51 113.75 181.5 114.82 179.87 114.85 179.88 113.77 181.51"
          />
          <path class="cls-159" d="M113.77,181.56h0l0,0h0Z" />
          <path class="cls-160" d="M114.87,179.86h-.05l0,0h0Z" />
          <path class="cls-161" d="M114.56,180.36l0,0h0s0,0,0,0Z" />
          <polygon
            class="cls-162"
            points="114.9 180.81 114.9 180.81 114.9 180.81 114.9 180.81 114.9 180.81 114.87 180.79 114.87 180.79 114.87 180.8 114.87 180.8 114.87 180.8 114.87 180.8 114.87 180.8 114.87 180.81 114.87 180.81 114.87 180.81 114.87 180.81 114.87 180.81 114.87 180.82 114.87 180.82 114.86 180.82 114.86 180.82 114.86 180.82 114.86 180.82 114.86 180.83 114.86 180.83 114.86 180.83 114.85 180.83 114.85 180.83 114.85 180.83 114.85 180.83 114.85 180.83 114.85 180.83 114.84 180.83 114.84 180.83 114.86 180.84 114.86 180.84 114.87 180.84 114.87 180.85 114.87 180.85 114.87 180.85 114.87 180.85 114.87 180.85 114.87 180.85 114.88 180.85 114.88 180.85 114.88 180.85 114.88 180.85 114.88 180.85 114.88 180.85 114.88 180.85 114.88 180.85 114.88 180.85 114.88 180.84 114.89 180.84 114.89 180.84 114.89 180.84 114.89 180.84 114.89 180.84 114.89 180.84 114.89 180.84 114.89 180.84 114.89 180.84 114.89 180.83 114.89 180.83 114.89 180.83 114.9 180.83 114.9 180.83 114.9 180.83 114.9 180.83 114.9 180.83 114.9 180.83 114.9 180.83 114.9 180.82 114.9 180.82 114.9 180.82 114.9 180.82 114.9 180.82 114.9 180.82 114.9 180.82 114.9 180.82 114.9 180.82 114.9 180.81"
          />
          <path class="cls-163" d="M114.8,180.83h0l0,0h0Z" />
          <path class="cls-164" d="M114.71,180.84h0l0,0h0Z" />
          <path
            class="cls-157"
            d="M115,180.79s0,0,0,0,0,0,0,0h0l-1.3.18s0,0,0,0,0,0,0,0h0l.94-.14v0h.08l0,0h0s0,0,0,0h0l0,0h0s0,0,0,0h0Z"
          />
          <path class="cls-133" d="M114.17,180.93h0s0,0,0,0Z" />
          <polygon
            class="cls-165"
            points="115.02 180.79 115.02 180.79 115.02 180.79 115.03 180.79 115.03 180.79 115.03 180.79 115.03 180.79 115 180.78 115 180.78 115 180.78 115 180.78 115 180.78 115 180.78 115 180.78 114.99 180.78 114.99 180.78 114.99 180.78 114.99 180.78 115.02 180.79 115.02 180.79 115.02 180.79 115.02 180.79"
          />
          <polygon
            class="cls-130"
            points="114.9 180.81 114.87 180.79 114.99 180.78 115.02 180.79 114.9 180.81"
          />
          <polygon
            class="cls-130"
            points="114.8 180.82 114.77 180.81 114.82 180.8 114.85 180.82 114.8 180.82"
          />
          <polygon
            class="cls-130"
            points="114.7 180.84 114.68 180.82 114.72 180.81 114.75 180.83 114.7 180.84"
          />
          <polygon
            class="cls-130"
            points="113.72 180.97 113.69 180.96 114.63 180.83 114.66 180.84 113.72 180.97"
          />
          <path class="cls-166" d="M113.72,181h0l0,0h0l0,0h0Z" />
          <g class="cls-2">
            <polygon
              class="cls-139"
              points="115.46 180.26 114.86 179.91 114.85 179.9 115.45 180.25 115.46 180.26"
            />
            <polygon
              class="cls-130"
              points="115.45 180.25 114.85 179.9 114.86 179.87 115.47 180.22 115.45 180.25"
            />
          </g>
          <polygon
            class="cls-167"
            points="114.41 181.8 114.42 181.8 114.42 181.8 114.42 181.8 114.42 181.8 114.42 181.8 114.42 181.8 114.42 181.8 114.43 181.8 114.43 181.8 114.43 181.8 114.06 181.58 113.84 181.45 113.84 181.45 113.84 181.45 113.83 181.45 113.83 181.45 113.83 181.45 113.83 181.45 113.83 181.45 113.83 181.45 113.83 181.45 113.83 181.45 113.83 181.45 113.83 181.45 113.83 181.45 113.83 181.45 113.83 181.46 113.83 181.46 113.82 181.46 113.82 181.46 113.82 181.46 113.82 181.46 113.82 181.46 113.82 181.46 113.82 181.46 113.82 181.46 113.82 181.46 114.41 181.81 114.41 181.81 114.41 181.81 114.41 181.8"
          />
          <polygon
            class="cls-130"
            points="114.38 181.84 113.79 181.5 113.82 181.46 114.41 181.81 114.38 181.84"
          />
          <polygon
            class="cls-168"
            points="114.38 181.87 114.38 181.87 114.38 181.86 114.38 181.86 114.38 181.86 114.38 181.86 114.38 181.86 114.38 181.86 114.38 181.86 114.38 181.85 114.38 181.85 114.38 181.85 114.38 181.85 114.38 181.84 113.79 181.5 113.79 181.5 113.79 181.5 113.79 181.5 113.79 181.5 113.79 181.5 113.79 181.5 113.79 181.51 113.79 181.51 113.79 181.51 113.79 181.51 113.79 181.51 113.79 181.51 113.79 181.51 113.79 181.51 113.79 181.51 113.79 181.51 113.79 181.51 113.79 181.52 113.79 181.52 113.79 181.52 113.79 181.52 113.79 181.52 113.79 181.52 113.79 181.53 113.79 181.53 114.38 181.87 114.38 181.87 114.38 181.87"
          />
          <g class="cls-2">
            <path
              id="SVGID-4"
              data-name="SVGID"
              class="cls-1"
              d="M115.45,180.21l-.57-.32v0l.56.33Z"
            />
            <g class="cls-169">
              <g class="cls-2">
                <path class="cls-1" d="M115.45,180.21l-.57-.32v0l.56.33Z" />
              </g>
            </g>
          </g>
          <polygon
            class="cls-143"
            points="115.41 180.23 114.85 179.9 114.87 179.87 115.43 180.2 115.41 180.23"
          />
          <path
            class="cls-170"
            d="M115.41,180.3h0l-.56-.33h0v0h-.07v0h0v0h0l0,0h0l0,0h0s0,0,0,0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h-.13v0h-.59l.57.33h.59l0,0h0l0,0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0a.05.05,0,0,1,0,0h0l0,0h0a.05.05,0,0,0,0,0h0l0,0h0v0h.13Z"
          />
          <polygon
            class="cls-133"
            points="114.27 181.32 113.7 180.99 113.73 180.99 114.29 181.31 114.27 181.32"
          />
          <polygon
            class="cls-145"
            points="114.26 181.36 113.7 181.03 113.7 180.99 114.27 181.32 114.26 181.36"
          />
          <path
            class="cls-146"
            d="M115.45,180.21h0v0a1.16,1.16,0,0,1-.15.43,1.91,1.91,0,0,1-.35.48.78.78,0,0,1-.21.17.27.27,0,0,1-.11.05.31.31,0,0,1-.31,0h0v0h0a.36.36,0,0,0,.42,0,1,1,0,0,0,.21-.17,2.2,2.2,0,0,0,.35-.48,1.1,1.1,0,0,0,.14-.43l0,0Z"
          />
          <polygon
            class="cls-171"
            points="114.97 179.97 114.85 179.9 114.87 179.87 114.99 179.94 114.97 179.97"
          />
          <path
            class="cls-171"
            d="M115,180.05h0l-.12-.07h0v0h-.07v0h0v0h0l0,0h0l0,0h0s0,0,0,0h0l0,0h0v0h0v0h0v0h0v0h0v0h0v0h0l0,0h-.09v0h-.59l.12.07h.69l0,0h0l0,0h0l0,0h0v0h0v0h0v0h0l0,0h0l0,0h0s0,0,0,0h0l0,0h0v0H115Z"
          />
          <polygon
            class="cls-171"
            points="113.83 181.06 113.7 180.99 113.73 180.99 113.85 181.06 113.83 181.06"
          />
          <polygon
            class="cls-171"
            points="113.82 181.1 113.7 181.03 113.7 180.99 113.83 181.06 113.82 181.1"
          />
          <polygon
            class="cls-171"
            points="115.41 180.23 115.29 180.16 115.31 180.13 115.43 180.2 115.41 180.23"
          />
          <path
            class="cls-171"
            d="M115.41,180.3h0l-.12-.07h-.1v0h0v0h0l0,0h0l0,0h0l0,0h0a.08.08,0,0,0,0,0h0v0h0v0h0v0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0v0h0l0,0h0l0,0h-.59l.12.07h.61l0,0h0l0,0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0a.08.08,0,0,1,0,0h0l0,0h0a.05.05,0,0,0,0,0h0l0,0h0v0h.13Z"
          />
          <polygon
            class="cls-171"
            points="114.27 181.32 114.15 181.25 114.17 181.24 114.29 181.31 114.27 181.32"
          />
          <polygon
            class="cls-171"
            points="114.26 181.36 114.14 181.29 114.15 181.25 114.27 181.32 114.26 181.36"
          />
          <polygon
            class="cls-171"
            points="115.19 180.1 115.07 180.03 115.09 180 115.21 180.07 115.19 180.1"
          />
          <path
            class="cls-171"
            d="M115.18,180.18h0l-.12-.07h-.13v0h0v0h0l0,0h0l0,0h0l0,0h0l0,0h0v0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0l0,0h0v0h0l0,0H114l.12.07h.62s0,0,0,0h0v0h0l0,0h0v0h0v0h0v0h0v0h0l0,0h0v0h0v0h0v0h0v0h0l0,0h0l0,0h0l0,0h0s0,0,0,0h0v0h.12Z"
          />
          <polygon
            class="cls-171"
            points="114.05 181.19 113.93 181.12 113.95 181.12 114.07 181.19 114.05 181.19"
          />
          <polygon
            class="cls-171"
            points="114.04 181.23 113.92 181.16 113.93 181.12 114.05 181.19 114.04 181.23"
          />
          <polygon
            class="cls-172"
            points="115.61 181.14 115.61 181.14 115.61 181.14 115.62 181.14 115.62 181.14 115.62 181.14 115.62 181.14 115.59 181.12 115.59 181.12 115.59 181.12 115.59 181.12 115.59 181.12 115.59 181.12 115.58 181.12 115.58 181.12 115.58 181.12 115.58 181.12 115.58 181.12 115.61 181.14 115.61 181.14 115.61 181.14 115.61 181.14"
          />
          <polygon
            class="cls-130"
            points="115.49 181.15 115.46 181.14 115.58 181.12 115.61 181.14 115.49 181.15"
          />
          <polygon
            class="cls-130"
            points="115.39 181.17 115.36 181.15 115.41 181.14 115.44 181.16 115.39 181.17"
          />
          <polygon
            class="cls-130"
            points="115.3 181.18 115.27 181.16 115.32 181.16 115.34 181.17 115.3 181.18"
          />
          <polygon
            class="cls-173"
            points="115.49 181.16 115.49 181.16 115.49 181.16 115.49 181.16 115.49 181.16 115.49 181.16 115.49 181.15 115.46 181.14 115.46 181.14 115.46 181.14 115.46 181.14 115.46 181.14 115.46 181.15 115.46 181.15 115.46 181.15 115.46 181.15 115.46 181.15 115.46 181.16 115.46 181.16 115.46 181.16 115.46 181.16 115.45 181.16 115.45 181.17 115.45 181.17 115.45 181.17 115.45 181.17 115.45 181.17 115.45 181.17 115.44 181.17 115.44 181.17 115.44 181.17 115.44 181.17 115.44 181.17 115.44 181.17 115.43 181.17 115.43 181.17 115.45 181.18 115.45 181.19 115.46 181.19 115.46 181.19 115.46 181.19 115.46 181.19 115.47 181.19 115.47 181.19 115.47 181.19 115.47 181.19 115.47 181.19 115.47 181.19 115.47 181.19 115.47 181.19 115.47 181.19 115.47 181.19 115.47 181.19 115.47 181.19 115.47 181.19 115.48 181.19 115.48 181.19 115.48 181.18 115.48 181.18 115.48 181.18 115.48 181.18 115.48 181.18 115.48 181.18 115.48 181.18 115.48 181.18 115.49 181.18 115.49 181.18 115.49 181.18 115.49 181.17 115.49 181.17 115.49 181.17 115.49 181.17 115.49 181.17 115.49 181.17 115.49 181.17 115.49 181.17 115.49 181.17 115.49 181.17 115.49 181.16 115.49 181.16 115.49 181.16 115.49 181.16"
          />
          <path class="cls-174" d="M115.39,181.17h0l0,0h0Z" />
          <path class="cls-175" d="M115.3,181.19h0l0,0h0l0,0h0Z" />
          <path class="cls-176" d="M114.28,181.37h0l0,0h0Z" />
          <path
            class="cls-157"
            d="M115.61,181.14s0,0,0,0,0,0,0,0h0l-1.3.18s0,0,0,0a.05.05,0,0,1,0,0h0l.94-.13v0h0s0,0,0,0h0l0,0s0,0,0,0h.06l0,0h0s0,0,0,0h.12Z"
          />
          <polygon
            class="cls-130"
            points="114.31 181.32 114.28 181.3 115.22 181.17 115.25 181.19 114.31 181.32"
          />
          <polygon
            class="cls-129"
            points="114.83 181.31 114.76 181.32 114.8 181.25 114.87 181.24 114.83 181.31"
          />
          <polygon
            class="cls-127"
            points="115.08 180.96 115.52 181.22 115.52 181.22 115.5 181.19 115.09 180.95 115.08 180.96"
          />
          <path class="cls-177" d="M115.11,180.92l0,0,.41.24h0Z" />
          <polygon
            class="cls-129"
            points="115.58 181.2 115.54 181.21 115.5 181.15 115.54 181.15 115.58 181.2"
          />
          <path class="cls-178" d="M115.48,180.23h0l0,0h0Z" />
          <path
            class="cls-157"
            d="M115.5,180.22a0,0,0,0,1,0,0s0,0,0,0l-1.07,1.63h0s0,0,0,0l1.08-1.63a0,0,0,0,1,0,0Z"
          />
          <polygon
            class="cls-130"
            points="114.39 181.87 114.37 181.86 115.44 180.22 115.47 180.24 114.39 181.87"
          />
          <path class="cls-179" d="M114.39,181.91Z" />
          <path class="cls-161" d="M114.44,181.82s0,0,0,0h0Z" />
          <path class="cls-161" d="M114.42,181.86s0,0,0,0,0,0,0,0h0Z" />
          <path class="cls-133" d="M114.79,181.31h0s0,0,0,0v0Z" />
          <path class="cls-161" d="M115.48,180.25h0s0,0,0,0a0,0,0,0,1,0,0Z" />
          <path
            class="cls-157"
            d="M115.56,181.18a.06.06,0,0,1,0,0h0a0,0,0,0,1,0,0h0l-.32-.48s0,0,0,0h0Z"
          />
          <polygon
            class="cls-127"
            points="115.51 181.23 115.19 180.75 115.16 180.74 115.48 181.22 115.49 181.22 115.5 181.22 115.5 181.22 115.5 181.23 115.52 181.24 115.51 181.23"
          />
          <path class="cls-180" d="M115.22,180.69h0l0,0h0Z" />
          <path
            class="cls-161"
            d="M115.53,181.19h0s0,0,0,0h0S115.52,181.19,115.53,181.19Z"
          />
          <path class="cls-161" d="M115.21,180.71h0v0a0,0,0,0,1,0,0Z" />
          <path
            class="cls-161"
            d="M115.52,181.17h0a0,0,0,0,1,0,0h0S115.51,181.17,115.52,181.17Z"
          />
          <polygon
            class="cls-126"
            points="115.46 181.19 115.39 181.17 115.44 181.16 115.46 181.19"
          />
          <polygon
            class="cls-130"
            points="115.44 181.16 115.39 181.17 115.36 181.15 115.41 181.14 115.44 181.16"
          />
          <path
            class="cls-62"
            d="M136.46,170.12h0l-26.8-15.47h-.11v0a.05.05,0,0,0,0,0l26.8,15.46h0a.15.15,0,0,0,.06-.11A.05.05,0,0,0,136.46,170.12Z"
          />
          <path
            class="cls-62"
            d="M136.46,169.67h0l-26.8-15.47h-.11s0,0,0,0l26.8,15.47a0,0,0,0,0,0,0,.15.15,0,0,0,.06-.11A.05.05,0,0,0,136.46,169.67Z"
          />
          <path
            class="cls-62"
            d="M136.46,169.22h0l-26.8-15.47h-.11a.05.05,0,0,0,0,0l26.8,15.47s0,0,0,0a.13.13,0,0,0,.06-.1S136.47,169.22,136.46,169.22Z"
          />
          <polygon
            class="cls-96"
            points="97.85 161.8 97.85 168.08 98.19 168.28 103.97 171.62 103.97 165.34 97.85 161.8"
          />
          <polygon
            class="cls-101"
            points="105.8 172.33 104.27 171.44 104.27 166.49 105.8 167.38 105.8 172.33"
          />
          <polygon
            class="cls-96"
            points="104.14 171.72 103.97 171.62 103.97 166.47 104.14 166.57 104.14 171.72"
          />
          <polygon
            class="cls-108"
            points="104.31 171.62 104.14 171.72 104.14 166.57 104.31 166.47 104.31 171.62"
          />
          <polygon
            class="cls-109"
            points="104.31 166.47 104.14 166.57 103.97 166.47 104.14 166.37 104.31 166.47"
          />
          <polygon
            class="cls-181"
            points="104.27 171.64 104.18 171.69 104.18 166.54 104.27 166.49 104.27 171.64"
          />
          <polygon
            class="cls-96"
            points="104.14 171.52 104.14 171.72 105.67 172.6 105.67 172.4 104.14 171.52"
          />
          <polygon
            class="cls-109"
            points="104.31 171.42 104.14 171.52 105.67 172.4 105.84 172.31 104.31 171.42"
          />
          <polygon
            class="cls-108"
            points="105.84 172.31 105.67 172.4 105.67 172.6 105.84 172.5 105.84 172.31"
          />
          <polygon
            class="cls-181"
            points="104.27 171.44 104.18 171.49 105.55 172.29 105.63 172.24 104.27 171.44"
          />
          <polygon
            class="cls-103"
            points="105.5 172.26 104.18 171.49 104.18 166.54 105.72 167.43 105.5 172.26"
          />
          <polygon
            class="cls-96"
            points="105.67 172.6 105.5 172.5 105.5 167.35 105.67 167.45 105.67 172.6"
          />
          <polygon
            class="cls-108"
            points="105.84 172.5 105.67 172.6 105.67 167.45 105.84 167.35 105.84 172.5"
          />
          <polygon
            class="cls-109"
            points="105.84 167.35 105.67 167.45 105.5 167.35 105.67 167.25 105.84 167.35"
          />
          <polygon
            class="cls-101"
            points="107.16 173.11 105.97 172.43 105.97 167.48 107.16 168.16 107.16 173.11"
          />
          <polygon
            class="cls-96"
            points="105.84 172.7 105.67 172.6 105.67 167.45 105.84 167.55 105.84 172.7"
          />
          <polygon
            class="cls-108"
            points="106.01 172.6 105.84 172.7 105.84 167.55 106.01 167.45 106.01 172.6"
          />
          <polygon
            class="cls-109"
            points="106.01 167.45 105.84 167.55 105.67 167.45 105.84 167.35 106.01 167.45"
          />
          <polygon
            class="cls-181"
            points="105.97 172.62 105.89 172.67 105.89 167.53 105.97 167.48 105.97 172.62"
          />
          <polygon
            class="cls-96"
            points="105.84 172.5 105.84 172.7 107.03 173.39 107.03 173.19 105.84 172.5"
          />
          <polygon
            class="cls-109"
            points="106.01 172.4 105.84 172.5 107.03 173.19 107.2 173.09 106.01 172.4"
          />
          <polygon
            class="cls-108"
            points="107.2 173.09 107.03 173.19 107.03 173.39 107.2 173.29 107.2 173.09"
          />
          <polygon
            class="cls-181"
            points="105.97 172.42 105.89 172.47 106.91 173.07 106.99 173.02 105.97 172.42"
          />
          <polygon
            class="cls-103"
            points="106.86 173.05 105.89 172.47 105.89 167.53 107.08 168.21 106.86 173.05"
          />
          <polygon
            class="cls-96"
            points="107.03 173.39 106.86 173.29 106.86 168.14 107.03 168.24 107.03 173.39"
          />
          <polygon
            class="cls-108"
            points="107.2 173.29 107.03 173.39 107.03 168.24 107.2 168.14 107.2 173.29"
          />
          <polygon
            class="cls-109"
            points="107.2 168.14 107.03 168.24 106.86 168.14 107.03 168.04 107.2 168.14"
          />
          <polygon
            class="cls-101"
            points="108.86 174.09 107.33 173.21 107.33 168.26 108.86 169.15 108.86 174.09"
          />
          <polygon
            class="cls-96"
            points="107.2 173.48 107.03 173.39 107.03 168.24 107.2 168.34 107.2 173.48"
          />
          <polygon
            class="cls-108"
            points="107.37 173.39 107.2 173.48 107.2 168.34 107.37 168.24 107.37 173.39"
          />
          <polygon
            class="cls-109"
            points="107.37 168.24 107.2 168.34 107.03 168.24 107.2 168.14 107.37 168.24"
          />
          <polygon
            class="cls-181"
            points="107.33 173.41 107.25 173.46 107.25 168.31 107.33 168.26 107.33 173.41"
          />
          <polygon
            class="cls-96"
            points="107.2 173.29 107.2 173.48 108.73 174.37 108.73 174.17 107.2 173.29"
          />
          <polygon
            class="cls-109"
            points="107.37 173.19 107.2 173.29 108.73 174.17 108.91 174.07 107.37 173.19"
          />
          <polygon
            class="cls-108"
            points="108.91 174.07 108.73 174.17 108.73 174.37 108.91 174.27 108.91 174.07"
          />
          <polygon
            class="cls-181"
            points="107.33 173.21 107.25 173.26 108.61 174.06 108.69 174 107.33 173.21"
          />
          <polygon
            class="cls-103"
            points="108.56 174.03 107.25 173.26 107.25 168.31 108.78 169.19 108.56 174.03"
          />
          <polygon
            class="cls-96"
            points="108.73 174.37 108.56 174.27 108.56 169.12 108.73 169.22 108.73 174.37"
          />
          <polygon
            class="cls-108"
            points="108.91 174.27 108.73 174.37 108.73 169.22 108.91 169.12 108.91 174.27"
          />
          <polygon
            class="cls-109"
            points="108.91 169.12 108.73 169.22 108.56 169.12 108.73 169.02 108.91 169.12"
          />
          <polygon
            class="cls-96"
            points="110.27 175.25 108.73 174.37 108.73 169.22 110.27 170.1 110.27 175.25"
          />
          <polygon
            class="cls-101"
            points="111.75 175.76 110.56 175.08 110.56 170.13 111.75 170.82 111.75 175.76"
          />
          <polygon
            class="cls-96"
            points="110.44 175.35 110.27 175.25 110.27 170.1 110.44 170.2 110.44 175.35"
          />
          <polygon
            class="cls-108"
            points="110.61 175.25 110.44 175.35 110.44 170.2 110.61 170.1 110.61 175.25"
          />
          <polygon
            class="cls-109"
            points="110.61 170.1 110.44 170.2 110.27 170.1 110.44 170 110.61 170.1"
          />
          <polygon
            class="cls-181"
            points="110.56 175.28 110.48 175.33 110.48 170.18 110.56 170.13 110.56 175.28"
          />
          <polygon
            class="cls-96"
            points="110.44 175.15 110.44 175.35 111.63 176.04 111.63 175.84 110.44 175.15"
          />
          <polygon
            class="cls-109"
            points="110.61 175.06 110.44 175.15 111.63 175.84 111.8 175.74 110.61 175.06"
          />
          <polygon
            class="cls-108"
            points="111.8 175.74 111.63 175.84 111.63 176.04 111.8 175.94 111.8 175.74"
          />
          <polygon
            class="cls-181"
            points="110.56 175.07 110.48 175.12 111.5 175.72 111.58 175.68 110.56 175.07"
          />
          <polygon
            class="cls-103"
            points="111.46 175.7 110.48 175.12 110.48 170.18 111.67 170.87 111.46 175.7"
          />
          <polygon
            class="cls-96"
            points="111.63 176.04 111.46 175.94 111.46 170.79 111.63 170.89 111.63 176.04"
          />
          <polygon
            class="cls-108"
            points="111.8 175.94 111.63 176.04 111.63 170.89 111.8 170.79 111.8 175.94"
          />
          <polygon
            class="cls-109"
            points="111.8 170.79 111.63 170.89 111.46 170.79 111.63 170.69 111.8 170.79"
          />
          <polygon
            class="cls-101"
            points="113.11 176.55 111.92 175.86 111.92 170.91 113.11 171.6 113.11 176.55"
          />
          <polygon
            class="cls-96"
            points="111.8 176.14 111.63 176.04 111.63 170.89 111.8 170.99 111.8 176.14"
          />
          <polygon
            class="cls-108"
            points="111.97 176.04 111.8 176.14 111.8 170.99 111.97 170.89 111.97 176.04"
          />
          <polygon
            class="cls-109"
            points="111.97 170.89 111.8 170.99 111.63 170.89 111.8 170.79 111.97 170.89"
          />
          <polygon
            class="cls-181"
            points="111.92 176.06 111.84 176.11 111.84 170.96 111.92 170.91 111.92 176.06"
          />
          <polygon
            class="cls-96"
            points="111.8 175.94 111.8 176.14 112.99 176.82 112.99 176.63 111.8 175.94"
          />
          <polygon
            class="cls-109"
            points="111.97 175.84 111.8 175.94 112.99 176.63 113.16 176.53 111.97 175.84"
          />
          <polygon
            class="cls-108"
            points="113.16 176.53 112.99 176.63 112.99 176.82 113.16 176.73 113.16 176.53"
          />
          <polygon
            class="cls-181"
            points="111.92 175.86 111.84 175.91 112.86 176.51 112.94 176.46 111.92 175.86"
          />
          <polygon
            class="cls-103"
            points="112.82 176.49 111.84 175.91 111.84 170.96 113.03 171.65 112.82 176.49"
          />
          <polygon
            class="cls-96"
            points="112.99 176.82 112.82 176.73 112.82 171.58 112.99 171.68 112.99 176.82"
          />
          <polygon
            class="cls-108"
            points="113.16 176.73 112.99 176.82 112.99 171.68 113.16 171.58 113.16 176.73"
          />
          <polygon
            class="cls-109"
            points="113.16 171.58 112.99 171.68 112.82 171.58 112.99 171.48 113.16 171.58"
          />
          <path
            class="cls-37"
            d="M133.79,169.05l-.17.09v0l-1.39-.8-.17.09v0l-1.39-.8-1.28-.74.12-.07v0l1.39.8.17-.1v-.1L128.52,166h0l-1.36-.79h0l-2.72-1.57-2.72-1.57-2.55-1.47h0l-1.36-.79-2.72-1.57-2.72-1.57-2.55-1.47-.17.09v0l0,0-.17.1v0h0l-.17.1h0v0l0,0-.17.1v0l0,0-.17.1v0l0,0-.17.1h0v0l0,0-.17.1v0l0,0-.17.1v0h0l-.17.1h0v0l0,0-.17.1v0l0,0-.17.1v0l0,0-.17.09v0l0,0-.17.1v0l0,0-.17.1v0h0l-.17.1h0v0l0,0-.17.1h0v0l0,0-.17.1v0l0,0-.17.09v0l0,0-.17.1v.1l2.55,1.47,1.28.74-.12.07h0v0l-1.39-.8h0l-2.55-1.47-.17.1h0v.08l2.55,1.48,1.27.73-.11.07v0l-1.4-.81-2.55-1.47-.17.1v.1l2.55,1.47,1.28.73-.12.07v0l-1.39-.8L105,158l-.17.1v.1l2.55,1.47,1.28.74-.12.07h0v0l-1.39-.8-2.56-1.47-.17.1h0v.08l2.56,1.48,1.27.73-.12.07v.1l2.73,1.57h0l2.72,1.57,1.19.69,2.72,1.57,2.73,1.57h0l2.72,1.57h0l1.19.68,2.72,1.57,2.73,1.58h0l1.52.89.17-.1v-.1l-.17.1h0l.17-.1-.08,0,.12-.07v0l.19.11.17-.09v-.1l-.08,0,.12-.07v0l.2.11.17-.1v-.1l-.08,0,.12-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.19.11.17-.09v-.1l-.07-.05.12-.07v0l.19.11.17-.1v-.08h0l-.08,0,.12-.07v0l.19.11.17-.1v-.1l-.17.1h0l.17-.1-.07,0,.11-.07v0l.2.11.17-.09v-.1l-.08,0,.12-.07v0l.19.11.17-.1V172l-.08,0,.12-.07v0l.19.11.17-.1v-.1l-.07,0,.12-.07v0l.19.12.17-.1v-.1l-.08-.05.12-.07v0l.19.11.17-.1v-.08h0l-.07-.05.12-.07v0l.19.11.17-.1v-.1l-.08,0,.12-.07v0l.19.12.17-.1v-.1l-.17.1h0l.17-.1-.08-.05.12-.07v-.09Zm-23.69-9.52v0l-1.39-.8-1.28-.74.12-.07v0l1.4.81,1.27.74Zm.41-.23v0l-1.39-.81-1.28-.73.12-.07v0l1.39.81,1.27.73Zm.4-.23h0v0l-1.39-.8-1.28-.74.12-.07v0l1.39.8L111,159Zm12.9,9.64h0l-.11.07h0Zm-4.83-8h0Z"
          />
          <path
            class="cls-37"
            d="M125.61,173.83h-.11a.11.11,0,0,0,0,.06l1.59,2.76v-.21l-1.5-2.6Z"
          />
          <polygon
            class="cls-96"
            points="114.18 177.51 112.99 176.82 112.99 171.68 114.18 172.36 114.18 177.51"
          />
          <polygon
            class="cls-108"
            points="114.18 171.24 114.18 177.51 127.11 170.05 127.11 163.77 114.18 171.24"
          />
          <path
            class="cls-62"
            d="M112.22,184h0l-26.8-15.47h-.11v0a.08.08,0,0,0,0,0l26.8,15.46h0a.14.14,0,0,0,.07-.11A.05.05,0,0,0,112.22,184Z"
          />
          <path
            class="cls-62"
            d="M112.22,183.58h0l-26.8-15.47h-.11s0,0,0,0l26.8,15.47a0,0,0,0,0,0,0,.14.14,0,0,0,.07-.11A.05.05,0,0,0,112.22,183.58Z"
          />
          <path
            class="cls-62"
            d="M112.22,183.13h0l-26.8-15.47h-.11a.05.05,0,0,0,0,0l26.8,15.47h0a.12.12,0,0,0,.07-.1S112.23,183.13,112.22,183.13Z"
          />
          <polygon
            class="cls-96"
            points="112.14 188.12 84.92 172.4 84.92 169.26 112.14 184.97 112.14 188.12"
          />
          <polygon
            class="cls-96"
            points="127.11 223.12 125.75 222.33 125.75 175.55 127.11 176.33 127.11 223.12"
          />
          <polygon
            class="cls-99"
            points="130.52 171.03 130.35 170.93 130.35 170.76 130.52 170.76 130.52 171.03"
          />
          <polygon
            class="cls-182"
            points="130.52 170.76 130.69 170.76 130.69 170.93 130.52 171.03 130.52 170.76"
          />
          <polygon
            class="cls-99"
            points="129.88 170.66 129.71 170.57 129.71 170.4 129.88 170.4 129.88 170.66"
          />
          <polygon
            class="cls-182"
            points="129.88 170.4 130.05 170.4 130.05 170.57 129.88 170.66 129.88 170.4"
          />
          <polygon
            class="cls-99"
            points="133.19 169.49 133.02 169.39 133.02 169.22 133.19 169.22 133.19 169.49"
          />
          <polygon
            class="cls-182"
            points="133.19 169.22 133.36 169.22 133.36 169.39 133.19 169.49 133.19 169.22"
          />
          <polygon
            class="cls-99"
            points="133.4 169.29 130.52 170.96 130.52 170.47 133.4 168.8 133.4 169.29"
          />
          <polygon
            class="cls-100"
            points="133.4 168.8 130.52 170.47 129.66 169.98 132.56 168.31 133.4 168.8"
          />
          <polygon
            class="cls-98"
            points="130.52 170.96 129.66 170.47 129.66 169.98 130.52 170.47 130.52 170.96"
          />
          <polygon
            class="cls-108"
            points="136.64 217.62 127.11 223.12 127.11 176.33 136.63 170.83 136.64 217.62"
          />
          <polygon
            class="cls-100"
            points="134.26 168.7 134.09 168.8 135.11 169.39 135.28 169.29 134.26 168.7"
          />
          <polygon
            class="cls-98"
            points="135.28 170.47 134.09 169.78 134.09 168.8 135.28 169.49 135.28 170.47"
          />
          <path
            class="cls-183"
            d="M133.23,169.69s0,.06,0,.09l.93.54a.19.19,0,0,0,.15,0l.79-.45s0-.07,0-.09l-.93-.54a.15.15,0,0,0-.16,0Z"
          />
          <g class="cls-2">
            <path
              class="cls-184"
              d="M133.23,169.78l.93.54v.18l-.93-.54a.05.05,0,0,1,0-.05v-.18A.05.05,0,0,0,133.23,169.78Z"
            />
          </g>
          <path
            class="cls-185"
            d="M135,169.85c0-.27.09-.54.13-.8l0,0-.13.8A0,0,0,0,0,135,169.85Z"
          />
          <path
            class="cls-186"
            d="M134,169.39l-.13.8,0,0,.13-.8S134,169.4,134,169.39Z"
          />
          <polygon
            class="cls-187"
            points="134.28 169.56 134.15 170.37 135.01 169.87 135.15 169.07 134.28 169.56"
          />
          <polygon
            class="cls-104"
            points="134.03 169.42 133.9 170.22 134.07 170.36 134.21 169.56 134.03 169.42"
          />
          <path
            class="cls-188"
            d="M134.21,169.56l-.14.8a.08.08,0,0,0,.08,0l.13-.81S134.23,169.57,134.21,169.56Z"
          />
          <path
            class="cls-171"
            d="M134,169.37s0,0,0,0l.18.14s0,0,.07,0l.86-.49s0,0,0-.06l-.18-.13a.08.08,0,0,0-.08,0Z"
          />
          <path
            class="cls-183"
            d="M132.29,170.23s0,.07,0,.09l.93.54a.15.15,0,0,0,.16,0l.78-.45s0-.07,0-.09l-.93-.54a.15.15,0,0,0-.16,0Z"
          />
          <g class="cls-2">
            <path
              class="cls-189"
              d="M132.29,170.32l.93.54V171l-.93-.54a.05.05,0,0,1,0-.05v-.17A.05.05,0,0,0,132.29,170.32Z"
            />
          </g>
          <path
            class="cls-188"
            d="M134.09,170.39l.13-.8v0l-.14.8A0,0,0,0,0,134.09,170.39Z"
          />
          <path
            class="cls-190"
            d="M133.08,169.93l-.14.8a.08.08,0,0,0,0,0l.13-.81S133.07,169.94,133.08,169.93Z"
          />
          <polygon
            class="cls-187"
            points="133.34 170.11 133.21 170.91 134.07 170.41 134.21 169.61 133.34 170.11"
          />
          <polygon
            class="cls-104"
            points="133.09 169.96 132.96 170.76 133.14 170.9 133.27 170.1 133.09 169.96"
          />
          <path
            class="cls-188"
            d="M133.27,170.1l-.13.8a.06.06,0,0,0,.07,0l.14-.8A.08.08,0,0,1,133.27,170.1Z"
          />
          <path
            class="cls-171"
            d="M133.09,169.91s0,0,0,.05l.18.14a.08.08,0,0,0,.08,0l.86-.5a0,0,0,0,0,0-.05l-.18-.14a.08.08,0,0,0-.08,0Z"
          />
          <path
            class="cls-183"
            d="M131.35,170.77s0,.07,0,.09l.93.54a.15.15,0,0,0,.16,0l.78-.45s0-.06,0-.09l-.93-.54a.22.22,0,0,0-.16,0Z"
          />
          <g class="cls-2">
            <path
              class="cls-191"
              d="M131.35,170.86l.93.54v.18l-.93-.54a.05.05,0,0,1,0,0v-.18A.05.05,0,0,0,131.35,170.86Z"
            />
          </g>
          <path
            class="cls-188"
            d="M133.15,170.94l.13-.81s0,0,0,0l-.13.81A0,0,0,0,1,133.15,170.94Z"
          />
          <path
            class="cls-187"
            d="M132.14,170.47l-.13.81s0,0,0,0l.13-.81A0,0,0,0,1,132.14,170.47Z"
          />
          <polygon
            class="cls-187"
            points="132.41 170.65 132.27 171.45 133.13 170.96 133.27 170.15 132.41 170.65"
          />
          <polygon
            class="cls-187"
            points="132.15 170.5 132.02 171.31 132.2 171.45 132.33 170.64 132.15 170.5"
          />
          <path
            class="cls-188"
            d="M132.33,170.64l-.13.81s.05,0,.07,0l.14-.8A.08.08,0,0,1,132.33,170.64Z"
          />
          <path
            class="cls-171"
            d="M132.15,170.45a0,0,0,0,0,0,.05l.18.14a.08.08,0,0,0,.08,0l.86-.5s0,0,0-.05l-.18-.14a.08.08,0,0,0-.08,0Z"
          />
          <polygon
            class="cls-99"
            points="135.45 170.37 132.22 172.24 132.22 171.25 135.45 169.39 135.45 170.37"
          />
          <polygon
            class="cls-98"
            points="132.22 172.24 131.03 171.55 131.03 170.57 132.22 171.25 132.22 172.24"
          />
          <polygon
            class="cls-100"
            points="135.28 169.29 135.11 169.39 132.22 171.06 131.2 170.47 131.03 170.57 132.22 171.25 135.45 169.39 135.28 169.29"
          />
          <polygon
            class="cls-96"
            points="126.77 176.13 125.41 175.35 125.41 173.39 126.77 174.17 126.77 176.13"
          />
          <polygon
            class="cls-108"
            points="127.11 175.94 126.77 176.13 126.77 174.17 127.11 173.97 127.11 175.94"
          />
          <polygon
            class="cls-109"
            points="127.11 173.97 126.77 174.17 125.41 173.39 125.75 173.19 127.11 173.97"
          />
          <path
            class="cls-3"
            d="M125.61,174.74h-.11a.14.14,0,0,0,0,.06l1.59,2.75v-.2Z"
          />
          <path
            class="cls-3"
            d="M125.61,174.29h-.11a.14.14,0,0,0,0,.06l1.59,2.75v-.2Z"
          />
          <polygon
            class="cls-108"
            points="127.11 176.33 136.64 170.83 136.64 168.87 127.11 174.37 127.11 176.33"
          />
          <polygon
            class="cls-96"
            points="126.77 176.13 127.11 176.33 127.11 174.37 126.77 174.17 126.77 176.13"
          />
          <polygon
            class="cls-109"
            points="126.77 174.17 127.11 174.37 136.64 168.87 136.3 168.67 126.77 174.17"
          />
          <path
            class="cls-62"
            d="M119.81,178h0l5.71-3.29h.1s0,0,0,0l-5.71,3.29h0a.14.14,0,0,1-.07-.11S119.8,178,119.81,178Z"
          />
          <path
            class="cls-62"
            d="M119.81,177.53h0l5.71-3.29h.1s0,0,0,0l-5.71,3.29h0a.12.12,0,0,1-.07-.1S119.8,177.53,119.81,177.53Z"
          />
          <polygon
            class="cls-96"
            points="120.98 179.47 119.62 178.69 119.62 176.72 120.98 177.51 120.98 179.47"
          />
          <polygon
            class="cls-108"
            points="121.32 179.28 120.98 179.47 120.98 177.51 121.32 177.31 121.32 179.28"
          />
          <polygon
            class="cls-109"
            points="121.32 177.31 120.98 177.51 119.62 176.72 119.96 176.53 121.32 177.31"
          />
          <polygon
            class="cls-108"
            points="112.14 184.97 121.67 179.47 121.67 177.51 112.14 183.01 112.14 184.97"
          />
          <polygon
            class="cls-96"
            points="111.8 184.78 112.14 184.97 112.14 183.01 111.8 182.81 111.8 184.78"
          />
          <polygon
            class="cls-109"
            points="111.8 182.81 112.14 183.01 121.67 177.51 121.32 177.31 111.8 182.81"
          />
          <polygon
            class="cls-96"
            points="127.11 163.77 114.18 171.24 97.85 161.81 110.78 154.35 127.11 163.77"
          />
          <polygon
            class="cls-96"
            points="114.18 171.24 114.18 172.81 97.85 163.38 97.85 161.81 114.18 171.24"
          />
          <polygon
            class="cls-96"
            points="111.53 231.56 112.14 231.76 112.24 188.15 111.63 187.95 111.53 231.56"
          />
          <polygon
            class="cls-96"
            points="92.06 220.17 90.36 219.19 90.2 175.72 91.9 176.7 92.09 196.03 92.13 198.52 92.09 201.69 92.09 203.82 92.06 220.17"
          />
          <polygon
            class="cls-96"
            points="96.39 222.73 94.69 221.74 94.69 178.1 96.48 179.08 96.39 222.73"
          />
          <polygon
            class="cls-96"
            points="124.97 222.89 125.14 222.79 125.14 218.08 124.97 218.18 124.97 222.89"
          />
          <polygon
            class="cls-95"
            points="124.8 222.79 124.97 222.89 124.97 218.18 124.8 218.08 124.8 222.79"
          />
          <polygon
            class="cls-96"
            points="124.8 218.08 124.97 218.18 125.14 218.08 124.97 217.98 124.8 218.08"
          />
          <polygon
            class="cls-102"
            points="124.84 222.82 124.92 222.87 124.92 218.15 124.84 218.1 124.84 222.82"
          />
          <polygon
            class="cls-96"
            points="124.97 222.69 124.97 222.89 123.44 223.78 123.44 223.58 124.97 222.69"
          />
          <polygon
            class="cls-96"
            points="124.8 222.6 124.97 222.69 123.44 223.58 123.27 223.48 124.8 222.6"
          />
          <polygon
            class="cls-95"
            points="123.27 223.48 123.44 223.58 123.44 223.78 123.27 223.68 123.27 223.48"
          />
          <polygon
            class="cls-102"
            points="124.84 222.62 124.92 222.66 123.56 223.46 123.48 223.41 124.84 222.62"
          />
          <polygon
            class="cls-103"
            points="123.61 223.44 124.92 222.66 124.92 218.15 123.39 219.04 123.61 223.44"
          />
          <polygon
            class="cls-103"
            points="123.39 219.04 124.92 218.15 124.84 218.1 123.31 218.99 123.39 219.04"
          />
          <polygon
            class="cls-96"
            points="123.44 223.78 123.61 223.68 123.61 218.96 123.44 219.06 123.44 223.78"
          />
          <polygon
            class="cls-95"
            points="123.27 223.68 123.44 223.78 123.44 219.06 123.27 218.96 123.27 223.68"
          />
          <polygon
            class="cls-96"
            points="123.27 218.96 123.44 219.06 123.61 218.96 123.44 218.86 123.27 218.96"
          />
          <polygon
            class="cls-96"
            points="123.27 223.87 123.44 223.78 123.44 219.06 123.27 219.16 123.27 223.87"
          />
          <polygon
            class="cls-95"
            points="123.1 223.78 123.27 223.87 123.27 219.16 123.1 219.06 123.1 223.78"
          />
          <polygon
            class="cls-96"
            points="123.1 219.06 123.27 219.16 123.44 219.06 123.27 218.96 123.1 219.06"
          />
          <polygon
            class="cls-102"
            points="123.14 223.8 123.22 223.85 123.22 219.13 123.14 219.09 123.14 223.8"
          />
          <polygon
            class="cls-96"
            points="123.27 223.68 123.27 223.87 122.08 224.56 122.08 224.36 123.27 223.68"
          />
          <polygon
            class="cls-96"
            points="123.1 223.58 123.27 223.68 122.08 224.36 121.91 224.27 123.1 223.58"
          />
          <polygon
            class="cls-95"
            points="121.91 224.27 122.08 224.36 122.08 224.56 121.91 224.46 121.91 224.27"
          />
          <polygon
            class="cls-102"
            points="123.14 223.6 123.22 223.65 122.2 224.25 122.12 224.2 123.14 223.6"
          />
          <polygon
            class="cls-103"
            points="122.25 224.22 123.22 223.65 123.22 219.13 122.03 219.82 122.25 224.22"
          />
          <polygon
            class="cls-103"
            points="122.03 219.82 123.22 219.13 123.14 219.09 121.95 219.77 122.03 219.82"
          />
          <polygon
            class="cls-96"
            points="122.08 224.56 122.25 224.46 122.25 219.75 122.08 219.85 122.08 224.56"
          />
          <polygon
            class="cls-95"
            points="121.91 224.46 122.08 224.56 122.08 219.85 121.91 219.75 121.91 224.46"
          />
          <polygon
            class="cls-96"
            points="121.91 219.75 122.08 219.85 122.25 219.75 122.08 219.65 121.91 219.75"
          />
          <polygon
            class="cls-96"
            points="121.91 224.66 122.08 224.56 122.08 219.85 121.91 219.94 121.91 224.66"
          />
          <polygon
            class="cls-95"
            points="121.73 224.56 121.91 224.66 121.91 219.94 121.73 219.85 121.73 224.56"
          />
          <polygon
            class="cls-96"
            points="121.73 219.85 121.91 219.94 122.08 219.85 121.91 219.75 121.73 219.85"
          />
          <polygon
            class="cls-102"
            points="121.78 224.59 121.86 224.63 121.86 219.92 121.78 219.87 121.78 224.59"
          />
          <polygon
            class="cls-96"
            points="121.91 224.46 121.91 224.66 120.37 225.54 120.37 225.35 121.91 224.46"
          />
          <polyline
            class="cls-96"
            points="120.37 225.15 121.73 224.36 121.91 224.46 120.37 225.35"
          />
          <polygon
            class="cls-102"
            points="121.78 224.38 121.86 224.43 120.5 225.23 120.42 225.18 121.78 224.38"
          />
          <polygon
            class="cls-103"
            points="120.54 225.21 121.86 224.43 121.86 219.92 120.33 220.8 120.54 225.21"
          />
          <polygon
            class="cls-103"
            points="120.33 220.8 121.86 219.92 121.78 219.87 120.25 220.75 120.33 220.8"
          />
          <polygon
            class="cls-96"
            points="120.37 225.54 120.54 225.44 120.54 220.73 120.37 220.83 120.37 225.54"
          />
          <polygon
            class="cls-104"
            points="123.35 222.2 123.39 222.17 123.42 222.18 123.37 222.21 123.35 222.2"
          />
          <polygon
            class="cls-105"
            points="123.39 221.77 123.44 221.75 123.44 222.22 123.39 222.25 123.39 221.77"
          />
          <polygon
            class="cls-104"
            points="123.37 221.76 123.39 221.77 123.44 221.75 123.42 221.73 123.37 221.76"
          />
          <polygon
            class="cls-106"
            points="123.39 221.77 123.39 222.25 123.37 222.24 123.35 222.22 123.35 222.2 123.37 222.21 123.37 221.76 123.39 221.77"
          />
          <polygon
            class="cls-96"
            points="123.16 216.86 123.25 216.81 123.25 214.47 123.16 214.52 123.16 216.86"
          />
          <polygon
            class="cls-95"
            points="123.08 216.91 123.16 216.86 123.16 214.6 123.08 214.55 123.08 216.91"
          />
          <polygon
            class="cls-102"
            points="123.1 216.82 123.14 216.85 123.14 214.59 123.1 214.56 123.1 216.82"
          />
          <polygon
            class="cls-96"
            points="123.16 216.76 123.16 216.86 122.22 217.4 122.22 217.3 123.16 216.76"
          />
          <polygon
            class="cls-96"
            points="123.08 216.71 123.16 216.76 122.22 217.3 122.22 217.2 123.08 216.71"
          />
          <polygon
            class="cls-102"
            points="123.1 216.72 123.14 216.75 122.29 217.24 122.25 217.22 123.1 216.72"
          />
          <polygon
            class="cls-103"
            points="122.31 217.23 123.14 216.75 123.14 214.59 122.28 215.01 122.31 217.23"
          />
          <polygon
            class="cls-96"
            points="122.22 217.4 122.31 217.35 122.31 214.99 122.22 215.04 122.22 217.4"
          />
          <polygon
            class="cls-96"
            points="123.25 214.45 123.25 214.55 122.31 215.09 122.31 214.99 123.25 214.45"
          />
          <polygon
            class="cls-96"
            points="123.16 211.36 123.24 211.31 123.24 208.97 123.16 209.02 123.16 211.36"
          />
          <polygon
            class="cls-95"
            points="123.07 211.41 123.16 211.36 123.16 209.1 123.07 209.05 123.07 211.41"
          />
          <polygon
            class="cls-102"
            points="123.1 211.32 123.14 211.35 123.14 209.09 123.1 209.06 123.1 211.32"
          />
          <polygon
            class="cls-96"
            points="123.16 211.26 123.16 211.36 122.22 211.9 122.22 211.8 123.16 211.26"
          />
          <polygon
            class="cls-96"
            points="123.07 211.21 123.16 211.26 122.22 211.8 122.22 211.7 123.07 211.21"
          />
          <polygon
            class="cls-102"
            points="123.1 211.22 123.14 211.25 122.29 211.74 122.25 211.72 123.1 211.22"
          />
          <polygon
            class="cls-103"
            points="122.31 211.73 123.14 211.25 123.14 209.09 122.28 209.51 122.31 211.73"
          />
          <polygon
            class="cls-96"
            points="122.22 211.9 122.31 211.85 122.31 209.49 122.22 209.54 122.22 211.9"
          />
          <polygon
            class="cls-96"
            points="123.24 208.95 123.24 209.05 122.31 209.59 122.31 209.49 123.24 208.95"
          />
          <polygon
            class="cls-96"
            points="123.16 205.86 123.25 205.81 123.25 203.47 123.16 203.52 123.16 205.86"
          />
          <polygon
            class="cls-95"
            points="123.08 205.91 123.16 205.86 123.16 203.6 123.08 203.55 123.08 205.91"
          />
          <polygon
            class="cls-102"
            points="123.1 205.82 123.14 205.85 123.14 203.59 123.1 203.56 123.1 205.82"
          />
          <polygon
            class="cls-96"
            points="123.16 205.76 123.16 205.86 122.22 206.4 122.22 206.3 123.16 205.76"
          />
          <polygon
            class="cls-96"
            points="123.08 205.71 123.16 205.76 122.22 206.3 122.22 206.2 123.08 205.71"
          />
          <polygon
            class="cls-102"
            points="123.1 205.72 123.14 205.75 122.29 206.24 122.25 206.22 123.1 205.72"
          />
          <polygon
            class="cls-103"
            points="122.31 206.23 123.14 205.75 123.14 203.59 122.28 204.01 122.31 206.23"
          />
          <polygon
            class="cls-96"
            points="122.22 206.4 122.31 206.35 122.31 203.99 122.22 204.04 122.22 206.4"
          />
          <polygon
            class="cls-96"
            points="123.25 203.45 123.25 203.55 122.31 204.09 122.31 203.99 123.25 203.45"
          />
          <polygon
            class="cls-96"
            points="123.16 200.36 123.25 200.31 123.25 197.97 123.16 198.02 123.16 200.36"
          />
          <polygon
            class="cls-95"
            points="123.08 200.41 123.16 200.36 123.16 198.1 123.08 198.05 123.08 200.41"
          />
          <polygon
            class="cls-102"
            points="123.1 200.32 123.14 200.35 123.14 198.09 123.1 198.06 123.1 200.32"
          />
          <polygon
            class="cls-96"
            points="123.16 200.26 123.16 200.36 122.22 200.9 122.22 200.8 123.16 200.26"
          />
          <polygon
            class="cls-96"
            points="123.08 200.21 123.16 200.26 122.22 200.8 122.22 200.7 123.08 200.21"
          />
          <polygon
            class="cls-102"
            points="123.1 200.22 123.14 200.25 122.29 200.74 122.25 200.72 123.1 200.22"
          />
          <polygon
            class="cls-103"
            points="122.31 200.73 123.14 200.25 123.14 198.09 122.28 198.51 122.31 200.73"
          />
          <polygon
            class="cls-96"
            points="122.22 200.9 122.31 200.85 122.31 198.49 122.22 198.54 122.22 200.9"
          />
          <polygon
            class="cls-96"
            points="123.25 197.95 123.25 198.05 122.31 198.59 122.31 198.49 123.25 197.95"
          />
          <polygon
            class="cls-96"
            points="123.16 194.86 123.25 194.81 123.25 192.47 123.16 192.52 123.16 194.86"
          />
          <polygon
            class="cls-95"
            points="123.08 194.91 123.16 194.86 123.16 192.6 123.08 192.55 123.08 194.91"
          />
          <polygon
            class="cls-102"
            points="123.1 194.82 123.14 194.85 123.14 192.59 123.1 192.56 123.1 194.82"
          />
          <polygon
            class="cls-96"
            points="123.16 194.76 123.16 194.86 122.22 195.4 122.22 195.3 123.16 194.76"
          />
          <polygon
            class="cls-96"
            points="123.08 194.71 123.16 194.76 122.22 195.3 122.22 195.2 123.08 194.71"
          />
          <polygon
            class="cls-102"
            points="123.1 194.72 123.14 194.75 122.29 195.24 122.25 195.22 123.1 194.72"
          />
          <polygon
            class="cls-103"
            points="122.31 195.23 123.14 194.75 123.14 192.59 122.28 193.01 122.31 195.23"
          />
          <polygon
            class="cls-96"
            points="122.22 195.4 122.31 195.35 122.31 192.99 122.22 193.04 122.22 195.4"
          />
          <polygon
            class="cls-96"
            points="123.25 192.45 123.25 192.55 122.31 193.09 122.31 192.99 123.25 192.45"
          />
          <polygon
            class="cls-96"
            points="123.16 189.36 123.25 189.31 123.25 186.97 123.16 187.02 123.16 189.36"
          />
          <polygon
            class="cls-95"
            points="123.08 189.41 123.16 189.36 123.16 187.1 123.08 187.05 123.08 189.41"
          />
          <polygon
            class="cls-102"
            points="123.1 189.32 123.14 189.35 123.14 187.09 123.1 187.06 123.1 189.32"
          />
          <polygon
            class="cls-96"
            points="123.16 189.26 123.16 189.36 122.22 189.9 122.22 189.8 123.16 189.26"
          />
          <polygon
            class="cls-96"
            points="123.08 189.21 123.16 189.26 122.22 189.8 122.22 189.7 123.08 189.21"
          />
          <polygon
            class="cls-102"
            points="123.1 189.22 123.14 189.25 122.29 189.74 122.25 189.72 123.1 189.22"
          />
          <polygon
            class="cls-103"
            points="122.31 189.73 123.14 189.25 123.14 187.09 122.28 187.51 122.31 189.73"
          />
          <polygon
            class="cls-96"
            points="122.22 189.9 122.31 189.85 122.31 187.49 122.22 187.54 122.22 189.9"
          />
          <polygon
            class="cls-96"
            points="123.25 186.95 123.25 187.05 122.31 187.59 122.31 187.49 123.25 186.95"
          />
          <polygon
            class="cls-96"
            points="123.16 183.86 123.25 183.81 123.25 181.47 123.16 181.52 123.16 183.86"
          />
          <polygon
            class="cls-95"
            points="123.08 183.91 123.16 183.86 123.16 181.6 123.08 181.55 123.08 183.91"
          />
          <polygon
            class="cls-102"
            points="123.1 183.82 123.14 183.85 123.14 181.59 123.1 181.56 123.1 183.82"
          />
          <polygon
            class="cls-96"
            points="123.16 183.76 123.16 183.86 122.22 184.4 122.22 184.3 123.16 183.76"
          />
          <polygon
            class="cls-96"
            points="123.08 183.71 123.16 183.76 122.22 184.3 122.22 184.2 123.08 183.71"
          />
          <polygon
            class="cls-102"
            points="123.1 183.72 123.14 183.75 122.29 184.24 122.25 184.22 123.1 183.72"
          />
          <polygon
            class="cls-103"
            points="122.31 184.23 123.14 183.75 123.14 181.59 122.28 182.01 122.31 184.23"
          />
          <polygon
            class="cls-96"
            points="122.22 184.4 122.31 184.35 122.31 181.99 122.22 182.04 122.22 184.4"
          />
          <polygon
            class="cls-96"
            points="123.25 181.45 123.25 181.55 122.31 182.09 122.31 181.99 123.25 181.45"
          />
          <polygon
            class="cls-95"
            points="120.3 220.75 125.75 217.61 125.75 216.83 120.3 219.98 120.3 220.75"
          />
          <polygon
            class="cls-3"
            points="87.84 213.47 90.36 214.87 90.36 214.48 86.35 212.2 86.35 215.73 85.25 216.24 87.88 216.45 87.84 213.47"
          />
          <polygon
            class="cls-3"
            points="109.42 225.87 111.53 227.1 111.53 226.7 107.99 224.65 108 227.97 106.69 228.62 109.42 228.62 109.42 225.87"
          />
          <polygon
            class="cls-108"
            points="121.67 226.26 112.14 231.76 112.14 184.98 121.67 179.47 121.67 226.26"
          />
          <polygon
            class="cls-104"
            points="106.97 170.96 106.93 170.93 106.91 170.94 106.95 170.97 106.97 170.96"
          />
          <polygon
            class="cls-105"
            points="106.93 170.53 106.88 170.51 106.88 170.99 106.93 171.01 106.93 170.53"
          />
          <polygon
            class="cls-104"
            points="106.95 170.52 106.93 170.53 106.88 170.51 106.91 170.49 106.95 170.52"
          />
          <polygon
            class="cls-106"
            points="106.93 170.53 106.93 171.01 106.95 171 106.97 170.99 106.97 170.96 106.95 170.97 106.95 170.52 106.93 170.53"
          />
          <polygon
            class="cls-96"
            points="114.18 172.44 97.85 163.02 97.85 161.84 114.18 171.27 114.18 172.44"
          />
          <polygon
            class="cls-108"
            points="114.18 172.44 114.18 171.27 127.11 163.8 127.11 164.98 114.18 172.44"
          />
          <polygon
            class="cls-37"
            points="114.18 170.87 97.85 161.44 110.78 153.98 127.11 163.41 114.18 170.87"
          />
          <polygon
            class="cls-96"
            points="123.39 163.74 110.78 156.46 101.57 161.78 114.18 169.06 123.39 163.74"
          />
          <polygon
            class="cls-62"
            points="97.85 161.83 114.18 171.26 114.18 170.87 97.85 161.44 97.85 161.83"
          />
          <polygon
            class="cls-62"
            points="127.11 163.41 114.18 170.87 114.18 171.26 127.11 163.8 127.11 163.41"
          />
          <polygon
            class="cls-62"
            points="110.78 155.79 110.78 156.46 123.39 163.74 123.97 163.41 110.78 155.79"
          />
          <polygon
            class="cls-62"
            points="100.99 161.44 101.57 161.78 110.78 156.46 110.78 155.79 100.99 161.44"
          />
          <polygon
            class="cls-3"
            points="101.57 161.78 102.15 162.11 111.36 156.79 110.78 155.79 110.78 156.46 101.57 161.78"
          />
          <ellipse class="cls-57" cx="80.02" cy="216.93" rx="3.43" ry="1.84" />
          <path
            class="cls-58"
            d="M80,217.14h0a.34.34,0,0,1-.34-.33V212.1a.34.34,0,0,1,.34-.34h0a.34.34,0,0,1,.33.34v4.71A.33.33,0,0,1,80,217.14Z"
          />
          <path
            class="cls-59"
            d="M83,207.53a4.91,4.91,0,0,0,0-.55,3.94,3.94,0,0,0-.69-2.25,3.19,3.19,0,0,0,.09-.77,2.49,2.49,0,1,0-4.93,0,3.19,3.19,0,0,0,.09.77A3.94,3.94,0,0,0,77,207a4.91,4.91,0,0,0,0,.55A3.28,3.28,0,0,0,75.77,210c0,2,1.9,3.56,4.25,3.56S84.26,212,84.26,210A3.28,3.28,0,0,0,83,207.53Z"
          />
          <path
            class="cls-60"
            d="M83,207.53a4.91,4.91,0,0,0,0-.55,3.94,3.94,0,0,0-.69-2.25,3.19,3.19,0,0,0,.09-.77A2.91,2.91,0,0,0,81,201.31c-.94,5.9,1.79,8.57-2.32,12.08a5.11,5.11,0,0,0,1.38.19c2.34,0,4.24-1.59,4.24-3.56A3.28,3.28,0,0,0,83,207.53Z"
          />
          <ellipse class="cls-57" cx="123.61" cy="231.76" rx="3.43" ry="1.84" />
          <path
            class="cls-58"
            d="M123.61,232h0a.34.34,0,0,1-.34-.33v-4.71a.34.34,0,0,1,.34-.33h0a.33.33,0,0,1,.33.33v4.71A.33.33,0,0,1,123.61,232Z"
          />
          <path
            class="cls-59"
            d="M126.63,222.36a3.31,3.31,0,0,0,0-.55,3.89,3.89,0,0,0-.69-2.24,3.33,3.33,0,0,0,.09-.78,2.49,2.49,0,1,0-4.93,0,3.33,3.33,0,0,0,.09.78,3.89,3.89,0,0,0-.69,2.24,4.91,4.91,0,0,0,0,.55,3.29,3.29,0,0,0-1.22,2.5c0,2,1.9,3.55,4.25,3.55s4.24-1.59,4.24-3.55A3.29,3.29,0,0,0,126.63,222.36Z"
          />
          <path
            class="cls-60"
            d="M126.63,222.36a3.31,3.31,0,0,0,0-.55,3.89,3.89,0,0,0-.69-2.24,3.33,3.33,0,0,0,.09-.78,2.9,2.9,0,0,0-1.52-2.64c-.94,5.89,1.79,8.57-2.32,12.07a4.75,4.75,0,0,0,1.38.19c2.34,0,4.24-1.59,4.24-3.55A3.29,3.29,0,0,0,126.63,222.36Z"
          />
          <ellipse class="cls-57" cx="141.49" cy="216.06" rx="3.43" ry="1.84" />
          <path
            class="cls-58"
            d="M141.49,216.27h0a.34.34,0,0,1-.34-.33v-4.71a.34.34,0,0,1,.34-.33h0a.33.33,0,0,1,.33.33v4.71A.33.33,0,0,1,141.49,216.27Z"
          />
          <path
            class="cls-59"
            d="M144.51,206.66a3.31,3.31,0,0,0,0-.55,3.89,3.89,0,0,0-.69-2.24,3.33,3.33,0,0,0,.09-.78,2.49,2.49,0,1,0-4.93,0,3.33,3.33,0,0,0,.09.78,3.88,3.88,0,0,0-.68,2.24,4.93,4.93,0,0,0,0,.55,3.29,3.29,0,0,0-1.22,2.5c0,2,1.9,3.55,4.25,3.55s4.24-1.59,4.24-3.55A3.26,3.26,0,0,0,144.51,206.66Z"
          />
          <path
            class="cls-60"
            d="M144.51,206.66a3.31,3.31,0,0,0,0-.55,3.89,3.89,0,0,0-.69-2.24,3.33,3.33,0,0,0,.09-.78,2.88,2.88,0,0,0-1.52-2.64c-.94,5.89,1.8,8.57-2.32,12.07a4.79,4.79,0,0,0,1.38.19c2.34,0,4.24-1.59,4.24-3.55A3.26,3.26,0,0,0,144.51,206.66Z"
          />
          <path
            class="cls-53"
            d="M288.55,170.84c-6.9,2.37-23.43,8.45-31.8,11.54a8.18,8.18,0,0,0-5.33,7.22l-1.27,23.16a8.17,8.17,0,0,0,6.53,8.45l49.4,10.09a8.19,8.19,0,0,0,5.79-1l27.82-16.42a26.45,26.45,0,0,0,8.22-8.35c1.35-2.18,2.28-3.7,2.46-5.26,1.4-12.61-46.76-25.51-55.92-29.21C294,170.91,292.4,169.52,288.55,170.84Z"
          />
          <path
            class="cls-192"
            d="M288.55,170.83c-6.9,2.37-23.44,8.45-31.8,11.54a8.17,8.17,0,0,0-5.33,7.22l-1.27,23.16a8.17,8.17,0,0,0,6.53,8.45l49.4,10.09a8.19,8.19,0,0,0,5.79-1l27.82-16.42a26.56,26.56,0,0,0,8.22-8.35c1.35-2.19,2.28-3.7,2.46-5.27,1.39-12.61-46.77-25.5-55.92-29.2C294,170.89,292.39,169.51,288.55,170.83Z"
          />
          <polygon
            class="cls-108"
            points="262.27 191.19 262.27 179.03 258.76 181.05 258.76 180.04 272.8 160.79 286.84 163.83 286.84 164.84 283.33 166.87 283.33 179.03 262.27 191.19"
          />
          <polygon
            class="cls-108"
            points="264.03 192.2 264.03 180.04 260.52 182.07 260.52 181.05 274.56 161.81 288.6 164.84 288.6 165.86 285.09 167.88 285.08 180.04 264.03 192.2"
          />
          <polygon
            class="cls-96"
            points="288.44 164.84 274.4 161.8 272.65 160.79 286.69 163.83 288.44 164.84"
          />
          <polygon
            class="cls-96"
            points="274.56 161.8 272.81 160.79 258.76 180.04 260.52 181.06 274.56 161.8"
          />
          <polygon
            class="cls-193"
            points="279.82 205.44 279.82 205.54 280.92 206.18 281.01 206.12 279.82 205.44"
          />
          <polygon
            class="cls-96"
            points="262.28 180.05 262.28 190.17 273.68 196.76 273.68 185.61 262.28 180.05"
          />
          <polygon
            class="cls-194"
            points="270.17 198.78 258.77 192.2 262.28 190.17 273.68 196.76 270.17 198.78"
          />
          <polygon
            class="cls-96"
            points="258.77 192.2 258.77 193.21 270.17 199.79 270.17 198.78 258.77 192.2"
          />
          <path class="cls-195" d="M264.31,188V183.4l4,2.29v4.58Z" />
          <polygon
            class="cls-196"
            points="264.23 183.29 264.23 188.04 268.35 190.42 268.35 185.66 264.23 183.29"
          />
          <path
            class="cls-37"
            d="M268.42,185.61,264,183.08v5.06l4.39,2.54Zm-4.25,2.46v-4.76l4.11,2.38v4.75Z"
          />
          <polygon
            class="cls-103"
            points="264.17 183.31 264.17 188.07 268.28 190.44 268.28 185.69 264.17 183.31"
          />
          <polygon
            class="cls-62"
            points="264.31 187.98 264.17 188.07 264.17 183.31 264.31 183.4 264.31 187.98"
          />
          <polygon
            class="cls-62"
            points="264.17 188.07 264.31 187.98 268.28 190.28 268.28 190.44 264.17 188.07"
          />
          <polygon
            class="cls-3"
            points="264.46 188.07 264.17 188.07 264.31 187.98 264.31 183.4 264.46 183.48 264.46 188.07"
          />
          <polygon
            class="cls-76"
            points="272.81 188.15 269.3 186.12 269.3 194.22 272.81 196.25 272.81 188.15"
          />
          <polygon
            class="cls-188"
            points="272.7 188.21 269.4 186.31 269.4 194.28 269.46 194.32 269.46 194.28 269.46 186.4 272.64 188.24 272.64 196.13 272.64 196.16 272.7 196.19 272.7 188.21"
          />
          <polygon
            class="cls-3"
            points="271.49 194.48 270.61 193.97 270.61 187.89 271.49 188.4 271.49 194.48"
          />
          <polygon
            class="cls-197"
            points="271.49 194.48 270.61 193.97 270.61 187.89 271.49 188.4 271.49 194.48"
          />
          <polygon
            class="cls-198"
            points="270.7 187.94 270.61 187.89 270.61 193.97 270.7 193.92 270.7 187.94"
          />
          <polygon
            class="cls-199"
            points="270.7 193.92 270.61 193.97 271.49 194.48 271.49 194.38 270.7 193.92"
          />
          <polygon
            class="cls-3"
            points="270.7 187.94 270.7 193.92 270.61 193.97 270.79 193.97 270.79 188.08 271.49 188.48 271.49 188.4 270.7 187.94"
          />
          <polygon
            class="cls-3"
            points="269.75 190.84 269.73 190.79 269.65 190.75 269.65 190.79 269.69 190.85 269.69 191.92 269.65 191.9 269.65 191.94 269.69 192 269.73 192.07 269.75 192.09 269.75 190.84"
          />
          <polygon
            class="cls-194"
            points="269.73 191.94 269.66 191.9 269.62 191.92 269.69 191.96 269.73 191.94"
          />
          <polygon
            class="cls-96"
            points="269.65 190.83 269.58 190.79 269.58 191.99 269.65 192.03 269.65 190.83"
          />
          <polygon
            class="cls-194"
            points="269.66 190.75 269.73 190.79 269.69 190.81 269.65 190.83 269.58 190.79 269.62 190.77 269.66 190.75"
          />
          <polygon
            class="cls-108"
            points="269.65 190.83 269.65 192.03 269.69 192.01 269.73 191.99 269.73 191.94 269.69 191.96 269.69 190.85 269.73 190.83 269.73 190.79 269.69 190.81 269.65 190.83"
          />
          <polygon
            class="cls-3"
            points="273.61 184.3 262.27 181.06 264.91 187.64 264.91 187.64 264.91 191.69 259.64 191.69 258.77 192.2 258.77 192.2 258.77 192.2 259.64 192.7 266.67 192.7 266.66 188.65 271.08 191.2 273.61 184.3"
          />
          <polygon
            class="cls-96"
            points="261.4 192.7 261.4 193.21 268.86 197.51 269.3 197.26 261.4 192.7"
          />
          <polygon
            class="cls-108"
            points="260.52 194.22 261.4 193.72 261.4 192.7 260.52 193.21 260.52 194.22"
          />
          <polygon
            class="cls-194"
            points="261.4 193.21 260.96 193.46 268.42 197.77 268.86 197.51 261.4 193.21"
          />
          <polygon
            class="cls-194"
            points="260.96 193.97 260.52 194.22 268.42 198.78 268.42 198.28 260.96 193.97"
          />
          <polygon
            class="cls-96"
            points="260.96 193.46 260.96 193.97 268.42 198.28 268.42 197.77 260.96 193.46"
          />
          <polygon
            class="cls-3"
            points="260.52 194.22 261.4 194.22 261.4 193.72 261.84 193.46 261.4 192.7 261.4 193.21 260.96 193.46 260.96 193.97 260.52 194.22"
          />
          <polygon
            class="cls-96"
            points="259.64 181.56 258.77 181.05 258.77 192.2 259.64 192.7 259.64 181.56"
          />
          <polygon
            class="cls-108"
            points="260.52 181.05 259.64 181.56 259.64 192.7 260.52 192.2 260.52 181.05"
          />
          <polygon
            class="cls-67"
            points="260.52 182.07 281.58 194.22 295.62 174.97 274.56 162.82 260.52 182.07"
          />
          <polygon
            class="cls-37"
            points="274.56 162.82 295.62 174.97 309.66 178.01 288.6 165.86 274.56 162.82"
          />
          <polygon
            class="cls-96"
            points="270.17 189.66 258.77 183.08 258.76 180.04 260.52 181.05 260.52 182.07 270.17 187.64 270.17 189.66"
          />
          <polygon
            class="cls-108"
            points="273.68 191.65 271.93 189.66 271.93 200.81 273.68 199.8 273.68 191.65"
          />
          <polygon
            class="cls-200"
            points="280.99 204.58 272.81 199.85 272.81 200.3 280.99 205.03 280.99 204.58"
          />
          <polygon
            class="cls-201"
            points="281.06 204.54 272.88 199.81 272.81 199.85 280.99 204.58 281.06 204.54"
          />
          <polygon
            class="cls-202"
            points="281.1 204.51 272.92 199.79 272.81 199.85 272.88 199.85 281.03 204.56 281.1 204.51"
          />
          <polygon
            class="cls-200"
            points="280.99 204 272.81 199.28 272.81 199.73 280.99 204.46 280.99 204"
          />
          <polygon
            class="cls-201"
            points="281.06 203.96 272.88 199.24 272.81 199.28 280.99 204 281.06 203.96"
          />
          <polygon
            class="cls-202"
            points="281.1 203.94 272.92 199.21 272.81 199.28 272.88 199.28 281.03 203.98 281.1 203.94"
          />
          <polygon
            class="cls-200"
            points="280.99 203.43 272.81 198.7 272.81 199.15 280.99 203.88 280.99 203.43"
          />
          <polygon
            class="cls-201"
            points="281.06 203.39 272.88 198.66 272.81 198.7 280.99 203.43 281.06 203.39"
          />
          <polygon
            class="cls-202"
            points="281.1 203.37 272.92 198.64 272.81 198.7 272.88 198.7 281.03 203.41 281.1 203.37"
          />
          <polygon
            class="cls-200"
            points="280.99 202.86 272.81 198.13 272.81 198.58 280.99 203.31 280.99 202.86"
          />
          <polygon
            class="cls-201"
            points="281.06 202.81 272.88 198.09 272.81 198.13 280.99 202.86 281.06 202.81"
          />
          <polygon
            class="cls-202"
            points="281.1 202.79 272.92 198.06 272.81 198.13 272.88 198.13 281.03 202.83 281.1 202.79"
          />
          <polygon
            class="cls-200"
            points="280.99 202.28 272.81 197.56 272.81 198 280.99 202.73 280.99 202.28"
          />
          <polygon
            class="cls-201"
            points="281.06 202.24 272.88 197.51 272.81 197.56 280.99 202.28 281.06 202.24"
          />
          <polygon
            class="cls-202"
            points="281.1 202.22 272.92 197.49 272.81 197.56 272.88 197.56 281.03 202.26 281.1 202.22"
          />
          <polygon
            class="cls-200"
            points="280.99 201.71 272.81 196.98 272.81 197.43 280.99 202.16 280.99 201.71"
          />
          <polygon
            class="cls-201"
            points="281.06 201.67 272.88 196.94 272.81 196.98 280.99 201.71 281.06 201.67"
          />
          <polygon
            class="cls-202"
            points="281.1 201.65 272.92 196.92 272.81 196.98 272.88 196.98 281.03 201.69 281.1 201.65"
          />
          <polygon
            class="cls-200"
            points="280.99 201.13 272.81 196.41 272.81 196.86 280.99 201.59 280.99 201.13"
          />
          <polygon
            class="cls-201"
            points="281.06 201.09 272.88 196.37 272.81 196.41 280.99 201.13 281.06 201.09"
          />
          <polygon
            class="cls-202"
            points="281.1 201.07 272.92 196.34 272.81 196.41 272.88 196.41 281.03 201.11 281.1 201.07"
          />
          <polygon
            class="cls-200"
            points="280.99 200.56 272.81 195.83 272.81 196.28 280.99 201.01 280.99 200.56"
          />
          <polygon
            class="cls-201"
            points="281.06 200.52 272.88 195.79 272.81 195.83 280.99 200.56 281.06 200.52"
          />
          <polygon
            class="cls-202"
            points="281.1 200.5 272.92 195.77 272.81 195.83 272.88 195.83 281.03 200.54 281.1 200.5"
          />
          <polygon
            class="cls-200"
            points="280.99 199.99 272.81 195.26 272.81 195.71 280.99 200.44 280.99 199.99"
          />
          <polygon
            class="cls-201"
            points="281.06 199.94 272.88 195.22 272.81 195.26 280.99 199.99 281.06 199.94"
          />
          <polygon
            class="cls-202"
            points="281.1 199.92 272.92 195.2 272.81 195.26 272.88 195.26 281.03 199.97 281.1 199.92"
          />
          <polygon
            class="cls-200"
            points="280.99 199.41 272.81 194.69 272.81 195.14 280.99 199.86 280.99 199.41"
          />
          <polygon
            class="cls-201"
            points="281.06 199.37 272.88 194.65 272.81 194.69 280.99 199.41 281.06 199.37"
          />
          <polygon
            class="cls-202"
            points="281.1 199.35 272.92 194.62 272.81 194.69 272.88 194.69 281.03 199.39 281.1 199.35"
          />
          <polygon
            class="cls-200"
            points="280.99 198.84 272.81 194.11 272.81 194.56 280.99 199.29 280.99 198.84"
          />
          <polygon
            class="cls-201"
            points="281.06 198.8 272.88 194.07 272.81 194.11 280.99 198.84 281.06 198.8"
          />
          <polygon
            class="cls-202"
            points="281.1 198.78 272.92 194.05 272.81 194.11 272.88 194.11 281.03 198.82 281.1 198.78"
          />
          <polygon
            class="cls-200"
            points="280.99 198.27 272.81 193.54 272.81 193.99 280.99 198.72 280.99 198.27"
          />
          <polygon
            class="cls-201"
            points="281.06 198.22 272.88 193.5 272.81 193.54 280.99 198.27 281.06 198.22"
          />
          <polygon
            class="cls-202"
            points="281.1 198.2 272.92 193.47 272.81 193.54 272.88 193.54 281.03 198.24 281.1 198.2"
          />
          <polygon
            class="cls-200"
            points="280.99 197.69 272.81 192.97 272.81 193.41 280.99 198.14 280.99 197.69"
          />
          <polygon
            class="cls-201"
            points="281.06 197.65 272.88 192.92 272.81 192.97 280.99 197.69 281.06 197.65"
          />
          <polygon
            class="cls-202"
            points="281.1 197.63 272.92 192.9 272.81 192.97 272.88 192.97 281.03 197.67 281.1 197.63"
          />
          <polygon
            class="cls-200"
            points="280.99 197.12 272.81 192.39 272.81 192.84 280.99 197.57 280.99 197.12"
          />
          <polygon
            class="cls-201"
            points="281.06 197.08 272.88 192.35 272.81 192.39 280.99 197.12 281.06 197.08"
          />
          <polygon
            class="cls-202"
            points="281.1 197.05 272.92 192.33 272.81 192.39 272.88 192.39 281.03 197.09 281.1 197.05"
          />
          <polygon
            class="cls-200"
            points="280.99 196.54 272.81 191.82 272.81 192.27 280.99 197 280.99 196.54"
          />
          <polygon
            class="cls-201"
            points="281.06 196.5 272.88 191.78 272.81 191.82 280.99 196.54 281.06 196.5"
          />
          <polygon
            class="cls-202"
            points="281.1 196.48 272.92 191.75 272.81 191.82 272.88 191.82 281.03 196.52 281.1 196.48"
          />
          <polygon
            class="cls-200"
            points="280.99 195.97 272.81 191.24 272.81 191.69 280.99 196.42 280.99 195.97"
          />
          <polygon
            class="cls-201"
            points="281.06 195.93 272.88 191.2 272.81 191.24 280.99 195.97 281.06 195.93"
          />
          <polygon
            class="cls-202"
            points="281.1 195.91 272.92 191.18 272.81 191.24 272.88 191.24 281.03 195.95 281.1 195.91"
          />
          <polygon
            class="cls-96"
            points="281.58 194.23 270.17 187.64 270.17 199.79 271.93 200.81 271.93 192.71 279.83 197.26 279.83 205.37 281.58 206.38 281.58 194.23"
          />
          <polygon
            class="cls-67"
            points="281.58 195.24 260.52 183.08 260.52 182.07 281.58 194.22 281.58 195.24"
          />
          <polygon
            class="cls-96"
            points="271.93 213.98 271.93 209.93 270.18 208.91 270.17 212.97 271.93 213.98"
          />
          <polygon
            class="cls-3"
            points="286.84 202.33 292.99 205.84 292.99 204.86 285.97 200.81 285.97 207.9 286.85 208.41 286.84 202.33"
          />
          <polygon
            class="cls-3"
            points="273.67 194.74 279.82 198.25 279.82 197.26 272.81 193.21 272.81 200.3 271.93 200.81 273.68 200.81 273.67 194.74"
          />
          <polygon
            class="cls-3"
            points="275.44 163.32 274.56 162.82 260.52 182.07 262.68 180.82 275.44 163.32"
          />
          <polygon
            class="cls-3"
            points="289.48 166.36 275.44 163.32 274.56 162.82 288.6 165.86 289.48 166.36"
          />
          <polygon
            class="cls-62"
            points="276.21 163.65 262.18 182.9 262.29 182.97 276.32 163.72 276.21 163.65"
          />
          <polygon
            class="cls-62"
            points="276.32 163.72 262.29 182.97 262.29 183.09 276.32 163.84 276.32 163.72"
          />
          <polygon
            class="cls-62"
            points="262.29 183.09 262.18 183.02 262.18 182.9 262.29 182.97 262.29 183.09"
          />
          <polygon
            class="cls-203"
            points="276.32 163.84 262.29 183.09 262.35 183.12 276.39 163.87 276.32 163.84"
          />
          <polygon
            class="cls-62"
            points="277.98 164.67 263.94 183.92 264.05 183.98 278.09 164.74 277.98 164.67"
          />
          <polygon
            class="cls-62"
            points="278.09 164.74 264.05 183.98 264.05 184.1 278.09 164.85 278.09 164.74"
          />
          <polygon
            class="cls-62"
            points="264.05 184.1 263.94 184.04 263.94 183.92 264.05 183.98 264.05 184.1"
          />
          <polygon
            class="cls-203"
            points="278.09 164.85 264.05 184.1 264.11 184.14 278.15 164.89 278.09 164.85"
          />
          <polygon
            class="cls-62"
            points="279.74 165.69 265.7 184.94 265.81 185 279.85 165.75 279.74 165.69"
          />
          <polygon
            class="cls-62"
            points="279.85 165.75 265.81 185 265.81 185.12 279.85 165.87 279.85 165.75"
          />
          <polygon
            class="cls-62"
            points="265.81 185.12 265.7 185.06 265.7 184.94 265.81 185 265.81 185.12"
          />
          <polygon
            class="cls-203"
            points="279.85 165.87 265.81 185.12 265.88 185.16 279.92 165.91 279.85 165.87"
          />
          <polygon
            class="cls-62"
            points="281.51 166.71 267.47 185.96 267.58 186.02 281.62 166.77 281.51 166.71"
          />
          <polygon
            class="cls-62"
            points="281.62 166.77 267.58 186.02 267.58 186.14 281.62 166.89 281.62 166.77"
          />
          <polygon
            class="cls-62"
            points="267.58 186.14 267.47 186.07 267.47 185.95 267.58 186.02 267.58 186.14"
          />
          <polygon
            class="cls-203"
            points="281.62 166.89 267.58 186.14 267.64 186.18 281.68 166.93 281.62 166.89"
          />
          <polygon
            class="cls-62"
            points="283.27 167.73 269.23 186.97 269.34 187.04 283.38 167.79 283.27 167.73"
          />
          <polygon
            class="cls-62"
            points="283.38 167.79 269.34 187.04 269.34 187.16 283.38 167.91 283.38 167.79"
          />
          <polygon
            class="cls-62"
            points="269.34 187.16 269.23 187.09 269.23 186.97 269.34 187.04 269.34 187.16"
          />
          <polygon
            class="cls-203"
            points="283.38 167.91 269.34 187.16 269.4 187.2 283.44 167.95 283.38 167.91"
          />
          <polygon
            class="cls-62"
            points="285.04 168.75 271 187.99 271.11 188.06 285.14 168.81 285.04 168.75"
          />
          <polygon
            class="cls-62"
            points="285.14 168.81 271.11 188.06 271.11 188.18 285.14 168.93 285.14 168.81"
          />
          <polygon
            class="cls-62"
            points="271.11 188.18 271 188.11 271 187.99 271.11 188.06 271.11 188.18"
          />
          <polygon
            class="cls-203"
            points="285.14 168.93 271.11 188.18 271.17 188.21 285.21 168.97 285.14 168.93"
          />
          <polygon
            class="cls-62"
            points="286.8 169.76 272.76 189.01 272.87 189.08 286.91 169.83 286.8 169.76"
          />
          <polygon
            class="cls-62"
            points="286.91 169.83 272.87 189.08 272.87 189.2 286.91 169.95 286.91 169.83"
          />
          <polygon
            class="cls-62"
            points="272.87 189.2 272.76 189.13 272.76 189.01 272.87 189.08 272.87 189.2"
          />
          <polygon
            class="cls-203"
            points="286.91 169.95 272.87 189.2 272.93 189.23 286.97 169.98 286.91 169.95"
          />
          <polygon
            class="cls-62"
            points="288.56 170.78 274.52 190.03 274.63 190.09 288.67 170.85 288.56 170.78"
          />
          <polygon
            class="cls-62"
            points="288.67 170.85 274.63 190.09 274.63 190.22 288.67 170.97 288.67 170.85"
          />
          <polygon
            class="cls-62"
            points="274.63 190.22 274.52 190.15 274.52 190.03 274.63 190.09 274.63 190.22"
          />
          <polygon
            class="cls-203"
            points="288.67 170.97 274.63 190.22 274.7 190.25 288.74 171 288.67 170.97"
          />
          <polygon
            class="cls-62"
            points="290.33 171.8 276.29 191.05 276.4 191.11 290.44 171.87 290.33 171.8"
          />
          <polygon
            class="cls-62"
            points="290.44 171.87 276.4 191.11 276.4 191.23 290.44 171.99 290.44 171.87"
          />
          <polygon
            class="cls-62"
            points="276.4 191.23 276.29 191.17 276.29 191.05 276.4 191.11 276.4 191.23"
          />
          <polygon
            class="cls-203"
            points="290.44 171.99 276.4 191.23 276.46 191.27 290.5 172.02 290.44 171.99"
          />
          <polygon
            class="cls-62"
            points="292.09 172.82 278.05 192.07 278.16 192.13 292.2 172.88 292.09 172.82"
          />
          <polygon
            class="cls-62"
            points="292.2 172.88 278.16 192.13 278.16 192.25 292.2 173 292.2 172.88"
          />
          <polygon
            class="cls-62"
            points="278.16 192.25 278.05 192.19 278.05 192.07 278.16 192.13 278.16 192.25"
          />
          <polygon
            class="cls-203"
            points="292.2 173 278.16 192.25 278.22 192.29 292.26 173.04 292.2 173"
          />
          <polygon
            class="cls-62"
            points="293.86 173.84 279.82 193.09 279.93 193.15 293.97 173.9 293.86 173.84"
          />
          <polygon
            class="cls-62"
            points="293.97 173.9 279.93 193.15 279.93 193.27 293.97 174.02 293.97 173.9"
          />
          <polygon
            class="cls-62"
            points="279.93 193.27 279.82 193.21 279.82 193.09 279.93 193.15 279.93 193.27"
          />
          <polygon
            class="cls-203"
            points="293.97 174.02 279.93 193.27 279.99 193.31 294.03 174.06 293.97 174.02"
          />
          <polygon
            class="cls-62"
            points="290.24 166.69 276.21 163.65 276.32 163.72 290.36 166.76 290.24 166.69"
          />
          <polygon
            class="cls-62"
            points="290.36 166.76 276.32 163.72 276.32 163.84 290.36 166.88 290.36 166.76"
          />
          <polygon
            class="cls-203"
            points="290.36 166.88 276.32 163.84 276.39 163.87 290.42 166.91 290.36 166.88"
          />
          <polygon
            class="cls-62"
            points="292.01 167.71 277.98 164.67 278.09 164.74 292.12 167.78 292.01 167.71"
          />
          <polygon
            class="cls-62"
            points="292.12 167.78 278.09 164.74 278.09 164.85 292.12 167.9 292.12 167.78"
          />
          <polygon
            class="cls-203"
            points="292.12 167.89 278.09 164.85 278.15 164.89 292.19 167.93 292.12 167.89"
          />
          <polygon
            class="cls-62"
            points="293.77 168.73 279.74 165.69 279.85 165.75 293.89 168.79 293.77 168.73"
          />
          <polygon
            class="cls-62"
            points="293.89 168.79 279.85 165.75 279.85 165.87 293.89 168.91 293.89 168.79"
          />
          <polygon
            class="cls-203"
            points="293.89 168.91 279.85 165.87 279.92 165.91 293.95 168.95 293.89 168.91"
          />
          <polygon
            class="cls-62"
            points="295.54 169.75 281.51 166.71 281.62 166.77 295.65 169.81 295.54 169.75"
          />
          <polygon
            class="cls-62"
            points="295.65 169.81 281.62 166.77 281.62 166.89 295.65 169.93 295.65 169.81"
          />
          <polygon
            class="cls-203"
            points="295.65 169.93 281.62 166.89 281.68 166.93 295.71 169.97 295.65 169.93"
          />
          <polygon
            class="cls-62"
            points="297.3 170.77 283.27 167.73 283.38 167.79 297.42 170.83 297.3 170.77"
          />
          <polygon
            class="cls-62"
            points="297.42 170.83 283.38 167.79 283.38 167.91 297.42 170.95 297.42 170.83"
          />
          <polygon
            class="cls-203"
            points="297.41 170.95 283.38 167.91 283.44 167.94 297.48 170.99 297.41 170.95"
          />
          <polygon
            class="cls-62"
            points="299.06 171.79 285.04 168.75 285.14 168.81 299.18 171.85 299.06 171.79"
          />
          <polygon
            class="cls-62"
            points="299.18 171.85 285.14 168.81 285.14 168.93 299.18 171.97 299.18 171.85"
          />
          <polygon
            class="cls-203"
            points="299.18 171.97 285.14 168.93 285.21 168.96 299.24 172 299.18 171.97"
          />
          <polygon
            class="cls-62"
            points="300.83 172.81 286.8 169.76 286.91 169.83 300.94 172.87 300.83 172.81"
          />
          <polygon
            class="cls-62"
            points="300.94 172.87 286.91 169.83 286.91 169.95 300.94 172.99 300.94 172.87"
          />
          <polygon
            class="cls-203"
            points="300.94 172.99 286.91 169.95 286.97 169.98 301.01 173.02 300.94 172.99"
          />
          <polygon
            class="cls-62"
            points="302.59 173.82 288.56 170.78 288.67 170.85 302.71 173.89 302.59 173.82"
          />
          <polygon
            class="cls-62"
            points="302.71 173.89 288.67 170.85 288.67 170.97 302.71 174.01 302.71 173.89"
          />
          <polygon
            class="cls-203"
            points="302.71 174.01 288.67 170.97 288.74 171 302.77 174.04 302.71 174.01"
          />
          <polygon
            class="cls-62"
            points="304.36 174.84 290.33 171.8 290.44 171.87 304.47 174.91 304.36 174.84"
          />
          <polygon
            class="cls-62"
            points="304.47 174.91 290.44 171.87 290.44 171.99 304.47 175.03 304.47 174.91"
          />
          <polygon
            class="cls-203"
            points="304.47 175.03 290.44 171.98 290.5 172.02 304.53 175.06 304.47 175.03"
          />
          <polygon
            class="cls-62"
            points="306.12 175.86 292.09 172.82 292.2 172.88 306.24 175.92 306.12 175.86"
          />
          <polygon
            class="cls-62"
            points="306.24 175.92 292.2 172.88 292.2 173 306.24 176.04 306.24 175.92"
          />
          <polygon
            class="cls-203"
            points="306.24 176.04 292.2 173 292.26 173.04 306.3 176.08 306.24 176.04"
          />
          <polygon
            class="cls-62"
            points="307.89 176.88 293.86 173.84 293.97 173.9 308 176.94 307.89 176.88"
          />
          <polygon
            class="cls-62"
            points="308 176.94 293.97 173.9 293.97 174.02 308 177.06 308 176.94"
          />
          <polygon
            class="cls-203"
            points="308 177.06 293.97 174.02 294.03 174.06 308.06 177.1 308 177.06"
          />
          <polygon
            class="cls-67"
            points="291.89 171.79 291.89 171.88 293.7 172.93 293.7 172.83 291.89 171.79"
          />
          <polygon
            class="cls-62"
            points="293.7 172.83 293.7 172.93 296.63 173.42 296.63 173.32 293.7 172.83"
          />
          <polygon
            class="cls-37"
            points="296.63 173.32 293.7 172.83 291.89 171.79 294.87 172.31 296.63 173.32"
          />
          <polygon
            class="cls-204"
            points="293.72 172.78 292.19 171.89 294.85 172.36 296.34 173.22 293.72 172.78"
          />
          <polygon
            class="cls-205"
            points="292.19 170.6 294.8 169.05 296.33 169.93 293.72 171.48 292.19 170.6"
          />
          <polygon
            class="cls-96"
            points="293.72 172.78 292.19 171.89 292.19 170.6 293.72 171.48 293.72 172.78"
          />
          <polygon
            class="cls-108"
            points="296.34 173.22 293.72 172.78 293.72 171.48 296.33 169.93 296.34 173.22"
          />
          <polygon
            class="cls-62"
            points="293.72 171.16 296.38 169.58 296.38 169.93 293.72 171.51 293.72 171.16"
          />
          <polygon
            class="cls-67"
            points="292.13 170.25 294.8 168.66 296.38 169.58 293.72 171.16 292.13 170.25"
          />
          <polygon
            class="cls-206"
            points="292.94 170.24 294.8 169.13 295.58 169.58 293.72 170.69 292.94 170.24"
          />
          <polygon
            class="cls-67"
            points="292.13 170.25 292.13 170.6 293.72 171.51 293.72 171.16 292.13 170.25"
          />
          <g class="cls-207">
            <polygon
              class="cls-3"
              points="293.72 171.51 293.72 171.57 296.33 170.02 296.33 169.96 293.72 171.51"
            />
            <polygon
              class="cls-3"
              points="292.19 170.69 293.72 171.57 293.72 171.51 292.19 170.63 292.19 170.69"
            />
          </g>
          <polygon
            class="cls-3"
            points="293.22 170.2 292.87 170.2 292.79 170.24 292.87 170.29 293.23 170.29 293.91 170.68 293.72 170.68 293.64 170.72 293.72 170.76 294.05 170.76 294.23 170.86 296.38 169.58 294.41 168.44 293.22 170.2"
          />
          <polygon
            class="cls-37"
            points="292.87 170.29 292.79 170.24 292.79 169.99 292.87 170.03 292.87 170.29"
          />
          <polygon
            class="cls-62"
            points="292.94 170.24 292.87 170.29 292.87 170.03 292.94 169.99 292.94 170.24"
          />
          <polygon
            class="cls-37"
            points="293.72 170.76 293.64 170.72 293.64 170.46 293.72 170.51 293.72 170.76"
          />
          <polygon
            class="cls-62"
            points="293.79 170.72 293.72 170.76 293.72 170.51 293.79 170.46 293.79 170.72"
          />
          <polygon
            class="cls-37"
            points="295.65 169.62 295.58 169.58 295.58 169.33 295.65 169.37 295.65 169.62"
          />
          <polygon
            class="cls-62"
            points="295.72 169.58 295.65 169.62 295.65 169.37 295.72 169.33 295.72 169.58"
          />
          <polygon
            class="cls-62"
            points="293.72 170.21 296.38 168.63 296.38 168.98 293.72 170.56 293.72 170.21"
          />
          <polygon
            class="cls-37"
            points="292.13 169.3 292.13 169.65 293.72 170.56 293.72 170.21 292.13 169.3"
          />
          <polygon
            class="cls-62"
            points="296.38 168.63 294.8 167.71 294.13 169.13 296.38 168.63"
          />
          <polygon
            class="cls-37"
            points="294.8 167.71 294.8 167.71 292.13 169.3 294.43 168.49 294.8 167.71"
          />
          <polygon
            class="cls-67"
            points="292.13 169.29 293.72 170.21 294.43 168.49 292.13 169.29"
          />
          <polygon
            class="cls-37"
            points="294.43 168.49 293.72 170.21 296.38 168.63 294.43 168.49"
          />
          <path
            class="cls-3"
            d="M337.74,197l-.22.13-12.94-7.47L331.33,206l-25.18,14.53h4.92a1.26,1.26,0,0,0,.63-.16l1.47-.85h0l1.76-1h0l.93-.54h0L336,206.38h0l1.76-1h0l1.65-1h0l4.87-2.81a.48.48,0,0,0,0-.82Zm-26.18,22.54h-1.9l1.76-1h1.82C312.65,218.94,311.91,219.31,311.56,219.55Z"
          />
          <polygon
            class="cls-194"
            points="267.54 212.2 269.29 213.22 281.58 206.12 279.82 205.11 267.54 212.2"
          />
          <polygon
            class="cls-108"
            points="269.29 213.22 267.54 212.2 267.54 212.46 269.3 213.47 269.29 213.22"
          />
          <polygon
            class="cls-108"
            points="281.58 206.12 269.29 213.22 269.3 213.47 281.58 206.38 281.58 206.12"
          />
          <polygon
            class="cls-96"
            points="298.25 199.8 298.25 210.94 309.66 217.53 309.66 206.38 298.25 199.8"
          />
          <polygon
            class="cls-108"
            points="286.85 199.25 285.09 197.28 285.09 208.41 286.84 207.39 286.85 199.25"
          />
          <polygon
            class="cls-200"
            points="294.16 212.18 285.97 207.45 285.97 207.9 294.16 212.63 294.16 212.18"
          />
          <polygon
            class="cls-201"
            points="294.23 212.14 286.04 207.41 285.97 207.45 294.16 212.18 294.23 212.14"
          />
          <polygon
            class="cls-202"
            points="294.27 212.11 286.08 207.39 285.97 207.45 286.05 207.45 294.19 212.16 294.27 212.11"
          />
          <polygon
            class="cls-200"
            points="294.16 211.6 285.97 206.88 285.97 207.33 294.16 212.06 294.16 211.6"
          />
          <polygon
            class="cls-201"
            points="294.23 211.56 286.04 206.84 285.97 206.88 294.16 211.6 294.23 211.56"
          />
          <polygon
            class="cls-202"
            points="294.27 211.54 286.08 206.81 285.97 206.88 286.05 206.88 294.19 211.58 294.27 211.54"
          />
          <polygon
            class="cls-200"
            points="294.16 211.03 285.97 206.3 285.97 206.75 294.16 211.48 294.16 211.03"
          />
          <polygon
            class="cls-201"
            points="294.23 210.99 286.04 206.26 285.97 206.3 294.16 211.03 294.23 210.99"
          />
          <polygon
            class="cls-202"
            points="294.27 210.97 286.08 206.24 285.97 206.3 286.05 206.3 294.19 211.01 294.27 210.97"
          />
          <polygon
            class="cls-200"
            points="294.16 210.46 285.97 205.73 285.97 206.18 294.16 210.91 294.16 210.46"
          />
          <polygon
            class="cls-201"
            points="294.23 210.41 286.04 205.69 285.97 205.73 294.16 210.46 294.23 210.41"
          />
          <polygon
            class="cls-202"
            points="294.27 210.39 286.08 205.67 285.97 205.73 286.05 205.73 294.19 210.44 294.27 210.39"
          />
          <polygon
            class="cls-200"
            points="294.16 209.88 285.97 205.16 285.97 205.61 294.16 210.33 294.16 209.88"
          />
          <polygon
            class="cls-201"
            points="294.23 209.84 286.04 205.11 285.97 205.16 294.16 209.88 294.23 209.84"
          />
          <polygon
            class="cls-202"
            points="294.27 209.82 286.08 205.09 285.97 205.16 286.05 205.16 294.19 209.86 294.27 209.82"
          />
          <polygon
            class="cls-200"
            points="294.16 209.31 285.97 204.58 285.97 205.03 294.16 209.76 294.16 209.31"
          />
          <polygon
            class="cls-201"
            points="294.23 209.27 286.04 204.54 285.97 204.58 294.16 209.31 294.23 209.27"
          />
          <polygon
            class="cls-202"
            points="294.27 209.24 286.08 204.52 285.97 204.58 286.05 204.58 294.19 209.29 294.27 209.24"
          />
          <polygon
            class="cls-200"
            points="294.16 208.74 285.97 204.01 285.97 204.46 294.16 209.19 294.16 208.74"
          />
          <polygon
            class="cls-201"
            points="294.23 208.69 286.04 203.97 285.97 204.01 294.16 208.74 294.23 208.69"
          />
          <polygon
            class="cls-202"
            points="294.27 208.67 286.08 203.94 285.97 204.01 286.05 204.01 294.19 208.71 294.27 208.67"
          />
          <polygon
            class="cls-200"
            points="294.16 208.16 285.97 203.44 285.97 203.88 294.16 208.61 294.16 208.16"
          />
          <polygon
            class="cls-201"
            points="294.23 208.12 286.04 203.39 285.97 203.44 294.16 208.16 294.23 208.12"
          />
          <polygon
            class="cls-202"
            points="294.27 208.1 286.08 203.37 285.97 203.44 286.05 203.44 294.19 208.14 294.27 208.1"
          />
          <polygon
            class="cls-200"
            points="294.16 207.59 285.97 202.86 285.97 203.31 294.16 208.04 294.16 207.59"
          />
          <polygon
            class="cls-201"
            points="294.23 207.55 286.04 202.82 285.97 202.86 294.16 207.59 294.23 207.55"
          />
          <polygon
            class="cls-202"
            points="294.27 207.52 286.08 202.8 285.97 202.86 286.05 202.86 294.19 207.56 294.27 207.52"
          />
          <polygon
            class="cls-200"
            points="294.16 207.01 285.97 202.29 285.97 202.74 294.16 207.46 294.16 207.01"
          />
          <polygon
            class="cls-201"
            points="294.23 206.97 286.04 202.24 285.97 202.29 294.16 207.01 294.23 206.97"
          />
          <polygon
            class="cls-202"
            points="294.27 206.95 286.08 202.22 285.97 202.29 286.05 202.29 294.19 206.99 294.27 206.95"
          />
          <polygon
            class="cls-200"
            points="294.16 206.44 285.97 201.71 285.97 202.16 294.16 206.89 294.16 206.44"
          />
          <polygon
            class="cls-201"
            points="294.23 206.4 286.04 201.67 285.97 201.71 294.16 206.44 294.23 206.4"
          />
          <polygon
            class="cls-202"
            points="294.27 206.38 286.08 201.65 285.97 201.71 286.05 201.71 294.19 206.42 294.27 206.38"
          />
          <polygon
            class="cls-200"
            points="294.16 205.87 285.97 201.14 285.97 201.59 294.16 206.32 294.16 205.87"
          />
          <polygon
            class="cls-201"
            points="294.23 205.82 286.04 201.1 285.97 201.14 294.16 205.87 294.23 205.82"
          />
          <polygon
            class="cls-202"
            points="294.27 205.8 286.08 201.07 285.97 201.14 286.05 201.14 294.19 205.84 294.27 205.8"
          />
          <polygon
            class="cls-200"
            points="294.16 205.29 285.97 200.56 285.97 201.01 294.16 205.74 294.16 205.29"
          />
          <polygon
            class="cls-201"
            points="294.23 205.25 286.04 200.52 285.97 200.56 294.16 205.29 294.23 205.25"
          />
          <polygon
            class="cls-202"
            points="294.27 205.23 286.08 200.5 285.97 200.56 286.05 200.56 294.19 205.27 294.27 205.23"
          />
          <polygon
            class="cls-200"
            points="294.16 204.72 285.97 199.99 285.97 200.44 294.16 205.17 294.16 204.72"
          />
          <polygon
            class="cls-201"
            points="294.23 204.68 286.04 199.95 285.97 199.99 294.16 204.72 294.23 204.68"
          />
          <polygon
            class="cls-202"
            points="294.27 204.65 286.08 199.93 285.97 199.99 286.05 199.99 294.19 204.7 294.27 204.65"
          />
          <polygon
            class="cls-200"
            points="294.16 204.15 285.97 199.42 285.97 199.87 294.16 204.59 294.16 204.15"
          />
          <polygon
            class="cls-201"
            points="294.23 204.1 286.04 199.38 285.97 199.42 294.16 204.15 294.23 204.1"
          />
          <polygon
            class="cls-202"
            points="294.27 204.08 286.08 199.35 285.97 199.42 286.05 199.42 294.19 204.12 294.27 204.08"
          />
          <polygon
            class="cls-200"
            points="294.16 203.57 285.97 198.84 285.97 199.29 294.16 204.02 294.16 203.57"
          />
          <polygon
            class="cls-201"
            points="294.23 203.53 286.04 198.8 285.97 198.84 294.16 203.57 294.23 203.53"
          />
          <polygon
            class="cls-202"
            points="294.27 203.51 286.08 198.78 285.97 198.84 286.05 198.84 294.19 203.55 294.27 203.51"
          />
          <polygon
            class="cls-96"
            points="294.74 201.82 283.33 195.24 283.33 207.39 285.09 208.4 285.09 200.3 292.99 204.86 292.99 212.97 294.74 213.98 294.74 201.82"
          />
          <polygon
            class="cls-108"
            points="298.25 199.8 294.74 201.82 294.74 213.98 298.25 211.95 298.25 199.8"
          />
          <path class="cls-195" d="M303.8,210.77v-4.59l4,2.3v4.58Z" />
          <polygon
            class="cls-196"
            points="303.72 206.07 303.72 210.83 307.84 213.21 307.84 208.45 303.72 206.07"
          />
          <path
            class="cls-37"
            d="M307.9,208.41l-4.38-2.54v5.06l4.38,2.53Zm-4.25,2.45V206.1l4.12,2.38v4.75Z"
          />
          <polygon
            class="cls-103"
            points="303.65 206.1 303.65 210.85 307.77 213.23 307.77 208.48 303.65 206.1"
          />
          <polygon
            class="cls-62"
            points="303.8 210.77 303.65 210.85 303.65 206.1 303.8 206.18 303.8 210.77"
          />
          <polygon
            class="cls-62"
            points="303.65 210.85 303.8 210.77 307.77 213.06 307.77 213.23 303.65 210.85"
          />
          <polygon
            class="cls-3"
            points="303.94 210.85 303.65 210.85 303.8 210.77 303.8 206.18 303.94 206.27 303.94 210.85"
          />
          <polygon
            class="cls-194"
            points="306.15 219.55 294.74 212.97 298.25 210.94 309.66 217.53 306.15 219.55"
          />
          <polygon
            class="cls-96"
            points="294.74 212.97 294.74 213.98 306.15 220.56 306.15 219.55 294.74 212.97"
          />
          <polygon
            class="cls-108"
            points="309.66 217.53 306.15 219.55 306.15 220.56 309.66 218.54 309.66 217.53"
          />
          <polygon
            class="cls-194"
            points="330.72 205.37 319.31 198.78 322.82 196.76 334.23 203.34 330.72 205.37"
          />
          <polygon
            class="cls-96"
            points="319.31 198.78 319.31 199.79 330.72 206.38 330.72 205.37 319.31 198.78"
          />
          <polygon
            class="cls-108"
            points="334.23 203.34 330.72 205.37 330.72 206.38 334.23 204.35 334.23 203.34"
          />
          <polygon
            class="cls-76"
            points="302.64 205.37 299.13 203.34 299.13 211.45 302.64 213.47 302.64 205.37"
          />
          <polygon
            class="cls-188"
            points="302.53 205.43 299.24 203.53 299.24 211.51 299.29 211.54 299.29 211.51 299.29 203.62 302.48 205.46 302.48 213.35 302.48 213.38 302.53 213.41 302.53 205.43"
          />
          <polygon
            class="cls-3"
            points="301.32 211.7 300.45 211.19 300.45 205.12 301.32 205.62 301.32 211.7"
          />
          <polygon
            class="cls-103"
            points="301.32 211.7 300.45 211.19 300.45 205.12 301.32 205.62 301.32 211.7"
          />
          <polygon
            class="cls-187"
            points="300.54 205.16 300.45 205.12 300.45 211.19 300.54 211.14 300.54 205.16"
          />
          <polygon
            class="cls-187"
            points="300.54 211.14 300.45 211.19 301.32 211.7 301.32 211.6 300.54 211.14"
          />
          <polygon
            class="cls-208"
            points="300.54 205.16 300.54 211.14 300.45 211.19 300.62 211.19 300.62 205.3 301.32 205.71 301.32 205.62 300.54 205.16"
          />
          <polygon
            class="cls-3"
            points="299.59 208.06 299.56 208.01 299.49 207.97 299.49 208.01 299.52 208.07 299.52 209.14 299.49 209.13 299.49 209.17 299.52 209.22 299.56 209.29 299.59 209.31 299.59 208.06"
          />
          <polygon
            class="cls-194"
            points="299.56 209.17 299.49 209.13 299.46 209.14 299.53 209.19 299.56 209.17"
          />
          <polygon
            class="cls-96"
            points="299.49 208.05 299.42 208.01 299.42 209.21 299.49 209.25 299.49 208.05"
          />
          <polygon
            class="cls-194"
            points="299.49 207.97 299.56 208.01 299.53 208.03 299.49 208.05 299.42 208.01 299.46 207.99 299.49 207.97"
          />
          <polygon
            class="cls-108"
            points="299.49 208.05 299.49 209.25 299.53 209.23 299.56 209.21 299.56 209.17 299.53 209.19 299.53 208.07 299.56 208.05 299.56 208.01 299.53 208.03 299.49 208.05"
          />
          <polygon
            class="cls-3"
            points="306.15 218.54 305.27 219.04 305.27 219.04 305.27 219.04 307.03 219.04 307.91 218.54 306.15 218.54"
          />
          <polygon
            class="cls-3"
            points="301.76 208.89 309.66 213.47 309.66 206.38 298.25 205.87 298.25 210.94 294.74 212.96 301.76 212.96 301.76 208.89"
          />
          <polygon
            class="cls-96"
            points="297.38 213.47 297.38 213.98 304.83 218.28 305.27 218.03 297.38 213.47"
          />
          <polygon
            class="cls-108"
            points="296.5 214.99 297.38 214.49 297.38 213.47 296.5 213.98 296.5 214.99"
          />
          <polygon
            class="cls-194"
            points="297.38 213.98 296.94 214.23 304.39 218.54 304.83 218.28 297.38 213.98"
          />
          <polygon
            class="cls-194"
            points="296.94 214.74 296.5 214.99 304.4 219.55 304.4 219.04 296.94 214.74"
          />
          <polygon
            class="cls-96"
            points="296.94 214.23 296.94 214.74 304.4 219.04 304.4 218.54 296.94 214.23"
          />
          <polygon
            class="cls-3"
            points="296.5 214.99 297.38 214.99 297.38 214.49 297.81 214.23 297.38 213.47 297.38 213.98 296.94 214.23 296.94 214.74 296.5 214.99"
          />
          <polygon
            class="cls-194"
            points="321.95 180.04 323.7 179.03 321.95 178.01 320.19 179.03 321.95 180.04"
          />
          <polygon
            class="cls-96"
            points="321.94 185.11 321.95 180.04 320.19 179.03 320.19 184.09 321.94 185.11"
          />
          <polygon
            class="cls-108"
            points="321.95 185.11 323.7 184.09 323.7 179.03 321.95 180.04 321.95 185.11"
          />
          <polygon
            class="cls-194"
            points="312.29 186.63 321.94 181.05 320.19 180.04 310.54 185.61 312.29 186.63"
          />
          <polygon
            class="cls-96"
            points="312.29 190.68 312.29 186.63 310.54 185.61 310.54 189.66 312.29 190.68"
          />
          <polygon
            class="cls-108"
            points="312.29 190.68 321.94 185.11 321.94 181.05 312.29 186.63 312.29 190.68"
          />
          <polygon
            class="cls-3"
            points="330.72 205.37 319.31 198.78 322.82 196.76 334.23 203.34 330.72 205.37"
          />
          <polygon
            class="cls-96"
            points="306.15 208.41 305.27 207.91 305.27 219.04 306.15 219.55 306.15 208.41"
          />
          <polygon
            class="cls-108"
            points="307.03 207.9 306.15 208.41 306.15 219.55 307.03 219.04 307.03 207.9"
          />
          <polygon
            class="cls-96"
            points="333.35 192.7 332.47 192.2 332.47 203.34 333.35 203.85 333.35 192.7"
          />
          <polygon
            class="cls-3"
            points="333.35 192.7 332.47 192.2 332.47 203.34 333.35 203.85 333.35 192.7"
          />
          <polygon
            class="cls-108"
            points="334.23 192.2 333.35 192.7 333.35 203.85 334.23 203.34 334.23 192.2"
          />
          <polygon
            class="cls-108"
            points="330.72 194.22 309.66 206.38 309.66 218.54 330.72 206.38 330.72 194.22"
          />
          <polygon
            class="cls-108"
            points="283.33 195.24 283.34 207.39 281.58 208.41 281.58 196.65 297.37 174.97 313.17 178.4 313.17 190.17 283.33 195.24"
          />
          <polygon
            class="cls-67"
            points="283.33 195.24 304.39 207.39 318.44 188.15 297.38 175.99 283.33 195.24"
          />
          <polygon
            class="cls-37"
            points="297.38 175.99 318.44 188.15 332.47 191.19 311.42 179.03 297.38 175.99"
          />
          <polygon
            class="cls-62"
            points="313.05 179.86 299.02 176.82 299.13 176.88 313.17 179.92 313.05 179.86"
          />
          <polygon
            class="cls-62"
            points="313.17 179.92 299.13 176.88 299.13 177 313.17 180.04 313.17 179.92"
          />
          <polygon
            class="cls-203"
            points="313.17 180.04 299.13 177 299.19 177.04 313.23 180.08 313.17 180.04"
          />
          <polygon
            class="cls-62"
            points="314.81 180.88 300.79 177.84 300.89 177.9 314.93 180.94 314.81 180.88"
          />
          <polygon
            class="cls-62"
            points="314.93 180.94 300.89 177.9 300.89 178.02 314.93 181.06 314.93 180.94"
          />
          <polygon
            class="cls-203"
            points="314.93 181.06 300.89 178.02 300.96 178.05 314.99 181.1 314.93 181.06"
          />
          <polygon
            class="cls-62"
            points="316.58 181.89 302.55 178.85 302.66 178.92 316.69 181.96 316.58 181.89"
          />
          <polygon
            class="cls-62"
            points="316.69 181.96 302.66 178.92 302.66 179.04 316.69 182.08 316.69 181.96"
          />
          <polygon
            class="cls-203"
            points="316.69 182.08 302.66 179.04 302.72 179.07 316.76 182.11 316.69 182.08"
          />
          <polygon
            class="cls-62"
            points="318.34 182.91 304.31 179.87 304.42 179.94 318.46 182.98 318.34 182.91"
          />
          <polygon
            class="cls-62"
            points="318.46 182.98 304.42 179.94 304.42 180.06 318.46 183.1 318.46 182.98"
          />
          <polygon
            class="cls-203"
            points="318.46 183.1 304.42 180.06 304.49 180.09 318.52 183.13 318.46 183.1"
          />
          <polygon
            class="cls-62"
            points="320.11 183.93 306.08 180.89 306.19 180.96 320.22 184 320.11 183.93"
          />
          <polygon
            class="cls-62"
            points="320.22 184 306.19 180.96 306.19 181.07 320.22 184.12 320.22 184"
          />
          <polygon
            class="cls-203"
            points="320.22 184.12 306.19 181.07 306.25 181.11 320.28 184.15 320.22 184.12"
          />
          <polygon
            class="cls-62"
            points="321.87 184.95 307.84 181.91 307.95 181.97 321.99 185.01 321.87 184.95"
          />
          <polygon
            class="cls-62"
            points="321.99 185.01 307.95 181.97 307.95 182.09 321.99 185.13 321.99 185.01"
          />
          <polygon
            class="cls-203"
            points="321.99 185.13 307.95 182.09 308.01 182.13 322.05 185.17 321.99 185.13"
          />
          <polygon
            class="cls-62"
            points="323.64 185.97 309.61 182.93 309.72 182.99 323.75 186.03 323.64 185.97"
          />
          <polygon
            class="cls-62"
            points="323.75 186.03 309.72 182.99 309.72 183.11 323.75 186.15 323.75 186.03"
          />
          <polygon
            class="cls-203"
            points="323.75 186.15 309.72 183.11 309.78 183.15 323.81 186.19 323.75 186.15"
          />
          <polygon
            class="cls-62"
            points="325.4 186.99 311.37 183.95 311.48 184.01 325.51 187.05 325.4 186.99"
          />
          <polygon
            class="cls-62"
            points="325.51 187.05 311.48 184.01 311.48 184.13 325.51 187.17 325.51 187.05"
          />
          <polygon
            class="cls-203"
            points="325.51 187.17 311.48 184.13 311.54 184.17 325.58 187.21 325.51 187.17"
          />
          <polygon
            class="cls-62"
            points="327.17 188.01 313.13 184.97 313.25 185.03 327.28 188.07 327.17 188.01"
          />
          <polygon
            class="cls-62"
            points="327.28 188.07 313.25 185.03 313.25 185.15 327.28 188.19 327.28 188.07"
          />
          <polygon
            class="cls-203"
            points="327.28 188.19 313.25 185.15 313.31 185.18 327.34 188.23 327.28 188.19"
          />
          <polygon
            class="cls-62"
            points="328.93 189.03 314.9 185.99 315.01 186.05 329.04 189.09 328.93 189.03"
          />
          <polygon
            class="cls-62"
            points="329.04 189.09 315.01 186.05 315.01 186.17 329.04 189.21 329.04 189.09"
          />
          <polygon
            class="cls-203"
            points="329.04 189.21 315.01 186.17 315.07 186.2 329.11 189.24 329.04 189.21"
          />
          <polygon
            class="cls-62"
            points="330.69 190.04 316.66 187 316.77 187.07 330.81 190.11 330.69 190.04"
          />
          <polygon
            class="cls-62"
            points="330.81 190.11 316.77 187.07 316.77 187.19 330.81 190.23 330.81 190.11"
          />
          <polygon
            class="cls-203"
            points="330.81 190.23 316.77 187.19 316.84 187.22 330.87 190.26 330.81 190.23"
          />
          <polygon
            class="cls-96"
            points="334.23 191.18 319.65 188.89 318.44 187.13 332.48 190.17 334.23 191.18"
          />
          <polygon
            class="cls-96"
            points="320.19 188.14 318.44 187.13 304.39 206.38 306.15 207.39 320.19 188.14"
          />
          <polygon
            class="cls-96"
            points="306.15 208.41 306.15 207.39 304.39 206.38 304.39 207.39 294.74 201.82 294.74 203.85 306.15 210.43 306.15 208.41 306.15 208.41"
          />
          <polygon
            class="cls-67"
            points="304.39 208.41 283.34 196.25 283.34 195.24 304.39 207.39 304.39 208.41"
          />
          <polygon
            class="cls-96"
            points="281.58 208.41 279.83 207.39 279.82 195.62 281.58 196.65 281.58 208.41"
          />
          <polygon
            class="cls-194"
            points="271.93 209.93 281.58 204.35 279.83 203.34 270.17 208.91 271.93 209.93"
          />
          <polygon
            class="cls-108"
            points="271.93 213.98 281.58 208.41 281.58 204.35 271.93 209.93 271.93 213.98"
          />
          <polygon
            class="cls-194"
            points="271.05 209.42 272.8 208.41 271.05 207.39 269.3 208.41 271.05 209.42"
          />
          <polygon
            class="cls-96"
            points="271.05 214.49 271.05 209.42 269.3 208.41 269.3 213.47 271.05 214.49"
          />
          <polygon
            class="cls-108"
            points="271.05 214.49 272.81 213.47 272.8 208.41 271.05 209.42 271.05 214.49"
          />
          <polygon
            class="cls-3"
            points="298.21 176.47 297.38 175.99 283.33 195.24 283.34 207.39 285.09 208.41 285.09 198.67 284.49 195.88 285.09 194.22 298.21 176.47"
          />
          <polygon
            class="cls-108"
            points="309.66 218.54 309.66 206.38 306.15 208.41 306.15 207.39 320.19 188.15 334.23 191.19 334.23 192.2 330.72 194.22 330.71 206.38 309.66 218.54"
          />
          <path class="cls-195" d="M322.08,207v-4.58l4-2.3v4.59Z" />
          <polygon
            class="cls-196"
            points="326.13 200 326.13 204.76 322.01 207.13 322.01 202.38 326.13 200"
          />
          <path
            class="cls-37"
            d="M321.94,207.39l4.39-2.53V199.8l-4.39,2.54Zm.14-.23v-4.75L326.2,200v4.75Z"
          />
          <polygon
            class="cls-103"
            points="326.2 200.03 326.2 204.78 322.08 207.16 322.08 202.41 326.2 200.03"
          />
          <polygon
            class="cls-62"
            points="326.05 204.7 326.2 204.78 326.2 200.03 326.05 200.11 326.05 204.7"
          />
          <polygon
            class="cls-62"
            points="326.2 204.78 326.05 204.7 322.08 206.99 322.08 207.16 326.2 204.78"
          />
          <path class="cls-195" d="M314.18,211.54V207l4-2.3v4.59Z" />
          <polygon
            class="cls-196"
            points="318.23 204.55 318.23 209.31 314.12 211.68 314.12 206.93 318.23 204.55"
          />
          <path
            class="cls-37"
            d="M314.05,211.94l4.38-2.53v-5.06l-4.38,2.54Zm.13-.23V207l4.12-2.38v4.75Z"
          />
          <polygon
            class="cls-103"
            points="318.3 204.58 318.3 209.34 314.18 211.71 314.18 206.96 318.3 204.58"
          />
          <polygon
            class="cls-62"
            points="318.15 209.25 318.3 209.34 318.3 204.58 318.15 204.66 318.15 209.25"
          />
          <polygon
            class="cls-62"
            points="318.3 209.34 318.15 209.25 314.18 211.54 314.18 211.71 318.3 209.34"
          />
          <polygon
            class="cls-3"
            points="312.29 179.53 298.21 176.47 297.38 175.99 311.42 179.03 312.29 179.53"
          />
          <polygon
            class="cls-194"
            points="271.05 214.23 272.81 215.25 285.09 208.15 283.33 207.14 271.05 214.23"
          />
          <polygon
            class="cls-108"
            points="272.81 215.25 271.05 214.23 271.05 214.49 272.81 215.5 272.81 215.25"
          />
          <polygon
            class="cls-108"
            points="285.09 208.15 272.81 215.25 272.81 215.5 285.09 208.41 285.09 208.15"
          />
          <polygon
            class="cls-3"
            points="287.29 208.66 286.85 207.17 286.85 208.41 285.97 207.9 285.09 208.41 285.09 208.15 283.33 207.14 271.05 214.23 274.56 214.23 274.56 214.49 274.56 214.49 272.81 215.5 273.25 215.5 275 214.49 279.82 214.48 279.82 214.49 281.58 213.47 280.26 212.71 287.29 208.66"
          />
          <polygon
            class="cls-62"
            points="299.02 176.82 284.98 196.06 285.09 196.13 299.13 176.88 299.02 176.82"
          />
          <polygon
            class="cls-62"
            points="299.13 176.88 285.09 196.13 285.09 196.25 299.13 177 299.13 176.88"
          />
          <polygon
            class="cls-62"
            points="285.09 196.25 284.98 196.18 284.98 196.06 285.09 196.13 285.09 196.25"
          />
          <polygon
            class="cls-203"
            points="299.13 177 285.09 196.25 285.15 196.28 299.19 177.04 299.13 177"
          />
          <polygon
            class="cls-62"
            points="300.79 177.84 286.75 197.08 286.86 197.15 300.89 177.9 300.79 177.84"
          />
          <polygon
            class="cls-62"
            points="300.89 177.9 286.86 197.15 286.86 197.27 300.89 178.02 300.89 177.9"
          />
          <polygon
            class="cls-62"
            points="286.86 197.27 286.75 197.2 286.75 197.08 286.86 197.15 286.86 197.27"
          />
          <polygon
            class="cls-203"
            points="300.89 178.02 286.85 197.27 286.92 197.3 300.96 178.06 300.89 178.02"
          />
          <polygon
            class="cls-62"
            points="302.55 178.85 288.51 198.1 288.62 198.17 302.66 178.92 302.55 178.85"
          />
          <polygon
            class="cls-62"
            points="302.66 178.92 288.62 198.17 288.62 198.29 302.66 179.04 302.66 178.92"
          />
          <polygon
            class="cls-62"
            points="288.62 198.29 288.51 198.22 288.51 198.1 288.62 198.17 288.62 198.29"
          />
          <polygon
            class="cls-203"
            points="302.66 179.04 288.62 198.29 288.68 198.32 302.72 179.07 302.66 179.04"
          />
          <polygon
            class="cls-62"
            points="304.31 179.87 290.27 199.12 290.38 199.19 304.42 179.94 304.31 179.87"
          />
          <polygon
            class="cls-62"
            points="304.42 179.94 290.38 199.19 290.38 199.31 304.42 180.06 304.42 179.94"
          />
          <polygon
            class="cls-62"
            points="290.38 199.31 290.27 199.24 290.27 199.12 290.38 199.19 290.38 199.31"
          />
          <polygon
            class="cls-203"
            points="304.42 180.06 290.38 199.3 290.44 199.34 304.49 180.09 304.42 180.06"
          />
          <polygon
            class="cls-62"
            points="306.08 180.89 292.04 200.14 292.15 200.2 306.19 180.96 306.08 180.89"
          />
          <polygon
            class="cls-62"
            points="306.19 180.96 292.15 200.2 292.15 200.32 306.19 181.07 306.19 180.96"
          />
          <polygon
            class="cls-62"
            points="292.15 200.32 292.04 200.26 292.04 200.14 292.15 200.2 292.15 200.32"
          />
          <polygon
            class="cls-203"
            points="306.19 181.07 292.15 200.32 292.21 200.36 306.25 181.11 306.19 181.07"
          />
          <polygon
            class="cls-62"
            points="307.84 181.91 293.8 201.16 293.91 201.22 307.95 181.97 307.84 181.91"
          />
          <polygon
            class="cls-62"
            points="307.95 181.97 293.91 201.22 293.91 201.34 307.95 182.09 307.95 181.97"
          />
          <polygon
            class="cls-62"
            points="293.91 201.34 293.8 201.28 293.8 201.16 293.91 201.22 293.91 201.34"
          />
          <polygon
            class="cls-203"
            points="307.95 182.09 293.91 201.34 293.97 201.38 308.01 182.13 307.95 182.09"
          />
          <polygon
            class="cls-62"
            points="309.61 182.93 295.57 202.18 295.68 202.24 309.71 182.99 309.61 182.93"
          />
          <polygon
            class="cls-62"
            points="309.71 182.99 295.68 202.24 295.68 202.36 309.71 183.11 309.71 182.99"
          />
          <polygon
            class="cls-62"
            points="295.68 202.36 295.57 202.29 295.57 202.17 295.68 202.24 295.68 202.36"
          />
          <polygon
            class="cls-203"
            points="309.71 183.11 295.68 202.36 295.74 202.4 309.78 183.15 309.71 183.11"
          />
          <polygon
            class="cls-62"
            points="311.37 183.95 297.33 203.19 297.44 203.26 311.48 184.01 311.37 183.95"
          />
          <polygon
            class="cls-62"
            points="311.48 184.01 297.44 203.26 297.44 203.38 311.48 184.13 311.48 184.01"
          />
          <polygon
            class="cls-62"
            points="297.44 203.38 297.33 203.31 297.33 203.19 297.44 203.26 297.44 203.38"
          />
          <polygon
            class="cls-203"
            points="311.48 184.13 297.44 203.38 297.5 203.41 311.54 184.17 311.48 184.13"
          />
          <polygon
            class="cls-62"
            points="313.13 184.97 299.09 204.21 299.2 204.28 313.24 185.03 313.13 184.97"
          />
          <polygon
            class="cls-62"
            points="313.24 185.03 299.2 204.28 299.2 204.4 313.24 185.15 313.24 185.03"
          />
          <polygon
            class="cls-62"
            points="299.2 204.4 299.09 204.33 299.09 204.21 299.2 204.28 299.2 204.4"
          />
          <polygon
            class="cls-203"
            points="313.24 185.15 299.2 204.4 299.26 204.43 313.31 185.19 313.24 185.15"
          />
          <polygon
            class="cls-62"
            points="314.9 185.99 300.86 205.23 300.97 205.3 315.01 186.05 314.9 185.99"
          />
          <polygon
            class="cls-62"
            points="315.01 186.05 300.97 205.3 300.97 205.42 315.01 186.17 315.01 186.05"
          />
          <polygon
            class="cls-62"
            points="300.97 205.42 300.86 205.35 300.86 205.23 300.97 205.3 300.97 205.42"
          />
          <polygon
            class="cls-203"
            points="315.01 186.17 300.97 205.42 301.03 205.45 315.07 186.2 315.01 186.17"
          />
          <polygon
            class="cls-62"
            points="316.66 187 302.62 206.25 302.73 206.32 316.77 187.07 316.66 187"
          />
          <polygon
            class="cls-62"
            points="316.77 187.07 302.73 206.32 302.73 206.44 316.77 187.19 316.77 187.07"
          />
          <polygon
            class="cls-62"
            points="302.73 206.44 302.62 206.37 302.62 206.25 302.73 206.32 302.73 206.44"
          />
          <polygon
            class="cls-203"
            points="316.77 187.19 302.73 206.44 302.79 206.47 316.83 187.22 316.77 187.19"
          />
          <polygon
            class="cls-96"
            points="313.01 178.4 297.22 174.97 295.46 173.96 311.26 177.38 313.01 178.4"
          />
          <polygon
            class="cls-96"
            points="297.38 174.97 295.62 173.96 279.82 195.62 281.58 196.65 297.38 174.97"
          />
          <polygon
            class="cls-67"
            points="303.15 178.68 303.15 178.78 304.96 179.82 304.96 179.72 303.15 178.68"
          />
          <polygon
            class="cls-62"
            points="304.96 179.72 304.96 179.82 307.88 180.32 307.88 180.22 304.96 179.72"
          />
          <polygon
            class="cls-37"
            points="307.88 180.22 304.96 179.72 303.15 178.68 306.13 179.21 307.88 180.22"
          />
          <polygon
            class="cls-204"
            points="304.98 179.67 303.45 178.79 306.11 179.26 307.6 180.12 304.98 179.67"
          />
          <polygon
            class="cls-205"
            points="303.45 177.5 306.06 175.94 307.59 176.83 304.98 178.38 303.45 177.5"
          />
          <polygon
            class="cls-96"
            points="304.98 179.67 303.45 178.79 303.45 177.5 304.98 178.38 304.98 179.67"
          />
          <polygon
            class="cls-108"
            points="307.6 180.12 304.98 179.67 304.98 178.38 307.59 176.83 307.6 180.12"
          />
          <polygon
            class="cls-62"
            points="304.98 178.06 307.64 176.47 307.64 176.83 304.98 178.41 304.98 178.06"
          />
          <polygon
            class="cls-67"
            points="303.39 177.14 306.06 175.56 307.64 176.48 304.98 178.06 303.39 177.14"
          />
          <polygon
            class="cls-206"
            points="304.2 177.14 306.06 176.03 306.84 176.48 304.98 177.59 304.2 177.14"
          />
          <polygon
            class="cls-67"
            points="303.39 177.14 303.39 177.5 304.98 178.41 304.98 178.06 303.39 177.14"
          />
          <g class="cls-207">
            <polygon
              class="cls-3"
              points="304.98 178.41 304.98 178.47 307.59 176.92 307.59 176.86 304.98 178.41"
            />
            <polygon
              class="cls-3"
              points="303.45 177.58 304.98 178.47 304.98 178.41 303.45 177.52 303.45 177.58"
            />
          </g>
          <polygon
            class="cls-3"
            points="304.48 177.1 304.13 177.1 304.05 177.14 304.13 177.18 304.49 177.18 305.17 177.57 304.98 177.57 304.9 177.62 304.98 177.66 305.31 177.66 305.49 177.76 307.64 176.47 305.67 175.34 304.48 177.1"
          />
          <polygon
            class="cls-37"
            points="304.13 177.18 304.05 177.14 304.05 176.89 304.13 176.93 304.13 177.18"
          />
          <polygon
            class="cls-62"
            points="304.2 177.14 304.13 177.18 304.13 176.93 304.2 176.89 304.2 177.14"
          />
          <polygon
            class="cls-37"
            points="304.98 177.66 304.9 177.62 304.9 177.36 304.98 177.4 304.98 177.66"
          />
          <polygon
            class="cls-62"
            points="305.05 177.62 304.98 177.66 304.98 177.4 305.05 177.36 305.05 177.62"
          />
          <polygon
            class="cls-37"
            points="306.91 176.52 306.84 176.48 306.84 176.22 306.91 176.27 306.91 176.52"
          />
          <polygon
            class="cls-62"
            points="306.98 176.48 306.91 176.52 306.91 176.27 306.98 176.22 306.98 176.48"
          />
          <polygon
            class="cls-62"
            points="304.98 177.11 307.64 175.53 307.64 175.88 304.98 177.46 304.98 177.11"
          />
          <polygon
            class="cls-37"
            points="303.39 176.19 303.39 176.54 304.98 177.46 304.98 177.11 303.39 176.19"
          />
          <polygon
            class="cls-62"
            points="307.64 175.53 306.06 174.61 305.39 176.03 307.64 175.53"
          />
          <polygon
            class="cls-37"
            points="306.06 174.61 306.06 174.61 303.39 176.19 305.69 175.38 306.06 174.61"
          />
          <polygon
            class="cls-67"
            points="303.39 176.19 304.98 177.11 305.69 175.38 303.39 176.19"
          />
          <polygon
            class="cls-37"
            points="305.69 175.38 304.98 177.11 307.64 175.53 305.69 175.38"
          />
          <ellipse class="cls-57" cx="255.04" cy="200.14" rx="3.49" ry="1.87" />
          <path
            class="cls-58"
            d="M255,200.35h0a.34.34,0,0,1-.34-.34v-4.79a.34.34,0,0,1,.34-.34h0a.34.34,0,0,1,.34.34V200A.34.34,0,0,1,255,200.35Z"
          />
          <path
            class="cls-59"
            d="M258.12,190.56a4.91,4.91,0,0,0,0-.55,4,4,0,0,0-.7-2.29,3.42,3.42,0,0,0,.09-.79,2.54,2.54,0,1,0-5,0,3.42,3.42,0,0,0,.09.79,4,4,0,0,0-.7,2.29,3.31,3.31,0,0,0,0,.55,3.34,3.34,0,0,0-1.24,2.54c0,2,1.93,3.63,4.32,3.63s4.32-1.62,4.32-3.63A3.34,3.34,0,0,0,258.12,190.56Z"
          />
          <path
            class="cls-60"
            d="M258.12,190.56a4.91,4.91,0,0,0,0-.55,4,4,0,0,0-.7-2.29,3.42,3.42,0,0,0,.09-.79,3,3,0,0,0-1.55-2.7c-1,6,1.83,8.73-2.37,12.3a5,5,0,0,0,1.41.2c2.38,0,4.32-1.62,4.32-3.63A3.34,3.34,0,0,0,258.12,190.56Z"
          />
          <ellipse class="cls-57" cx="310" cy="224.47" rx="3.49" ry="1.87" />
          <path
            class="cls-58"
            d="M310,224.69h0a.34.34,0,0,1-.34-.34v-4.8a.34.34,0,0,1,.34-.34h0a.34.34,0,0,1,.34.34v4.8A.34.34,0,0,1,310,224.69Z"
          />
          <path
            class="cls-59"
            d="M313.08,214.9a5.09,5.09,0,0,0,0-.56,4,4,0,0,0-.7-2.29,3.35,3.35,0,0,0,.09-.79,2.54,2.54,0,1,0-5,0,3.35,3.35,0,0,0,.09.79,4,4,0,0,0-.7,2.29,3.43,3.43,0,0,0,0,.56,3.32,3.32,0,0,0-1.24,2.54c0,2,1.93,3.62,4.32,3.62s4.32-1.62,4.32-3.62A3.32,3.32,0,0,0,313.08,214.9Z"
          />
          <path
            class="cls-60"
            d="M313.08,214.9a5.09,5.09,0,0,0,0-.56,4,4,0,0,0-.7-2.29,3.35,3.35,0,0,0,.09-.79,3,3,0,0,0-1.55-2.69c-1,6,1.83,8.73-2.36,12.3a5.32,5.32,0,0,0,1.4.19c2.39,0,4.32-1.62,4.32-3.62A3.32,3.32,0,0,0,313.08,214.9Z"
          />
          <ellipse class="cls-57" cx="339.36" cy="195.35" rx="3.49" ry="1.87" />
          <path
            class="cls-58"
            d="M339.36,195.57h0a.34.34,0,0,1-.33-.34v-4.8a.34.34,0,0,1,.33-.34h0a.34.34,0,0,1,.34.34v4.8A.34.34,0,0,1,339.36,195.57Z"
          />
          <path
            class="cls-59"
            d="M342.45,185.78a5.12,5.12,0,0,0,0-.56,4,4,0,0,0-.7-2.29,3.33,3.33,0,0,0,.1-.78,2.54,2.54,0,1,0-5,0,3.33,3.33,0,0,0,.1.78,4,4,0,0,0-.7,2.29,5.12,5.12,0,0,0,0,.56,3.36,3.36,0,0,0-1.24,2.54c0,2,1.94,3.62,4.32,3.62s4.33-1.62,4.33-3.62A3.36,3.36,0,0,0,342.45,185.78Z"
          />
          <path
            class="cls-60"
            d="M342.45,185.78a5.12,5.12,0,0,0,0-.56,4,4,0,0,0-.7-2.29,3.33,3.33,0,0,0,.1-.78,3,3,0,0,0-1.55-2.7c-1,6,1.82,8.73-2.37,12.3a5.32,5.32,0,0,0,1.4.19c2.39,0,4.33-1.62,4.33-3.62A3.36,3.36,0,0,0,342.45,185.78Z"
          />
          <path
            class="cls-53"
            d="M474.33,182.31c-5.48,1.88-18.61,6.72-25.26,9.17a6.47,6.47,0,0,0-4.23,5.73l-1,18.4a6.49,6.49,0,0,0,5.18,6.71l39.25,8a6.46,6.46,0,0,0,4.59-.77l22.1-13a21.25,21.25,0,0,0,6.53-6.64c1.07-1.74,1.81-2.94,1.95-4.18,1.11-10-37.14-20.26-44.41-23.2C478.66,182.36,477.38,181.27,474.33,182.31Z"
          />
          <path
            class="cls-209"
            d="M474.33,182.31c-5.48,1.88-18.61,6.71-25.26,9.17a6.47,6.47,0,0,0-4.23,5.73l-1,18.4a6.49,6.49,0,0,0,5.18,6.71l39.25,8a6.46,6.46,0,0,0,4.59-.77l22.1-13a21.25,21.25,0,0,0,6.53-6.64c1.07-1.74,1.81-2.94,1.95-4.18,1.11-10-37.14-20.26-44.41-23.2C478.66,182.36,477.38,181.27,474.33,182.31Z"
          />
          <polygon
            class="cls-210"
            points="500.39 192.32 500.48 192.37 506.38 188.96 506.38 188.86 500.39 192.32"
          />
          <polygon
            class="cls-211"
            points="490.92 222.14 448.61 197.72 476.27 181.75 518.58 206.17 490.92 222.14"
          />
          <polygon
            class="cls-96"
            points="495.8 219.32 474.64 207.11 474.64 196.78 495.8 203.35 495.8 219.32"
          />
          <polygon
            class="cls-95"
            points="474.64 197.72 469.76 194.9 469.76 208.99 474.64 206.17 474.64 197.72"
          />
          <polygon
            class="cls-76"
            points="481.15 198.66 476.27 195.84 476.27 207.11 481.15 209.93 481.15 198.66"
          />
          <polygon
            class="cls-188"
            points="480.34 207.58 477.08 205.7 477.08 204.76 480.34 206.64 480.34 207.58"
          />
          <polygon
            class="cls-187"
            points="477.22 205.62 477.08 205.7 480.34 207.58 480.34 207.42 477.22 205.62"
          />
          <polygon
            class="cls-187"
            points="477.22 204.84 477.08 204.76 477.08 205.7 477.22 205.62 477.22 204.84"
          />
          <polygon
            class="cls-188"
            points="480.34 205.39 477.08 203.51 477.08 202.57 480.34 204.45 480.34 205.39"
          />
          <polygon
            class="cls-187"
            points="477.22 203.43 477.08 203.51 480.34 205.39 480.34 205.23 477.22 203.43"
          />
          <polygon
            class="cls-187"
            points="477.22 202.65 477.08 202.57 477.08 203.51 477.22 203.43 477.22 202.65"
          />
          <polygon
            class="cls-188"
            points="480.34 201 477.08 199.13 477.08 198.19 480.34 200.06 480.34 201"
          />
          <polygon
            class="cls-187"
            points="477.22 199.05 477.08 199.13 480.34 201 480.34 200.85 477.22 199.05"
          />
          <polygon
            class="cls-187"
            points="477.22 198.26 477.08 198.19 477.08 199.13 477.22 199.05 477.22 198.26"
          />
          <polygon
            class="cls-188"
            points="480.34 203.2 477.08 201.32 477.08 200.38 480.34 202.26 480.34 203.2"
          />
          <polygon
            class="cls-187"
            points="477.22 201.24 477.08 201.32 480.34 203.2 480.34 203.04 477.22 201.24"
          />
          <polygon
            class="cls-187"
            points="477.22 200.46 477.08 200.38 477.08 201.32 477.22 201.24 477.22 200.46"
          />
          <polygon
            class="cls-188"
            points="481 198.74 476.42 196.1 476.42 207.2 476.5 207.24 476.5 207.2 476.5 196.23 480.93 198.79 480.93 209.75 480.93 209.8 481 209.84 481 198.74"
          />
          <polygon
            class="cls-194"
            points="476.81 202.99 476.7 202.93 476.66 202.96 476.76 203.02 476.81 202.99"
          />
          <polygon
            class="cls-96"
            points="476.7 201.44 476.6 201.38 476.6 203.05 476.7 203.11 476.7 201.44"
          />
          <polygon
            class="cls-194"
            points="476.7 201.33 476.81 201.38 476.76 201.41 476.7 201.44 476.6 201.38 476.66 201.35 476.7 201.33"
          />
          <polygon
            class="cls-108"
            points="476.7 201.44 476.7 203.11 476.76 203.08 476.81 203.05 476.81 202.99 476.76 203.02 476.76 201.47 476.81 201.44 476.81 201.38 476.76 201.41 476.7 201.44"
          />
          <polygon
            class="cls-108"
            points="450.24 179.87 450.24 186.44 477.9 170.47 477.9 163.9 464.07 161.55 450.24 179.87"
          />
          <polygon
            class="cls-96"
            points="504.75 185.03 503.12 184.1 489.29 202.41 490.92 203.35 504.75 185.03"
          />
          <line
            class="cls-67"
            x1="464.07"
            y1="162.49"
            x2="464.07"
            y2="162.49"
          />
          <polygon
            class="cls-194"
            points="495.8 218.38 490.92 221.2 469.76 208.99 474.64 206.17 495.8 218.38"
          />
          <polygon
            class="cls-96"
            points="469.76 208.99 469.76 209.93 490.92 222.14 490.92 221.2 469.76 208.99"
          />
          <polygon
            class="cls-108"
            points="495.8 218.38 490.92 221.2 490.92 222.14 495.8 219.32 495.8 218.38"
          />
          <path class="cls-195" d="M487.24,208.29v-5.9l5.93,3.42v5.91Z" />
          <polygon
            class="cls-196"
            points="487.13 202.23 487.13 208.38 493.26 211.91 493.26 205.77 487.13 202.23"
          />
          <path
            class="cls-37"
            d="M493.36,205.7l-6.51-3.76v6.58l6.51,3.76ZM487,208.41v-6.14l6.13,3.54V212Z"
          />
          <polygon
            class="cls-103"
            points="487.04 202.27 487.04 208.41 493.17 211.95 493.17 205.81 487.04 202.27"
          />
          <polygon
            class="cls-212"
            points="487.24 208.29 487.04 208.41 487.04 202.27 487.24 202.39 487.24 208.29"
          />
          <polygon
            class="cls-62"
            points="487.04 208.41 487.24 208.29 493.17 211.72 493.17 211.95 487.04 208.41"
          />
          <polygon
            class="cls-3"
            points="487.44 208.41 487.04 208.41 487.24 208.29 487.24 202.39 487.44 202.5 487.44 208.41"
          />
          <polygon
            class="cls-3"
            points="495.8 204.29 474.64 196.78 474.64 206.17 469.76 208.99 479.53 208.99 479.53 201.47 495.8 210.87 495.8 204.29"
          />
          <polygon
            class="cls-67"
            points="450.24 180.81 489.29 203.35 503.12 185.03 464.07 162.49 450.24 180.81"
          />
          <polygon
            class="cls-37"
            points="464.07 162.49 503.12 185.03 516.95 187.38 477.9 164.84 464.07 162.49"
          />
          <polygon
            class="cls-212"
            points="480.24 166.08 466.4 163.73 466.51 163.79 480.34 166.14 480.24 166.08"
          />
          <polygon
            class="cls-212"
            points="480.34 166.14 466.51 163.79 466.51 163.9 480.34 166.25 480.34 166.14"
          />
          <polygon
            class="cls-212"
            points="482.68 167.49 468.85 165.14 468.95 165.2 482.78 167.54 482.68 167.49"
          />
          <polygon
            class="cls-212"
            points="482.78 167.54 468.95 165.2 468.95 165.31 482.78 167.66 482.78 167.54"
          />
          <polygon
            class="cls-212"
            points="485.12 168.9 471.29 166.55 471.39 166.61 485.22 168.95 485.12 168.9"
          />
          <polygon
            class="cls-212"
            points="485.22 168.95 471.39 166.61 471.39 166.72 485.22 169.06 485.22 168.95"
          />
          <polygon
            class="cls-212"
            points="487.56 170.3 473.73 167.96 473.83 168.02 487.66 170.36 487.56 170.3"
          />
          <polygon
            class="cls-212"
            points="487.66 170.36 473.83 168.02 473.83 168.13 487.66 170.47 487.66 170.36"
          />
          <polygon
            class="cls-212"
            points="490 171.71 476.17 169.37 476.27 169.43 490.1 171.77 490 171.71"
          />
          <polygon
            class="cls-212"
            points="490.1 171.77 476.27 169.43 476.27 169.54 490.1 171.88 490.1 171.77"
          />
          <polygon
            class="cls-212"
            points="492.44 173.12 478.61 170.78 478.71 170.83 492.54 173.18 492.44 173.12"
          />
          <polygon
            class="cls-212"
            points="492.54 173.18 478.71 170.83 478.71 170.94 492.54 173.29 492.54 173.18"
          />
          <polygon
            class="cls-212"
            points="494.88 174.53 481.05 172.19 481.15 172.24 494.99 174.59 494.88 174.53"
          />
          <polygon
            class="cls-212"
            points="494.99 174.59 481.15 172.24 481.15 172.35 494.99 174.7 494.99 174.59"
          />
          <polygon
            class="cls-212"
            points="497.32 175.94 483.49 173.59 483.59 173.65 497.43 176 497.32 175.94"
          />
          <polygon
            class="cls-212"
            points="497.43 176 483.59 173.65 483.59 173.76 497.43 176.11 497.43 176"
          />
          <polygon
            class="cls-212"
            points="499.76 177.35 485.93 175 486.03 175.06 499.87 177.41 499.76 177.35"
          />
          <polygon
            class="cls-212"
            points="499.87 177.41 486.03 175.06 486.03 175.17 499.87 177.52 499.87 177.41"
          />
          <polygon
            class="cls-212"
            points="502.21 178.76 488.37 176.41 488.48 176.47 502.31 178.82 502.21 178.76"
          />
          <polygon
            class="cls-212"
            points="502.31 178.82 488.48 176.47 488.48 176.58 502.31 178.93 502.31 178.82"
          />
          <polygon
            class="cls-212"
            points="504.65 180.17 490.81 177.82 490.92 177.88 504.75 180.23 504.65 180.17"
          />
          <polygon
            class="cls-212"
            points="504.75 180.23 490.92 177.88 490.92 177.99 504.75 180.34 504.75 180.23"
          />
          <polygon
            class="cls-212"
            points="507.09 181.58 493.25 179.23 493.36 179.29 507.19 181.63 507.09 181.58"
          />
          <polygon
            class="cls-212"
            points="507.19 181.63 493.36 179.29 493.36 179.4 507.19 181.75 507.19 181.63"
          />
          <polygon
            class="cls-212"
            points="509.53 182.99 495.7 180.64 495.8 180.7 509.63 183.04 509.53 182.99"
          />
          <polygon
            class="cls-212"
            points="509.63 183.04 495.8 180.7 495.8 180.81 509.63 183.16 509.63 183.04"
          />
          <polygon
            class="cls-212"
            points="511.97 184.4 498.14 182.05 498.24 182.11 512.07 184.45 511.97 184.4"
          />
          <polygon
            class="cls-212"
            points="512.07 184.45 498.24 182.11 498.24 182.22 512.07 184.56 512.07 184.45"
          />
          <polygon
            class="cls-212"
            points="514.41 185.8 500.58 183.46 500.68 183.51 514.51 185.86 514.41 185.8"
          />
          <polygon
            class="cls-212"
            points="514.51 185.86 500.68 183.51 500.68 183.63 514.51 185.97 514.51 185.86"
          />
          <polygon
            class="cls-96"
            points="477.9 163.9 464.07 161.55 462.44 160.61 476.27 162.96 477.9 163.9"
          />
          <polygon
            class="cls-3"
            points="465.29 163.19 464.07 162.49 450.24 180.81 452.51 179.96 465.29 163.19"
          />
          <polygon
            class="cls-108"
            points="495.8 219.32 495.8 204.29 490.92 207.11 490.92 203.35 504.75 185.03 518.58 187.38 518.58 206.17 495.8 219.32"
          />
          <polygon
            class="cls-213"
            points="504.15 213.81 504.36 213.92 504.36 202.38 504.15 202.5 504.15 213.81"
          />
          <polygon
            class="cls-199"
            points="504.36 213.92 504.15 213.81 501.68 215.24 501.68 215.47 504.36 213.92"
          />
          <path
            class="cls-37"
            d="M501.49,216l3.26-1.88V201.94l-3.26,1.88Zm.19-.32V203.94l2.88-1.67V214Z"
          />
          <polygon
            class="cls-103"
            points="504.56 202.27 504.56 214.04 501.68 215.71 501.68 203.94 504.56 202.27"
          />
          <polygon
            class="cls-212"
            points="504.36 213.92 504.56 214.04 504.56 202.27 504.36 202.39 504.36 213.92"
          />
          <polygon
            class="cls-62"
            points="504.56 214.04 504.36 213.92 501.68 215.47 501.68 215.71 504.56 214.04"
          />
          <polygon
            class="cls-213"
            points="507.41 211.93 507.61 212.05 507.61 200.51 507.41 200.62 507.41 211.93"
          />
          <polygon
            class="cls-199"
            points="507.61 212.05 507.41 211.93 504.94 213.36 504.94 213.59 507.61 212.05"
          />
          <path
            class="cls-37"
            d="M504.75,214.16l3.25-1.88V200.07L504.75,202Zm.19-.33V202.06l2.87-1.67v11.77Z"
          />
          <polygon
            class="cls-103"
            points="507.81 200.39 507.81 212.16 504.94 213.83 504.94 202.06 507.81 200.39"
          />
          <polygon
            class="cls-212"
            points="507.61 212.05 507.81 212.16 507.81 200.39 507.61 200.51 507.61 212.05"
          />
          <polygon
            class="cls-62"
            points="507.81 212.16 507.61 212.05 504.94 213.59 504.94 213.83 507.81 212.16"
          />
          <polygon
            class="cls-213"
            points="507.41 192.2 507.61 192.32 507.61 188.7 507.41 188.66 507.41 192.2"
          />
          <polygon
            class="cls-199"
            points="507.61 192.32 507.41 192.2 504.94 193.63 504.94 193.87 507.61 192.32"
          />
          <path
            class="cls-37"
            d="M504.75,194.43l3.25-1.88v-4.14l-3.25-.56Zm.18-.33v-5.85l2.87.48v3.71Z"
          />
          <polygon
            class="cls-103"
            points="507.81 188.73 507.81 192.44 504.94 194.1 504.94 188.25 507.81 188.73"
          />
          <polygon
            class="cls-212"
            points="507.61 192.32 507.81 192.44 507.81 188.73 507.61 188.7 507.61 192.32"
          />
          <polygon
            class="cls-62"
            points="507.81 192.44 507.61 192.32 504.94 193.87 504.94 194.1 507.81 192.44"
          />
          <polygon
            class="cls-213"
            points="504.15 194.08 504.36 194.2 504.36 188.47 504.15 188.71 504.15 194.08"
          />
          <polygon
            class="cls-199"
            points="504.36 194.2 504.15 194.08 501.68 195.51 501.68 195.75 504.36 194.2"
          />
          <path
            class="cls-37"
            d="M501.49,196.31l3.26-1.88v-6.58l-3.26,4.31Zm.19-.33v-3.7l2.88-3.81v5.85Z"
          />
          <polygon
            class="cls-103"
            points="504.56 188.47 504.56 194.32 501.68 195.98 501.68 192.28 504.56 188.47"
          />
          <polygon
            class="cls-212"
            points="504.36 194.2 504.56 194.32 504.56 188.47 504.36 188.74 504.36 194.2"
          />
          <polygon
            class="cls-62"
            points="504.56 194.32 504.36 194.2 501.68 195.75 501.68 195.98 504.56 194.32"
          />
          <polygon
            class="cls-96"
            points="518.58 187.38 504.75 185.03 503.12 184.1 516.95 186.44 518.58 187.38"
          />
          <polygon
            class="cls-96"
            points="504.75 185.03 503.12 184.1 489.29 202.41 490.92 203.35 504.75 185.03"
          />
          <polygon
            class="cls-96"
            points="464.07 161.55 462.44 160.61 448.61 178.93 450.23 179.87 464.07 161.55"
          />
          <polygon
            class="cls-3"
            points="479.12 165.54 477.9 164.84 464.07 162.49 465.29 163.19 479.12 165.54"
          />
          <polygon
            class="cls-214"
            points="480.34 166.25 466.51 163.9 466.56 163.93 480.4 166.28 480.34 166.25"
          />
          <polygon
            class="cls-214"
            points="482.78 167.66 468.95 165.31 469.01 165.34 482.84 167.69 482.78 167.66"
          />
          <polygon
            class="cls-214"
            points="485.22 169.06 471.39 166.72 471.45 166.75 485.28 169.1 485.22 169.06"
          />
          <polygon
            class="cls-214"
            points="487.66 170.47 473.83 168.13 473.89 168.16 487.72 170.51 487.66 170.47"
          />
          <polygon
            class="cls-214"
            points="490.1 171.88 476.27 169.53 476.33 169.57 490.16 171.92 490.1 171.88"
          />
          <polygon
            class="cls-214"
            points="492.54 173.29 478.71 170.94 478.77 170.98 492.6 173.33 492.54 173.29"
          />
          <polygon
            class="cls-214"
            points="494.98 174.7 481.15 172.35 481.21 172.39 495.04 174.74 494.98 174.7"
          />
          <polygon
            class="cls-214"
            points="497.42 176.11 483.59 173.76 483.65 173.8 497.48 176.14 497.42 176.11"
          />
          <polygon
            class="cls-214"
            points="499.87 177.52 486.03 175.17 486.09 175.21 499.92 177.55 499.87 177.52"
          />
          <polygon
            class="cls-214"
            points="502.31 178.93 488.47 176.58 488.53 176.61 502.36 178.96 502.31 178.93"
          />
          <polygon
            class="cls-214"
            points="504.75 180.34 490.92 177.99 490.97 178.02 504.8 180.37 504.75 180.34"
          />
          <polygon
            class="cls-214"
            points="507.19 181.75 493.36 179.4 493.41 179.43 507.25 181.78 507.19 181.75"
          />
          <polygon
            class="cls-214"
            points="509.63 183.16 495.8 180.81 495.86 180.84 509.69 183.19 509.63 183.16"
          />
          <polygon
            class="cls-214"
            points="512.07 184.56 498.24 182.22 498.3 182.25 512.13 184.6 512.07 184.56"
          />
          <polygon
            class="cls-214"
            points="514.51 185.97 500.68 183.63 500.74 183.66 514.57 186.01 514.51 185.97"
          />
          <polygon
            class="cls-96"
            points="448.61 197.72 448.61 178.93 450.24 179.87 450.24 180.81 489.29 203.35 489.29 202.41 490.92 203.35 490.92 207.11 469.76 194.9 469.76 209.93 448.61 197.72"
          />
          <polygon
            class="cls-67"
            points="489.29 204.29 450.24 181.75 450.24 180.81 489.29 203.35 489.29 204.29"
          />
          <polygon
            class="cls-96"
            points="469.76 209.93 448.61 197.72 448.61 182.69 469.76 194.9 469.76 209.93"
          />
          <path class="cls-195" d="M459.58,198v-5.91l7.55,4.36v5.91Z" />
          <polygon
            class="cls-196"
            points="459.46 191.9 459.46 198.04 467.23 202.52 467.23 196.38 459.46 191.9"
          />
          <path
            class="cls-37"
            d="M467.32,196.3l-8.14-4.69v6.58l8.14,4.69Zm-7.95,1.78v-6.15l7.76,4.48v6.15Z"
          />
          <polygon
            class="cls-103"
            points="459.37 191.93 459.37 198.08 467.13 202.56 467.13 196.41 459.37 191.93"
          />
          <polygon
            class="cls-212"
            points="459.58 197.96 459.37 198.08 459.37 191.93 459.58 192.05 459.58 197.96"
          />
          <polygon
            class="cls-62"
            points="459.37 198.08 459.58 197.96 467.13 202.32 467.13 202.56 459.37 198.08"
          />
          <polygon
            class="cls-3"
            points="459.78 198.08 459.37 198.08 459.58 197.96 459.58 192.05 459.78 192.17 459.78 198.08"
          />
          <polygon
            class="cls-37"
            points="462.06 199.5 461.96 199.45 461.96 193.43 462.06 193.49 462.06 199.5"
          />
          <polygon
            class="cls-212"
            points="462.16 199.45 462.06 199.5 462.06 193.49 462.16 193.54 462.16 199.45"
          />
          <polygon
            class="cls-3"
            points="462.25 193.59 462.16 193.54 462.16 199.45 462.06 199.5 462.25 199.5 462.25 193.59"
          />
          <polygon
            class="cls-37"
            points="464.65 201 464.55 200.94 464.55 194.92 464.65 194.98 464.65 201"
          />
          <polygon
            class="cls-212"
            points="464.74 200.94 464.65 201 464.65 194.98 464.74 195.03 464.74 200.94"
          />
          <polygon
            class="cls-3"
            points="464.83 195.09 464.74 195.03 464.74 200.94 464.65 201 464.83 201 464.83 195.09"
          />
          <polygon
            class="cls-215"
            points="480.93 198.78 476.5 196.23 476.5 207.2 480.93 209.75 480.93 198.78"
          />
          <path class="cls-195" d="M451.44,193.26v-5.9l2.68,1.54v5.91Z" />
          <polygon
            class="cls-196"
            points="451.33 187.2 451.33 193.35 454.21 195.01 454.21 188.86 451.33 187.2"
          />
          <path
            class="cls-37"
            d="M454.3,188.79l-3.25-1.88v6.58l3.25,1.88Zm-3.06,4.59v-6.14l2.88,1.66V195Z"
          />
          <polygon
            class="cls-103"
            points="451.24 187.24 451.24 193.38 454.12 195.04 454.12 188.9 451.24 187.24"
          />
          <polygon
            class="cls-212"
            points="451.44 193.26 451.24 193.38 451.24 187.24 451.44 187.36 451.44 193.26"
          />
          <polygon
            class="cls-62"
            points="451.24 193.38 451.44 193.27 454.12 194.81 454.12 195.04 451.24 193.38"
          />
          <polygon
            class="cls-3"
            points="451.64 193.38 451.24 193.38 451.44 193.27 451.44 187.36 451.64 187.47 451.64 193.38"
          />
          <path
            class="cls-3"
            d="M518.58,195.85v10.33L495.8,219.34l-1.63.94v-.94h-3.25l-.82.47.82.47h1.62v.93l-1.62.94h1.13a1.86,1.86,0,0,0,.92-.24l.87-.51,38.37-13.06a1.24,1.24,0,0,0,.34-2.17ZM497.1,219.52"
          />
          <polygon
            class="cls-108"
            points="490.91 207.11 491.73 206.64 491.73 219.79 490.92 220.26 490.91 207.11"
          />
          <polygon
            class="cls-96"
            points="490.1 206.64 490.91 207.11 490.92 220.26 490.1 219.79 490.1 206.64"
          />
          <polygon
            class="cls-3"
            points="491.73 206.64 490.92 207.11 490.1 206.64 490.1 207.11 490.92 207.58 491.73 207.11 491.73 206.64"
          />
          <polygon
            class="cls-62"
            points="466.4 163.73 452.57 182.05 452.68 182.11 466.51 163.79 466.4 163.73"
          />
          <polygon
            class="cls-62"
            points="466.51 163.79 452.68 182.11 452.68 182.22 466.51 163.9 466.51 163.79"
          />
          <polygon
            class="cls-62"
            points="452.68 182.22 452.57 182.16 452.57 182.05 452.68 182.11 452.68 182.22"
          />
          <polygon
            class="cls-62"
            points="468.85 165.14 455.01 183.46 455.12 183.51 468.95 165.2 468.85 165.14"
          />
          <polygon
            class="cls-62"
            points="468.95 165.2 455.12 183.51 455.12 183.63 468.95 165.31 468.95 165.2"
          />
          <polygon
            class="cls-62"
            points="455.12 183.63 455.01 183.57 455.01 183.46 455.12 183.51 455.12 183.63"
          />
          <polygon
            class="cls-62"
            points="471.29 166.55 457.45 184.87 457.56 184.92 471.39 166.61 471.29 166.55"
          />
          <polygon
            class="cls-62"
            points="471.39 166.61 457.56 184.92 457.56 185.03 471.39 166.72 471.39 166.61"
          />
          <polygon
            class="cls-62"
            points="457.56 185.03 457.45 184.98 457.45 184.86 457.56 184.92 457.56 185.03"
          />
          <polygon
            class="cls-62"
            points="473.73 167.96 459.9 186.27 460 186.33 473.83 168.02 473.73 167.96"
          />
          <polygon
            class="cls-62"
            points="473.83 168.02 460 186.33 460 186.44 473.83 168.13 473.83 168.02"
          />
          <polygon
            class="cls-62"
            points="460 186.44 459.9 186.38 459.9 186.27 460 186.33 460 186.44"
          />
          <polygon
            class="cls-62"
            points="476.17 169.37 462.34 187.68 462.44 187.74 476.27 169.43 476.17 169.37"
          />
          <polygon
            class="cls-62"
            points="476.27 169.43 462.44 187.74 462.44 187.85 476.27 169.54 476.27 169.43"
          />
          <polygon
            class="cls-62"
            points="462.44 187.85 462.34 187.79 462.34 187.68 462.44 187.74 462.44 187.85"
          />
          <polygon
            class="cls-62"
            points="478.61 170.78 464.78 189.09 464.88 189.15 478.71 170.83 478.61 170.78"
          />
          <polygon
            class="cls-62"
            points="478.71 170.83 464.88 189.15 464.88 189.26 478.71 170.94 478.71 170.83"
          />
          <polygon
            class="cls-62"
            points="464.88 189.26 464.78 189.2 464.78 189.09 464.88 189.15 464.88 189.26"
          />
          <polygon
            class="cls-62"
            points="483.49 173.59 469.66 191.91 469.76 191.97 483.59 173.65 483.49 173.59"
          />
          <polygon
            class="cls-62"
            points="483.59 173.65 469.76 191.97 469.76 192.08 483.59 173.76 483.59 173.65"
          />
          <polygon
            class="cls-62"
            points="469.76 192.08 469.66 192.02 469.66 191.91 469.76 191.97 469.76 192.08"
          />
          <polygon
            class="cls-62"
            points="485.93 175 472.1 193.32 472.2 193.38 486.03 175.06 485.93 175"
          />
          <polygon
            class="cls-62"
            points="486.03 175.06 472.2 193.38 472.2 193.49 486.03 175.17 486.03 175.06"
          />
          <polygon
            class="cls-62"
            points="472.2 193.49 472.1 193.43 472.1 193.32 472.2 193.38 472.2 193.49"
          />
          <polygon
            class="cls-62"
            points="488.37 176.41 474.54 194.73 474.64 194.79 488.48 176.47 488.37 176.41"
          />
          <polygon
            class="cls-62"
            points="488.48 176.47 474.64 194.79 474.64 194.9 488.48 176.58 488.48 176.47"
          />
          <polygon
            class="cls-62"
            points="474.64 194.9 474.54 194.84 474.54 194.73 474.64 194.79 474.64 194.9"
          />
          <polygon
            class="cls-62"
            points="490.81 177.82 476.98 196.14 477.08 196.2 490.92 177.88 490.81 177.82"
          />
          <polygon
            class="cls-62"
            points="490.92 177.88 477.08 196.2 477.08 196.31 490.92 177.99 490.92 177.88"
          />
          <polygon
            class="cls-62"
            points="477.08 196.31 476.98 196.25 476.98 196.14 477.08 196.2 477.08 196.31"
          />
          <polygon
            class="cls-62"
            points="493.25 179.23 479.42 197.55 479.52 197.6 493.36 179.29 493.25 179.23"
          />
          <polygon
            class="cls-62"
            points="493.36 179.29 479.52 197.6 479.52 197.72 493.36 179.4 493.36 179.29"
          />
          <polygon
            class="cls-62"
            points="479.52 197.72 479.42 197.66 479.42 197.55 479.52 197.6 479.52 197.72"
          />
          <polygon
            class="cls-62"
            points="495.7 180.64 481.86 198.96 481.97 199.01 495.8 180.7 495.7 180.64"
          />
          <polygon
            class="cls-62"
            points="495.8 180.7 481.97 199.01 481.97 199.13 495.8 180.81 495.8 180.7"
          />
          <polygon
            class="cls-62"
            points="481.97 199.13 481.86 199.07 481.86 198.96 481.97 199.01 481.97 199.13"
          />
          <polygon
            class="cls-62"
            points="498.14 182.05 484.31 200.37 484.41 200.42 498.24 182.11 498.14 182.05"
          />
          <polygon
            class="cls-62"
            points="498.24 182.11 484.41 200.42 484.41 200.53 498.24 182.22 498.24 182.11"
          />
          <polygon
            class="cls-62"
            points="484.41 200.53 484.31 200.48 484.31 200.36 484.41 200.42 484.41 200.53"
          />
          <polygon
            class="cls-62"
            points="500.58 183.46 486.75 201.77 486.85 201.83 500.68 183.51 500.58 183.46"
          />
          <polygon
            class="cls-62"
            points="500.68 183.51 486.85 201.83 486.85 201.94 500.68 183.63 500.68 183.51"
          />
          <polygon
            class="cls-62"
            points="486.85 201.94 486.75 201.88 486.75 201.77 486.85 201.83 486.85 201.94"
          />
          <polygon
            class="cls-3"
            points="466.51 163.9 452.68 182.22 452.73 182.25 466.57 163.93 466.51 163.9"
          />
          <polygon
            class="cls-3"
            points="468.95 165.31 455.12 183.63 455.18 183.66 469.01 165.34 468.95 165.31"
          />
          <polygon
            class="cls-216"
            points="471.39 166.72 457.56 185.03 457.62 185.07 471.45 166.75 471.39 166.72"
          />
          <polygon
            class="cls-216"
            points="473.83 168.13 460 186.44 460.06 186.48 473.89 168.16 473.83 168.13"
          />
          <polygon
            class="cls-216"
            points="476.27 169.53 462.44 187.85 462.5 187.89 476.33 169.57 476.27 169.53"
          />
          <polygon
            class="cls-216"
            points="478.71 170.94 464.88 189.26 464.94 189.29 478.77 170.98 478.71 170.94"
          />
          <polygon
            class="cls-3"
            points="483.59 173.76 469.76 192.08 469.82 192.11 483.65 173.8 483.59 173.76"
          />
          <polygon
            class="cls-3"
            points="486.03 175.17 472.2 193.49 472.26 193.52 486.09 175.21 486.03 175.17"
          />
          <polygon
            class="cls-3"
            points="488.48 176.58 474.64 194.9 474.7 194.93 488.53 176.61 488.48 176.58"
          />
          <polygon
            class="cls-216"
            points="490.92 177.99 477.08 196.31 477.14 196.34 490.97 178.02 490.92 177.99"
          />
          <polygon
            class="cls-216"
            points="493.36 179.4 479.52 197.72 479.58 197.75 493.42 179.43 493.36 179.4"
          />
          <polygon
            class="cls-216"
            points="495.8 180.81 481.97 199.13 482.02 199.16 495.86 180.84 495.8 180.81"
          />
          <polygon
            class="cls-216"
            points="498.24 182.22 484.41 200.53 484.46 200.57 498.3 182.25 498.24 182.22"
          />
          <polygon
            class="cls-216"
            points="500.68 183.63 486.85 201.94 486.91 201.98 500.74 183.66 500.68 183.63"
          />
          <polygon
            class="cls-3"
            points="482.8 174.66 482.24 174.34 481.4 174.34 475.7 175.75 479.77 178.09 480.62 178.09 481.91 177.78 488.56 177.78 488.56 177.78 488.7 177.78 488.77 177.82 489.62 177.82 489.62 177.82 490.12 177.53 485.14 174.66 482.8 174.66"
          />
          <polygon
            class="cls-67"
            points="478.14 171.98 482.21 174.33 479.77 177.62 475.7 175.27 478.14 171.98"
          />
          <polygon
            class="cls-217"
            points="475.7 175.27 475.7 175.75 479.77 178.1 479.77 177.62 475.7 175.27"
          />
          <polygon
            class="cls-62"
            points="482.21 174.33 479.77 177.62 479.77 178.1 482.21 174.81 482.21 174.33"
          />
          <polygon
            class="cls-205"
            points="476.25 170.56 478.25 169.4 481.66 171.37 479.67 172.53 476.25 170.56"
          />
          <polygon
            class="cls-96"
            points="479.67 177.12 476.26 175.15 476.25 170.56 479.67 172.53 479.67 177.12"
          />
          <polygon
            class="cls-108"
            points="481.66 174.44 479.67 177.12 479.67 172.53 481.66 171.37 481.66 174.44"
          />
          <polygon
            class="cls-62"
            points="479.67 172.08 481.73 170.88 481.73 171.37 479.67 172.57 479.67 172.08"
          />
          <polygon
            class="cls-67"
            points="476.18 170.07 478.25 168.86 481.73 170.88 479.67 172.08 476.18 170.07"
          />
          <polygon
            class="cls-206"
            points="477.31 170.06 478.25 169.51 480.61 170.88 479.67 171.43 477.31 170.06"
          />
          <polygon
            class="cls-37"
            points="476.18 170.07 476.18 170.56 479.67 172.57 479.67 172.08 476.18 170.07"
          />
          <g class="cls-207">
            <polygon
              class="cls-67"
              points="479.67 172.57 479.67 172.65 481.66 171.49 481.66 171.41 479.67 172.57"
            />
            <polygon
              class="cls-67"
              points="476.25 170.68 479.67 172.65 479.67 172.57 476.25 170.6 476.25 170.68"
            />
          </g>
          <polygon
            class="cls-3"
            points="477.7 170.01 477.2 170.01 477.1 170.07 477.2 170.13 477.71 170.13 479.93 171.41 479.67 171.41 479.57 171.47 479.67 171.52 480.14 171.52 480.38 171.66 481.73 170.88 478.99 169.29 477.7 170.01"
          />
          <polygon
            class="cls-37"
            points="477.2 170.12 477.1 170.07 477.1 169.71 477.2 169.77 477.2 170.12"
          />
          <polygon
            class="cls-62"
            points="477.31 170.07 477.2 170.12 477.2 169.77 477.31 169.71 477.31 170.07"
          />
          <polygon
            class="cls-37"
            points="479.67 171.53 479.57 171.47 479.57 171.11 479.67 171.17 479.67 171.53"
          />
          <polygon
            class="cls-62"
            points="479.77 171.47 479.67 171.53 479.67 171.17 479.77 171.11 479.77 171.47"
          />
          <polygon
            class="cls-37"
            points="480.71 170.94 480.61 170.88 480.61 170.53 480.71 170.59 480.71 170.94"
          />
          <polygon
            class="cls-62"
            points="480.81 170.88 480.71 170.94 480.71 170.59 480.81 170.53 480.81 170.88"
          />
          <polygon
            class="cls-62"
            points="479.67 170.76 481.73 169.55 481.73 170.04 479.67 171.25 479.67 170.76"
          />
          <polygon
            class="cls-37"
            points="476.18 168.75 476.18 169.24 479.67 171.25 479.67 170.76 476.18 168.75"
          />
          <polygon
            class="cls-62"
            points="481.73 169.55 478.25 167.54 478.96 168.52 481.73 169.55"
          />
          <polygon
            class="cls-37"
            points="478.25 167.54 478.25 167.54 476.18 168.75 478.96 168.52 478.25 167.54"
          />
          <polygon
            class="cls-67"
            points="476.18 168.75 476.18 168.75 479.67 170.76 479.67 170.76 478.96 168.52 476.18 168.75"
          />
          <polygon
            class="cls-37"
            points="481.73 169.55 478.96 168.52 479.67 170.76 481.73 169.56 481.73 169.55"
          />
          <polygon
            class="cls-62"
            points="477.61 176.74 467.22 190.5 467.32 190.56 477.71 176.8 477.61 176.74"
          />
          <polygon
            class="cls-62"
            points="477.71 176.8 467.32 190.56 467.32 190.67 477.71 176.91 477.71 176.8"
          />
          <polygon
            class="cls-62"
            points="467.32 190.67 467.22 190.61 467.22 190.5 467.32 190.56 467.32 190.67"
          />
          <polygon
            class="cls-216"
            points="477.71 176.91 467.32 190.67 467.38 190.7 477.77 176.95 477.71 176.91"
          />
          <ellipse class="cls-57" cx="498.14" cy="223.51" rx="3.53" ry="1.89" />
          <path
            class="cls-58"
            d="M498.14,223.73h0a.35.35,0,0,1-.35-.34v-4.85a.35.35,0,0,1,.35-.35h0a.35.35,0,0,1,.34.35v4.85A.34.34,0,0,1,498.14,223.73Z"
          />
          <path
            class="cls-59"
            d="M501.25,213.83a3.43,3.43,0,0,0,0-.56,4.08,4.08,0,0,0-.71-2.32,3.42,3.42,0,0,0,.1-.79,2.57,2.57,0,1,0-5.08,0,3.42,3.42,0,0,0,.09.79,4.08,4.08,0,0,0-.71,2.32,5.09,5.09,0,0,0,0,.56,3.39,3.39,0,0,0-1.25,2.57c0,2,2,3.67,4.37,3.67s4.37-1.64,4.37-3.67A3.37,3.37,0,0,0,501.25,213.83Z"
          />
          <path
            class="cls-60"
            d="M501.25,213.83a3.43,3.43,0,0,0,0-.56,4.08,4.08,0,0,0-.71-2.32,3.42,3.42,0,0,0,.1-.79,3,3,0,0,0-1.57-2.73c-1,6.07,1.85,8.83-2.39,12.44a5,5,0,0,0,1.42.2c2.41,0,4.37-1.64,4.37-3.67A3.37,3.37,0,0,0,501.25,213.83Z"
          />
          <text class="cls-218" transform="translate(185 578)">
            This report was created by RealInfoBox Inc. using the most recent
            REBGV data.
          </text>
          <text class="cls-218" transform="translate(85 591)">
            Information herein is deemed reliable but not guaranteed. Copyright
            ©️ 2015-{{ new Date().getFullYear() }}
            RealInfoBox.com
          </text>
          <text class="cls-288" transform="translate(10.64 461.68)">
            www.RealInfoBox.com
          </text>
          <rect
            class="cls-3"
            x="4.39"
            y="3.12"
            width="295"
            height="42.69"
            rx="0.73"
          />
          <rect class="cls-59" width="295" height="42.69" />
          <text class="cls-6" transform="translate(29.43 29.99)">
            FRASER VALLEY
          </text>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import SocialArrow from '~/components/svgIcons/SocialArrow';
export default {
  components: { SocialArrow },
  props: {
    reportData: { type: Object, default: () => {} },
    month: { type: String, required: true },
    year: { type: [String, Number], required: true },
  },

  computed: {
    isApartmentFlipped() {
      return this.reportData.detached.benchmarkPriceDeltaYTY < 0;
    },
    isTownhomeFlipped() {
      return this.reportData.townhome.benchmarkPriceDeltaYTY < 0;
    },
    isDetachedFlipped() {
      return this.reportData.detached.benchmarkPriceDeltaYTY < 0;
    },
  },
};
</script>

<style>
.Container {
  position: relative;
}

.ArrowTop {
  position: absolute;
  top: 53.5%;
}

.ApartmentArrow {
  left: 8%;
}

.TownhomeArrow {
  left: 39%;
}

.DetachedArrow {
  left: 71%;
}
</style>
