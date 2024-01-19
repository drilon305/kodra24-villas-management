"use client"

import { FC } from "react"
import CountUpNumber from "../CountUpNumber/CountUpNumber"

type Props = {
    heading1: React.ReactNode;
    section2: React.ReactNode;
}


const ClientComponent: FC<Props> = ({ heading1, section2 }) => {
  return (
    <section className="flex px-4 container mx-auto items-center gap-12">
    <div className="py-10 h-full">
      {heading1}

      <div className="flex justify-between mt-12">
        <div className="flex gap-3 flex-col items-center justify-center">
          <p className="text-xs lg:text-xl text-center">Basic</p>
          <CountUpNumber duration={2000} endValue={20} />
        </div>
        <div className="flex gap-3 flex-col items-center justify-center">
          <p className="text-xs lg:text-xl text-center">Luxury</p>
          <CountUpNumber duration={2000} endValue={10} />
        </div>
        <div className="flex gap-3 flex-col items-center justify-center">
          <p className="text-xs lg:text-xl text-center">Luxury</p>
          <CountUpNumber duration={2000} endValue={10} />
        </div>
      </div>
    </div>

    {section2}

  </section>
  )
}

export default ClientComponent