import React from "react";
import { Draggable, Id } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  padding: 10px;
  background-color: ${(props) =>
    props.isDragging ? "#ffbe76" : props.theme.cardColor};
  margin-bottom: 10px;
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0,0,0,0.8)" : "none"};
`;

interface IDraggableCardProps {
  toDo: string;
  index: number;
}
function DraggableCard({ toDo, index }: IDraggableCardProps) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {/* Draggable의 key와 draggableId는 반드시 같아야 함. */}
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}
// prop이 변하지 않았다면 DraggableCard를 rerender하지 말라고 하는 것
export default React.memo(DraggableCard);
