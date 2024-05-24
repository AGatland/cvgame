/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react'
import vitaIdleGif from './assets/DinoSpritesVita_idle.gif'
import vitaRunGif from './assets/DinoSpritesVita_run.gif'

function Character({ platforms, platformWidth, initialCharacterPos, loadNewStage, objects, spriteDim }) {
    // Const definitions
    const gravity = 0.1
    const jumpStrength = 1.7
    const floorLevel = initialCharacterPos.y // Variable for the floor position

    // States
    const [position, setPosition] = useState(initialCharacterPos)
    const [velocity, setVelocity] = useState({ x: 0, y: 0 })
    const [direction, setDirection] = useState('right') // Track the direction
    const [isJumping, setIsJumping] = useState(false) // Track jumping state
    const [isOnGround, setIsOnGround] = useState(true) // Track if the character is on the ground
    const [platformOn, setPlatformOn] = useState(null)
    const [hasReachedGoal, setHasReachedGoal] = useState(false)
    const [charAnimation, setCharAnimation] = useState(vitaIdleGif)

    // Refs
    const requestRef = useRef()
    const previousTimeRef = useRef()
    const movingRef = useRef({ left: false, right: false })

    const handleKeyPress = (event) => {
        const { key } = event

        if (key === 'ArrowUp') {
            handleInteraction()
        }
        if (key === 'ArrowLeft') {
            setCharAnimation(vitaRunGif)
            setDirection('left')
            movingRef.current.left = true
        }
        if (key === 'ArrowRight') {
            setCharAnimation(vitaRunGif)
            setDirection('right')
            movingRef.current.right = true
        }
        if (key === ' ' && isOnGround) {
            // Space bar for jumping
            setIsJumping(true)
            setIsOnGround(false)
            setVelocity((vel) => ({ ...vel, y: -jumpStrength }))
        }
    }

    const handleKeyUp = (event) => {
        const { key } = event

        if (key === 'ArrowLeft') {
            movingRef.current.left = false
        }
        if (key === 'ArrowRight') {
            movingRef.current.right = false
        }

        if (!movingRef.current.left && !movingRef.current.right) {
            setCharAnimation(vitaIdleGif)
        }
    }

    const handleInteraction = () => {
        const proximityThreshold = 3 // Define the distance threshold for interaction
        objects.forEach((object) => {
            const distance = Math.sqrt(
                Math.pow(position.x - object.x, 2) + Math.pow(position.y - object.y, 2)
            )
            if (distance < proximityThreshold) {
                object.action()
            }
        })
    }

    const checkPlatformCollision = (newPos) => {
        for (const platform of platforms) {
            if (
                newPos.x + spriteDim > platform.x && // Character's right side is beyond platform's left side
                newPos.x < platform.x + platformWidth && // Character's left side is before platform's right side
                position.y < platform.y && // Character was above the platform
                newPos.y >= platform.y // Character is now on or below the platform
            ) {
                setPlatformOn(platform)
                return platform.y
            }
        }
        return null
    }

    const checkWalkOffPlatform = (newPos) => {
        if (platformOn != null) {
            if (newPos.x + spriteDim < platformOn.x || newPos.x > platformOn.x + platformWidth) {
                setPlatformOn(null)
                setIsOnGround(false)
                setIsJumping(true)
                return true
            }
        }
        return false
    }

    useEffect(() => {
        const animate = (time) => {
            if (previousTimeRef.current !== undefined) {

                // Apply gravity
                if (isJumping || !isOnGround) {
                    setVelocity((vel) => ({ ...vel, y: vel.y + gravity }))
                }

                // Update position
                setPosition((pos) => {
                    let newPos = { ...pos, x: pos.x + velocity.x, y: pos.y + velocity.y }
                    
                    // Check if the character has walked off a platform
                    checkWalkOffPlatform(newPos)

                    // Check if character reached goal
                    if (newPos.y < 0 && !hasReachedGoal) {
                        setHasReachedGoal(true)
                    }
                    
                    // Check collision with platforms
                    const platformY = checkPlatformCollision(newPos)
                    if (platformY !== null) {
                        newPos.y = platformY
                        setIsJumping(false)
                        setIsOnGround(true)
                        setVelocity((vel) => ({ ...vel, y: 0 }))
                    } else if (newPos.y >= floorLevel) {
                        newPos.y = floorLevel
                        setIsJumping(false)
                        setIsOnGround(true)
                        setVelocity((vel) => ({ ...vel, y: 0 }))
                    }
                    return newPos
                })

                // Move character
                if (movingRef.current.left) {
                    setPosition((pos) => ({ ...pos, x: pos.x - 0.5 }))
                }
                if (movingRef.current.right) {
                    setPosition((pos) => ({ ...pos, x: pos.x + 0.5 }))
                }
            } else {
                previousTimeRef.current = time
            }
            requestRef.current = requestAnimationFrame(animate)
        }

        requestRef.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(requestRef.current)
    }, [charAnimation, isJumping, velocity])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress)
        window.addEventListener('keyup', handleKeyUp)
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [isJumping, handleKeyPress])

    useEffect(() => {
        if (hasReachedGoal) {
            loadNewStage(position.x)
            setPosition({x: 0, y: 84 })
            setVelocity({x: 0, y: 84 })
            setHasReachedGoal(false)
        }
    }, [hasReachedGoal, loadNewStage, position.x])

    //const spriteSize = spriteDim/window.innerWidth;

    return (
        <div>
            <div
                style={{
                    position: 'absolute',
                    left: `${position.x}vw`,
                    bottom: `${100-position.y}vh`,
                    width: `${spriteDim}vw`,
                    height: `${spriteDim}vw`,
                    backgroundImage: `url(${charAnimation})`,
                    backgroundSize: 'cover',
                    imageRendering: 'pixelated',
                    transform: direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)', // Flip sprite by movement dir
                    transition: 'transform 0.1s', // Smooth transition for flipping
                    zIndex: 2,
                }}
            />
        </div>
    )
}

export default Character
