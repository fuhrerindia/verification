<!-- ELEMENT IMPORTED -->
<?php
    function g_focus($id){
        ?>
            <script>
                document.getElementById(<?php echo $id; ?>).focus();
            </script>
        <?php
    }
?>