# PR: Add bulk delete for tasks

**Branch:** `feature/bulk-delete-tasks`
**Opened by:** a teammate (drafted with AI assistance)
**Description from the PR:** "Adds a `POST /tasks/bulk-delete` endpoint so users can select
multiple tasks in the UI and delete them all in one request, instead of deleting one at a time."

Below is the diff. Review it as if you're about to approve and merge it.

```diff
diff --git a/routes/tasks.js b/routes/tasks.js
index 1a2b3c4..5d6e7f8 100644
--- a/routes/tasks.js
+++ b/routes/tasks.js
@@ -1,6 +1,7 @@
 const express = require('express');
 const router = express.Router();
 const { readDB, writeDB, delay } = require('../db');
 const { notifyAssignee } = require('../utils/notify');
+const { readDB: readDB2 } = require('../db');

 // GET /tasks?page=1&pageSize=5
 router.get('/', async (req, res) => {
@@ -60,6 +61,25 @@ router.patch('/:id/complete', async (req, res) => {
   res.json(task);
 });

+// POST /tasks/bulk-delete
+// Body: { ids: [1, 2, 3] }
+router.post('/bulk-delete', async (req, res) => {
+  const { ids } = req.body;
+
+  for (const id of ids) {
+    const db = await readDB();
+    db.tasks = db.tasks.filter((t) => t.id !== id);
+    await writeDB(db);
+  }
+
+  res.status(200).json({ message: 'Tasks deleted successfully' });
+});
+
 // DELETE /tasks/:id
 router.delete('/:id', async (req, res) => {
   const db = await readDB();
```

## Notes from the author

"Tested locally with a few task IDs and it worked fine — same pattern as the existing
single-delete endpoint, just looped. Should be good to merge, this unblocks the bulk-select
UI that's already built on the frontend."
