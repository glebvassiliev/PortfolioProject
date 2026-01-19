import { useState, useEffect } from 'react'

interface ScrambledTextProps {
  text: string
  className?: string
  speed?: number
  fadeInDelay?: number
}

const ScrambledText = ({ text, className = '', speed = 300, fadeInDelay = 400 }: ScrambledTextProps) => {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'

  // Initialize with scrambled placeholder text
  useEffect(() => {
    const placeholder = Array.from({ length: text.length }, () =>
      chars[Math.floor(Math.random() * chars.length)]
    ).join('')
    setDisplayText(placeholder)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  useEffect(() => {
    // Fade in the scrambled placeholder text
    const fadeInTimer = setTimeout(() => {
      setOpacity(1)
    }, fadeInDelay)

    // Start the scramble animation while fade-in is happening
    // This creates a seamless transition - scramble starts as text becomes visible
    const fadeInDuration = 1800 // Match the CSS transition duration
    const startTimer = setTimeout(() => {
      setHasStarted(true)
    }, fadeInDelay + (fadeInDuration * 0.7) - 1300) // Start scramble earlier

    return () => {
      clearTimeout(fadeInTimer)
      clearTimeout(startTimer)
    }
  }, [fadeInDelay])

  useEffect(() => {
    if (!hasStarted) return

    let currentIndex = 0
    let scrambleInterval: ReturnType<typeof setInterval>
    let iterations = 0
    const maxIterations = 3 // Number of times to scramble each character before revealing

    const scramble = () => {
      if (currentIndex < text.length) {
        const currentText = text.slice(0, currentIndex)
        const remainingLength = text.length - currentIndex
        const scrambled = Array.from({ length: remainingLength }, () =>
          chars[Math.floor(Math.random() * chars.length)]
        ).join('')
        
        setDisplayText(currentText + scrambled)
        
        iterations++
        if (iterations >= maxIterations) {
          currentIndex++
          iterations = 0
        }
      } else {
        setIsComplete(true)
        clearInterval(scrambleInterval)
      }
    }

    scrambleInterval = setInterval(scramble, speed)

    return () => {
      clearInterval(scrambleInterval)
    }
  }, [text, speed, hasStarted])

  return (
    <span 
      className={className}
      style={{
        opacity: opacity,
        transition: 'opacity 1.8s ease-in-out'
      }}
    >
      {isComplete ? text : displayText}
    </span>
  )
}

export default ScrambledText