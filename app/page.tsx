import Image from "next/image"
import Logo from "@/public/assets/logo.svg"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-row bg-white">
      <div className="flex flex-1 items-center justify-center">
        <Image
          src={Logo}
          width={251}
          alt="logo"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="font-bold text-[64px] my-[48px]">지금 일어나는 일</h1>
        <h2 className="font-bold text-[31px] mb-[32px]">지금 가입하세요.</h2>
        <Link
          href="/i/flow/login"
          className="w-[300px] h-[40px] rounded-full px-4 text-[15px] bg-[#1D9BF0] text-white border-none flex items-center justify-center hover:bg-[#1A8CD8]"
        >
          계정 만들기
        </Link>

        <h3 className="font-bold text-[17px] mb-[20px] mt-[40px]">이미 트위터에 가입하셨나요?</h3>
        <Link
          href="/login"
          className="w-[300px] h-[40px] rounded-full px-4 text-[15px] text-[#1D9BF0] border border-[#CFD9DE] flex items-center justify-center hover:bg-[rgba(29,155,240,0.1)]"
        >
          로그인
        </Link>

      </div>
    </main>
  )
}
