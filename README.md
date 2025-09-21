# Geometry engineering

This repo represents my path to become a Geometry Software Engineer.

## Why I'm doint it?

Because it's necessary at my current job at Dandy. I need to attend for some 3D CAD software tasks without previous experience, and I need to learn it fast.

## What's the roadmap?

I used ChatGPT to understand from where should I start, then I ended up in a [Coursera Linear Algebra Course](https://www.coursera.org/learn/linear-algebra-machine-learning) for Geometry Engineering, asked to ChatGPT what he(she) thinks about it and the course has some gaps. So in order to get the maximum from Coursera, I'm following this roadmap:

# 🎯 How to Use the Coursera Linear Algebra Course for Geometry Engineering

---

## 📍 Before the Course (1–2 weeks prep)

Purpose: set context so you see connections right away.

- **Brush up graphics basics**

  - Read the _Transforms_ section in the [Three.js Fundamentals](https://threejs.org/manual/#en/fundamentals).
  - Review 4×4 transformation matrices: translation, rotation, scale, projection.

- **Practical mini-exercise**

  - Load a tooth STL in THREE.js.
  - Apply rotation + translation manually using a 4×4 matrix.
  - Compare with built-in `matrixWorld`.
    👉 This anchors why vectors/matrices matter.

---

## 📍 During the Course (main modules)

### Module 1: Vectors

- **Course teaches**: vector basics, operations, linear combinations.
- **Your CAD adaptation**:

  - Implement ray ↔ plane intersection in TS.
  - Use dot product to check if a drilling direction is perpendicular to a surface normal.
    👉 Builds intuition for mesh selection and alignment.

---

### Module 2: Vectors in Depth

- **Course teaches**: inner product, projections, linear independence.
- **Your CAD adaptation**:

  - Implement projection of a 3D point onto a cutting plane (used in slicing).
  - Use cross product to compute a normal vector for a triangle face.
    👉 Basis for mesh editing, clipping, and rendering normals.

---

### Module 3: Matrices

- **Course teaches**: transformations, inverses, determinants.
- **Your CAD adaptation**:

  - Write a function that takes an STL tooth mesh and applies a custom affine transform matrix.
  - Compute determinant of a transform matrix to detect if it flips normals (mirror transforms).
    👉 This is exactly what you’ll use for positioning and aligning dental components.

---

### Module 4: Further Matrix Topics

- **Course teaches**: change of basis, orthogonality, Gram-Schmidt.
- **Your CAD adaptation**:

  - Compute a local coordinate system for a tooth using Gram-Schmidt on its bounding box.
  - Align two scans by re-expressing them in a shared orthogonal basis.
    👉 Leads into ICP (Iterative Closest Point), a core dental alignment algorithm.

---

### Module 5: Eigenvalues and Eigenvectors

- **Course teaches**: eigen decomposition, diagonalisation, applications.
- **Your CAD adaptation**:

  - Apply PCA to a point cloud of a jaw scan → extract principal axes.
  - Use eigen decomposition to compute best-fit bounding box of a mesh.
    👉 Critical for auto-aligning scans and analyzing shape variation.

---

## 📍 After the Course (fill the gaps)

The course gives you **math intuition**, but you need **geometry engineering tools**:

1. **Geometry Processing**

   - Resource: _Polygon Mesh Processing_ (Botsch et al., free PDF).
   - Learn mesh smoothing, decimation, boolean ops.
     👉 Directly applies to gingiva segmentation and prep margin refinement.

2. **Computational Geometry Algorithms**

   - Resource: _Computational Geometry: Algorithms and Applications_ (de Berg et al.).
   - Learn convex hulls, triangulation, Voronoi, intersection tests.
     👉 Needed for cutting planes, merging meshes, and remeshing.

3. **Numerical Stability**

   - Resource: _Numerical Recipes_ (select chapters).
   - Learn how to handle floating-point precision, conditioning, error propagation.
     👉 Crucial for dental CAD, since STL scans are noisy and small features matter.

4. **Practical Projects**

   - Build a **mesh cutter**: take a plane, slice an STL, produce two watertight meshes.
   - Build a **registration demo**: align two tooth scans with PCA → refine with ICP.
   - Build a **prep margin detector**: find contour line around a prepared tooth using curvature + edge detection.

---

## 🗺️ Roadmap Overview

1. **Prep** → Graphics transforms + mini demo in THREE.js.
2. **Course** → Do each module + apply it to a geometry mini-project.
3. **Post-course** → Dive into geometry processing + computational geometry books.
4. **Projects** → Cut, align, and segment dental meshes.

---
