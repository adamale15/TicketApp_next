import { initialTickets } from "@/data";

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId);
  if (!ticket) {
    return <div>Ticket not found!</div>;
  }
  return (
    <div>
      <h1 className="text-lg">{ticket.title}</h1>
      <p>{ticket.content}</p>
    </div>
  );
};

export default TicketPage;
