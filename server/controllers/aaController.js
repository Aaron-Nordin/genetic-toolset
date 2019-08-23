module.exports = {
  createAA: async (req, res) => {
    try {
      const db = req.app.get("db");
      var { userId: user_id, rna: rna_seq, aa: aa_seq } = req.body;
      const genesArr = await db.get_genes(user_id);
      let matchRNAId = null;
      genesArr.forEach(gene => {
        if (gene.rna_seq === rna_seq) {
          matchRNAId = gene.rna_id;
        }
      });
      const newAA = await db.create_aa({ user_id, aa_seq });
      // eslint-disable-next-line no-redeclare
      var { aa_id, user_id } = newAA[0];
      const updatedGene = await db.update_gene({
        user_id,
        rna_id: matchRNAId,
        aa_id
      });
      res.status(200).send(updatedGene[0]);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
