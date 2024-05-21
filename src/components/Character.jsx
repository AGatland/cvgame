/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react'
import spriteSheet from '../assets/DinoSpritesVita.png'

function Character({ platforms, platformWidth, initialCharacterPos, loadNewStage }) {
    // Const definitions
    const gravity = 0.5
    const jumpStrength = 10
    const floorLevel = initialCharacterPos.y // Variable for the floor position

    // States
    const [position, setPosition] = useState(initialCharacterPos)
    const [velocity, setVelocity] = useState({ x: 0, y: 0 })
    const [frame, setFrame] = useState(0) // Track the current animation frame
    const [animationStart, setAnimationStart] = useState(0)
    const [animationLength, setAnimationLength] = useState(4)
    const [direction, setDirection] = useState('right') // Track the direction
    const [isJumping, setIsJumping] = useState(false) // Track jumping state
    const [isOnGround, setIsOnGround] = useState(true) // Track if the character is on the ground
    const [platformOn, setPlatformOn] = useState(null)
    const [hasReachedGoal, setHasReachedGoal] = useState(false)

    // Refs
    const requestRef = useRef()
    const previousTimeRef = useRef()
    const movingRef = useRef({ left: false, right: false })

    const handleKeyPress = (event) => {
        const { key } = event

        if (key === 'ArrowDown') {
            console.log("Go down")
            // Not yet implemented, will be used to go to a new screen where you climb down a rope. But this can be its own component and all that stuff.
        }
        if (key === 'ArrowLeft') {
            setAnimationStart(4)
            setAnimationLength(6)
            setDirection('left')
            movingRef.current.left = true
        }
        if (key === 'ArrowRight') {
            setAnimationStart(4)
            setAnimationLength(6)
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
            setAnimationLength(4)
            setAnimationStart(0)
        }
    }

    const checkPlatformCollision = (newPos) => {
        for (const platform of platforms) {
            if (
                newPos.x + 50 > platform.x && // Character's right side is beyond platform's left side
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
            if (newPos.x + 50 < platformOn.x || newPos.x > platformOn.x + platformWidth) {
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
                const deltaTime = time - previousTimeRef.current
                if (deltaTime > 150) { // Change frame every 150ms
                    setFrame((prevFrame) => (prevFrame + 1) % animationLength)
                    previousTimeRef.current = time
                }

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
                    setPosition((pos) => ({ ...pos, x: pos.x - 5 }))
                }
                if (movingRef.current.right) {
                    setPosition((pos) => ({ ...pos, x: pos.x + 5 }))
                }
            } else {
                previousTimeRef.current = time
            }
            requestRef.current = requestAnimationFrame(animate)
        }

        requestRef.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(requestRef.current)
    }, [animationLength, isJumping, velocity])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress)
        window.addEventListener('keyup', handleKeyUp)
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [isJumping])

    useEffect(() => {
        if (hasReachedGoal) {
            loadNewStage(position.x)
            setVelocity({x: 0, y: 800 })
            setHasReachedGoal(false)
        }
    }, [hasReachedGoal, loadNewStage, position.x])

    const spriteWidth = 50 // Width of a single frame
    const spriteHeight = 50 // Height of a single frame

    return (
        <div>
            <div
                style={{
                    position: 'absolute',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: `${spriteWidth}px`,
                    height: `${spriteHeight}px`,
                    backgroundImage: `url(${spriteSheet})`,
                    backgroundPosition: `-${(frame + animationStart) * spriteWidth}px 0px`, // Move the sprite sheet background
                    backgroundSize: 'cover',
                    transform: direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)', // Flip sprite by movement dir
                    transition: 'transform 0.1s' // Smooth transition for flipping
                }}
            />
        </div>
    )
}

export default Character
