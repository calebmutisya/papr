// app/[category]/page.tsx
import React from 'react'

// Notice we accept a `params` prop which contains the dynamic segment
function CategoryPage({ params }: { params: { category: string } }) {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold capitalize">{params.category} Category</h1>
      <p>Here are some posts for the {params.category} category.</p>
    </div>
  )
}

export default CategoryPage
