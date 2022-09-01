package com.example.fechadurasdigitais

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import com.google.android.material.appbar.MaterialToolbar

class Fde300wPage : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_fde300w_page)

        val mainToolBar = findViewById<MaterialToolbar>(R.id.mainToolBar)
        val btnComprarFde300w = findViewById<Button>(R.id.btnComprarFde300w)

        mainToolBar.setNavigationOnClickListener {
            Toast.makeText(this, "Hamburger pressionado!!!", Toast.LENGTH_SHORT).show()
        }

        mainToolBar.setOnMenuItemClickListener { menuItem ->
            when (menuItem.itemId) {
                R.id.menu_item_notifications -> {
                    Toast.makeText(this, "Ir para a página de notificações!!!", Toast.LENGTH_SHORT).show()

                    true
                }
                R.id.menu_item_cart -> {
                    Toast.makeText(this, "Ir para a página de carrinho!!!", Toast.LENGTH_SHORT).show()

                    true
                }
                else -> false
            }
        }

        btnComprarFde300w.setOnClickListener {
            Toast.makeText(this, "Ainda não implementado!", Toast.LENGTH_LONG).show()
        }
    }
}