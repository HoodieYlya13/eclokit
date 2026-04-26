"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";import { Bloom, EffectComposer } from "@react-three/postprocessing";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        Box3_InnerLayer_0: THREE.Mesh;
        Box3_LidInnerLayer_0001: THREE.Mesh;
        "eclokit-logo-inner": THREE.Mesh;
        Box3_LidInnerLayer_0002: THREE.Mesh;
        Box3_LidOuterLayer_0001: THREE.Mesh;
        "eclokit-logo-outer": THREE.Mesh;
        Box3_LidOuterLayer_0002: THREE.Mesh;
        Box3_OuterLayer_0: THREE.Mesh;
    };
    materials: {
        Boxes: THREE.MeshStandardMaterial;
        "eclokit-box": THREE.MeshStandardMaterial;
        WhiteCardboard: THREE.MeshStandardMaterial;
        "eclokit-box.001": THREE.MeshStandardMaterial;
    };
};

function BoxContent(props: React.JSX.IntrinsicElements["group"]) {
	const { nodes, materials } = useGLTF("/box.glb") as unknown as GLTFResult;

	const mainGroupRef = useRef<THREE.Group>(null);
	const lid1Ref = useRef<THREE.Group>(null);
	const lid2Ref = useRef<THREE.Group>(null);

	const glowMaterialRef = useRef<THREE.MeshStandardMaterial>(null);
	const pointLightRef = useRef<THREE.PointLight>(null);
	const floatingGroupRef = useRef<THREE.Group>(null);
	const timeRef = useRef(0);

	const isOpen = useRef(false);

	useFrame((state, delta) => {
		// 1. Existing floating animation
		if (floatingGroupRef.current) {
			timeRef.current += delta;
			const t = timeRef.current;

			floatingGroupRef.current.position.y = Math.sin(t) * 0.1;
			floatingGroupRef.current.rotation.z = Math.sin(t * 0.5) * 0.02;
			floatingGroupRef.current.rotation.x = Math.cos(t * 0.5) * 0.02;
		}

		// 2. NEW: Mouse proximity lighting logic
		if (isOpen.current && glowMaterialRef.current && pointLightRef.current) {
			// state.pointer is normalized between -1 and 1. Center is (0,0).
			// Calculate distance from center (Pythagorean theorem)
			const distance = Math.sqrt(state.pointer.x * state.pointer.x + state.pointer.y * state.pointer.y);

			// Cap the distance at 1 (the edges of the screen)
			const clampedDistance = Math.min(distance, 1);

			// Invert it so 1 is dead center, 0 is the edge
			const proximity = 1 - clampedDistance;

			// Calculate target values based on proximity
			// Emissive: base 3, max 5
			const targetEmissive = 3 + 2 * proximity;
			// Light: base 8, max 20
			const targetLight = 8 + 12 * proximity;

			// Smoothly interpolate current values towards targets using lerp
			// Using delta * 5 ensures smooth easing independent of frame rate
			glowMaterialRef.current.emissiveIntensity = THREE.MathUtils.lerp(
				glowMaterialRef.current.emissiveIntensity,
				targetEmissive,
				delta * 5,
			);

			pointLightRef.current.intensity = THREE.MathUtils.lerp(
				pointLightRef.current.intensity,
				targetLight,
				delta * 5,
			);
		}
	});

	useGSAP(() => {
		if (
			!mainGroupRef.current ||
			!lid1Ref.current ||
			!lid2Ref.current ||
			!glowMaterialRef.current ||
			!pointLightRef.current
		)
			return;

		const tl = gsap.timeline({ delay: 0.1 });

		gsap.set(mainGroupRef.current.position, { z: -10, y: -0.5 });
		gsap.set(mainGroupRef.current.scale, { x: 0.6, y: 0.6, z: 0.6 });
		gsap.set(mainGroupRef.current.rotation, { y: -Math.PI });
		gsap.set(glowMaterialRef.current, { emissiveIntensity: 0 });
		gsap.set(pointLightRef.current, { intensity: 0 });

		tl.to(mainGroupRef.current.position, { z: 0, y: -0.5, duration: 2.5, ease: "power2.inOut" }, 0);
		tl.to(mainGroupRef.current.rotation, { y: Math.PI / 6, duration: 2.5, ease: "power2.inOut" }, 0);
		tl.to(mainGroupRef.current.scale, { x: 1, y: 1, z: 1, duration: 2.5, ease: "power2.inOut" }, 0);

		tl.to(lid1Ref.current.rotation, { y: 0, duration: 1.5, ease: "power3.out" }, 2.0);

		tl.to(lid2Ref.current.rotation, { y: 0, duration: 1.2, ease: "power3.out" }, 2.3);

		tl.to(glowMaterialRef.current, { emissiveIntensity: 2, duration: 1.5, ease: "power2.inOut" }, 2.0);

		tl.to(
			pointLightRef.current,
			{
				intensity: 8,
				duration: 1.5,
				ease: "power2.inOut",
				onComplete: () => {
					isOpen.current = true; // Mark as ready for proximity interactions
				},
			},
			2.0,
		);
	});

	return (
		<group ref={mainGroupRef} {...props} dispose={null}>
			<group ref={floatingGroupRef}>
				<group position={[0, 0.385, 0]}>
					<mesh>
						<boxGeometry args={[3.35, 0.76, 2.22]} />
						<meshStandardMaterial
							ref={glowMaterialRef}
							color="#ffffff"
							emissive="#ffda85"
							emissiveIntensity={0}
							toneMapped={false}
						/>
					</mesh>

					<pointLight
						ref={pointLightRef}
						position={[0, 0.5, 0]}
						intensity={0}
						color="#ffda85"
						distance={8}
						decay={1.5}
					/>
				</group>

				<group rotation={[0, -Math.PI / 2, 0]}>
					<group scale={0.01}>
						<group position={[0, 38.925, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
							<mesh geometry={nodes.Box3_InnerLayer_0.geometry} material={materials.Boxes} />
							<mesh geometry={nodes.Box3_OuterLayer_0.geometry} material={materials.WhiteCardboard} />

							<group ref={lid1Ref} position={[-1.123, 0, 0.392]} rotation={[0, (7.1 * Math.PI) / 10, 0]}>
								<mesh geometry={nodes.Box3_LidInnerLayer_0001.geometry} material={materials.Boxes}>
									<mesh
										geometry={nodes["eclokit-logo-inner"].geometry}
										material={materials["eclokit-box"]}
										position={[-0.718, 0, 0.951]}
										rotation={[-Math.PI, 0.656, -Math.PI / 2]}
										scale={2.348}
									/>
								</mesh>

								<mesh geometry={nodes.Box3_LidOuterLayer_0001.geometry} material={materials.WhiteCardboard}>
									<mesh
										geometry={nodes["eclokit-logo-outer"].geometry}
										material={materials["eclokit-box.001"]}
										position={[-0.768, 0, 0.961]}
										rotation={[-Math.PI, 0.657, 1.571]}
										scale={2.348}
									/>
								</mesh>

								<group ref={lid2Ref} position={[-1.401, 0, 1.811]} rotation={[0, (6.1 * Math.PI) / 10, 0]}>
									<mesh geometry={nodes.Box3_LidInnerLayer_0002.geometry} material={materials.Boxes} />
									<mesh
										geometry={nodes.Box3_LidOuterLayer_0002.geometry}
										material={materials.WhiteCardboard}
									/>
								</group>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/box.glb");

export default function MagicBoxScene() {
    return (
        <Canvas camera={{ position: [0, 2.5, 10], fov: 45 }} gl={{ premultipliedAlpha: false }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1} color="#ffda85" />
            <directionalLight position={[-5, 5, 2]} intensity={0.3} />

            <OrbitControls
                enablePan={false}
                enableZoom={false}
                minDistance={3}
                maxDistance={15}
                maxPolarAngle={Math.PI / 2 + 0.1}
            />

            <Suspense fallback={null}>
                <BoxContent position={[0, -1.25, -0.75]} />
            </Suspense>

            <EffectComposer>
                <Bloom luminanceThreshold={1.2} mipmapBlur intensity={0.8} />
            </EffectComposer>
        </Canvas>
    );
}