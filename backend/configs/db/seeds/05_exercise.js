exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("exercise")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("exercise").insert([
        {
          id: "1392536e-fae4-42f5-8100-66019c603b8e",
          wger_id: 345,
          category: 10,
          sets: 2,
          reps: 3,
          workout_id: "e13c35e5-dc9c-4be0-96f8-e32e0f814dd8",
        },
        {
          id: "978d9a66-efd8-4fb1-a493-520452571dc3",
          wger_id: 343,
          category: 10,
          sets: 2,
          reps: 3,
          workout_id: "e13c35e5-dc9c-4be0-96f8-e32e0f814dd8",
        },
        {
          id: "7d3d2a6e-9d56-43fc-a120-bb27a5643185",
          wger_id: 145,
          category: 10,
          sets: 2,
          reps: 3,
          workout_id: "e13c35e5-dc9c-4be0-96f8-e32e0f814dd8",
        },
        {
          id: "d5cc00a4-1169-42c4-8b51-abca4ffaae41",
          wger_id: 345,
          category: 10,
          sets: 2,
          reps: 3,
          workout_id: "c9fe1490-a573-4fe2-b805-a0f230b13092",
        },
        {
          id: "59e64e35-9efe-4fe2-b81d-23867410b486",
          wger_id: 343,
          category: 10,
          sets: 2,
          reps: 3,
          workout_id: "c9fe1490-a573-4fe2-b805-a0f230b13092",
        },
        {
          id: "f7bb6025-f496-4f3f-bf9b-1265c3f97e00",
          wger_id: 145,
          category: 10,
          sets: 2,
          reps: 3,
          workout_id: "c9fe1490-a573-4fe2-b805-a0f230b13092",
        },
        {
          id: "6908e212-c294-4225-86a5-1f48ac9c9984",
          wger_id: 345,
          category: 10,
          sets: 2,
          reps: 3,
          workout_id: "ca3ca546-d806-45e4-bc1f-ce489d94d97e",
        },
        {
          id: "0f81612c-ea9b-4481-875e-d2da49542ac5",
          wger_id: 343,
          category: 10,
          sets: 2,
          reps: 3,
          workout_id: "ca3ca546-d806-45e4-bc1f-ce489d94d97e",
        },
        {
          id: "5054bc5f-6fa5-43be-a9b5-40b40dd3409d",
          wger_id: 145,
          category: 10,
          sets: 2,
          reps: 3,
          workout_id: "ca3ca546-d806-45e4-bc1f-ce489d94d97e",
        },
      ]);
    });
};
