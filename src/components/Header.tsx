import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div >
      <Image className='flex justify-start place-items-start '
        src={"/OIP.png"}
        alt={"logo"}
        width={200}
        height={200}
>
      </Image>
    </div>
  )
}

export default Header

