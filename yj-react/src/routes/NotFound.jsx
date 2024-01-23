import React from 'react'
import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full flex h-[calc(100vh-336px)]">
          {/* 왼쪽 */}
          <div className="w-1/2 h-full flex justify-center items-center">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold">404 PAGE NOT FOUND</h1>
              <h2 className="text-xl font-semibold">HYDRA is currently attacking this page!</h2>
              <p>
                Check that you typed the address correctly, go back to your previous<br /> page or try using our site search to find something specific.
              </p>
            </div>
          </div>
          {/* 오른쪽 */}
          <div className="w-1/2 h-full flex justify-center items-end overflow-hidden">
            <img className="animate-scared"
             src="https://www.pngkit.com/png/full/17-171034_marvel-com-blue-iron-man-comic.png" alt="not_image" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
