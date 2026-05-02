import { useEffect, useState } from "react";
import { fetchCourses } from "../api/courses";
import styled from "styled-components";
import { motion } from "framer-motion";

/* PAGE */
const Page = styled.div`
  padding: 30px;
`;

/* TITLE */
const Heading = styled.h1`
  margin-bottom: 20px;
`;

/* GRID */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
`;

/* CARD */
const Card = styled(motion.div)`
  background: ${({ theme }) => theme.card || "#1a1a1a"};
  color: ${({ theme }) => theme.text || "white"};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
  }
`;

/* IMAGE */
const Image = styled.div`
  height: 150px;
  background: linear-gradient(135deg, #00c2ff, #7b2ff7);
`;

/* CONTENT */
const Content = styled.div`
  padding: 15px;
`;

const Title = styled.h3`
  margin-bottom: 8px;
`;

const Desc = styled.p`
  font-size: 14px;
  opacity: 0.7;
`;

const Tag = styled.span`
  display: inline-block;
  margin-top: 10px;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 6px;
  background: #00c2ff;
  color: black;
`;

function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses().then(setCourses);
  }, []);

  return (
    <Page>
      <Heading>Dashboard 📚</Heading>

      <Grid>
        {courses.map((course, index) => (
          <Card
            key={course.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image />

            <Content>
              <Title>{course.title}</Title>

              <Desc>
                Learn this course and build real-world projects.
              </Desc>

              <Tag>{course.level}</Tag>
            </Content>
          </Card>
        ))}
      </Grid>
    </Page>
  );
}

export default Dashboard;