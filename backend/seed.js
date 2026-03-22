import mongoose from "mongoose";
import Client from "./models/Client.js";
import Task from "./models/Task.js";
import dotenv from "dotenv";
dotenv.config();
import dns from "dns";

dns.setServers(["1.1.1.1" ,"8.8.8.8"]);
mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Client.deleteMany();
  await Task.deleteMany();

  const client1 = await Client.create({
    company_name: "ABC Pvt Ltd",
    country: "India",
    entity_type: "Private",
  });

  const client2 = await Client.create({
    company_name: "XYZ Ltd",
    country: "USA",
    entity_type: "Public",
  });

  await Task.create([
    {
      client_id: client1._id,
      title: "GST Filing",
      category: "Tax",
      due_date: new Date("2026-03-10"),
    },
    {
      client_id: client1._id,
      title: "Annual Compliance",
      category: "Compliance",
      due_date: new Date("2026-04-01"),
    },
  ]);

  console.log("Data Seeded!");
  process.exit();
});

