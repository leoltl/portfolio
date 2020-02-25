import React, { useState, useEffect, useRef } from "react"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import Project from "./project"
import ProjectCard from "./project-card"

import "./projects.scss"

function useDetectCoord() {}

const handleGA = () => {
  trackCustomEvent({
    category: "Show More Click",
    action: "Click",
  })
}

const Projects = ({ projects }) => {
  const [showMore, setShowMore] = useState(false)
  const pj = useRef(null)

  useEffect(() => {
    const debouncedCheck = debounce(e => {
      const cards = pj.current.childNodes
      cards.forEach(card => {
        const ElPosition = card.getBoundingClientRect()
        if (
          ElPosition.bottom > 0 &&
          ElPosition.top + ElPosition.height / 2 <= window.innerHeight
        ) {
          card.classList.add("shifted")
        }
      })
    })

    document.addEventListener("scroll", debouncedCheck)

    function debounce(func, wait = 20, immediate = true) {
      var timeout
      return function() {
        var context = this,
          args = arguments
        var later = function() {
          timeout = null
          if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
      }
    }
  }, [pj])
  return (
    <section className="projects" id="projects">
      <h3>
        <small>02.</small> Projects
      </h3>

      <div className="projects__feature-project" ref={pj}>
        {projects.map((p, i) =>
          p.featured ? <Project key={i} project={p} idx={i} /> : null
        )}
      </div>

      {showMore && (
        <div className="projects__project-group">
          {projects.map((p, i) =>
            !p.featured ? (
              <ProjectCard key={i} project={p} shifted={true} />
            ) : null
          )}
        </div>
      )}

      <button
        className="button projects__button"
        onClick={() => {
          setShowMore(prev => !prev)
          handleGA()
        }}
      >
        {showMore ? "Hide " : "Show More"}
      </button>
    </section>
  )
}

export default Projects
