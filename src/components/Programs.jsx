import React from "react";
import child1 from "../assets/child1.jpg";
import summercamp from "../assets/summercamp.jpg";
import afterschool from "../assets/afterschool.png";
import senior from "../assets/senior.png";
import child2 from "../assets/child2.png";
import children from "../assets/children.jpg"
import children5 from "../assets/children5.jpg"
import daycare from "../assets/daycare.jpg"

import {
  programAges,
  programDay,
  programName,
  programTime,
} from "../contants/programContants";

const programCards = [
  {
    id: "program-1",
    image: child1,
    title: programName.program1,
    badge: "Child Centric",
    timeLabel: programTime.daycare,
    daysLabel: programDay.daycare,
    ageLabel: programAges.program1,
  },
  {
    id: "program-2",
    image: child2,
    title: programName.program2,
    badge: "Child Centric",
    timeLabel: programTime.daycare,
    daysLabel: programDay.daycare,
    ageLabel: programAges.program2,
  },
  {
    id: "program-3",
    image: children,
    title: programName.program3,
    badge: "Child Centric",
    timeLabel: programTime.daycare,
    daysLabel: programDay.daycare,
    ageLabel: programAges.program3,
  },
  {
    id: "program-4",
    image: senior,
    title: programName.program4,
    badge: "Integrated Curriculum",
    timeLabel: programTime.daycare,
    daysLabel: programDay.daycare,
    ageLabel: programAges.program4,
  },
  {
    id: "program-5",
    image: children5,
    title: programName.program5,
    badge: "Integrated Curriculum",
    timeLabel: programTime.preschool,
    daysLabel: programDay.daycare,
    ageLabel: programAges.program5,
  },
  {
    id: "program-6",
    image: afterschool,
    title: "After School Care",
    badge: "British Play way",
    timeLabel: "9AM to 1.30PM",
    daysLabel: null,
    ageLabel: "Age: 3-6 years",
  },
  {
    id: "program-7",
    image: daycare,
    title: programName.program6,
    badge: "Child Centric",
    timeLabel: programTime.daycare,
    daysLabel: programDay.daycare,
    ageLabel: null,
  },
  {
    id: "program-8",
    image: summercamp,
    title: "Summer Camp",
    badge: "April and May",
    timeLabel: "Monday to Friday",
    daysLabel: null,
    ageLabel: "Age: 3-12 Years",
  },
];

function ProgramCard({ image, title, badge, timeLabel, daysLabel, ageLabel }) {
  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-5 shadow-lg transition hover:shadow-[0_10px_25px_rgba(59,130,246,0.4)]">
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="h-40 w-40 rounded-full object-cover border-4 border-pink-200"
        />
      </div>

      <h3 className="mt-5 text-center text-2xl font-bold">{title}</h3>
      <p className="text-center font-semibold text-red-600">{badge}</p>

      <p className="text-center text-sm font-semibold text-green-900">
        Time: <span className="text-orange-500">{timeLabel}</span>
      </p>

      {daysLabel ? (
        <p className="text-center text-sm font-semibold text-pink-900">
          Days: <span className="text-pink-500">{daysLabel}</span>
        </p>
      ) : null}

      {ageLabel ? (
        <p className="mt-2 text-center text-lg text-blue-600">{ageLabel}</p>
      ) : null}
    </article>
  );
}

function Programs() {
  return (
    <section id="programs" className="scroll-mt-24 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-950 md:text-4xl">
          Classroom Programs
          </h1>
          <p className="mt-3 text-sm md:text-lg text-slate-600">
            Engaging and age-appropriate programs designed to inspire curiosity,
            creativity, confidence, and joyful learning in every child.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {programCards.map((card) => (
            <ProgramCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
