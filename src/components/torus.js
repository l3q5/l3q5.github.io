import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function Torus() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const renderer = new THREE.WebGLRenderer({ canvas })
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    )
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.position.setZ(20)

    renderer.render(scene, camera)

    window.addEventListener('resize', onWindowResize, false)

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight

      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.enablePan = false
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 5

    // Torus

    const geometry = new THREE.SphereGeometry(3, 64, 64)
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ff83
    })
    const torus = new THREE.Mesh(geometry, material)

    scene.add(torus)

    // Lights

    const pointLight = new THREE.PointLight(0xffffff, 1, 100)
    pointLight.position.set(0, 20, 10)

    scene.add(pointLight)

    // Animation Loop

    function animate() {
      requestAnimationFrame(animate)
      controls.update()

      // controls.update();

      renderer.render(scene, camera)
    }

    animate()
  }, [])

  return (
    <div className="pt-16">
      <canvas ref={canvasRef} />
    </div>
  )
}
