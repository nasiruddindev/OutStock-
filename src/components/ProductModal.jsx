import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import { addtocard } from '../slices/addToCardSlice'
import Image from './Image'

const ProductModal = ({ id, onClose }) => {
  const dispatch = useDispatch()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch product details')
        }
        return res.json()
      })
      .then((data) => {
        setProduct(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!id) return null

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addtocard({
          title: product.title,
          image: product.thumbnail,
          price: product.price,
          quantity: 1,
        })
      )
    }
  }

  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden animate-zoom-in max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black/60 hover:text-black transition-colors p-2 rounded-full hover:bg-black/5 z-10 cursor-pointer"
        >
          <RxCross2 className="text-2xl" />
        </button>

        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-100 w-full p-8 gap-4">
            <div className="w-12 h-12 border-4 border-black/10 border-t-black rounded-full animate-spin"></div>
            <p className="text-black/50 font-pop text-sm">Loading product details...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center min-h-100 w-full p-8 gap-4">
            <p className="text-red-500 font-pop font-semibold">Error: {error}</p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-black text-white font-pop rounded-md hover:bg-black/80 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Left side: Image */}
            <div className="md:w-1/2 bg-back flex items-center justify-center p-6 md:p-10 min-h-[300px]">
              <Image
                src={product.thumbnail}
                className="max-h-80 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right side: Content */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between font-pop">
              <div>
                <h2 className="font-inter font-semibold text-2xl text-black pr-8">
                  {product.title}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-x-2 py-3">
                  <ul className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <li key={i}>
                        <FaStar className="text-lg" />
                      </li>
                    ))}
                  </ul>
                  <p className="font-normal text-black/50 text-xs">
                    (150 Reviews)
                  </p>
                </div>

                {/* Price */}
                <p className="text-black font-semibold font-inter text-2xl pb-4">
                  ${product.price}
                </p>

                {/* Description */}
                <p className="font-normal text-xs text-black/70 max-w-sm pb-6 border-b border-black/10 leading-relaxed">
                  {product.description}
                </p>

                {/* Size Selector */}
                <div className="py-4 border-b border-black/10">
                  <p className="text-black text-sm font-semibold font-inter pb-2">Size:</p>
                  <div className="flex items-center gap-x-2">
                    {sizes.map((size) => (
                      <div
                        key={size}
                        className="h-8 w-8 rounded border border-black/30 hover:border-black hover:bg-black hover:text-white flex items-center justify-center cursor-pointer transition-all duration-200"
                      >
                        <p className="font-medium text-xs">
                          {size}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex gap-4">
                <button
                  onClick={() => {
                    handleAddToCart()
                    onClose()
                  }}
                  className="flex-1 bg-black text-white hover:bg-black/90 active:scale-95 text-sm font-medium font-pop py-3 px-6 rounded-lg shadow transition-all duration-200 cursor-pointer text-center"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ProductModal
