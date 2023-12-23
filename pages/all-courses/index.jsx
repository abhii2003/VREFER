import React, { useState } from "react";
import styles from "@/styles/allCourses/allcourses.module.scss"
import Cards from '@/components/course_card';
import Courses from "@/data/courses.json";

export default function All_courses() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <>
            <section data-scroll-section className={styles.All_courses}>
                <div className={styles.sectionWrapper}>
                    <h1 className={styles.allTitle}>
                        All Courses
                    </h1>
                    <div className={styles.search}>
                        <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }} />
                    </div>
                    <div className={styles.allCards}>
                        {Courses.filter((val) => {
                            if (searchTerm == "") {
                                return val;
                            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        }).map((course) => (
                            <Cards
                                key={course.id}
                                id={course.id}
                                title={course.name}
                                description={course.details}
                            />
                        ))}
                    </div>

                </div>

            </section>

        </>
    )
}