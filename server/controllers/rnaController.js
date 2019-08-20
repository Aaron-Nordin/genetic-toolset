module.exports = {
  createRNA: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { geneId: gene_id, rna: rna_seq } = req.body;
      const newRNA = await db.create_rna({ gene_id, rna_seq });
      const newRNAId = newRNA[0].rna_id;
      const updatedGene = await db.update_gene({ gene_id, rna_id: newRNAId });
      res.status(200).send(updatedGene[0]);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
